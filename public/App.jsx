// const useState = React["useState"];
// const useEffect = React["useEffect"];
const { useState, useEffect } = React;

// Mole Component
const MoleOne = ( {stateScore, stateMount, fnBtnClicked} ) => {
  return (
    <div>
      <button className="classMole" onClick={() => fnBtnClicked()}>
        1 
      </button>
    </div>
  );
};
// Mole Component
const MoleTwo = ( {stateScore, stateMount, fnBtnClicked} ) => {
  return (
    <div>
      <button className="classMole" onClick={() => fnBtnClicked()}>
        2
      </button>
    </div>
  );
};
// Mole Component
const MoleThree = ( {stateScore, stateMount, fnBtnClicked} ) => {
  return (
    <div>
      <button className="classMole" onClick={() => fnBtnClicked()}>
        3
      </button>
    </div>
  );
};
// Mole Component
const MoleFour = ( {stateScore, stateMount, fnBtnClicked} ) => {
  return (
    <div>
      <button className="classMole" onClick={() => fnBtnClicked()}>
        4 
      </button>
    </div>
  );
};
// Mole Component
const MoleFive = ( {stateScore, stateMount, fnBtnClicked} ) => {
  return (
    <div>
      <button className="classMole" onClick={() => fnBtnClicked()}>
        5
      </button>
    </div>
  );
};
// Mole Component
const MoleSix = ( {stateScore, stateMount, fnBtnClicked} ) => {
  return (
    <div>
      <button className="classMole" onClick={() => fnBtnClicked()}>
        6
      </button>
    </div>
  );
};
// Mole Component
const MoleSeven = ( {stateScore, stateMount, fnBtnClicked} ) => {
  return (
    <div>
      <button className="classMole" onClick={() => fnBtnClicked()}>
        7 
      </button>
    </div>
  );
};
// Mole Component
const MoleEight = ( {stateScore, stateMount, fnBtnClicked} ) => {
  return (
    <div>
      <button className="classMole" onClick={() => fnBtnClicked()}>
        8
      </button>
    </div>
  );
};
// Mole Component
const MoleNine = ( {stateScore, stateMount, fnBtnClicked} ) => {
  return (
    <div>
      <button className="classMole" onClick={() => fnBtnClicked()}>
        9
      </button>
    </div>
  );
};

// Canvas Component containing the game
const WhacCanvas = ({ score, setScore }) => {

  // Initial score is 0
  // const [score, setScore] = useState(0);

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

  // Make the moles appear at random time intervals
  useEffect(() => {

    setInterval(
      () => {
        setMountOne(true);
    }, Math.random() * 20000);

    setInterval(
      () => {
        setMountTwo(true);
    }, Math.random() * 20000);

    setInterval(
      () => {
        setMountThree(true);
    }, Math.random() * 20000);

    setInterval(
      () => {
        setMountFour(true);
    }, Math.random() * 20000);

    setInterval(
      () => {
        setMountFive(true);
    }, Math.random() * 20000);

    setInterval(
      () => {
        setMountSix(true);
    }, Math.random() * 20000);

    setInterval(
      () => {
        setMountSeven(true);
    }, Math.random() * 20000);

    setInterval(
      () => {
        setMountEight(true);
    }, Math.random() * 20000);

    setInterval(
      () => {
        setMountNine(true);
    }, Math.random() * 20000);

  }, []);

  // Upon clicking on mole, increment score + unmount mole
  const btnClickOne = () => {
    setScore(score + 1);
    setMountOne(false);
  };
  const btnClickTwo = () => {
    setScore(score + 1);
    setMountTwo(false);
  };
  const btnClickThree = () => {
    setScore(score + 1);
    setMountThree(false);
  };
  const btnClickFour = () => {
    setScore(score + 1);
    setMountFour(false);
  };
  const btnClickFive = () => {
    setScore(score + 1);
    setMountFive(false);
  };
  const btnClickSix = () => {
    setScore(score + 1);
    setMountSix(false);
  };
  const btnClickSeven = () => {
    setScore(score + 1);
    setMountSeven(false);
  };
  const btnClickEight = () => {
    setScore(score + 1);
    setMountEight(false);
  };
  const btnClickNine = () => {
    setScore(score + 1);
    setMountNine(false);
  };

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
                stateMount = {mountOne}
                fnBtnClicked = {btnClickOne}
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
                stateMount = {mountTwo}
                fnBtnClicked = {btnClickTwo}
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
                stateMount = {mountThree}
                fnBtnClicked = {btnClickThree}
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
                stateMount = {mountFour}
                fnBtnClicked = {btnClickFour}
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
                stateMount = {mountFive}
                fnBtnClicked = {btnClickFive}
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
                stateMount = {mountSix}
                fnBtnClicked = {btnClickSix}
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
                stateMount = {mountSeven}
                fnBtnClicked = {btnClickSeven}
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
                stateMount = {mountEight}
                fnBtnClicked = {btnClickEight}
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
                stateMount = {mountNine}
                fnBtnClicked = {btnClickNine}
              />
              :
              null
            }
          </div>
        </div>

        {console.log(`score: ${score}`)}

      </div>
    </div>
  );
};

