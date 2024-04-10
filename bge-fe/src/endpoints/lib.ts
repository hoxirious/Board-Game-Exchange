import axios, { AxiosError, AxiosHeaders, AxiosResponse, AxiosResponseTransformer } from 'axios';

export enum RequestMethod {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
    DELETE = 'DELETE',
}

export const FetchAxios = async <T>(
    url: string,
    method: RequestMethod,
    data = {},
    options = {}
) => {
    let result: T;
    try {
        const response = await axios.request<T>({
            method,
            url: `http://localhost:8080/${url}`,
            data,
            ...options,
            validateStatus: () => {
                return true;
            },
        });
        result = response.data;
        console.log("axios return:" + JSON.stringify(result));
        return result;
    } catch (err) {
        const errors = err as Error | AxiosError;
        if (!axios.isAxiosError(errors)) {
            // do whatever you want with native error
            console.error(errors);
            history.pushState({}, "", '/');
        }
    }
};
