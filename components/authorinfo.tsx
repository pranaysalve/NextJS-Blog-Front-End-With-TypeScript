import Image from "next/image";
import { formatDate } from "utils";

const AuthorInfo = ({ article }) => {
    return (
        <>
            <div className="flex items-center my-4">
                <div className="mr-2 rounded-lg overflow-hidden flex items-center justify-center">
                    <Image src={`http://127.0.0.1:1337${article.attributes.author.data.attributes.avatar.data.attributes.formats.thumbnail.url}`} width={40} height={40} />
                </div>
                <span className="text-sm font-bold text-gray-600">
                    {article.attributes.author.data.attributes.firstname} {article.attributes.author.data.attributes.lastname} {" "}
                    -
                    <span className="text-gray-400"> {formatDate(article.attributes.createdAt)}</span>
                </span>
            </div>
        </>
    );
}

export default AuthorInfo;