// Play button component
const Play = ({ mountCanvas, setmountCanvas, mountPlayBtn, setmountPlayBtn }) => {
  // Function to load the game
  const fnStart = () => {
    setmountCanvas(true);
    setmountPlayBtn(false);
  };
  return (
    <div className="classCanvas classCenterDiv">
      <button className="btn btn-success classPlayBtn" onClick={() => fnStart()}>
        Play
      </button>
    </div>
  );
};

// Timer Component
// const Timer = ( {stateTimer, setTimer} ) => {
const Timer = ({ mountCanvas, setmountCanvas, mountForm, setmountForm }) => {
  // Set timer value
  const [timer, setTimer] = useState(3);

  const checkTimer = () => {
    // Call updater to get the latest value, otherwise timer will always be 60
    setTimer((state) => {
      // When timer reaches 0, unmount canvas and mount form
      if(state < 0){
        setmountCanvas(false);
        setmountForm(true);
      }
      console.log(`timer: ${state}`); // "React is awesome!"
      return state;
    });
    // console.log(`timer: ${timer}`); // shows 60 forever
  };

  // Run countDown() to decrement timer every 1 second once Timer ComponentIsMounted
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer( timer => timer - 1);
      checkTimer();
      // console.log('This will run every second!');
      // console.log(`timer: ${timer}`); // shows 60 forever
    }, 1000);
  }, []);

  return (
    <div>
      Time left: {timer} s
    </div>
  );
};

// Form for player to save name & score
const Form = ({ score, setScore }) => {
  return (
    <div>
      <form>
        Name: 
        <input>
        </input>
        <div>
          Score: {score}
        </div>
        <div>
          <button>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

// Main Component
const App = () => {
  // Initially don't load the game
  const [mountCanvas, setmountCanvas] = useState(false);
  // Display the Play button on load
  const [mountPlayBtn, setmountPlayBtn] = useState(true);
  // Initial score is 0
  const [score, setScore] = useState(0);
  // Form to submit score
  const [mountForm, setmountForm] = useState(false);
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8 classCenterDiv">
          <h3 className="classHeader">Whac-A-Mole</h3>

          <div>
            {/* if mount = true, then mount <Component/> */}
            { (mountPlayBtn === true)
              ?
              <Play
                mountCanvas = {mountCanvas}
                setmountCanvas = {setmountCanvas}
                mountPlayBtn = {mountPlayBtn}
                setmountPlayBtn = {setmountPlayBtn}
              />
              :
              null
            }
          </div>
          <div>
            {/* if mount = true, then mount <Component/> */}
            { (mountCanvas === true)
            ?
            <Timer
              mountCanvas = {mountCanvas}
              setmountCanvas = {setmountCanvas}
              mountForm = {mountForm}
              setmountForm = {setmountForm}
            />
            :
            null }
          </div>
          <div>
            {/* if mount = true, then mount <Component/> */}
            { (mountCanvas === true)
              ?
              <WhacCanvas
                score = {score}
                setScore = {setScore}
              />
              :
              null
            }
          </div>
          <div>
            {/* if mount = true, then mount <Component/> */}
            { (mountForm === true)
              ?
              <Form
                score = {score}
                setScore = {setScore}
              />
              :
              null
            }
          </div>

        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement)