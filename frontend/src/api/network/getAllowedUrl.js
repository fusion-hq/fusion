import axiosClient from "../apiClient";

export function getAllowedUrl(writeKey) {
    return axiosClient.get(`/allowed-websites?writeKey=${writeKey}`)
}