/*
    heatmap.js is the module for the heatmap visualization.
*/

var buildingName;

/* 
Output:         None
Input:          Name of building that was just clicked -- BUG: ON RESIZE NAME ISNT PASSED IN. MUST THINK OF WAY TO PRESERVE NAME OF BUILDING UPON RESIZE.
Side effects:   Creates the heatmap by attaching it to the overlay_div.
Notes:          None.
*/
function heatmap(){


  // Remove any old heatmaps.
  $("#heatmap").remove();

  // Initializing various variables.
  var margin = { top: ($("#overlay_div").height() * 0.05), right: ($("#overlay_div").width() * 0.02), bottom: ($("#overlay_div").height() * 0.45), left: ($("#overlay_div").width() * 0.05) },
      width = ( ($("#overlay_div").width() * 1.0) - margin.left - margin.right ) * 0.6 ,
      //height = ($("#overlay_div").height() * 1.0) - margin.top - margin.bottom,
      height = ($("#overlay_div").height() * 1),
      gridSizeX = Math.floor(width / 10.0),
      gridSizeY = Math.floor(height / 8.0),
      legendElementWidth = gridSizeX,
      buckets = 9,
      colors = ["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"], // alternatively colorbrewer.YlGnBu[9]
      days = ["Mo", "Tu", "We", "Th", "Fr"],
      //times = ["1a", "2a", "3a", "4a", "5a", "6a", "7a", "8a", "9a", "10a", "11a", "12a", "1p", "2p", "3p", "4p", "5p", "6p", "7p", "8p", "9p", "10p", "11p", "12p"];
      times = ["8:05AM", "9:30AM", "10:30AM", "12:00PM", "1:30PM", "3:00PM", "4:30PM", "6:00PM", "7:30PM", "9:00PM"],
      ranges = [0, 40, 80, 120, 160, 200, 240, 280, 320]

  // Parse the csv data (for now). It is just dummy data.
  //var parsed_heatmap = d3.csv.parse(dummyHeatData2);
  //console.log(parsed_heatmap);
  //var parsed_heatmap = parseCourseTimes(buildingName, selected_courses);

  // Parse all the course data then filter through to only select the ones happening in this building.
  var parsed_data = d3.csv.parse(courseLocations);
  var parsed_heatmap = parseCourseTimes(buildingName, parsed_data);

  // Make the color thresholds dependent on the max value of the current heatmap.
  ranges = calculateRanges(parsed_heatmap);

  // Display name of building on top of heatmap
  $("#building_name").text(buildingName);

  var colorScale = d3.scale.quantile()
        //.domain([0, buckets - 1, d3.max(parsed_heatmap, function (d) { return d.value; })])
        .domain(ranges)
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
        .attr("y", function (d, i) { return i * gridSizeY; })
        .style("text-anchor", "end")
        .attr("transform", "translate(-6," + gridSizeY / 1.5 + ")")
        .attr("class", function (d, i) { return ((i >= 0 && i <= 4) ? "dayLabel mono axis axis-workweek" : "dayLabel mono axis"); });

  var timeLabels = svg.selectAll(".timeLabel")
      .data(times)
      .enter().append("text")
        .text(function(d) { return d; })
        .attr("x", function(d, i) { return (i * gridSizeX) - (gridSizeX / 6); })
        .attr("y", 0)
        .style("text-anchor", "middle")
        .attr("transform", "translate(" + gridSizeX / 2 + ", -6)")
        .attr("class", function(d, i) { return ((i >= 7 && i <= 16) ? "timeLabel mono axis axis-worktime" : "timeLabel mono axis"); });

  var heatMap = svg.selectAll(".hour")
      .data(parsed_heatmap)
      .enter().append("rect")
        .attr("x", function(d) { return (parseInt(d.hour)) * gridSizeX; })
        .attr("y", function(d) { return (parseInt(d.day)) * gridSizeY; })
        .attr("rx", 4)
        .attr("ry", 4)
        .attr("class", "hour bordered")
        .attr("width", gridSizeX)
        .attr("height", gridSizeY)
        .style("fill", colors[0])
        .on("click", function(d)
          {
            console.log(d);
          });

  heatMap.transition().duration(1000)
      .style("fill", function(d) { return colorScale(d.value); });

  heatMap.append("title").text(function(d) { return d.value; });
      
  var legend = svg.selectAll(".legend")
      //.data([0].concat(colorScale.quantiles()), function(d) { return d; })
      .data(ranges)
      .enter().append("g")
      .attr("class", "legend");

  legend.append("rect")
    .attr("x", function(d, i) { return legendElementWidth * i; })
    .attr("y", gridSizeY * 5.5)
    .attr("width", legendElementWidth)
    .attr("height", gridSizeY / 2)
    .style("fill", function(d, i) { return colors[i]; });

  legend.append("text")
    .attr("class", "mono")
    .text(function(d) { return "≥ " + Math.round(d); })
    .attr("x", function(d, i) { return legendElementWidth * i; })
    .attr("y", gridSizeY * 6.5);

  pieChart();
}

/* 
Output:         Array of size 9 for the color gradient threshold
Input:          Array of heatmap data objects
Side effects:   None.
Notes:          None.
*/
function calculateRanges(heatmap_data){
  // Make the color thresholds dependent on the max value of the current heatmap.
  var max = 0;
  for(h = 0; h < heatmap_data.length; h++){
    if (max < heatmap_data[h].value){
      max = heatmap_data[h].value;
    }
  }

  var offset = max / 9;
  ranges = [];

  for(u = 0; u < 9; u++){
    ranges.push(offset * u);
  }

  return ranges;
}

/* 
Output:         Array of objects for days, times and number of students in the building at that time
Input:          Name of building and selected courses
Side effects:   None.
Notes:          None.
*/
function parseCourseTimes(buildingName, selected_courses){

  //console.log(selected_courses);

  var numberOfStudentsInBuilding = []; 
  var times = ["8:05 AM", "9:30 AM", "10:30 AM", "12:00 PM", "1:30 PM", "3:00 PM", "4:30 PM", "6:00 PM", "7:30 PM", "9:00 PM"];
  var days = ["M", "T", "W", "R", "F"];

  // Going through each day
  for (i = 0; i < 5; i++) {
    // Going through each starting time 
    for (j = 0; j < 10; j++){
      var currentPeriod = {};
      currentPeriod.day = i;
      currentPeriod.hour = j;

      totalEnrolled = 0;

      // array used to collect all the courses happening during this period on this day.
      var coursesDuringPeriod = [];

      selected_courses.forEach(function(element, index, array){
        if(element.BuildingName == buildingName){
          if (HappensOnDay(element.Weekdays, days[i])) {
            if (element.StartTime == times[j]){
              coursesDuringPeriod.push(element);
              totalEnrolled += parseInt(element.Enrolled);
            }
          }
        }
      });

      currentPeriod.courses = coursesDuringPeriod;

      currentPeriod.value = totalEnrolled;

      /*if(totalEnrolled > 0){
        console.log(currentPeriod);
      }*/

      numberOfStudentsInBuilding.push(currentPeriod);
    }
  }

  return numberOfStudentsInBuilding;
}

/* 
Output:         true or false, depending on whether days_string contains day.
Input:          days_string and a current day letter
Side effects:   None.
Notes:          None.
*/
function HappensOnDay(days_string, day){
  // The days_string can look like TR if a class happens
  // on tuesday and thursday. Split it up and check if we 
  // get a match
  var characters = days_string.split("");

  for(k = 0; k < characters.length; k++){
    if (characters[k] == day){
      return true;
    }
  }
  return false;
}
