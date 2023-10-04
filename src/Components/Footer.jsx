import React from "react";
function Footer() {
  return (
    <footer className="container mx-auto py-1 fixed bottom-0 md:left-20 bg-white dark:bg-dark-mode" style={{left:"16px"}}>
      <p className="text-xs text-center text-dark-content dark:text-light-content w-full">
        {/* Designed and Coded by{" "} */}
        Coded by{" "}
        <a
          className="font-medium"
          href="/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Satyajeet Behera
        </a>{" "}
        with
        <span className="bg-clip-text bg-gradient text-transparent "> Love </span> &
        <span className="text-gradient font-medium bg-gradient-to-br from-blue-500 to-purple-600"> Coffee </span>
      </p>
    </footer>
  );
}
export default Footer;
