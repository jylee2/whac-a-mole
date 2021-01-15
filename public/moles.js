// Upon clicking on mole, increment score + unmount mole
const btnClick = (stateScore, setScore, setMount) => {
  setScore(stateScore + 1);
  setMount(false);
};

// Mole Components
const MoleOne = ( {stateScore, setScore, setMount} ) => {
  return (
    <div>
      <button className="classMole" onClick={() => btnClick(stateScore, setScore, setMount)}>
        <div className="classMoleLeftEye"></div>
        <div className="classMoleRightEye"></div>
        <div className="classMoleNose"></div>
      </button>
    </div>
  );
};
// Mole Component
const MoleTwo = ( {stateScore, setScore, setMount} ) => {
  return (
    <div>
      <button className="classMole" onClick={() => btnClick(stateScore, setScore, setMount)}>
        <div className="classMoleLeftEye"></div>
        <div className="classMoleRightEye"></div>
        <div className="classMoleNose"></div>
      </button>
    </div>
  );
};
// Mole Component
const MoleThree = ( {stateScore, setScore, setMount} ) => {
  return (
    <div>
      <button className="classMole" onClick={() => btnClick(stateScore, setScore, setMount)}>
        <div className="classMoleLeftEye"></div>
        <div className="classMoleRightEye"></div>
        <div className="classMoleNose"></div>
      </button>
    </div>
  );
};
// Mole Component
const MoleFour = ( {stateScore, setScore, setMount} ) => {
  return (
    <div>
      <button className="classMole" onClick={() => btnClick(stateScore, setScore, setMount)}>
        <div className="classMoleLeftEye"></div>
        <div className="classMoleRightEye"></div>
        <div className="classMoleNose"></div>
      </button>
    </div>
  );
};
// Mole Component
const MoleFive = ( {stateScore, setScore, setMount} ) => {
  return (
    <div>
      <button className="classMole" onClick={() => btnClick(stateScore, setScore, setMount)}>
        <div className="classMoleLeftEye"></div>
        <div className="classMoleRightEye"></div>
        <div className="classMoleNose"></div>
      </button>
    </div>
  );
};
// Mole Component
const MoleSix = ( {stateScore, setScore, setMount} ) => {
  return (
    <div>
      <button className="classMole" onClick={() => btnClick(stateScore, setScore, setMount)}>
        <div className="classMoleLeftEye"></div>
        <div className="classMoleRightEye"></div>
        <div className="classMoleNose"></div>
      </button>
    </div>
  );
};
// Mole Component
const MoleSeven = ( {stateScore, setScore, setMount} ) => {
  return (
    <div>
      <button className="classMole" onClick={() => btnClick(stateScore, setScore, setMount)}>
        <div className="classMoleLeftEye"></div>
        <div className="classMoleRightEye"></div>
        <div className="classMoleNose"></div>
      </button>
    </div>
  );
};
// Mole Component
const MoleEight = ( {stateScore, setScore, setMount} ) => {
  return (
    <div>
      <button className="classMole" onClick={() => btnClick(stateScore, setScore, setMount)}>
        <div className="classMoleLeftEye"></div>
        <div className="classMoleRightEye"></div>
        <div className="classMoleNose"></div>
      </button>
    </div>
  );
};
// Mole Component
const MoleNine = ( {stateScore, setScore, setMount} ) => {
  return (
    <div>
      <button className="classMole" onClick={() => btnClick(stateScore, setScore, setMount)}>
        <div className="classMoleLeftEye"></div>
        <div className="classMoleRightEye"></div>
        <div className="classMoleNose"></div>
      </button>
    </div>
  );
};