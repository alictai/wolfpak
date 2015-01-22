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

    parsed_data.forEach(function(element, index, array)
        {
            // Extract just the building code without room number.
            element.Location = element.Location.split(" ")[0];
        });

    return parsed_data;
}

// Will also need to take an input of selected departments eventually.
// For now, just assume all of them are selected.
function split_buildings(courses)
{
    var buildings = [];
    courses.forEach(function(element, index, array)
        {
            var index = contains_building(buildings, element.Location);
            // -1 means that buildings isn't in the array yet.
            if (index == -1){
                buildings.push({"Building": element.Location, "Enrolled" : parseInt(element.Enrolled)});
            } else {
                buildings[index].Enrolled += parseInt(element.Enrolled);
            }
        });

    return buildings;
}

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
            building_matrix.push(row_array);
        });

    return building_matrix;
}