import React from "react";

const layout = ({ children }) => {
  return (
    <div className="flex flex-wrap w-full items-center justify-between max-w-screen-xl p-4 mx-auto bg-black">
      {" "}
      {children}{" "}
    </div>
  );
};

export default layout;
