import { AxiosResponse } from "axios";
import Tabs from "components/tabs";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { fetchCategories, fetchArticles } from "service";
import { ICollectionResponse, ICategory, IPagination, IArticle } from "types";
import qs from "qs"
import ArticleList from "components/articlelist";
import { makeCategory } from "utils";
import { capitalizeFirstLetter } from "utils";
import Pagination from "components/pagination";
import { useRouter } from "next/router";
import { debounce } from "utils";
import { IQueryOptions } from "types";


interface IPropType {
    categories: {
        items: ICategory[];
        pagination: IPagination;
    },
    articles: {
        items: IArticle[];
        pagination: IPagination;
    },
    slug: string;
}

const Category = ({ categories, articles, slug }: IPropType) => {


    const { page, pageCount } = articles.pagination;
    const router = useRouter()
    const { category: categorySlug } = router.query;

    const formattedCategory = () => {
        return capitalizeFirstLetter(slug);
    }

    const handleOnSearch = (query: string) => {
        router.push(`/category/${categorySlug}/?search=${query}`)
    }

    return (
        <>

            <Head>
                <title>codersblog | {formattedCategory()} </title>
            </Head>
            <Tabs categories={categories.items} handleOnSearch={debounce(handleOnSearch, 500)} />
            <ArticleList articles={articles.items} />
            <Pagination page={page} pageCount={pageCount} redirectUrl={`/category/${categorySlug}`} />
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    console.log("requesting....")
    const options: Partial<IQueryOptions> = {
        populate: ["author.avatar"],
        sort: ["id:desc"],
        filters: {
            category: {
                Slug: query.category
            }
        },
        pagination: {
            page: query.page ? +query.page : 1,
            pageSize: 1
        },

    }

    if (query.search) {
        options.filters = {
            Title: {
                $containsi: query.search
            }
        }
    }
    const queryString = qs.stringify(options)

    const { data: articles }: AxiosResponse<ICollectionResponse<IArticle[]>> = await fetchArticles(queryString);
    const { data: categories }: AxiosResponse<ICollectionResponse<ICategory[]>> = await fetchCategories();
    return {
        props: {
            categories: {
                items: categories.data,
                pagination: categories.meta.pagination
            },
            articles: {
                items: articles.data,
                pagination: articles.meta.pagination
            },
            slug: query.category,
        }
    }
}

export default Category;