import React from "react";
import FusionLogo from "../../Asset/fusion-logo-blue.svg";
import "./Loading.css";

const loadingImg =
  "https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg";

const loadingImgFusionLogo =
  "https://user-images.githubusercontent.com/30192834/116253209-e3dbeb00-a78d-11eb-9bd9-f4b29bb0c7a6.png";

const Loading = () => (
  <div className="Loading">
    <img src={FusionLogo} id="spinner" className="pulse" alt="Loading..." />
    {/**      <img src={loadingImgFusionLogo} id="loading" alt="Loading..." />
     */}
  </div>
);

export default Loading;
