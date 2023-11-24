import React, { useState } from "react";

import { gravatarUrl, IMAGE_SIZE, generateEmail } from "./utils";

const Gravatar = ({ isHidden, onGravatarClick }) => {
  const email = generateEmail("gmail.com");

  return (
    <div className="gravatar">
      <img
        alt="Gravatar"
        src={gravatarUrl(IMAGE_SIZE, email)}
        onClick={onGravatarClick}
      />
      {isHidden && <span>{email}</span>}
    </div>
  );
};

export default React.memo(Gravatar);
