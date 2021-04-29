const BASE_URL = "";

export const sampleCall = () => {
    return apiClient
        .get(`${BASE_URL}/sample`, {
            params: query,
        })
        .then(res => console.log(res))
        .catch(e => console.log(e));
}