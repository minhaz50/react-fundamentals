import { useState } from "react";

export default function BatsmanScore() {
  const [runs, setRuns] = useState(0);
  const [sixes, setSixes] = useState(0);
  const [fours, setFours] = useState(0);

  const handleSingle = () => {
    const updateRuns = runs + 1;
    setRuns(updateRuns);
  };

  const handleFour = () => {
    const updateRuns = runs + 4;
    const updateTotalFours = fours + 1;
    setFours(updateTotalFours);
    setRuns(updateRuns);
  };

  const handleSix = () => {
    const updateRuns = runs + 6;
    const updateSixes = sixes + 1;

    setSixes(updateSixes);
    setRuns(updateRuns);
  };

  return (
    <div>
      <h2>Batsman Score: {runs}</h2>
      {runs >= 50 && <p>Congratulations. You complete 50 runs. </p>}
      <p>Total Fours: {fours}</p>
      <p>Total Sixes: {sixes}</p>
      <button onClick={handleSingle}>Singles</button>
      <button onClick={handleFour}>Four</button>
      <button onClick={handleSix}>Six</button>
    </div>
  );
}
