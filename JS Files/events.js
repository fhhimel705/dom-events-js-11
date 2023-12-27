console.log('this is separate js file');

// option 1 : directly set on html element
/* <button onclick="document.body.style.backgroundColor = 'orange'"> Make background orange </button>; */


// option 2 : add onlclick function on html element
// important --> we will use this
function makeYellow() {
  document.body.style.backgroundColor = "yellow";
}

// option 3
let makeRed = document.getElementById("makeRed");
makeRed.onclick = makeBackgroundRed;
function makeBackgroundRed() {
  document.body.style.backgroundColor = "red";
}

// option 3 (slightly different method)
let makePurple = document.getElementById("makePurple");
makePurple.onclick = function makeBackgroundPurple() {
  document.body.style.backgroundColor = "purple";
};

// option 4 
let makePink = document.getElementById('makePink');
makePink.addEventListener("click", makeBackgroundPink);
function makeBackgroundPink() {
  document.body.style.backgroundColor = "pink";
}

// option 4 (slightly different method)
let makeGreen = document.getElementById("makeGreen");
makeGreen.addEventListener("click", function makeBackgroundGreen() {
  document.body.style.backgroundColor = "green";
});

// option 4 Final 
// important --> we will use this sometimes
document.getElementById("goldenRod").addEventListener("click", function makeGoldenRod() {
    document.body.style.backgroundColor = "goldenRod";
  });