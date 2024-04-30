import { useState } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";

function App() {
  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  console.log(clicks);
  console.log(setClicks);

  // const handleClick = () => {
  //   setClicks(clicks + 1);
  // };

  return (
    <>
      <Description />
      <Options clicks={clicks} />
    </>
  );
}

export default App;
