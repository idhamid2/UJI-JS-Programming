const PLOT_WIDTH = 600;
const PLOT_HEIGHT = 400;

// dimple.js variables 
let svg, chart; 

let upv = [];
let pis = [];

window.onload = main;
function updatePlot() {
  let station =  document.querySelector("#station_sel").value;
  let measureType =  document.querySelector("#measurement_sel").value;
  let chartType =  document.querySelector("#type_sel").value;
  //debugger;

  if(station == 'upv'){
    drawPlot(upv,measureType,chartType);
  }
  else 
  drawPlot(pis,measureType,chartType);
}

function main () {
  initPlot("#myChart");
  loadData();
  attachListeners();
  
} //  end of main function

function initPlot(el_id = "body") {
  svg = dimple.newSvg(el_id, PLOT_WIDTH, PLOT_HEIGHT);
}
function attachListeners(){
  var update= document.getElementById("btnUpdate");
  update.addEventListener( "click", updatePlot);
  var clear = document.getElementById("btnClear");
  clear.addEventListener("click", clearPlot);
} // end of attachlistener function


/*
  Dimple.js Chart construction code
*/
function drawPlot(dataset, measurement, type) {
  clearPlot();

  chart = new dimple.chart(svg, dataset);
  
  let x = chart.addCategoryAxis("x", "Date");
  x.addOrderRule("Date");
  chart.addMeasureAxis("y", measurement);
  if (type=="bar") {
    chart.addSeries(type, dimple.plot.bar);
  } else if (type=="bubble") {
    chart.addSeries(type, dimple.plot.bubble);
  } else {
    chart.addSeries(type, dimple.plot.line);
  }

  chart.draw();
}

/*
  D3.js code
*/
function clearPlot() {
  if (chart!=undefined)
    d3.select("g").remove(); 
}




