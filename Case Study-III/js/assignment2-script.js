// Bounding box refers to UJI campus
const bboxCampus = 
[-0.07947921752929688, 39.98619605209568, -0.04978179931640625, 40.00000497268461];
// last value of long is smaller.....long and lat pattern

const ANALYSIS_CENTROID = "centroid";
const ANALYSIS_BUFFER = "buffer";
const ANALYSIS_VORONOI = "voronoi";
const ANALYSIS_BUFFER_RATIO = 0.3;

let numPoints, typeCompute; 
let btnPoints, btnCompute;
let activePoints;
let myJSON;
let count=0;

window.onload = main;


function main() {
  initMap('map-div');
  //

  attachListeners();
  initGlobalVariables();
  document.getElementById("num").placeholder = "Enter Number"
/* 
  toggleVisibilityComputation("hide");
 */
  addBoundingBoxToMap(bboxCampus);
} // end of main function

function attachListeners(){
  
  btnPoints = document.getElementById("btn-points");
  btnPoints.addEventListener( "click", checking); 
  analysis = document.getElementById("sel-compute");
  analysis.addEventListener("change", showAnalysis);
} // end of attachlistener function

function initGlobalVariables() {
  btnPoints = document.getElementById("btn-points");
  numPoints =  document.getElementById("num").value;
}

function checking(){
  //debugger;
clearStuff();
numPoints =  document.getElementById("num").value;
if(numPoints<=0 || numPoints % 1 != 0){
  alert("Invalid Number");
}
else{
  document.getElementById("table-div").className = 'show';  
  extractCoordinates();
}
} // end of checking function


function extractCoordinates(){
 //debugger;
 myJSON = generateRamdomTurfPoints(numPoints, bboxCampus);
 table = document.getElementById("tbl").getElementsByTagName('tbody')[0]; 
 buttoncount= 0;
  for(a in myJSON.features){
      //console.log("The lat is "+ myJSON.features[a].geometry.coordinates[0] +"and the long is " + myJSON.features[a].geometry.coordinates[1]); 
      // inserting a new row
      row = table.insertRow();
      latitude = myJSON.features[a].geometry.coordinates[0].toFixed(3);
      longitude = myJSON.features[a].geometry.coordinates[1].toFixed(3);
      row.insertCell(0).innerHTML = latitude;
      row.insertCell(1).innerHTML = longitude;
      console.log(buttoncount);
      row.insertCell(2).innerHTML = "<button type='button'  class = 'changebutton' onclick = 'showMap("+latitude+","+longitude+","+buttoncount+")'> view</button>";
      buttoncount=buttoncount + 1;
      }
} // end of extractCoordinates function


 function showMap(latitude, longitude, number){
    // display points on map
  addPointToMap(latitude, longitude, false);

  document.getElementsByClassName('changebutton')[number].innerHTML = 'On Map';
  document.getElementsByClassName('changebutton')[number].disabled = true;
  document.getElementsByClassName('changebutton')[number].style.cursor = 'not-allowed';
  
  count =count+1;

  if(count == numPoints){
    document.getElementById("lbl-compute").className = 'show';    
    document.getElementById("sel-compute").className = 'show';   
   
  }
} // end of show map function

function showAnalysis(){
  analysis =  document.getElementById("sel-compute").value;  

  if(analysis==ANALYSIS_CENTROID){
    showCentroid();
    }
  else if(analysis==ANALYSIS_BUFFER){
    showBuffer();
    }
  else if(analysis==ANALYSIS_VORONOI){
    showVoroni();
  }
  else{
   cleanCentroid();
  cleanPolygon();
  }
} // end of analysis function

function showCentroid(){
  //debugger;
  cleanPolygon();
  let centroidPoint = computeTurfCentroid(myJSON); 
  addPointToMap(centroidPoint.geometry.coordinates[0] , centroidPoint.geometry.coordinates[1] , true);
} // end of ShowCentroid

function showBuffer(){
  //debugger;
cleanCentroid();
cleanPolygon();
  for(i=0;i<myJSON.features.length;i++){
    addCirclesToMap(computeTurfBuffer(myJSON.features[i].geometry.coordinates[0],myJSON.features[i].geometry.coordinates[1], ANALYSIS_BUFFER_RATIO));  
  }
} // end of ShowBuffer

function showVoroni(){
  //debugger;
  cleanCentroid();
  cleanPolygon();
  addPolygonsToMap(computeTurfVoronoi(myJSON));
}// end of ShowVoroni


function clearStuff(){
  cleanFeatures();
document.getElementById("table-div").className = 'hide';  
document.getElementById("tbl").getElementsByTagName('tbody')[0].innerHTML=""; 
document.getElementById("lbl-compute").className = 'hide';  
analysis = document.getElementById("sel-compute");
analysis.className = 'hide';  
analysis.selectedIndex=0;
count=0; 
} // end of clearStuff function