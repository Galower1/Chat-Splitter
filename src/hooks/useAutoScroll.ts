import { useEffect, useRef } from "react";

export function useAutoScroll(updateParam: any) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;

    if (element) {
      element.scrollTop = element.scrollHeight;
    }
  }, [updateParam]);

  return elementRef;
}
