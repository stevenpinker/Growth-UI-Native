import React from "react";
import { Svg, Path, SvgProps } from "react-native-svg";

export default function Checkbox(props: SvgProps) {
  return (
    <Svg
      viewBox="0 0 100 100"
      height="30"
      width="30"
      focusable={false}
      fill="currentColor"
      {...props}
    >
      <Path d="M92.038 24.333l-8.62-8.622a1.615 1.615 0 00-2.282 0L49.987 46.86l-6.07-6.068a1.614 1.614 0 00-2.282 0l-8.622 8.622a1.611 1.611 0 000 2.282l15.782 15.778c.302.302.712.473 1.141.473.019 0 .037-.01.056-.01.016 0 .033.009.05.009a1.61 1.61 0 001.141-.473l40.855-40.857c.63-.632.63-1.653 0-2.283z"></Path>
      <Path d="M72.022 53.625v21.159H27.978V30.74h31.06l9.979-9.978H23.193v.007c-.023 0-.044-.007-.068-.007a5.118 5.118 0 00-5.113 5H18v54h.013A5.111 5.111 0 0023 84.749v.013h54v-.013a5.11 5.11 0 004.987-4.987H82V43.647l-9.978 9.978z"></Path>
    </Svg>
  );
}
