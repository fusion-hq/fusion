import axiosClient from "../apiClient";

export function getPluginStatus(writeKey) {
    return axiosClient.get(`/getPluginStatus?writeKey=${writeKey}&plugin_name=SESSION_RECORDING`)
}