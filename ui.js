/*
    ui.js is the module that controls all user interactions (buttons, text fields etc.)
*/


var overlay_showing = false;

$(function() {

    // Array of all department as strings.
    var departments = [
        "Africa in the New World",
        "Africana Studies",
        "All College",
        "American Studies",
        "Anthropology",
        "Arabic",
        "Archaeology",
        "Art History (Museum School)",
        "Art History",
        "Asian American Studies",
        "Astronomy",
        "Biology",
        "Biomedical Engineering",
        "Center for Interdisciplinary Studies",
        "Chemical & Biological Engineering",
        "Chemistry",
        "Child Development",
        "Chinese",
        "Civil & Environmental Engineering",
        "Classics",
        "College Special Studies",
        "Colonialism Studies",
        "Communication & Media Studies",
        "Community Health",
        "Computer Science",
        "Dance",
        "Drama",
        "Earth & Ocean Sciences",
        "Economics",
        "Education at Museum School",
        "Education",
        "Electrical & Computer Engineering",
        "Engineering Management",
        "Engineering Psychology",
        "Engineering Science",
        "Engineering, Introductory",
        "English (Museum)",
        "English",
        "Entrepreneurial Leadership",
        "Environmental Studies",
        "Experimental College",
        "Fine Arts (MFA Day)",
        "French",
        "Geographic Information Systems",
        "German",
        "Greek",
        "Hebrew",
        "History of Art",
        "History",
        "Interdisciplinary",
        "International Literary and Visual Studies",
        "International Relations",
        "Italian",
        "Japanese",
        "Judaic Studies",
        "Latin American Studies",
        "Latin",
        "Latino Studies",
        "Leadership Studies Minor",
        "Linguistics",
        "Mathematics",
        "Mechanical Engineering",
        "Modern Language",
        "Music",
        "Nutrition Undergraduate",
        "Nutrition",
        "Occupational Therapy",
        "Peace & Justice Studies",
        "Philosophy",
        "Physical Education",
        "Physics",
        "Political Science",
        "Portuguese",
        "Psychology",
        "Religion",
        "Russian",
        "Sociology",
        "Spanish",
        "Studio Art (Medford Campus)",
        "Studio Art (Museum School)",
        "Swahili",
        "Urban & Environmental Policy & Planning",
        "Visual & Critical Studies",
        "Women's, Gender, and Sexuality",
        "World Civilization",
        "World Literature"
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

    // Show all departments again
    $("#showAll").button().click(function(event) {
        split_buildings(courses, "All");  
        $("#deptsearch").val("");
        update_department_list();
    });

    // Upon window resizing, I want the heatmap to be redrawn.
    $( window ).resize(function() {
        split_buildings(courses, "Resize");  
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
        if (selected_departments[0] == "All"){
            $("#department_list").append('<li> Showing all subjects </li>');
        } else {
            selected_departments.forEach(function(element, index, array){
                $("#department_list").append('<li>' + element + '</li>');
            });
        }
    } else {
        $("#department_list").append('<li> Showing all departments </li>');
    }  
}