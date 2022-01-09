import axiosClient from "../apiClient";

export function deleteRecording(id, writeKey) {
    return axiosClient.get(`/deleteRecording?sessionId=${id}&writeKey=${writeKey}`)
}