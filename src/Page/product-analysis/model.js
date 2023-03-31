import { slice } from "API";

const initialState = { data: {},details:{}, status: "", loading: "" };
export default slice("productAnalysis", initialState, [
  { SpaceName: "productAnalysis/all", data: "data" },
  { SpaceName: "productAnalysis/details", data: "details" },
]);
