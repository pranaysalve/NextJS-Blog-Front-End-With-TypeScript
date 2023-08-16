import { TDirection } from "types";
import qs from "qs"
import { useRouter } from "next/router";

interface IPropType {
    page: number;
    pageCount: number;
    redirectUrl?: string;
}


const Pagination = ({ page, pageCount, redirectUrl = "/" }: IPropType) => {

    const router = useRouter();

    const isNextDisabled = (): boolean => {
        return page >= pageCount;
    }
    const isPreviousDisabled = (): boolean => {
        return page <= 1;
    }


    const handlePagination = async (direction: TDirection) => {
        if (direction === 1 && isNextDisabled()) { 
            return;
        }
        if (direction === -1 && isPreviousDisabled()) {
            return
        }

        const queryString = qs.stringify({
            ...router.query,
            page: page + direction,
        });

        router.push(`${redirectUrl}?${queryString}`)
    }

    return (
        <div className="flex items-center justify-center mt-8">
            <button onClick={() => handlePagination(-1)} className={`bg-primary py-2 px-4 text-white w-24 rounded mr-2 hover:bg-primary-dark ${isPreviousDisabled() ? `disabled` : ""}`}>prev.</button>
            <button onClick={() => handlePagination(1)} className={`bg-primary py-2 px-4 text-white w-24 rounded mr-2 hover:bg-primary-dark ${isNextDisabled() ? `disabled` : ""}`}>next</button>
        </div>
    );
}

export default Pagination;