import { useSearchParams } from "react-router-dom";

function useQueryParameters<T>() {
  const [searchParams] = useSearchParams();

  const paramsObject = Object.fromEntries([...searchParams]);

  return paramsObject as T;
}

export default useQueryParameters;
