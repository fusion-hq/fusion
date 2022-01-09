import axiosClient from "../apiClient";

export function savePlugin(writeKey, checked) {

    return axiosClient.get(`/savePlugin?writeKey=${writeKey}&plugin_name=SESSION_RECORDING&is_active=${checked}`)
}