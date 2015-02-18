function pieChart(){

	$("#piechart").remove();

	var width = $("#overlay_div").height() * 0.6,
		height = $("#overlay_div").height() * 0.6,
		radius = $("#overlay_div").height() * 0.28;

	var color = d3.scale.ordinal()
		.range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

	var arc = d3.svg.arc()
		.outerRadius(radius - 10)
		.innerRadius(0);

	var pie = d3.layout.pie()
		.sort(null)
		.value(function(d) { return d.population; });

	var svg = d3.select("#overlay_div").append("svg")
		.attr("width", width)
		.attr("height", height)
		.attr("id", "piechart")
		.style("position", "absolute")
		.append("g")
			.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

	/*d3.csv("data.csv", function(error, data) {
		data.forEach(function(d) {
			d.population = +d.population;
		}
	);*/
	
	// Dummy data -- will replace.
	var data = [
		{age: "ha", population: 10},
		{age: 15, population: 20},
		{age: 255, population: 30},
		{age: 35, population: 40},
		{age: 450, population: 50},	
		{age: "ha", population: 10},
		{age: 15, population: 20},
		{age: 255, population: 30},
		{age: 35, population: 40},
		{age: 450, population: 50}	
			
	];

	var g = svg.selectAll(".arc")
		.data(pie(data))
		.enter().append("g")
	    	.attr("class", "arc");
	    	
	g.append("title").text(function(d) { 
								return d.data.age; 
							});

	g.append("path")
	  	.attr("d", arc)
	  	.style("fill", function(d) { return color(d.data.age); });

	/*g.append("text")
	  	.attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
	  	.attr("dy", ".35em")
	  	.style("text-anchor", "middle")
	  	.text(function(d) { return d.data.age; });
	  	*/
}