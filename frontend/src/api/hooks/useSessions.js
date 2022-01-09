import { useQuery } from "react-query";
import { getAllSession } from "../network/getAllSession";

export default function useSessions(filterString, selectedDateTimeRange, startDate, endDate, writeKey, page) {
    const { data, isLoading } = useQuery( ['sessions', filterString, selectedDateTimeRange, startDate, endDate, writeKey, page], () => getAllSession(filterString, selectedDateTimeRange, startDate, endDate, writeKey, page), { keepPreviousData: true} );
    return {
        data: data,
        isloading: isLoading
    }
}
