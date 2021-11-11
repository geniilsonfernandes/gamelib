import React, { useEffect, useRef, useState } from "react";
import styles from "./Paralax.module.scss";

function Paralax({ img, height, width, force, children }) {
  const containerEl = useRef(null);
  const imageEl = useRef(null);

  useEffect(() => {
    const paralaxScroll = (e) => {
      const { offsetTop } = containerEl.current;
      const offsetScreen = window.scrollY + window.innerHeight;
      const image = imageEl.current;
      const count = +(offsetTop - offsetScreen) / force;
      if (offsetScreen > offsetTop) {
        console.log(count);
        image.style.transform = `translate3d(0, ${Math.abs(count)}px, 0)`;
        image.style.transition = "transform 50ms linear";
      } else {
      }
    };
    window.addEventListener("scroll", paralaxScroll);
    return () => {
      window.removeEventListener("scroll", paralaxScroll);
    };
  }, [force]);

  return (
    <div
      className={styles.paralax}
      ref={containerEl}
      style={{ width: `${width}`, height: `${height}` }}
    >
      {children}
      <img src={img} alt="" ref={imageEl} />
    </div>
  );
}

export default Paralax;
