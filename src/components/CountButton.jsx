import { useContext } from "react";

import { AppContext } from "../App";

const CountButton = () => {
  const { count, setCountHandler } = useContext(AppContext);

  return (
    <button className="mt-4 text-2xl" onClick={() => setCountHandler(count)}>
      +
    </button>
  );
};

export default CountButton;