function loadData(){ 
upv = [
  {
    "Date": "01/08/2019",
    "PM2.5": 11,
    "PM10": 16
  },
  {
    "Date": "02/08/2019",
    "PM2.5": 11,
    "PM10": 15
  },
  {
    "Date": "03/08/2019",
    "PM2.5": 10,
    "PM10": 15
  },
  {
    "Date": "05/08/2019",
    "PM2.5": 14,
    "PM10": 21
  },
  {
    "Date": "06/08/2019",
    "PM2.5": 20,
    "PM10": 29
  },
  {
    "Date": "07/08/2019",
    "PM2.5": 27,
    "PM10": 36
  },
  {
    "Date": "08/08/2019",
    "PM2.5": 20,
    "PM10": 28
  },
  {
    "Date": "09/08/2019",
    "PM2.5": 12,
    "PM10": 25
  },
  {
    "Date": "10/08/2019",
    "PM2.5": 14,
    "PM10": 20
  },
  {
    "Date": "11/08/2019",
    "PM2.5": 13,
    "PM10": 17
  },
  {
    "Date": "12/08/2019",
    "PM2.5": 11,
    "PM10": 17
  },
  {
    "Date": "13/08/2019",
    "PM2.5": 8,
    "PM10": 16
  },
  {
    "Date": "14/08/2019",
    "PM2.5": 10,
    "PM10": 16
  },
  {
    "Date": "15/08/2019",
    "PM2.5": 11,
    "PM10": 14
  },
  {
    "Date": "16/08/2019",
    "PM2.5": 9,
    "PM10": 12
  },
  {
    "Date": "17/08/2019",
    "PM2.5": 10,
    "PM10": 12
  },
  {
    "Date": "18/08/2019",
    "PM2.5": 10,
    "PM10": 12
  },
  {
    "Date": "19/08/2019",
    "PM2.5": 11,
    "PM10": 14
  },
  {
    "Date": "20/08/2019",
    "PM2.5": 12,
    "PM10": 25
  },
  {
    "Date": "21/08/2019",
    "PM2.5": 6,
    "PM10": 9
  },
  {
    "Date": "22/08/2019",
    "PM2.5": 8,
    "PM10": 10
  },
  {
    "Date": "23/08/2019",
    "PM2.5": 11,
    "PM10": 15
  },
  {
    "Date": "24/08/2019",
    "PM2.5": 14,
    "PM10": 17
  },
  {
    "Date": "25/08/2019",
    "PM2.5": 15,
    "PM10": 17
  },
  {
    "Date": "26/08/2019",
    "PM2.5": 18,
    "PM10": 20
  },
  {
    "Date": "27/08/2019",
    "PM2.5": 9,
    "PM10": 12
  },
  {
    "Date": "28/08/2019",
    "PM2.5": 10,
    "PM10": 13
  },
  {
    "Date": "29/08/2019",
    "PM2.5": 11,
    "PM10": 14
  },
  {
    "Date": "30/08/2019",
    "PM2.5": 14,
    "PM10": 18
  },
  {
    "Date": "31/08/2019",
    "PM2.5": 13,
    "PM10": 16
  }
];
pis = [
  {
    "Date": "01/08/2019",
    "PM2.5": 16,
    "PM10": 20
  },
  {
    "Date": "02/08/2019",
    "PM2.5": 14,
    "PM10": 23
  },
  {
    "Date": "03/08/2019",
    "PM2.5": 15,
    "PM10": 17
  },
  {
    "Date": "04/08/2019",
    "PM2.5": 14,
    "PM10": 16
  },
  {
    "Date": "05/08/2019",
    "PM2.5": 21,
    "PM10": 26
  },
  {
    "Date": "06/08/2019",
    "PM2.5": 30,
    "PM10": 31
  },
  {
    "Date": "07/08/2019",
    "PM2.5": 0,
    "PM10": 0
  },
  {
    "Date": "08/08/2019",
    "PM2.5": 27,
    "PM10": 24
  },
  {
    "Date": "09/08/2019",
    "PM2.5": 16,
    "PM10": 35
  },
  {
    "Date": "10/08/2019",
    "PM2.5": 20,
    "PM10": 22
  },
  {
    "Date": "11/08/2019",
    "PM2.5": 0,
    "PM10": 0
  },
  {
    "Date": "12/08/2019",
    "PM2.5": 15,
    "PM10": 14
  },
  {
    "Date": "13/08/2019",
    "PM2.5": 11,
    "PM10": 16
  },
  {
    "Date": "14/08/2019",
    "PM2.5": 17,
    "PM10": 16
  },
  {
    "Date": "15/08/2019",
    "PM2.5": 17,
    "PM10": 17
  },
  {
    "Date": "16/08/2019",
    "PM2.5": 15,
    "PM10": 15
  },
  {
    "Date": "17/08/2019",
    "PM2.5": 0,
    "PM10": 0
  },
  {
    "Date": "18/08/2019",
    "PM2.5": 0,
    "PM10": 0
  },
  {
    "Date": "19/08/2019",
    "PM2.5": 0,
    "PM10": 0
  },
  {
    "Date": "20/08/2019",
    "PM2.5": 16,
    "PM10": 23
  },
  {
    "Date": "21/08/2019",
    "PM2.5": 11,
    "PM10": 18
  },
  {
    "Date": "22/08/2019",
    "PM2.5": 10,
    "PM10": 22
  },
  {
    "Date": "23/08/2019",
    "PM2.5": 13,
    "PM10": 16
  },
  {
    "Date": "24/08/2019",
    "PM2.5": 0,
    "PM10": 0
  },
  {
    "Date": "25/08/2019",
    "PM2.5": 0,
    "PM10": 0
  },
  {
    "Date": "26/08/2019",
    "PM2.5": 0,
    "PM10": 0
  },
  {
    "Date": "27/08/2019",
    "PM2.5": 0,
    "PM10": 0
  },
  {
    "Date": "28/08/2019",
    "PM2.5": 14,
    "PM10": 29
  },
  {
    "Date": "29/08/2019",
    "PM2.5": 18,
    "PM10": 31
  },
  {
    "Date": "30/08/2019",
    "PM2.5": 20,
    "PM10": 32
  },
  {
    "Date": "31/08/2019",
    "PM2.5": 18,
    "PM10": 30
  }
];

}









