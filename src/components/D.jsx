import { useContext } from "react";
import CountButton from "./CountButton";
import E from "./E";
import { AppContext } from "../App";

const D = () => {
  const { count } = useContext(AppContext);

  return (
    <div className="bg-pink-300 w-24 h-24 flex justify-center items-center text-2xl">
      {count}
    </div>
  );
};

export default D;
