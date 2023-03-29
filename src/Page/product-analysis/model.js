import { slice } from "API";

const initialState = { data: {}, status: "", loading: "" };
export default slice("product", initialState, [
  { SpaceName: "product/all", data: "data" },
]);
