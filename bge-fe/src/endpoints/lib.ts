import { domain } from '@/lib/utils';
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
            url: `${domain}/${url}`,
            data,
            ...options,
            validateStatus: () => {
                return true;
            },
        });
        result = response.data;
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
