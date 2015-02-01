$(function() {
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

   $( "#deptsearch" ).autocomplete({
     source: departments
   });

   $("#deptButton").button().click(function(event) {
        split_buildings(courses, $("#deptsearch").val());  
        $("#deptsearch").val("");
   });
});