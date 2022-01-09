import { useQuery } from "react-query";
import { getRecordingData } from "../network/getRecordingData";

export default function useRecordingData(id, writeKey) {
    const { data } = useQuery( ['recordingData', writeKey, id], () => getRecordingData(id, writeKey), { keepPreviousData: true } );
    return data
}
