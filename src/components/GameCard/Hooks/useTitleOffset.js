import { useEffect, useState } from "react";

function useTitleOffset(valueNode) {
  const [offSetTitle, setOffSet] = useState(0);
  const [showTitle, setShowTItle] = useState(false);

  function titleMove(value) {
    console.log(value);
    setShowTItle(value);
  }

  useEffect(() => {
    const titleEl = valueNode.current;
    const parentWidth = valueNode.current.parentElement.clientWidth - 30;
    const titleWith = valueNode.current.offsetWidth - parentWidth;

    if (titleWith > offSetTitle && showTitle) {
      titleEl.style.transform = `translate3d(-${offSetTitle}px, 0, 0)`;
    } else {
      titleEl.style.transform = `translate3d(-${offSetTitle}px, 0, 0)`;
      setOffSet(0);
    }
  }, [offSetTitle, valueNode, showTitle]);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffSet((value) => value + 1);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return {
    titleMove,
  };
}

export default useTitleOffset;
