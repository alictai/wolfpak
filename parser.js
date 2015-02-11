/*
    parse.js is a module that contains functions to filter and organize
    the data.
*/

/* 
Output:         Array of course objects from the courses csv file.
Input:          None.
Side effects:   Adds a Dept property to each course object which is the abbreviated department of the course.
                Also gets rid of the room number, preserving only the building code.
Notes:          For now I had to use some JS trickery to get the csv file as a string (see CourseLocationCSV.js).
                As you can see the, the commented out section is what would actually need to happen if we were
                hosting the csv file. But to make testing easier and not having to host our website for testing, 
                we decided to use this cheap trick for now.
*/
function parse_courses()
{

    // This will need to happen when we move on to use
    // a real hosted csv file.

	/*if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            return xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", "CourseLocations.csv", false );
    xmlhttp.send();  
    */

	var parsed_data = d3.csv.parse(courseLocations);

    // Doing some work on the parsed course objects.
    parsed_data.forEach(function(element, index, array)
        {
            element.Dept = element.Course.split(" ")[0];
            element.Location = element.Location.split(" ")[0];
        });

    return parsed_data;
}

/*
Output:         None.
Input:          array of courses and selected department code.
Side effects:   None.
Notes:          Filters through the courses for the chosen department. Creates a 
                relationship matrix (used for the bundle visualization) and begins the
                visualization.
*/
function split_buildings(courses, dept)
{
    var buildings = [];
    selected_courses = [];
    // Aggregate all courses into buildings by adding Enrolled students.
    courses.forEach(function(element, index, array)
        {
            if (dept == "" || dept == element.Department){

                selected_courses.push(element);

                var index = contains_building(buildings, element.BuildingName);
                Num = parseInt(element.Enrolled);
                // -1 means that buildings isn't in the array yet.
                if (index == -1){
                    buildings.push({"Building": element.BuildingName, "Enrolled" : Num});
                } else {
                    buildings[index].Enrolled += Num;
                }
            }
        });

    // Remove buildings with only 1 student in them. This can result from those 
    // independent study courses.
    buildings = buildings.filter(function(element)
                {
                    return element.Enrolled > 1;
                });

    compounded_buildings = create_matrix(buildings);
    begin_viz();
}

/*
Output:         Index of where the building code is at in the buildings array.
Input:          array of building objects and a building code
Side effects:   None.
Notes:          Essentially used to check if the building code already exists in the buildings array.
                returns -1 if the building does not exist yet.
*/
function contains_building(buildings, location)
{
    var building_index = -1;

    buildings.forEach(function(element, index, array)
        {
            if(element.Building == location){
                building_index = index;
            }
        });

    return building_index;
}

/*
Output:         array of building_matrix objects
Input:          array of building objects.
Side effects:   None.
Notes:          Each building_matrix object is composed of a Matrix, Name and Enrolled property.
                The Matrix object is essentially a row of the eventual N*N matrix, where N is the number of buildings.
                This is used in the bundle visualization.
                Essentially, each number in a column of a row is a relationship to the building of that column.
                As an example:
                    [1 2]
                    [2 3]
                And there is building A (associated with row/col 0) and building B (associated with row/col 1).
                So given the above matrix, 1 student stays in building A and 2 move from A to B. 

                For now, we haven't created the proper relationship matrices so our rows all have the total
                number of students in that building as the first entry and the rest is all 0.
*/
function create_matrix(buildings){
    var building_matrix = [];
    var building_length = buildings.length;

    buildings.forEach(function(element, index, array)
        {
            row_array = [];
            row_array.push(parseInt(element.Enrolled));
            for(i = 1; i < building_length; i++){
                row_array.push(0);
            }

            compounded = {"Matrix" : row_array, "Name" : element.Building, "Enrolled" : element.Enrolled};

            building_matrix.push(compounded);
        });

    return building_matrix;
}