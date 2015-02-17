/*
    ui.js is the module that controls all user interactions (buttons, text fields etc.)
*/


var overlay_showing = false;

$(function() {

    // Array of all department as strings.
    var departments = [
        "Africana Studies",
        "American Studies",
        "Anthropology",
        "Archaeology",
        "Art & Art History",
        "Asian American Studies",
        "Asian Studies",
        "Biochemistry (Co-administered by Biology and Chemistry)",
        "Biology",
        "Biomedical Engineering",
        "Center for Cognitive Studies",
        "Center for Interdisciplinary Studies",
        "Chemical and Biological Engineering",
        "Chemistry",
        "Child Study and Human Development",
        "Civil and Environmental Engineering",
        "Classics",
        "Colonialism Studies",
        "Communications and Media Studies",
        "Community Health",
        "Computer Science",
        "Consortium of Studies in Race, Colonialism, and Diaspora",
        "Drama & Dance",
        "Earth and Ocean Sciences",
        "Economics",
        "Education",
        "Electrical and Computer Engineering",
        "English",
        "Environmental Studies",
        "German, Russian & Asian Languages/Literature",
        "History",
        "Interdisciplinary Studies",
        "International Letters & Visual Studies",
        "International Relations",
        "Judaic Studies",
        "Latin American Studies",
        "Latino Studies",
        "Leadership Studies",
        "Mathematics",
        "Mechanical Engineering",
        "Medieval Studies",
        "Middle Eastern Studies",
        "Music",
        "Occupational Therapy",
        "Peace and Justice Studies",
        "Philosophy",
        "Physical Education",
        "Physics & Astronomy",
        "Political Science",
        "Psychology",
        "Religion",
        "Romance Languages",
        "Sociology",
        "Urban & Environmental Policy and Planning",
        "Urban Studies",
        "Visual and Critical Studies",
        "Women's, Gender, and Sexuality Studies"
    ];

    // Autocompletes the textbox with suggested departments.
    $( "#deptsearch" ).autocomplete({
      source: departments
    });

    // Updates the visualization with selected department.
    $("#deptButton").button().click(function(event) {
        split_buildings(courses, $("#deptsearch").val());  
        $("#deptsearch").val("");
        update_department_list();
    });

    // Upon window resizing, I want the heatmap to be redrawn.
    $( window ).resize(function() {
        heatmap();
    });

    // Removes the overlay heatmap when clicking outside of it.
    $("#background").click(function(){
        if(overlay_showing){
            $("#overlay_div").css("visibility", "hidden");
            overlay_showing = false;
        }
    });

    update_department_list();

});

function update_department_list(){

    $("#department_list").empty();

    if (selected_departments.length > 0){
        $("#department_list").append('<li>' + selected_departments[0] + '</li>');
    } else {
        $("#department_list").append('<li> Showing all departments </li>');
    }  
}