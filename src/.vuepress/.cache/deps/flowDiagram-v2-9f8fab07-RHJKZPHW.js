import {
  flowRendererV2,
  flowStyles
} from "./chunk-IBL6CAVH.js";
import "./chunk-LEXPF4AS.js";
import {
  flowDb,
  parser$1
} from "./chunk-C7XQFUIK.js";
import "./chunk-GRWMKKBT.js";
import "./chunk-YGHB3NRD.js";
import "./chunk-ZA4ZVCRA.js";
import "./chunk-FL6F5PFZ.js";
import "./chunk-FAEKLHJT.js";
import {
  require_dayjs_min,
  require_dist,
  setConfig
} from "./chunk-AJ6CVTD4.js";
import {
  __toESM
} from "./chunk-TFWDKVI3.js";

// node_modules/mermaid/dist/flowDiagram-v2-9f8fab07.js
var import_dayjs = __toESM(require_dayjs_min(), 1);
var import_sanitize_url = __toESM(require_dist(), 1);
var diagram = {
  parser: parser$1,
  db: flowDb,
  renderer: flowRendererV2,
  styles: flowStyles,
  init: (cnf) => {
    if (!cnf.flowchart) {
      cnf.flowchart = {};
    }
    cnf.flowchart.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    setConfig({ flowchart: { arrowMarkerAbsolute: cnf.arrowMarkerAbsolute } });
    flowRendererV2.setConf(cnf.flowchart);
    flowDb.clear();
    flowDb.setGen("gen-2");
  }
};
export {
  diagram
};
//# sourceMappingURL=flowDiagram-v2-9f8fab07-RHJKZPHW.js.map
