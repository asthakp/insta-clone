import { Card } from "material-ui";
import React from "react";

const index = () => {
  return (
    <div className="w-full h-full flex items-center justify-center mt-20">
      <div className="w-[40%] shadow-lg mt-3 px-5">
        <p className="text-center font-bold text-xl mb-2">Create a post</p>
        <label>
          {" "}
          Title
          <input type="text" className="w-full" placeholder="title" />
        </label>
        <input type="text" className="w-full" placeholder="title" />
      </div>
    </div>
  );
};

export default index;
