import React from "react";

const Header = ({ children }) => {
  // const headerElem = window.document.createElement("header");
  // const titleElem = window.document.createElement("h1");
  // titleElem.textContent = children || "Facewall";

  // headerElem.appendChild(titleElem);
  // window.root.append(headerElem);

  return (
    <header>
      <h1>{children || "Facewall"}</h1>
    </header>
  );
};

export default React.memo(Header);
