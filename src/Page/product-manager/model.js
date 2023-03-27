import { slice } from "API";

const initialState = { data: {}, status: "loading", loading: "" };
export default slice("product", initialState, [
  { SpaceName: "product/all", data: "data" },
  { SpaceName: "product/delete" },
]);
