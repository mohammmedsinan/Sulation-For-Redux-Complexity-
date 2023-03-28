import { slice } from "API";

const initialState = { data: {}, data2: {}, status: "", loading: "" };
export default slice("product", initialState, [
  { SpaceName: "product/all", data: "data" },
  { SpaceName: "product/details", data: "data2" },
  { SpaceName: "product/delete" },
  { SpaceName: "product/edit" },
  { SpaceName: "product/create" },
]);
