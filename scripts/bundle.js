/*
    bundle.js is the module for the bundle visualization.
*/

/* 
Output:         None
Input:          None.
Side effects:   Creates some objects on the html page
Notes:          Uses some arrays that are defined globally, creates the bundle visualization.
*/
function begin_viz()
{
  // Since we want to refresh the visualiztion sometimes, we remove the previous one.
  $("svg").remove();

  var matrix = [];

  // Extract out the rows from the building_matrix objects to make the final array.
  compounded_buildings.forEach(function(element, index, array)
    {
      matrix.push(element.Matrix);
    });

  var max_arc = 0;
  var max_transition = 0;

  matrix.forEach(function(row, index, array){
    cur_max_arc = 0;
    row.forEach(function(element, index2, array2){
      cur_max_arc += parseInt(element);
      
      if (parseInt(element) > max_transition){
        max_transition = parseInt(element);
      }
    })
    if (cur_max_arc > max_arc){
      max_arc = cur_max_arc;
    }
  });

  // create the chord object required for the bundle viz.
  var chord = d3.layout.chord()
    .padding(.05)
    .sortSubgroups(d3.descending)
    .matrix(matrix);

  // Define some size variables.
  /*var width = 960,
      height = 500,
      innerRadius = Math.min(width, height) * .41,
      outerRadius = innerRadius * 1.1;*/

  var width = $(window).width() * 0.7; 
  var height = $(window).height();
  var innerRadius = Math.min(width, height) * .40;
  var outerRadius = innerRadius * 1.1;


  // fill object for the colors. Will need to make it procedural (right now it assumes 4 buildings only..)
  var fill = d3.scale.ordinal()
      .domain(d3.range(8))
      .range(["#B0A03D", "#B08A3D", "#B0753D", "#B03F3D", "#94335F", "#722772", "#4E3077", "#3C357A"])
      //.range(["#5E412F", "#FCEBB6", "#78C0A8", "#F26223"]);
      //.range(["#EC95ED", "#95D2ED", "#EDE895", "#A8ED95"]);

  // Append the svg object to contain the visualization
  var svg = d3.select(".viz").append("svg")
      .attr("width", width )
      .attr("height", height)
      .style("position", "absolute")
      .append("g")
        //.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
        .attr("transform", "translate(" + outerRadius + "," + outerRadius + ")");

  // tooltip that will pop up on mouse hovering. Need 2 to make 2 separate line tooltip... Kinda stupid.
  var tooltip1 = d3.select("body")
      .append("div")
      .style("background-color", "#E0FFE0")
      .style("position", "absolute")
      .style("z-index", "10")
      .style("visibility", "hidden")
      .text("a simple tooltip");

  var tooltip2 = d3.select("body")
      .append("div")
      .style("background-color", "#E0FFE0")
      .style("position", "absolute")
      .style("z-index", "10")
      .style("visibility", "hidden")
      .text("a simple tooltip");

  // Create the actual visualization, just the circle arcs.
  svg.append("g").selectAll("path")
      // This binds the data to the visualization.
      .data(chord.groups)
      // enter().appent("path") essentially creates a new path html object for each
      // data entry in the bound data (chord.groups). Think of this essentially
      // as a big foreach
    .enter().append("path")
      // d here refers to the current data object from the bound data array.
      .style("fill", function(d) { 
             var col_index;
             if (compounded_buildings[d.index].Enrolled > max_arc){
                col_index = 7;  
             } else {
                col_index = (compounded_buildings[d.index].Enrolled / max_arc) * 8;
             }
             return fill(  Math.round(col_index) ); })
      .style("stroke", function(d) { 
             var col_index;
             if (compounded_buildings[d.index].Enrolled > max_arc){
                col_index = 7;  
             } else {
                col_index = (compounded_buildings[d.index].Enrolled / max_arc) * 8;
             }
             return fill(  Math.round(col_index) ); })
      .attr("d", d3.svg.arc().innerRadius(innerRadius).outerRadius(outerRadius))
      .on("mouseover", function(d)
          {
            // We use the index of d to display the correct building name and enrolled student number.
            tooltip1.text("Name: " + compounded_buildings[d.index].Name); 
            tooltip2.text("Enrolled: " + compounded_buildings[d.index].Enrolled); 
            tooltip2.style("visibility", "visible");
            return tooltip1.style("visibility", "visible");
          })
      .on("mousemove", function()
          {
            // Make the toolbox follow the mouse.
            // d3.event.pageY/pageX are the y and x coordinates of the mouse.
            tooltip2.style("top", (d3.event.pageY + 10)+"px").style("left",(d3.event.pageX+10)+"px");
            return tooltip1.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
          })
      .on("mouseout", function()
          {
            // erase the tooltips when mouse moves out of the arc.
            tooltip2.style("visibility", "hidden");
            return tooltip1.style("visibility", "hidden");
          })
      .on("click", function(d)
          {
            // Make the window visible.
            $("#overlay_div").css("visibility", "visible");
            // Draw the actual heatmap

            buildingName = compounded_buildings[d.index].Name

            heatmap();
            // Make heatmap div appear
            setTimeout(function(){overlay_showing = true}, 500);
          });
      //.on("mouseout", fade(1));


// The following code implements the "linking" portion of the bundle visualization.
// Commented out for now.

/*var ticks = svg.append("g").selectAll("g")
      .data(chord.groups)
    .enter().append("g").selectAll("g")
      .data(groupTicks)
    .enter().append("g")
      .attr("transform", function(d) {
        return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")"
            + "translate(" + outerRadius + ",0)";
      });

  ticks.append("line")
      .attr("x1", 1)
      .attr("y1", 0)
      .attr("x2", 5)
      .attr("y2", 0)
      .style("stroke", "#000");*/

  /*ticks.append("text")
      .attr("x", 8)
      .attr("dy", ".35em")
      .attr("transform", function(d) { return d.angle > Math.PI ? "rotate(180)translate(-16)" : null; })
      .style("text-anchor", function(d) { return d.angle > Math.PI ? "end" : null; })
      .text(function(d) { return d.label; });*/

  svg.append("g")
      .attr("class", "chord")
    .selectAll("path")
      .data(chord.chords)
    .enter().append("path")
      .attr("d", d3.svg.chord().radius(innerRadius))
      //.attr("stroke-width", 0)
      .style("fill", function(d) { 
             var col_index;
             if (d.source.value >= max_transition){
                col_index = 7;  
             } else {
                col_index = (d.source.value / max_transition) * 8;
             }
             return fill(  Math.round(col_index) ); })
      .style("stroke", function(d) { 
             var col_index;
             if (d.source.value >= max_transition){
                col_index = 7;  
             } else {
                col_index = (d.source.value / max_transition) * 8;
             }
             return fill(  Math.round(col_index) ); })
      .style("opacity", 1)
      //.on("mouseover", fade(.1))
      //.on("mouseout", fade(1));
      .on("mouseover", function(g, i)
          {
            /*if (d.source.index != i){
              console.log(g);
            }*/

            /*svg.selectAll(".chord path")
              .filter(function(d) { return d.source.index != g.source.index || d.target.index != g.target.index; })
              .transition()
              .style("opacity", 0.3);
*/
            svg.selectAll(".chord path")
              .filter(function(d) { return d.source.index == g.source.index && d.target.index == g.target.index; })
              .transition()
              .style("fill", "#FF0000")
              .style("stroke", "#FF0000");

            var sourceVal = parseInt(g.source.value) < 1? 1 : parseInt(g.source.value);
            var targetVal = parseInt(g.target.value) < 1? 1 : parseInt(g.target.value);

            if (g.source.index != g.target.index){
              tooltip1.text( sourceVal + " students from " + compounded_buildings[g.source.index].Name); 
              tooltip2.text( targetVal + " students from " + compounded_buildings[g.target.index].Name); 
              tooltip2.style("visibility", "visible");
              tooltip1.style("visibility", "visible");
            } else {
              tooltip1.text( sourceVal + " students staying in " + compounded_buildings[g.source.index].Name); 
              //tooltip2.text(parseInt(g.target.value) + " from " + compounded_buildings[g.target.index].Name); 
              //tooltip2.style("visibility", "visible");
              tooltip1.style("visibility", "visible");
            }

            
            //console.log(d.source.value);
            // We use the index of d to display the correct building name and enrolled student number.
            //console.log(d.target.index);
            /*tooltip1.text("Test"); 
            tooltip2.text("Test"); 
            tooltip2.style("visibility", "visible");
            return tooltip1.style("visibility", "visible");*/
          })
      .on("mousemove", function()
          {
            // Make the toolbox follow the mouse.
            // d3.event.pageY/pageX are the y and x coordinates of the mouse.
            tooltip2.style("top", (d3.event.pageY + 10)+"px").style("left",(d3.event.pageX+10)+"px");
            return tooltip1.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
          })
      .on("mouseout", function(g, i)
          {
            /*svg.selectAll(".chord path")
              .filter(function(d) { return d.source.index == g.source.index || d.target.index == g.target.index; })
              .transition()
              .style("opacity", 1);
*/
            svg.selectAll(".chord path")
              .filter(function(d) { return d.source.index == g.source.index && d.target.index == g.target.index; })
              .transition()
              .style("fill", function(d) { 
                 var col_index;
                 if (d.source.value >= max_transition){
                    col_index = 7;  
                 } else {
                    col_index = (d.source.value / max_transition) * 8;
                 }
                 return fill(  Math.round(col_index) ); 
              })
              .style("stroke", function(d) { 
                 var col_index;
                 if (d.source.value >= max_transition){
                    col_index = 7;  
                 } else {
                    col_index = (d.source.value / max_transition) * 8;
                 }
                 return fill(  Math.round(col_index) ); 
              });

              tooltip2.style("visibility", "hidden");
              tooltip1.style("visibility", "hidden");

            // erase the tooltips when mouse moves out of the arc.
            /*tooltip2.style("visibility", "hidden");
            return tooltip1.style("visibility", "hidden");*/
          });
      
  
}

// Returns an array of tick angles and labels, given a group.
function groupTicks(d) {
  var k = (d.endAngle - d.startAngle) / d.value;
  return d3.range(0, d.value, 1000).map(function(v, i) {
    return {
      angle: v * k + d.startAngle,
      label: i % 5 ? null : v / 1000 + "k"
    };
  });
}


// Returns an event handler for fading a given chord group.
function fade(opacity) {
  return function(g, i) {

    console.log("Test");

    svg.selectAll(".chord path")
        .filter(function(d) { return d.source.index != i && d.target.index != i; })
      .transition()
        .style("fill", "#FF0000");
  };
}
