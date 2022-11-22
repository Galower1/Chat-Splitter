import { useQuery } from "@tanstack/react-query";
import { ChangeEvent, useRef, useState } from "react";
import { validateUser } from "../requests/validateUser";

export function useValidateUser() {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const inputProcess = useRef<number | null>(null);

  const { refetch, data } = useQuery({
    queryKey: ["validate", inputValue],
    queryFn: validateUser,
    enabled: false,
    retry: false,
  });

  const handleInputChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    setInputValue(value);
    if (inputProcess.current) clearTimeout(inputProcess.current);

    inputProcess.current = setTimeout(async () => {
      await refetch();
      setLoading(false);
    }, 500);
  };

  return { handleInputChange, inputValue, loading, data };
}
