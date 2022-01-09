import axiosClient from "../apiClient";

export function getAllSession(filterString, selectedDateTimeRange, startDate, endDate, writeKey, page) {
    return axiosClient.get(`/allRecordingData?filters=${filterString}&dateTime=${selectedDateTimeRange}&startDate=${startDate}&endDate=${endDate}&writeKey=${writeKey}&page=${page}&limit=${10}`)
}