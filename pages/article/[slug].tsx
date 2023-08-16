import qs from "qs"
import { GetServerSideProps } from "next";
import { AxiosResponse } from "axios";
import { IArticle, ICollectionResponse } from "types";
import { fetchArticleBySlug } from "service";
import { fetchArticles } from "service";
import Article from "components/article";
import Head from "next/head";
import Image from "next/image";
import { formatDate } from "utils";
import AuthorInfo from "components/authorinfo";
import { serializedMarkDown } from "utils";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";





interface IPropType {
    article: IArticle;
    notFound?: boolean
}

const Slug = ({ article, notFound = false }: IPropType) => {
    return (
        <>
            <Head>
                <title>{article.attributes.Title}</title>
            </Head>
            <div className="my-12 grid lg:grid-cols-3 gap-12 single-article">
                <div className="col-span-2">
                    <h1 className="text-3xl font-bold py-2">{article.attributes.Title}</h1>
                    <AuthorInfo article={article} />
                    <div className="text-lg text-gray-600 leading-8">
                        <img src={`http://127.0.0.1:1337${article.attributes.Image.data.attributes.url}`} className="w-full my-12 mb-6" alt={article.attributes.Title} />
                        <MDXRemote {...article.attributes.body as MDXRemoteSerializeResult} />
                    </div>
                </div>
                <div className="">
                    right
                </div>
            </div>
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const queryString = qs.stringify({
        populate: ['Image', 'author.avatar'],
        filters: {
            Slug: {
                $eq: query.slug
            }
        }
    })

    const { data: articles }: AxiosResponse<ICollectionResponse<IArticle[]>> = await fetchArticleBySlug(queryString);

    if (articles.data.length === 0) {
        return {
            notFound: true
        }
    }
    return {
        props: {
            article: await serializedMarkDown((articles.data[0]))
        }
    }
}


export default Slug;