import { QueryKey } from "@tanstack/react-query";

export function validateUser({ queryKey }: { queryKey: QueryKey }) {
  const [_, username] = queryKey;

  return fetch(import.meta.env.VITE_USER_API + username).then((response) => ({
    status: response.status,
  }));
}
