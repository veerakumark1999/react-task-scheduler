import React from "react";

const Footer = ({ length }) => {
  return (
    <footer>
      {length} Task {length > 1 ? "items" : "item"}
    </footer>
  );
};

export default Footer;
