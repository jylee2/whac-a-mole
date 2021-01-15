const jsonUrl = `https://whac-a-mole.jylee3.repl.co/api/scoreboard.json`;

// Main Component
const Score = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-2"></div>
        <div className="col-xl-8 classCenterDiv">
          <h3 className="classHeader">Whac-A-Mole Scoreboard</h3>

          <div className="classBox">
            <a href="https://Whac-A-Mole.jylee3.repl.co">
              <button className="btn btn-large btn-block btn-primary classPlayAgain">
                Play Again
              </button>
            </a>
            <div id="scoreboard">
            </div>
          </div>

        </div>
        <div className="col-xl-2"></div>
      </div>
    </div>
  );
};
const rootElement = document.getElementById('score-root');
ReactDOM.render(<Score />, rootElement)

const scoreDiv = document.getElementById('scoreboard');

const loadData = async (d) => {
  const fetchData = await fetch(d);
  if(!fetchData.ok){
    throw new Error(`HTTP error! Status: ${fetchData.status}`);
  } else {
    const jsonData = await fetchData.json();
    // console.log(`jsonData[1]["score"]: ${jsonData[1]["score"]}`);
    let names = [];
    let scores = [];
    let dates = [];
    let rank = [];
    for(let i = 0; i < jsonData.length; i++){
      names.push(jsonData[i]["username"]);
      scores.push(jsonData[i]["score"]);
      dates.push(new Date(jsonData[i]["date"]).toDateString());
      rank.push(i+1);
    }
    // console.log(`names: ${names}`);
    let result = `
      <div class="table-responsive-md">
      <table class="table">
      <thead class="thead-dark">
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Score</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>`;

    for(let j = 0; j < scores.length; j++){
      result = result + `
      <tr>
        <td>${rank[j]}</td>
        <td>${names[j]}</td>
        <td>${scores[j]}</td>
        <td>${dates[j]}</td>
      </tr>
      `
    }
    result = result + `</tbody></table></div>`;
    scoreDiv.innerHTML = `${result}`;

  }
};
// Fetch data
loadData(jsonUrl).catch( (e) => {
    console.log(`Error: ${e.message}`);
});