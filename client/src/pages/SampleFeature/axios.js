const BASE_URL = "";

export const sampleCall = (query) => {
    return apiClient
        .get(`${BASE_URL}/sample`, {
            params: query,
        })
        .then(res => console.log(res))
        .catch(e => console.log(e));
}