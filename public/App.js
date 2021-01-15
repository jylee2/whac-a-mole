// const useState = React["useState"];
// const useEffect = React["useEffect"];
const { useState, useEffect } = React;

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
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-2"></div>
        <div className="col-xl-8 classCenterDiv">
          <a  className="classHeader classTextBlack" href="https://Whac-A-Mole.jylee3.repl.co">
          <h3>Whac-A-Mole</h3>
          </a>

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
              <Canvas
                score = {score}
                setScore = {setScore}
                mountCanvas = {mountCanvas}
                setmountCanvas = {setmountCanvas}
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
        <div className="col-xl-2"></div>
      </div>
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement)