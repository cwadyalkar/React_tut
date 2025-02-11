import { useState } from "react";

const Navbar = () => {
  const [count, setCount] = useState(true);

  return (
    <div className="">
      <h1 className="sm:text-xs hover:font-bold active:bg-violet-700  bg-red-600 hover:bg-green-600 text-lg hover:cursor-pointer ">
        Hello
      </h1>

      <button onClick="">Submit</button>
    </div>
  );
};
export default Navbar;
