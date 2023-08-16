import { IArticle } from "types";
import Blogcard from "./blogcard";
import BlogCardBanner from "./blogcardbanner";

interface IPropType {
    articles: IArticle
}

const ArticleList = ({ articles }: IPropType) => {
    // console.log(articles)
    return (
        <div className="grid lg:grid-cols-2 gap-16 mt-16">
            {
                articles.map((article, idx) => {
                    return (
                        <div key={article.id} className="">
                            {idx === 1 ? <BlogCardBanner article={article} /> : <Blogcard article={article} />}
                        </div>
                    )
                    // return <Blogcard article={article} key={article.id} />
                })
            }
        </div>
    );
}

export default ArticleList;