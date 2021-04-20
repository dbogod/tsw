import React from "react";
import { Helmet } from "react-helmet/es/Helmet";

const HtmlHead = () => {
  const fontFaceStyles = ' /* latin */\n' +
    '            @font-face {\n' +
    '            font-family: \'Merriweather\';\n' +
    '            font-style: normal;\n' +
    '            font-weight: 700;\n' +
    '            font-display: swap;\n' +
    '            src: url(https://fonts.gstatic.com/s/merriweather/v22/u-4n0qyriQwlOrhSvowK_l52xwNZWMf6.woff2) format(\'woff2\');\n' +
    '            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n' +
    '          }\n' +
    '            /* latin */\n' +
    '            @font-face {\n' +
    '            font-family: \'Roboto\';\n' +
    '            font-style: normal;\n' +
    '            font-weight: 300;\n' +
    '            font-display: swap;\n' +
    '            src: url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmSU5fBBc4.woff2) format(\'woff2\');\n' +
    '            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n' +
    '          }\n' +
    '            /* latin */\n' +
    '            @font-face {\n' +
    '            font-family: \'Roboto\';\n' +
    '            font-style: normal;\n' +
    '            font-weight: 500;\n' +
    '            font-display: swap;\n' +
    '            src: url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fBBc4.woff2) format(\'woff2\');\n' +
    '            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n' +
    '          }';

  return (
    <Helmet>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <style type="text/css">
        {fontFaceStyles}
      </style>
    </Helmet>
  )
}

export default HtmlHead;
