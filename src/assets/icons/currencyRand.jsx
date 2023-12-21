import React from "react";
import SvgIcon from "@mui/material/SvgIcon";
export const CurrencyRand = () => {
  return (
    <SvgIcon sx={{ fontSize: 18, color: "text.disabled" }}>
      {/* credit: plus icon from https://heroicons.com/ */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 15 15"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.5 14V8.5M3.5 8.5V1.5H8C8.45963 1.5 8.91475 1.59053 9.33939 1.76642C9.76403 1.94231 10.1499 2.20012 10.4749 2.52513C10.7999 2.85013 11.0577 3.23597 11.2336 3.66061C11.4095 4.08525 11.5 4.54037 11.5 5C11.5 5.45963 11.4095 5.91475 11.2336 6.33939C11.0577 6.76403 10.7999 7.14987 10.4749 7.47487C10.1499 7.79988 9.76403 8.05769 9.33939 8.23358C8.91475 8.40947 8.45963 8.5 8 8.5H3.5ZM3.5 8.5H8.5C9.29565 8.5 10.0587 8.81607 10.6213 9.37868C11.1839 9.94129 11.5 10.7044 11.5 11.5V14"
        />
      </svg>
    </SvgIcon>
  );
};
