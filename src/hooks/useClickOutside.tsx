import { useEffect, useRef } from "react";

const useClickOutside = (configs: React.RefObject<HTMLElement>[], globalCallback: () => void) => {
  const clickedInsideFlags = useRef<Record<string, boolean>>({});

  const handleClick = (event: MouseEvent) => {
    let clickedOutsideAll = true;

    configs.forEach((ref) => {
      if (ref.current && ref.current.contains(event.target as Node)) {
        clickedInsideFlags.current[ref.current.id] = true;
        clickedOutsideAll = false;
      } else {
        clickedInsideFlags.current[ref.current?.id!] = false;
      }
    });

    if (clickedOutsideAll) {
      globalCallback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [configs, globalCallback]);

  return clickedInsideFlags.current;
};

export default useClickOutside;
