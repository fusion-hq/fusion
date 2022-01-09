import { useQuery } from "react-query";
import { getPluginStatus } from "../network/getPluginStatus";

export default function usePluginStatus(writeKey, dbCreated) {
    const { data } = useQuery( ['pluginStatus', writeKey], () => getPluginStatus(writeKey), { keepPreviousData: true, enabled: dbCreated } );
    return data
}
