import { useLocation } from 'react-router-dom';

const UseUrlParamsHook = () => {
    const search = useLocation().search;
    const id = new URLSearchParams(search).get("id");
    return {
        id
    }
}

export default UseUrlParamsHook