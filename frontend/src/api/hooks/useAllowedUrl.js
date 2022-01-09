import { useQuery } from "react-query";
import { getAllowedUrl } from "../network/getAllowedUrl";

export default function useAllowedUrl(writeKey, dbCreated) {
    const { data } = useQuery( ['allowedUrl', writeKey], () => getAllowedUrl(writeKey), { keepPreviousData: true, enabled: dbCreated} );
    return data
}
