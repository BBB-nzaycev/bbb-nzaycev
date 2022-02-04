import ReactDOMServer from "react-dom/server";

import "./aui-select.css";

const proxyFunction = (anyArg) => {
  // select2 requires default adapters in some cases
  return anyArg;
};
