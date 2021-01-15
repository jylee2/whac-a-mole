// Timer Component
const Timer = ({ mountCanvas, setmountCanvas, mountForm, setmountForm }) => {
  // Set timer value
  const [timer, setTimer] = useState(30);

  const checkTimer = () => {
    // Call updater to get the latest value, otherwise timer will always be 60
    setTimer((state) => {
      // When timer reaches 0, unmount canvas and mount form
      if(state < 0){
        setmountCanvas(false);
        // Show form after 1 second delay
        setTimeout( () => {
          setmountForm(true);
        }, 1000);
      }
      //console.log(`timer: ${state}`); // timer changes
      return state;
    });
    // console.log(`timer: ${timer}`); // shows 30 forever
  };

  // Run countDown() to decrement timer every 1 second once Timer ComponentIsMounted
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer( timer => timer - 1);
      checkTimer();
      // console.log(`timer: ${timer}`); // shows 30 forever
    }, 1000);
  }, []);

  return (
    <div>
      Time left: {timer} s
    </div>
  );
};