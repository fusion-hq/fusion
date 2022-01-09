import axiosClient from "../apiClient";

export function getRecordingData(id, writeKey) {
    return axiosClient.get(`/getRecordingData?sessionId=${id}&writeKey=${writeKey}`)
}