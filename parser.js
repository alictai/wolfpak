var parse_courses = function()
{
	d3.csv("CourseLocations.csv", function(courses)
		{
			console.log("courses:", courses)
		})
}