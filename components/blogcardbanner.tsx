import Image from "next/image";
import Link from "next/link";
import { IArticle } from "types";

interface IPropType {
    article: IArticle
}

const BlogCardBanner = ({ article }: IPropType) => {
    return (
        <div className="bg-gradient-to-r from-violet-500 to-violet-900 rounded-md flex items-center h-64">
            <Link href={`/article/${article.attributes.Slug}`}>
                <span className="text-xl w-2/3 text-white p-6 font-bold after:bg-primary after:block after:w-16 after:h-1 after:rounded-md after:mt-2 cursor-pointer ">
                    {article.attributes.Title}
                </span>
            </Link>
            <Image src="/gitbook.svg" width={140} height={140} className="ml-10" />
        </div>
    );
}

export default BlogCardBanner;