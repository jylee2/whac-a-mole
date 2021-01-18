// Mole Button
const MoleBtn = ({ stateScore, setScore, mountMole, setMountMole }) => {
  // Upon clicking on mole, increment score + unmount mole
  const btnClick = (stateScore, setScore, setMountMole) => {
    setScore(stateScore + 1);
    setMountMole(false);
  };
  return (
    <div>
      <button className="classMole" onClick={() => btnClick(stateScore, setScore, setMountMole)}>
        <div className="classMoleLeftEye"></div>
        <div className="classMoleRightEye"></div>
        <div className="classMoleNose"></div>
      </button>
    </div>
  );
};

// Mole Hole
const MoleHole = ( { stateScore, setScore } ) => {
  const [mountMole, setMountMole] = useState(false);
  // Make the moles appear/hide at random time intervals
  const hideShowMole = ( setter ) => {
    const mainInterval = Math.max(1500, Math.random() * 5000);
    setInterval( () => {
      const subInterval = Math.max(1500, Math.random() * 15000);
      // Use setTimeout, if setInterval then will get faster
      setTimeout( () => {
        setter( (state) => {
          // if true -> false, if false -> true
          return !state;
        });
      }, subInterval );
    }, mainInterval );
  };
  // Similar to componentDidMount, componentDidUpdate, componentWillUnmount
  useEffect( () => {
    hideShowMole(setMountMole);
  }, []);
  return (
    <div className="classMoleHole">
      {/* if mount = true, then mount <Component/> */}
      { (mountMole === true)
        ?
        <MoleBtn
          stateScore = {stateScore}
          setScore = {setScore}
          mountMole = {mountMole}
          setMountMole = {setMountMole}
        />
        :
        null
      }
    </div>
  );
};