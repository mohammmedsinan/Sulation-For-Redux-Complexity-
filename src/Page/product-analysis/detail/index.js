import React from "react";
import Details from "./detailsPage";
import { useLocation } from "react-router-dom";

function index({ dispatch, state: { AnalysisProduct } }) {
  const location = useLocation();
  React.useEffect(() => {
    const id = location.pathname.split("/")[4];
    dispatch("productAnalysis/details", `/products/get/${id}`, "GET");
  }, []);
  return <Details state={AnalysisProduct} />;
}

export default index;
