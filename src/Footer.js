import React from "react";
import "./Footer.css";

const footer = () => (
  <footer className="footer">
    <div className="footer__copyright">
      &copy; 2021 Made with ❤️ by{" "}
      <a
        className="footer__copyright--link"
        href="http://datablazor.github.io"
        rel="noreferrer noopener"
        target="_blank"
      >
        {" "}
        Sunil Raj Thota
      </a>
    </div>
  </footer>
);

export default footer;
