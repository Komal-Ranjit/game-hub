import { useEffect, useState } from "react";
import { AxiosRequestHeaders, CanceledError } from "../../node_modules/axios/index";
import apiClient from '../services/api-client';


export interface FetchResponse<T>{
    count: number;
    results : T[];
}

const useData = <T>(endpoints: string, requestConfig : AxiosRequestHeaders, deps?: any[]) => {

    const [data, setData ] =   useState<T[]>([]);
    const [error,setError] = useState('');
    const [isLoading, setLoading] = useState(false);

    useEffect( ()=>{
        const controller = new AbortController();
        setLoading(true);
        apiClient.get<FetchResponse<T>>(endpoints,{signal: controller.signal, ...requestConfig})
        .then(res => {
            setData(res.data.results)
            setLoading(false);
        })
        .catch(err => {
               if(err instanceof CanceledError) return; 
                setError(err.message)
                setLoading(false);
            });
        //return () => controller.abort();
    }, deps ? [...deps] : []);
    return {data, error, isLoading};
}


export default useData;