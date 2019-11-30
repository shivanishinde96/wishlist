import React from "react";

const num = new Date();
const year = num.getFullYear();

function Footer() {
  return <p id="rightcopy">© Copyright {year}</p>;
}

export default Footer;
