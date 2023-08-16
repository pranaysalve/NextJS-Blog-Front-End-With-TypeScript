import Image from "next/image";
import Link from "next/link";
import { IArticle } from "types";
import { formatDate } from "utils";
import AuthorInfo from "./authorinfo";

interface IPropType {
    article: IArticle;
}

const Blogcard = ({ article }: IPropType) => {
    return (
        <div className="pb-8">
            <Link href={`/article/${article.attributes.Slug}`}>
                <h1 className="text-xl text-gray-600 font-bold hover:decoration-2 hover:underline hover:cursor-pointer hover:decoration-primary">
                    {article.attributes.Title}
                </h1>
            </Link>
            <AuthorInfo article={article} />
            <div>
                <p className="text-gray-500">{article.attributes.Body.substring(0, 300) + "......"}<Link href={"#"} target="_blank" className=" text-primary deoration-2 hover:underline hover:decoration-primary-dark hover:text-primary-dark">[ReadMore]</Link></p>
            </div>
        </div>
    );
}

export default Blogcard;