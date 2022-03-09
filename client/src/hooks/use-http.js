import {useCallback} from "react";

const UseHttp = () => {
    const apiClient = useCallback(async (url, method = "POST", body) => {
        return await fetch(url, {
            method: method,
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json"
            }
        })
    }, [])
    return {apiClient}
}

export default UseHttp