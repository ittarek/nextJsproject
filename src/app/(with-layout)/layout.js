import NavBar from "@/components/HomeSection/NavBar";
import React from "react";

const WithLayout = ({ children }) => {
  return (
    <div>
      {/* <nav className="text-purple-400 text-end">
        <a href="/">Home</a>
        <a className="mx-11" href="/about">
          about
        </a>
        <a href="#">next</a>
      </nav> */}
      {/* <NavBar/> */}
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
   
        {children}
      </div>
      {/* <footer>Footer is here</footer> */}
    </div>
  );
};

export default WithLayout;
