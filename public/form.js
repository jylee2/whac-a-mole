// Form component for player to save name & score
const Form = ({ score, setScore }) => {
  return (
    <div>
      <form id="scoreForm" action="/api/post/add-player-score" method="post">
        <div className="form-group">
          <h4 id="displayScore">
            Score: {score}
          </h4>
          <div className="form-group">
            {/* use hidden input to save score */}
            <input type="hidden" id="pscore" class="form-control" name="score" value={score}></input>
          </div>

          <div className="form-group">
            <label for="uname" class="col-form-label">Enter Your Name </label>
            <input id="uname" class="form-control" type="text" name="username" placeholder="Adam Smith" maxlength="16" required></input>
          </div>
          <button className="btn btn-large btn-block btn-success">
            Save
          </button>
        </div>
      </form>
      
      <a href="https://Whac-A-Mole.jylee3.repl.co">
        <button className="btn btn-large btn-block btn-primary">
          Play Again
        </button>
      </a>
    </div>
  );
};