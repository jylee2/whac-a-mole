// Canvas Component containing the game
const Canvas = ({ score, setScore }) => {
  const numbers = [1, 2, 3];
  // Create a row of moles
  const listMoles = numbers.map( (num) => 
    <MoleHole
      stateScore = {score}
      setScore = {setScore}
    />
  );
  // Create a grid of moles
  const gridMoles = numbers.map( (num) => 
    <div className="row classMoleRow">
      {listMoles}
    </div>
  );
  return (
    <div>
      <p>Score: {score}</p>
      <div id="canvas" className="classCanvas">
        {gridMoles}
      </div>
    </div>
  );
};