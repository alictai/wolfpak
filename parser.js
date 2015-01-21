var parse_courses = function()
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
    
	return d3.csv.parse(courseLocations);

}