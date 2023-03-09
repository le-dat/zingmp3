import { useEffect } from "react";

const useScrollTop = (name: string = "container") => {
  useEffect(() => {
    document.getElementById(name)?.scrollTo(0, 0);
  }, []);
};

export default useScrollTop;
