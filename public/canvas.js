// Canvas Component containing the game
const Canvas = ({ score, setScore, mountCanvas, setmountCanvas }) => {

  // Initially the moles are NOT mounted (false)
  const [mountOne, setMountOne] = useState(false);
  const [mountTwo, setMountTwo] = useState(false);
  const [mountThree, setMountThree] = useState(false);
  const [mountFour, setMountFour] = useState(false);
  const [mountFive, setMountFive] = useState(false);
  const [mountSix, setMountSix] = useState(false);
  const [mountSeven, setMountSeven] = useState(false);
  const [mountEight, setMountEight] = useState(false);
  const [mountNine, setMountNine] = useState(false);

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
    hideShowMole(setMountOne);
    hideShowMole(setMountTwo);
    hideShowMole(setMountThree);
    hideShowMole(setMountFour);
    hideShowMole(setMountFive);
    hideShowMole(setMountSix);
    hideShowMole(setMountSeven);
    hideShowMole(setMountEight);
    hideShowMole(setMountNine);
  }, []);

  return (
    <div>
      <p>Score: {score}</p>

      <div className="classCanvas">

        <div className="row classMoleRow">
          <div className="classMoleHole">
            {/* if mount = true, then mount <Mole/> */}
            { (mountOne === true)
              ?
              <MoleOne
                stateScore = {score}
                setScore = {setScore}
                setMount = {setMountOne}
              />
              :
              null
            }
          </div>
          <div className="classMoleHole">
            {/* if mount = true, then mount <Mole/> */}
            { (mountTwo === true)
              ?
              <MoleTwo 
                stateScore = {score}
                setScore = {setScore}
                setMount = {setMountTwo}
              />
              :
              null
            }
          </div>
          <div className="classMoleHole">
            {/* if mount = true, then mount <Mole/> */}
            { (mountThree === true)
              ?
              <MoleThree
                stateScore = {score}
                setScore = {setScore}
                setMount = {setMountThree}
              />
              :
              null
            }
          </div>
        </div>
        <div className="row classMoleRow">
          <div className="classMoleHole">
            {/* if mount = true, then mount <Mole/> */}
            { (mountFour === true)
              ?
              <MoleFour
                stateScore = {score}
                setScore = {setScore}
                setMount = {setMountFour}
              />
              :
              null
            }
          </div>
          <div className="classMoleHole">
            {/* if mount = true, then mount <Mole/> */}
            { (mountFive === true)
              ?
              <MoleFive 
                stateScore = {score}
                setScore = {setScore}
                setMount = {setMountFive}
              />
              :
              null
            }
          </div>
          <div className="classMoleHole">
            {/* if mount = true, then mount <Mole/> */}
            { (mountSix === true)
              ?
              <MoleSix
                stateScore = {score}
                setScore = {setScore}
                setMount = {setMountSix}
              />
              :
              null
            }
          </div>
        </div>
        <div className="row classMoleRow">
          <div className="classMoleHole">
            {/* if mount = true, then mount <Mole/> */}
            { (mountSeven === true)
              ?
              <MoleSeven
                stateScore = {score}
                setScore = {setScore}
                setMount = {setMountSeven}
              />
              :
              null
            }
          </div>
          <div className="classMoleHole">
            {/* if mount = true, then mount <Mole/> */}
            { (mountEight === true)
              ?
              <MoleEight
                stateScore = {score}
                setScore = {setScore}
                setMount = {setMountEight}
              />
              :
              null
            }
          </div>
          <div className="classMoleHole">
            {/* if mount = true, then mount <Mole/> */}
            { (mountNine === true)
              ?
              <MoleNine
                stateScore = {score}
                setScore = {setScore}
                setMount = {setMountNine}
              />
              :
              null
            }
          </div>
        </div>

        {/* console.log(`score: ${score}`) */}

      </div>
    </div>
  );
};