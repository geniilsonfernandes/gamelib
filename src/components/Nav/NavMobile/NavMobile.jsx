import React from "react";
import styles from "./NavMobile.module.scss";

function NavMobile() {
  return (
    <div className={styles.nav}>
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.5"
          y="0.5"
          width="35"
          height="35"
          rx="3.5"
          stroke="#F5F5F5"
        />
        <path d="M8 10H17.5" stroke="white" />
        <path d="M8 26H17.5" stroke="white" />
        <path d="M8 18H25" stroke="white" />
      </svg>

      <svg
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.8138 17.9667L13.9098 13.1411C15.194 11.7459 15.9831 9.90066 15.9831 7.8702C15.9824 3.52667 12.4048 0.00604248 7.99122 0.00604248C3.57764 0.00604248 0 3.52667 0 7.8702C0 12.2137 3.57764 15.7344 7.99122 15.7344C9.89819 15.7344 11.6472 15.0748 13.0211 13.9782L17.944 18.8228C18.1839 19.0591 18.5733 19.0591 18.8132 18.8228C19.0536 18.5865 19.0536 18.203 18.8138 17.9667ZM7.99122 14.5244C4.25685 14.5244 1.22956 11.5452 1.22956 7.8702C1.22956 4.19517 4.25685 1.21599 7.99122 1.21599C11.7256 1.21599 14.7529 4.19517 14.7529 7.8702C14.7529 11.5452 11.7256 14.5244 7.99122 14.5244Z"
          fill="#F5F5F5"
        />
      </svg>
    </div>
  );
}

export default NavMobile;
