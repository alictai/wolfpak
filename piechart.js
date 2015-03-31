function pieChart(pieData){

	$("#piechart").remove();

	var maxVal = 0;

	pieData.forEach(function(value, index, array){
		if (parseInt( value.Enrolled) > maxVal){
			maxVal = parseInt(value.Enrolled);
		}
	});

	var width = $("#overlay_div").height() * 0.6,
		height = $("#overlay_div").height() * 0.6,
		radius = $("#overlay_div").height() * 0.26;

	var fill = d3.scale.ordinal()
      .domain(d3.range(8))
      .range(["#B0A03D", "#B08A3D", "#B0753D", "#B03F3D", "#94335F", "#722772", "#4E3077", "#3C357A"]);

	var color = d3.scale.ordinal()
		.range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

	var arc = d3.svg.arc()
		.outerRadius(radius - 10)
		.innerRadius(0);

	var pie = d3.layout.pie()
		.sort(null)
		.value(function(d) { return d.Enrolled; });

	var svg = d3.select("#overlay_div").append("svg")
		.attr("width", width)
		.attr("height", height)
		.attr("id", "piechart")
		.style("position", "absolute");

	var text = svg.append("text")
			   .attr("x", width / 2)
               .attr("y", 25)
               .attr("text-anchor", "middle")
               .text( "Departmental Distribution")
               .attr("font-family", "sans-serif")
               .attr("font-size", "20px")
               .attr("fill", "black");

	var g1 = svg.append("g")
			.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

	var g = g1.selectAll(".arc")
		.data(pie(pieData))
		.enter().append("g")
	    	.attr("class", "arc");
	    	
	g.append("title").text(function(d) { 
								return d.data.Department + ": " + d.data.Enrolled + " students"; 
							});

	g.append("path")
	  	.attr("d", arc)
	  	.style("fill", function(d) { 
	  		console.log(maxVal);

             var col_index;
             if (parseInt(d.data.Enrolled) >= maxVal){
                col_index = 7;  
             } else {
                col_index = (parseInt(d.data.Enrolled) / maxVal) * 8;
             }
             return fill(  Math.round(col_index) ); 
        });

	/*g.append("text")
	  	.attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
	  	.attr("dy", ".35em")
	  	.style("text-anchor", "middle")
	  	.text(function(d) { return d.data.age; });
	  	*/
}