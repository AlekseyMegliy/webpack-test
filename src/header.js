import _ from "lodash";
let moment = require("moment");

const hi = ["I am"];
let head = _.concat(hi, "header. And now ", String(moment().format()));

export default head.join(" ");
