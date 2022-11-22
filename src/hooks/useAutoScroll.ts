import { RefObject, useEffect } from "react";

export function useAutoScroll(ref: RefObject<HTMLElement>, updateParam: any) {
  useEffect(() => {
    const element = ref.current;

    if (element) {
      element.scrollTop = element.scrollHeight;
    }
  }, [updateParam]);
}
