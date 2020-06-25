const totalPoints=document.getElementById("total-points");


function displayResults() {

// ?? The following isn't working - how can I fetch the nbofpoints from game.js and display it here?
    totalPoints.textContent=${nbOfPoints};
}
displayResults();

function displayResults() {
axios
    .get("game.js")
    .then((res) => {
      totalPoints.textContent = res.nbOfPoints;
    })
    .catch((err) => {
      console.error(err);
    });

}