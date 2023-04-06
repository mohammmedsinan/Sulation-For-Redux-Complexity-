import React from "react";
import { useLocation } from "react-router-dom";
import AllPlatforms from "./allPlatforms";
import NotSelected from "./notSelected";
import Facebook from "./Platforms/facebook";
import Twitter from "./Platforms/twitter";
import Insta from "./Platforms/insta";

function RouteRender() {
  const location = useLocation();
  const [route, setRoute] = React.useState("undefined");
  React.useEffect(() => {
    if (!location.search == "") setRoute(location.search.split("=")[1].toLowerCase());
  }, [location.search]);
  if (route === "all") {
    return <AllPlatforms />;
  } else if (route === "twitter") {
    return <Twitter />;
  } else if (route === "instagram") {
    return <Insta />;
  } else if (route === "facebook") {
    return <Facebook />;
  } else {
    return <NotSelected />;
  }
  return <></>;
}

export default RouteRender;
