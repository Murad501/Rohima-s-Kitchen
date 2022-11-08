import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = (`${title} - Rohima's Kitchen`);
  }, [title]);
};

export default useTitle;
