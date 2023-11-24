import React, { useState } from "react";

import Gravatar from "./Gravatar";

const GravatarList = ({ state }) => {
  const [isHidden, setIsHidden] = useState(false);

  const onGravatarClick = (event) => {
    event.target.classList.toggle("is-highlighted");
    setIsHidden(!isHidden);
  };

  return Array.apply(null, Array(state.images)).map((_, index) => (
    <Gravatar key={index} onGravatarClick={onGravatarClick} />
  ));
};
export default GravatarList;
