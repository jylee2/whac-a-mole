// Play button component
const Play = ({ mountCanvas, setmountCanvas, mountPlayBtn, setmountPlayBtn }) => {
  // Function to load the game and unmount the play button
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