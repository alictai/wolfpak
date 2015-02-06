/*
    heatmap.js is the module for the heatmap visualization.
*/

/* 
Output:         None
Input:          None.
Side effects:   Creates the heatmap by attaching it to the overlay_div.
Notes:          None.
*/
function heatmap(){

  // Remove any old heatmaps.
  $("#heatmap").remove();

  // Initializing various variables.
  var margin = { top: ($("#overlay_div").height() * 0.05), right: ($("#overlay_div").width() * 0.1), bottom: ($("#overlay_div").height() * 0.45), left: ($("#overlay_div").width() * 0.1) },
      width = ($("#overlay_div").width() * 1.0) - margin.left - margin.right,
      height = ($("#overlay_div").height() * 1.0) - margin.top - margin.bottom,
      gridSize = Math.floor(width / 24.0),
      legendElementWidth = gridSize*2,
      buckets = 9,
      colors = ["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"], // alternatively colorbrewer.YlGnBu[9]
      days = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
      //times = ["1a", "2a", "3a", "4a", "5a", "6a", "7a", "8a", "9a", "10a", "11a", "12a", "1p", "2p", "3p", "4p", "5p", "6p", "7p", "8p", "9p", "10p", "11p", "12p"];
      times = ["8:05AM", "9:30", "10:30AM", "12:00PM", "1:30PM", "3:00PM", "4:30PM", "6:00PM", "7:30PM", "9:00PM"]

  // Parse the csv data (for now). It is just dummy data.
  var parsed_heatmap = d3.csv.parse(dummyHeatData);

  var colorScale = d3.scale.quantile()
        .domain([0, buckets - 1, d3.max(parsed_heatmap, function (d) { return d.value; })])
        .range(colors);

  // Attach the csv to the overlay_div. This is the div that pops up when clicking on an arc.
  var svg = d3.select("#overlay_div").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .attr("id", "heatmap")
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
      
  var dayLabels = svg.selectAll(".dayLabel")
      .data(days)
      .enter().append("text")
        .text(function (d) { return d; })
        .attr("x", 0)
        .attr("y", function (d, i) { return i * gridSize; })
        .style("text-anchor", "end")
        .attr("transform", "translate(-6," + gridSize / 1.5 + ")")
        .attr("class", function (d, i) { return ((i >= 0 && i <= 4) ? "dayLabel mono axis axis-workweek" : "dayLabel mono axis"); });

  var timeLabels = svg.selectAll(".timeLabel")
      .data(times)
      .enter().append("text")
        .text(function(d) { return d; })
        .attr("x", function(d, i) { return i * gridSize; })
        .attr("y", 0)
        .style("text-anchor", "middle")
        .attr("transform", "translate(" + gridSize / 2 + ", -6)")
        .attr("class", function(d, i) { return ((i >= 7 && i <= 16) ? "timeLabel mono axis axis-worktime" : "timeLabel mono axis"); });

  var heatMap = svg.selectAll(".hour")
      .data(parsed_heatmap)
      .enter().append("rect")
      .attr("x", function(d) { return (parseInt(d.hour) - 1) * gridSize; })
      .attr("y", function(d) { return (parseInt(d.day) - 1) * gridSize; })
      .attr("rx", 4)
      .attr("ry", 4)
      .attr("class", "hour bordered")
      .attr("width", gridSize)
      .attr("height", gridSize)
      .style("fill", colors[0]);

  heatMap.transition().duration(1000)
      .style("fill", function(d) { return colorScale(d.value); });

  heatMap.append("title").text(function(d) { return d.value; });
      
  var legend = svg.selectAll(".legend")
      .data([0].concat(colorScale.quantiles()), function(d) { return d; })
      .enter().append("g")
      .attr("class", "legend");

  legend.append("rect")
    .attr("x", function(d, i) { return legendElementWidth * i; })
    .attr("y", height)
    .attr("width", legendElementWidth)
    .attr("height", gridSize / 2)
    .style("fill", function(d, i) { return colors[i]; });

  legend.append("text")
    .attr("class", "mono")
    .text(function(d) { return "≥ " + Math.round(d); })
    .attr("x", function(d, i) { return legendElementWidth * i; })
    .attr("y", height + gridSize);
  
}

