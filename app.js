
FusionCharts.ready(function(){
  var revenueChart = new FusionCharts({
    "type": "column2d",
    "renderAt": "chartContainer",
    "width": "500",
    "height": "300",
    "dataFormat": "json",
    "dataSource": {
      "chart": {
          "caption": "Monthly revenue for last year",
          "subCaption": "Harry's SuperMart",
          "xAxisName": "Month",
          "yAxisName": "Revenues (In USD)",
          "theme": "fint"
       },
      "data":[{"label":"Bayview","value":118},{"label":"Bernal Heights","value":451},{"label":"Castro\/Upper Market","value":480},{"label":"Chinatown","value":152},{"label":"Crocker Amazon","value":28},{"label":"Diamond Heights","value":22},{"label":"Downtown\/Civic Center","value":564},{"label":"Excelsior","value":153},{"label":"Financial District","value":140},{"label":"Glen Park","value":82},{"label":"Golden Gate Park","value":8},{"label":"Haight Ashbury","value":414},{"label":"Inner Richmond","value":287},{"label":"Inner Sunset","value":170},{"label":"Lakeshore","value":52},{"label":"Marina","value":306},{"label":"Mission","value":1036},{"label":"Nob Hill","value":322},{"label":"Noe Valley","value":390},{"label":"North Beach","value":180},{"label":"Ocean View","value":111},{"label":"Outer Mission","value":164},{"label":"Outer Richmond","value":195},{"label":"Outer Sunset","value":254},{"label":"Pacific Heights","value":243},{"label":"Parkside","value":121},{"label":"Potrero Hill","value":286},{"label":"Presidio","value":6},{"label":"Presidio Heights","value":39},{"label":"Russian Hill","value":224},{"label":"Seacliff","value":24},{"label":"South of Market","value":618},{"label":"Treasure Island\/YBI","value":25},{"label":"Twin Peaks","value":101},{"label":"Visitacion Valley","value":38},{"label":"West of Twin Peaks","value":123},{"label":"Western Addition","value":779}]

    }
});

revenueChart.render();
})

FusionCharts['debugger'].outputTo(function (message) {
    console.log(message);
});
FusionCharts['debugger'].enable(true);