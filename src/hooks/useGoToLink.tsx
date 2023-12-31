import { useCallback } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export const useGoToLink = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const goToLink = useCallback(
    (pathname: string) =>
      navigate({
        pathname: pathname,
        search: searchParams.toString(),
      }),
    [navigate, searchParams]
  );

  return goToLink;
};