import React, { useCallback, useEffect, useRef } from "react";
import styles from "./Paralax.module.scss";

function Paralax({ background, force, children, alt }) {
  const wrapperEl = useRef(null);
  const imageEl = useRef(null);

  const paralaxScroll = useCallback((e) => {
    const { offsetTop, clientHeight } = wrapperEl.current;
    const offsetScreen = window.scrollY + window.innerHeight;
    const image = imageEl.current;
    const count = (offsetTop - offsetScreen) / 10;

    image.style.top = `${Math.abs(count) - clientHeight}px`;
    image.style.height = `${clientHeight * 2}px`;

    if (offsetScreen > offsetTop) {
      image.style.transition = "transform 50ms linear";
    } else {
      return;
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", paralaxScroll);
    return () => {
      window.removeEventListener("scroll", paralaxScroll);
    };
  }, [paralaxScroll]);

  return (
    <div className={styles.paralax} ref={wrapperEl}>
      {children}
      <img src={background} alt={alt} ref={imageEl} />
    </div>
  );
}

export default Paralax;
