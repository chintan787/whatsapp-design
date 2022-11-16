import React from 'react';
import Svg, { G, Path } from "react-native-svg";

export default function AppLanguageIcon() {
  return (
    <Svg
    width={20}
    height={20}
    viewBox="-0.5 0 17 17"
    xmlns="http://www.w3.org/2000/svg"
    className="si-glyph si-glyph-network-2"
    // fill="#8596A0"
  >
    <G fill="#8596A0" fillRule="evenodd">
      <Path
        d="M8.494 15.958C4.361 15.958 1 12.622 1 8.52s3.361-7.438 7.494-7.438c4.133 0 7.495 3.336 7.495 7.438s-3.362 7.438-7.495 7.438Zm.016-14.02A6.58 6.58 0 0 0 1.938 8.51a6.58 6.58 0 0 0 6.572 6.573 6.58 6.58 0 0 0 6.573-6.573A6.58 6.58 0 0 0 8.51 1.938Z"
        className="si-glyph-fill"
      />
      <Path className="si-glyph-fill" d="M8 2h.922v14.084H8z" />
      <Path
        className="si-glyph-fill"
        d="M1 8h13.96v.922H1zM2 5h12.406v.906H2zM2 11h12.406v.922H2z"
      />
      <Path
        d="M8.317 15.854c-2.597-1.273-4.274-4.192-4.274-7.437 0-3.17 1.623-6.062 4.138-7.367l.461.887c-2.187 1.137-3.599 3.68-3.599 6.48 0 2.865 1.459 5.432 3.714 6.538l-.44.899Z"
        className="si-glyph-fill"
      />
      <Path
        d="m8.74 15.789-.469-.883c2.139-1.134 3.521-3.681 3.521-6.489 0-2.775-1.359-5.31-3.46-6.457l.479-.877c2.418 1.318 3.981 4.197 3.981 7.334.001 3.175-1.591 6.068-4.052 7.372Z"
        className="si-glyph-fill"
      />
    </G>
  </Svg>
  )
}
