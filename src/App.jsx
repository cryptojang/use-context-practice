import { createContext, useState } from "react";
import A from "./components/A";
import CountButton from "./components/CountButton";

export const AppContext = createContext({
  //context 는 전역 변수. 변수 들어있는 영역. usestate랑 비슷한데 작성 방법 조금 다른 느낌. 여러 개 만들거나 하나로 통합해서 운영할 수 있음.
  count: 0,
  setCountHandler: () => {},
});

const App = () => {
  const [count, setCount] = useState(0);

  const setCountHandler = (prevValue) => setCount(prevValue + 1);

  return (
    <AppContext.Provider value={{ count, setCountHandler }}>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <A />
        <CountButton />
      </div>
    </AppContext.Provider>
  );
};

export default App;
