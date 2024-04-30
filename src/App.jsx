import { useState } from 'react';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';

function App() {
  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleClick = click => {
    setClicks(prev => ({ ...prev, [click]: prev[click] + 1 }));
  };

  const totalFeedback = () => {
    return Object.values(clicks).reduce((acc, el) => acc + el, 0);
  };

  const total = totalFeedback();
  // console.log(total);

  const goodCount = clicks.good;

  const positiveFeedback = Math.round((goodCount / total) * 100);
  // console.log(positiveFeedback);

  return (
    <>
      <Description />
      <Options clicks={clicks} handleClick={handleClick} />
      {total > 0 ? (
        <Feedback
          total={total}
          positiveFeedback={positiveFeedback}
          statistics={Object.entries(clicks)}
        />
      ) : (
        <p>Not feedback yet</p>
      )}
    </>
  );
}

export default App;
