/*
    CourseLocationCSV.js is our lazy implementation for not having to host the website for testing.
    To avoid having to deal with cross domain issues when accessing our csv files, we just dumped
    our CSVs as strings. 
    THIS IS ONLY FOR TESTING. WE WILL BE READING FROM AN ACTUAL CSV WHEN GOING LIVE.
*/

// I can't believe this worked. 
// JS doesn't allow multi line strings. Had to find a weird trick here: http://stackoverflow.com/questions/805107/creating-multiline-strings-in-javascript
// Scroll down to see reply from Jordao.
function hereDoc(f) {
	return f.toString().
		replace(/^[^\/]+\/\*!?/, '').
     	replace(/\*\/[^\/]+$/, '');
}

var dummyHeatData = hereDoc(function() {
/*day,hour,value
1,1,9
1,2,16
1,3,2
1,4,3
1,5,5
1,6,0
1,7,2
1,8,15
1,9,53
1,10,74
1,11,3
1,12,45
1,13,2
1,14,34
1,15,5
1,16,25
1,17,67
1,18,8
1,19,33
1,20,22
1,21,69
1,22,35
1,23,64
1,24,14
2,1,59
2,2,65
2,3,11
2,4,19
2,5,67
2,6,13
2,7,26
2,8,59
2,9,15
2,10,67
2,11,2
2,12,27
2,13,54
2,14,44
2,15,39
2,16,56
2,17,20
2,18,43
2,19,42
2,20,60
2,21,55
2,22,65
2,23,55
2,24,46
3,1,58
3,2,54
3,3,42
3,4,57
3,5,37
3,6,16
3,7,5
3,8,13
3,9,54
3,10,19
3,11,61
3,12,58
3,13,24
3,14,41
3,15,46
3,16,57
3,17,17
3,18,43
3,19,53
3,20,68
3,21,40
3,22,25
3,23,21
3,24,46
4,1,57
4,2,40
4,3,14
4,4,14
4,5,29
4,6,23
4,7,35
4,8,66
4,9,44
4,10,3
4,11,55
4,12,0
4,13,16
4,14,21
4,15,70
4,16,53
4,17,38
4,18,1
4,19,14
4,20,68
4,21,21
4,22,55
4,23,49
4,24,9
5,1,59
5,2,39
5,3,16
5,4,47
5,5,15
5,6,0
5,7,0
5,8,52
5,9,35
5,10,9
5,11,68
5,12,11
5,13,12
5,14,53
5,15,35
5,16,63
5,17,46
5,18,61
5,19,32
5,20,10
5,21,37
5,22,28
5,23,21
5,24,4
6,1,19
6,2,1
6,3,51
6,4,34
6,5,14
6,6,27
6,7,26
6,8,32
6,9,4
6,10,14
6,11,60
6,12,28
6,13,45
6,14,65
6,15,17
6,16,7
6,17,44
6,18,22
6,19,11
6,20,1
6,21,68
6,22,58
6,23,25
6,24,63
7,1,48
7,2,14
7,3,25
7,4,28
7,5,26
7,6,8
7,7,32
7,8,67
7,9,28
7,10,10
7,11,60
7,12,50
7,13,17
7,14,25
7,15,42
7,16,20
7,17,34
7,18,34
7,19,46
7,20,10
7,21,30
7,22,39
7,23,18
7,24,45*/});

var dummyHeatData2 = hereDoc(function() {
/*day,hour,value
1,1,9
1,2,16
1,3,2
1,4,3
1,5,5
1,6,0
1,7,2
1,8,15
1,9,53
1,10,74
2,1,59
2,2,65
2,3,11
2,4,19
2,5,67
2,6,13
2,7,26
2,8,59
2,9,15
2,10,67
3,1,58
3,2,54
3,3,42
3,4,57
3,5,37
3,6,16
3,7,5
3,8,13
3,9,54
3,10,19
4,1,57
4,2,40
4,3,14
4,4,14
4,5,29
4,6,23
4,7,35
4,8,66
4,9,44
4,10,3
5,1,59
5,2,39
5,3,16
5,4,47
5,5,15
5,6,0
5,7,0
5,8,52
5,9,35
5,10,9*/});

var courseLocations = hereDoc(function() {
/*!Course,Title,CourseType,Instructor,StartDate,EndDate,Weekdays,StartTime,EndTime,Location,RoomType,Enrolled,Credits,Department,BuildingName,RoomName
ACL 0003 01,Real Seminar,LEC,Herbert Jean L S,9/2/14,12/8/14,M,12:00 PM,1:15 PM,M010 209,Classroom,2,0.5,All College,Eaton Hall,Eaton 209
ACL 0007 LA,Faculty Seminars,LEC,Manos Christopher,9/2/14,12/8/14,M,10:30 AM,11:45 AM,M010 124,Seminar Room,11,0.5,All College,Eaton Hall,Eaton 124
ACL 0007 LB,Faculty Seminars,LEC,Sullivan Linda M,9/2/14,12/8/14,T,10:30 AM,11:45 AM,M019 009,Classroom,8,0.5,All College,Aidekman Arts Center,Aidekman 009
ACL 0007 LC,Faculty Seminars,LEC,Weigand Claire Nicole,9/2/14,12/8/14,T,4:30 PM,5:45 PM,M038 015,Seminar Room,10,0.5,All College,East Hall,East 015
ACL 0007 LD,Faculty Seminars,LEC,Baffi-Dugan Carol,9/2/14,12/8/14,M,3:00 PM,4:15 PM,M086 001,Classroom,12,0.5,All College,Olin Center,Olin 001
ACL 0007 LE,Faculty Seminars,LEC,Mack Robert D.,9/2/14,12/8/14,M,3:00 PM,4:15 PM,M007 226,Classroom,25,0.5,All College,Braker Hall,Braker 226
ACL 0007 LF,Faculty Seminars,LEC,Smith-King Branwen C A,9/2/14,12/8/14,M,4:30 PM,5:45 PM,M019 009,Classroom,12,0.5,All College,Aidekman Arts Center,Aidekman 009
ACL 0205 01,Intl Communication,LEC,Aikens Kristina N,9/2/14,12/8/14,S,10:00 AM,12:00 PM,M024 314,Classroom,13,0,All College,Tisch Library,Tisch 314
AFR 0088 01,Slave Revolts and Maroons,LEC,Thomas Greg,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M007 226,Classroom,10,1,Africana Studies,Braker Hall,Braker 226
AMER 0012 01,Race In America,LEC,Wu Jean Y,9/2/14,12/8/14,R,4:30 PM,7:15 PM,M006 100,Classroom,28,1,American Studies,Lane Hall,Lane 100
AMER 0083 01,Freshman Seminar,LEC,Johnson Ronna C,9/2/14,12/8/14,TR,4:30 PM,5:45 PM,M010 124,Seminar Room,3,1,American Studies,Eaton Hall,Eaton 124
AMER 0096 01,Afr Am Us Hist Since1865,LEC,Joseph Peniel E.,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M022 152,Classroom,13,1,American Studies,Robinson Hall,Robinson 152
AMER 0180 02,Sp Top: Integrative Sem,LEC,Masuoka Natalie,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M086 011,Classroom,6,1,American Studies,Olin Center,Olin 011
AMER 0180 04,Sp Top: Integrative Sem,LEC,Lowe Lisa,9/2/14,12/8/14,W,1:20 PM,4:20 PM,M010 333,Classroom,12,1,American Studies,Eaton Hall,Eaton 333
AMER 0180 05,Sp Top: Integrative Sem,LEC,Curtis Heather D,9/2/14,12/8/14,W,9:00 AM,11:30 AM,M010 124,Seminar Room,0,1,American Studies,Eaton Hall,Eaton 124
AMER 0180 07,Sp Top: Integrative Sem,LEC,Stanton Catherine Louise,9/2/14,12/8/14,W,1:30 PM,4:00 PM,M027 010,Classroom,0,1,American Studies,Paige Hall,Paige Terrace Room
AMER 0182 01,Asian America,LEC,Wu Jean Y,9/2/14,12/8/14,R,1:30 PM,4:15 PM,M006 100,Classroom,13,1,American Studies,Lane Hall,Lane 100
AMER 0193 01,Independent Study,LEC,Wu Jean Y,9/2/14,12/8/14,M,6:00 PM,9:00 PM,M010 204,Classroom,9,1,American Studies,Eaton Hall,Eaton 204
AMER 0194 03,Special Topics,LEC,Zavala Zum Brook Adriana,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M010 202,Classroom,7,1,American Studies,Eaton Hall,Eaton 202
AMER 0194 05,Special Topics,LEC,Abowd Thomas,9/2/14,12/8/14,W,6:30 PM,9:00 PM,M086 102,Classroom,3,1,American Studies,Olin Center,Olin 102
AMER 0194 07,Special Topics,LEC,Chen Thomas Chiachieh,9/2/14,12/8/14,T,1:20 PM,4:20 PM,M010 333,Classroom,6,1,American Studies,Eaton Hall,Eaton 333
AMER 0194 08,Special Topics,LEC,Thomas Greg,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M007 226,Classroom,3,1,American Studies,Braker Hall,Braker 226
AMER 0194 09,Special Topics,LEC,Curtis Heather D,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M010 202,Classroom,0,1,American Studies,Eaton Hall,Eaton 202
AMER 0194 10,Special Topics,LEC,Grey Jacquelyn,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M007 225,Classroom,9,1,American Studies,Braker Hall,Braker 225
AMER 0194 11,Special Topics,LEC,Grey Jacquelyn,9/2/14,12/8/14,W,9:00 AM,11:30 AM,M019 009,Classroom,7,1,American Studies,Aidekman Arts Center,Aidekman 009
AMER 0198 01,Senior Special Project,LEC,Chen Thomas Chiachieh,9/2/14,12/8/14,R,6:00 PM,9:00 PM,M086 107,Classroom,6,1,American Studies,Olin Center,Olin 107
AMER 0199 01,Senior Honors Thesis A,LEC,Chen Thomas Chiachieh,9/2/14,12/8/14,R,6:00 PM,9:00 PM,M086 107,Classroom,9,0,American Studies,Olin Center,Olin 107
ANTH 0015 01,Nat People Rights S Amer,LEC,Tirrell Andrew R.,9/2/14,12/8/14,TR,6:00 PM,7:15 PM,M027 010,Classroom,38,1,Anthropology,Paige Hall,Paige Terrace Room
ANTH 0016 01,Intro Latino Cultures,LEC,Pacini Deborah,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M027 113,Classroom,33,1,Anthropology,Paige Hall,Paige Crane Room
ANTH 0027 01,Human Rights And Culture,LEC,Bishara Amahl,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M010 206,Classroom,36,1,Anthropology,Eaton Hall,Eaton 206
ANTH 0039 06,Gateway:sociocult Anth,LEC,Blanchette Alexander,9/2/14,12/8/14,MW,4:30 PM,5:45 PM,M010 206,Classroom,22,1,Anthropology,Eaton Hall,Eaton 206
ANTH 0050 01,Prehistoric Archaeology,LEC,Sullivan Lauren A.,9/2/14,12/8/14,MW,6:00 PM,7:15 PM,M009 104,Classroom,22,1,Anthropology,Pearson Laboratory,Pearson 104
ANTH 0126 01,FoodNutrition & Culture,LEC,Bailey Stephen M,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M004 104,Classroom,27,1,Anthropology,Barnum Hall,Barnum 104
ANTH 0130 01,Anthropological Thought,LEC,Blanchette Alexander,9/2/14,12/8/14,TR,4:30 PM,5:45 PM,M010 203,Classroom,23,1,Anthropology,Eaton Hall,Eaton 203
ANTH 0132 01,Myth Ritual & Symbol,LEC,Stanton Catherine Louise,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M010 203,Classroom,20,1,Anthropology,Eaton Hall,Eaton 203
ANTH 0149 19,Selected Topics,LEC,Pinto Sarah,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M017 112,Classroom,27,1,Anthropology,Miner Hall,Miner 112
ANTH 0149 24,Selected Topics,LEC,Stanton Catherine Louise,9/2/14,12/8/14,W,1:30 PM,4:00 PM,M027 010,Classroom,16,1,Anthropology,Paige Hall,Paige Terrace Room
ANTH 0149 25,Selected Topics,LEC,Jaysane-Darr Anna,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M010 202,Classroom,11,1,Anthropology,Eaton Hall,Eaton 202
ANTH 0165 01,After Violence:truthJus,LEC,Shaw Rosalind H,9/2/14,12/8/14,W,9:00 AM,11:30 AM,M010 301,Seminar Room,6,1,Anthropology,Eaton Hall,Eaton Hall Room 301
ANTH 0169 01,Anthro of the State,LEC,Bishara Amahl,9/2/14,12/8/14,T,1:20 PM,4:20 PM,M010 301,Seminar Room,13,1,Anthropology,Eaton Hall,Eaton Hall Room 301
ANTH 0182 01,Human Physique,LEC,Bailey Stephen M,9/2/14,12/8/14,T,9:00 AM,11:30 AM,M010 301,Seminar Room,16,1,Anthropology,Eaton Hall,Eaton Hall Room 301
ANTH 0185 10,Current Topics Anth,LEC,Pinto Sarah,9/2/14,12/8/14,R,1:20 PM,4:20 PM,M010 203,Classroom,9,1,Anthropology,Eaton Hall,Eaton 203
ARB 0001 A,Elem Mod Standard Arabic,LEC,Gunduz Haci Osman,9/2/14,12/8/14,M,9:30 AM,10:20 AM,M010 124,Seminar Room,14,1,Arabic,Eaton Hall,Eaton 124
ARB 0001 A,Elem Mod Standard Arabic,LEC,Gunduz Haci Osman,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M010 124,Seminar Room,14,1,Arabic,Eaton Hall,Eaton 124
ARB 0001 B,Elem Mod Standard Arabic,LEC,Jajji Fadi,9/2/14,12/8/14,F,3:30 PM,4:20 PM,M086 001,Classroom,10,1,Arabic,Olin Center,Olin 001
ARB 0001 B,Elem Mod Standard Arabic,LEC,Jajji Fadi,9/2/14,12/8/14,TR,3:00 PM,4:15 PM,M086 001,Classroom,10,1,Arabic,Olin Center,Olin 001
ARB 0001 C,Elem Mod Standard Arabic,LEC,El Nady Rabab,9/2/14,12/8/14,F,12:00 PM,12:50 PM,M086 012,Classroom,11,1,Arabic,Olin Center,Olin 012
ARB 0001 C,Elem Mod Standard Arabic,LEC,El Nady Rabab,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M086 012,Classroom,11,1,Arabic,Olin Center,Olin 012
ARB 0001 D,Elem Mod Standard Arabic,LEC,Gunduz Haci Osman,9/2/14,12/8/14,M,6:00 PM,6:50 PM,M086 318,Classroom,12,1,Arabic,Olin Center,Olin 318
ARB 0001 D,Elem Mod Standard Arabic,LEC,Gunduz Haci Osman,9/2/14,12/8/14,TR,4:30 PM,5:45 PM,M086 318,Classroom,12,1,Arabic,Olin Center,Olin 318
ARB 0001 E,Elem Mod Standard Arabic,LEC,Gunduz Haci Osman,9/2/14,12/8/14,M,4:30 PM,5:20 PM,M086 103,Classroom,12,1,Arabic,Olin Center,Olin 103
ARB 0001 E,Elem Mod Standard Arabic,LEC,Gunduz Haci Osman,9/2/14,12/8/14,TR,3:00 PM,4:15 PM,M086 103,Classroom,12,1,Arabic,Olin Center,Olin 103
ARB 0003 A,Intermed Std Arabic,LEC,Jajji Fadi,9/2/14,12/8/14,F,12:00 PM,12:50 PM,M086 107,Classroom,13,1,Arabic,Olin Center,Olin 107
ARB 0003 A,Intermed Std Arabic,LEC,Jajji Fadi,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M086 107,Classroom,13,1,Arabic,Olin Center,Olin 107
ARB 0003 B,Intermed Std Arabic,LEC,Jajji Fadi,9/2/14,12/8/14,F,10:30 AM,11:20 AM,M086 110,Classroom,13,1,Arabic,Olin Center,Olin 110
ARB 0003 B,Intermed Std Arabic,LEC,Jajji Fadi,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M086 005,Classroom,13,1,Arabic,Olin Center,Olin 005
ARB 0003 C,Intermed Std Arabic,LEC,Gunduz Haci Osman,9/2/14,12/8/14,F,9:30 AM,10:20 AM,M086 011,Classroom,15,1,Arabic,Olin Center,Olin 011
ARB 0003 C,Intermed Std Arabic,LEC,Gunduz Haci Osman,9/2/14,12/8/14,TW,9:05 AM,10:20 AM,M086 011,Classroom,15,1,Arabic,Olin Center,Olin 011
ARB 0005 01,Colloquial Arabic: Levantine,LEC,Zendah Souhad B.,9/2/14,12/8/14,F,9:30 AM,10:20 AM,M086 005,Classroom,7,1,Arabic,Olin Center,Olin 005
ARB 0005 01,Colloquial Arabic: Levantine,LEC,Zendah Souhad B.,9/2/14,12/8/14,TW,9:05 AM,10:20 AM,M086 005,Classroom,7,1,Arabic,Olin Center,Olin 005
ARB 0021 A,Arabic ReadingCompConv,LEC,Zendah Souhad B.,9/2/14,12/8/14,F,10:30 AM,11:20 AM,M086 005,Classroom,13,1,Arabic,Olin Center,Olin 005
ARB 0021 A,Arabic ReadingCompConv,LEC,Zendah Souhad B.,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M086 005,Classroom,13,1,Arabic,Olin Center,Olin 005
ARB 0021 B,Arabic ReadingCompConv,LEC,Zendah Souhad B.,9/2/14,12/8/14,M,6:00 PM,6:50 PM,M086 005,Classroom,14,1,Arabic,Olin Center,Olin 005
ARB 0021 B,Arabic ReadingCompConv,LEC,Zendah Souhad B.,9/2/14,12/8/14,TR,4:30 PM,5:45 PM,M086 005,Classroom,14,1,Arabic,Olin Center,Olin 005
ARB 0055 01,Cult Hist Mod Mid East,LEC,Rastegar Kamran,9/2/14,12/8/14,TR,3:00 PM,4:15 PM,M086 012,Classroom,18,1,Arabic,Olin Center,Olin 012
ARB 0091 01,Special Topics,LEC,Abowd Thomas,9/2/14,12/8/14,W,6:30 PM,9:00 PM,M086 102,Classroom,9,1,Arabic,Olin Center,Olin 102
ARB 0091 02,Special Topics,LEC,Abowd Thomas,9/2/14,12/8/14,T,6:30 PM,9:00 PM,M086 107,Classroom,8,1,Arabic,Olin Center,Olin 107
ARB 0091 03,Special Topics,LEC,Abowd Thomas,9/2/14,12/8/14,R,6:30 PM,9:00 PM,M086 116,Classroom,13,1,Arabic,Olin Center,Olin 116
ARB 0091 04,Special Topics,LEC,Roustom Kareem J,9/2/14,12/8/14,M,6:00 PM,8:30 PM,M195 271,Lecture Room,1,1,Arabic,Music Building,Granoff 271
ARB 0121 01,Advanced Mod Std Arabic,LEC,El Nady Rabab,9/2/14,12/8/14,M,4:30 PM,5:20 PM,M086 005,Classroom,8,1,Arabic,Olin Center,Olin 005
ARB 0121 01,Advanced Mod Std Arabic,LEC,El Nady Rabab,9/2/14,12/8/14,TR,3:00 PM,4:15 PM,M086 005,Classroom,8,1,Arabic,Olin Center,Olin 005
ARB 0121 02,Advanced Mod Std Arabic,LEC,El Nady Rabab,9/2/14,12/8/14,M,6:00 PM,6:50 PM,M086 334,Classroom,10,1,Arabic,Olin Center,Olin Center Room 334
ARB 0121 02,Advanced Mod Std Arabic,LEC,El Nady Rabab,9/2/14,12/8/14,TR,4:30 PM,5:45 PM,M086 334,Classroom,10,1,Arabic,Olin Center,Olin Center Room 334
ARCH 0026 01,Ancient Egypt,LEC,Harrington James Matthew,9/2/14,12/8/14,MW,4:30 PM,5:45 PM,M004 104,Classroom,41,1,Archaeology,Barnum Hall,Barnum 104
ARCH 0030 01,Prehistoric Archaeology,LEC,Sullivan Lauren A.,9/2/14,12/8/14,MW,6:00 PM,7:15 PM,M009 104,Classroom,37,1,Archaeology,Pearson Laboratory,Pearson 104
AST 0010 01,Wanderers Space-Exp&disc,LEC,Lang Kenneth R,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M151 302,Classroom,180,1,Astronomy,Cabot Center,Cabot Asean Aud.
AST 0016 01,Special Topics,LEC,Sajina Anna,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M003 309,Classroom,6,1,Astronomy,Anderson Hall,Anderson 309
AST 0121 01,Galactic Astronomy,LEC,Marchesini Danilo,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M022 152,Classroom,5,1,Astronomy,Robinson Hall,Robinson 152
BIO 0001 01,Environ Pres & Improve,LEC,Ellmore George S,9/2/14,12/8/14,T,1:30 PM,4:00 PM,M004 114,Classroom,6,1,Biology,Barnum Hall,Barnum 114
BIO 0004 01,Gross Anatomy,LEC,Sarikas Stephen,9/2/14,12/8/14,M,5:30 PM,8:15 PM,M013 113,Classroom,0,1,Biology,26 Winthrop Street,26 Winthrop St Room 113
BIO 0004 02,Gross Anatomy,LEC,Pessina Monica A,9/2/14,12/8/14,R,9:30 AM,12:30 PM,M013 101,Classroom,14,1,Biology,26 Winthrop Street,26 Winthrop St Room 101
BIO 0004 A,Gross Anatomy,LAB,Sarikas Stephen,9/2/14,12/8/14,T,6:00 PM,8:00 PM,M013 113,Classroom,0,1,Biology,26 Winthrop Street,26 Winthrop St Room 113
BIO 0004 B,Gross Anatomy,LAB,Sarikas Stephen,9/2/14,12/8/14,W,6:00 PM,8:00 PM,M013 113,Classroom,0,1,Biology,26 Winthrop Street,26 Winthrop St Room 113
BIO 0004 C,Gross Anatomy,LAB,Pessina Monica A,9/2/14,12/8/14,R,12:30 PM,1:30 PM,M013 113,Classroom,14,1,Biology,26 Winthrop Street,26 Winthrop St Room 113
BIO 0007 01,Environmental Biology,LEC,Reed J Michael,9/2/14,12/8/14,TWF,9:30 AM,10:20 AM,M022 253,Classroom,55,1,Biology,Robinson Hall,Robinson 253
BIO 0009 01,Physiology,LEC,Leavis Paul C,9/2/14,12/8/14,F,8:30 AM,11:30 AM,M013 113,Classroom,12,1,Biology,26 Winthrop Street,26 Winthrop St Room 113
BIO 0009 01,Physiology,LEC,Leavis Paul C,9/2/14,12/8/14,T,2:30 PM,5:30 PM,M013 113,Classroom,12,1,Biology,26 Winthrop Street,26 Winthrop St Room 113
BIO 0011 01,Kinesiology,LEC,Martens Jean L,9/2/14,12/8/14,M,8:30 AM,11:30 AM,M013 113,Classroom,6,1,Biology,26 Winthrop Street,26 Winthrop St Room 113
BIO 0013 01,Cells & Organisms W/lab,LEC,McLaughlin Kelly A.,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M004 008,Classroom,197,1,Biology,Barnum Hall,Barnum 008
BIO 0013 02,Cells & Organisms W/lab,LEC,McLaughlin Kelly A.,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M004 008,Classroom,206,1,Biology,Barnum Hall,Barnum 008
BIO 0013 LA,Cells & Organisms W/lab,LAB,Gaudette Michelle,9/2/14,12/8/14,M,1:30 PM,4:30 PM,M004 200,Class Laboratory,32,1,Biology,Barnum Hall,Barnum Hall Room 200 
BIO 0013 LB,Cells & Organisms W/lab,LAB,Gaudette Michelle,9/2/14,12/8/14,M,1:30 PM,4:30 PM,M004 216,Class Laboratory,28,1,Biology,Barnum Hall,Barnum Hall Room 216
BIO 0013 LC,Cells & Organisms W/lab,LAB,Gaudette Michelle,9/2/14,12/8/14,T,1:30 PM,4:30 PM,M004 200,Class Laboratory,28,1,Biology,Barnum Hall,Barnum Hall Room 200 
BIO 0013 LD,Cells & Organisms W/lab,LAB,Gaudette Michelle,9/2/14,12/8/14,T,1:30 PM,4:30 PM,M004 216,Class Laboratory,28,1,Biology,Barnum Hall,Barnum Hall Room 216
BIO 0013 LE,Cells & Organisms W/lab,LAB,Gaudette Michelle,9/2/14,12/8/14,W,1:30 PM,4:30 PM,M004 200,Class Laboratory,31,1,Biology,Barnum Hall,Barnum Hall Room 200 
BIO 0013 LF,Cells & Organisms W/lab,LAB,Gaudette Michelle,9/2/14,12/8/14,W,1:30 PM,4:30 PM,M004 216,Class Laboratory,32,1,Biology,Barnum Hall,Barnum Hall Room 216
BIO 0013 LG,Cells & Organisms W/lab,LAB,Gaudette Michelle,9/2/14,12/8/14,R,1:30 PM,4:30 PM,M004 200,Class Laboratory,30,1,Biology,Barnum Hall,Barnum Hall Room 200 
BIO 0013 LH,Cells & Organisms W/lab,LAB,Gaudette Michelle,9/2/14,12/8/14,R,1:30 PM,4:30 PM,M004 216,Class Laboratory,29,1,Biology,Barnum Hall,Barnum Hall Room 216
BIO 0013 LI,Cells & Organisms W/lab,LAB,Gaudette Michelle,9/2/14,12/8/14,M,6:00 PM,9:00 PM,M004 200,Class Laboratory,29,1,Biology,Barnum Hall,Barnum Hall Room 200 
BIO 0013 LJ,Cells & Organisms W/lab,LAB,Gaudette Michelle,9/2/14,12/8/14,M,6:00 PM,9:00 PM,M004 216,Class Laboratory,29,1,Biology,Barnum Hall,Barnum Hall Room 216
BIO 0013 LK,Cells & Organisms W/lab,LAB,Gaudette Michelle,9/2/14,12/8/14,T,6:00 PM,9:00 PM,M004 200,Class Laboratory,24,1,Biology,Barnum Hall,Barnum Hall Room 200 
BIO 0013 LL,Cells & Organisms W/lab,LAB,Gaudette Michelle,9/2/14,12/8/14,T,6:00 PM,9:00 PM,M004 216,Class Laboratory,24,1,Biology,Barnum Hall,Barnum Hall Room 216
BIO 0013 LM,Cells & Organisms W/lab,LAB,Gaudette Michelle,9/2/14,12/8/14,W,6:00 PM,9:00 PM,M004 200,Class Laboratory,28,1,Biology,Barnum Hall,Barnum Hall Room 200 
BIO 0013 LN,Cells & Organisms W/lab,LAB,Gaudette Michelle,9/2/14,12/8/14,W,6:00 PM,9:00 PM,M004 216,Class Laboratory,31,1,Biology,Barnum Hall,Barnum Hall Room 216
BIO 0013 R,Cells & Organisms W/lab,RCT,Koegel Susan L.,9/2/14,12/8/14,M,4:40 PM,5:30 PM,M004 008,Classroom,202,1,Biology,Barnum Hall,Barnum 008
BIO 0040 01,Special Topics,LEC,Slonim Donna,9/2/14,12/8/14,W,6:00 PM,9:00 PM,M026 111A,Classroom,14,1,Biology,Halligan Hall,Halligan 111A
BIO 0041 01,General Genetics,LEC,Gaudette Michelle,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M004 008,Classroom,123,1,Biology,Barnum Hall,Barnum 008
BIO 0041 RA,General Genetics,RCT,Gaudette Michelle,9/2/14,12/8/14,W,4:30 PM,5:20 PM,M004 008,Classroom,41,1,Biology,Barnum Hall,Barnum 008
BIO 0041 RB,General Genetics,RCT,Gaudette Michelle,9/2/14,12/8/14,M,3:00 PM,3:50 PM,M004 104,Classroom,27,1,Biology,Barnum Hall,Barnum 104
BIO 0041 RC,General Genetics,RCT,Gaudette Michelle,9/2/14,12/8/14,T,4:30 PM,5:20 PM,M004 104,Classroom,35,1,Biology,Barnum Hall,Barnum 104
BIO 0041 RD,General Genetics,RCT,Gaudette Michelle,9/2/14,12/8/14,W,3:00 PM,3:50 PM,M004 104,Classroom,20,1,Biology,Barnum Hall,Barnum 104
BIO 0049 A,Experiment In Physiology,LEC,Trimmer Barry,9/2/14,12/8/14,M,1:30 PM,5:00 PM,M004 001,Class Laboratory,12,1,Biology,Barnum Hall,Barnum Hall Room 001 
BIO 0049 B,Experiment In Physiology,LEC,Trimmer Barry,9/2/14,12/8/14,T,1:30 PM,5:00 PM,M004 001,Class Laboratory,12,1,Biology,Barnum Hall,Barnum Hall Room 001 
BIO 0049 R,Experiment In Physiology,RCT,Trimmer Barry,9/2/14,12/8/14,R,4:30 PM,5:25 PM,M004 114,Classroom,24,1,Biology,Barnum Hall,Barnum 114
BIO 0051 R,Experiments In Ecology,RCT,Ellmore George S,9/2/14,12/8/14,T,4:30 PM,5:20 PM,M004 114,Classroom,0,1,Biology,Barnum Hall,Barnum 114
BIO 0061 01,Biology of Aging,LEC,McVey Mitch,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M195 155,Lecture Room,49,1,Biology,Music Building,Granoff 155
BIO 0100 RC,Discussion Group,LEC,TBD,9/2/14,12/8/14,F,3:30 PM,5:30 PM,M004 104,Classroom,0,0,Biology,Barnum Hall,Barnum 104
BIO 0100 RC,Discussion Group,LEC,TBD,9/2/14,12/8/14,M,12:00 PM,1:30 PM,M004 114,Classroom,0,0,Biology,Barnum Hall,Barnum 114
BIO 0103 01,Developmental Biology,LEC,Ernst Susan G,9/2/14,12/8/14,TWF,9:30 AM,10:20 AM,M004 114,Classroom,18,1,Biology,Barnum Hall,Barnum 114
BIO 0104 01,Immunology,LEC,Bernheim Harry,9/2/14,12/8/14,TR,3:00 PM,4:15 PM,M004 104,Classroom,52,1,Biology,Barnum Hall,Barnum 104
BIO 0110 01,Endocrinology,LEC,Romero L Michael,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M003 206,Classroom,58,1,Biology,Anderson Hall,Anderson 206
BIO 0115 01,General Physiology,LEC,Bernheim Harry,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M006 100,Classroom,81,1,Biology,Lane Hall,Lane 100
BIO 0132 01,Biostatistics,LEC,Lewis Sara M.,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M004 104,Classroom,66,1,Biology,Barnum Hall,Barnum 104
BIO 0135 01,Ecology of Animal Movement,LEC,Crone Elizabeth E.,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M004 114,Classroom,15,1,Biology,Barnum Hall,Barnum 114
BIO 0142 01,Population/comm Ecology,LEC,Chew Frances Sze-Ling,9/2/14,12/8/14,WF,10:30 AM,11:45 AM,M004 114,Classroom,17,1,Biology,Barnum Hall,Barnum 114
BIO 0168 01,Biotech Process Proj Lab,LEC,Yi Hyunmin,9/2/14,12/8/14,R,6:00 PM,9:30 PM,M028 135,Classroom,4,1,Biology,Science and Technology Center,Sci-Tech 135
BIO 0172 01,Biochemistry II,LEC,Kritzer Joshua A.,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M009 104,Classroom,1,1,Biology,Pearson Laboratory,Pearson 104
BIO 0172 RA,Biochemistry II,RCT,Kritzer Joshua A.,9/2/14,12/8/14,W,8:30 AM,9:20 AM,M196E 100,Classroom,1,1,Biology,Sophia Gordon Hall,Sophia Gordon
BIO 0183 01,Darwinian Medicine Sem,LEC,Starks Philip T.B.,9/2/14,12/8/14,T,1:30 PM,4:00 PM,M004 113,Seminar Room,11,1,Biology,Barnum Hall,Barnum 113
BIO 0196 01,Selected Topics,LEC,McLaughlin Kelly A.,9/2/14,12/8/14,M,10:30 AM,11:45 AM,M004 114,Classroom,1,1,Biology,Barnum Hall,Barnum 114
BIO 0196 04,Selected Topics,LEC,Dopman Erik,9/2/14,12/8/14,R,1:30 PM,4:00 PM,M004 114,Classroom,8,1,Biology,Barnum Hall,Barnum 114
BIO 0243 01,Top's/molecular/cell Bio,LEC,Ernst Susan G,9/2/14,12/8/14,W,1:30 PM,4:30 PM,M004 113,Seminar Room,7,1,Biology,Barnum Hall,Barnum 113
BIO 0260 01,Teach Bio:pedagogy&pract,LEC,McLaughlin Kelly A.,9/2/14,12/8/14,M,10:30 AM,11:45 AM,M004 114,Classroom,11,1,Biology,Barnum Hall,Barnum 114
BIO 0260 02,Teach Bio:pedagogy&pract,LEC,Gaudette Michelle,9/2/14,12/8/14,R,6:00 PM,9:00 PM,M004 114,Classroom,14,1,Biology,Barnum Hall,Barnum 114
BIOE 0291 01,Bioengineer Seminar I,LEC,Panilaitis Bruce John Benson,9/2/14,12/8/14,W,4:30 PM,5:45 PM,M028 132,Seminar Room,9,0.5,Biology,Science and Technology Center,Sci-Tech Center Room 132
BME 0003 01,Bme Soph Design/res I,LEC,Kaplan David L,9/2/14,12/8/14,R,1:30 PM,2:45 PM,M028 132,Seminar Room,15,0.5,Biomedical Engineering,Science and Technology Center,Sci-Tech Center Room 132
BME 0005 01,Bme Junior Design/res I,LEC,Black III Lauren D.,9/2/14,12/8/14,R,10:30 AM,11:45 AM,M028 136,Classroom,20,0.5,Biomedical Engineering,Science and Technology Center,Sci-Tech 136
BME 0007 01,Bme Senior Design/res,LEC,Omenetto Fiorenzo,9/2/14,12/8/14,F,12:00 PM,2:30 PM,R027 4745,Classroom,13,1,Biomedical Engineering,200 Boston Avenue,200 Boston AvenueRoom 4745
BME 0056 01,Quant Biomaterials Lab I,LEC,Georgakoudi Irene,9/2/14,12/8/14,W,9:00 AM,11:30 AM,M028 132,Conference Room,1,1,Biomedical Engineering,Science and Technology Center,Sci-Tech Center Room 132
BME 0120 01,Project Study/human Sys A,LEC,Aurelio David,9/2/14,12/8/14,W,6:00 PM,7:15 PM,M003 210,Classroom,1,0,Biomedical Engineering,Anderson Hall,Anderson 210
BME 0121 01,Quant Physiology I,LEC,Black III Lauren D.,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M028 135,Classroom,25,1,Biomedical Engineering,Science and Technology Center,Sci-Tech 135
BME 0141 01,Analyt Tools Biomed Engn,LEC,Fantini Sergio,9/2/14,12/8/14,TR,3:00 PM,4:15 PM,M028 135,Classroom,21,1,Biomedical Engineering,Science and Technology Center,Sci-Tech 135
BME 0143 01,Biological Systems Analysis,LEC,Prabakaran Sudhakaran,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M028 135,Classroom,4,1,Biomedical Engineering,Science and Technology Center,Sci-Tech 135
BME 0153 01,Biomaterials & Regen Medicine,LEC,Marelli Benedetto,9/2/14,12/8/14,M,6:00 PM,9:00 PM,M028 136,Classroom,26,1,Biomedical Engineering,Science and Technology Center,Sci-Tech 136
BME 0165 01,Prin Cntrl Release&drug,LEC,Barry Anthony,9/2/14,12/8/14,R,6:00 PM,9:00 PM,M028 136,Classroom,34,1,Biomedical Engineering,Science and Technology Center,Sci-Tech 136
BME 0168 01,Biotech Process Proj Lab,LEC,Yi Hyunmin,9/2/14,12/8/14,R,6:00 PM,9:30 PM,M028 135,Classroom,0,1,Biomedical Engineering,Science and Technology Center,Sci-Tech 135
BME 0175 01,Tissue Engr Research Lab,LEC,Panilaitis Bruce John Benson,9/2/14,12/8/14,W,6:00 PM,9:00 PM,M028 134,Classroom,19,1,Biomedical Engineering,Science and Technology Center,Sci-Tech 134
BME 0215 01,Optics And Wave Motion,LEC,Cebe Peggy,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M028 134,Classroom,0,1,Biomedical Engineering,Science and Technology Center,Sci-Tech 134
BME 0215 LA,Optics And Wave Motion,LAB,Cebe Peggy,9/2/14,12/8/14,T,3:00 PM,4:15 PM,M022 150,Class Laboratory,0,1,Biomedical Engineering,Robinson Hall,Robinson Hall Room 150 
BME 0215 LB,Optics And Wave Motion,LAB,Cebe Peggy,9/2/14,12/8/14,W,3:00 PM,4:15 PM,M022 150,Class Laboratory,0,1,Biomedical Engineering,Robinson Hall,Robinson Hall Room 150 
BME 0215 LC,Optics And Wave Motion,LAB,Cebe Peggy,9/2/14,12/8/14,W,4:30 PM,5:45 PM,M022 150,Class Laboratory,0,1,Biomedical Engineering,Robinson Hall,Robinson Hall Room 150 
BME 0250 01,Prin Biomedical Engineer,LEC,Xu Qiaobing,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M028 134,Classroom,17,1,Biomedical Engineering,Science and Technology Center,Sci-Tech 134
BME 0256 01,Quant Biomaterials Lab I,LEC,Georgakoudi Irene,9/2/14,12/8/14,W,9:00 AM,11:30 AM,M028 132,Conference Room,9,1,Biomedical Engineering,Science and Technology Center,Sci-Tech Center Room 132
BME 0291 01,Graduate Seminar,LEC,Xu Qiaobing,9/2/14,12/8/14,M,10:00 AM,11:00 AM,M028 136,Classroom,53,0,Biomedical Engineering,Science and Technology Center,Sci-Tech 136
CD 0001 01,Intro Child Development,LEC,Gidney Calvin L,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M007 001,Classroom,109,1,Child Development,Braker Hall,Braker 001
CD 0001 A,Intro Child Development,RCT,Gidney Calvin L,9/2/14,12/8/14,M,6:00 PM,6:50 PM,M010 333,Classroom,40,1,Child Development,Eaton Hall,Eaton 333
CD 0001 B,Intro Child Development,RCT,Gidney Calvin L,9/2/14,12/8/14,T,6:00 PM,6:50 PM,M004 114,Classroom,35,1,Child Development,Barnum Hall,Barnum 114
CD 0001 C,Intro Child Development,RCT,Gidney Calvin L,9/2/14,12/8/14,R,6:00 PM,6:50 PM,M012 157,Classroom,34,1,Child Development,Eliot Pearson Center,Eliot-Pearson 157
CD 0061 01,Personal & Soc Dev,LEC,Pott Martha,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M027 113,Classroom,58,1,Child Development,Paige Hall,Paige Crane Room
CD 0061 A,Personal & Soc Dev,RCT,Pott Martha,9/2/14,12/8/14,T,7:30 PM,8:15 PM,M086 116,Classroom,23,1,Child Development,Olin Center,Olin 116
CD 0061 B,Personal & Soc Dev,RCT,Pott Martha,9/2/14,12/8/14,W,6:00 PM,6:50 PM,M038 016,Classroom,23,1,Child Development,East Hall,East 016
CD 0061 C,Personal & Soc Dev,RCT,Pott Martha,9/2/14,12/8/14,R,7:30 PM,8:15 PM,M010 203,Classroom,12,1,Child Development,Eaton Hall,Eaton 203
CD 0062 01,Childhood Across Culture,LEC,Mistry Jayanthi,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M027 010,Classroom,45,1,Child Development,Paige Hall,Paige Terrace Room
CD 0064 01,Parent Child Relations,LEC,Casey Mary E.,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M012 157,Classroom,21,1,Child Development,Eliot Pearson Center,Eliot-Pearson 157
CD 0082 01,Soc Pol Children&fmly,LEC,Lippitt John,9/2/14,12/8/14,T,9:00 AM,11:30 AM,M011 117,Classroom,13,1,Child Development,177 College Avenue,177 College Ave 117
CD 0090 01,Exceptional Child,LEC,Vanderberg Laura E,9/2/14,12/8/14,R,6:00 PM,9:00 PM,M010 206,Classroom,36,1,Child Development,Eaton Hall,Eaton 206
CD 0099 01,Community Field Placement,LEC,Scarlett W George,9/2/14,12/8/14,W,10:30 AM,11:45 AM,M012 163,Seminar Room,11,1,Child Development,Eliot Pearson Center,Eliot-Pearson 163
CD 0100 01,Child Health Sem/Fieldwork,LEC,Modry-Mandell Kerri L,9/2/14,12/8/14,R,6:00 PM,8:00 PM,M012 163,Seminar Room,14,0.5,Child Development,Eliot Pearson Center,Eliot-Pearson 163
CD 0124 01,American Sign Language,LEC,Lipsky James S,9/2/14,12/8/14,M,1:30 PM,2:45 PM,M003 210,Classroom,17,1,Child Development,Anderson Hall,Anderson 210
CD 0124 01,American Sign Language,LEC,Lipsky James S,9/2/14,12/8/14,T,4:30 PM,5:45 PM,M003 210,Classroom,17,1,Child Development,Anderson Hall,Anderson 210
CD 0125 01,American Sign Lang II,LEC,Lipsky James S,9/2/14,12/8/14,R,5:00 PM,6:15 PM,M003 210,Classroom,11,1,Child Development,Anderson Hall,Anderson 210
CD 0125 01,American Sign Lang II,LEC,Lipsky James S,9/2/14,12/8/14,T,6:00 PM,7:15 PM,M003 210,Classroom,11,1,Child Development,Anderson Hall,Anderson 210
CD 0126 01,American Sign Lang III,LEC,Lipsky James S,9/2/14,12/8/14,R,6:30 PM,7:45 PM,M003 210,Classroom,10,1,Child Development,Anderson Hall,Anderson 210
CD 0126 01,American Sign Lang III,LEC,Lipsky James S,9/2/14,12/8/14,T,7:30 PM,8:45 PM,M003 210,Classroom,10,1,Child Development,Anderson Hall,Anderson 210
CD 0134 01,Early Chldhd Edu Prepracticum,LEC,Smith Cynthia M,9/2/14,12/8/14,M,1:30 PM,3:30 PM,M012 129,Classroom,5,0.5,Child Development,Eliot Pearson Center,Eliot-Pearson 129
CD 0136 01,Supervised Teaching II,LEC,Ballenger Cynthia,9/2/14,12/8/14,W,3:30 PM,5:30 PM,M012 129,Classroom,8,1,Child Development,Eliot Pearson Center,Eliot-Pearson 129
CD 0137 01,Sociocultural Foundations I,LEC,Mistry Jayanthi,9/2/14,12/8/14,W,1:20 PM,4:20 PM,M196E 100,Classroom,5,1,Child Development,Sophia Gordon Hall,Sophia Gordon
CD 0143 01,Special Topics,LEC,Fleary Sasha,9/2/14,12/8/14,W,9:00 AM,12:00 PM,M011 117,Classroom,11,0,Child Development,177 College Avenue,177 College Ave 117
CD 0143 02,Special Topics,LEC,Camara Kathleen A,9/2/14,12/8/14,F,1:30 PM,4:00 PM,M012 163,Seminar Room,7,0,Child Development,Eliot Pearson Center,Eliot-Pearson 163
CD 0143 03,Special Topics,LEC,Camara Kathleen A,9/2/14,12/8/14,W,6:00 PM,9:00 PM,M012 157,Classroom,7,0,Child Development,Eliot Pearson Center,Eliot-Pearson 157
CD 0143 04,Special Topics,LEC,Casey Mary E.,9/2/14,12/8/14,M,9:00 AM,12:00 PM,M012 163,Seminar Room,11,0,Child Development,Eliot Pearson Center,Eliot-Pearson 163
CD 0143 15,Special Topics,LEC,Johnson Bruce,9/2/14,12/8/14,R,4:10 PM,7:10 PM,M012 129,Classroom,7,0,Child Development,Eliot Pearson Center,Eliot-Pearson 129
CD 0146 01,Applied Data Analysis,LEC,Schmid Callina Kristina Lauren,9/2/14,12/8/14,M,1:20 PM,4:20 PM,M010 208,Computer Lab,16,1,Child Development,Eaton Hall,Eaton 208 
CD 0151 01,Adv Intell Dev Yng Child,LEC,Feldman David H,9/2/14,12/8/14,W,9:00 AM,11:30 AM,M012 157,Classroom,16,1,Child Development,Eliot Pearson Center,Eliot-Pearson 157
CD 0155 01,Development Of Language,LEC,Gidney Calvin L,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M003 206,Classroom,43,1,Child Development,Anderson Hall,Anderson 206
CD 0157 01,Theories Spiritual Dev,LEC,Scarlett W George,9/2/14,12/8/14,R,1:30 PM,4:00 PM,M012 157,Classroom,7,1,Child Development,Eliot Pearson Center,Eliot-Pearson 157
CD 0163 01,Infancy,LEC,Easterbrooks M Ann,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M012 163,Seminar Room,12,1,Child Development,Eliot Pearson Center,Eliot-Pearson 163
CD 0170 01,Sem: Early/elem Educ,LEC,McWayne Christine,9/2/14,12/8/14,T,1:30 PM,4:00 PM,M012 157,Classroom,8,1,Child Development,Eliot Pearson Center,Eliot-Pearson 157
CD 0171 01,Curric For Yng Child,LEC,Johnson Bruce,9/2/14,12/8/14,R,1:30 PM,4:00 PM,M012 129,Classroom,5,1,Child Development,Eliot Pearson Center,Eliot-Pearson 129
CD 0178 01,Creative Move Body/lang,LEC,Celichowska Renata,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M040 106,Class Laboratory,11,1,Child Development,Jackson Gym,Jackson Hall Dance Studio
CD 0191 01,Dev Psychopathology&adap,LEC,Modry-Mandell Kerri L,9/2/14,12/8/14,T,6:00 PM,9:00 PM,M012 157,Classroom,32,1,Child Development,Eliot Pearson Center,Eliot-Pearson 157
CD 0193 01,Pediatric Psychology,LEC,Fleary Sasha,9/2/14,12/8/14,W,1:20 PM,4:20 PM,M012 157,Classroom,9,1,Child Development,Eliot Pearson Center,Eliot-Pearson 157
CD 0197 01,Learn&attention Difficul,LEC,Daley Samantha,9/2/14,12/8/14,M,6:00 PM,9:00 PM,M012 157,Classroom,12,1,Child Development,Eliot Pearson Center,Eliot-Pearson 157
CD 0199 01,Community Fld Placement,LEC,Scarlett W George,9/2/14,12/8/14,W,10:30 AM,11:45 AM,M012 163,Seminar Room,1,1,Child Development,Eliot Pearson Center,Eliot-Pearson 163
CD 0201 01,Doctoral Pro Seminar A,LEC,Pinderhughes Ellen,9/2/14,12/8/14,M,9:00 AM,12:00 PM,M012 129,Classroom,14,0,Child Development,Eliot Pearson Center,Eliot-Pearson 129
CD 0202 01,MasterÍs Pro Seminar,LEC,Pott Martha,9/2/14,12/8/14,M,10:00 AM,12:30 PM,M012 157,Classroom,16,0.5,Child Development,Eliot Pearson Center,Eliot-Pearson 157
CD 0203 01,Master's Internship Seminar,LEC,Pott Martha,9/2/14,12/8/14,W,4:30 PM,6:30 PM,M012 163,Seminar Room,5,1,Child Development,Eliot Pearson Center,Eliot-Pearson 163
CD 0211 01,Contmp Perspct&child Dev,LEC,Mistry Jayanthi,9/2/14,12/8/14,W,1:20 PM,4:20 PM,M196E 100,Classroom,12,1,Child Development,Sophia Gordon Hall,Sophia Gordon
CD 0243 02,Special Topics,LEC,Camara Kathleen A,9/2/14,12/8/14,F,1:30 PM,4:00 PM,M012 163,Seminar Room,2,0,Child Development,Eliot Pearson Center,Eliot-Pearson 163
CD 0247 01,Program Evaluation,LEC,Goldman Laurie S.,9/2/14,12/8/14,T,6:00 PM,9:00 PM,M108 103,Seminar Room,4,1,Child Development,Dearborn House,72 Professors Row Room 103
CD 0262 01,Cultural Sensitivity,LEC,Pinderhughes Ellen,9/2/14,12/8/14,T,1:20 PM,4:20 PM,M012 163,Seminar Room,4,1,Child Development,Eliot Pearson Center,Eliot-Pearson 163
CD 0267 01,Sem Child & Mass Media,LEC,Dobrow Julie,9/2/14,12/8/14,R,1:30 PM,4:00 PM,M011 117,Classroom,12,1,Child Development,177 College Avenue,177 College Ave 117
CD 0285 01,Adv Res Meth App Dev Sci,LEC,Lerner Richard M.,9/2/14,12/8/14,T,1:20 PM,4:20 PM,M040 006,Classroom,17,1,Child Development,Jackson Gym,Jackson 006
CEE 0022 01,Structural Analysis,LEC,Sanayei Masoud,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M003 208,Classroom,20,1,Civil & Environmental Engineering,Anderson Hall,Anderson 208
CEE 0022 A,Structural Analysis,LAB,Sanayei Masoud,9/2/14,12/8/14,M,1:30 PM,4:00 PM,M003 307,Class Laboratory,8,1,Civil & Environmental Engineering,Anderson Hall,Anderson Hall Room 307 
CEE 0022 B,Structural Analysis,LAB,Sanayei Masoud,9/2/14,12/8/14,M,6:00 PM,9:00 PM,M003 307,Class Laboratory,12,1,Civil & Environmental Engineering,Anderson Hall,Anderson Hall Room 307 
CEE 0025 01,Rein Concrete Design,LEC,Brenner Brian,9/2/14,12/8/14,MW,6:00 PM,7:15 PM,M003 306,Classroom,18,1,Civil & Environmental Engineering,Anderson Hall,Anderson 306
CEE 0030 01,Environmental Chemistry,LEC,Durant John L,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M003 313,Classroom,7,1,Civil & Environmental Engineering,Anderson Hall,Anderson 313
CEE 0030 L,Environmental Chemistry,LAB,Durant John L,9/2/14,12/8/14,W,1:20 PM,4:20 PM,M003 019,Class Laboratory,7,1,Civil & Environmental Engineering,Anderson Hall,Anderson Hall Room 019
CEE 0042 01,Intro Geotech Engineerng,LEC,Swan Christopher,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M003 309,Classroom,22,1,Civil & Environmental Engineering,Anderson Hall,Anderson 309
CEE 0042 A,Intro Geotech Engineerng,LAB,Swan Christopher,9/2/14,12/8/14,T,1:30 PM,4:00 PM,M003 007,Class Laboratory,9,1,Civil & Environmental Engineering,Anderson Hall,Anderson Hall Room 007
CEE 0042 B,Intro Geotech Engineerng,LAB,Swan Christopher,9/2/14,12/8/14,T,6:00 PM,9:00 PM,M003 007,Class Laboratory,13,1,Civil & Environmental Engineering,Anderson Hall,Anderson Hall Room 007
CEE 0054 01,Fundamental Epidemiology,LEC,Woodin Mark A,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M003 112,Classroom,7,1,Civil & Environmental Engineering,Anderson Hall,Anderson 112 
CEE 0106 01,Struc Dynamics&eq Eng'g,LEC,Sanayei Masoud,9/2/14,12/8/14,MW,4:30 PM,5:45 PM,M003 306,Classroom,9,1,Civil & Environmental Engineering,Anderson Hall,Anderson 306
CEE 0112 01,Hydrology/water Resource,LEC,Limbrunner James F,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M003 210,Classroom,8,1,Civil & Environmental Engineering,Anderson Hall,Anderson 210
CEE 0113 01,Groundwater,LEC,Garven Grant,9/2/14,12/8/14,MW,4:30 PM,5:45 PM,M006 100,Classroom,6,1,Civil & Environmental Engineering,Lane Hall,Lane 100
CEE 0122 01,Solid Mechanics,LEC,Kachanov Mark L,9/2/14,12/8/14,TR,6:00 PM,7:15 PM,M003 211,Classroom,0,1,Civil & Environmental Engineering,Anderson Hall,Anderson 211
CEE 0123 01,Adv Structural Analysis,LEC,Chen Po-Shang,9/2/14,12/8/14,TR,4:30 PM,5:45 PM,M003 208,Classroom,7,1,Civil & Environmental Engineering,Anderson Hall,Anderson 208
CEE 0124 01,Adv Steel Design,LEC,Henige Richard,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M003 208,Classroom,6,1,Civil & Environmental Engineering,Anderson Hall,Anderson 208
CEE 0136 01,Air Pollution Control,LEC,Zemba Stephen G,9/2/14,12/8/14,T,6:30 PM,9:00 PM,M003 206,Classroom,7,1,Civil & Environmental Engineering,Anderson Hall,Anderson 206
CEE 0138 01,Hazard Waste Treat Tech,LEC,Cohen Larry,9/2/14,12/8/14,M,6:30 PM,9:00 PM,M028 134,Classroom,3,1,Civil & Environmental Engineering,Science and Technology Center,Sci-Tech 134
CEE 0146 01,Foundation Engineering,LEC,Siebert Damian R,9/2/14,12/8/14,TR,8:05 AM,9:20 AM,M003 210,Classroom,15,1,Civil & Environmental Engineering,Anderson Hall,Anderson 210
CEE 0154 01,Principles Epidemiology,LEC,Woodin Mark A,9/2/14,12/8/14,R,6:30 PM,9:00 PM,M003 112,Classroom,10,1,Civil & Environmental Engineering,Anderson Hall,Anderson 112 
CEE 0167 01,Environmental Toxicology,LEC,Desmarais Anne Marie C,9/2/14,12/8/14,MW,6:00 PM,7:15 PM,M003 208,Classroom,12,1,Civil & Environmental Engineering,Anderson Hall,Anderson 208
CEE 0185 01,Legal Issues Of Engin,LEC,Hatem David,9/2/14,12/8/14,MW,8:05 AM,9:20 AM,M003 208,Classroom,6,1,Civil & Environmental Engineering,Anderson Hall,Anderson 208
CEE 0187 01,Geographical Info System,LEC,Baise Laurie G,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M003 211,Classroom,13,1,Civil & Environmental Engineering,Anderson Hall,Anderson 211
CEE 0187 A,Geographical Info System,LAB,Baise Laurie G,9/2/14,12/8/14,M,1:30 PM,2:45 PM,M003 318,Computer Lab,4,1,Civil & Environmental Engineering,Anderson Hall,Anderson Hall Room 318 
CEE 0187 B,Geographical Info System,LAB,Baise Laurie G,9/2/14,12/8/14,M,3:00 PM,4:15 PM,M003 318,Computer Lab,9,1,Civil & Environmental Engineering,Anderson Hall,Anderson Hall Room 318 
CEE 0194 A,Special Topics,LEC,Islam Shafiqul,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M003 306,Classroom,11,1,Civil & Environmental Engineering,Anderson Hall,Anderson 306
CEE 0194 D,Special Topics,LEC,Lantagne Daniele Susan,9/2/14,12/8/14,M,8:30 AM,11:30 AM,M003 313,Classroom,5,1,Civil & Environmental Engineering,Anderson Hall,Anderson 313
CEE 0194 F,Special Topics,LEC,Koch Magaly,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M003 211,Classroom,0,1,Civil & Environmental Engineering,Anderson Hall,Anderson 211
CEE 0202 01,Env Statistics,LEC,Vogel Richard M,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M003 211,Classroom,9,1,Civil & Environmental Engineering,Anderson Hall,Anderson 211
CEE 0212 01,Chem Prin Env & Water,LEC,Chudyk Wayne A,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M003 306,Classroom,14,1,Civil & Environmental Engineering,Anderson Hall,Anderson 306
CEE 0213 01,Transport Prin Env & Wat,LEC,Ramsburg C. Andrew,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M003 210,Classroom,15,1,Civil & Environmental Engineering,Anderson Hall,Anderson 210
CEE 0241 01,Biology Water & Health,LEC,Gute David M,9/2/14,12/8/14,W,1:30 PM,4:00 PM,M003 309,Classroom,2,1,Civil & Environmental Engineering,Anderson Hall,Anderson 309
CEE 0265 01,Corp Managmnt Env Issues,LEC,Rappaport Ann Barclay,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M003 211,Classroom,1,1,Civil & Environmental Engineering,Anderson Hall,Anderson 211
CEE 0287 01,Subsurface Fluid Dynamic,LEC,Garven Grant,9/2/14,12/8/14,TWF,9:30 AM,10:20 AM,M006 006,Class Laboratory,3,1,Civil & Environmental Engineering,Lane Hall,Lane Hall Room 006 Geology Lab
CEE 0292 01,Graduate Seminar,LEC,Ramsburg C. Andrew,9/2/14,12/8/14,T,3:00 PM,4:15 PM,M003 112,Classroom,43,0,Civil & Environmental Engineering,Anderson Hall,Anderson 112 
CEE 0292 02,Graduate Seminar,LEC,Ramsburg C. Andrew,9/2/14,12/8/14,T,3:00 PM,4:15 PM,M003 112,Classroom,1,0,Civil & Environmental Engineering,Anderson Hall,Anderson 112 
CEE 0294 F,Special Topics,LEC,Zimmerman Michael A,9/2/14,12/8/14,T,6:00 PM,9:00 PM,M003 309,Classroom,1,1,Civil & Environmental Engineering,Anderson Hall,Anderson 309
CH 0001 01,Intro Community Health,LEC,Allen Jennifer,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M009 104,Classroom,166,1,Community Health,Pearson Laboratory,Pearson 104
CH 0001 A,Intro Community Health,RCT,Allen Jennifer,9/2/14,12/8/14,F,10:30 AM,11:20 AM,M010 123,Seminar Room,15,1,Community Health,Eaton Hall,Eaton 123
CH 0001 B,Intro Community Health,RCT,Allen Jennifer,9/2/14,12/8/14,F,12:00 PM,12:50 PM,M022 153,Classroom,19,1,Community Health,Robinson Hall,Robinson 153
CH 0001 C,Intro Community Health,RCT,Allen Jennifer,9/2/14,12/8/14,F,9:30 AM,10:20 AM,M022 152,Classroom,8,1,Community Health,Robinson Hall,Robinson 152
CH 0001 D,Intro Community Health,RCT,Allen Jennifer,9/2/14,12/8/14,F,10:30 AM,11:20 AM,M022 152,Classroom,20,1,Community Health,Robinson Hall,Robinson 152
CH 0001 E,Intro Community Health,RCT,Allen Jennifer,9/2/14,12/8/14,R,1:30 PM,2:20 PM,M007 225,Classroom,16,1,Community Health,Braker Hall,Braker 225
CH 0001 F,Intro Community Health,RCT,Allen Jennifer,9/2/14,12/8/14,R,3:00 PM,3:50 PM,M010 124,Seminar Room,11,1,Community Health,Eaton Hall,Eaton 124
CH 0001 G,Intro Community Health,RCT,Allen Jennifer,9/2/14,12/8/14,R,3:00 PM,3:50 PM,M007 225,Classroom,20,1,Community Health,Braker Hall,Braker 225
CH 0001 H,Intro Community Health,RCT,Allen Jennifer,9/2/14,12/8/14,R,4:30 PM,5:25 PM,M003 313,Classroom,18,1,Community Health,Anderson Hall,Anderson 313
CH 0001 I,Intro Community Health,RCT,Allen Jennifer,9/2/14,12/8/14,W,1:30 PM,2:20 PM,M027 113,Classroom,20,1,Community Health,Paige Hall,Paige Crane Room
CH 0001 J,Intro Community Health,RCT,Allen Jennifer,9/2/14,12/8/14,W,3:00 PM,3:50 PM,M002 003,Classroom,19,1,Community Health,Bromfield Pearson,Bromfield-Pearson 003
CH 0030 01,Community Health Methods,LEC,Tendulkar Shalini,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M017 224,Classroom,7,1,Community Health,Miner Hall,Miner 224
CH 0031 01,Intro Stats Health Apps,LEC,Kosinski Karen Claire,9/2/14,12/8/14,TR,3:00 PM,4:15 PM,M002 005,Classroom,23,1,Community Health,Bromfield Pearson,Bromfield-Pearson 005
CH 0054 01,Fundamental Epidemiology,LEC,Woodin Mark A,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M003 112,Classroom,38,1,Community Health,Anderson Hall,Anderson 112 
CH 0099 02,Special Topics/comm Hlth,LEC,Gualtieri Lisa N,9/2/14,12/8/14,M,10:30 AM,11:45 AM,M006 100A,Classroom,9,1,Community Health,Lane Hall,Lane 100A
CH 0099 03,Special Topics/comm Hlth,LEC,Nava-coulter Brett,9/2/14,12/8/14,MW,4:30 PM,5:45 PM,M010 201,Classroom,2,1,Community Health,Eaton Hall,Eaton 201 
CH 0099 04,Special Topics/comm Hlth,LEC,Leung Rubin Carolyn C.,9/2/14,12/8/14,M,3:00 PM,5:30 PM,M006 100A,Classroom,14,1,Community Health,Lane Hall,Lane 100A
CH 0104 01,Women & Health,LEC,Woo Meghan E.,9/2/14,12/8/14,M,6:00 PM,8:30 PM,M022 153,Classroom,25,1,Community Health,Robinson Hall,Robinson 153
CH 0106 01,HealthEthics & Policy,LEC,Ladin Keren,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M028 135,Classroom,29,1,Community Health,Science and Technology Center,Sci-Tech 135
CH 0107 01,Sci & Practice Medicine,LEC,Glickman-Simon Richard,9/2/14,12/8/14,W,1:20 PM,4:20 PM,M003 210,Classroom,26,1,Community Health,Anderson Hall,Anderson 210
CH 0109 01,Com Act In Public Health,LEC,Roelofs Cora,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M024 314,Classroom,27,1,Community Health,Tisch Library,Tisch 314
CH 0180 01,Internship,LEC,Reider Pamela Schoenberg,9/2/14,12/8/14,W,8:05 AM,9:20 AM,M010 203,Classroom,13,1,Community Health,Eaton Hall,Eaton 203
CH 0182 01,Comm Health Education A,LEC,Tendulkar Shalini,9/2/14,12/8/14,W,9:00 AM,10:15 AM,M010 202,Classroom,8,0,Community Health,Eaton Hall,Eaton 202
CH 0188 12,Special Topics,LEC,Roelofs Cora,9/2/14,12/8/14,R,1:30 PM,4:00 PM,M017 110,Seminar Room,12,1,Community Health,Miner Hall,Miner 110
CH 0196 01,WASH Seminar,LEC,Kosinski Karen Claire,9/2/14,12/8/14,W,9:00 AM,11:30 AM,M103 202,Classroom,14,1,Community Health,112 Packard Ave.,112 Packard Ave. Community Health  Conference Room
CH 0197 01,Sr Thesis Comm Health A,LEC,Gute David M,9/2/14,12/8/14,M,9:30 AM,10:20 AM,M103 202,Classroom,3,0,Community Health,112 Packard Ave.,112 Packard Ave. Community Health  Conference Room
CHBE 0010 01,Chemical Process Prin,LEC,Ryder Daniel F,9/2/14,12/8/14,TR,3:00 PM,4:15 PM,M028 136,Classroom,37,1,Chemical & Biological Engineering,Science and Technology Center,Sci-Tech 136
CHBE 0021 01,Transport Phenomena I,LEC,Nair Nikhil,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M028 134,Classroom,32,1,Chemical & Biological Engineering,Science and Technology Center,Sci-Tech 134
CHBE 0045 01,Chem & Biol Separations,LEC,Asatekin Ayse,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M003 112,Classroom,44,1,Chemical & Biological Engineering,Anderson Hall,Anderson 112 
CHBE 0051 01,Chem & Biological En Lab,LEC,Mess Derek,9/2/14,12/8/14,T,1:20 PM,4:20 PM,M028 134,Classroom,23,0.5,Chemical & Biological Engineering,Science and Technology Center,Sci-Tech 134
CHBE 0051 02,Chem & Biological En Lab,LEC,Mess Derek,9/2/14,12/8/14,R,1:20 PM,4:20 PM,M028 134,Classroom,21,0.5,Chemical & Biological Engineering,Science and Technology Center,Sci-Tech 134
CHBE 0109 01,Process Dynams & Control,LEC,Georgakis Christos,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M028 136,Classroom,44,1,Chemical & Biological Engineering,Science and Technology Center,Sci-Tech 136
CHBE 0110 01,Intro Optimization,LEC,Georgakis Christos,9/2/14,12/8/14,MW,4:30 PM,5:45 PM,M028 136,Classroom,8,1,Chemical & Biological Engineering,Science and Technology Center,Sci-Tech 136
CHBE 0111 01,Therm-Fluid Transport I,LEC,Abedian Behrouz,9/2/14,12/8/14,MW,4:30 PM,5:45 PM,M003 208,Classroom,0,1,Chemical & Biological Engineering,Anderson Hall,Anderson 208
CHBE 0121 01,Prin Of Polymerization,LEC,Asatekin Ayse,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M028 134,Classroom,11,1,Chemical & Biological Engineering,Science and Technology Center,Sci-Tech 134
CHBE 0136 01,Air Pollution Control,LEC,Zemba Stephen G,9/2/14,12/8/14,T,6:30 PM,9:00 PM,M003 206,Classroom,1,1,Chemical & Biological Engineering,Anderson Hall,Anderson 206
CHBE 0138 01,Hazard Waste Treat Tech,LEC,Cohen Larry,9/2/14,12/8/14,M,6:30 PM,9:00 PM,M028 134,Classroom,5,1,Chemical & Biological Engineering,Science and Technology Center,Sci-Tech 134
CHBE 0140 01,Surface & Colloid Chem,LEC,Panzer Matthew,9/2/14,12/8/14,TR,9:00 AM,10:15 AM,M028 135,Classroom,25,1,Chemical & Biological Engineering,Science and Technology Center,Sci-Tech 135
CHBE 0160 01,Biochemical Engineering,LEC,Ryder Daniel F,9/2/14,12/8/14,TR,4:30 PM,5:45 PM,M028 136,Classroom,12,1,Chemical & Biological Engineering,Science and Technology Center,Sci-Tech 136
CHBE 0164 01,Biomaterials & Regenerative Me,LEC,Marelli Benedetto,9/2/14,12/8/14,M,6:00 PM,9:00 PM,M028 136,Classroom,5,1,Chemical & Biological Engineering,Science and Technology Center,Sci-Tech 136
CHBE 0167 01,Metabolic&cellular Engin,LEC,Lee Kyongbum,9/2/14,12/8/14,MW,4:30 PM,5:45 PM,M028 134,Classroom,11,1,Chemical & Biological Engineering,Science and Technology Center,Sci-Tech 134
CHBE 0168 01,Biotech Process Proj Lab,LEC,Yi Hyunmin,9/2/14,12/8/14,R,6:00 PM,9:30 PM,M028 135,Classroom,16,1,Chemical & Biological Engineering,Science and Technology Center,Sci-Tech 135
CHBE 0175 01,Elect Devices for Energy App,LEC,Panzer Matthew,9/2/14,12/8/14,TR,4:30 PM,5:45 PM,M028 134,Classroom,31,1,Chemical & Biological Engineering,Science and Technology Center,Sci-Tech 134
CHBE 0201 01,Math Meths In Chem Engr,LEC,Meldon Jerry H,9/2/14,12/8/14,MW,4:30 PM,5:45 PM,M028 135,Classroom,12,1,Chemical & Biological Engineering,Science and Technology Center,Sci-Tech 135
CHBE 0203 01,Adv Thermodynamics,LEC,Mess Derek,9/2/14,12/8/14,TR,4:30 PM,5:45 PM,M028 135,Classroom,9,1,Chemical & Biological Engineering,Science and Technology Center,Sci-Tech 135
CHBE 0291 01,Graduate Seminar,LEC,Ryder Daniel F,9/2/14,12/8/14,M,12:00 PM,1:15 PM,M028 136,Classroom,39,0,Chemical & Biological Engineering,Science and Technology Center,Sci-Tech 136
CHEM 0001 01,Chem Fundamentals W/lab,LEC,Kryatov Sergiy,9/2/14,12/8/14,MW,8:30 AM,9:20 AM,M009 104,Classroom,162,1,Chemistry,Pearson Laboratory,Pearson 104
CHEM 0001 01,Chem Fundamentals W/lab,LEC,Kryatov Sergiy,9/2/14,12/8/14,R,9:30 AM,10:20 AM,M009 104,Classroom,162,1,Chemistry,Pearson Laboratory,Pearson 104
CHEM 0001 02,Chem Fundamentals W/lab,LEC,Kryatov Sergiy,9/2/14,12/8/14,MWF,1:30 PM,2:20 PM,M009 104,Classroom,131,1,Chemistry,Pearson Laboratory,Pearson 104
CHEM 0001 LA,Chem Fundamentals W/lab,LAB,Kryatov Sergiy,9/2/14,12/8/14,M,1:20 PM,4:20 PM,M009 207A,Class Laboratory,12,1,Chemistry,Pearson Laboratory,Pearson Hall Room 207A 
CHEM 0001 LB,Chem Fundamentals W/lab,LAB,Kryatov Sergiy,9/2/14,12/8/14,M,1:20 PM,4:20 PM,M009 207A,Class Laboratory,15,1,Chemistry,Pearson Laboratory,Pearson Hall Room 207A 
CHEM 0001 LC,Chem Fundamentals W/lab,LAB,Kryatov Sergiy,9/2/14,12/8/14,M,6:30 PM,9:30 PM,M009 207A,Class Laboratory,16,1,Chemistry,Pearson Laboratory,Pearson Hall Room 207A 
CHEM 0001 LCC,Chem Fundamentals W/lab,LAB,Kryatov Sergiy,9/2/14,12/8/14,M,6:30 PM,9:30 PM,M009 207A,Class Laboratory,11,1,Chemistry,Pearson Laboratory,Pearson Hall Room 207A 
CHEM 0001 LD,Chem Fundamentals W/lab,LAB,Kryatov Sergiy,9/2/14,12/8/14,M,6:30 PM,9:30 PM,M009 207A,Class Laboratory,16,1,Chemistry,Pearson Laboratory,Pearson Hall Room 207A 
CHEM 0001 LE,Chem Fundamentals W/lab,LAB,Kryatov Sergiy,9/2/14,12/8/14,T,8:30 AM,11:30 AM,M009 200,Class Laboratory,16,1,Chemistry,Pearson Laboratory,Pearson Hall Room 200 
CHEM 0001 LF,Chem Fundamentals W/lab,LAB,Kryatov Sergiy,9/2/14,12/8/14,T,8:30 AM,11:30 AM,M009 200,Class Laboratory,9,1,Chemistry,Pearson Laboratory,Pearson Hall Room 200 
CHEM 0001 LG,Chem Fundamentals W/lab,LAB,Kryatov Sergiy,9/2/14,12/8/14,T,8:30 AM,11:30 AM,M009 200,Class Laboratory,9,1,Chemistry,Pearson Laboratory,Pearson Hall Room 200 
CHEM 0001 LGG,Chem Fundamentals W/lab,LAB,Kryatov Sergiy,9/2/14,12/8/14,T,1:20 PM,4:20 PM,M009 200,Class Laboratory,15,1,Chemistry,Pearson Laboratory,Pearson Hall Room 200 
CHEM 0001 LI,Chem Fundamentals W/lab,LAB,Kryatov Sergiy,9/2/14,12/8/14,W,8:30 AM,11:30 AM,M009 200,Class Laboratory,9,1,Chemistry,Pearson Laboratory,Pearson Hall Room 200 
CHEM 0001 LK,Chem Fundamentals W/lab,LAB,Kryatov Sergiy,9/2/14,12/8/14,W,1:20 PM,4:20 PM,M009 207A,Class Laboratory,14,1,Chemistry,Pearson Laboratory,Pearson Hall Room 207A 
CHEM 0001 LKK,Chem Fundamentals W/lab,LAB,Kryatov Sergiy,9/2/14,12/8/14,W,1:20 PM,4:20 PM,M009 207A,Class Laboratory,15,1,Chemistry,Pearson Laboratory,Pearson Hall Room 207A 
CHEM 0001 LM,Chem Fundamentals W/lab,LAB,Kryatov Sergiy,9/2/14,12/8/14,W,6:30 PM,9:30 PM,M009 207A,Class Laboratory,16,1,Chemistry,Pearson Laboratory,Pearson Hall Room 207A 
CHEM 0001 LN,Chem Fundamentals W/lab,LAB,Kryatov Sergiy,9/2/14,12/8/14,W,6:30 PM,9:30 PM,M009 207A,Class Laboratory,15,1,Chemistry,Pearson Laboratory,Pearson Hall Room 207A 
CHEM 0001 LO,Chem Fundamentals W/lab,LAB,Kryatov Sergiy,9/2/14,12/8/14,R,1:20 PM,4:20 PM,M009 200,Class Laboratory,15,1,Chemistry,Pearson Laboratory,Pearson Hall Room 200 
CHEM 0001 LP,Chem Fundamentals W/lab,LAB,Kryatov Sergiy,9/2/14,12/8/14,R,1:20 PM,4:20 PM,M009 200,Class Laboratory,6,1,Chemistry,Pearson Laboratory,Pearson Hall Room 200 
CHEM 0001 LQ,Chem Fundamentals W/lab,LAB,Kryatov Sergiy,9/2/14,12/8/14,R,1:20 PM,4:20 PM,M009 200,Class Laboratory,15,1,Chemistry,Pearson Laboratory,Pearson Hall Room 200 
CHEM 0001 LR,Chem Fundamentals W/lab,LAB,Kryatov Sergiy,9/2/14,12/8/14,R,6:30 PM,9:30 PM,M009 200,Class Laboratory,16,1,Chemistry,Pearson Laboratory,Pearson Hall Room 200 
CHEM 0001 LS,Chem Fundamentals W/lab,LAB,Kryatov Sergiy,9/2/14,12/8/14,R,6:30 PM,9:30 PM,M009 200,Class Laboratory,12,1,Chemistry,Pearson Laboratory,Pearson Hall Room 200 
CHEM 0001 LT,Chem Fundamentals W/lab,LAB,Kryatov Sergiy,9/2/14,12/8/14,R,6:30 PM,9:30 PM,M009 200,Class Laboratory,14,1,Chemistry,Pearson Laboratory,Pearson Hall Room 200 
CHEM 0001 LU,Chem Fundamentals W/lab,LAB,Kryatov Sergiy,9/2/14,12/8/14,F,8:30 AM,11:30 AM,M009 200,Class Laboratory,11,1,Chemistry,Pearson Laboratory,Pearson Hall Room 200 
CHEM 0001 LV,Chem Fundamentals W/lab,LAB,Kryatov Sergiy,9/2/14,12/8/14,F,8:30 AM,11:30 AM,M009 200,Class Laboratory,2,1,Chemistry,Pearson Laboratory,Pearson Hall Room 200 
CHEM 0001 LW,Chem Fundamentals W/lab,LAB,Kryatov Sergiy,9/2/14,12/8/14,F,8:30 AM,11:30 AM,M009 200,Class Laboratory,1,1,Chemistry,Pearson Laboratory,Pearson Hall Room 200 
CHEM 0001 LX,Chem Fundamentals W/lab,LAB,Kryatov Sergiy,9/2/14,12/8/14,F,1:20 PM,4:20 PM,M009 200,Class Laboratory,10,1,Chemistry,Pearson Laboratory,Pearson Hall Room 200 
CHEM 0001 LY,Chem Fundamentals W/lab,LAB,Kryatov Sergiy,9/2/14,12/8/14,F,1:20 PM,4:20 PM,M009 200,Class Laboratory,1,1,Chemistry,Pearson Laboratory,Pearson Hall Room 200 
CHEM 0001 LZZ,Chem Fundamentals W/lab,LAB,Kryatov Sergiy,9/2/14,12/8/14,,,,M009 200,Class Laboratory,2,1,Chemistry,Pearson Laboratory,Pearson Hall Room 200 
CHEM 0001 RA,Chem Fundamentals W/lab,RCT,Kryatov Sergiy,9/2/14,12/8/14,T,3:00 PM,3:50 PM,M009 112,Classroom,28,1,Chemistry,Pearson Laboratory,Pearson 112
CHEM 0001 RC,Chem Fundamentals W/lab,RCT,Kryatov Sergiy,9/2/14,12/8/14,T,9:30 AM,10:20 AM,M009 104,Classroom,29,1,Chemistry,Pearson Laboratory,Pearson 104
CHEM 0001 RD,Chem Fundamentals W/lab,RCT,Kryatov Sergiy,9/2/14,12/8/14,W,3:00 PM,3:50 PM,M009 112,Classroom,28,1,Chemistry,Pearson Laboratory,Pearson 112
CHEM 0001 RE,Chem Fundamentals W/lab,RCT,Kryatov Sergiy,9/2/14,12/8/14,M,4:30 PM,5:20 PM,M009 112,Classroom,28,1,Chemistry,Pearson Laboratory,Pearson 112
CHEM 0001 RF,Chem Fundamentals W/lab,RCT,Kryatov Sergiy,9/2/14,12/8/14,W,6:00 PM,6:50 PM,M009 112,Classroom,27,1,Chemistry,Pearson Laboratory,Pearson 112
CHEM 0001 RG,Chem Fundamentals W/lab,RCT,Kryatov Sergiy,9/2/14,12/8/14,R,7:30 PM,8:15 PM,M009 112,Classroom,15,1,Chemistry,Pearson Laboratory,Pearson 112
CHEM 0001 RI,Chem Fundamentals W/lab,RCT,Kryatov Sergiy,9/2/14,12/8/14,R,3:00 PM,3:50 PM,M009 112,Classroom,28,1,Chemistry,Pearson Laboratory,Pearson 112
CHEM 0001 RJ,Chem Fundamentals W/lab,RCT,Kryatov Sergiy,9/2/14,12/8/14,M,3:00 PM,3:50 PM,M009 112,Classroom,30,1,Chemistry,Pearson Laboratory,Pearson 112
CHEM 0001 RP,Chem Fundamentals W/lab,RCT,Kryatov Sergiy,9/2/14,12/8/14,M,7:30 PM,8:15 PM,M009 106,Classroom,16,1,Chemistry,Pearson Laboratory,Pearson 106
CHEM 0001 RQ,Chem Fundamentals W/lab,RCT,Kryatov Sergiy,9/2/14,12/8/14,W,7:30 PM,8:15 PM,M009 112,Classroom,13,1,Chemistry,Pearson Laboratory,Pearson 112
CHEM 0001 RR,Chem Fundamentals W/lab,RCT,Kryatov Sergiy,9/2/14,12/8/14,M,6:00 PM,6:50 PM,M009 106,Classroom,18,1,Chemistry,Pearson Laboratory,Pearson 106
CHEM 0001 RS,Chem Fundamentals W/lab,RCT,Kryatov Sergiy,9/2/14,12/8/14,F,8:30 AM,9:20 AM,M009 112,Classroom,6,1,Chemistry,Pearson Laboratory,Pearson 112
CHEM 0001 RT,Chem Fundamentals W/lab,RCT,Kryatov Sergiy,9/2/14,12/8/14,F,9:30 AM,10:20 AM,M009 106,Classroom,27,1,Chemistry,Pearson Laboratory,Pearson 106
CHEM 0002 01,Chem Principles W/lab,LEC,Pamuk Turner Diren,9/2/14,12/8/14,TRF,8:30 AM,9:20 AM,M009 104,Classroom,51,1,Chemistry,Pearson Laboratory,Pearson 104
CHEM 0002 LC,Chem Principles W/lab,LAB,Pamuk Turner Diren,9/2/14,12/8/14,T,1:20 PM,4:20 PM,M009 200,Class Laboratory,11,1,Chemistry,Pearson Laboratory,Pearson Hall Room 200 
CHEM 0002 LCC,Chem Principles W/lab,LAB,Pamuk Turner Diren,9/2/14,12/8/14,T,6:30 PM,9:30 PM,M009 207A,Class Laboratory,12,1,Chemistry,Pearson Laboratory,Pearson Hall Room 207A 
CHEM 0002 LD,Chem Principles W/lab,LAB,Pamuk Turner Diren,9/2/14,12/8/14,T,6:30 PM,9:30 PM,M009 207A,Class Laboratory,8,1,Chemistry,Pearson Laboratory,Pearson Hall Room 207A 
CHEM 0002 LDD,Chem Principles W/lab,LAB,Pamuk Turner Diren,9/2/14,12/8/14,W,8:30 AM,11:30 AM,M009 200,Class Laboratory,0,1,Chemistry,Pearson Laboratory,Pearson Hall Room 200 
CHEM 0002 LE,Chem Principles W/lab,LAB,Pamuk Turner Diren,9/2/14,12/8/14,W,8:30 AM,11:30 AM,M009 200,Class Laboratory,0,1,Chemistry,Pearson Laboratory,Pearson Hall Room 200 
CHEM 0002 LEE,Chem Principles W/lab,LAB,Pamuk Turner Diren,9/2/14,12/8/14,W,1:20 PM,4:20 PM,M009 207A,Class Laboratory,8,1,Chemistry,Pearson Laboratory,Pearson Hall Room 207A 
CHEM 0002 LF,Chem Principles W/lab,LAB,Pamuk Turner Diren,9/2/14,12/8/14,W,6:30 PM,9:30 PM,M009 207A,Class Laboratory,8,1,Chemistry,Pearson Laboratory,Pearson Hall Room 207A 
CHEM 0002 LX,Chem Principles W/lab,LAB,Pamuk Turner Diren,9/2/14,12/8/14,F,1:20 PM,4:20 PM,M009 200,Class Laboratory,4,1,Chemistry,Pearson Laboratory,Pearson Hall Room 200 
CHEM 0002 LZZ,Chem Principles W/lab,LAB,Pamuk Turner Diren,9/2/14,12/8/14,,,,M009 200,Class Laboratory,0,1,Chemistry,Pearson Laboratory,Pearson Hall Room 200 
CHEM 0002 RB,Chem Principles W/lab,RCT,Pamuk Turner Diren,9/2/14,12/8/14,R,3:00 PM,3:50 PM,M019 009,Classroom,15,1,Chemistry,Aidekman Arts Center,Aidekman 009
CHEM 0002 RC,Chem Principles W/lab,RCT,Pamuk Turner Diren,9/2/14,12/8/14,W,9:30 AM,10:20 AM,M009 106,Classroom,17,1,Chemistry,Pearson Laboratory,Pearson 106
CHEM 0002 RD,Chem Principles W/lab,RCT,Pamuk Turner Diren,9/2/14,12/8/14,R,5:00 PM,5:50 PM,M009 112,Classroom,13,1,Chemistry,Pearson Laboratory,Pearson 112
CHEM 0002 RE,Chem Principles W/lab,RCT,Pamuk Turner Diren,9/2/14,12/8/14,W,5:00 PM,5:50 PM,M009 112,Classroom,4,1,Chemistry,Pearson Laboratory,Pearson 112
CHEM 0011 01,General Chemistry,LEC,Batchelder Lynne,9/2/14,12/8/14,R,9:30 AM,10:20 AM,M009 106,Classroom,40,1.5,Chemistry,Pearson Laboratory,Pearson 106
CHEM 0011 01,General Chemistry,LEC,Batchelder Lynne,9/2/14,12/8/14,TRF,12:00 PM,1:15 PM,M009 106,Classroom,40,1.5,Chemistry,Pearson Laboratory,Pearson 106
CHEM 0011 LA,General Chemistry,LAB,Batchelder Lynne,9/2/14,12/8/14,M,1:20 PM,4:20 PM,M009 207A,Class Laboratory,13,1.5,Chemistry,Pearson Laboratory,Pearson Hall Room 207A 
CHEM 0011 LC,General Chemistry,LAB,Batchelder Lynne,9/2/14,12/8/14,T,1:20 PM,4:20 PM,M009 200,Class Laboratory,12,1.5,Chemistry,Pearson Laboratory,Pearson Hall Room 200 
CHEM 0011 LD,General Chemistry,LAB,Batchelder Lynne,9/2/14,12/8/14,T,6:30 PM,9:30 PM,M009 207A,Class Laboratory,12,1.5,Chemistry,Pearson Laboratory,Pearson Hall Room 207A 
CHEM 0011 LF,General Chemistry,LAB,Batchelder Lynne,9/2/14,12/8/14,R,1:20 PM,4:20 PM,M009 200,Class Laboratory,2,1.5,Chemistry,Pearson Laboratory,Pearson Hall Room 200 
CHEM 0011 LZZ,General Chemistry,LAB,Batchelder Lynne,9/2/14,12/8/14,,,,M009 200,Class Laboratory,1,1.5,Chemistry,Pearson Laboratory,Pearson Hall Room 200 
CHEM 0011 RA,General Chemistry,RCT,Batchelder Lynne,9/2/14,12/8/14,R,8:30 AM,9:20 AM,M009 112,Classroom,13,1.5,Chemistry,Pearson Laboratory,Pearson 112
CHEM 0011 RB,General Chemistry,RCT,Batchelder Lynne,9/2/14,12/8/14,T,9:30 AM,10:20 AM,M009 106,Classroom,24,1.5,Chemistry,Pearson Laboratory,Pearson 106
CHEM 0031 01,Physical Chemistry I,LEC,Utz Arthur,9/2/14,12/8/14,MWF,10:30 AM,11:20 AM,M007 001,Classroom,83,1,Chemistry,Braker Hall,Braker 001
CHEM 0031 RA,Physical Chemistry I,RCT,Utz Arthur,9/2/14,12/8/14,F,9:30 AM,10:20 AM,M009 104,Classroom,32,1,Chemistry,Pearson Laboratory,Pearson 104
CHEM 0031 RB,Physical Chemistry I,RCT,Utz Arthur,9/2/14,12/8/14,T,8:30 AM,9:20 AM,M009 112,Classroom,26,1,Chemistry,Pearson Laboratory,Pearson 112
CHEM 0031 RC,Physical Chemistry I,RCT,Utz Arthur,9/2/14,12/8/14,R,12:00 PM,12:50 PM,M004 114,Classroom,24,1,Chemistry,Barnum Hall,Barnum 114
CHEM 0033 01,Physical Chemistry Lab,LEC,Campbell Victoria L,9/2/14,12/8/14,F,2:30 PM,3:20 PM,M009 104,Classroom,60,0.5,Chemistry,Pearson Laboratory,Pearson 104
CHEM 0033 A,Physical Chemistry Lab,LAB,TBD,9/2/14,12/8/14,M,1:20 PM,4:20 PM,M009 207A,Class Laboratory,11,0.5,Chemistry,Pearson Laboratory,Pearson Hall Room 207A 
CHEM 0033 B,Physical Chemistry Lab,LAB,TBD,9/2/14,12/8/14,M,6:30 PM,9:30 PM,M009 207A,Class Laboratory,10,0.5,Chemistry,Pearson Laboratory,Pearson Hall Room 207A 
CHEM 0033 C,Physical Chemistry Lab,LAB,Campbell Victoria L,9/2/14,12/8/14,T,1:20 PM,4:20 PM,M009 207A,Class Laboratory,5,0.5,Chemistry,Pearson Laboratory,Pearson Hall Room 207A 
CHEM 0033 D,Physical Chemistry Lab,LAB,TBD,9/2/14,12/8/14,T,6:30 PM,9:30 PM,M009 207A,Class Laboratory,11,0.5,Chemistry,Pearson Laboratory,Pearson Hall Room 207A 
CHEM 0033 E,Physical Chemistry Lab,LAB,TBD,9/2/14,12/8/14,W,1:20 PM,4:20 PM,M009 207A,Class Laboratory,11,0.5,Chemistry,Pearson Laboratory,Pearson Hall Room 207A 
CHEM 0033 F,Physical Chemistry Lab,LAB,TBD,9/2/14,12/8/14,W,6:30 PM,9:30 PM,M009 207A,Class Laboratory,12,0.5,Chemistry,Pearson Laboratory,Pearson Hall Room 207A 
CHEM 0051 01,Organic Chemistry I,LEC,Bennett Clay,9/2/14,12/8/14,TF,12:00 PM,1:15 PM,M009 104,Classroom,186,1,Chemistry,Pearson Laboratory,Pearson 104
CHEM 0051 RB,Organic Chemistry I,RCT,Bennett Clay,9/2/14,12/8/14,T,7:30 PM,8:15 PM,M009 112,Classroom,26,1,Chemistry,Pearson Laboratory,Pearson 112
CHEM 0051 RC,Organic Chemistry I,RCT,Bennett Clay,9/2/14,12/8/14,M,6:00 PM,6:50 PM,M009 112,Classroom,28,1,Chemistry,Pearson Laboratory,Pearson 112
CHEM 0051 RD,Organic Chemistry I,RCT,Bennett Clay,9/2/14,12/8/14,T,6:00 PM,6:50 PM,M009 112,Classroom,29,1,Chemistry,Pearson Laboratory,Pearson 112
CHEM 0051 RE,Organic Chemistry I,RCT,Bennett Clay,9/2/14,12/8/14,F,8:05 AM,9:20 AM,M009 106,Classroom,1,1,Chemistry,Pearson Laboratory,Pearson 106
CHEM 0051 RF,Organic Chemistry I,RCT,Bennett Clay,9/2/14,12/8/14,R,6:00 PM,6:50 PM,M009 112,Classroom,5,1,Chemistry,Pearson Laboratory,Pearson 112
CHEM 0051 RG,Organic Chemistry I,RCT,Bennett Clay,9/2/14,12/8/14,W,6:00 PM,6:50 PM,M022 152,Classroom,6,1,Chemistry,Robinson Hall,Robinson 152
CHEM 0051 RI,Organic Chemistry I,RCT,Bennett Clay,9/2/14,12/8/14,M,7:30 PM,8:15 PM,M009 112,Classroom,28,1,Chemistry,Pearson Laboratory,Pearson 112
CHEM 0051 RR,Organic Chemistry I,RCT,Bennett Clay,9/2/14,12/8/14,W,8:30 AM,9:20 AM,M009 112,Classroom,23,1,Chemistry,Pearson Laboratory,Pearson 112
CHEM 0051 RU,Organic Chemistry I,RCT,Bennett Clay,9/2/14,12/8/14,R,8:30 AM,9:20 AM,M019 009,Classroom,27,1,Chemistry,Aidekman Arts Center,Aidekman 009
CHEM 0053 01,Organic Chem I Lab,LEC,Stolow Robert D,9/2/14,12/8/14,R,12:00 PM,1:15 PM,M009 104,Classroom,168,0.5,Chemistry,Pearson Laboratory,Pearson 104
CHEM 0053 A,Organic Chem I Lab,LAB,Stolow Robert D,9/2/14,12/8/14,M,1:20 PM,4:20 PM,M009 210A,Class Laboratory,10,0.5,Chemistry,Pearson Laboratory,Pearson Hall Room 210A 
CHEM 0053 B,Organic Chem I Lab,LAB,Stolow Robert D,9/2/14,12/8/14,M,1:20 PM,4:20 PM,M009 210A,Class Laboratory,9,0.5,Chemistry,Pearson Laboratory,Pearson Hall Room 210A 
CHEM 0053 E,Organic Chem I Lab,LAB,Stolow Robert D,9/2/14,12/8/14,T,8:30 AM,11:30 AM,M009 210A,Class Laboratory,8,0.5,Chemistry,Pearson Laboratory,Pearson Hall Room 210A 
CHEM 0053 EE,Organic Chem I Lab,LAB,Stolow Robert D,9/2/14,12/8/14,T,8:30 AM,11:30 AM,M009 210A,Class Laboratory,7,0.5,Chemistry,Pearson Laboratory,Pearson Hall Room 210A 
CHEM 0053 F,Organic Chem I Lab,LAB,Stolow Robert D,9/2/14,12/8/14,T,1:20 PM,4:20 PM,M009 210A,Class Laboratory,10,0.5,Chemistry,Pearson Laboratory,Pearson Hall Room 210A 
CHEM 0053 FF,Organic Chem I Lab,LAB,Stolow Robert D,9/2/14,12/8/14,T,1:20 PM,4:20 PM,M009 210A,Class Laboratory,8,0.5,Chemistry,Pearson Laboratory,Pearson Hall Room 210A 
CHEM 0053 G,Organic Chem I Lab,LAB,Stolow Robert D,9/2/14,12/8/14,T,6:30 PM,9:30 PM,M009 210A,Class Laboratory,11,0.5,Chemistry,Pearson Laboratory,Pearson Hall Room 210A 
CHEM 0053 H,Organic Chem I Lab,LAB,Stolow Robert D,9/2/14,12/8/14,T,6:30 PM,9:30 PM,M009 210A,Class Laboratory,10,0.5,Chemistry,Pearson Laboratory,Pearson Hall Room 210A 
CHEM 0053 I,Organic Chem I Lab,LAB,Stolow Robert D,9/2/14,12/8/14,W,8:30 AM,11:30 AM,M009 210A,Class Laboratory,10,0.5,Chemistry,Pearson Laboratory,Pearson Hall Room 210A 
CHEM 0053 II,Organic Chem I Lab,LAB,Stolow Robert D,9/2/14,12/8/14,W,8:30 AM,11:30 AM,M009 210A,Class Laboratory,7,0.5,Chemistry,Pearson Laboratory,Pearson Hall Room 210A 
CHEM 0053 J,Organic Chem I Lab,LAB,Stolow Robert D,9/2/14,12/8/14,W,1:20 PM,4:20 PM,M009 210A,Class Laboratory,10,0.5,Chemistry,Pearson Laboratory,Pearson Hall Room 210A 
CHEM 0053 JJ,Organic Chem I Lab,LAB,Stolow Robert D,9/2/14,12/8/14,W,1:20 PM,4:20 PM,M009 210A,Class Laboratory,10,0.5,Chemistry,Pearson Laboratory,Pearson Hall Room 210A 
CHEM 0053 K,Organic Chem I Lab,LAB,Stolow Robert D,9/2/14,12/8/14,W,6:30 PM,9:30 PM,M009 210A,Class Laboratory,10,0.5,Chemistry,Pearson Laboratory,Pearson Hall Room 210A 
CHEM 0053 L,Organic Chem I Lab,LAB,Stolow Robert D,9/2/14,12/8/14,W,6:30 PM,9:30 PM,M009 210A,Class Laboratory,8,0.5,Chemistry,Pearson Laboratory,Pearson Hall Room 210A 
CHEM 0053 M,Organic Chem I Lab,LAB,Stolow Robert D,9/2/14,12/8/14,R,8:30 AM,11:30 AM,M009 210A,Class Laboratory,1,0.5,Chemistry,Pearson Laboratory,Pearson Hall Room 210A 
CHEM 0053 MM,Organic Chem I Lab,LAB,Stolow Robert D,9/2/14,12/8/14,R,8:30 AM,11:30 AM,M009 210A,Class Laboratory,0,0.5,Chemistry,Pearson Laboratory,Pearson Hall Room 210A 
CHEM 0053 N,Organic Chem I Lab,LAB,Stolow Robert D,9/2/14,12/8/14,R,1:20 PM,4:20 PM,M009 210A,Class Laboratory,9,0.5,Chemistry,Pearson Laboratory,Pearson Hall Room 210A 
CHEM 0053 NN,Organic Chem I Lab,LAB,Stolow Robert D,9/2/14,12/8/14,R,1:20 PM,4:20 PM,M009 210A,Class Laboratory,10,0.5,Chemistry,Pearson Laboratory,Pearson Hall Room 210A 
CHEM 0053 O,Organic Chem I Lab,LAB,Stolow Robert D,9/2/14,12/8/14,R,6:30 PM,9:30 PM,M009 210A,Class Laboratory,9,0.5,Chemistry,Pearson Laboratory,Pearson Hall Room 210A 
CHEM 0053 P,Organic Chem I Lab,LAB,Stolow Robert D,9/2/14,12/8/14,R,6:30 PM,9:30 PM,M009 210A,Class Laboratory,10,0.5,Chemistry,Pearson Laboratory,Pearson Hall Room 210A 
CHEM 0061 01,Inorganic Chemistry,LEC,Haas Terry E,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M009 112,Classroom,22,1,Chemistry,Pearson Laboratory,Pearson 112
CHEM 0133 01,Quantum Mechanics,LEC,Shultz Mary Jane,9/2/14,12/8/14,TR,8:05 AM,9:20 AM,M009 106,Classroom,6,1,Chemistry,Pearson Laboratory,Pearson 106
CHEM 0135 01,Biophysical Chemistry,LEC,Mace Charles R.,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M009 112,Classroom,18,1,Chemistry,Pearson Laboratory,Pearson 112
CHEM 0141 01,Instrumental Analysis,LEC,Robbat Jr Albert,9/2/14,12/8/14,W,3:00 PM,6:00 PM,M009 106,Classroom,7,1.5,Chemistry,Pearson Laboratory,Pearson 106
CHEM 0141 A,Instrumental Analysis,LAB,TBD,9/2/14,12/8/14,W,6:00 PM,9:00 PM,M009 106,Classroom,7,1.5,Chemistry,Pearson Laboratory,Pearson 106
CHEM 0150 01,Intermediate Organic Chm,LEC,Scheck Rebecca,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M009 106,Classroom,14,1,Chemistry,Pearson Laboratory,Pearson 106
CHEM 0151 01,Physical Organic Chem,LEC,Thomas Samuel W.,9/2/14,12/8/14,TF,12:00 PM,1:15 PM,M009 112,Classroom,8,1,Chemistry,Pearson Laboratory,Pearson 112
CHEM 0155 01,Organic Spectroscopy,LEC,Stolow Robert D,9/2/14,12/8/14,TWF,9:30 AM,10:20 AM,M009 112,Classroom,6,1,Chemistry,Pearson Laboratory,Pearson 112
CHEM 0164 01,Bioinorganic Chem,LEC,Rybak-Akimova Elena,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M040 006,Classroom,15,1,Chemistry,Jackson Gym,Jackson 006
CHEM 0172 01,Biochemistry II,LEC,Kritzer Joshua A.,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M009 104,Classroom,37,1,Chemistry,Pearson Laboratory,Pearson 104
CHEM 0172 RA,Biochemistry II,RCT,Kritzer Joshua A.,9/2/14,12/8/14,W,8:30 AM,9:20 AM,M196E 100,Classroom,12,1,Chemistry,Sophia Gordon Hall,Sophia Gordon
CHEM 0172 RB,Biochemistry II,RCT,Kritzer Joshua A.,9/2/14,12/8/14,R,5:00 PM,6:00 PM,M009 104,Classroom,0,1,Chemistry,Pearson Laboratory,Pearson 104
CHEM 0191 01,Seminar In Chemistry,LEC,Mace Charles R.,9/2/14,12/8/14,TR,4:30 PM,6:30 PM,M009 106,Classroom,32,0,Chemistry,Pearson Laboratory,Pearson 106
CHEM 0191 02,Seminar In Chemistry,LEC,Kumar Krishna,9/2/14,12/8/14,F,4:00 PM,5:30 PM,M009 106,Classroom,25,0,Chemistry,Pearson Laboratory,Pearson 106
CHEM 0193 01,Special Topics,LEC,Kenny Jonathan E,9/2/14,12/8/14,MW,8:30 AM,9:20 AM,M009 106,Classroom,2,1,Chemistry,Pearson Laboratory,Pearson 106
CHEM 0193 01,Special Topics,LEC,Kenny Jonathan E,9/2/14,12/8/14,R,1:30 PM,2:45 PM,M009 104,Classroom,2,1,Chemistry,Pearson Laboratory,Pearson 104
CHEM 0193 02,Special Topics,LEC,Shultz Mary Jane,9/2/14,12/8/14,T,6:30 PM,9:00 PM,M009 106,Classroom,4,1,Chemistry,Pearson Laboratory,Pearson 106
CHEM 0291 01,Prof Skills in Chem A,LEC,Sykes Emile Charles H.,9/2/14,12/8/14,F,3:00 PM,4:00 PM,M009 106,Classroom,20,0,Chemistry,Pearson Laboratory,Pearson 106
CHNS 0001 A,Elementary Chinese,LEC,Li Mushi,9/2/14,12/8/14,F,12:00 PM,12:50 PM,M086 002,Classroom,15,1,Chinese,Olin Center,Olin 002
CHNS 0001 A,Elementary Chinese,LEC,Li Mushi,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M086 002,Classroom,15,1,Chinese,Olin Center,Olin 002
CHNS 0001 B,Elementary Chinese,LEC,Wan Min,9/2/14,12/8/14,F,2:30 PM,3:20 PM,M086 107,Classroom,8,1,Chinese,Olin Center,Olin 107
CHNS 0001 B,Elementary Chinese,LEC,Wan Min,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M086 107,Classroom,8,1,Chinese,Olin Center,Olin 107
CHNS 0001 C,Elementary Chinese,LEC,Wan Min,9/2/14,12/8/14,F,9:30 AM,10:20 AM,M086 107,Classroom,7,1,Chinese,Olin Center,Olin 107
CHNS 0001 C,Elementary Chinese,LEC,Wan Min,9/2/14,12/8/14,TW,9:05 AM,10:20 AM,M086 107,Classroom,7,1,Chinese,Olin Center,Olin 107
CHNS 0001 D,Elementary Chinese,LEC,Li Mushi,9/2/14,12/8/14,M,9:30 AM,10:20 AM,M086 011,Classroom,9,1,Chinese,Olin Center,Olin 011
CHNS 0001 D,Elementary Chinese,LEC,Li Mushi,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M086 011,Classroom,9,1,Chinese,Olin Center,Olin 011
CHNS 0001 E,Elementary Chinese,LEC,Li Mushi,9/2/14,12/8/14,F,10:30 AM,11:20 AM,M086 318,Classroom,6,1,Chinese,Olin Center,Olin 318
CHNS 0001 E,Elementary Chinese,LEC,Li Mushi,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M086 318,Classroom,6,1,Chinese,Olin Center,Olin 318
CHNS 0003 A,Intermediate Chinese,LEC,Wang Shaomei,9/2/14,12/8/14,F,9:30 AM,10:20 AM,M086 002,Classroom,15,1,Chinese,Olin Center,Olin 002
CHNS 0003 A,Intermediate Chinese,LEC,Wang Shaomei,9/2/14,12/8/14,TW,9:05 AM,10:20 AM,M086 002,Classroom,15,1,Chinese,Olin Center,Olin 002
CHNS 0003 B,Intermediate Chinese,LEC,Wang Shaomei,9/2/14,12/8/14,F,12:00 PM,12:50 PM,M086 318,Classroom,11,1,Chinese,Olin Center,Olin 318
CHNS 0003 B,Intermediate Chinese,LEC,Wang Shaomei,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M086 318,Classroom,11,1,Chinese,Olin Center,Olin 318
CHNS 0003 C,Intermediate Chinese,LEC,Kuriyama Joanna,9/2/14,12/8/14,M,9:30 AM,10:20 AM,M086 103,Classroom,11,1,Chinese,Olin Center,Olin 103
CHNS 0003 C,Intermediate Chinese,LEC,Kuriyama Joanna,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M086 103,Classroom,11,1,Chinese,Olin Center,Olin 103
CHNS 0003 D,Intermediate Chinese,LEC,Li Mushi,9/2/14,12/8/14,F,1:30 PM,2:20 PM,M086 005,Classroom,16,1,Chinese,Olin Center,Olin 005
CHNS 0003 D,Intermediate Chinese,LEC,Li Mushi,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M086 005,Classroom,16,1,Chinese,Olin Center,Olin 005
CHNS 0021 A,Reading & Conversation,LEC,Li Jinyu,9/2/14,12/8/14,F,12:00 PM,12:50 PM,M006 100,Classroom,13,1,Chinese,Lane Hall,Lane 100
CHNS 0021 A,Reading & Conversation,LEC,Li Jinyu,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M006 100,Classroom,13,1,Chinese,Lane Hall,Lane 100
CHNS 0021 B,Reading & Conversation,LEC,Kuriyama Joanna,9/2/14,12/8/14,F,10:30 AM,11:20 AM,M086 108,Classroom,11,1,Chinese,Olin Center,Olin 108
CHNS 0021 B,Reading & Conversation,LEC,Kuriyama Joanna,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M086 108,Classroom,11,1,Chinese,Olin Center,Olin 108
CHNS 0021 C,Reading & Conversation,LEC,Kuriyama Joanna,9/2/14,12/8/14,F,1:30 PM,2:20 PM,M086 002,Classroom,12,1,Chinese,Olin Center,Olin 002
CHNS 0021 C,Reading & Conversation,LEC,Kuriyama Joanna,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M086 002,Classroom,12,1,Chinese,Olin Center,Olin 002
CHNS 0021 D,Reading & Conversation,LEC,Li Jinyu,9/2/14,12/8/14,F,2:30 PM,3:20 PM,M086 116,Classroom,11,1,Chinese,Olin Center,Olin 116
CHNS 0021 D,Reading & Conversation,LEC,Li Jinyu,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M086 116,Classroom,11,1,Chinese,Olin Center,Olin 116
CHNS 0061 01,Classical Chinese Lit,LEC,Ma Ning,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M086 012,Classroom,23,1,Chinese,Olin Center,Olin 012
CHNS 0070 01,Chinese Popular Culture,LEC,Zhong Xueping,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M086 116,Classroom,19,1,Chinese,Olin Center,Olin 116
CHNS 0072 01,Martial Arts Chns Lit & Film,LEC,Ma Ning,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M086 011,Classroom,17,1,Chinese,Olin Center,Olin 011
CHNS 0091 01,Special Topics,LEC,Roy Modhumita,9/2/14,12/8/14,MW,3:00 PM,5:15 PM,M086 012,Classroom,10,1,Chinese,Olin Center,Olin 012
CHNS 01/2 01,Intensive Elem Chinese,LEC,Wang Mingquan,9/2/14,12/8/14,MTWF,9:30 AM,10:20 AM,M086 116,Classroom,10,2,Chinese,Olin Center,Olin 116
CHNS 01/2 01,Intensive Elem Chinese,LEC,Wang Mingquan,9/2/14,12/8/14,TR,10:20 AM,11:45 AM,M086 116,Classroom,10,2,Chinese,Olin Center,Olin 116
CHNS 0121 A,Advanced Chinese I,LEC,Wan Min,9/2/14,12/8/14,F,10:30 AM,11:20 AM,M086 107,Classroom,7,1,Chinese,Olin Center,Olin 107
CHNS 0121 A,Advanced Chinese I,LEC,Wan Min,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M086 107,Classroom,7,1,Chinese,Olin Center,Olin 107
CHNS 0121 B,Advanced Chinese I,LEC,Wan Min,9/2/14,12/8/14,F,1:30 PM,2:20 PM,M086 318,Classroom,7,1,Chinese,Olin Center,Olin 318
CHNS 0121 B,Advanced Chinese I,LEC,Wan Min,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M086 318,Classroom,7,1,Chinese,Olin Center,Olin 318
CHNS 0121 C,Advanced Chinese I,LEC,Li Levente,9/2/14,12/8/14,F,1:30 PM,2:20 PM,M086 102,Classroom,7,1,Chinese,Olin Center,Olin 102
CHNS 0121 C,Advanced Chinese I,LEC,Li Levente,9/2/14,12/8/14,TR,4:30 PM,5:45 PM,M086 107,Classroom,7,1,Chinese,Olin Center,Olin 107
CHNS 0123 01,Advan Read Chns Culture,LEC,Wang Shaomei,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M086 005,Classroom,12,1,Chinese,Olin Center,Olin 005
CHNS 0127 01,Reading Short Stories,LEC,Li Jinyu,9/2/14,12/8/14,TR,4:30 PM,5:45 PM,M086 103,Classroom,10,1,Chinese,Olin Center,Olin 103
CIV 0017 01,Love&sexuality Wrld Lit,LEC,Carleton Gregory,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M086 012,Classroom,11,1,World Civilization,Olin Center,Olin 012
CLS 0026 01,Ancient Egypt,LEC,Harrington James Matthew,9/2/14,12/8/14,MW,4:30 PM,5:45 PM,M004 104,Classroom,23,1,Classics,Barnum Hall,Barnum 104
CLS 0032 01,Classics Of Rome,LEC,Mahoney Anne,9/2/14,12/8/14,MWF,10:30 AM,11:20 AM,M017 224,Classroom,25,1,Classics,Miner Hall,Miner 224
CLS 0037 01,Hist Of Ancient Greece,LEC,Hirsch Steven W,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M010 201,Classroom,41,1,Classics,Eaton Hall,Eaton 201 
CLS 0037 R01,Hist Of Ancient Greece,RCT,Hirsch Steven W,9/2/14,12/8/14,R,9:30 AM,10:20 AM,M010 202,Classroom,21,1,Classics,Eaton Hall,Eaton 202
CLS 0037 R02,Hist Of Ancient Greece,RCT,Hirsch Steven W,9/2/14,12/8/14,R,4:30 PM,5:25 PM,M010 206,Classroom,11,1,Classics,Eaton Hall,Eaton 206
CLS 0037 R03,Hist Of Ancient Greece,RCT,Hirsch Steven W,9/2/14,12/8/14,F,9:30 AM,10:20 AM,M010 202,Classroom,9,1,Classics,Eaton Hall,Eaton 202
CLS 0039 01,Byzantine World,LEC,Proctor David John,9/2/14,12/8/14,MW,4:30 PM,5:45 PM,M007 001,Classroom,20,1,Classics,Braker Hall,Braker 001
CLS 0039 RA,Byzantine World,RCT,Proctor David John,9/2/14,12/8/14,R,1:30 PM,2:20 PM,M010 333,Classroom,10,1,Classics,Eaton Hall,Eaton 333
CLS 0039 RB,Byzantine World,RCT,Proctor David John,9/2/14,12/8/14,R,4:30 PM,5:45 PM,M010 333,Classroom,5,1,Classics,Eaton Hall,Eaton 333
CLS 0039 RC,Byzantine World,RCT,Proctor David John,9/2/14,12/8/14,F,1:30 PM,2:20 PM,M010 333,Classroom,3,1,Classics,Eaton Hall,Eaton 333
CLS 0039 RD,Byzantine World,RCT,Proctor David John,9/2/14,12/8/14,F,2:30 PM,3:20 PM,M010 333,Classroom,2,1,Classics,Eaton Hall,Eaton 333
CLS 0045 01,Western Pol Thought I,LEC,Evrigenis Ioannis,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M009 104,Classroom,9,1,Classics,Pearson Laboratory,Pearson 104
CLS 0075 01,Classical Mythology,LEC,Beaulieu Marie-Claire,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M010 201,Classroom,71,1,Classics,Eaton Hall,Eaton 201 
CLS 0100 R,Classics Opt Recitation,RCT,Sullivan Vickie B,9/2/14,12/8/14,MWF,12:00 PM,1:20 PM,M010 201,Classroom,0,0,Classics,Eaton Hall,Eaton 201 
CLS 0100 R,Classics Opt Recitation,RCT,Sullivan Vickie B,9/2/14,12/8/14,MWF,12:00 PM,1:20 PM,M010 207,Classroom,0,0,Classics,Eaton Hall,Eaton 207
CLS 0146 01,Ancient Grk/rom Medicine,LEC,Phillips Joanne,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M010 333,Classroom,15,1,Classics,Eaton Hall,Eaton 333
CLS 0151 01,Ancient Philosophy,LEC,Olfert Christiana M.,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M017 225,Classroom,3,1,Classics,Miner Hall,Miner 225
CLS 0170 01,Indoeuropean Linguistics,LEC,Mahoney Anne,9/2/14,12/8/14,M,9:30 AM,10:20 AM,M010 209,Classroom,3,1,Classics,Eaton Hall,Eaton 209
CLS 0170 01,Indoeuropean Linguistics,LEC,Mahoney Anne,9/2/14,12/8/14,TR,10:30 AM,11:20 AM,M010 209,Classroom,3,1,Classics,Eaton Hall,Eaton 209
CLS 0183 01,Adv Sp Tp Classical Lit,LEC,Mahoney Anne,9/2/14,12/8/14,F,2:30 PM,3:20 PM,M010 209,Classroom,2,1,Classics,Eaton Hall,Eaton 209
CLS 0183 01,Adv Sp Tp Classical Lit,LEC,Mahoney Anne,9/2/14,12/8/14,TR,1:30 PM,2:20 PM,M010 209,Classroom,2,1,Classics,Eaton Hall,Eaton 209
CLS 0185 01,Seminar Ancient History,LEC,Hitchner R. Bruce,9/2/14,12/8/14,R,1:30 PM,4:00 PM,M010 204,Classroom,3,1,Classics,Eaton Hall,Eaton 204
CLS 0191 01,Adv Sp StdySem:classics,LEC,Sullivan Vickie B,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M024 314,Classroom,1,1,Classics,Tisch Library,Tisch 314
COMP 0007 01,Bioinfomatics,LEC,Slonim Donna,9/2/14,12/8/14,W,6:00 PM,9:00 PM,M026 111A,Classroom,7,1,Computer Science,Halligan Hall,Halligan 111A
COMP 0011 01,Intro Computer Science,LEC,Molay Bruce,9/2/14,12/8/14,TR,3:00 PM,4:15 PM,M022 253,Classroom,125,1,Computer Science,Robinson Hall,Robinson 253
COMP 0011 02,Intro Computer Science,LEC,Molay Bruce,9/2/14,12/8/14,TR,4:30 PM,5:45 PM,M022 253,Classroom,114,1,Computer Science,Robinson Hall,Robinson 253
COMP 0011 03,Intro Computer Science,LEC,Sheldon Mark A,9/2/14,12/8/14,TR,3:00 PM,4:15 PM,M022 253,Classroom,0,1,Computer Science,Robinson Hall,Robinson 253
COMP 0011 04,Intro Computer Science,LEC,Sheldon Mark A,9/2/14,12/8/14,TR,4:30 PM,5:45 PM,M022 253,Classroom,0,1,Computer Science,Robinson Hall,Robinson 253
COMP 0015 01,Data Structures,LEC,Gregg Christopher,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M004 104,Classroom,80,1,Computer Science,Barnum Hall,Barnum 104
COMP 0015 02,Data Structures,LEC,Gregg Christopher,9/2/14,12/8/14,MW,4:30 PM,5:45 PM,M022 253,Classroom,74,1,Computer Science,Robinson Hall,Robinson 253
COMP 0020 01,Web Programming,LEC,Chow Ming Y.,9/2/14,12/8/14,TR,4:30 PM,5:45 PM,M007 001,Classroom,77,1,Computer Science,Braker Hall,Braker 001
COMP 0040 01,Mach Struc & Programming,LEC,Mendelsohn Noah,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M022 253,Classroom,102,1,Computer Science,Robinson Hall,Robinson 253
COMP 0040 02,Mach Struc & Programming,LEC,Mendelsohn Noah,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M022 253,Classroom,0,1,Computer Science,Robinson Hall,Robinson 253
COMP 0050 01,Special Topics,LEC,Chow Ming Y.,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M026 108,Classroom,3,1,Computer Science,Halligan Hall,Halligan 108
COMP 0050 02,Special Topics,LEC,Sheldon Mark A,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M026 111A,Classroom,36,1,Computer Science,Halligan Hall,Halligan 111A
COMP 0061 01,Discrete Mathematics,LEC,Glaser Mary E,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M002 002,Classroom,17,1,Computer Science,Bromfield Pearson,Bromfield-Pearson 002
COMP 0061 02,Discrete Mathematics,LEC,Boghosian Bruce M,9/2/14,12/8/14,WF,10:30 AM,11:45 AM,M002 101,Classroom,18,1,Computer Science,Bromfield Pearson,Bromfield-Pearson 101
COMP 0061 03,Discrete Mathematics,LEC,Mustopa Yusuf,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M002 101,Classroom,8,1,Computer Science,Bromfield Pearson,Bromfield-Pearson 101
COMP 0061 04,Discrete Mathematics,LEC,Eisenberg Andrew J.,9/2/14,12/8/14,TR,3:00 PM,4:15 PM,M002 007,Classroom,6,1,Computer Science,Bromfield Pearson,Bromfield-Pearson 007
COMP 0097 01,Sr Capstone Project I,LEC,Gregg Christopher,9/2/14,12/8/14,TR,4:30 PM,5:45 PM,M026 108,Classroom,35,1,Computer Science,Halligan Hall,Halligan 108
COMP 0105 01,Programming Languages,LEC,Guyer Samuel,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M003 206,Classroom,84,1,Computer Science,Anderson Hall,Anderson 206
COMP 0111 01,Operating Systems,LEC,Couch Alva,9/2/14,12/8/14,MW,6:00 PM,7:15 PM,M003 206,Classroom,47,1,Computer Science,Anderson Hall,Anderson 206
COMP 0116 01,Computer System Security,LEC,Chow Ming Y.,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M009 106,Classroom,48,1,Computer Science,Pearson Laboratory,Pearson 106
COMP 0126 01,Numerical Analysis,LEC,Hu Xiaozhe,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M002 005,Classroom,0,1,Computer Science,Bromfield Pearson,Bromfield-Pearson 005
COMP 0135 01,Intro Machine Learning,LEC,Khardon Roni,9/2/14,12/8/14,MW,4:30 PM,5:45 PM,M026 111A,Classroom,28,1,Computer Science,Halligan Hall,Halligan 111A
COMP 0136 01,Stat Pattern Recognition,LEC,Khardon Roni,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M026 111A,Classroom,20,1,Computer Science,Halligan Hall,Halligan 111A
COMP 0150 01,Special Topics,LEC,Khardon Roni,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M026 111A,Classroom,14,1,Computer Science,Halligan Hall,Halligan 111A
COMP 0150 02,Special Topics,LEC,Blumer Anselm C,9/2/14,12/8/14,TR,6:00 PM,7:15 PM,M026 111A,Classroom,24,1,Computer Science,Halligan Hall,Halligan 111A
COMP 0150 03,Special Topics,LEC,Shapiro Ben,9/2/14,12/8/14,MW,4:30 PM,5:45 PM,M026 108,Classroom,15,1,Computer Science,Halligan Hall,Halligan 108
COMP 0150 04,Special Topics,LEC,Blumer Anselm C,9/2/14,12/8/14,MW,6:00 PM,7:15 PM,M026 108,Classroom,8,1,Computer Science,Halligan Hall,Halligan 108
COMP 0150 05,Special Topics,LEC,Ramsey Norman,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M002 006,Classroom,7,1,Computer Science,Bromfield Pearson,Bromfield-Pearson 006
COMP 0150 06,Special Topics,LEC,Fisher Kathleen,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M026 102,Conference Room,11,1,Computer Science,Halligan Hall,Halligan 102
COMP 0150 07,Special Topics,LEC,Chang Remco K,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M024 304,Classroom,61,1,Computer Science,Tisch Library,Tisch 304
COMP 0150 09,Special Topics,LEC,Ramsey Norman,9/2/14,12/8/14,F,3:00 PM,4:15 PM,M026 108,Classroom,9,1,Computer Science,Halligan Hall,Halligan 108
COMP 0150 10,Special Topics,LEC,Dogar Fahad,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M026 111A,Classroom,6,1,Computer Science,Halligan Hall,Halligan 111A
COMP 0150 11,Special Topics,LEC,Shapiro Ben,9/2/14,12/8/14,W,1:30 PM,3:50 PM,M027 007,Seminar Room,0,1,Computer Science,Paige Hall,Paige 007
COMP 0150 MMD,Special Topics,LEC,Chow Ming Y.,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M026 108,Classroom,3,1,Computer Science,Halligan Hall,Halligan 108
COMP 0160 01,Algorithms,LEC,Aloupis Gregory,9/2/14,12/8/14,MW,4:30 PM,5:45 PM,M009 104,Classroom,123,1,Computer Science,Pearson Laboratory,Pearson 104
COMP 0163 01,Computational Geometry,LEC,Aloupis Gregory,9/2/14,12/8/14,MW,6:00 PM,7:15 PM,M026 102,Conference Room,9,1,Computer Science,Halligan Hall,Halligan 102
COMP 0193 02,Directed Study,LEC,Souvaine Diane L,9/2/14,12/8/14,TR,3:30 PM,5:00 PM,M026 102,(none),2,0,Computer Science,Halligan Hall,Halligan 102
DNC 0012 01,Ballet I,LEC,Celichowska Renata,9/2/14,12/8/14,MW,9:00 AM,10:15 AM,M040 113,Class Laboratory,20,0.5,Dance,Jackson Gym,Jackson Hall Dance Lab
DNC 0012 02,Ballet I,LEC,TBD,9/2/14,12/8/14,MW,4:30 PM,5:45 PM,M040 113,Class Laboratory,10,0.5,Dance,Jackson Gym,Jackson Hall Dance Lab
DNC 0014 01,Ballet III,LEC,McCusker Daniel,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M040 113,Class Laboratory,22,0.5,Dance,Jackson Gym,Jackson Hall Dance Lab
DNC 0022 01,Modern II,LEC,Celichowska Renata,9/2/14,12/8/14,TR,3:00 PM,4:15 PM,M040 113,Class Laboratory,18,0.5,Dance,Jackson Gym,Jackson Hall Dance Lab
DNC 0024 01,Modern IV,LEC,TBD,9/2/14,12/8/14,TR,4:30 PM,5:45 PM,M040 113,Class Laboratory,15,0.5,Dance,Jackson Gym,Jackson Hall Dance Lab
DNC 0044 01,W African Dnc Identity,LEC,Coles Gregory A,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M040 113,Class Laboratory,23,0.5,Dance,Jackson Gym,Jackson Hall Dance Lab
DNC 0046 01,North Indian Dance: Kathak,LEC,Hayden-Ruckert Gretchen,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M040 113,Class Laboratory,16,0.5,Dance,Jackson Gym,Jackson Hall Dance Lab
DNC 0062 01,Dance Repertory & Performance,LEC,McCusker Daniel,9/2/14,12/8/14,F,9:30 AM,12:00 PM,M040 113,Class Laboratory,10,0.5,Dance,Jackson Gym,Jackson Hall Dance Lab
DNC 0071 01,Dnc Mov/Creative Process,LEC,McCusker Daniel,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M040 113,Class Laboratory,20,0.5,Dance,Jackson Gym,Jackson Hall Dance Lab
DNC 0091 01,Special Topics,LEC,TBD,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M040 113,Class Laboratory,0,0.5,Dance,Jackson Gym,Jackson Hall Dance Lab
DNC 0091 04,Special Topics,LEC,Celichowska Renata,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M040 106,Class Laboratory,2,0.5,Dance,Jackson Gym,Jackson Hall Dance Studio
DNC 0091 05,Special Topics,LEC,Coles Gregory A,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M040 113,Class Laboratory,12,0.5,Dance,Jackson Gym,Jackson Hall Dance Lab
DNC 0091 05,Special Topics,LEC,Coles Gregory A,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M040 113,Class Laboratory,12,0.5,Dance,Jackson Gym,Jackson Hall Dance Lab
DNC 0091 06,Special Topics,LEC,Coles Gregory A,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M040 113,Class Laboratory,6,0.5,Dance,Jackson Gym,Jackson Hall Dance Lab
DNC 0091 14,Special Topics,LEC,TBD,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M040 106,Class Laboratory,0,0.5,Dance,Jackson Gym,Jackson Hall Dance Studio
DNC 0091 15,Special Topics,LEC,Thomas Sheriden,9/2/14,12/8/14,MW,9:00 AM,10:15 AM,M040 106,Class Laboratory,5,0.5,Dance,Jackson Gym,Jackson Hall Dance Studio
DNC 0191 01,Advanced Dance Studies,LEC,Celichowska Renata,9/2/14,12/8/14,,,,M040 106,Class Laboratory,1,1,Dance,Jackson Gym,Jackson Hall Dance Studio
DR 0002 01,Ancient/medieval Theatre,LEC,Cima Gibson Alessandro,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M040 005,Classroom,12,1,Drama,Jackson Gym,Jackson 005
DR 0010 01,Acting I:intro To Acting,LEC,Rosvally Danielle,9/2/14,12/8/14,MW,9:30 AM,11:45 AM,M019 075CO,Classroom,18,1,Drama,Aidekman Arts Center,Aidekman Arts Center Room 075
DR 0010 02,Acting I:intro To Acting,LEC,Holden Beck C.,9/2/14,12/8/14,MW,1:30 PM,3:45 PM,M019 075CO,Classroom,18,1,Drama,Aidekman Arts Center,Aidekman Arts Center Room 075
DR 0010 03,Acting I:intro To Acting,LEC,Yakubovskaya Irina,9/2/14,12/8/14,TR,12:00 PM,2:15 PM,M019 075CO,Classroom,17,1,Drama,Aidekman Arts Center,Aidekman Arts Center Room 075
DR 0010 04,Acting I:intro To Acting,LEC,Swimm Katherine J.,9/2/14,12/8/14,TR,4:30 PM,6:45 PM,M019 075CO,Classroom,18,1,Drama,Aidekman Arts Center,Aidekman Arts Center Room 075
DR 0010 05,Acting I:intro To Acting,LEC,King Patrick J.,9/2/14,12/8/14,MW,4:30 PM,6:45 PM,M019 075CO,Classroom,20,1,Drama,Aidekman Arts Center,Aidekman Arts Center Room 075
DR 0012 01,Acting II,LEC,Thomas Sheriden,9/2/14,12/8/14,TR,9:30 AM,11:45 AM,M036 101,Class Laboratory,10,1,Drama,Dance Studio,Performance Hanger
DR 0017 01,Theater Technology,LEC,Mulligan John R.,9/2/14,12/8/14,M,1:20 PM,4:20 PM,M040 002B,Classroom,8,1,Drama,Jackson Gym,Jackson Hall Room 002B 
DR 0017 01,Theater Technology,LEC,Mulligan John R.,9/2/14,12/8/14,M,1:20 PM,4:20 PM,M102 102,Classroom,8,1,Drama,66 Colby Street,Aidekman Arts Center Scen Shp
DR 0018 01,Lighting I,LEC,Lilienthal Brian J.,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M040 002B,Classroom,14,1,Drama,Jackson Gym,Jackson Hall Room 002B 
DR 0027 01,Public Speaking,LEC,Cooney Deborah H.,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M019 013,Classroom,4,1,Drama,Aidekman Arts Center,Aidekman 013
DR 0027 02,Public Speaking,LEC,Cooney Deborah H.,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M019 013,Classroom,11,1,Drama,Aidekman Arts Center,Aidekman 013
DR 0027 03,Public Speaking,LEC,Cooney Deborah H.,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M019 013,Classroom,12,1,Drama,Aidekman Arts Center,Aidekman 013
DR 0027 04,Public Speaking,LEC,Cooney Deborah H.,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M019 013,Classroom,6,1,Drama,Aidekman Arts Center,Aidekman 013
DR 0028 01,Voice/speech-Confid Exp,LEC,Grossman Barbara W,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M036 101,Class Laboratory,17,1,Drama,Dance Studio,Performance Hanger
DR 0050 01,Intro To Film Studies,LEC,Marquette Scarlet,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M006 100,Classroom,19,1,Drama,Lane Hall,Lane 100
DR 0050 R,Intro To Film Studies,RCT,Marquette Scarlet,9/2/14,12/8/14,T,6:30 PM,9:30 PM,M024 316,Classroom,14,1,Drama,Tisch Library,Tisch 316
DR 0081 05,Practicum In Production,LEC,Dupras Faye,9/2/14,12/8/14,,,,M040 002B,Classroom,8,0.5,Drama,Jackson Gym,Jackson Hall Room 002B 
DR 0093 01,Special Topics,LEC,Thomas Sheriden,9/2/14,12/8/14,MW,9:00 AM,10:15 AM,M040 106,Class Laboratory,5,1,Drama,Jackson Gym,Jackson Hall Dance Studio
DR 0093 02,Special Topics,LEC,Nathans Heather Shawn,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M003 206,Classroom,10,1,Drama,Anderson Hall,Anderson 206
DR 0093 02R,Special Topics,RCT,Nathans Heather Shawn,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M003 206,Classroom,10,1,Drama,Anderson Hall,Anderson 206
DR 0093 05,Special Topics,LEC,Thomas Sheriden,9/2/14,12/8/14,TR,1:30 PM,3:15 PM,M036 101,Class Laboratory,7,1,Drama,Dance Studio,Performance Hanger
DR 0093 06,Special Topics,LEC,Jones Khary,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M019 012,Classroom,4,1,Drama,Aidekman Arts Center,Aidekman 012
DR 0093 07,Special Topics,LEC,Jones Khary,9/2/14,12/8/14,R,1:20 PM,4:20 PM,M019 013,Classroom,15,1,Drama,Aidekman Arts Center,Aidekman 013
DR 0093 08,Special Topics,LEC,TBD,9/2/14,12/8/14,MW,6:00 PM,9:00 PM,M019 009,Classroom,0,1,Drama,Aidekman Arts Center,Aidekman 009
DR 0119 01,History Style & Decor,LEC,Simpson Theodore B.,9/2/14,12/8/14,TR,4:30 PM,5:45 PM,M040 005,Classroom,8,1,Drama,Jackson Gym,Jackson 005
DR 0126 01,Costume Design,LEC,Girard Linda Ross,9/2/14,12/8/14,M,1:20 PM,4:20 PM,M040 002B,Classroom,9,1,Drama,Jackson Gym,Jackson Hall Room 002B 
DR 0147 01,Playwriting I,LEC,Valdes Greenwood David L.,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M010 123,Seminar Room,11,1,Drama,Eaton Hall,Eaton 123
DR 0155 01,Directing I,LEC,Cima Gibson Alessandro,9/2/14,12/8/14,MW,1:30 PM,3:15 PM,M019 030,Assembly,9,1,Drama,Aidekman Arts Center,Balch Arena Theater
DR 0193 01,Special Topics,LEC,Burton Jennifer,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M019 011,Classroom,6,1,Drama,Aidekman Arts Center,Aidekman 011
DR 0193 04,Special Topics,LEC,Burton Jennifer,9/2/14,12/8/14,T,1:30 PM,4:00 PM,M019 011,Classroom,8,1,Drama,Aidekman Arts Center,Aidekman 011
DR 0193 05,Special Topics,LEC,Cima Gibson Alessandro,9/2/14,12/8/14,T,4:30 PM,7:00 PM,M019 002,Classroom,2,1,Drama,Aidekman Arts Center,Aidekman Arts Center Room 002
DR 0220 01,Intro To Grad Studies,LEC,Nathans Heather Shawn,9/2/14,12/8/14,W,1:20 PM,4:20 PM,M019 002,Classroom,4,1,Drama,Aidekman Arts Center,Aidekman Arts Center Room 002
DR 0240 01,History Of Pop Entertain,LEC,Senelick Laurence,9/2/14,12/8/14,M,1:30 PM,4:30 PM,M019 002,Classroom,8,1,Drama,Aidekman Arts Center,Aidekman Arts Center Room 002
DR 0261 01,Classical Dramatic Theor,LEC,Baldyga Natalya,9/2/14,12/8/14,R,1:20 PM,4:20 PM,M019 002,Classroom,9,1,Drama,Aidekman Arts Center,Aidekman Arts Center Room 002
DR 0293 01,Special Topics,LEC,Cima Gibson Alessandro,9/2/14,12/8/14,T,4:30 PM,7:00 PM,M019 002,Classroom,6,1,Drama,Aidekman Arts Center,Aidekman Arts Center Room 002
EC 0003 01,Financial Accounting,LEC,Murphy Charles,9/2/14,12/8/14,TR,3:00 PM,4:15 PM,M007 001,Classroom,60,1,Economics,Braker Hall,Braker 001
EC 0005 01,Principles Economics,LEC,Norman George,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M019 102,Assembly,308,1,Economics,Aidekman Arts Center,Cohen Auditorium
EC 0005 RA,Principles Economics,RCT,Norman George,9/2/14,12/8/14,R,4:30 PM,5:25 PM,M007 225,Classroom,23,1,Economics,Braker Hall,Braker 225
EC 0005 RB,Principles Economics,RCT,Norman George,9/2/14,12/8/14,R,6:00 PM,6:50 PM,M007 225,Classroom,26,1,Economics,Braker Hall,Braker 225
EC 0005 RC,Principles Economics,RCT,Norman George,9/2/14,12/8/14,R,7:30 PM,8:15 PM,M007 225,Classroom,25,1,Economics,Braker Hall,Braker 225
EC 0005 RD,Principles Economics,RCT,Norman George,9/2/14,12/8/14,T,4:30 PM,5:20 PM,M007 225,Classroom,21,1,Economics,Braker Hall,Braker 225
EC 0005 RE,Principles Economics,RCT,Norman George,9/2/14,12/8/14,T,6:00 PM,6:50 PM,M007 225,Classroom,23,1,Economics,Braker Hall,Braker 225
EC 0005 RF,Principles Economics,RCT,Norman George,9/2/14,12/8/14,T,7:30 PM,8:15 PM,M007 225,Classroom,12,1,Economics,Braker Hall,Braker 225
EC 0005 RG,Principles Economics,RCT,Norman George,9/2/14,12/8/14,F,10:30 AM,11:20 AM,M007 223,Classroom,25,1,Economics,Braker Hall,Braker 223
EC 0005 RH,Principles Economics,RCT,Norman George,9/2/14,12/8/14,R,6:00 PM,6:50 PM,M007 223,Classroom,18,1,Economics,Braker Hall,Braker 223
EC 0005 RI,Principles Economics,RCT,Norman George,9/2/14,12/8/14,F,12:00 PM,12:50 PM,M007 223,Classroom,22,1,Economics,Braker Hall,Braker 223
EC 0005 RK,Principles Economics,RCT,Norman George,9/2/14,12/8/14,M,6:00 PM,6:50 PM,M007 223,Classroom,22,1,Economics,Braker Hall,Braker 223
EC 0005 RL,Principles Economics,RCT,Norman George,9/2/14,12/8/14,M,7:30 PM,8:15 PM,M007 223,Classroom,12,1,Economics,Braker Hall,Braker 223
EC 0005 RM,Principles Economics,RCT,Norman George,9/2/14,12/8/14,W,9:30 AM,10:20 AM,M007 223,Classroom,24,1,Economics,Braker Hall,Braker 223
EC 0005 RN,Principles Economics,RCT,Norman George,9/2/14,12/8/14,W,6:00 PM,6:50 PM,M007 225,Classroom,16,1,Economics,Braker Hall,Braker 225
EC 0005 RO,Principles Economics,RCT,Norman George,9/2/14,12/8/14,W,7:30 PM,8:15 PM,M007 225,Classroom,10,1,Economics,Braker Hall,Braker 225
EC 0005 RQ,Principles Economics,RCT,Norman George,9/2/14,12/8/14,W,6:00 PM,6:50 PM,M007 113,Classroom,7,1,Economics,Braker Hall,Braker 113
EC 0005 RR,Principles Economics,RCT,Norman George,9/2/14,12/8/14,W,7:30 PM,8:15 PM,M007 113,Classroom,6,1,Economics,Braker Hall,Braker 113
EC 0006 01,Business Law,LEC,Kronberg Peter W. S.,9/2/14,12/8/14,MW,4:30 PM,5:45 PM,M007 226,Classroom,28,1,Economics,Braker Hall,Braker 226
EC 0011 01,Intermed Microecon Thry,LEC,Gee Laura,9/2/14,12/8/14,MW,6:00 PM,7:15 PM,M007 222,Classroom,35,1,Economics,Braker Hall,Braker 222
EC 0011 02,Intermed Microecon Thry,LEC,Gee Laura,9/2/14,12/8/14,MW,4:30 PM,5:45 PM,M007 222,Classroom,37,1,Economics,Braker Hall,Braker 222
EC 0011 03,Intermed Microecon Thry,LEC,Menegotto Deborah,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M007 118,Classroom,33,1,Economics,Braker Hall,Braker 118
EC 0011 04,Intermed Microecon Thry,LEC,Luallen Jeremy Clayton,9/2/14,12/8/14,TR,4:30 PM,5:45 PM,M007 113,Classroom,19,1,Economics,Braker Hall,Braker 113
EC 0011 05,Intermed Microecon Thry,LEC,Luallen Jeremy Clayton,9/2/14,12/8/14,TR,3:00 PM,4:15 PM,M007 113,Classroom,23,1,Economics,Braker Hall,Braker 113
EC 0012 01,Intermed Macroecon Thry,LEC,Switala Andre,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M007 226,Classroom,11,1,Economics,Braker Hall,Braker 226
EC 0012 02,Intermed Macroecon Thry,LEC,Switala Andre,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M007 222,Classroom,27,1,Economics,Braker Hall,Braker 222
EC 0012 03,Intermed Macroecon Thry,LEC,Fusillo Michael,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M007 222,Classroom,35,1,Economics,Braker Hall,Braker 222
EC 0012 04,Intermed Macroecon Thry,LEC,Fusillo Michael,9/2/14,12/8/14,TR,4:30 PM,5:45 PM,M007 118,Classroom,18,1,Economics,Braker Hall,Braker 118
EC 0013 01,Statistics,LEC,Downes Thomas,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M004 008,Classroom,146,1,Economics,Barnum Hall,Barnum 008
EC 0013 RA,Statistics,RCT,Downes Thomas,9/2/14,12/8/14,R,4:30 PM,5:25 PM,M007 002,Computer Lab,24,1,Economics,Braker Hall,Braker 002 
EC 0013 RA,Statistics,RCT,Downes Thomas,9/2/14,12/8/14,R,4:30 PM,5:25 PM,M007 222,Classroom,24,1,Economics,Braker Hall,Braker 222
EC 0013 RB,Statistics,RCT,Downes Thomas,9/2/14,12/8/14,R,6:00 PM,6:50 PM,M007 118,Classroom,25,1,Economics,Braker Hall,Braker 118
EC 0013 RB,Statistics,RCT,Downes Thomas,9/2/14,12/8/14,R,6:00 PM,6:50 PM,M010 208,Computer Lab,25,1,Economics,Eaton Hall,Eaton 208 
EC 0013 RC,Statistics,RCT,Downes Thomas,9/2/14,12/8/14,R,7:30 PM,8:15 PM,M007 118,Classroom,25,1,Economics,Braker Hall,Braker 118
EC 0013 RC,Statistics,RCT,Downes Thomas,9/2/14,12/8/14,R,7:30 PM,8:15 PM,M010 208,Computer Lab,25,1,Economics,Eaton Hall,Eaton 208 
EC 0013 RD,Statistics,RCT,Downes Thomas,9/2/14,12/8/14,F,8:30 AM,9:20 AM,M007 002,Computer Lab,17,1,Economics,Braker Hall,Braker 002 
EC 0013 RD,Statistics,RCT,Downes Thomas,9/2/14,12/8/14,F,8:30 AM,9:20 AM,M007 118,Classroom,17,1,Economics,Braker Hall,Braker 118
EC 0013 RE,Statistics,RCT,Downes Thomas,9/2/14,12/8/14,F,10:30 AM,11:20 AM,M007 002,Computer Lab,24,1,Economics,Braker Hall,Braker 002 
EC 0013 RE,Statistics,RCT,Downes Thomas,9/2/14,12/8/14,F,10:30 AM,11:20 AM,M007 118,Classroom,24,1,Economics,Braker Hall,Braker 118
EC 0013 RF,Statistics,RCT,Downes Thomas,9/2/14,12/8/14,F,1:30 PM,2:20 PM,M007 002,Computer Lab,25,1,Economics,Braker Hall,Braker 002 
EC 0013 RF,Statistics,RCT,Downes Thomas,9/2/14,12/8/14,F,1:30 PM,2:20 PM,M007 118,Classroom,25,1,Economics,Braker Hall,Braker 118
EC 0015 01,Basic Econometrics,LEC,Ngatia Muthoni,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M007 002,Computer Lab,21,1,Economics,Braker Hall,Braker 002 
EC 0015 01,Basic Econometrics,LEC,Ngatia Muthoni,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M007 223,Classroom,21,1,Economics,Braker Hall,Braker 223
EC 0015 02,Basic Econometrics,LEC,Ngatia Muthoni,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M007 002,Computer Lab,20,1,Economics,Braker Hall,Braker 002 
EC 0015 02,Basic Econometrics,LEC,Ngatia Muthoni,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M007 118,Classroom,20,1,Economics,Braker Hall,Braker 118
EC 0015 03,Basic Econometrics,LEC,Garman David,9/2/14,12/8/14,MW,8:30 AM,9:20 AM,M007 002,Computer Lab,14,1,Economics,Braker Hall,Braker 002 
EC 0015 03,Basic Econometrics,LEC,Garman David,9/2/14,12/8/14,MW,8:30 AM,9:20 AM,M007 222,Classroom,14,1,Economics,Braker Hall,Braker 222
EC 0015 03,Basic Econometrics,LEC,Garman David,9/2/14,12/8/14,R,9:30 AM,10:20 AM,M007 002,Computer Lab,14,1,Economics,Braker Hall,Braker 002 
EC 0015 03,Basic Econometrics,LEC,Garman David,9/2/14,12/8/14,R,9:30 AM,10:20 AM,M007 222,Classroom,14,1,Economics,Braker Hall,Braker 222
EC 0015 04,Basic Econometrics,LEC,McInerney Melissa,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M007 002,Computer Lab,20,1,Economics,Braker Hall,Braker 002 
EC 0015 04,Basic Econometrics,LEC,McInerney Melissa,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M007 225,Classroom,20,1,Economics,Braker Hall,Braker 225
EC 0015 05,Basic Econometrics,LEC,McInerney Melissa,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M007 225,Classroom,11,1,Economics,Braker Hall,Braker 225
EC 0015 05,Basic Econometrics,LEC,McInerney Melissa,9/2/14,12/8/14,W,1:30 PM,2:45 PM,M010 208,Computer Lab,11,1,Economics,Eaton Hall,Eaton 208 
EC 0015 RA,Basic Econometrics,RCT,Garman David,9/2/14,12/8/14,T,7:00 PM,9:00 PM,M010 208,Computer Lab,16,1,Economics,Eaton Hall,Eaton 208 
EC 0016 01,Foundations Quant Ec,LEC,Gnedenko Ekaterina,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M007 113,Classroom,27,1,Economics,Braker Hall,Braker 113
EC 0018 01,Quant Inter Macroec Thry,LEC,Richards Daniel,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M007 113,Classroom,24,1,Economics,Braker Hall,Braker 113
EC 0019 01,Review Quant Macro Thry,LEC,Richards Daniel,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M007 113,Classroom,0,0.5,Economics,Braker Hall,Braker 113
EC 0024 01,Game Theory,LEC,Turner Sergio,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M007 222,Classroom,32,1,Economics,Braker Hall,Braker 222
EC 0030 01,Environmental Economics,LEC,Jack Brooke Kelsey,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M017 225,Classroom,34,1,Economics,Miner Hall,Miner 225
EC 0030 02,Environmental Economics,LEC,Jack Brooke Kelsey,9/2/14,12/8/14,TR,3:00 PM,4:15 PM,M007 222,Classroom,27,1,Economics,Braker Hall,Braker 222
EC 0035 01,Economic Development,LEC,Dapice David O,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M007 118,Classroom,13,1,Economics,Braker Hall,Braker 118
EC 0035 02,Economic Development,LEC,Emerick Kyle J.,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M007 222,Classroom,18,1,Economics,Braker Hall,Braker 222
EC 0048 01,Health Economics,LEC,Bentkover Judith,9/2/14,12/8/14,T,8:30 AM,11:30 AM,M007 225,Classroom,24,1,Economics,Braker Hall,Braker 225
EC 0050 01,Introduction to Finance,LEC,Manos Christopher,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M007 223,Classroom,30,1,Economics,Braker Hall,Braker 223
EC 0050 02,Introduction to Finance,LEC,Manos Christopher,9/2/14,12/8/14,TR,4:30 PM,5:45 PM,M007 223,Classroom,27,1,Economics,Braker Hall,Braker 223
EC 0060 01,International Econ,LEC,Spolaore Enrico,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M007 001,Classroom,135,1,Economics,Braker Hall,Braker 001
EC 0060 A,International Econ,RCT,Spolaore Enrico,9/2/14,12/8/14,F,10:30 AM,11:20 AM,M007 222,Classroom,23,1,Economics,Braker Hall,Braker 222
EC 0060 B,International Econ,RCT,Spolaore Enrico,9/2/14,12/8/14,F,12:00 PM,12:50 PM,M007 113,Classroom,20,1,Economics,Braker Hall,Braker 113
EC 0060 C,International Econ,RCT,Spolaore Enrico,9/2/14,12/8/14,F,1:30 PM,2:20 PM,M007 113,Classroom,20,1,Economics,Braker Hall,Braker 113
EC 0060 D,International Econ,RCT,Spolaore Enrico,9/2/14,12/8/14,W,9:30 AM,10:20 AM,M007 113,Classroom,20,1,Economics,Braker Hall,Braker 113
EC 0060 E,International Econ,RCT,Spolaore Enrico,9/2/14,12/8/14,W,6:00 PM,6:50 PM,M007 226,Classroom,25,1,Economics,Braker Hall,Braker 226
EC 0060 F,International Econ,RCT,Spolaore Enrico,9/2/14,12/8/14,F,1:30 PM,2:20 PM,M007 226,Classroom,19,1,Economics,Braker Hall,Braker 226
EC 0091 01,Intro Selected Topics,LEC,Hardman Anna,9/2/14,12/8/14,MW,4:30 PM,5:45 PM,M007 113,Classroom,10,1,Economics,Braker Hall,Braker 113
EC 0100 01,Found Ideas/econ Theory,LEC,Rothenberg Winifred B,9/2/14,12/8/14,TR,3:00 PM,4:15 PM,M007 118,Classroom,14,1,Economics,Braker Hall,Braker 118
EC 0107 01,Econometric Analysis,LEC,Garman David,9/2/14,12/8/14,TWF,9:30 AM,10:20 AM,M007 222,Classroom,31,1,Economics,Braker Hall,Braker 222
EC 0107 RA,Econometric Analysis,RCT,Garman David,9/2/14,12/8/14,W,7:00 PM,9:00 PM,M010 208,Computer Lab,20,1,Economics,Eaton Hall,Eaton 208 
EC 0109 01,Rev Econometric Analysis,LEC,Garman David,9/2/14,12/8/14,TWF,9:30 AM,10:20 AM,M007 222,Classroom,0,0.5,Economics,Braker Hall,Braker 222
EC 0127 01,Urban Economics,LEC,Hardman Anna,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M007 222,Classroom,18,1,Economics,Braker Hall,Braker 222
EC 0136 01,Topics In Economic Devel,LEC,McMillan Margaret,9/2/14,12/8/14,F,10:00 AM,12:30 PM,M007 226,Classroom,15,1,Economics,Braker Hall,Braker 226
EC 0148 01,Economics of Sports,LEC,Downes Thomas,9/2/14,12/8/14,MW,8:30 AM,9:20 AM,M007 223,Classroom,20,1,Economics,Braker Hall,Braker 223
EC 0148 01,Economics of Sports,LEC,Downes Thomas,9/2/14,12/8/14,R,9:30 AM,10:20 AM,M007 223,Classroom,20,1,Economics,Braker Hall,Braker 223
EC 0150 01,Financial Economics,LEC,Bethune Brian,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M007 118,Classroom,28,1,Economics,Braker Hall,Braker 118
EC 0150 02,Financial Economics,LEC,Richards Daniel,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M007 222,Classroom,32,1,Economics,Braker Hall,Braker 222
EC 0151 01,Monetary Economics,LEC,McHugh Christopher,9/2/14,12/8/14,MW,6:00 PM,7:15 PM,M007 118,Classroom,19,1,Economics,Braker Hall,Braker 118
EC 0154 01,Methods In Econ&finance,LEC,Bianconi Marcelo,9/2/14,12/8/14,MW,4:30 PM,5:45 PM,M007 223,Classroom,8,1,Economics,Braker Hall,Braker 223
EC 0161 01,International Trade,LEC,Brown Drusilla,9/2/14,12/8/14,TR,3:00 PM,4:15 PM,M007 226,Classroom,28,1,Economics,Braker Hall,Braker 226
EC 0162 01,International Finance,LEC,Kimelman Nancy,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M007 113,Classroom,33,1,Economics,Braker Hall,Braker 113
EC 0169 01,Quantitat Int'l Finance,LEC,Turner Sergio,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M007 118,Classroom,4,1,Economics,Braker Hall,Braker 118
EC 0170 01,Industrial Organization,LEC,Menegotto Deborah,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M007 118,Classroom,40,1,Economics,Braker Hall,Braker 118
EC 0177 01,Economics Organization,LEC,Pepall Lynne M,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M007 113,Classroom,14,1,Economics,Braker Hall,Braker 113
EC 0191 01,Intermed Selected Topics,LEC,Turner Sergio,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M007 226,Classroom,10,1,Economics,Braker Hall,Braker 226
EC 0191 02,Intermed Selected Topics,LEC,Pepall Lynne M,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M007 223,Classroom,20,1,Economics,Braker Hall,Braker 223
EC 0192 01,Advanced Seminar Econ,LEC,Chakravorty Ujjayant,9/2/14,12/8/14,W,6:00 PM,9:00 PM,M007 223,Classroom,19,1,Economics,Braker Hall,Braker 223
EC 0197 01,Sr Thesis Research Sem,LEC,Hardman Anna,9/2/14,12/8/14,T,3:00 PM,3:50 PM,M007 225,Classroom,10,0.5,Economics,Braker Hall,Braker 225
EC 0201 01,Advanced Statistics,LEC,Zabel Jeffrey E,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M007 226,Classroom,20,1,Economics,Braker Hall,Braker 226
EC 0203 01,Microeconomic Theory I,LEC,Metcalf Gilbert,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M007 223,Classroom,24,1,Economics,Braker Hall,Braker 223
EC 0205 01,Macroeconomic Theory I,LEC,Ioannides Yannis,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M007 225,Classroom,25,1,Economics,Braker Hall,Braker 225
EC 0207 01,Applied Econometrics,LEC,Zabel Jeffrey E,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M017 225,Classroom,10,1,Economics,Miner Hall,Miner 225
EC 0211 01,SEMINAR IN ECONOMIC THEORY,LEC,Metcalf Gilbert,9/2/14,12/8/14,M,4:30 PM,5:20 PM,M007 118,Classroom,8,0.5,Economics,Braker Hall,Braker 118
ED 0011 01,Observing Theory Action,LEC,Cohen Steven D,9/2/14,12/8/14,R,8:00 AM,11:20 AM,M007 226,Classroom,17,1,Education,Braker Hall,Braker 226
ED 0011 01,Observing Theory Action,LEC,Cohen Steven D,9/2/14,12/8/14,T,10:30 AM,11:45 AM,M007 226,Classroom,17,1,Education,Braker Hall,Braker 226
ED 0091 01,SPECIAL TOPICS,LEC,Redmond Ryan D,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M027 201,Seminar Room,1,1,Education,Paige Hall,Paige Hall Conference Room 
ED 0101 01,Intro To Teaching,LEC,Beardsley Linda V,9/2/14,12/8/14,TR,5:00 PM,6:20 PM,M019 012,Classroom,24,1,Education,Aidekman Arts Center,Aidekman 012
ED 0103 01,Intro Teaching/Elementary Schl,LEC,Beardsley Linda V,9/2/14,12/8/14,R,5:00 PM,6:30 PM,M017 110,Seminar Room,6,1,Education,Miner Hall,Miner 110
ED 0103 01,Intro Teaching/Elementary Schl,LEC,Beardsley Linda V,9/2/14,12/8/14,T,5:00 PM,8:00 PM,M007 226,Classroom,6,1,Education,Braker Hall,Braker 226
ED 0110 01,Hist & Soc St Curricula,LEC,Cohen Steven D,9/2/14,12/8/14,W,4:30 PM,8:15 PM,M024 314,Classroom,10,1,Education,Tisch Library,Tisch 314
ED 0111 01,Dev Knowledge&reason Sci,LEC,Hammer David,9/2/14,12/8/14,W,4:30 PM,7:15 PM,M010 124,Seminar Room,9,1,Education,Eaton Hall,Eaton 124
ED 0112 01,Math Learning Environmen,LEC,Wilkerson-Jerde Michelle,9/2/14,12/8/14,W,4:30 PM,7:15 PM,M038 015,Seminar Room,8,1,Education,East Hall,East 015
ED 0113 01,Lang Arts Curr Gr 5-12,LEC,Beardsley Linda V,9/2/14,12/8/14,W,4:30 PM,7:15 PM,M019 013,Classroom,3,1,Education,Aidekman Arts Center,Aidekman 013
ED 0114 01,Ling Appr/2nd Lang Acq,LEC,Stoessel Saskia,9/2/14,12/8/14,W,4:30 PM,7:15 PM,M086 116,Classroom,11,1,Education,Olin Center,Olin 116
ED 0116 01,Interdisciplinary Elem C,LEC,Gravel Brian Edward,9/2/14,12/8/14,R,4:30 PM,7:15 PM,M038 015,Seminar Room,6,1,Education,East Hall,East 015
ED 0119 01,Engineering Education,LEC,Hammer David,9/2/14,12/8/14,W,4:30 PM,7:15 PM,M010 124,Seminar Room,3,1,Education,Eaton Hall,Eaton 124
ED 0130 01,Human Dev & Learning,LEC,Gravel Brian Edward,9/2/14,12/8/14,M,4:30 PM,7:15 PM,M027 010,Classroom,14,1,Education,Paige Hall,Paige Terrace Room
ED 0142 01,Educ Except Child,LEC,Seaton Erin,9/2/14,12/8/14,M,4:30 PM,7:15 PM,M010 202,Classroom,16,1,Education,Eaton Hall,Eaton 202
ED 0161 01,Sociology Of School,LEC,Oeur Freeden,9/2/14,12/8/14,M,4:30 PM,7:15 PM,M019 012,Classroom,20,1,Education,Aidekman Arts Center,Aidekman 012
ED 0162 01,ClsRaceGndr Hist Us Ed,LEC,Perella John,9/2/14,12/8/14,T,6:00 PM,9:00 PM,M010 201,Classroom,16,1,Education,Eaton Hall,Eaton 201 
ED 0164 01,Educ For Peace & Justice,LEC,Donahue-Keegan Deborah,9/2/14,12/8/14,W,6:00 PM,9:00 PM,M010 201,Classroom,10,1,Education,Eaton Hall,Eaton 201 
ED 0191 01,Special Topics,LEC,Oeur Freeden,9/2/14,12/8/14,R,1:20 PM,4:20 PM,M040 006,Classroom,8,1,Education,Jackson Gym,Jackson 006
ED 0191 02,Special Topics,LEC,Shapiro Ben,9/2/14,12/8/14,W,1:30 PM,3:50 PM,M027 007,Seminar Room,6,1,Education,Paige Hall,Paige 007
ED 0191 03,Special Topics,LEC,Shapiro Ben,9/2/14,12/8/14,MW,4:30 PM,5:45 PM,M026 108,Classroom,1,1,Education,Halligan Hall,Halligan 108
ED 0191 04,Special Topics,LEC,Wilkerson-Jerde Michelle,9/2/14,12/8/14,T,1:30 PM,4:00 PM,M027 201,Seminar Room,6,1,Education,Paige Hall,Paige Hall Conference Room 
ED 0221 01,1styr Sem Sch Psych Prac A,LEC,Luz-Alterman Steven,9/2/14,12/8/14,R,11:45 AM,1:10 PM,M027 201,Seminar Room,8,0,Education,Paige Hall,Paige Hall Conference Room 
ED 0221 02,1styr Sem Sch Psych Prac A,LEC,Seaton Erin,9/2/14,12/8/14,R,11:45 AM,1:10 PM,M027 201,Seminar Room,7,0,Education,Paige Hall,Paige Hall Conference Room 
ED 0222 01,Mste Pro-Seminar,LEC,Brizuela Barbara,9/2/14,12/8/14,R,4:00 PM,6:30 PM,M010 123,Seminar Room,11,0.5,Education,Eaton Hall,Eaton 123
ED 0230 01,FndsoflngCog&acad Intvn,LEC,Seaton Erin,9/2/14,12/8/14,R,1:20 PM,4:20 PM,M007 223,Classroom,17,1,Education,Braker Hall,Braker 223
ED 0231 01,Practic Coun&schl Psych,LEC,Rogers Laura,9/2/14,12/8/14,R,1:30 PM,3:30 PM,M027 201,Seminar Room,5,1,Education,Paige Hall,Paige Hall Conference Room 
ED 0231 02,Practic Coun&schl Psych,LEC,Trant Robert,9/2/14,12/8/14,W,4:00 PM,6:00 PM,M027 201,Seminar Room,4,1,Education,Paige Hall,Paige Hall Conference Room 
ED 0231 03,Practic Coun&schl Psych,LEC,Welch Michele,9/2/14,12/8/14,W,5:00 PM,7:00 PM,M027 007,Seminar Room,5,1,Education,Paige Hall,Paige 007
ED 0237 01,Common Factors In Cnslng,LEC,Luz-Alterman Steven,9/2/14,12/8/14,R,8:30 AM,11:30 AM,M038 113,Seminar Room,15,1,Education,East Hall,East 113
ED 0238 01,Adv Approaches To Cnslng,LEC,Luz-Alterman Steven,9/2/14,12/8/14,T,8:30 AM,11:30 AM,M022 153,Classroom,15,1,Education,Robinson Hall,Robinson 153
ED 0241 01,Fnds Psychoed Assessment,LEC,Camposano Stacy,9/2/14,12/8/14,T,5:00 PM,8:00 PM,M002 007,Classroom,15,1,Education,Bromfield Pearson,Bromfield-Pearson 007
ED 0246 01,SocEmoBeh Assessment,LEC,Rogers Laura,9/2/14,12/8/14,T,1:20 PM,4:20 PM,M022 152,Classroom,14,1,Education,Robinson Hall,Robinson 152
ED 0254 01,Dev Psychpathology In Ed,LEC,Trant Robert,9/2/14,12/8/14,R,5:00 PM,8:00 PM,M007 226,Classroom,15,1,Education,Braker Hall,Braker 226
ED 0255 01,Prof Prac In Schl Psych,LEC,Pinto Silas O.,9/2/14,12/8/14,T,1:20 PM,4:20 PM,M010 204,Classroom,15,1,Education,Eaton Hall,Eaton 204
ED 0257 01,Internship School Psych,LEC,Hall Ann,9/2/14,12/8/14,T,4:30 PM,6:30 PM,M027 201,Seminar Room,5,1,Education,Paige Hall,Paige Hall Conference Room 
ED 0257 02,Internship School Psych,LEC,Vorkink Rachel S,9/2/14,12/8/14,T,4:30 PM,6:30 PM,M027 306,Classroom,5,1,Education,Paige Hall,Paige Hall Room 306
ED 0257 03,Internship School Psych,LEC,Carver Denise,9/2/14,12/8/14,R,4:00 PM,6:00 PM,M027 201,Seminar Room,6,1,Education,Paige Hall,Paige Hall Conference Room 
ED 0280 01,Museum Ed & Interp,LEC,Robinson Cynthia,9/2/14,12/8/14,W,6:00 PM,9:00 PM,M024 310,Classroom,14,1,Education,Tisch Library,Tisch 310
ED 0285 01,Museums:mission&function,LEC,Robinson Cynthia,9/2/14,12/8/14,R,6:00 PM,9:00 PM,M024 314,Classroom,7,1,Education,Tisch Library,Tisch 314
ED 0285 02,Museums:mission&function,LEC,Iacobucci Cara M,9/2/14,12/8/14,R,6:00 PM,9:00 PM,M024 316,Classroom,4,1,Education,Tisch Library,Tisch 316
ED 0286 01,Museums & New Media,LEC,Fleming Jennifer,9/2/14,12/8/14,T,6:30 PM,9:30 PM,M038 015,Seminar Room,13,1,Education,East Hall,East 015
EE 0014 01,Microproc Arch/app W/lab,LEC,Chang Chorng Hwa,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M026 108,Classroom,30,1,Electrical & Computer Engineering,Halligan Hall,Halligan 108
EE 0022 01,Electronics II W/lab,LEC,Sonkusale Sameer,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M026 111B,Classroom,22,1,Electrical & Computer Engineering,Halligan Hall,Halligan 111B
EE 0023 01,Linear Systems,LEC,Aeron Shuchin,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M026 111B,Classroom,30,1,Electrical & Computer Engineering,Halligan Hall,Halligan 111B
EE 0093 MMD,Special Topics,LEC,Lasser Ronald,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M026 108,Classroom,9,0.5,Electrical & Computer Engineering,Halligan Hall,Halligan 108
EE 0095 02,Special Projects,LEC,Lasser Ronald,9/2/14,12/8/14,F,12:00 PM,1:15 PM,M026 111B,Classroom,0,0.5,Electrical & Computer Engineering,Halligan Hall,Halligan 111B
EE 0097 01,Senior Design Project,LEC,Lasser Ronald,9/2/14,12/8/14,F,10:30 AM,11:45 AM,M026 111B,Classroom,25,0.5,Electrical & Computer Engineering,Halligan Hall,Halligan 111B
EE 0103 01,Intro To Vlsi Design,LEC,Koomson Valencia Margie Joyner,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M026 111B,Classroom,14,1,Electrical & Computer Engineering,Halligan Hall,Halligan 111B
EE 0104 01,Probabilistic Sys Analys,LEC,Miller Eric L,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M026 111B,Classroom,34,1,Electrical & Computer Engineering,Halligan Hall,Halligan 111B
EE 0105 01,Feedback-Control Systems,LEC,Khan Usman,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M026 108,Classroom,16,1,Electrical & Computer Engineering,Halligan Hall,Halligan 108
EE 0107 01,Communicatns Sys I W/lab,LEC,Vu Mai,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M026 108,Classroom,19,1,Electrical & Computer Engineering,Halligan Hall,Halligan 108
EE 0114 1,Physics of Solar Cells,LEC,Vandervelde Thomas E,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M026 108,Classroom,6,1,Electrical & Computer Engineering,Halligan Hall,Halligan 108
EE 0117 01,Introduction Microwaves,LEC,Afsar Mohammed Nurul,9/2/14,12/8/14,TR,6:00 PM,7:15 PM,M026 108,Classroom,7,1,Electrical & Computer Engineering,Halligan Hall,Halligan 108
EE 0121 01,Physiology -Engineers I,LEC,Black III Lauren D.,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M028 135,Classroom,2,1,Electrical & Computer Engineering,Science and Technology Center,Sci-Tech 135
EE 0125 01,Digital Signal Process,LEC,Tracey Brian H.,9/2/14,12/8/14,TR,4:30 PM,5:45 PM,M026 111B,Classroom,36,1,Electrical & Computer Engineering,Halligan Hall,Halligan 111B
EE 0126 01,Computer Enginrg W/lab,LEC,Panetta Karen A,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M026 111B,Classroom,20,1,Electrical & Computer Engineering,Halligan Hall,Halligan 111B
EE 0128 01,Operating Systems,LEC,Couch Alva,9/2/14,12/8/14,MW,6:00 PM,7:15 PM,M003 206,Classroom,14,1,Electrical & Computer Engineering,Anderson Hall,Anderson 206
EE 0191 01,Seminar Elec Enginrg,LEC,Vandervelde Thomas E,9/2/14,12/8/14,T,3:00 PM,4:15 PM,M026 102,Conference Room,40,0.5,Electrical & Computer Engineering,Halligan Hall,Halligan 102
EE 0193 01,Special Topics,LEC,Stankovic Aleksandar M.,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M026 111B,Classroom,3,0.5,Electrical & Computer Engineering,Halligan Hall,Halligan 111B
EE 0193 MMD,Special Topics,LEC,Chow Ming Y.,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M026 108,Classroom,3,0.5,Electrical & Computer Engineering,Halligan Hall,Halligan 108
EE 0193 WIN,Special Topics,LEC,Chang Chorng Hwa,9/2/14,12/8/14,MW,4:30 PM,5:45 PM,M026 111B,Classroom,7,0.5,Electrical & Computer Engineering,Halligan Hall,Halligan 111B
EE 0194 MSE,Special Topics,LEC,Afsar Mohammed Nurul,9/2/14,12/8/14,TR,7:30 PM,8:45 PM,M026 108,Classroom,9,1,Electrical & Computer Engineering,Halligan Hall,Halligan 108
EE 0250 01,Biomedical Engineering,LEC,Xu Qiaobing,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M028 134,Classroom,1,1,Electrical & Computer Engineering,Science and Technology Center,Sci-Tech 134
ELS 0101 01,Entrepreneurship&bus Pln,LEC,Milde Inge,9/2/14,12/8/14,W,1:20 PM,4:20 PM,R027 2417,Classroom,17,1,Entrepreneurial Leadership,200 Boston Avenue,200 Boston Avenue Room 2417
ELS 0101 02,Entrepreneurship&bus Pln,LEC,Braun Eric,9/2/14,12/8/14,R,1:20 PM,4:20 PM,M026 111A,Classroom,25,1,Entrepreneurial Leadership,Halligan Hall,Halligan 111A
ELS 0101 03,Entrepreneurship&bus Pln,LEC,Wiesman Joshua,9/2/14,12/8/14,W,1:20 PM,4:20 PM,M019 012,Classroom,23,1,Entrepreneurial Leadership,Aidekman Arts Center,Aidekman 012
ELS 0103 01,Entrepreneurial Finance,LEC,Apeseche Frank,9/2/14,12/8/14,T,1:20 PM,4:20 PM,R027 2417,Classroom,26,1,Entrepreneurial Leadership,200 Boston Avenue,200 Boston Avenue Room 2417
ELS 0103 02,Entrepreneurial Finance,LEC,Amaral Alicia,9/2/14,12/8/14,T,1:20 PM,4:20 PM,M026 111A,Classroom,29,1,Entrepreneurial Leadership,Halligan Hall,Halligan 111A
ELS 0105 01,Entrepreneurial Mktg,LEC,Derby John,9/2/14,12/8/14,W,1:20 PM,4:20 PM,M024 316,Classroom,34,1,Entrepreneurial Leadership,Tisch Library,Tisch 316
ELS 0105 02,Entrepreneurial Mktg,LEC,Finn Gavin,9/2/14,12/8/14,M,6:00 PM,9:00 PM,M003 313,Classroom,33,1,Entrepreneurial Leadership,Anderson Hall,Anderson 313
ELS 0107 01,Entrepreneurial Leadersh,LEC,Stepp Pamela,9/2/14,12/8/14,T,6:00 PM,9:00 PM,M022 152,Classroom,23,1,Entrepreneurial Leadership,Robinson Hall,Robinson 152
ELS 0107 02,Entrepreneurial Leadersh,LEC,Marton Peter D,9/2/14,12/8/14,T,6:00 PM,9:00 PM,M002 002,Classroom,19,1,Entrepreneurial Leadership,Bromfield Pearson,Bromfield-Pearson 002
EM 0051 CE,Engineering Management,LEC,Finn Gavin,9/2/14,12/8/14,T,6:00 PM,9:00 PM,M022 153,Classroom,28,1,Engineering Management,Robinson Hall,Robinson 153
EM 0052 ACE,Tech & Managerial Comm,LEC,Hirschfeld Amy K,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M006 100A,Classroom,12,1,Engineering Management,Lane Hall,Lane 100A
EM 0052 BCE,Tech & Managerial Comm,LEC,Hirschfeld Amy K,9/2/14,12/8/14,TR,3:00 PM,4:15 PM,M003 312,Classroom,6,1,Engineering Management,Anderson Hall,Anderson 312
EM 0054 CE,Engineering Leadership,LEC,Sawyer Annette,9/2/14,12/8/14,TR,4:30 PM,5:45 PM,M003 206,Classroom,22,1,Engineering Management,Anderson Hall,Anderson 206
EM 0231 01,Project Mgmt & Software Method,LEC,Pochampally Kishore,9/2/14,12/8/14,W,6:00 PM,9:00 PM,R027 2417,Classroom,14,0.5,Engineering Management,200 Boston Avenue,200 Boston Avenue Room 2417
EM 0262 01,Conflict Resolution,LEC,Bamford Mark,9/2/14,12/8/14,R,6:00 PM,9:00 PM,R027 2417,Classroom,9,0.5,Engineering Management,200 Boston Avenue,200 Boston Avenue Room 2417
ENG 0001 01,Expository Writing,LEC,Christine Anna R.,9/2/14,12/8/14,MW,8:30 AM,9:20 AM,M010 209,Classroom,10,1,English,Eaton Hall,Eaton 209
ENG 0001 01,Expository Writing,LEC,Christine Anna R.,9/2/14,12/8/14,R,9:30 AM,10:20 AM,M010 209,Classroom,10,1,English,Eaton Hall,Eaton 209
ENG 0001 02,Expository Writing,LEC,Russell Grace M.,9/2/14,12/8/14,MW,8:30 AM,9:20 AM,M086 001,Classroom,9,1,English,Olin Center,Olin 001
ENG 0001 02,Expository Writing,LEC,Russell Grace M.,9/2/14,12/8/14,R,9:30 AM,10:20 AM,M086 001,Classroom,9,1,English,Olin Center,Olin 001
ENG 0001 03,Expository Writing,LEC,Mueller Luke S.,9/2/14,12/8/14,MW,8:05 AM,9:20 AM,M038 016,Classroom,10,1,English,East Hall,East 016
ENG 0001 04,Expository Writing,LEC,Scully Matthew P.,9/2/14,12/8/14,MW,8:05 AM,9:20 AM,M010 207,Classroom,10,1,English,Eaton Hall,Eaton 207
ENG 0001 05,Expository Writing,LEC,Maurissette Fiona,9/2/14,12/8/14,MW,8:05 AM,9:20 AM,M017 110,Seminar Room,10,1,English,Miner Hall,Miner 110
ENG 0001 06,Expository Writing,LEC,Dell Aaron C.,9/2/14,12/8/14,MW,8:05 AM,9:20 AM,M004 113,Seminar Room,10,1,English,Barnum Hall,Barnum 113
ENG 0001 07,Expository Writing,LEC,Rizzi James A.,9/2/14,12/8/14,TRF,8:30 AM,9:20 AM,M004 113,Seminar Room,10,1,English,Barnum Hall,Barnum 113
ENG 0001 08,Expository Writing,LEC,Ruggeri Alexander F.,9/2/14,12/8/14,TRF,8:30 AM,9:20 AM,M027 007,Seminar Room,10,1,English,Paige Hall,Paige 007
ENG 0001 09,Expository Writing,LEC,Swafford Jan,9/2/14,12/8/14,TR,8:05 AM,9:20 AM,M086 001,Classroom,14,1,English,Olin Center,Olin 001
ENG 0001 10,Expository Writing,LEC,Payson Christine R.,9/2/14,12/8/14,TR,8:05 AM,9:20 AM,M010 209,Classroom,10,1,English,Eaton Hall,Eaton 209
ENG 0001 11,Expository Writing,LEC,Kamaiopili Kyle R.,9/2/14,12/8/14,TR,8:05 AM,9:20 AM,M017 112,Classroom,10,1,English,Miner Hall,Miner 112
ENG 0001 12,Expository Writing,LEC,Mulder James Yukiko,9/2/14,12/8/14,TR,8:05 AM,9:20 AM,M086 220,Classroom,10,1,English,Olin Center,Olin 220
ENG 0001 13,Expository Writing,LEC,Garrigan Sarah A.,9/2/14,12/8/14,TWF,9:30 AM,10:20 AM,M010 204,Classroom,10,1,English,Eaton Hall,Eaton 204
ENG 0001 14,Expository Writing,LEC,Gravitt Bryn J.,9/2/14,12/8/14,TWF,9:30 AM,10:20 AM,M010 207,Classroom,10,1,English,Eaton Hall,Eaton 207
ENG 0001 15,Expository Writing,LEC,Derby Shannon B.,9/2/14,12/8/14,TWF,9:30 AM,10:20 AM,M024 310,Classroom,10,1,English,Tisch Library,Tisch 310
ENG 0001 16,Expository Writing,LEC,Jung Seohyon,9/2/14,12/8/14,TWF,9:30 AM,10:20 AM,M017 110,Seminar Room,10,1,English,Miner Hall,Miner 110
ENG 0001 17,Expository Writing,LEC,Freitas Vivek A.,9/2/14,12/8/14,MW,8:05 AM,9:20 AM,M007 225,Classroom,15,1,English,Braker Hall,Braker 225
ENG 0001 18,Expository Writing,LEC,Smith Bradley C.,9/2/14,12/8/14,TWF,9:30 AM,10:20 AM,M027 007,Seminar Room,10,1,English,Paige Hall,Paige 007
ENG 0001 21,Expository Writing,LEC,Duffy-Comparone Emma,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M004 113,Seminar Room,15,1,English,Barnum Hall,Barnum 113
ENG 0001 22,Expository Writing,LEC,MacDonald Wanda,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M086 101,Classroom,14,1,English,Olin Center,Olin 101
ENG 0001 24,Expository Writing,LEC,Love Margaret G.,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M024 310,Classroom,9,1,English,Tisch Library,Tisch 310
ENG 0001 25,Expository Writing,LEC,Pfeffer Jessica R.,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M010 204,Classroom,12,1,English,Eaton Hall,Eaton 204
ENG 0001 27,Expository Writing,LEC,Berg Dianne E.,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M010 204,Classroom,10,1,English,Eaton Hall,Eaton 204
ENG 0001 28,Expository Writing,LEC,Duffy-Comparone Emma,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M010 123,Seminar Room,14,1,English,Eaton Hall,Eaton 123
ENG 0001 29,Expository Writing,LEC,Herbert Jean L S,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M017 112,Classroom,14,1,English,Miner Hall,Miner 112
ENG 0001 30,Expository Writing,LEC,Larkin Tanya,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M010 207,Classroom,14,1,English,Eaton Hall,Eaton 207
ENG 0001 32,Expository Writing,LEC,Beckman Carl Wc,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M010 206,Classroom,14,1,English,Eaton Hall,Eaton 206
ENG 0001 33,Expository Writing,LEC,Stiffler Randall,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M017 110,Seminar Room,14,1,English,Miner Hall,Miner 110
ENG 0001 34,Expository Writing,LEC,Larkin Tanya,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M010 207,Classroom,15,1,English,Eaton Hall,Eaton 207
ENG 0001 35,Expository Writing,LEC,MacDonald Wanda,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M086 101,Classroom,14,1,English,Olin Center,Olin 101
ENG 0001 36,Expository Writing,LEC,Beckman Carl Wc,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M007 113,Classroom,13,1,English,Braker Hall,Braker 113
ENG 0001 37,Expository Writing,LEC,Peterson Dale A,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M086 218,Classroom,15,1,English,Olin Center,Olin 218
ENG 0001 38,Expository Writing,LEC,Photopoulos Cornelia C.,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M010 209,Classroom,10,1,English,Eaton Hall,Eaton 209
ENG 0001 39,Expository Writing,LEC,Evans Eli,9/2/14,12/8/14,TR,3:00 PM,4:15 PM,M003 313,Classroom,14,1,English,Anderson Hall,Anderson 313
ENG 0001 40,Expository Writing,LEC,Wilkinson Carol,9/2/14,12/8/14,TR,3:00 PM,4:15 PM,M002 002,Classroom,14,1,English,Bromfield Pearson,Bromfield-Pearson 002
ENG 0001 41,Expository Writing,LEC,Talusan Grace,9/2/14,12/8/14,TR,3:00 PM,4:15 PM,M024 314,Classroom,15,1,English,Tisch Library,Tisch 314
ENG 0001 43,Expository Writing,LEC,Peterson Dale A,9/2/14,12/8/14,MW,4:30 PM,5:45 PM,M086 109,Classroom,14,1,English,Olin Center,Olin 109
ENG 0001 44,Expository Writing,LEC,Stiffler Randall,9/2/14,12/8/14,MW,4:30 PM,5:45 PM,M010 123,Seminar Room,14,1,English,Eaton Hall,Eaton 123
ENG 0001 45,Expository Writing,LEC,Stanitzke Ruth Mareike,9/2/14,12/8/14,MW,4:30 PM,5:45 PM,M010 209,Classroom,15,1,English,Eaton Hall,Eaton 209
ENG 0001 46,Expository Writing,LEC,Evans Eli,9/2/14,12/8/14,TR,4:30 PM,5:45 PM,M027 007,Seminar Room,14,1,English,Paige Hall,Paige 007
ENG 0001 47,Expository Writing,LEC,Wilkinson Carol,9/2/14,12/8/14,TR,4:30 PM,5:45 PM,M002 006,Classroom,14,1,English,Bromfield Pearson,Bromfield-Pearson 006
ENG 0001 48,Expository Writing,LEC,Whalen John W.,9/2/14,12/8/14,TR,4:30 PM,5:45 PM,M010 207,Classroom,10,1,English,Eaton Hall,Eaton 207
ENG 0001 49,Expository Writing,LEC,Hildebrand Molly J.,9/2/14,12/8/14,TR,4:30 PM,5:45 PM,M038 301,Seminar Room,14,1,English,East Hall,East Hall Room 301
ENG 0001 50,Expository Writing,LEC,Peterson Dale A,9/2/14,12/8/14,MW,6:00 PM,7:15 PM,M038 113,Seminar Room,11,1,English,East Hall,East 113
ENG 0001 51,Expository Writing,LEC,Stanitzke Ruth Mareike,9/2/14,12/8/14,MW,6:00 PM,7:15 PM,M010 209,Classroom,14,1,English,Eaton Hall,Eaton 209
ENG 0001 52,Expository Writing,LEC,Leonard James W.,9/2/14,12/8/14,TR,6:00 PM,7:15 PM,M038 113,Seminar Room,10,1,English,East Hall,East 113
ENG 0002 01,Freshman Writing Seminar,LEC,Valdes Greenwood David L.,9/2/14,12/8/14,MW,8:05 AM,9:20 AM,M024 314,Classroom,12,1,English,Tisch Library,Tisch 314
ENG 0002 02,Freshman Writing Seminar,LEC,Swafford Jan,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M024 310,Classroom,12,1,English,Tisch Library,Tisch 310
ENG 0002 02R,Freshman Writing Seminar,RCT,Swafford Jan,9/2/14,12/8/14,U,7:00 PM,10:00 PM,M024 314,Classroom,9,1,English,Tisch Library,Tisch 314
ENG 0002 03,Freshman Writing Seminar,LEC,Levine Stephanie,9/2/14,12/8/14,TR,4:30 PM,5:45 PM,M027 010,Classroom,13,1,English,Paige Hall,Paige Terrace Room
ENG 0002 04,Freshman Writing Seminar,LEC,Levine Stephanie,9/2/14,12/8/14,TR,3:00 PM,4:15 PM,M027 010,Classroom,13,1,English,Paige Hall,Paige Terrace Room
ENG 0002 05,Freshman Writing Seminar,LEC,Schneider Emma C.,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M017 221,Seminar Room,10,1,English,Miner Hall,Miner 221
ENG 0002 06,Freshman Writing Seminar,LEC,Swafford Jan,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M024 310,Classroom,11,1,English,Tisch Library,Tisch 310
ENG 0002 06R,Freshman Writing Seminar,RCT,Swafford Jan,9/2/14,12/8/14,U,7:00 PM,10:00 PM,M024 314,Classroom,6,1,English,Tisch Library,Tisch 314
ENG 0002 07,Freshman Writing Seminar,LEC,Leavell Elizabeth,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M007 113,Classroom,12,1,English,Braker Hall,Braker 113
ENG 0002 09,Freshman Writing Seminar,LEC,Van Deventer Allison Crumly,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M022 152,Classroom,13,1,English,Robinson Hall,Robinson 152
ENG 0002 11,Freshman Writing Seminar,LEC,Van Deventer Allison Crumly,9/2/14,12/8/14,MW,4:30 PM,5:45 PM,M010 204,Classroom,13,1,English,Eaton Hall,Eaton 204
ENG 0002 12,Freshman Writing Seminar,LEC,Leavell Elizabeth,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M196E 100,Classroom,13,1,English,Sophia Gordon Hall,Sophia Gordon
ENG 0002 13,Freshman Writing Seminar,LEC,Talusan Grace,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M010 206,Classroom,14,1,English,Eaton Hall,Eaton 206
ENG 0003 01,ReadingWritingResearch,LEC,Stevens Lynn,9/2/14,12/8/14,TR,3:00 PM,4:15 PM,M010 206,Classroom,11,1,English,Eaton Hall,Eaton 206
ENG 0003 02,ReadingWritingResearch,LEC,Stevens Lynn,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M010 206,Classroom,11,1,English,Eaton Hall,Eaton 206
ENG 0003 03,ReadingWritingResearch,LEC,Talusan Grace,9/2/14,12/8/14,TR,4:30 PM,5:45 PM,M038 113,Seminar Room,4,1,English,East Hall,East 113
ENG 0005 01,Creative Writing:fiction,LEC,Downing Michael,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M017 110,Seminar Room,12,1,English,Miner Hall,Miner 110
ENG 0005 02,Creative Writing:fiction,LEC,Downing Michael,9/2/14,12/8/14,MW,4:30 PM,5:45 PM,M038 301,Seminar Room,12,1,English,East Hall,East Hall Room 301
ENG 0005 03,Creative Writing:fiction,LEC,Hershman Marcie F,9/2/14,12/8/14,W,1:30 PM,4:00 PM,M012 163,Seminar Room,9,1,English,Eliot Pearson Center,Eliot-Pearson 163
ENG 0005 04,Creative Writing:fiction,LEC,Hershman Marcie F,9/2/14,12/8/14,R,1:30 PM,4:00 PM,M022 152,Classroom,10,1,English,Robinson Hall,Robinson 152
ENG 0005 05,Creative Writing:fiction,LEC,Hurka Joseph H,9/2/14,12/8/14,M,1:30 PM,4:00 PM,M024 310,Classroom,12,1,English,Tisch Library,Tisch 310
ENG 0005 06,Creative Writing:fiction,LEC,Hurka Joseph H,9/2/14,12/8/14,M,6:30 PM,9:00 PM,M038 015,Seminar Room,12,1,English,East Hall,East 015
ENG 0005 07,Creative Writing:fiction,LEC,Johnston Sibyl,9/2/14,12/8/14,T,1:20 PM,4:20 PM,M027 007,Seminar Room,11,1,English,Paige Hall,Paige 007
ENG 0005 08,Creative Writing:fiction,LEC,Johnston Sibyl,9/2/14,12/8/14,T,6:00 PM,9:00 PM,M086 001,Classroom,12,1,English,Olin Center,Olin 001
ENG 0005 09,Creative Writing:fiction,LEC,Levinson Nan,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M017 221,Seminar Room,12,1,English,Miner Hall,Miner 221
ENG 0005 10,Creative Writing:fiction,LEC,Weesner Jr Ted,9/2/14,12/8/14,T,9:00 AM,11:30 AM,M038 301,Seminar Room,11,1,English,East Hall,East Hall Room 301
ENG 0005 11,Creative Writing:fiction,LEC,Weesner Jr Ted,9/2/14,12/8/14,T,1:30 PM,4:00 PM,M019 013,Classroom,12,1,English,Aidekman Arts Center,Aidekman 013
ENG 0006 01,Creative Writing:poetry,LEC,Kaiser Gibson Rebecca,9/2/14,12/8/14,M,9:00 AM,11:30 AM,M038 301,Seminar Room,9,1,English,East Hall,East Hall Room 301
ENG 0006 02,Creative Writing:poetry,LEC,Kaiser Gibson Rebecca,9/2/14,12/8/14,M,6:30 PM,9:00 PM,M038 301,Seminar Room,11,1,English,East Hall,East Hall Room 301
ENG 0006 03,Creative Writing:poetry,LEC,Gosztyla Mark,9/2/14,12/8/14,T,6:00 PM,9:00 PM,M038 301,Seminar Room,10,1,English,East Hall,East Hall Room 301
ENG 0006 04,Creative Writing:poetry,LEC,Gosztyla Mark,9/2/14,12/8/14,W,1:20 PM,4:20 PM,M038 301,Seminar Room,11,1,English,East Hall,East Hall Room 301
ENG 0007 01,Creative Writing:journal,LEC,Miller Neil,9/2/14,12/8/14,MW,4:30 PM,5:45 PM,M017 221,Seminar Room,10,1,English,Miner Hall,Miner 221
ENG 0009 01,Writing Fiction:intermed,LEC,Strong Jonathan,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M010 123,Seminar Room,10,1,English,Eaton Hall,Eaton 123
ENG 0009 02,Writing Fiction:intermed,LEC,Strong Jonathan,9/2/14,12/8/14,MW,4:30 PM,5:45 PM,M017 110,Seminar Room,11,1,English,Miner Hall,Miner 110
ENG 0009 03,Writing Fiction:intermed,LEC,Cantor Alfred Jay,9/2/14,12/8/14,T,1:20 PM,4:20 PM,M010 123,Seminar Room,12,1,English,Eaton Hall,Eaton 123
ENG 0010 01,Non-Fiction Writing,LEC,Miller Neil,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M010 209,Classroom,11,1,English,Eaton Hall,Eaton 209
ENG 0011 01,Intermediate Journalism,LEC,Levinson Nan,9/2/14,12/8/14,TR,3:00 PM,4:15 PM,M038 015,Seminar Room,7,1,English,East Hall,East 015
ENG 0013 01,Writing Fiction:advanced,LEC,Wilson Jonathan,9/2/14,12/8/14,M,1:20 PM,4:20 PM,M038 301,Seminar Room,13,1,English,East Hall,East Hall Room 301
ENG 0016 01,Forms Of Poetry,LEC,Reines Ariana,9/2/14,12/8/14,M,6:30 PM,9:00 PM,M017 221,Seminar Room,11,1,English,Miner Hall,Miner 221
ENG 0017 01,The Poem,LEC,Reines Ariana,9/2/14,12/8/14,T,1:30 PM,4:00 PM,M017 110,Seminar Room,14,1,English,Miner Hall,Miner 110
ENG 0021 01,Gen View Of Eng Lit I,LEC,Genster Julia A.,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M010 202,Classroom,5,1,English,Eaton Hall,Eaton 202
ENG 0023 01,American Lit To 1855,LEC,Wolff Nathan,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M022 152,Classroom,20,1,English,Robinson Hall,Robinson 152
ENG 0029 01,Literary Studies,LEC,Bamber Linda V,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M038 016,Classroom,5,1,English,East Hall,East 016
ENG 0045 01,Nonwestern Women Writers,LEC,Roy Modhumita,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M196E 100,Classroom,33,1,English,Sophia Gordon Hall,Sophia Gordon
ENG 0050 01,Shakespeare I,LEC,Genster Julia A.,9/2/14,12/8/14,TR,4:30 PM,5:45 PM,M010 202,Classroom,18,1,English,Eaton Hall,Eaton 202
ENG 0063 01,Amer Fiction 1900-1950,LEC,Johnson Ronna C,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M024 304,Classroom,28,1,English,Tisch Library,Tisch 304
ENG 0077 01,The Modern Mind,LEC,Cantor Alfred Jay,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M004 114,Classroom,28,1,English,Barnum Hall,Barnum 114
ENG 0081 01,Postmodernism&film,LEC,Edelman Lee C,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M024 304,Classroom,60,1,English,Tisch Library,Tisch 304
ENG 0081 R,Postmodernism&film,RCT,Edelman Lee C,9/2/14,12/8/14,R,6:30 PM,9:00 PM,M024 304,Classroom,39,1,English,Tisch Library,Tisch 304
ENG 0091 01,Topics Lit & Culture,LEC,Fyler John M,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M038 015,Seminar Room,4,1,English,East Hall,East 015
ENG 0091 02,Topics Lit & Culture,LEC,Roy Modhumita,9/2/14,12/8/14,MW,3:00 PM,5:15 PM,M086 012,Classroom,12,1,English,Olin Center,Olin 012
ENG 0109 01,Ovid&ovidian Tradition,LEC,Fyler John M,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M038 016,Classroom,12,1,English,East Hall,East 016
ENG 0113 01,Renaissance Drama,LEC,Haber Judith D,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M010 203,Classroom,3,1,English,Eaton Hall,Eaton 203
ENG 0122 01,Romantic Lit & Cult II,LEC,Robbins John,9/2/14,12/8/14,TR,4:30 PM,5:45 PM,M006 100A,Classroom,7,1,English,Lane Hall,Lane 100A
ENG 0158 01,Heming Fitz Faulk,LEC,Takayoshi Ichiro,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M038 015,Seminar Room,19,1,English,East Hall,East 015
ENG 0163 01,SpeakMemory:cntp Memoir,LEC,Bellow Janis Freedman,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M038 113,Seminar Room,14,1,English,East Hall,East 113
ENG 0164 01,Representing The Jew,LEC,Litvak Joseph D,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M010 203,Classroom,10,1,English,Eaton Hall,Eaton 203
ENG 0165 01,Perspectives Amer Poetry,LEC,Bamber Linda V,9/2/14,12/8/14,MW,4:30 PM,5:45 PM,M038 113,Seminar Room,13,1,English,East Hall,East 113
ENG 0177 01,FeminismLitTheory,LEC,Hofkosh Sonia,9/2/14,12/8/14,MW,4:30 PM,5:45 PM,M010 203,Classroom,10,1,English,Eaton Hall,Eaton 203
ENG 0188 01,Slave Revolts and Maroons,LEC,Thomas Greg,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M007 226,Classroom,14,1,English,Braker Hall,Braker 226
ENG 0191 01,Seminar In English,LEC,Takayoshi Ichiro,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M038 015,Seminar Room,15,1,English,East Hall,East 015
ENG 0191 02,Seminar In English,LEC,Ullman Michael,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M118 103,Seminar Room,12,1,English,Fine Arts House,11 Talbot Ave 103
ENG 0191 03,Seminar In English,LEC,Ammons Elizabeth,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M010 123,Seminar Room,5,1,English,Eaton Hall,Eaton 123
ENG 0191 04,Seminar In English,LEC,Hofkosh Sonia,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M006 100A,Classroom,8,1,English,Lane Hall,Lane 100A
ENG 0191 06,Seminar In English,LEC,Robbins John,9/2/14,12/8/14,TR,6:00 PM,7:15 PM,M010 124,Seminar Room,4,1,English,Eaton Hall,Eaton 124
ENG 0290 01,Proseminar,LEC,Haber Judith D,9/2/14,12/8/14,W,12:00 PM,1:00 PM,M038 301,Seminar Room,4,1,English,East Hall,East Hall Room 301
ENG 0291 01,Graduate Seminar,LEC,Edelman Lee C,9/2/14,12/8/14,M,1:20 PM,4:20 PM,M038 113,Seminar Room,14,1,English,East Hall,East 113
ENG 0291 02,Graduate Seminar,LEC,Haber Judith D,9/2/14,12/8/14,T,1:20 PM,4:20 PM,M038 301,Seminar Room,15,1,English,East Hall,East Hall Room 301
ENG 0291 03,Graduate Seminar,LEC,Ammons Elizabeth,9/2/14,12/8/14,W,1:20 PM,4:20 PM,M038 113,Seminar Room,15,1,English,East Hall,East 113
ENG 0291 04,Graduate Seminar,LEC,Thomas Greg,9/2/14,12/8/14,R,1:20 PM,4:20 PM,M038 113,Seminar Room,11,1,English,East Hall,East 113
ENP 0053 01,Engineering Psychology,LEC,Brunye Thaddeus T,9/2/14,12/8/14,F,9:00 AM,11:30 AM,M003 208,Classroom,15,1,Engineering Psychology,Anderson Hall,Anderson 208
ENP 0105 01,Assistive Technology,LEC,Buxton Jennifer,9/2/14,12/8/14,T,5:30 PM,8:30 PM,M010 206,Classroom,2,1,Engineering Psychology,Eaton Hall,Eaton 206
ENP 0110 01,Human Factors in Medical Techn,LEC,Wiklund Michael,9/2/14,12/8/14,T,6:00 PM,9:00 PM,M003 112,Classroom,6,1,Engineering Psychology,Anderson Hall,Anderson 112 
ENP 0120 01,Project Study/human Sys A,LEC,Aurelio David,9/2/14,12/8/14,W,6:00 PM,7:15 PM,M003 210,Classroom,21,0,Engineering Psychology,Anderson Hall,Anderson 210
ENP 0162 01,Human-Machine Sys Design,LEC,Hannon Daniel,9/2/14,12/8/14,M,6:00 PM,9:00 PM,M003 211,Classroom,27,1,Engineering Psychology,Anderson Hall,Anderson 211
ENP 0215 01,Complex System Interface,LEC,McEwen Timothy,9/2/14,12/8/14,R,6:00 PM,9:00 PM,M003 309,Classroom,2,1,Engineering Psychology,Anderson Hall,Anderson 309
ENV 0007 01,Environmental Biology,LEC,Reed J Michael,9/2/14,12/8/14,TWF,9:30 AM,10:20 AM,M022 253,Classroom,56,1,Environmental Studies,Robinson Hall,Robinson 253
ENV 0015 01,Nat Peoples South Amer,LEC,Tirrell Andrew R.,9/2/14,12/8/14,TR,6:00 PM,7:15 PM,M027 010,Classroom,10,1,Environmental Studies,Paige Hall,Paige Terrace Room
ENV 0025 CE,Environment & Technology,LEC,Desmarais Anne Marie C,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M003 112,Classroom,30,1,Environmental Studies,Anderson Hall,Anderson 112 
ENV 0054 01,Fundamental Epidemiology,LEC,Woodin Mark A,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M003 112,Classroom,2,1,Environmental Studies,Anderson Hall,Anderson 112 
ENV 0091 01,Environ Pres & Improve,LEC,Ellmore George S,9/2/14,12/8/14,T,1:30 PM,4:00 PM,M004 114,Classroom,11,1,Environmental Studies,Barnum Hall,Barnum 114
ENV 0095 01,Special Topics,LEC,Tirrell Andrew R.,9/2/14,12/8/14,R,12:00 PM,1:15 PM,M019 013,Classroom,3,1,Environmental Studies,Aidekman Arts Center,Aidekman 013
ENV 0107 01,INTRODUCTION TO GEOGRAPHIC INF,LEC,Zimmerman Carl,9/2/14,12/8/14,TR,4:30 PM,5:45 PM,M004 113,Seminar Room,0,1,Environmental Studies,Barnum Hall,Barnum 113
ENV 0167 01,Environmental Toxicology,LEC,Desmarais Anne Marie C,9/2/14,12/8/14,MW,6:00 PM,7:15 PM,M003 208,Classroom,3,1,Environmental Studies,Anderson Hall,Anderson 208
ENV 0195 02,Selected Topics,LEC,Tirrell Andrew R.,9/2/14,12/8/14,TR,3:00 PM,4:15 PM,M017 221,Seminar Room,7,1,Environmental Studies,Miner Hall,Miner 221
EOS 0001 01,The Dynamic Earth W/lab,LEC,Gardulski Anne F,9/2/14,12/8/14,MWF,10:30 AM,11:20 AM,M006 100,Classroom,33,1,Earth & Ocean Sciences,Lane Hall,Lane 100
EOS 0001 LA,The Dynamic Earth W/lab,LAB,Gardulski Anne F,9/2/14,12/8/14,M,1:20 PM,4:20 PM,M006 006,Class Laboratory,11,1,Earth & Ocean Sciences,Lane Hall,Lane Hall Room 006 Geology Lab
EOS 0001 LB,The Dynamic Earth W/lab,LAB,Gardulski Anne F,9/2/14,12/8/14,T,1:20 PM,4:20 PM,M006 006,Class Laboratory,12,1,Earth & Ocean Sciences,Lane Hall,Lane Hall Room 006 Geology Lab
EOS 0001 LE,The Dynamic Earth W/lab,LAB,Gardulski Anne F,9/2/14,12/8/14,F,1:20 PM,4:20 PM,M006 006,Class Laboratory,10,1,Earth & Ocean Sciences,Lane Hall,Lane Hall Room 006 Geology Lab
EOS 0005 01,Intro To Oceanography,LEC,Kemp Andrew,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M006 100,Classroom,77,1,Earth & Ocean Sciences,Lane Hall,Lane 100
EOS 0032 01,Geomorphology W/lab,LEC,Ridge John C,9/2/14,12/8/14,MW,8:30 AM,9:20 AM,M006 007,Class Laboratory,14,1,Earth & Ocean Sciences,Lane Hall,Lane Hall Room 007
EOS 0032 01,Geomorphology W/lab,LEC,Ridge John C,9/2/14,12/8/14,R,9:30 AM,10:20 AM,M006 007,Class Laboratory,14,1,Earth & Ocean Sciences,Lane Hall,Lane Hall Room 007
EOS 0032 L,Geomorphology W/lab,LAB,Ridge John C,9/2/14,12/8/14,W,1:20 PM,4:20 PM,M006 007,Class Laboratory,14,1,Earth & Ocean Sciences,Lane Hall,Lane Hall Room 007
EOS 0038 01,Paleontology,LEC,Benner Jacob S.,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M006 007,Class Laboratory,5,1,Earth & Ocean Sciences,Lane Hall,Lane Hall Room 007
EOS 0038 L,Paleontology,LAB,Benner Jacob S.,9/2/14,12/8/14,M,1:30 PM,4:00 PM,M006 007,Class Laboratory,5,1,Earth & Ocean Sciences,Lane Hall,Lane Hall Room 007
EOS 0051 01,Global Climate Change,LEC,Kemp Andrew,9/2/14,12/8/14,TWF,9:30 AM,10:20 AM,M006 100A,Classroom,12,1,Earth & Ocean Sciences,Lane Hall,Lane 100A
EOS 0100 RC,Disc Grp/do Not Register,LEC,Ridge John C,9/2/14,12/8/14,MTWF,9:00 AM,10:30 AM,M006 100,Classroom,0,1,Earth & Ocean Sciences,Lane Hall,Lane 100
EOS 0100 RD,Disc Grp/do Not Register,LEC,Ridge John C,9/2/14,12/8/14,M,9:30 AM,10:20 AM,M006 100A,Classroom,0,1,Earth & Ocean Sciences,Lane Hall,Lane 100A
EOS 0100 RE,Disc Grp/do Not Register,LEC,Ridge John C,9/2/14,12/8/14,R,9:30 AM,10:20 AM,M006 100,Classroom,0,1,Earth & Ocean Sciences,Lane Hall,Lane 100
EOS 0100 RF,Disc Grp/do Not Register,LEC,Ridge John C,9/2/14,12/8/14,F,3:30 PM,4:20 PM,M006 100A,Classroom,0,1,Earth & Ocean Sciences,Lane Hall,Lane 100A
EOS 0131 01,Groundwater,LEC,Garven Grant,9/2/14,12/8/14,MW,4:30 PM,5:45 PM,M006 100,Classroom,0,1,Earth & Ocean Sciences,Lane Hall,Lane 100
EOS 0151 01,Global Climate Change,LEC,Kemp Andrew,9/2/14,12/8/14,TWF,9:30 AM,10:20 AM,M006 100A,Classroom,0,1,Earth & Ocean Sciences,Lane Hall,Lane 100A
EOS 0191 01,Special Topics,LEC,Gardulski Anne F,9/2/14,12/8/14,,,,M006 100A,(none),1,1,Earth & Ocean Sciences,Lane Hall,Lane 100A
EOS 0287 01,Subsurface Fluid Dynamic,LEC,Garven Grant,9/2/14,12/8/14,TWF,9:30 AM,10:20 AM,M006 006,Class Laboratory,0,1,Earth & Ocean Sciences,Lane Hall,Lane Hall Room 006 Geology Lab
ES 0003 ECE,Intro Elec Systems W/lab,LEC,Lasser Ronald,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M019 102,Assembly,196,1,Engineering Science,Aidekman Arts Center,Cohen Auditorium
ES 0003 L01,Intro Elec Systems W/lab,LAB,TBD,9/2/14,12/8/14,M,12:30 PM,1:45 PM,M026 225,Class Laboratory,25,1,Engineering Science,Halligan Hall,Halligan 225
ES 0003 L02,Intro Elec Systems W/lab,LAB,TBD,9/2/14,12/8/14,T,8:30 AM,9:45 AM,M026 225,Class Laboratory,14,1,Engineering Science,Halligan Hall,Halligan 225
ES 0003 L03,Intro Elec Systems W/lab,LAB,TBD,9/2/14,12/8/14,T,12:30 PM,1:45 PM,M026 225,Class Laboratory,19,1,Engineering Science,Halligan Hall,Halligan 225
ES 0003 L04,Intro Elec Systems W/lab,LAB,TBD,9/2/14,12/8/14,T,3:00 PM,4:15 PM,M026 225,Class Laboratory,20,1,Engineering Science,Halligan Hall,Halligan 225
ES 0003 L05,Intro Elec Systems W/lab,LAB,TBD,9/2/14,12/8/14,W,8:30 AM,9:45 AM,M026 225,Class Laboratory,12,1,Engineering Science,Halligan Hall,Halligan 225
ES 0003 L06,Intro Elec Systems W/lab,LAB,TBD,9/2/14,12/8/14,W,12:30 PM,1:45 PM,M026 225,Class Laboratory,22,1,Engineering Science,Halligan Hall,Halligan 225
ES 0003 L07,Intro Elec Systems W/lab,LAB,TBD,9/2/14,12/8/14,W,6:00 PM,7:15 PM,M026 225,Class Laboratory,22,1,Engineering Science,Halligan Hall,Halligan 225
ES 0003 L08,Intro Elec Systems W/lab,LAB,TBD,9/2/14,12/8/14,R,8:30 AM,9:45 AM,M026 225,Class Laboratory,6,1,Engineering Science,Halligan Hall,Halligan 225
ES 0003 L09,Intro Elec Systems W/lab,LAB,TBD,9/2/14,12/8/14,R,3:00 PM,4:15 PM,M026 225,Class Laboratory,21,1,Engineering Science,Halligan Hall,Halligan 225
ES 0003 L10,Intro Elec Systems W/lab,LAB,TBD,9/2/14,12/8/14,R,6:00 PM,7:15 PM,M026 225,Class Laboratory,22,1,Engineering Science,Halligan Hall,Halligan 225
ES 0003 L11,Intro Elec Systems W/lab,LAB,TBD,9/2/14,12/8/14,F,1:30 PM,2:45 PM,M026 225,Class Laboratory,13,1,Engineering Science,Halligan Hall,Halligan 225
ES 0003 R01,Intro Elec Systems W/lab,RCT,Aull Brian,9/2/14,12/8/14,W,7:30 PM,8:20 PM,M026 111B,Classroom,36,1,Engineering Science,Halligan Hall,Halligan 111B
ES 0003 R02,Intro Elec Systems W/lab,RCT,TBD,9/2/14,12/8/14,R,10:30 AM,11:20 AM,M003 112,Classroom,30,1,Engineering Science,Anderson Hall,Anderson 112 
ES 0003 R03,Intro Elec Systems W/lab,RCT,Lasser Ronald,9/2/14,12/8/14,R,3:00 PM,3:50 PM,M026 111B,Classroom,30,1,Engineering Science,Halligan Hall,Halligan 111B
ES 0003 R04,Intro Elec Systems W/lab,RCT,Sonek Gregory J.,9/2/14,12/8/14,R,7:30 PM,8:20 PM,M026 111B,Classroom,32,1,Engineering Science,Halligan Hall,Halligan 111B
ES 0003 R05,Intro Elec Systems W/lab,RCT,TBD,9/2/14,12/8/14,F,10:30 AM,11:20 AM,M026 111A,Classroom,22,1,Engineering Science,Halligan Hall,Halligan 111A
ES 0003 R06,Intro Elec Systems W/lab,RCT,Preis Douglas,9/2/14,12/8/14,F,1:30 PM,2:20 PM,M026 108,Classroom,25,1,Engineering Science,Halligan Hall,Halligan 108
ES 0003 R07,Intro Elec Systems W/lab,RCT,TBD,9/2/14,12/8/14,R,12:00 PM,12:50 PM,M026 102,Conference Room,21,1,Engineering Science,Halligan Hall,Halligan 102
ES 0005 ACE,Intro Mech Stat & Dyn,LEC,Levine Stephen H,9/2/14,12/8/14,M,4:30 PM,5:20 PM,M003 206,Classroom,31,1,Engineering Science,Anderson Hall,Anderson 206
ES 0005 ACE,Intro Mech Stat & Dyn,LEC,Levine Stephen H,9/2/14,12/8/14,TR,3:00 PM,3:50 PM,M003 206,Classroom,31,1,Engineering Science,Anderson Hall,Anderson 206
ES 0005 AR,Intro Mech Stat & Dyn,RCT,Levine Stephen H,9/2/14,12/8/14,M,6:00 PM,6:50 PM,M003 210,Classroom,32,1,Engineering Science,Anderson Hall,Anderson 210
ES 0005 BCE,Intro Mech Stat & Dyn,LEC,Viesca Robert,9/2/14,12/8/14,MWF,10:30 AM,11:20 AM,M003 306,Classroom,36,1,Engineering Science,Anderson Hall,Anderson 306
ES 0005 BR,Intro Mech Stat & Dyn,RCT,Viesca Robert,9/2/14,12/8/14,T,6:00 PM,6:50 PM,M003 312,Classroom,35,1,Engineering Science,Anderson Hall,Anderson 312
ES 0005 CCE,Intro Mech Stat & Dyn,LEC,Zessin Jennifer,9/2/14,12/8/14,MW,4:30 PM,5:45 PM,M003 309,Classroom,39,1,Engineering Science,Anderson Hall,Anderson 309
ES 0005 CR,Intro Mech Stat & Dyn,RCT,TBD,9/2/14,12/8/14,T,7:30 PM,8:15 PM,M003 306,Classroom,39,1,Engineering Science,Anderson Hall,Anderson 306
ES 0008 ME1,Fluid Mechanics,LEC,Hodes Marc S.,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M003 309,Classroom,18,1,Engineering Science,Anderson Hall,Anderson 309
ES 0008 ME2,Fluid Mechanics,LEC,Guasto Jeffrey,9/2/14,12/8/14,TR,3:00 PM,4:15 PM,M003 210,Classroom,31,1,Engineering Science,Anderson Hall,Anderson 210
ES 0008 ME3,Fluid Mechanics,LEC,Abedian Behrouz,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M003 212,Classroom,44,1,Engineering Science,Anderson Hall,Anderson 212
ES 0011 BME,Fund Biological Sys Eng,LEC,Kuo Catherine K.,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M028 136,Classroom,19,1,Engineering Science,Science and Technology Center,Sci-Tech 136
ES 0018 CE,Computer Aided Design w/ Lab,LEC,Marshall Ryan A,9/2/14,12/8/14,TR,4:30 PM,5:45 PM,M003 212,Classroom,48,1,Engineering Science,Anderson Hall,Anderson 212
ES 0018 LB1,Computer Aided Design w/ Lab,LAB,Marshall Ryan A,9/2/14,12/8/14,W,10:30 AM,11:45 AM,M003 318,Computer Lab,22,1,Engineering Science,Anderson Hall,Anderson Hall Room 318 
ES 0018 LB2,Computer Aided Design w/ Lab,LAB,Marshall Ryan A,9/2/14,12/8/14,W,1:30 PM,2:45 PM,M003 318,Computer Lab,24,1,Engineering Science,Anderson Hall,Anderson Hall Room 318 
ES 0018 LB3,Computer Aided Design w/ Lab,LAB,Marshall Ryan A,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M003 318,Computer Lab,2,1,Engineering Science,Anderson Hall,Anderson Hall Room 318 
ES 0025 CE,Environment & Technology,LEC,Desmarais Anne Marie C,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M003 112,Classroom,26,1,Engineering Science,Anderson Hall,Anderson 112 
ES 0055 CE,Numerical Methods,LEC,Dorfmann Luis,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M003 212,Classroom,23,1,Engineering Science,Anderson Hall,Anderson 212
ES 0056 CE,Probability & Stats,LEC,Chudyk Wayne A,9/2/14,12/8/14,M,9:30 AM,10:20 AM,M003 306,Classroom,36,1,Engineering Science,Anderson Hall,Anderson 306
ES 0056 CE,Probability & Stats,LEC,Chudyk Wayne A,9/2/14,12/8/14,TR,10:30 AM,11:20 AM,M003 306,Classroom,36,1,Engineering Science,Anderson Hall,Anderson 306
ES 0056 RA,Probability & Stats,RCT,Chudyk Wayne A,9/2/14,12/8/14,F,10:30 AM,11:45 AM,M003 309,Classroom,12,1,Engineering Science,Anderson Hall,Anderson 309
ES 0056 RB,Probability & Stats,RCT,Chudyk Wayne A,9/2/14,12/8/14,R,6:00 PM,7:15 PM,M003 312,Classroom,24,1,Engineering Science,Anderson Hall,Anderson 312
ES 0093 02,Special Topics In En,LEC,James Thomas P,9/2/14,12/8/14,TR,4:30 PM,5:45 PM,M003 312,Classroom,26,1,Engineering Science,Anderson Hall,Anderson 312
ES 0093 04,Special Topics In En,LEC,Hassoun Soha,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M026 108,Classroom,26,1,Engineering Science,Halligan Hall,Halligan 108
ES 0093 05A,Special Topics In En,LEC,Hopwood Jeffrey,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M026 225,Class Laboratory,25,1,Engineering Science,Halligan Hall,Halligan 225
ES 0093 05B,Special Topics In En,LEC,Hopwood Jeffrey,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M026 225,Class Laboratory,22,1,Engineering Science,Halligan Hall,Halligan 225
ES 0093 06,Special Topics In En,LEC,Danahy Ethan E,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M028 135,Classroom,28,1,Engineering Science,Science and Technology Center,Sci-Tech 135
ES 0093 08,Special Topics In En,LEC,Baise Laurie G,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M003 208,Classroom,31,1,Engineering Science,Anderson Hall,Anderson 208
ES 0093 09,Special Topics In En,LEC,Durant John L,9/2/14,12/8/14,TR,3:00 PM,4:15 PM,M003 309,Classroom,21,1,Engineering Science,Anderson Hall,Anderson 309
ES 0093 10,Special Topics In En,LEC,Xu Qiaobing,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M028 136,Classroom,27,1,Engineering Science,Science and Technology Center,Sci-Tech 136
ES 0093 12,Special Topics In En,LEC,Hannon Daniel,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M028 134,Classroom,36,1,Engineering Science,Science and Technology Center,Sci-Tech 134
ES 0101 ME,Numerical Methods,LEC,Sokolov Igor,9/2/14,12/8/14,TR,6:00 PM,7:15 PM,M003 212,Classroom,5,1,Engineering Science,Anderson Hall,Anderson 212
EXP 0003 F,Experimental College,LEC,Dooley Norah,9/2/14,12/8/14,R,6:30 PM,9:00 PM,M010 204,Classroom,19,1,Experimental College,Eaton Hall,Eaton 204
EXP 0005 F,Experimental College,LEC,O'Dell Jacqueline E.,9/2/14,12/8/14,T,6:00 PM,8:30 PM,M010 204,Classroom,13,1,Experimental College,Eaton Hall,Eaton 204
EXP 0006 F,Experimental College,LEC,Beal Jessamine,9/2/14,12/8/14,W,6:30 PM,9:00 PM,M010 204,Classroom,18,1,Experimental College,Eaton Hall,Eaton 204
EXP 0007 F,Experimental College,LEC,Aikens Kristina N,9/2/14,12/8/14,W,6:00 PM,8:30 PM,M010 202,Classroom,23,1,Experimental College,Eaton Hall,Eaton 202
EXP 0008 A,Perspectives Seminar,LEC,Horvitz Alexandra C.,9/2/14,12/8/14,M,6:00 PM,8:30 PM,M006 100A,Classroom,12,1,Experimental College,Lane Hall,Lane 100A
EXP 0008 B,Perspectives Seminar,LEC,Garfield Daniel E.,9/2/14,12/8/14,T,6:00 PM,8:30 PM,M007 222,Classroom,12,1,Experimental College,Braker Hall,Braker 222
EXP 0008 C,Perspectives Seminar,LEC,Shtyrkov Marian O.,9/2/14,12/8/14,M,6:00 PM,8:30 PM,M003 309,Classroom,14,1,Experimental College,Anderson Hall,Anderson 309
EXP 0008 D,Perspectives Seminar,LEC,Vinik Zobella B.,9/2/14,12/8/14,T,6:00 PM,8:30 PM,M038 016,Classroom,11,1,Experimental College,East Hall,East 016
EXP 0008 E,Perspectives Seminar,LEC,Blank Nicole L.,9/2/14,12/8/14,R,6:00 PM,8:30 PM,M010 207,Classroom,14,1,Experimental College,Eaton Hall,Eaton 207
EXP 0008 F,Perspectives Seminar,LEC,Meguerian Martha G.,9/2/14,12/8/14,M,6:00 PM,8:30 PM,M002 101,Classroom,14,1,Experimental College,Bromfield Pearson,Bromfield-Pearson 101
EXP 0009 A,Exploration Seminar,LEC,Berenguer Mariana,9/2/14,12/8/14,W,6:00 PM,8:30 PM,M006 100A,Classroom,14,1,Experimental College,Lane Hall,Lane 100A
EXP 0009 B,Exploration Seminar,LEC,Aquila George R.,9/2/14,12/8/14,M,6:30 PM,9:00 PM,M026 111B,Classroom,14,1,Experimental College,Halligan Hall,Halligan 111B
EXP 0009 C,Exploration Seminar,LEC,Knapp Alexander J.,9/2/14,12/8/14,M,6:30 PM,9:00 PM,M002 002,Classroom,14,1,Experimental College,Bromfield Pearson,Bromfield-Pearson 002
EXP 0009 D,Exploration Seminar,LEC,Brewster Tala H.,9/2/14,12/8/14,M,6:30 PM,9:00 PM,M003 212,Classroom,12,1,Experimental College,Anderson Hall,Anderson 212
EXP 0009 E,Exploration Seminar,LEC,Coniglio Kathryn A.,9/2/14,12/8/14,T,6:30 PM,9:00 PM,M002 005,Classroom,14,1,Experimental College,Bromfield Pearson,Bromfield-Pearson 005
EXP 0009 G,Exploration Seminar,LEC,Cohen Abigail R.,9/2/14,12/8/14,R,6:00 PM,8:30 PM,M007 222,Classroom,14,1,Experimental College,Braker Hall,Braker 222
EXP 0009 H,Exploration Seminar,LEC,Linares Sofia,9/2/14,12/8/14,T,6:00 PM,8:30 PM,M007 113,Classroom,7,1,Experimental College,Braker Hall,Braker 113
EXP 0009 J,Exploration Seminar,LEC,Regalado Marcy S.,9/2/14,12/8/14,R,6:30 PM,9:00 PM,M027 007,Seminar Room,12,1,Experimental College,Paige Hall,Paige 007
EXP 0009 K,Exploration Seminar,LEC,Weiller Alexandra R.,9/2/14,12/8/14,R,6:30 PM,9:00 PM,M086 111,Classroom,14,1,Experimental College,Olin Center,Olin 111
EXP 0010 F,Experimental College,LEC,Yugawa Linell,9/2/14,12/8/14,TR,4:30 PM,5:45 PM,M002 101,Classroom,13,1,Experimental College,Bromfield Pearson,Bromfield-Pearson 101
EXP 0011 F,Experimental College,LEC,Stern Ruben L,9/2/14,12/8/14,TR,4:30 PM,5:45 PM,M019 013,Classroom,15,1,Experimental College,Aidekman Arts Center,Aidekman 013
EXP 0013 F,Experimental College,LEC,Serrano Nhora,9/2/14,12/8/14,M,6:00 PM,8:30 PM,M010 203,Classroom,15,1,Experimental College,Eaton Hall,Eaton 203
EXP 0018 AF,Experimental College,LEC,Esposito Donna,9/2/14,12/8/14,T,4:30 PM,6:00 PM,M040 006,Classroom,19,1,Experimental College,Jackson Gym,Jackson 006
EXP 0018 BF,Experimental College,LEC,Esposito Donna,9/2/14,12/8/14,T,4:30 PM,6:00 PM,M010 333,Classroom,14,1,Experimental College,Eaton Hall,Eaton 333
EXP 0019 F,Experimental College,LEC,Raboin Regina F,9/2/14,12/8/14,W,5:00 PM,7:30 PM,M024 223,Classroom,6,1,Experimental College,Tisch Library,Tisch 223
EXP 0020 F,Experimental College,LEC,Cohn Brent,9/2/14,12/8/14,M,6:00 PM,8:30 PM,M010 207,Classroom,12,1,Experimental College,Eaton Hall,Eaton 207
EXP 0021 F,Experimental College,LEC,TBD,9/2/14,12/8/14,W,6:00 PM,8:30 PM,M086 101,Classroom,16,1,Experimental College,Olin Center,Olin 101
EXP 0023 F,Experimental College,LEC,Strawhacker Amanda,9/2/14,12/8/14,M,6:00 PM,8:30 PM,M007 225,Classroom,14,1,Experimental College,Braker Hall,Braker 225
EXP 0027 F,Experimental College,LEC,Cummings Laura Whitney,9/2/14,12/8/14,R,6:30 PM,9:00 PM,M086 108,Classroom,22,1,Experimental College,Olin Center,Olin 108
EXP 0030 F,Experimental College,LEC,Krench Megan,9/2/14,12/8/14,T,6:30 PM,9:00 PM,M006 100A,Classroom,14,1,Experimental College,Lane Hall,Lane 100A
EXP 0031 F,Experimental College,LEC,Turchon Andrew,9/2/14,12/8/14,M,6:00 PM,8:30 PM,M086 110,Classroom,14,1,Experimental College,Olin Center,Olin 110
EXP 0032 F,Experimental College,LEC,DaCosta Jeffrey,9/2/14,12/8/14,T,6:00 PM,8:30 PM,M010 203,Classroom,18,1,Experimental College,Eaton Hall,Eaton 203
EXP 0033 F,Experimental College,LEC,Roche Mark J.,9/2/14,12/8/14,T,4:30 PM,5:45 PM,M006 100,Classroom,16,1,Experimental College,Lane Hall,Lane 100
EXP 0035 AF,Experimental College,LEC,Roche Mark J.,9/2/14,12/8/14,M,4:30 PM,6:30 PM,M196E 100,Classroom,19,0.5,Experimental College,Sophia Gordon Hall,Sophia Gordon
EXP 0035 BF,Experimental College,LEC,Robertson Matthew,9/2/14,12/8/14,R,4:30 PM,6:30 PM,M196E 100,Classroom,9,0.5,Experimental College,Sophia Gordon Hall,Sophia Gordon
EXP 0037 F,Experimental College,LEC,Lindblom Kristen,9/2/14,12/8/14,W,6:00 PM,8:30 PM,M086 103,Classroom,12,1,Experimental College,Olin Center,Olin 103
EXP 0040 F,Experimental College,LEC,Thurber Richard C.,9/2/14,12/8/14,M,6:00 PM,8:30 PM,M024 310,Classroom,8,1,Experimental College,Tisch Library,Tisch 310
EXP 0042 F,Experimental College,LEC,Boen Carl,9/2/14,12/8/14,M,6:00 PM,8:30 PM,M007 113,Classroom,18,1,Experimental College,Braker Hall,Braker 113
EXP 0046 F,Experimental College,LEC,Lippe Nancy,9/2/14,12/8/14,W,6:00 PM,8:30 PM,M003 211,Classroom,17,1,Experimental College,Anderson Hall,Anderson 211
EXP 0050 CF,Experimental College,LEC,Littlewood Jesse,9/2/14,12/8/14,M,6:00 PM,8:30 PM,M022 152,Classroom,11,1,Experimental College,Robinson Hall,Robinson 152
EXP 0051 CF,Experimental College,LEC,James Samuel A,9/2/14,12/8/14,F,9:30 AM,12:00 PM,M190 205A,Conference Room,12,1,Experimental College,Ex College,Ex College 205A
EXP 0051 CF,Experimental College,LEC,James Samuel A,9/2/14,12/8/14,W,4:30 PM,7:00 PM,M190 205A,Conference Room,12,1,Experimental College,Ex College,Ex College 205A
EXP 0052 CF,Experimental College,LEC,Bambrick Gail,9/2/14,12/8/14,W,6:00 PM,8:30 PM,M002 007,Classroom,41,1,Experimental College,Bromfield Pearson,Bromfield-Pearson 007
EXP 0053 CF,Experimental College,LEC,Jones Khary,9/2/14,12/8/14,MW,6:00 PM,9:00 PM,M007 001,Classroom,9,1,Experimental College,Braker Hall,Braker 001
EXP 0053 CF,Experimental College,LEC,Jones Khary,9/2/14,12/8/14,MW,6:00 PM,9:00 PM,M024 103,Open Laboratory,9,1,Experimental College,Tisch Library,Tisch Library Mark 4 Lab
EXP 0055 F,Experimental College,LEC,Giltinan Garvan,9/2/14,12/8/14,W,6:00 PM,8:30 PM,M086 112,Classroom,16,1,Experimental College,Olin Center,Olin 112
EXP 0059 F,Experimental College,LEC,Chitre Nanda,9/2/14,12/8/14,R,6:00 PM,8:30 PM,M086 110,Classroom,19,1,Experimental College,Olin Center,Olin 110
EXP 0064 F,Experimental College,LEC,Sloboda Lara N,9/2/14,12/8/14,M,6:00 PM,8:30 PM,M086 012,Classroom,7,1,Experimental College,Olin Center,Olin 012
EXP 0074 F,Experimental College,LEC,Rickard Erika,9/2/14,12/8/14,M,6:00 PM,8:30 PM,M086 002,Classroom,13,1,Experimental College,Olin Center,Olin 002
EXP 0076 F,Experimental College,LEC,Spears Sonja,9/2/14,12/8/14,T,6:00 PM,8:30 PM,M086 111,Classroom,9,1,Experimental College,Olin Center,Olin 111
EXP 0084 F,Experimental College,LEC,Volk Jan,9/2/14,12/8/14,M,6:00 PM,8:30 PM,M038 016,Classroom,19,1,Experimental College,East Hall,East 016
EXP 0090 AF,Experimental College,LEC,Gittleman Robyn S,9/2/14,12/8/14,M,12:00 PM,1:15 PM,M041 205,Conference Room,18,1.5,Experimental College,Alumni House,Alumni House 205
EXP 0090 BF,Experimental College,LEC,Woolf Howard S,9/2/14,12/8/14,M,12:00 PM,1:15 PM,M024 314,Classroom,10,1.5,Experimental College,Tisch Library,Tisch 314
EXP 0091 AF,Experimental College,LEC,Cohen Steven D,9/2/14,12/8/14,M,12:00 PM,1:00 PM,M027 007,Seminar Room,0,1,Experimental College,Paige Hall,Paige 007
EXP 0091 F,Experimental College,LEC,Teichman Sherman,9/2/14,12/8/14,TR,3:00 PM,5:30 PM,M027 113,Classroom,17,1,Experimental College,Paige Hall,Paige Crane Room
EXP 0190 AF,Cms Senior Colloquium,LEC,Goldberg Leslie,9/2/14,12/8/14,W,12:00 PM,12:50 PM,M019 012,Classroom,24,0.5,Experimental College,Aidekman Arts Center,Aidekman 012
EXP 0190 BF,Cms Senior Colloquium,LEC,Dobrow Julie,9/2/14,12/8/14,R,9:30 AM,10:20 AM,M007 118,Classroom,29,0.5,Experimental College,Braker Hall,Braker 118
FAH 0001 01,Introduction to World Art I,LEC,Abramson Daniel,9/2/14,12/8/14,MW,10:30 AM,11:20 AM,M019 102,Assembly,84,1,History of Art,Aidekman Arts Center,Cohen Auditorium
FAH 0001 A,Introduction to World Art I,RCT,TBD,9/2/14,12/8/14,M,4:30 PM,5:20 PM,M118 103,Seminar Room,13,1,History of Art,Fine Arts House,11 Talbot Ave 103
FAH 0001 B,Introduction to World Art I,RCT,TBD,9/2/14,12/8/14,M,6:00 PM,6:50 PM,M118 103,Seminar Room,10,1,History of Art,Fine Arts House,11 Talbot Ave 103
FAH 0001 C,Introduction to World Art I,RCT,TBD,9/2/14,12/8/14,T,12:00 PM,12:50 PM,M040 006,Classroom,14,1,History of Art,Jackson Gym,Jackson 006
FAH 0001 D,Introduction to World Art I,RCT,TBD,9/2/14,12/8/14,T,4:30 PM,5:20 PM,M118 103,Seminar Room,14,1,History of Art,Fine Arts House,11 Talbot Ave 103
FAH 0001 E,Introduction to World Art I,RCT,TBD,9/2/14,12/8/14,W,3:00 PM,3:50 PM,M040 006,Classroom,15,1,History of Art,Jackson Gym,Jackson 006
FAH 0001 F,Introduction to World Art I,RCT,TBD,9/2/14,12/8/14,R,12:00 PM,12:50 PM,M019 012,Classroom,6,1,History of Art,Aidekman Arts Center,Aidekman 012
FAH 0001 G,Introduction to World Art I,RCT,TBD,9/2/14,12/8/14,R,6:00 PM,6:50 PM,M118 103,Seminar Room,12,1,History of Art,Fine Arts House,11 Talbot Ave 103
FAH 0005 01,Intro Arts Of Asia,LEC,Kaminishi Ikumi,9/2/14,12/8/14,TR,4:30 PM,5:45 PM,M024 316,Classroom,21,1,History of Art,Tisch Library,Tisch 316
FAH 0008 01,Intro To Architecture,LEC,Abramson Daniel,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M009 106,Classroom,56,1,History of Art,Pearson Laboratory,Pearson 106
FAH 0012 01,The Arts Of Japan,LEC,Kaminishi Ikumi,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M024 316,Classroom,14,1,History of Art,Tisch Library,Tisch 316
FAH 0025 01,Medieval Architecture,LEC,Overbey Karen E.,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M019 009,Classroom,14,1,History of Art,Aidekman Arts Center,Aidekman 009
FAH 0028 01,Medieval Art Mediterrane,LEC,Hoffman Eva R,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M019 009,Classroom,18,1,History of Art,Aidekman Arts Center,Aidekman 009
FAH 0034 01,Renaissance Venice,LEC,Zolli Daniel,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M019 009,Classroom,14,1,History of Art,Aidekman Arts Center,Aidekman 009
FAH 0050 01,Impressionism&post Impre,LEC,Melius Jeremy,9/2/14,12/8/14,TR,3:00 PM,4:15 PM,M019 012,Classroom,35,1,History of Art,Aidekman Arts Center,Aidekman 012
FAH 0055 01,Contemp Art Since 1960,LEC,Steinberg Monica,9/2/14,12/8/14,MW,4:30 PM,5:45 PM,M040 005,Classroom,16,1,History of Art,Jackson Gym,Jackson 005
FAH 0086 01,Latino Art & Vis Cult,LEC,Zavala Zum Brook Adriana,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M010 202,Classroom,18,1,History of Art,Eaton Hall,Eaton 202
FAH 0092 02,Special Topics,LEC,Harrington James Matthew,9/2/14,12/8/14,MW,4:30 PM,5:45 PM,M004 104,Classroom,0,1,History of Art,Barnum Hall,Barnum 104
FAH 0100 01,Theories&meth Art Hist,LEC,Melius Jeremy,9/2/14,12/8/14,T,12:00 PM,1:15 PM,M118 103,Seminar Room,12,1,History of Art,Fine Arts House,11 Talbot Ave 103
FAH 0100 A,Theories&meth Art Hist,RCT,Melius Jeremy,9/2/14,12/8/14,R,12:00 PM,1:15 PM,M118 103,Seminar Room,9,1,History of Art,Fine Arts House,11 Talbot Ave 103
FAH 0100 B,Theories&meth Art Hist,RCT,Melius Jeremy,9/2/14,12/8/14,R,12:00 PM,1:15 PM,M040 006,Classroom,3,1,History of Art,Jackson Gym,Jackson 006
FAH 0101 01,Hist&meth Art History,LEC,Rosenberg Eric M,9/2/14,12/8/14,W,1:30 PM,4:00 PM,M118 103,Seminar Room,13,1,History of Art,Fine Arts House,11 Talbot Ave 103
FAH 0125 01,Medieval Architecture,LEC,Overbey Karen E.,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M019 009,Classroom,8,1,History of Art,Aidekman Arts Center,Aidekman 009
FAH 0128 01,Medieval Art Mediterrane,LEC,Hoffman Eva R,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M019 009,Classroom,5,1,History of Art,Aidekman Arts Center,Aidekman 009
FAH 0134 01,Renaissance Venice,LEC,Zolli Daniel,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M019 009,Classroom,8,1,History of Art,Aidekman Arts Center,Aidekman 009
FAH 0155 01,Contemp Art Since 1960,LEC,Steinberg Monica,9/2/14,12/8/14,MW,4:30 PM,5:45 PM,M040 005,Classroom,14,1,History of Art,Jackson Gym,Jackson 005
FAH 0192 01,Special Topics,LEC,McClellan Andrew,9/2/14,12/8/14,T,1:30 PM,4:00 PM,M118 103,Seminar Room,13,1,History of Art,Fine Arts House,11 Talbot Ave 103
FAH 0198 01,Undergraduate Seminar,LEC,Overbey Karen E.,9/2/14,12/8/14,T,6:00 PM,9:00 PM,M118 103,Seminar Room,4,1,History of Art,Fine Arts House,11 Talbot Ave 103
FAH 0198 02,Undergraduate Seminar,LEC,Rosenberg Eric M,9/2/14,12/8/14,M,1:30 PM,4:00 PM,M118 103,Seminar Room,3,1,History of Art,Fine Arts House,11 Talbot Ave 103
FAH 0198 03,Undergraduate Seminar,LEC,Hoffman Eva R,9/2/14,12/8/14,T,9:00 AM,11:30 AM,M118 103,Seminar Room,1,1,History of Art,Fine Arts House,11 Talbot Ave 103
FAH 0220 01,Seminar In Medieval Art,LEC,Overbey Karen E.,9/2/14,12/8/14,T,6:00 PM,9:00 PM,M118 103,Seminar Room,10,1,History of Art,Fine Arts House,11 Talbot Ave 103
FAH 0260 01,Seminar:mod American/us,LEC,Rosenberg Eric M,9/2/14,12/8/14,M,1:30 PM,4:00 PM,M118 103,Seminar Room,10,1,History of Art,Fine Arts House,11 Talbot Ave 103
FAH 0260 02,Seminar:mod American/us,LEC,Rosenberg Eric M,9/2/14,12/8/14,M,1:30 PM,4:00 PM,M118 103,Seminar Room,2,1,History of Art,Fine Arts House,11 Talbot Ave 103
FAH 0275 01,Seminar In Art History,LEC,Hoffman Eva R,9/2/14,12/8/14,T,9:00 AM,11:30 AM,M118 103,Seminar Room,6,1,History of Art,Fine Arts House,11 Talbot Ave 103
FAH 0275 02,Seminar In Art History,LEC,Hoffman Eva R,9/2/14,12/8/14,T,9:00 AM,11:30 AM,M118 103,Seminar Room,3,1,History of Art,Fine Arts House,11 Talbot Ave 103
FAH 0284 01,Collections Management,LEC,Desy Margherita M.,9/2/14,12/8/14,M,6:00 PM,9:00 PM,M024 314,Classroom,14,1,History of Art,Tisch Library,Tisch 314
FAH 0285 01,Museums:mission&function,LEC,Robinson Cynthia,9/2/14,12/8/14,R,6:00 PM,9:00 PM,M024 314,Classroom,6,1,History of Art,Tisch Library,Tisch 314
FAH 0285 02,Museums:mission&function,LEC,Iacobucci Cara M,9/2/14,12/8/14,R,6:00 PM,9:00 PM,M024 316,Classroom,9,1,History of Art,Tisch Library,Tisch 316
FAM 0003 B,Art As Process,LEC,Hull Kata,9/2/14,12/8/14,F,9:30 AM,12:30 PM,M006 109,Classroom,16,0.5,Studio Art (Medford Campus),Lane Hall,Lane Hall Room 109 Art Lab
FAM 0005 A,Calligraphy,LEC,Broman-Wright Polly,9/2/14,12/8/14,TR,7:00 PM,10:00 PM,M006 109,Classroom,12,1,Studio Art (Medford Campus),Lane Hall,Lane Hall Room 109 Art Lab
FAM 0006 A,Calligraphy: Intermed. to Advc,LEC,Broman-Wright Polly,9/2/14,12/8/14,TR,7:00 PM,10:00 PM,M006 109,Classroom,4,1,Studio Art (Medford Campus),Lane Hall,Lane Hall Room 109 Art Lab
FAM 0020 01,Design Foundation,LEC,Breiner Joanne,9/2/14,12/8/14,MW,1:30 PM,4:30 PM,M006 109,Classroom,12,1,Studio Art (Medford Campus),Lane Hall,Lane Hall Room 109 Art Lab
FAM 0020 01,Design Foundation,LEC,Breiner Joanne,9/2/14,12/8/14,MW,1:30 PM,4:30 PM,M007 002,Computer Lab,12,1,Studio Art (Medford Campus),Braker Hall,Braker 002 
FAM 0021 01,Design: Inter To Adv,LEC,Breiner Joanne,9/2/14,12/8/14,MW,1:30 PM,4:30 PM,M006 109,Classroom,0,1,Studio Art (Medford Campus),Lane Hall,Lane Hall Room 109 Art Lab
FAM 0021 01,Design: Inter To Adv,LEC,Breiner Joanne,9/2/14,12/8/14,MW,1:30 PM,4:30 PM,M006 109,Classroom,0,1,Studio Art (Medford Campus),Lane Hall,Lane Hall Room 109 Art Lab
FAM 0022 A,Design: Architectural,LEC,French Jennifer Irene,9/2/14,12/8/14,MW,7:00 PM,10:00 PM,M006 109,Classroom,11,1,Studio Art (Medford Campus),Lane Hall,Lane Hall Room 109 Art Lab
FAM 0023 A,Design: Architectural Adv,LEC,French Jennifer Irene,9/2/14,12/8/14,MW,7:00 PM,10:00 PM,M006 109,Classroom,3,1,Studio Art (Medford Campus),Lane Hall,Lane Hall Room 109 Art Lab
FAM 0024 01,Drawing: Introduction,LEC,Lyman Mela,9/2/14,12/8/14,F,1:30 PM,4:30 PM,M006 109,Classroom,17,0.5,Studio Art (Medford Campus),Lane Hall,Lane Hall Room 109 Art Lab
FAM 0026 A,Drawing: Foundation,LEC,Brodell Maria,9/2/14,12/8/14,TR,7:00 PM,10:00 PM,M006 109,Classroom,18,1,Studio Art (Medford Campus),Lane Hall,Lane Hall Room 109 Art Lab
FAM 0026 C,Drawing: Foundation,LEC,Mencoff Greg,9/2/14,12/8/14,MW,7:00 PM,10:00 PM,M006 109,Classroom,13,1,Studio Art (Medford Campus),Lane Hall,Lane Hall Room 109 Art Lab
FAM 0026 D,Drawing: Foundation,LEC,Life Justin Roy,9/2/14,12/8/14,MW,1:30 PM,4:30 PM,M006 109,Classroom,16,1,Studio Art (Medford Campus),Lane Hall,Lane Hall Room 109 Art Lab
FAM 0027 B,Drawing: Inter To Adv,LEC,Carter Patrick,9/2/14,12/8/14,TR,1:30 PM,4:30 PM,M006 109,Classroom,5,1,Studio Art (Medford Campus),Lane Hall,Lane Hall Room 109 Art Lab
FAM 0035 01,Figure Drawing,LEC,Lyman Mela,9/2/14,12/8/14,W,9:30 AM,12:30 PM,M006 109,Classroom,13,0.5,Studio Art (Medford Campus),Lane Hall,Lane Hall Room 109 Art Lab
FAM 0039 A,Graphic Design,LEC,Pape Marcy,9/2/14,12/8/14,MW,7:00 PM,10:00 PM,M007 002,Computer Lab,13,1,Studio Art (Medford Campus),Braker Hall,Braker 002 
FAM 0039 A,Graphic Design,LEC,Pape Marcy,9/2/14,12/8/14,MW,7:00 PM,10:00 PM,M007 226,Classroom,13,1,Studio Art (Medford Campus),Braker Hall,Braker 226
FAM 0040 A,Graphic Design II,LEC,Pape Marcy,9/2/14,12/8/14,MW,7:00 PM,10:00 PM,M007 226,Classroom,2,1,Studio Art (Medford Campus),Braker Hall,Braker 226
FAM 0040 A,Graphic Design II,LEC,Pape Marcy,9/2/14,12/8/14,MW,7:00 PM,10:00 PM,M007 226,Classroom,2,1,Studio Art (Medford Campus),Braker Hall,Braker 226
FAM 0052 01,Introduction To Painting,LEC,Belton Susan,9/2/14,12/8/14,F,9:30 AM,12:30 PM,M006 109,Classroom,12,0.5,Studio Art (Medford Campus),Lane Hall,Lane Hall Room 109 Art Lab
FAM 0053 01,Intro To Painting Cont'd,LEC,Brown Lizi,9/2/14,12/8/14,F,1:30 PM,4:30 PM,M006 109,Classroom,8,0.5,Studio Art (Medford Campus),Lane Hall,Lane Hall Room 109 Art Lab
FAM 0054 01,Painting: Foundation,LEC,Fischman Laura B.,9/2/14,12/8/14,TR,1:30 PM,4:30 PM,M006 109,Classroom,6,1,Studio Art (Medford Campus),Lane Hall,Lane Hall Room 109 Art Lab
FAM 0054 02,Painting: Foundation,LEC,Levin Marilyn,9/2/14,12/8/14,MW,7:00 PM,10:00 PM,M006 109,Classroom,4,1,Studio Art (Medford Campus),Lane Hall,Lane Hall Room 109 Art Lab
FAM 0055 01,Painting: Inter To Adv,LEC,Fischman Laura B.,9/2/14,12/8/14,TR,1:30 PM,4:30 PM,M006 109,Classroom,0,1,Studio Art (Medford Campus),Lane Hall,Lane Hall Room 109 Art Lab
FAM 0055 02,Painting: Inter To Adv,LEC,Levin Marilyn,9/2/14,12/8/14,MW,7:00 PM,10:00 PM,M006 109,Classroom,4,1,Studio Art (Medford Campus),Lane Hall,Lane Hall Room 109 Art Lab
FAM 0063 01,Perspective Drawing,LEC,Lyman Mela,9/2/14,12/8/14,T,9:30 AM,12:30 PM,M006 109,Classroom,16,0.5,Studio Art (Medford Campus),Lane Hall,Lane Hall Room 109 Art Lab
FAM 0064 A,Photo: Foundation,LEC,Mandel Mike,9/2/14,12/8/14,MW,1:30 PM,4:30 PM,M040 004,Open Laboratory,6,1,Studio Art (Medford Campus),Jackson Gym,Jackson Hall Room 004
FAM 0064 B,Photo: Foundation,LEC,Gardner Dore,9/2/14,12/8/14,TR,1:30 PM,4:30 PM,M040 004,Open Laboratory,6,1,Studio Art (Medford Campus),Jackson Gym,Jackson Hall Room 004
FAM 0064 C,Photo: Foundation,LEC,Mandel Mike,9/2/14,12/8/14,TR,7:00 PM,10:00 PM,M040 004,Open Laboratory,6,1,Studio Art (Medford Campus),Jackson Gym,Jackson Hall Room 004
FAM 0065 A,Photography & Computer,LEC,MacIntyre Thomas Michael,9/2/14,12/8/14,TR,4:00 PM,6:45 PM,M026 105,Class Laboratory,16,1,Studio Art (Medford Campus),Halligan Hall,Halligan Hall Room 105
FAM 0067 01,Inter To Adv Photo,LEC,MacIntyre Thomas Michael,9/2/14,12/8/14,MW,7:00 PM,10:00 PM,M040 004,Open Laboratory,7,1,Studio Art (Medford Campus),Jackson Gym,Jackson Hall Room 004
FAM 0068 01,Printmaking Without A Press,LEC,Yahn Garett,9/2/14,12/8/14,R,7:00 PM,10:00 PM,M006 109,Classroom,13,0.5,Studio Art (Medford Campus),Lane Hall,Lane Hall Room 109 Art Lab
FAM 0070 01,Contemporary Portrait,LEC,Brown Lizi,9/2/14,12/8/14,W,9:30 AM,12:30 PM,M006 109,Classroom,13,0.5,Studio Art (Medford Campus),Lane Hall,Lane Hall Room 109 Art Lab
FAM 0077 A,Sculpture Foundation,LEC,Star Brenda,9/2/14,12/8/14,MW,1:30 PM,4:30 PM,M006 109,Classroom,12,1,Studio Art (Medford Campus),Lane Hall,Lane Hall Room 109 Art Lab
FAM 0093 A,Watercolor,LEC,Finnegan Katharine,9/2/14,12/8/14,TR,1:30 PM,4:30 PM,M006 109,Classroom,12,1,Studio Art (Medford Campus),Lane Hall,Lane Hall Room 109 Art Lab
FAM 0094 A,Watercolor: Inter  To Adv,LEC,Finnegan Katharine,9/2/14,12/8/14,TR,1:30 PM,4:30 PM,M006 109,Classroom,4,1,Studio Art (Medford Campus),Lane Hall,Lane Hall Room 109 Art Lab
FAM 0098 01,Art As Fashion,LEC,Blotnick Judy,9/2/14,12/8/14,W,9:30 AM,12:30 PM,M006 109,Classroom,13,0.5,Studio Art (Medford Campus),Lane Hall,Lane Hall Room 109 Art Lab
FR 0001 A,Elementary French I,LEC,Pearce Tracy E,9/2/14,12/8/14,TRF,8:30 AM,9:20 AM,M086 108,Classroom,14,1,French,Olin Center,Olin 108
FR 0001 B,Elementary French I,LEC,Rice Anne-Christine,9/2/14,12/8/14,TWF,9:30 AM,10:20 AM,M086 110,Classroom,17,1,French,Olin Center,Olin 110
FR 0001 C,Elementary French I,LEC,Miller Kerri Lee Conditto,9/2/14,12/8/14,M,9:30 AM,10:20 AM,M086 218,Classroom,10,1,French,Olin Center,Olin 218
FR 0001 C,Elementary French I,LEC,Miller Kerri Lee Conditto,9/2/14,12/8/14,TR,10:30 AM,11:20 AM,M086 218,Classroom,10,1,French,Olin Center,Olin 218
FR 0001 D,Elementary French I,LEC,Heitzman Brenna K.,9/2/14,12/8/14,MWF,10:30 AM,11:20 AM,M086 112,Classroom,16,1,French,Olin Center,Olin 112
FR 0001 E,Elementary French I,LEC,Rice Anne-Christine,9/2/14,12/8/14,TRF,12:00 PM,12:50 PM,M086 101,Classroom,13,1,French,Olin Center,Olin 101
FR 0001 F,Elementary French I,LEC,Heitzman Brenna K.,9/2/14,12/8/14,MWF,1:30 PM,2:20 PM,M086 101,Classroom,12,1,French,Olin Center,Olin 101
FR 0002 A,Elementary French II,LEC,Miller Kerri Lee Conditto,9/2/14,12/8/14,TWF,9:30 AM,10:20 AM,M086 108,Classroom,12,1,French,Olin Center,Olin 108
FR 0002 B,Elementary French II,LEC,Gillette Marie,9/2/14,12/8/14,TRF,12:00 PM,12:50 PM,M086 112,Classroom,9,1,French,Olin Center,Olin 112
FR 0002 C,Elementary French II,LEC,Kelly Nancy,9/2/14,12/8/14,MWF,1:30 PM,2:20 PM,M086 218,Classroom,10,1,French,Olin Center,Olin 218
FR 0002 D,Elementary French II,LEC,Poncet-Montange Anne,9/2/14,12/8/14,MTR,6:00 PM,6:50 PM,M086 112,Classroom,9,1,French,Olin Center,Olin 112
FR 0003 A,Intermed French I,LEC,Miller Kerri Lee Conditto,9/2/14,12/8/14,MW,8:30 AM,9:20 AM,M086 101,Classroom,11,1,French,Olin Center,Olin 101
FR 0003 A,Intermed French I,LEC,Miller Kerri Lee Conditto,9/2/14,12/8/14,R,9:30 AM,10:20 AM,M086 101,Classroom,11,1,French,Olin Center,Olin 101
FR 0003 B,Intermed French I,LEC,O'Connor Carrie,9/2/14,12/8/14,MWF,10:30 AM,11:20 AM,M086 109,Classroom,15,1,French,Olin Center,Olin 109
FR 0003 C,Intermed French I,LEC,O'Connor Carrie,9/2/14,12/8/14,TRF,12:00 PM,12:50 PM,M038 015,Seminar Room,9,1,French,East Hall,East 015
FR 0003 D,Intermed French I,LEC,Detwiller Ellen,9/2/14,12/8/14,MWF,1:30 PM,2:20 PM,M086 112,Classroom,15,1,French,Olin Center,Olin 112
FR 0003 E,Intermed French I,LEC,Taieb Anne,9/2/14,12/8/14,F,2:30 PM,3:20 PM,M086 109,Classroom,15,1,French,Olin Center,Olin 109
FR 0003 E,Intermed French I,LEC,Taieb Anne,9/2/14,12/8/14,TR,1:30 PM,2:20 PM,M086 109,Classroom,15,1,French,Olin Center,Olin 109
FR 0003 F,Intermed French I,LEC,Kelly Nancy,9/2/14,12/8/14,MWR,4:30 PM,5:20 PM,M086 001,Classroom,11,1,French,Olin Center,Olin 001
FR 0003 G,Intermed French I,LEC,Heitzman Brenna K.,9/2/14,12/8/14,MW,8:30 AM,9:20 AM,M086 116,Classroom,8,1,French,Olin Center,Olin 116
FR 0003 G,Intermed French I,LEC,Heitzman Brenna K.,9/2/14,12/8/14,R,9:30 AM,10:20 AM,M086 116,Classroom,8,1,French,Olin Center,Olin 116
FR 0004 A,Intermed French II,LEC,Pauling David F,9/2/14,12/8/14,MW,8:30 AM,9:20 AM,M086 109,Classroom,12,1,French,Olin Center,Olin 109
FR 0004 A,Intermed French II,LEC,Pauling David F,9/2/14,12/8/14,R,9:30 AM,10:20 AM,M086 109,Classroom,12,1,French,Olin Center,Olin 109
FR 0004 B,Intermed French II,LEC,Taieb Anne,9/2/14,12/8/14,MWF,10:30 AM,11:20 AM,M086 218,Classroom,16,1,French,Olin Center,Olin 218
FR 0004 C,Intermed French II,LEC,Thomas Viola Gertrude,9/2/14,12/8/14,M,9:30 AM,10:20 AM,M086 110,Classroom,11,1,French,Olin Center,Olin 110
FR 0004 C,Intermed French II,LEC,Thomas Viola Gertrude,9/2/14,12/8/14,TR,10:30 AM,11:20 AM,M086 110,Classroom,11,1,French,Olin Center,Olin 110
FR 0004 D,Intermed French II,LEC,Detwiller Ellen,9/2/14,12/8/14,F,2:30 PM,3:20 PM,M086 112,Classroom,13,1,French,Olin Center,Olin 112
FR 0004 D,Intermed French II,LEC,Detwiller Ellen,9/2/14,12/8/14,MW,3:00 PM,3:50 PM,M086 112,Classroom,13,1,French,Olin Center,Olin 112
FR 0004 RA,Intermed French II,RCT,Taieb Anne,9/2/14,12/8/14,M,12:00 PM,12:40 PM,M086 220,Classroom,7,1,French,Olin Center,Olin 220
FR 0004 RB,Intermed French II,RCT,Taieb Anne,9/2/14,12/8/14,M,12:45 PM,1:25 PM,M086 220,Classroom,9,1,French,Olin Center,Olin 220
FR 0004 RC,Intermed French II,RCT,Taieb Anne,9/2/14,12/8/14,M,6:00 PM,6:40 PM,M086 218,Classroom,9,1,French,Olin Center,Olin 218
FR 0004 RD,Intermed French II,RCT,Taieb Anne,9/2/14,12/8/14,T,6:45 PM,7:25 PM,M086 218,Classroom,8,1,French,Olin Center,Olin 218
FR 0004 RE,Intermed French II,RCT,Taieb Anne,9/2/14,12/8/14,W,12:00 PM,12:40 PM,M086 220,Classroom,6,1,French,Olin Center,Olin 220
FR 0004 RF,Intermed French II,RCT,Taieb Anne,9/2/14,12/8/14,W,12:45 PM,1:25 PM,M086 220,Classroom,8,1,French,Olin Center,Olin 220
FR 0004 RG,Intermed French II,RCT,Taieb Anne,9/2/14,12/8/14,W,4:30 PM,5:10 PM,M086 005,Classroom,5,1,French,Olin Center,Olin 005
FR 0021 A,Comp/conv I,LEC,Rice Anne-Christine,9/2/14,12/8/14,TRF,8:30 AM,9:20 AM,M086 116,Classroom,17,1,French,Olin Center,Olin 116
FR 0021 B,Comp/conv I,LEC,Gillette Marie,9/2/14,12/8/14,TWF,9:30 AM,10:20 AM,M086 102,Classroom,17,1,French,Olin Center,Olin 102
FR 0021 C,Comp/conv I,LEC,Pauling David F,9/2/14,12/8/14,M,9:30 AM,10:20 AM,M086 001,Classroom,15,1,French,Olin Center,Olin 001
FR 0021 C,Comp/conv I,LEC,Pauling David F,9/2/14,12/8/14,TR,10:30 AM,11:20 AM,M086 001,Classroom,15,1,French,Olin Center,Olin 001
FR 0021 D,Comp/conv I,LEC,Poncet-Montange Anne,9/2/14,12/8/14,M,4:30 PM,5:20 PM,M086 112,Classroom,14,1,French,Olin Center,Olin 112
FR 0021 D,Comp/conv I,LEC,Poncet-Montange Anne,9/2/14,12/8/14,TR,3:00 PM,3:50 PM,M086 102,Classroom,14,1,French,Olin Center,Olin 102
FR 0021 RA,Comp/conv I,RCT,Taieb Anne,9/2/14,12/8/14,M,12:00 PM,12:40 PM,M086 108,Classroom,10,1,French,Olin Center,Olin 108
FR 0021 RB,Comp/conv I,RCT,Taieb Anne,9/2/14,12/8/14,M,12:45 PM,1:25 PM,M086 108,Classroom,9,1,French,Olin Center,Olin 108
FR 0021 RC,Comp/conv I,RCT,Taieb Anne,9/2/14,12/8/14,M,6:45 PM,7:25 PM,M086 102,Classroom,8,1,French,Olin Center,Olin 102
FR 0021 RD,Comp/conv I,RCT,Taieb Anne,9/2/14,12/8/14,T,6:00 PM,6:40 PM,M086 218,Classroom,8,1,French,Olin Center,Olin 218
FR 0021 RE,Comp/conv I,RCT,Taieb Anne,9/2/14,12/8/14,W,12:00 PM,12:40 PM,M086 108,Classroom,7,1,French,Olin Center,Olin 108
FR 0021 RF,Comp/conv I,RCT,Taieb Anne,9/2/14,12/8/14,W,12:45 PM,1:25 PM,M086 108,Classroom,9,1,French,Olin Center,Olin 108
FR 0021 RG,Comp/conv I,RCT,Taieb Anne,9/2/14,12/8/14,W,5:15 PM,5:55 PM,M086 108,Classroom,9,1,French,Olin Center,Olin 108
FR 0022 A,Comp/conv II,LEC,Pearce Tracy E,9/2/14,12/8/14,MW,8:30 AM,9:20 AM,M086 102,Classroom,14,1,French,Olin Center,Olin 102
FR 0022 A,Comp/conv II,LEC,Pearce Tracy E,9/2/14,12/8/14,R,9:30 AM,10:20 AM,M086 102,Classroom,14,1,French,Olin Center,Olin 102
FR 0022 B,Comp/conv II,LEC,Soos Emese M,9/2/14,12/8/14,TWF,9:30 AM,10:20 AM,M086 109,Classroom,13,1,French,Olin Center,Olin 109
FR 0022 C,Comp/conv II,LEC,Thomas Viola Gertrude,9/2/14,12/8/14,F,2:30 PM,3:20 PM,M086 113,Classroom,11,1,French,Olin Center,Olin 113
FR 0022 C,Comp/conv II,LEC,Thomas Viola Gertrude,9/2/14,12/8/14,TR,1:30 PM,2:20 PM,M086 113,Classroom,11,1,French,Olin Center,Olin 113
FR 0022 RA,Comp/conv II,RCT,Taieb Anne,9/2/14,12/8/14,M,12:00 PM,12:40 PM,M086 109,Classroom,9,1,French,Olin Center,Olin 109
FR 0022 RB,Comp/conv II,RCT,Taieb Anne,9/2/14,12/8/14,M,12:45 PM,1:25 PM,M086 109,Classroom,7,1,French,Olin Center,Olin 109
FR 0022 RC,Comp/conv II,RCT,Taieb Anne,9/2/14,12/8/14,W,12:00 PM,12:40 PM,M086 109,Classroom,8,1,French,Olin Center,Olin 109
FR 0022 RD,Comp/conv II,RCT,Taieb Anne,9/2/14,12/8/14,W,12:45 PM,1:25 PM,M086 218,Classroom,5,1,French,Olin Center,Olin 218
FR 0022 RE,Comp/conv II,RCT,Taieb Anne,9/2/14,12/8/14,T,5:15 PM,5:55 PM,M086 111,Classroom,6,1,French,Olin Center,Olin 111
FR 0031 B,Readings In Fr Lit I,LEC,Gasarian Gerard,9/2/14,12/8/14,MW,4:30 PM,5:45 PM,M086 111,Classroom,14,1,French,Olin Center,Olin 111
FR 0031 C,Readings In Fr Lit I,LEC,Schub Claire,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M086 108,Classroom,14,1,French,Olin Center,Olin 108
FR 0031 D,Readings In Fr Lit I,LEC,Naginski Isabelle H,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M086 111,Classroom,3,1,French,Olin Center,Olin 111
FR 0121 A,Advanced French Lang I,LEC,Pearce Tracy E,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M086 102,Classroom,14,1,French,Olin Center,Olin 102
FR 0121 B,Advanced French Lang I,LEC,Soos Emese M,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M086 334,Classroom,9,1,French,Olin Center,Olin Center Room 334
FR 0191 A,Special Topics,LEC,Gasarian Gerard,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M086 109,Classroom,16,1,French,Olin Center,Olin 109
FR 0191 B,Special Topics,LEC,Pollina Vincent,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M086 112,Classroom,3,1,French,Olin Center,Olin 112
FR 0191 C,Special Topics,LEC,Schub Claire,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M086 102,Classroom,11,1,French,Olin Center,Olin 102
FR 0191 D,Special Topics,LEC,Schub Claire,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M086 108,Classroom,16,1,French,Olin Center,Olin 108
FR 0191 E,Special Topics,LEC,Naginski Isabelle H,9/2/14,12/8/14,TR,3:00 PM,4:15 PM,M086 109,Classroom,5,1,French,Olin Center,Olin 109
GER 0001 A,Elementary German,LEC,Stoessel Saskia,9/2/14,12/8/14,F,9:30 AM,10:20 AM,M086 103,Classroom,16,1,German,Olin Center,Olin 103
GER 0001 A,Elementary German,LEC,Stoessel Saskia,9/2/14,12/8/14,TW,9:05 AM,10:20 AM,M086 103,Classroom,16,1,German,Olin Center,Olin 103
GER 0001 B,Elementary German,LEC,Pfaffinger Doris,9/2/14,12/8/14,M,9:30 AM,10:20 AM,M086 002,Classroom,16,1,German,Olin Center,Olin 002
GER 0001 B,Elementary German,LEC,Pfaffinger Doris,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M086 002,Classroom,16,1,German,Olin Center,Olin 002
GER 0001 C,Elementary German,LEC,Nguyen Anh,9/2/14,12/8/14,M,4:30 PM,5:20 PM,M086 107,Classroom,8,1,German,Olin Center,Olin 107
GER 0001 C,Elementary German,LEC,Nguyen Anh,9/2/14,12/8/14,TR,3:00 PM,4:15 PM,M086 002,Classroom,8,1,German,Olin Center,Olin 002
GER 0003 A,Intermediate German,LEC,Wilczek Markus,9/2/14,12/8/14,F,9:30 AM,10:20 AM,M086 218,Classroom,11,1,German,Olin Center,Olin 218
GER 0003 A,Intermediate German,LEC,Wilczek Markus,9/2/14,12/8/14,TW,9:05 AM,10:20 AM,M086 218,Classroom,11,1,German,Olin Center,Olin 218
GER 0003 B,Intermediate German,LEC,Pfaffinger Doris,9/2/14,12/8/14,F,12:00 PM,12:50 PM,M086 005,Classroom,10,1,German,Olin Center,Olin 005
GER 0003 B,Intermediate German,LEC,Pfaffinger Doris,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M086 005,Classroom,10,1,German,Olin Center,Olin 005
GER 0003 C,Intermediate German,LEC,Grimm Geraldine A,9/2/14,12/8/14,M,4:30 PM,5:20 PM,M086 116,Classroom,13,1,German,Olin Center,Olin 116
GER 0003 C,Intermediate German,LEC,Grimm Geraldine A,9/2/14,12/8/14,TR,3:00 PM,4:15 PM,M086 116,Classroom,13,1,German,Olin Center,Olin 116
GER 0021 A,Grammar/review/compositn,LEC,Pfaffinger Doris,9/2/14,12/8/14,TWF,9:30 AM,10:20 AM,M086 113,Classroom,10,1,German,Olin Center,Olin 113
GER 0021 B,Grammar/review/compositn,LEC,Stoessel Saskia,9/2/14,12/8/14,MWF,10:30 AM,11:20 AM,M086 001,Classroom,14,1,German,Olin Center,Olin 001
GER 0061 01,Survey German Lit I,LEC,Grimm Geraldine A,9/2/14,12/8/14,TR,4:30 PM,5:45 PM,M086 109,Classroom,11,1,German,Olin Center,Olin 109
GER 0068 01,Martin Luther:man & Era,LEC,Brown Daniel W,9/2/14,12/8/14,TR,3:00 PM,4:15 PM,M086 318,Classroom,2,1,German,Olin Center,Olin 318
GER 0085 01,German Film,LEC,Romero Christiane M,9/2/14,12/8/14,R,3:00 PM,4:15 PM,M086 011,Classroom,12,1,German,Olin Center,Olin 011
GER 0085 01,German Film,LEC,Romero Christiane M,9/2/14,12/8/14,T,3:00 PM,5:20 PM,M086 011,Classroom,12,1,German,Olin Center,Olin 011
GER 0091 01,Special Topics,LEC,North Paul,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M086 106,Lounge,1,1,German,Olin Center,Olin 106
GER 0091 02,Special Topics,LEC,Densky Doreen,9/2/14,12/8/14,MW,4:30 PM,5:45 PM,M086 002,Classroom,7,1,German,Olin Center,Olin 002
GER 0114 01,Ling Appr/2nd Lang Acq,LEC,Stoessel Saskia,9/2/14,12/8/14,W,4:30 PM,7:15 PM,M086 116,Classroom,2,1,German,Olin Center,Olin 116
GER 0121 01,Advanced German,LEC,Romero Christiane M,9/2/14,12/8/14,M,9:30 AM,10:20 AM,M086 107,Classroom,13,1,German,Olin Center,Olin 107
GER 0121 01,Advanced German,LEC,Romero Christiane M,9/2/14,12/8/14,TR,10:30 AM,11:20 AM,M086 107,Classroom,13,1,German,Olin Center,Olin 107
GER 0151 01,18th Cent German Writers,LEC,Ascher Gloria J,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M086 002,Classroom,2,1,German,Olin Center,Olin 002
GER 0185 01,German Film,LEC,Romero Christiane M,9/2/14,12/8/14,R,4:30 PM,5:45 PM,M086 011,Classroom,4,1,German,Olin Center,Olin 011
GER 0185 01,German Film,LEC,Romero Christiane M,9/2/14,12/8/14,T,3:00 PM,5:20 PM,M086 011,Classroom,4,1,German,Olin Center,Olin 011
GER 0191 01,Special Topics,LEC,North Paul,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M086 106,Lounge,2,1,German,Olin Center,Olin 106
GIS 0101 01,Intro To Gis,LEC,Maheshwari Sudha,9/2/14,12/8/14,TR,4:30 PM,5:45 PM,M010 208,Computer Lab,17,1,Geographic Information Systems,Eaton Hall,Eaton 208 
GRK 0001 01,Elem Ancient Greek I,LEC,Hirsch Steven W,9/2/14,12/8/14,TR,3:00 PM,4:15 PM,M010 202,Classroom,9,1,Greek,Eaton Hall,Eaton 202
GRK 0007 01,Greek Classics,LEC,Beaulieu Marie-Claire,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M010 124,Seminar Room,5,1,Greek,Eaton Hall,Eaton 124
GRK 0102 01,Greek Drama,LEC,Mahoney Anne,9/2/14,12/8/14,TWF,9:30 AM,10:20 AM,M010 123,Seminar Room,4,1,Greek,Eaton Hall,Eaton 123
GRK 0120 01,Review and Readings,LEC,Beaulieu Marie-Claire,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M010 124,Seminar Room,2,1,Greek,Eaton Hall,Eaton 124
HEB 0001 A,Elementary Hebrew,LEC,Kimelman Hava,9/2/14,12/8/14,F,10:30 AM,11:20 AM,M086 103,Classroom,14,1,Hebrew,Olin Center,Olin 103
HEB 0001 A,Elementary Hebrew,LEC,Kimelman Hava,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M086 103,Classroom,14,1,Hebrew,Olin Center,Olin 103
HEB 0001 B,Elementary Hebrew,LEC,Kimelman Hava,9/2/14,12/8/14,F,1:30 PM,2:20 PM,M086 103,Classroom,10,1,Hebrew,Olin Center,Olin 103
HEB 0001 B,Elementary Hebrew,LEC,Kimelman Hava,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M086 103,Classroom,10,1,Hebrew,Olin Center,Olin 103
HEB 0003 A,Intermediate Hebrew,LEC,Harari-Spencer Hedda,9/2/14,12/8/14,M,9:30 AM,10:20 AM,M086 318,Classroom,8,1,Hebrew,Olin Center,Olin 318
HEB 0003 A,Intermediate Hebrew,LEC,Harari-Spencer Hedda,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M086 318,Classroom,8,1,Hebrew,Olin Center,Olin 318
HEB 0021 01,Conversation/composition,LEC,Harari-Spencer Hedda,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M086 334,Classroom,9,1,Hebrew,Olin Center,Olin Center Room 334
HEB 0121 01,Composition & Conversat,LEC,Harari-Spencer Hedda,9/2/14,12/8/14,TR,3:00 PM,4:15 PM,M086 334,Classroom,3,1,Hebrew,Olin Center,Olin Center Room 334
HIST 0005 01,History Of Consumption,LEC,Baghdiantz-McCabe Ina,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M007 001,Classroom,120,1,History,Braker Hall,Braker 001
HIST 0009 01,Hist of Christianity 1,LEC,Eyl Jennifer,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M024 314,Classroom,13,1,History,Tisch Library,Tisch 314
HIST 0014 01,Hist Persp/crises Africa,LEC,TBD,9/2/14,12/8/14,TR,4:30 PM,5:45 PM,M002 002,Classroom,0,1,History,Bromfield Pearson,Bromfield-Pearson 002
HIST 0022 27,The Changing Amer Nation,LEC,Ueda Reed T,9/2/14,12/8/14,T,1:30 PM,4:00 PM,M007 223,Classroom,16,1,History,Braker Hall,Braker 223
HIST 0028 04,Us Foreign Relat To 1900,LEC,Ekbladh David,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M027 113,Classroom,51,1,History,Paige Hall,Paige Crane Room
HIST 0032 05,Rise of the Modern Woman,LEC,Drachman Virginia G,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M040 006,Classroom,24,1,History,Jackson Gym,Jackson 006
HIST 0034 06,Afr Am Us Hist Since1865,LEC,Joseph Peniel E.,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M022 152,Classroom,11,1,History,Robinson Hall,Robinson 152
HIST 0040 01,China To The Opium War,LEC,Brazelton Mary,9/2/14,12/8/14,MW,4:30 PM,5:45 PM,M002 006,Classroom,25,1,History,Bromfield Pearson,Bromfield-Pearson 006
HIST 0042 07,Japan To 1868,LEC,Leupp Gary,9/2/14,12/8/14,MWF,10:30 AM,11:20 AM,M038 016,Classroom,18,1,History,East Hall,East 016
HIST 0046 08,Modern South Asia,LEC,Jalal Ayesha,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M024 304,Classroom,14,1,History,Tisch Library,Tisch 304
HIST 0050 01,Hist Of Ancient Greece,LEC,Hirsch Steven W,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M010 201,Classroom,23,1,History,Eaton Hall,Eaton 201 
HIST 0050 R01,Hist Of Ancient Greece,RCT,Hirsch Steven W,9/2/14,12/8/14,R,9:30 AM,10:20 AM,M010 202,Classroom,5,1,History,Eaton Hall,Eaton 202
HIST 0050 R02,Hist Of Ancient Greece,RCT,Hirsch Steven W,9/2/14,12/8/14,R,4:30 PM,5:25 PM,M010 206,Classroom,11,1,History,Eaton Hall,Eaton 206
HIST 0050 R03,Hist Of Ancient Greece,RCT,Hirsch Steven W,9/2/14,12/8/14,F,9:30 AM,10:20 AM,M010 202,Classroom,7,1,History,Eaton Hall,Eaton 202
HIST 0053 09,Europe To 1815,LEC,Proctor David John,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M007 001,Classroom,80,1,History,Braker Hall,Braker 001
HIST 0053 RA,Europe To 1815,RCT,Proctor David John,9/2/14,12/8/14,R,9:30 AM,10:20 AM,M010 333,Classroom,16,1,History,Eaton Hall,Eaton 333
HIST 0053 RB,Europe To 1815,RCT,Proctor David John,9/2/14,12/8/14,R,6:00 PM,6:50 PM,M010 333,Classroom,20,1,History,Eaton Hall,Eaton 333
HIST 0053 RC,Europe To 1815,RCT,Proctor David John,9/2/14,12/8/14,R,7:30 PM,8:15 PM,M010 333,Classroom,7,1,History,Eaton Hall,Eaton 333
HIST 0053 RD,Europe To 1815,RCT,Proctor David John,9/2/14,12/8/14,F,10:30 AM,11:20 AM,M010 333,Classroom,14,1,History,Eaton Hall,Eaton 333
HIST 0053 RE,Europe To 1815,RCT,Proctor David John,9/2/14,12/8/14,F,12:00 PM,12:50 PM,M010 333,Classroom,14,1,History,Eaton Hall,Eaton 333
HIST 0055 10,Europe Early Middle Ages,LEC,Marrone Steven P,9/2/14,12/8/14,M,4:30 PM,5:20 PM,M038 016,Classroom,16,1,History,East Hall,East 016
HIST 0055 10,Europe Early Middle Ages,LEC,Marrone Steven P,9/2/14,12/8/14,TR,4:30 PM,5:20 PM,M038 016,Classroom,16,1,History,East Hall,East 016
HIST 0057 11,Renaisssance&reformation,LEC,Rankin Alisha,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M004 114,Classroom,17,1,History,Barnum Hall,Barnum 114
HIST 0058 01,Byzantine World,LEC,Proctor David John,9/2/14,12/8/14,MW,4:30 PM,5:45 PM,M007 001,Classroom,51,1,History,Braker Hall,Braker 001
HIST 0058 RA,Byzantine World,RCT,Proctor David John,9/2/14,12/8/14,R,1:30 PM,2:20 PM,M010 333,Classroom,17,1,History,Eaton Hall,Eaton 333
HIST 0058 RB,Byzantine World,RCT,Proctor David John,9/2/14,12/8/14,R,4:30 PM,5:45 PM,M010 333,Classroom,19,1,History,Eaton Hall,Eaton 333
HIST 0058 RC,Byzantine World,RCT,Proctor David John,9/2/14,12/8/14,F,1:30 PM,2:20 PM,M010 333,Classroom,10,1,History,Eaton Hall,Eaton 333
HIST 0058 RD,Byzantine World,RCT,Proctor David John,9/2/14,12/8/14,F,2:30 PM,3:20 PM,M010 333,Classroom,5,1,History,Eaton Hall,Eaton 333
HIST 0059 12,Europe 1914-2000,LEC,Foster Elizabeth,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M003 208,Classroom,34,1,History,Anderson Hall,Anderson 208
HIST 0064 13,Modern France,LEC,Foster Elizabeth,9/2/14,12/8/14,TR,3:00 PM,4:15 PM,M009 106,Classroom,13,1,History,Pearson Laboratory,Pearson 106
HIST 0065 14,Britain & British Empire,LEC,Malchow Howard L,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M002 005,Classroom,17,1,History,Bromfield Pearson,Bromfield-Pearson 005
HIST 0066 18,Spain And Empire,LEC,Schmidt Nowara Christopher,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M003 211,Classroom,17,1,History,Anderson Hall,Anderson 211
HIST 0068 27,Eur Intellectual Hist,LEC,Manjapra Kris K.,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M010 333,Classroom,11,1,History,Eaton Hall,Eaton 333
HIST 0070 15,Middle East To Ww I,LEC,Roberts Hugh,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M004 104,Classroom,31,1,History,Barnum Hall,Barnum 104
HIST 0076 01,Ancient Egypt,LEC,Harrington James Matthew,9/2/14,12/8/14,MW,4:30 PM,5:45 PM,M004 104,Classroom,24,1,History,Barnum Hall,Barnum 104
HIST 0083 02,Spec Top: North America,LEC,Field Kendra,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M019 013,Classroom,8,1,History,Aidekman Arts Center,Aidekman 013
HIST 0083 50,Spec Top: North America,LEC,Curtis Heather D,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M010 202,Classroom,1,1,History,Eaton Hall,Eaton 202
HIST 0093 09,Found Sem:north America,LEC,Joseph Peniel E.,9/2/14,12/8/14,M,1:30 PM,4:00 PM,M034 201,Seminar Room,6,1,History,Packard Hall,Packard Conference Room
HIST 0093 20,Found Sem:north America,LEC,Ekbladh David,9/2/14,12/8/14,W,1:30 PM,4:00 PM,M034 201,Seminar Room,12,1,History,Packard Hall,Packard Conference Room
HIST 0095 19,Foundation Sem: So Asia,LEC,Manjapra Kris K.,9/2/14,12/8/14,W,9:00 AM,11:30 AM,M038 015,Seminar Room,4,1,History,East Hall,East 015
HIST 0097 19,Found Sem:me & Cent Asia,LEC,Manz Beatrice Forbes,9/2/14,12/8/14,R,1:30 PM,4:00 PM,M024 316,Classroom,4,1,History,Tisch Library,Tisch 316
HIST 0102 20,Slavery/freedom Atlantic,LEC,Schmidt Nowara Christopher,9/2/14,12/8/14,W,9:00 AM,11:30 AM,M038 113,Seminar Room,8,1,History,East Hall,East 113
HIST 0116 20,Rev Central/south Amer,LEC,Winn Peter,9/2/14,12/8/14,T,1:20 PM,4:20 PM,M006 100,Classroom,12,1,History,Lane Hall,Lane 100
HIST 0121 21,Courtship Modern America,LEC,Drachman Virginia G,9/2/14,12/8/14,R,1:30 PM,4:00 PM,M027 007,Seminar Room,17,1,History,Paige Hall,Paige 007
HIST 0135 22,Gender&sexuality Jpn Hst,LEC,Leupp Gary,9/2/14,12/8/14,R,1:30 PM,4:00 PM,M006 100A,Classroom,12,1,History,Lane Hall,Lane 100A
HIST 0150 01,Ancient Grk/rom Medicine,LEC,Phillips Joanne,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M010 333,Classroom,9,1,History,Eaton Hall,Eaton 333
HIST 0153 01,Martin Luther:man & Era,LEC,Brown Daniel W,9/2/14,12/8/14,TR,3:00 PM,4:15 PM,M086 318,Classroom,2,1,History,Olin Center,Olin 318
HIST 0155 22,Gen/Sexuality-Pre Mod Eur,LEC,Rankin Alisha,9/2/14,12/8/14,TR,3:00 PM,4:15 PM,M026 108,Classroom,6,1,History,Halligan Hall,Halligan 108
HIST 0173 01,Adv Sp Tp: North America,LEC,Curtis Heather D,9/2/14,12/8/14,W,9:00 AM,11:30 AM,M010 124,Seminar Room,0,1,History,Eaton Hall,Eaton 124
HIST 0175 23,Adv Sp Tps: South Asia,LEC,Jalal Ayesha,9/2/14,12/8/14,T,3:30 PM,5:20 PM,M151 205,Classroom,4,1,History,Cabot Center,Fletcher 205
HIST 0177 21,Adv Sp Tp: Me/c Asia,LEC,Roberts Hugh,9/2/14,12/8/14,TR,4:30 PM,5:45 PM,M010 204,Classroom,4,1,History,Eaton Hall,Eaton 204
HIST 0190 23,Rsrch Sem:wrld Transr Hs,LEC,Ueda Reed T,9/2/14,12/8/14,M,1:30 PM,4:00 PM,M024 316,Classroom,9,1,History,Tisch Library,Tisch 316
HIST 0196 01,Research Seminar: Europe,LEC,Marrone Steven P,9/2/14,12/8/14,T,1:30 PM,4:00 PM,M038 016,Classroom,8,1,History,East Hall,East 016
HIST 0196 02,Research Seminar: Europe,LEC,Malchow Howard L,9/2/14,12/8/14,T,1:30 PM,4:00 PM,M038 113,Seminar Room,9,1,History,East Hall,East 113
HIST 0200 15,Historiography,LEC,Baghdiantz-McCabe Ina,9/2/14,12/8/14,T,9:00 AM,11:30 AM,M038 113,Seminar Room,5,1,History,East Hall,East 113
HIST 0203 24,Comparative Colloquia,LEC,Winn Peter,9/2/14,12/8/14,M,6:00 PM,9:00 PM,M004 113,Seminar Room,9,1,History,Barnum Hall,Barnum 113
HIST 0285 01,Museums:mission&function,LEC,Robinson Cynthia,9/2/14,12/8/14,R,6:00 PM,9:00 PM,M024 314,Classroom,3,1,History,Tisch Library,Tisch 314
HIST 0285 02,Museums:mission&function,LEC,Iacobucci Cara M,9/2/14,12/8/14,R,6:00 PM,9:00 PM,M024 316,Classroom,3,1,History,Tisch Library,Tisch 316
ILVS 0050 01,Intro To Film Studies,LEC,Marquette Scarlet,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M006 100,Classroom,13,1,International Literary and Visual Studies,Lane Hall,Lane 100
ILVS 0050 R,Intro To Film Studies,RCT,Marquette Scarlet,9/2/14,12/8/14,T,6:30 PM,9:30 PM,M024 316,Classroom,11,1,International Literary and Visual Studies,Tisch Library,Tisch 316
ILVS 0055 01,Cult Hist Mod Mid East,LEC,Rastegar Kamran,9/2/14,12/8/14,TR,3:00 PM,4:15 PM,M086 012,Classroom,8,1,International Literary and Visual Studies,Olin Center,Olin 012
ILVS 0091 01,Special Topics,LEC,Carleton Gregory,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M086 012,Classroom,8,1,International Literary and Visual Studies,Olin Center,Olin 012
ILVS 0091 02,Special Topics,LEC,Rastegar Kamran,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M086 116,Classroom,15,1,International Literary and Visual Studies,Olin Center,Olin 116
ILVS 0091 03,Special Topics,LEC,Edelman Lee C,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M024 304,Classroom,8,1,International Literary and Visual Studies,Tisch Library,Tisch 304
ILVS 0091 03R,Special Topics,RCT,Edelman Lee C,9/2/14,12/8/14,R,6:30 PM,9:00 PM,M024 304,Classroom,7,1,International Literary and Visual Studies,Tisch Library,Tisch 304
ILVS 0091 04,Special Topics,LEC,Lowe Lisa,9/2/14,12/8/14,W,1:20 PM,4:20 PM,M010 333,Classroom,0,1,International Literary and Visual Studies,Eaton Hall,Eaton 333
ILVS 0091 05,Special Topics,LEC,Roy Modhumita,9/2/14,12/8/14,MW,3:00 PM,5:15 PM,M086 012,Classroom,0,1,International Literary and Visual Studies,Olin Center,Olin 012
ILVS 0091 06,Special Topics,LEC,Densky Doreen,9/2/14,12/8/14,MW,4:30 PM,5:45 PM,M086 002,Classroom,1,1,International Literary and Visual Studies,Olin Center,Olin 002
ILVS 0091 07,Special Topics,LEC,Romero Christiane M,9/2/14,12/8/14,R,3:00 PM,4:15 PM,M086 011,Classroom,0,1,International Literary and Visual Studies,Olin Center,Olin 011
ILVS 0091 07,Special Topics,LEC,Romero Christiane M,9/2/14,12/8/14,T,3:00 PM,5:20 PM,M086 011,Classroom,0,1,International Literary and Visual Studies,Olin Center,Olin 011
ILVS 0091 09,Special Topics,LEC,Lemelin Christopher,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M086 011,Classroom,0,1,International Literary and Visual Studies,Olin Center,Olin 011
ILVS 0091 10,Special Topics,LEC,North Paul,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M086 106,Lounge,1,1,International Literary and Visual Studies,Olin Center,Olin 106
ILVS 0100 01,Classics Of World Cinema,LEC,Rosenberg Joel,9/2/14,12/8/14,R,4:30 PM,5:45 PM,M024 310,Classroom,7,1,International Literary and Visual Studies,Tisch Library,Tisch 310
ILVS 0100 01,Classics Of World Cinema,LEC,Rosenberg Joel,9/2/14,12/8/14,T,4:30 PM,7:30 PM,M024 310,Classroom,7,1,International Literary and Visual Studies,Tisch Library,Tisch 310
ILVS 0191 01,Special Topics,LEC,Schub Claire,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M086 102,Classroom,1,1,International Literary and Visual Studies,Olin Center,Olin 102
INTR 0197 01,Senior Honors Thesis A,LEC,Masuoka Natalie,9/2/14,12/8/14,W,6:30 PM,9:00 PM,M017 112,Classroom,10,0,International Relations,Miner Hall,Miner 112
ITAL 0001 A,Elementary Italian I,LEC,Paolini Elena,9/2/14,12/8/14,MW,8:30 AM,9:20 AM,M086 108,Classroom,13,1,Italian,Olin Center,Olin 108
ITAL 0001 A,Elementary Italian I,LEC,Paolini Elena,9/2/14,12/8/14,R,9:30 AM,10:20 AM,M086 108,Classroom,13,1,Italian,Olin Center,Olin 108
ITAL 0001 B,Elementary Italian I,LEC,Perricone Isabella,9/2/14,12/8/14,TRF,12:00 PM,12:50 PM,M086 110,Classroom,10,1,Italian,Olin Center,Olin 110
ITAL 0001 C,Elementary Italian I,LEC,Merolla Carmela,9/2/14,12/8/14,MWF,1:30 PM,2:20 PM,M086 108,Classroom,15,1,Italian,Olin Center,Olin 108
ITAL 0001 D,Elementary Italian I,LEC,DiSilvio Patricia,9/2/14,12/8/14,TWR,4:30 PM,5:20 PM,M086 101,Classroom,5,1,Italian,Olin Center,Olin 101
ITAL 0002 A,Elementary Italian II,LEC,DiSilvio Patricia,9/2/14,12/8/14,M,4:30 PM,5:20 PM,M086 101,Classroom,7,1,Italian,Olin Center,Olin 101
ITAL 0002 A,Elementary Italian II,LEC,DiSilvio Patricia,9/2/14,12/8/14,TR,3:00 PM,3:50 PM,M086 101,Classroom,7,1,Italian,Olin Center,Olin 101
ITAL 0003 A,Intermediate Italian I,LEC,Paolini Elena,9/2/14,12/8/14,M,9:30 AM,10:20 AM,M086 111,Classroom,16,1,Italian,Olin Center,Olin 111
ITAL 0003 A,Intermediate Italian I,LEC,Paolini Elena,9/2/14,12/8/14,TR,10:30 AM,11:20 AM,M086 111,Classroom,16,1,Italian,Olin Center,Olin 111
ITAL 0003 B,Intermediate Italian I,LEC,Merolla Carmela,9/2/14,12/8/14,MWF,10:30 AM,11:20 AM,M086 101,Classroom,12,1,Italian,Olin Center,Olin 101
ITAL 0003 C,Intermediate Italian I,LEC,Perricone Isabella,9/2/14,12/8/14,F,2:30 PM,3:20 PM,M086 102,Classroom,8,1,Italian,Olin Center,Olin 102
ITAL 0003 C,Intermediate Italian I,LEC,Perricone Isabella,9/2/14,12/8/14,TR,1:30 PM,2:20 PM,M086 102,Classroom,8,1,Italian,Olin Center,Olin 102
ITAL 0003 RA,Intermediate Italian I,RCT,Pausini Cristina,9/2/14,12/8/14,M,12:00 PM,12:40 PM,M086 218,Classroom,9,1,Italian,Olin Center,Olin 218
ITAL 0003 RB,Intermediate Italian I,RCT,Pausini Cristina,9/2/14,12/8/14,M,12:45 PM,1:25 PM,M086 218,Classroom,9,1,Italian,Olin Center,Olin 218
ITAL 0003 RC,Intermediate Italian I,RCT,Pausini Cristina,9/2/14,12/8/14,W,12:00 PM,12:40 PM,M086 218,Classroom,10,1,Italian,Olin Center,Olin 218
ITAL 0003 RD,Intermediate Italian I,RCT,Pausini Cristina,9/2/14,12/8/14,W,12:45 PM,1:25 PM,M086 102,Classroom,8,1,Italian,Olin Center,Olin 102
ITAL 0004 A,Intermediate Italian II,LEC,Pausini Cristina,9/2/14,12/8/14,M,9:30 AM,10:20 AM,M086 112,Classroom,9,1,Italian,Olin Center,Olin 112
ITAL 0004 A,Intermediate Italian II,LEC,Pausini Cristina,9/2/14,12/8/14,TR,10:30 AM,11:20 AM,M086 112,Classroom,9,1,Italian,Olin Center,Olin 112
ITAL 0021 A,Comp & Conv I,LEC,Pausini Cristina,9/2/14,12/8/14,M,4:30 PM,5:20 PM,M086 218,Classroom,10,1,Italian,Olin Center,Olin 218
ITAL 0021 A,Comp & Conv I,LEC,Pausini Cristina,9/2/14,12/8/14,TR,3:00 PM,3:50 PM,M086 218,Classroom,10,1,Italian,Olin Center,Olin 218
ITAL 0031 A,Readings Ital Lit I,LEC,Baffoni-Licata Laura,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M086 108,Classroom,5,1,Italian,Olin Center,Olin 108
ITAL 0051 A,Dante's Inferno,LEC,Pollina Vincent,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M010 204,Classroom,14,1,Italian,Eaton Hall,Eaton 204
ITAL 0170 A,Lit Trad & Polit Ideol,LEC,Baffoni-Licata Laura,9/2/14,12/8/14,MW,6:00 PM,7:15 PM,M086 111,Classroom,9,1,Italian,Olin Center,Olin 111
JPN 0001 A,Elementary Japanese,LEC,Kagawa Kiyomi,9/2/14,12/8/14,F,10:30 AM,11:20 AM,M086 116,Classroom,18,1,Japanese,Olin Center,Olin 116
JPN 0001 A,Elementary Japanese,LEC,Kagawa Kiyomi,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M086 116,Classroom,18,1,Japanese,Olin Center,Olin 116
JPN 0001 B,Elementary Japanese,LEC,Koizumi Shiori,9/2/14,12/8/14,F,12:00 PM,12:50 PM,M086 116,Classroom,12,1,Japanese,Olin Center,Olin 116
JPN 0001 B,Elementary Japanese,LEC,Koizumi Shiori,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M086 116,Classroom,12,1,Japanese,Olin Center,Olin 116
JPN 0001 C,Elementary Japanese,LEC,Koizumi Shiori,9/2/14,12/8/14,F,2:30 PM,3:20 PM,M086 318,Classroom,10,1,Japanese,Olin Center,Olin 318
JPN 0001 C,Elementary Japanese,LEC,Koizumi Shiori,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M086 318,Classroom,10,1,Japanese,Olin Center,Olin 318
JPN 0001 D,Elementary Japanese,LEC,Koizumi Shiori,9/2/14,12/8/14,F,3:30 PM,4:20 PM,M086 103,Classroom,10,1,Japanese,Olin Center,Olin 103
JPN 0001 D,Elementary Japanese,LEC,Koizumi Shiori,9/2/14,12/8/14,TR,3:00 PM,4:15 PM,M086 006,Classroom,10,1,Japanese,Olin Center,Olin 006 
JPN 0003 A,Intermediate Japanese,LEC,Morita Kiyoko,9/2/14,12/8/14,F,10:30 AM,11:20 AM,M086 002,Classroom,12,1,Japanese,Olin Center,Olin 002
JPN 0003 A,Intermediate Japanese,LEC,Morita Kiyoko,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M086 002,Classroom,12,1,Japanese,Olin Center,Olin 002
JPN 0003 B,Intermediate Japanese,LEC,Kagawa Kiyomi,9/2/14,12/8/14,F,1:30 PM,2:20 PM,M086 012,Classroom,9,1,Japanese,Olin Center,Olin 012
JPN 0003 B,Intermediate Japanese,LEC,Kagawa Kiyomi,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M086 012,Classroom,9,1,Japanese,Olin Center,Olin 012
JPN 0003 C,Intermediate Japanese,LEC,Morita Kiyoko,9/2/14,12/8/14,F,2:30 PM,3:20 PM,M086 103,Classroom,6,1,Japanese,Olin Center,Olin 103
JPN 0003 C,Intermediate Japanese,LEC,Morita Kiyoko,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M086 318,Classroom,6,1,Japanese,Olin Center,Olin 318
JPN 0021 A,Reading & Conversation,LEC,Morita Kiyoko,9/2/14,12/8/14,F,1:30 PM,2:20 PM,M086 107,Classroom,7,1,Japanese,Olin Center,Olin 107
JPN 0021 A,Reading & Conversation,LEC,Morita Kiyoko,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M086 107,Classroom,7,1,Japanese,Olin Center,Olin 107
JPN 0062 01,Modern Japanese Lit,LEC,Hirata Hosea,9/2/14,12/8/14,TR,4:30 PM,5:45 PM,M086 002,Classroom,16,1,Japanese,Olin Center,Olin 002
JPN 0080 01,Japanese Film,LEC,Napier Susan,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M086 011,Classroom,19,1,Japanese,Olin Center,Olin 011
JPN 0080 R,Japanese Film,RCT,TBD,9/2/14,12/8/14,U,5:00 PM,7:30 PM,M024 316,Classroom,11,1,Japanese,Tisch Library,Tisch 316
JPN 0091 01,Special Topics,LEC,Carleton Gregory,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M086 012,Classroom,7,1,Japanese,Olin Center,Olin 012
JPN 0115 01,Haruki Murakami,LEC,Hirata Hosea,9/2/14,12/8/14,M,6:00 PM,9:00 PM,M086 116,Classroom,21,1,Japanese,Olin Center,Olin 116
JPN 0121 01,Advanced Japanese,LEC,Koizumi Shiori,9/2/14,12/8/14,F,9:30 AM,10:20 AM,M086 318,Classroom,5,1,Japanese,Olin Center,Olin 318
JPN 0121 01,Advanced Japanese,LEC,Koizumi Shiori,9/2/14,12/8/14,TW,9:05 AM,10:20 AM,M086 318,Classroom,5,1,Japanese,Olin Center,Olin 318
JPN 0123 01,Adv Readings Jpn Culture,LEC,Kagawa Kiyomi,9/2/14,12/8/14,MW,4:30 PM,5:45 PM,M086 334,Classroom,9,1,Japanese,Olin Center,Olin Center Room 334
JPN 0191 01,Special Topics/seminar,LEC,Napier Susan,9/2/14,12/8/14,TR,3:00 PM,4:15 PM,M086 107,Classroom,16,1,Japanese,Olin Center,Olin 107
JPN 0191 R,Special Topics/seminar,RCT,Napier Susan,9/2/14,12/8/14,U,6:00 PM,8:30 PM,M024 304,Classroom,13,1,Japanese,Tisch Library,Tisch 304
JS 0055 01,Tech & Jewish Oral Trad,LEC,Summit Jeffrey,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M195 251,Classroom,22,1,Judaic Studies,Music Building,Granoff 251
JS 0073 01,Aspects Sephardic Trad,LEC,Ascher Gloria J,9/2/14,12/8/14,TR,4:30 PM,5:45 PM,M086 116,Classroom,23,1,Judaic Studies,Olin Center,Olin 116
JS 0091 01,Ladino Lang & Culture,LEC,Ascher Gloria J,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M086 011,Classroom,15,1,Judaic Studies,Olin Center,Olin 011
JS 0136 01,King David Israelite Mon,LEC,Rosenberg Joel,9/2/14,12/8/14,W,4:30 PM,7:15 PM,M086 107,Classroom,12,1,Judaic Studies,Olin Center,Olin 107
JS 0164 01,Representing The Jew,LEC,Litvak Joseph D,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M010 203,Classroom,0,1,Judaic Studies,Eaton Hall,Eaton 203
LAT 0001 01,Elementary Latin I,LEC,Setnik Susan Ellen,9/2/14,12/8/14,M,9:30 AM,10:20 AM,M010 207,Classroom,13,1,Latin,Eaton Hall,Eaton 207
LAT 0001 01,Elementary Latin I,LEC,Setnik Susan Ellen,9/2/14,12/8/14,TR,10:30 AM,11:20 AM,M010 207,Classroom,13,1,Latin,Eaton Hall,Eaton 207
LAT 0001 02,Elementary Latin I,LEC,Rossi Andreola,9/2/14,12/8/14,MWF,10:30 AM,11:20 AM,M010 207,Classroom,8,1,Latin,Eaton Hall,Eaton 207
LAT 0002 01,Elementary Latin II,LEC,Harrington James Matthew,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M024 316,Classroom,6,1,Latin,Tisch Library,Tisch 316
LAT 0003 01,Intermediate Latin,LEC,Setnik Susan Ellen,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M024 310,Classroom,7,1,Latin,Tisch Library,Tisch 310
LAT 0003 02,Intermediate Latin,LEC,Rossi Andreola,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M010 206,Classroom,10,1,Latin,Eaton Hall,Eaton 206
LAT 0021 01,Latin Prose,LEC,Harrington James Matthew,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M010 207,Classroom,17,1,Latin,Eaton Hall,Eaton 207
LAT 0091 01,Special Topics,LEC,Rossi Andreola,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M010 322,Seminar Room,8,1,Latin,Eaton Hall,Eaton Hall Room 322
LAT 0120 01,Review and Readings,LEC,Harrington James Matthew,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M010 207,Classroom,6,1,Latin,Eaton Hall,Eaton 207
LAT 0181 01,Latin Seminars,LEC,Phillips Joanne,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M011 117,Classroom,6,1,Latin,177 College Avenue,177 College Ave 117
LING 0003 01,Language & Mind,LEC,Epstein Brian,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M022 253,Classroom,20,1,Linguistics,Robinson Hall,Robinson 253
LING 0015 01,Intro To Linguistics,LEC,Goldberg Ariel M,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M009 106,Classroom,20,1,Linguistics,Pearson Laboratory,Pearson 106
LING 0033 01,Logic,LEC,Russinoff Susan,9/2/14,12/8/14,TRF,12:00 PM,12:50 PM,M004 104,Classroom,10,1,Linguistics,Barnum Hall,Barnum 104
LING 0103 01,Logic,LEC,Smith George E,9/2/14,12/8/14,M,4:30 PM,5:20 PM,M017 225,Classroom,0,1,Linguistics,Miner Hall,Miner 225
LING 0103 01,Logic,LEC,Smith George E,9/2/14,12/8/14,TR,3:00 PM,3:50 PM,M017 225,Classroom,0,1,Linguistics,Miner Hall,Miner 225
LING 0113 01,Semantics,LEC,Jackendoff Ray S.,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M017 224,Classroom,7,1,Linguistics,Miner Hall,Miner 224
LING 0114 01,Ling Appr/2nd Lang Acq,LEC,Stoessel Saskia,9/2/14,12/8/14,W,4:30 PM,7:15 PM,M086 116,Classroom,4,1,Linguistics,Olin Center,Olin 116
LING 0155 01,Development Of Language,LEC,Gidney Calvin L,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M003 206,Classroom,6,1,Linguistics,Anderson Hall,Anderson 206
LING 0170 01,Indoeuropean Linguistics,LEC,Mahoney Anne,9/2/14,12/8/14,M,9:30 AM,10:20 AM,M010 209,Classroom,2,1,Linguistics,Eaton Hall,Eaton 209
LING 0170 01,Indoeuropean Linguistics,LEC,Mahoney Anne,9/2/14,12/8/14,TR,10:30 AM,11:20 AM,M010 209,Classroom,2,1,Linguistics,Eaton Hall,Eaton 209
MATH 0004 01,Fundamentals Of Math,LEC,Faubion Zachary,9/2/14,12/8/14,MWF,1:30 PM,2:20 PM,M002 006,Classroom,9,1,Mathematics,Bromfield Pearson,Bromfield-Pearson 006
MATH 0019 01,Math Of Social Choice,LEC,Garant Linda B,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M002 007,Classroom,37,1,Mathematics,Bromfield Pearson,Bromfield-Pearson 007
MATH 0019 02,Math Of Social Choice,LEC,Garant Linda B,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M002 101,Classroom,41,1,Mathematics,Bromfield Pearson,Bromfield-Pearson 101
MATH 0019 03,Math Of Social Choice,LEC,Bray Sarah,9/2/14,12/8/14,TR,3:00 PM,4:15 PM,M002 101,Classroom,26,1,Mathematics,Bromfield Pearson,Bromfield-Pearson 101
MATH 0019 04,Math Of Social Choice,LEC,Bray Sarah,9/2/14,12/8/14,TR,3:00 PM,4:15 PM,M002 101,Classroom,9,1,Mathematics,Bromfield Pearson,Bromfield-Pearson 101
MATH 0019 05,Math Of Social Choice,LEC,Bray Sarah,9/2/14,12/8/14,TR,3:00 PM,4:15 PM,M002 101,Classroom,4,1,Mathematics,Bromfield Pearson,Bromfield-Pearson 101
MATH 0019 06,Math Of Social Choice,LEC,Garant Linda B,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M002 007,Classroom,0,1,Mathematics,Bromfield Pearson,Bromfield-Pearson 007
MATH 0019 07,Math Of Social Choice,LEC,Garant Linda B,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M002 007,Classroom,2,1,Mathematics,Bromfield Pearson,Bromfield-Pearson 007
MATH 0019 08,Math Of Social Choice,LEC,Garant Linda B,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M002 101,Classroom,1,1,Mathematics,Bromfield Pearson,Bromfield-Pearson 101
MATH 0019 09,Math Of Social Choice,LEC,Garant Linda B,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M002 101,Classroom,1,1,Mathematics,Bromfield Pearson,Bromfield-Pearson 101
MATH 0021 01,Introductory Statistics,LEC,Chlebak Lise,9/2/14,12/8/14,TR,8:05 AM,9:20 AM,M002 005,Classroom,29,1,Mathematics,Bromfield Pearson,Bromfield-Pearson 005
MATH 0021 02,Introductory Statistics,LEC,Garmirian Patricia M.,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M002 002,Classroom,41,1,Mathematics,Bromfield Pearson,Bromfield-Pearson 002
MATH 0030 01,Intro To Calculus,LEC,Walsh Genevieve,9/2/14,12/8/14,TWF,9:30 AM,10:20 AM,M002 005,Classroom,18,1,Mathematics,Bromfield Pearson,Bromfield-Pearson 005
MATH 0030 02,Intro To Calculus,LEC,Kaufmann Gail F,9/2/14,12/8/14,M,9:30 AM,10:20 AM,M002 003,Classroom,32,1,Mathematics,Bromfield Pearson,Bromfield-Pearson 003
MATH 0030 02,Intro To Calculus,LEC,Kaufmann Gail F,9/2/14,12/8/14,TR,10:30 AM,11:20 AM,M002 003,Classroom,32,1,Mathematics,Bromfield Pearson,Bromfield-Pearson 003
MATH 0032 01,Calculus I,LEC,Borgers Christoph,9/2/14,12/8/14,TRF,8:30 AM,9:20 AM,M002 002,Classroom,43,1,Mathematics,Bromfield Pearson,Bromfield-Pearson 002
MATH 0032 02,Calculus I,LEC,Liang Hao,9/2/14,12/8/14,TRF,8:30 AM,9:20 AM,M002 007,Classroom,35,1,Mathematics,Bromfield Pearson,Bromfield-Pearson 007
MATH 0032 03,Calculus I,LEC,Hahn Bernadette Nadine,9/2/14,12/8/14,TRF,12:00 PM,12:50 PM,M002 003,Classroom,31,1,Mathematics,Bromfield Pearson,Bromfield-Pearson 003
MATH 0032 04,Calculus I,LEC,Kaufmann Gail F,9/2/14,12/8/14,TRF,12:00 PM,12:50 PM,M003 312,Classroom,41,1,Mathematics,Anderson Hall,Anderson 312
MATH 0032 05,Calculus I,LEC,Ruane Kim,9/2/14,12/8/14,TRF,12:00 PM,12:50 PM,M003 313,Classroom,39,1,Mathematics,Anderson Hall,Anderson 313
MATH 0032 06,Calculus I,LEC,Cunningham Charles E.,9/2/14,12/8/14,F,2:30 PM,3:20 PM,M002 003,Classroom,30,1,Mathematics,Bromfield Pearson,Bromfield-Pearson 003
MATH 0032 06,Calculus I,LEC,Cunningham Charles E.,9/2/14,12/8/14,TR,1:30 PM,2:20 PM,M002 003,Classroom,30,1,Mathematics,Bromfield Pearson,Bromfield-Pearson 003
MATH 0034 01,Calculus II,LEC,Hahn Marjorie G,9/2/14,12/8/14,TRF,8:30 AM,9:20 AM,M002 101,Classroom,14,1,Mathematics,Bromfield Pearson,Bromfield-Pearson 101
MATH 0034 02,Calculus II,LEC,Takeuchi Ryusei Melody,9/2/14,12/8/14,TWF,9:30 AM,10:20 AM,M002 003,Classroom,33,1,Mathematics,Bromfield Pearson,Bromfield-Pearson 003
MATH 0034 03,Calculus II,LEC,Glaser Mary E,9/2/14,12/8/14,TRF,12:00 PM,12:50 PM,M002 101,Classroom,35,1,Mathematics,Bromfield Pearson,Bromfield-Pearson 101
MATH 0034 04,Calculus II,LEC,Hahn Marjorie G,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M002 006,Classroom,21,1,Mathematics,Bromfield Pearson,Bromfield-Pearson 006
MATH 0036 01,Applied Calculus II,LEC,Healy Brendan B.,9/2/14,12/8/14,TRF,8:05 AM,9:20 AM,M002 003,Classroom,28,1,Mathematics,Bromfield Pearson,Bromfield-Pearson 003
MATH 0036 02,Applied Calculus II,LEC,Faubion Zachary,9/2/14,12/8/14,MWF,10:30 AM,11:45 AM,M002 007,Classroom,41,1,Mathematics,Bromfield Pearson,Bromfield-Pearson 007
MATH 0036 03,Applied Calculus II,LEC,O'Donnell Christopher P.,9/2/14,12/8/14,TRF,12:00 PM,1:15 PM,M002 005,Classroom,34,1,Mathematics,Bromfield Pearson,Bromfield-Pearson 005
MATH 0039 01,Honors Calculus I-Ii,LEC,Nitecki Zbigniew H,9/2/14,12/8/14,MWF,10:30 AM,11:45 AM,M002 006,Classroom,12,1,Mathematics,Bromfield Pearson,Bromfield-Pearson 006
MATH 0042 01,Calculus III,LEC,Taylor Kye,9/2/14,12/8/14,TRF,8:30 AM,9:20 AM,M002 006,Classroom,35,1,Mathematics,Bromfield Pearson,Bromfield-Pearson 006
MATH 0042 02,Calculus III,LEC,Adler James,9/2/14,12/8/14,TWF,9:30 AM,10:20 AM,M002 007,Classroom,43,1,Mathematics,Bromfield Pearson,Bromfield-Pearson 007
MATH 0042 03,Calculus III,LEC,Gonzalez Fulton B,9/2/14,12/8/14,M,9:30 AM,10:20 AM,M002 006,Classroom,37,1,Mathematics,Bromfield Pearson,Bromfield-Pearson 006
MATH 0042 03,Calculus III,LEC,Gonzalez Fulton B,9/2/14,12/8/14,TR,10:30 AM,11:20 AM,M002 006,Classroom,37,1,Mathematics,Bromfield Pearson,Bromfield-Pearson 006
MATH 0042 04,Calculus III,LEC,Arvanitoyeorgos Andreas,9/2/14,12/8/14,MWF,10:30 AM,11:20 AM,M002 005,Classroom,32,1,Mathematics,Bromfield Pearson,Bromfield-Pearson 005
MATH 0042 05,Calculus III,LEC,Wolak Mathew T.,9/2/14,12/8/14,TRF,12:00 PM,12:50 PM,M002 006,Classroom,18,1,Mathematics,Bromfield Pearson,Bromfield-Pearson 006
MATH 0042 07,Calculus III,LEC,Lashuk Ilya,9/2/14,12/8/14,F,2:30 PM,3:20 PM,M002 002,Classroom,10,1,Mathematics,Bromfield Pearson,Bromfield-Pearson 002
MATH 0042 07,Calculus III,LEC,Lashuk Ilya,9/2/14,12/8/14,TR,1:30 PM,2:20 PM,M002 002,Classroom,10,1,Mathematics,Bromfield Pearson,Bromfield-Pearson 002
MATH 0051 01,Differential Equations,LEC,Borgers Christoph,9/2/14,12/8/14,M,9:30 AM,10:20 AM,M002 005,Classroom,14,1,Mathematics,Bromfield Pearson,Bromfield-Pearson 005
MATH 0051 01,Differential Equations,LEC,Borgers Christoph,9/2/14,12/8/14,TR,10:30 AM,11:20 AM,M002 005,Classroom,14,1,Mathematics,Bromfield Pearson,Bromfield-Pearson 005
MATH 0051 02,Differential Equations,LEC,Taylor Kye,9/2/14,12/8/14,TRF,12:00 PM,12:50 PM,M002 007,Classroom,41,1,Mathematics,Bromfield Pearson,Bromfield-Pearson 007
MATH 0051 03,Differential Equations,LEC,Taylor Kye,9/2/14,12/8/14,F,2:30 PM,3:20 PM,M003 313,Classroom,32,1,Mathematics,Anderson Hall,Anderson 313
MATH 0051 03,Differential Equations,LEC,Taylor Kye,9/2/14,12/8/14,TR,1:30 PM,2:20 PM,M003 313,Classroom,32,1,Mathematics,Anderson Hall,Anderson 313
MATH 0061 01,Discrete Mathematics,LEC,Glaser Mary E,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M002 002,Classroom,27,1,Mathematics,Bromfield Pearson,Bromfield-Pearson 002
MATH 0061 02,Discrete Mathematics,LEC,Boghosian Bruce M,9/2/14,12/8/14,WF,10:30 AM,11:45 AM,M002 101,Classroom,18,1,Mathematics,Bromfield Pearson,Bromfield-Pearson 101
MATH 0061 03,Discrete Mathematics,LEC,Mustopa Yusuf,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M002 101,Classroom,6,1,Mathematics,Bromfield Pearson,Bromfield-Pearson 101
MATH 0061 04,Discrete Mathematics,LEC,Eisenberg Andrew J.,9/2/14,12/8/14,TR,3:00 PM,4:15 PM,M002 007,Classroom,20,1,Mathematics,Bromfield Pearson,Bromfield-Pearson 007
MATH 0070 01,Linear Algebra,LEC,Ruane Kim,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M002 007,Classroom,37,1,Mathematics,Bromfield Pearson,Bromfield-Pearson 007
MATH 0070 02,Linear Algebra,LEC,Kilmer Misha E,9/2/14,12/8/14,TWF,9:30 AM,10:20 AM,M002 101,Classroom,31,1,Mathematics,Bromfield Pearson,Bromfield-Pearson 101
MATH 0070 03,Linear Algebra,LEC,Liang Hao,9/2/14,12/8/14,M,9:30 AM,10:20 AM,M003 210,Classroom,19,1,Mathematics,Anderson Hall,Anderson 210
MATH 0070 03,Linear Algebra,LEC,Liang Hao,9/2/14,12/8/14,TR,10:30 AM,11:20 AM,M003 210,Classroom,19,1,Mathematics,Anderson Hall,Anderson 210
MATH 0070 04,Linear Algebra,LEC,Mustopa Yusuf,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M002 101,Classroom,18,1,Mathematics,Bromfield Pearson,Bromfield-Pearson 101
MATH 0087 01,Mathematical Modeling,LEC,Adler James,9/2/14,12/8/14,WF,10:30 AM,11:45 AM,M003 312,Classroom,28,1,Mathematics,Anderson Hall,Anderson 312
MATH 0100 DI,Disc Grp/do Not Register,RCT,TBD,9/2/14,12/8/14,F,3:30 PM,7:00 PM,M002 005,Classroom,0,0,Mathematics,Bromfield Pearson,Bromfield-Pearson 005
MATH 0100 DI,Disc Grp/do Not Register,RCT,TBD,9/2/14,12/8/14,MTWRF,4:30 PM,7:00 PM,M002 003,Classroom,0,0,Mathematics,Bromfield Pearson,Bromfield-Pearson 003
MATH 0126 01,Numerical Analysis,LEC,Hu Xiaozhe,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M002 005,Classroom,26,1,Mathematics,Bromfield Pearson,Bromfield-Pearson 005
MATH 0135 01,Real Analysis I,LEC,Quinto Eric Todd,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M002 002,Classroom,41,1,Mathematics,Bromfield Pearson,Bromfield-Pearson 002
MATH 0135 02,Real Analysis I,LEC,Tu Loring W,9/2/14,12/8/14,F,3:30 PM,4:20 PM,M002 007,Classroom,20,1,Mathematics,Bromfield Pearson,Bromfield-Pearson 007
MATH 0135 02,Real Analysis I,LEC,Tu Loring W,9/2/14,12/8/14,MW,3:00 PM,3:50 PM,M002 007,Classroom,20,1,Mathematics,Bromfield Pearson,Bromfield-Pearson 007
MATH 0145 01,Abstract Algebra I,LEC,Teixidor I Bigas Montserrat,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M002 101,Classroom,39,1,Mathematics,Bromfield Pearson,Bromfield-Pearson 101
MATH 0151 01,Appl Of Advanced Calc,LEC,Kachanov Mark L,9/2/14,12/8/14,TR,3:00 PM,4:15 PM,M003 211,Classroom,0,1,Mathematics,Anderson Hall,Anderson 211
MATH 0161 01,Probability,LEC,Garmirian Patricia M.,9/2/14,12/8/14,MWF,10:30 AM,11:45 AM,M002 002,Classroom,47,1,Mathematics,Bromfield Pearson,Bromfield-Pearson 002
MATH 0211 01,Analysis,LEC,Nitecki Zbigniew H,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M002 003,Classroom,8,1,Mathematics,Bromfield Pearson,Bromfield-Pearson 003
MATH 0213 01,Complex Analysis,LEC,Gonzalez Fulton B,9/2/14,12/8/14,TR,3:00 PM,4:15 PM,M002 003,Classroom,7,1,Mathematics,Bromfield Pearson,Bromfield-Pearson 003
MATH 0215 01,Algebra,LEC,McNinch George,9/2/14,12/8/14,MWF,10:30 AM,11:20 AM,M002 003,Classroom,10,1,Mathematics,Bromfield Pearson,Bromfield-Pearson 003
MATH 0217 01,Geometry & Topology,LEC,Tu Loring W,9/2/14,12/8/14,MW,4:30 PM,5:45 PM,M002 005,Classroom,5,1,Mathematics,Bromfield Pearson,Bromfield-Pearson 005
MATH 0250 01,Graduate Special Topics:,LEC,Walsh Genevieve,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M002 001,Classroom,11,1,Mathematics,Bromfield Pearson,Bromfield-Pearson Hall Room 001
MATH 0251 01,LINEAR PARTIAL DIENTIAL EQ,LEC,Boghosian Bruce M,9/2/14,12/8/14,TWF,9:30 AM,10:20 AM,M002 006,Classroom,14,1,Mathematics,Bromfield Pearson,Bromfield-Pearson 006
ME 0025 01,Engineerng Materials,LEC,Saigal Anil,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M003 212,Classroom,19,1,Mechanical Engineering,Anderson Hall,Anderson 212
ME 0025 02,Engineerng Materials,LEC,Matson Douglas,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M003 208,Classroom,31,1,Mechanical Engineering,Anderson Hall,Anderson 208
ME 0025 L1,Engineerng Materials,LAB,Saigal Anil,9/2/14,12/8/14,F,10:30 AM,11:45 AM,M003 019,Class Laboratory,28,1,Mechanical Engineering,Anderson Hall,Anderson Hall Room 019
ME 0025 L2,Engineerng Materials,LAB,Saigal Anil,9/2/14,12/8/14,F,12:00 PM,1:15 PM,M003 019,Class Laboratory,22,1,Mechanical Engineering,Anderson Hall,Anderson Hall Room 019
ME 0037 01,Dynamics & Vibration,LEC,Misra Pratap,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M003 208,Classroom,22,1,Mechanical Engineering,Anderson Hall,Anderson 208
ME 0037 02,Dynamics & Vibration,LEC,White Robert D.,9/2/14,12/8/14,TR,3:00 PM,4:15 PM,M003 306,Classroom,25,1,Mechanical Engineering,Anderson Hall,Anderson 306
ME 0042 01,Machine Design,LEC,Matson Douglas,9/2/14,12/8/14,TR,8:05 AM,9:20 AM,M003 208,Classroom,12,1,Mechanical Engineering,Anderson Hall,Anderson 208
ME 0042 02,Machine Design,LEC,Leisk Gary,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M003 309,Classroom,34,1,Mechanical Engineering,Anderson Hall,Anderson 309
ME 0043 01,Senior Design Project,LEC,James Thomas P,9/2/14,12/8/14,TR,3:00 PM,4:15 PM,M003 208,Classroom,30,1,Mechanical Engineering,Anderson Hall,Anderson 208
ME 0043 02,Senior Design Project,LEC,Rogers Chris,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M003 211,Classroom,25,1,Mechanical Engineering,Anderson Hall,Anderson 211
ME 0084 01,Intro Robotics & Mech,LEC,Rogers Chris,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M003 306,Classroom,28,1,Mechanical Engineering,Anderson Hall,Anderson 306
ME 0102 01,Inventive Design,LEC,Leisk Gary,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M003 206,Classroom,16,1,Mechanical Engineering,Anderson Hall,Anderson 206
ME 0108 01,Modern Quality Cntrl,LEC,Saigal Anil,9/2/14,12/8/14,MW,4:30 PM,5:45 PM,M003 212,Classroom,16,1,Mechanical Engineering,Anderson Hall,Anderson 212
ME 0110 01,Thermal Management Elec,LEC,Hodes Marc S.,9/2/14,12/8/14,TR,6:00 PM,7:15 PM,M003 208,Classroom,4,1,Mechanical Engineering,Anderson Hall,Anderson 208
ME 0111 01,Therm-Fluid Transport I,LEC,Abedian Behrouz,9/2/14,12/8/14,MW,4:30 PM,5:45 PM,M003 208,Classroom,14,1,Mechanical Engineering,Anderson Hall,Anderson 208
ME 0122 01,Solid Mechanics,LEC,Kachanov Mark L,9/2/14,12/8/14,TR,6:00 PM,7:15 PM,M003 211,Classroom,14,1,Mechanical Engineering,Anderson Hall,Anderson 211
ME 0139 01,Acoustics,LEC,Moore James,9/2/14,12/8/14,TR,6:00 PM,7:15 PM,M003 306,Classroom,8,1,Mechanical Engineering,Anderson Hall,Anderson 306
ME 0149 01,Sp Topics - Engineering,LEC,Chiesa Luisa,9/2/14,12/8/14,MW,4:30 PM,5:45 PM,M003 211,Classroom,5,1,Mechanical Engineering,Anderson Hall,Anderson 211
ME 0150 01,Appld Mth For Engnrs,LEC,Kachanov Mark L,9/2/14,12/8/14,TR,3:00 PM,4:15 PM,M003 211,Classroom,15,1,Mechanical Engineering,Anderson Hall,Anderson 211
ME 0180 01,Digital Cntl/dynamic Sys,LEC,Messner William,9/2/14,12/8/14,TR,4:30 PM,5:45 PM,M003 211,Classroom,34,1,Mechanical Engineering,Anderson Hall,Anderson 211
ME 0291 01,Graduate Seminar,LEC,Polidora Lorin M.,9/2/14,12/8/14,R,12:00 PM,1:15 PM,M003 112,Classroom,41,0,Mechanical Engineering,Anderson Hall,Anderson 112 
ME 0293 01,Special Topics,LEC,Chiesa Luisa,9/2/14,12/8/14,MW,4:30 PM,5:45 PM,M003 211,Classroom,1,1,Mechanical Engineering,Anderson Hall,Anderson 211
ME 0293 02,Special Topics,LEC,Zimmerman Michael A,9/2/14,12/8/14,T,6:00 PM,9:00 PM,M003 309,Classroom,6,1,Mechanical Engineering,Anderson Hall,Anderson 309
ML 0114 01,Ling Appr/2nd Lang Acq,LEC,Stoessel Saskia,9/2/14,12/8/14,W,4:30 PM,7:15 PM,M086 116,Classroom,1,1,Modern Language,Olin Center,Olin 116
MUS 0001 01,Intro To Western Music,LEC,Campana Alessandra,9/2/14,12/8/14,TR,3:00 PM,4:15 PM,M195 155,Lecture Room,31,1,Music,Music Building,Granoff 155
MUS 0005 01,Music As Culture,LEC,Locke David,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M195 155,Lecture Room,69,1,Music,Music Building,Granoff 155
MUS 0010 01,Intro Music Theory,LEC,McCann John,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M195 155,Lecture Room,27,1,Music,Music Building,Granoff 155
MUS 0010 02,Intro Music Theory,LEC,McLaughlin Michael G,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M195 271,Lecture Room,28,1,Music,Music Building,Granoff 271
MUS 0010 03,Intro Music Theory,LEC,Page John,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M195 271,Lecture Room,28,1,Music,Music Building,Granoff 271
MUS 0015 01,Introduction To Piano,LEC,Michelin Fernando,9/2/14,12/8/14,T,9:00 AM,10:15 AM,M195 252,Computer Lab,9,0,Music,Music Building,Granoff 252
MUS 0033 01,MusicTechDigital Cult,LEC,Auner Joseph H.,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M195 155,Lecture Room,44,1,Music,Music Building,Granoff 155
MUS 0039 01,History African Am Music,LEC,Pennington Stephan,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M195 155,Lecture Room,53,1,Music,Music Building,Granoff 155
MUS 0041 01,History Of Blues,LEC,Ullman Michael,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M195 155,Lecture Room,30,1,Music,Music Building,Granoff 155
MUS 0055 01,Tech and Jewish Oral Trad,LEC,Summit Jeffrey,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M195 251,Classroom,3,1,Music,Music Building,Granoff 251
MUS 0064 01,Computer Tools-Musicians,LEC,Lehrman Paul David,9/2/14,12/8/14,MW,4:30 PM,5:45 PM,M195 252,Computer Lab,12,1,Music,Music Building,Granoff 252
MUS 0065 01,Mus Recording/production,LEC,Lehrman Paul David,9/2/14,12/8/14,TR,3:00 PM,4:15 PM,M195 252,Computer Lab,5,1,Music,Music Building,Granoff 252
MUS 0067 01,Comp Visual Med & Music,LEC,Roustom Kareem J,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M195 252,Computer Lab,3,1,Music,Music Building,Granoff 252
MUS 0067 01,Comp Visual Med & Music,LEC,Roustom Kareem J,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M195 271,Lecture Room,3,1,Music,Music Building,Granoff 271
MUS 0069 01,Tufts Concert Choir,LEC,Kirsch Jamie,9/2/14,12/8/14,MW,4:30 PM,5:45 PM,M195 120,Assembly,62,0.5,Music,Music Building,Granoff - Distler
MUS 0069 NC,Tufts Concert Choir- No Credit,LEC,Kirsch Jamie,9/2/14,12/8/14,MW,4:30 PM,5:45 PM,M195 120,Assembly,1,0,Music,Music Building,Granoff - Distler
MUS 0070 01,Tufts Chamber Singers,LEC,Kirsch Jamie,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M195 120,Assembly,27,0.5,Music,Music Building,Granoff - Distler
MUS 0070 NC,Chamber Singers- No credit,LEC,Kirsch Jamie,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M195 120,Assembly,0,0,Music,Music Building,Granoff - Distler
MUS 0072 01,Gospel Choir,LEC,Coleman David F.,9/2/14,12/8/14,F,3:30 PM,5:30 PM,M195 120,Assembly,186,0.5,Music,Music Building,Granoff - Distler
MUS 0072 LA,Gospel Choir,LAB,Coleman David F.,9/2/14,12/8/14,M,4:30 PM,5:45 PM,M195 155,Lecture Room,65,0.5,Music,Music Building,Granoff 155
MUS 0072 LB,Gospel Choir,LAB,Coleman David F.,9/2/14,12/8/14,T,4:30 PM,5:45 PM,M195 155,Lecture Room,68,0.5,Music,Music Building,Granoff 155
MUS 0072 LC,Gospel Choir,LAB,Coleman David F.,9/2/14,12/8/14,W,1:30 PM,2:45 PM,M195 155,Lecture Room,53,0.5,Music,Music Building,Granoff 155
MUS 0072 NC,Gospel Choir- No Credit,LEC,Coleman David F.,9/2/14,12/8/14,F,3:30 PM,5:30 PM,M195 120,Assembly,13,0,Music,Music Building,Granoff - Distler
MUS 0074 01,Opera Ensemble,LEC,Mastrodomenico Carol,9/2/14,12/8/14,TR,4:30 PM,6:30 PM,M195 271,Lecture Room,15,0.5,Music,Music Building,Granoff 271
MUS 0074 NC,Opera Ensemble- No Credit,LEC,Mastrodomenico Carol,9/2/14,12/8/14,TR,4:30 PM,6:30 PM,M195 271,Lecture Room,1,0,Music,Music Building,Granoff 271
MUS 0077 01,Tufts Jazz Orchestra,LEC,Smith Joel Larue,9/2/14,12/8/14,TR,4:30 PM,6:30 PM,M195 075,Classroom,11,0.5,Music,Music Building,Granoff 075
MUS 0077 NC,Tufts Jazz Orchestra No Credit,LEC,Smith Joel Larue,9/2/14,12/8/14,TR,4:30 PM,6:30 PM,M195 075,Classroom,0,0,Music,Music Building,Granoff 075
MUS 0078 01,Jazz Improvisation Ensem,LEC,Ahlstrand Paul,9/2/14,12/8/14,M,6:45 PM,9:45 PM,M019 021CO,Open Laboratory,7,0.5,Music,Aidekman Arts Center,Granoff Music Room 021
MUS 0078 02,Jazz Improvisation Ensem,LEC,Smith Joel Larue,9/2/14,12/8/14,T,6:45 PM,9:45 PM,M019 021CO,Open Laboratory,5,0.5,Music,Aidekman Arts Center,Granoff Music Room 021
MUS 0078 NC,Jazz-Improv Ensemble No CR,LEC,Ahlstrand Paul,9/2/14,12/8/14,M,6:45 PM,9:45 PM,M019 021CO,Open Laboratory,1,0,Music,Aidekman Arts Center,Granoff Music Room 021
MUS 0078 NC2,Jazz-Improv Ensemble No CR,LEC,Smith Joel Larue,9/2/14,12/8/14,T,6:45 PM,9:45 PM,M019 021CO,Open Laboratory,0,0,Music,Aidekman Arts Center,Granoff Music Room 021
MUS 0080 01,Tufts Symphony Orchestra,LEC,Page John,9/2/14,12/8/14,TR,4:30 PM,5:45 PM,M195 120,Assembly,51,0.5,Music,Music Building,Granoff - Distler
MUS 0080 NC,Tufts Symphony Orch No Credit,LEC,Page John,9/2/14,12/8/14,TR,4:30 PM,5:45 PM,M195 120,Assembly,5,0,Music,Music Building,Granoff - Distler
MUS 0081 01,Chamber Orchestra,LEC,Page John,9/2/14,12/8/14,TR,3:00 PM,4:15 PM,M195 120,Assembly,5,0.5,Music,Music Building,Granoff - Distler
MUS 0081 NC,Chamber Orchestra No Credit,LEC,Page John,9/2/14,12/8/14,TR,3:00 PM,4:15 PM,M195 120,Assembly,0,0,Music,Music Building,Granoff - Distler
MUS 0083 01,University Wind Ensemble,LEC,McCann John,9/2/14,12/8/14,MW,4:30 PM,6:30 PM,M195 075,Classroom,36,0.5,Music,Music Building,Granoff 075
MUS 0083 NC,Wind Ensemble No Credit,LEC,McCann John,9/2/14,12/8/14,MW,4:30 PM,6:30 PM,M195 075,Classroom,4,0,Music,Music Building,Granoff 075
MUS 0084 01,Pep Band,LEC,TBD,9/2/14,12/8/14,TR,6:30 PM,8:30 PM,M195 075,Classroom,18,0.5,Music,Music Building,Granoff 075
MUS 0084 NC,Pep Band No Credit,LEC,TBD,9/2/14,12/8/14,TR,6:30 PM,8:30 PM,M195 075,Classroom,1,0,Music,Music Building,Granoff 075
MUS 0085 01,Electronic Music Ens,LEC,Lehrman Paul David,9/2/14,12/8/14,T,6:45 PM,9:45 PM,M195 252,Computer Lab,6,0.5,Music,Music Building,Granoff 252
MUS 0085 NC,Electronic Ensemble No Credit,LEC,Lehrman Paul David,9/2/14,12/8/14,T,6:45 PM,9:45 PM,M195 252,Computer Lab,0,0,Music,Music Building,Granoff 252
MUS 0086 01,New Music Ensemble/nme,LEC,Berman Donald,9/2/14,12/8/14,R,4:15 PM,6:15 PM,M195 251,Classroom,8,0.5,Music,Music Building,Granoff 251
MUS 0086 NC,New Music Ensemble No Credit,LEC,Berman Donald,9/2/14,12/8/14,R,4:15 PM,6:15 PM,M195 251,Classroom,0,0,Music,Music Building,Granoff 251
MUS 0087 01,Early Music Ensemble/eme,LEC,Hershey Jane,9/2/14,12/8/14,T,6:30 PM,9:30 PM,M019 027CO,Open Laboratory,3,0.5,Music,Aidekman Arts Center,Granoff Music Room 027
MUS 0087 NC,Early Music Ensemble No Credit,LEC,Hershey Jane,9/2/14,12/8/14,T,6:30 PM,9:30 PM,M019 027CO,Open Laboratory,1,0,Music,Aidekman Arts Center,Granoff Music Room 027
MUS 0088 01,Flute Ensemble,LEC,Barwell Nina,9/2/14,12/8/14,M,7:15 PM,8:45 PM,M195 251,Classroom,9,0.5,Music,Music Building,Granoff 251
MUS 0088 NC,Flute Ensemble No Credit,LEC,Barwell Nina,9/2/14,12/8/14,M,7:15 PM,8:45 PM,M195 251,Classroom,0,0,Music,Music Building,Granoff 251
MUS 0091 01,African Mus Ens/kiniwe,LEC,Agbeli Victor Nani,9/2/14,12/8/14,M,3:00 PM,4:00 PM,M195 075,Classroom,25,0.5,Music,Music Building,Granoff 075
MUS 0091 01,African Mus Ens/kiniwe,LEC,Agbeli Victor Nani,9/2/14,12/8/14,W,3:00 PM,4:00 PM,M195 085,Lecture Room,25,0.5,Music,Music Building,Granoff 085
MUS 0091 02,African Mus Ens/kiniwe,LEC,Agbeli Victor Nani,9/2/14,12/8/14,M,6:30 PM,7:45 PM,M195 075,Classroom,11,0.5,Music,Music Building,Granoff 075
MUS 0091 02,African Mus Ens/kiniwe,LEC,Agbeli Victor Nani,9/2/14,12/8/14,W,6:30 PM,7:45 PM,M195 085,Lecture Room,11,0.5,Music,Music Building,Granoff 085
MUS 0091 NC,AFRICAN MUS ENS KINIWE NC,LEC,Agbeli Victor Nani,9/2/14,12/8/14,M,3:00 PM,4:00 PM,M195 075,Classroom,0,0,Music,Music Building,Granoff 075
MUS 0091 NC,AFRICAN MUS ENS KINIWE NC,LEC,Agbeli Victor Nani,9/2/14,12/8/14,W,3:00 PM,4:00 PM,M195 085,Lecture Room,0,0,Music,Music Building,Granoff 085
MUS 0091 NC2,AFRICAN MUS ENS KINIWE NC,LEC,Agbeli Victor Nani,9/2/14,12/8/14,M,6:30 PM,7:45 PM,M195 075,Classroom,2,0,Music,Music Building,Granoff 075
MUS 0091 NC2,AFRICAN MUS ENS KINIWE NC,LEC,Agbeli Victor Nani,9/2/14,12/8/14,W,6:30 PM,7:45 PM,M195 085,Lecture Room,2,0,Music,Music Building,Granoff 085
MUS 0092 01,Arb Mus Ens-Tufts Takht,LEC,Roustom Kareem J,9/2/14,12/8/14,M,6:00 PM,8:30 PM,M195 271,Lecture Room,10,0.5,Music,Music Building,Granoff 271
MUS 0092 NC,Arb Mus Ens Takht No Credit,LEC,Roustom Kareem J,9/2/14,12/8/14,M,6:00 PM,8:30 PM,M195 271,Lecture Room,0,0,Music,Music Building,Granoff 271
MUS 0093 01,Javanese Gamelan Ensembl,LEC,Drummond Barry,9/2/14,12/8/14,TR,6:30 PM,8:00 PM,M195 085,Lecture Room,13,0.5,Music,Music Building,Granoff 085
MUS 0093 NC,JAVANESE GAMELN ENS NO CR,LEC,Drummond Barry,9/2/14,12/8/14,TR,6:30 PM,8:00 PM,M195 085,Lecture Room,1,0,Music,Music Building,Granoff 085
MUS 0095 01,Klezmer Ens-Jumbo Knish,LEC,McLaughlin Michael G,9/2/14,12/8/14,W,6:30 PM,9:00 PM,M195 271,Lecture Room,7,0.5,Music,Music Building,Granoff 271
MUS 0095 NC,Klezmer Ensemble No Credit,LEC,McLaughlin Michael G,9/2/14,12/8/14,W,6:30 PM,9:00 PM,M195 271,Lecture Room,0,0,Music,Music Building,Granoff 271
MUS 0101 01,Prin Of Tonal Theory I,LEC,Kirsch Jamie,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M195 271,Lecture Room,20,1,Music,Music Building,Granoff 271
MUS 0101 02,Prin Of Tonal Theory I,LEC,Lehman Frank,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M195 251,Classroom,18,1,Music,Music Building,Granoff 251
MUS 0101 LA,Prin Of Tonal Theory I,RCT,McLaughlin Michael G,9/2/14,12/8/14,MW,3:00 PM,3:50 PM,M195 251,Classroom,19,1,Music,Music Building,Granoff 251
MUS 0101 LB,Prin Of Tonal Theory I,RCT,McLaughlin Michael G,9/2/14,12/8/14,TR,12:00 PM,12:50 PM,M195 251,Classroom,19,1,Music,Music Building,Granoff 251
MUS 0103 01,Prin Of Tonal Theory III,LEC,Lehman Frank,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M195 251,Classroom,3,1,Music,Music Building,Granoff 251
MUS 0118 01,Seminar: Composition,LEC,McDonald John,9/2/14,12/8/14,M,4:30 PM,6:30 PM,M195 251,Classroom,9,1,Music,Music Building,Granoff 251
MUS 0128 01,Jazz Improvisation,LEC,Smith Joel Larue,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M195 252,Computer Lab,7,1,Music,Music Building,Granoff 252
MUS 0142 01,Hst West Mus(ad900/1750),LEC,Bernstein Jane A,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M195 271,Lecture Room,17,1,Music,Music Building,Granoff 271
MUS 0145 01,American Music,LEC,Pennington Stephan,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M195 271,Lecture Room,7,1,Music,Music Building,Granoff 271
MUS 0151 01,Stud 20/21st Century Mus,LEC,Auner Joseph H.,9/2/14,12/8/14,R,9:00 AM,11:30 AM,M195 038,Lecture Room,6,1,Music,Music Building,Granoff 038
MUS 0180 01,Sounds Of Sufism,LEC,Jankowsky Richard,9/2/14,12/8/14,R,4:30 PM,7:00 PM,M195 038,Lecture Room,4,1,Music,Music Building,Granoff 038
MUS 0186 01,Ethno Theory And Prac,LEC,Locke David,9/2/14,12/8/14,TR,3:00 PM,4:15 PM,M195 251,Classroom,17,1,Music,Music Building,Granoff 251
MUS 0197 01,Special Studies,LEC,Campana Alessandra,9/2/14,12/8/14,T,4:30 PM,7:00 PM,M195 038,Lecture Room,6,1,Music,Music Building,Granoff 038
MUS 0201 01,Seminar - Music Research,LEC,Bernstein Jane A,9/2/14,12/8/14,T,9:00 AM,11:30 AM,M195 038,Lecture Room,8,1,Music,Music Building,Granoff 038
MUS 0202 01,Studies -Ethnomusicology,LEC,Jankowsky Richard,9/2/14,12/8/14,F,1:30 PM,4:00 PM,M195 038,Lecture Room,5,1,Music,Music Building,Granoff 038
NU 0128 01,Nutrition & Behavior,LEC,Goldsmith Marcy Coppelman,9/2/14,12/8/14,W,1:30 PM,4:00 PM,M013 101,Classroom,0,1,Nutrition Undergraduate,26 Winthrop Street,26 Winthrop St Room 101
NUTR 0204 01,Principles Epidemiology,LEC,Woodin Mark A,9/2/14,12/8/14,R,6:30 PM,9:00 PM,M003 112,Classroom,35,1,Nutrition,Anderson Hall,Anderson 112 
NUTR 0222 01,GendCult&conf Hu Emer,LEC,Mazurana Dyan,9/2/14,12/18/14,,,,M151 206,Classroom,5,1,Nutrition,Cabot Center,Fletcher 206
OTS 0101 01,Physiology,LEC,Leavis Paul C,9/2/14,12/8/14,F,8:30 AM,11:30 AM,M013 113,Classroom,26,1,Occupational Therapy,26 Winthrop Street,26 Winthrop St Room 113
OTS 0101 01,Physiology,LEC,Leavis Paul C,9/2/14,12/8/14,T,2:30 PM,5:30 PM,M013 113,Classroom,26,1,Occupational Therapy,26 Winthrop Street,26 Winthrop St Room 113
OTS 0102 01,Gross Anatomy,LEC,Sarikas Stephen,9/2/14,12/8/14,M,5:30 PM,8:15 PM,M013 113,Classroom,31,1,Occupational Therapy,26 Winthrop Street,26 Winthrop St Room 113
OTS 0102 02,Gross Anatomy,LEC,Pessina Monica A,9/2/14,12/8/14,R,9:30 AM,12:30 PM,M013 101,Classroom,0,1,Occupational Therapy,26 Winthrop Street,26 Winthrop St Room 101
OTS 0102 LA,Gross Anatomy,LAB,Sarikas Stephen,9/2/14,12/8/14,T,6:00 PM,8:00 PM,M013 113,Classroom,15,1,Occupational Therapy,26 Winthrop Street,26 Winthrop St Room 113
OTS 0102 LB,Gross Anatomy,LAB,Sarikas Stephen,9/2/14,12/8/14,W,6:00 PM,8:00 PM,M013 113,Classroom,16,1,Occupational Therapy,26 Winthrop Street,26 Winthrop St Room 113
OTS 0102 LC,Gross Anatomy,LAB,Pessina Monica A,9/2/14,12/8/14,R,12:30 PM,1:30 PM,M013 113,Classroom,0,1,Occupational Therapy,26 Winthrop Street,26 Winthrop St Room 113
OTS 0104 01,Kinesiology,LEC,Martens Jean L,9/2/14,12/8/14,M,8:30 AM,11:30 AM,M013 113,Classroom,28,1,Occupational Therapy,26 Winthrop Street,26 Winthrop St Room 113
OTS 0105 01,Assistive Technology,LEC,Buxton Jennifer,9/2/14,12/8/14,T,5:30 PM,8:30 PM,M010 206,Classroom,19,0.5,Occupational Therapy,Eaton Hall,Eaton 206
OTS 0106 01,Occ & Adapt:child/adoles,LEC,Barnes Mary Alicia,9/2/14,12/8/14,T,9:00 AM,12:00 PM,M028 136,Classroom,34,1,Occupational Therapy,Science and Technology Center,Sci-Tech 136
OTS 0137 01,Mandatory Fieldwork Sem,LEC,Roberts Michael E.,9/2/14,12/8/14,T,1:00 PM,2:00 PM,M013 113,Classroom,52,0,Occupational Therapy,26 Winthrop Street,26 Winthrop St Room 113
OTS 0205 01,Cl Reasoning Sem I,LEC,Harney Jessica,9/2/14,12/8/14,R,8:50 AM,11:30 AM,M027 113,Classroom,33,0.5,Occupational Therapy,Paige Hall,Paige Crane Room
OTS 0206 01,Clinical Reason Sem II,LEC,Trudeau Scott A,9/2/14,12/8/14,R,8:30 AM,11:30 AM,M013 113,Classroom,51,0.5,Occupational Therapy,26 Winthrop Street,26 Winthrop St Room 113
OTS 0208 01,Clinical Reason Sem IV,LEC,May-Benson Teresa A.,9/2/14,12/8/14,M,3:00 PM,5:20 PM,M013 108,Classroom,7,1,Occupational Therapy,26 Winthrop Street,26 Winthrop St Room 108
OTS 0209 01,Clinical Research,LEC,Ladin Keren,9/2/14,12/8/14,M,1:30 PM,4:30 PM,M013 101,Classroom,14,1,Occupational Therapy,26 Winthrop Street,26 Winthrop St Room 101
OTS 0219 01,Grp Theory&comm Practice,LEC,Barnes Mary Alicia,9/2/14,12/8/14,M,9:30 AM,11:20 AM,M013 101,Classroom,11,1,Occupational Therapy,26 Winthrop Street,26 Winthrop St Room 101
OTS 0219 02,Grp Theory&comm Practice,LEC,Barnes Mary Alicia,9/2/14,12/8/14,M,1:30 PM,3:20 PM,M013 106,Classroom,9,1,Occupational Therapy,26 Winthrop Street,26 Winthrop St Room 106
OTS 0219 LA,Grp Theory&comm Practice,LAB,Barnes Mary Alicia,9/2/14,12/8/14,F,11:30 AM,12:20 PM,M013 113,Classroom,11,1,Occupational Therapy,26 Winthrop Street,26 Winthrop St Room 113
OTS 0219 LB,Grp Theory&comm Practice,LAB,Barnes Mary Alicia,9/2/14,12/8/14,F,12:30 PM,1:20 PM,M013 113,Classroom,9,1,Occupational Therapy,26 Winthrop Street,26 Winthrop St Room 113
OTS 0224 01,Ot Practice-Physical Dys,LEC,Brooks Janet Curran,9/2/14,12/8/14,W,8:50 AM,11:50 AM,M013 113,Classroom,26,1,Occupational Therapy,26 Winthrop Street,26 Winthrop St Room 113
OTS 0224 LA,Ot Practice-Physical Dys,LAB,Brooks Janet Curran,9/2/14,12/8/14,M,1:30 PM,3:30 PM,M013 113,Classroom,12,1,Occupational Therapy,26 Winthrop Street,26 Winthrop St Room 113
OTS 0224 LB,Ot Practice-Physical Dys,LAB,Brooks Janet Curran,9/2/14,12/8/14,M,3:30 PM,5:20 PM,M013 113,Classroom,11,1,Occupational Therapy,26 Winthrop Street,26 Winthrop St Room 113
OTS 0224 PP,Ot Practice-Physical Dys,LAB,Brooks Janet Curran,9/2/14,12/8/14,M,1:30 PM,2:50 PM,M013 113,Classroom,3,1,Occupational Therapy,26 Winthrop Street,26 Winthrop St Room 113
OTS 0226 01,Ot Practice In Pediatric,LEC,Morris Margaret L,9/2/14,12/8/14,T,9:00 AM,12:00 PM,M013 113,Classroom,33,1,Occupational Therapy,26 Winthrop Street,26 Winthrop St Room 113
OTS 0226 01,Ot Practice In Pediatric,LEC,Morris Margaret L,9/2/14,12/8/14,W,1:30 PM,4:30 PM,M013 113,Classroom,33,1,Occupational Therapy,26 Winthrop Street,26 Winthrop St Room 113
OTS 0227 01,Ot Prac-Psychosocial Dys,LEC,Trudeau Scott A,9/2/14,12/8/14,F,1:30 PM,4:30 PM,M013 113,Classroom,27,1,Occupational Therapy,26 Winthrop Street,26 Winthrop St Room 113
OTS 0227 LA,Ot Prac-Psychosocial Dys,LAB,Trudeau Scott A,9/2/14,12/8/14,R,12:00 PM,3:00 PM,M013 101,Classroom,27,1,Occupational Therapy,26 Winthrop Street,26 Winthrop St Room 101
OTS 0229 01,Ot Practice Older Adult,LEC,Trudeau Scott A,9/2/14,12/8/14,F,8:30 AM,11:30 AM,M003 313,Classroom,27,1,Occupational Therapy,Anderson Hall,Anderson 313
OTS 0232 01,Health & Comm Systems,LEC,Skeels Sarah Everhart,9/2/14,12/8/14,T,2:45 PM,5:00 PM,M196E 100,Classroom,52,0.5,Occupational Therapy,Sophia Gordon Hall,Sophia Gordon
OTS 0242 01,Health Cond:path/prev I,LEC,Harney Jessica,9/2/14,12/8/14,W,9:00 AM,11:00 AM,M028 136,Classroom,33,0.5,Occupational Therapy,Science and Technology Center,Sci-Tech 136
OTS 0274 01,Hand&upper Extr Rehab I,LEC,Brooks Janet Curran,9/2/14,12/8/14,M,5:30 PM,8:30 PM,M013 101,Classroom,18,0.5,Occupational Therapy,26 Winthrop Street,26 Winthrop St Room 101
OTS 0284 01,Programmatic Issues,LEC,Morris Margaret L,9/2/14,12/8/14,W,5:30 PM,8:30 PM,M013 106,Classroom,6,0.5,Occupational Therapy,26 Winthrop Street,26 Winthrop St Room 106
OTS 0288 01,Outcomes,LEC,Bedell Gary M.,9/2/14,12/8/14,T,5:30 PM,8:30 PM,M013 101,Classroom,10,0.5,Occupational Therapy,26 Winthrop Street,26 Winthrop St Room 101
OTS 0291 01,Phy Exercise&phy Perform,LEC,Leavis Paul C,9/2/14,12/8/14,R,5:30 PM,8:30 PM,M013 106,Classroom,5,0.5,Occupational Therapy,26 Winthrop Street,26 Winthrop St Room 106
OTS 0297 01,Pro Seminar,LEC,Schwartzberg Sharan L,9/2/14,12/8/14,M,5:30 PM,7:30 PM,M013 106,Classroom,9,0,Occupational Therapy,26 Winthrop Street,26 Winthrop St Room 106
PE 0001 A,Swimming I,LEC,Hoyt Adam N.,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M031 213,Sporting Facility,12,0.5,Physical Education,Cousens Gym,Cousens Gym Hamilton Pool
PE 0002 A,Swimming I,LEC,Hoyt Adam N.,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M031 213,Sporting Facility,13,0.5,Physical Education,Cousens Gym,Cousens Gym Hamilton Pool
PE 0006 A,Yoga,LEC,Randel Phoebe G.,9/2/14,12/8/14,WF,10:30 AM,11:45 AM,M040 112,Sporting Facility,24,0.5,Physical Education,Jackson Gym,Jackson Hall Gym
PE 0006 B,Yoga,LEC,McEldowney IV Elliot H,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M040 112,Sporting Facility,20,0.5,Physical Education,Jackson Gym,Jackson Hall Gym
PE 0006 C,Yoga,LEC,McEldowney IV Elliot H,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M040 112,Sporting Facility,28,0.5,Physical Education,Jackson Gym,Jackson Hall Gym
PE 0006 D,Yoga,LEC,Carroll Claire A,9/2/14,12/8/14,MW,9:00 AM,10:15 AM,M040 112,Sporting Facility,24,0.5,Physical Education,Jackson Gym,Jackson Hall Gym
PE 0008 A,Pilates,LEC,Graves Sharon F.,9/2/14,12/8/14,MW,4:30 PM,5:45 PM,M040 112,Sporting Facility,16,0.5,Physical Education,Jackson Gym,Jackson Hall Gym
PE 0010 A,Yogalates,LEC,Bigelow Nancy,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M202 201,Athletic Physical Edu,22,0.5,Physical Education,Tisch Sports & Fitness Center,Tisch Sports Multi-Purpose Rm
PE 0023 A,Ropes & Rocks,LEC,Berube Carla,9/2/14,12/8/14,W,1:20 PM,4:20 PM,M031 215,Sporting Facility,11,0.5,Physical Education,Cousens Gym,Cousens Gym Chase Gymnasium
PE 0041 A,Golf I,LEC,Shapiro Joshua M.,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M031 101,Athletic Physical Edu,15,0.5,Physical Education,Cousens Gym,Cousens Gym Carzo Cage
PE 0041 B,Golf I,LEC,Sheldon Jr Robert J,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M031 101,Athletic Physical Edu,18,0.5,Physical Education,Cousens Gym,Cousens Gym Carzo Cage
PE 0042 A,Spinning,LEC,Mattera Christine L.,9/2/14,12/8/14,TR,9:00 AM,10:15 AM,M202 201,Athletic Physical Edu,17,0.5,Physical Education,Tisch Sports & Fitness Center,Tisch Sports Multi-Purpose Rm
PE 0043 A,Muscle Conditioning,LEC,Carr Marlene,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M031 215,Sporting Facility,25,0.5,Physical Education,Cousens Gym,Cousens Gym Chase Gymnasium
PE 0045 A,Physical Fitness,LEC,Barker Sarah R,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M202 201,Athletic Physical Edu,19,0.5,Physical Education,Tisch Sports & Fitness Center,Tisch Sports Multi-Purpose Rm
PE 0045 B,Physical Fitness,LEC,Farrell Courtney,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M031 215,Sporting Facility,13,0.5,Physical Education,Cousens Gym,Cousens Gym Chase Gymnasium
PE 0046 A,Weight Training,LEC,Daly Michael P,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M031 204,Sporting Facility,16,0.5,Physical Education,Cousens Gym,Cousens Gym Ames Fitness Ctr
PE 0046 B,Weight Training,LEC,Murphy Brian F,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M031 204,Sporting Facility,17,0.5,Physical Education,Cousens Gym,Cousens Gym Ames Fitness Ctr
PE 0046 C,Weight Training,LEC,Berube Carla,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M031 204,Sporting Facility,14,0.5,Physical Education,Cousens Gym,Cousens Gym Ames Fitness Ctr
PE 0047 A,Aerobics - Step,LEC,Carr Marlene,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M031 215,Sporting Facility,29,0.5,Physical Education,Cousens Gym,Cousens Gym Chase Gymnasium
PE 0048 A,Strength Training-Women,LEC,Mattera Christine L.,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M031 204,Sporting Facility,16,0.5,Physical Education,Cousens Gym,Cousens Gym Ames Fitness Ctr
PE 0110 01,Independent Study,LEC,Starkweather Kyle,9/2/14,12/8/14,MW,6:00 PM,10:00 PM,M040 005,Classroom,1,1,Physical Education,Jackson Gym,Jackson 005
PE 0110 01,Independent Study,LEC,Starkweather Kyle,9/2/14,12/8/14,MW,6:00 PM,10:00 PM,M040 006,Classroom,1,1,Physical Education,Jackson Gym,Jackson 006
PE 0110 01,Independent Study,LEC,Starkweather Kyle,9/2/14,12/8/14,S,9:00 AM,5:00 PM,M040 005,Classroom,1,1,Physical Education,Jackson Gym,Jackson 005
PE 0110 01,Independent Study,LEC,Starkweather Kyle,9/2/14,12/8/14,S,9:00 AM,5:00 PM,M040 006,Classroom,1,1,Physical Education,Jackson Gym,Jackson 006
PE 0131 01,Emergency Care,LEC,Starkweather Kyle,9/2/14,12/8/14,MW,6:00 PM,10:00 PM,M040 005,Classroom,24,1,Physical Education,Jackson Gym,Jackson 005
PE 0131 01,Emergency Care,LEC,Starkweather Kyle,9/2/14,12/8/14,MW,6:00 PM,10:00 PM,M040 005,Classroom,24,1,Physical Education,Jackson Gym,Jackson 005
PE 0131 01,Emergency Care,LEC,Starkweather Kyle,9/2/14,12/8/14,S,9:00 AM,5:00 PM,M040 005,Classroom,24,1,Physical Education,Jackson Gym,Jackson 005
PE 0131 01,Emergency Care,LEC,Starkweather Kyle,9/2/14,12/8/14,S,9:00 AM,5:00 PM,M040 005,Classroom,24,1,Physical Education,Jackson Gym,Jackson 005
PHIL 0001 01,Intro To Philosophy,LEC,McConnell Jeffrey C,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M027 007,Seminar Room,19,1,Philosophy,Paige Hall,Paige 007
PHIL 0001 02,Intro To Philosophy,LEC,McConnell Jeffrey C,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M017 225,Classroom,14,1,Philosophy,Miner Hall,Miner 225
PHIL 0001 03,Intro To Philosophy,LEC,Russinoff Susan,9/2/14,12/8/14,TR,3:00 PM,4:15 PM,M017 224,Classroom,15,1,Philosophy,Miner Hall,Miner 224
PHIL 0001 04,Intro To Philosophy,LEC,Urbanek Valentina Maria,9/2/14,12/8/14,TR,4:30 PM,5:45 PM,M017 225,Classroom,14,1,Philosophy,Miner Hall,Miner 225
PHIL 0001 05,Intro To Philosophy,LEC,Urbanek Valentina Maria,9/2/14,12/8/14,TR,6:00 PM,7:15 PM,M017 225,Classroom,15,1,Philosophy,Miner Hall,Miner 225
PHIL 0001 06,Intro To Philosophy,LEC,Oliver Charles,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M017 221,Seminar Room,15,1,Philosophy,Miner Hall,Miner 221
PHIL 0001 07,Intro To Philosophy,LEC,Oliver Charles,9/2/14,12/8/14,MW,6:00 PM,7:15 PM,M017 224,Classroom,14,1,Philosophy,Miner Hall,Miner 224
PHIL 0001 08,Intro To Philosophy,LEC,Urbanek Valentina Maria,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M003 212,Classroom,15,1,Philosophy,Anderson Hall,Anderson 212
PHIL 0001 09,Intro To Philosophy,LEC,Phillips Christopher R M,9/2/14,12/8/14,MW,4:30 PM,5:45 PM,M017 224,Classroom,13,1,Philosophy,Miner Hall,Miner 224
PHIL 0001 10,Intro To Philosophy,LEC,Link Monica Wong,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M017 112,Classroom,15,1,Philosophy,Miner Hall,Miner 112
PHIL 0001 11,Intro To Philosophy,LEC,Link Monica Wong,9/2/14,12/8/14,TR,3:00 PM,4:15 PM,M017 112,Classroom,14,1,Philosophy,Miner Hall,Miner 112
PHIL 0003 01,Language & Mind,LEC,Epstein Brian,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M022 253,Classroom,37,1,Philosophy,Robinson Hall,Robinson 253
PHIL 0015 01,Intro To Linguistics,LEC,Goldberg Ariel M,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M009 106,Classroom,20,1,Philosophy,Pearson Laboratory,Pearson 106
PHIL 0024 01,Intro To Ethics,LEC,Link Monica Wong,9/2/14,12/8/14,TWF,9:30 AM,10:20 AM,M003 312,Classroom,41,1,Philosophy,Anderson Hall,Anderson 312
PHIL 0024 02,Intro To Ethics,RCT,TBD,9/2/14,12/8/14,R,10:30 AM,11:20 AM,M019 009,Classroom,20,1,Philosophy,Aidekman Arts Center,Aidekman 009
PHIL 0024 03,Intro To Ethics,RCT,TBD,9/2/14,12/8/14,M,10:30 AM,11:20 AM,M017 112,Classroom,21,1,Philosophy,Miner Hall,Miner 112
PHIL 0033 01,Logic,LEC,Russinoff Susan,9/2/14,12/8/14,TRF,12:00 PM,12:50 PM,M004 104,Classroom,65,1,Philosophy,Barnum Hall,Barnum 104
PHIL 0038 01,Rational Choice,LEC,Forber Patrick E,9/2/14,12/8/14,MW,4:30 PM,5:45 PM,M027 113,Classroom,44,1,Philosophy,Paige Hall,Paige Crane Room
PHIL 0041 01,Western Pol Thought I,LEC,Evrigenis Ioannis,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M009 104,Classroom,6,1,Philosophy,Pearson Laboratory,Pearson 104
PHIL 0043 01,JusticeEquality&liberty,LEC,Denby David A,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M004 008,Classroom,50,1,Philosophy,Barnum Hall,Barnum 008
PHIL 0043 RA,JusticeEquality&liberty,RCT,Denby David A,9/2/14,12/8/14,R,9:30 AM,10:20 AM,M007 113,Classroom,15,1,Philosophy,Braker Hall,Braker 113
PHIL 0043 RB,JusticeEquality&liberty,RCT,Denby David A,9/2/14,12/8/14,F,12:00 PM,12:50 PM,M017 225,Classroom,18,1,Philosophy,Miner Hall,Miner 225
PHIL 0043 RC,JusticeEquality&liberty,RCT,Denby David A,9/2/14,12/8/14,F,10:30 AM,11:20 AM,M017 225,Classroom,0,1,Philosophy,Miner Hall,Miner 225
PHIL 0043 RD,JusticeEquality&liberty,RCT,Denby David A,9/2/14,12/8/14,T,9:30 AM,10:20 AM,M017 225,Classroom,17,1,Philosophy,Miner Hall,Miner 225
PHIL 0048 01,Feminist Philosophy,LEC,Bauer Nancy,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M007 001,Classroom,59,1,Philosophy,Braker Hall,Braker 001
PHIL 0091 01,Special Topics,LEC,Rorty Amelie,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M017 225,Classroom,17,1,Philosophy,Miner Hall,Miner 225
PHIL 0091 02,Special Topics,LEC,Olfert Christiana M.,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M017 112,Classroom,8,1,Philosophy,Miner Hall,Miner 112
PHIL 0091 03,Special Topics,LEC,Ninan Dilip,9/2/14,12/8/14,TR,4:30 PM,5:45 PM,M017 112,Classroom,8,1,Philosophy,Miner Hall,Miner 112
PHIL 0103 01,Logic,LEC,Smith George E,9/2/14,12/8/14,M,4:30 PM,5:20 PM,M017 225,Classroom,18,1,Philosophy,Miner Hall,Miner 225
PHIL 0103 01,Logic,LEC,Smith George E,9/2/14,12/8/14,TR,3:00 PM,3:50 PM,M017 225,Classroom,18,1,Philosophy,Miner Hall,Miner 225
PHIL 0111 01,Semantics,LEC,Jackendoff Ray S.,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M017 224,Classroom,3,1,Philosophy,Miner Hall,Miner 224
PHIL 0117 01,Philosophy Of Mind,LEC,White Stephen L,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M017 224,Classroom,19,1,Philosophy,Miner Hall,Miner 224
PHIL 0121 01,Ethical Theory,LEC,Baz Avner,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M017 225,Classroom,18,1,Philosophy,Miner Hall,Miner 225
PHIL 0130 01,Moral Psychology,LEC,McPherson Lionel K,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M017 224,Classroom,5,1,Philosophy,Miner Hall,Miner 224
PHIL 0131 01,Epistemology,LEC,Forber Patrick E,9/2/14,12/8/14,MW,6:00 PM,7:15 PM,M027 113,Classroom,10,1,Philosophy,Paige Hall,Paige Crane Room
PHIL 0151 01,Ancient Philosophy,LEC,Olfert Christiana M.,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M017 225,Classroom,7,1,Philosophy,Miner Hall,Miner 225
PHIL 0167 01,Science Before:newton/pr,LEC,Smith George E,9/2/14,12/8/14,T,6:00 PM,9:00 PM,M017 224,Classroom,16,1,Philosophy,Miner Hall,Miner 224
PHIL 0186 01,Phenomen&existentialism,LEC,Baz Avner,9/2/14,12/8/14,M,6:00 PM,9:00 PM,M017 225,Classroom,12,1,Philosophy,Miner Hall,Miner 225
PHIL 0191 01,Seminars,LEC,Denby David A,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M017 112,Classroom,13,1,Philosophy,Miner Hall,Miner 112
PHIL 0191 02,Seminars,LEC,White Stephen L,9/2/14,12/8/14,MW,4:30 PM,5:45 PM,M017 112,Classroom,9,1,Philosophy,Miner Hall,Miner 112
PHIL 0191 03,Seminars,LEC,Svavarsdottir Sigrun,9/2/14,12/8/14,W,6:00 PM,9:00 PM,M017 221,Seminar Room,4,1,Philosophy,Miner Hall,Miner 221
PHIL 0191 04,Seminars,LEC,Svavarsdottir Sigrun,9/2/14,12/8/14,TR,4:30 PM,5:45 PM,M017 221,Seminar Room,6,1,Philosophy,Miner Hall,Miner 221
PHIL 0197 01,Sem:ethicsLaw&society,LEC,McPherson Lionel K,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M017 224,Classroom,5,1,Philosophy,Miner Hall,Miner 224
PHIL 0291 01,Graduate Seminar,LEC,Ninan Dilip,9/2/14,12/8/14,M,6:00 PM,9:00 PM,M017 110,Seminar Room,3,1,Philosophy,Miner Hall,Miner 110
PHIL 0297 01,Graduate Writing Seminar,LEC,Denby David A,9/2/14,12/8/14,W,9:00 AM,11:30 AM,M040 005,Classroom,15,1,Philosophy,Jackson Gym,Jackson 005
PHY 0001 01,Intro Physics I W/lab,LEC,Lowhorn Nathan,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M022 253,Classroom,167,1,Physics,Robinson Hall,Robinson 253
PHY 0001 LA,Physics 1 and 11 shared Lab,LAB,TBD,9/2/14,12/8/14,T,7:00 PM,9:30 PM,M022 351,Class Laboratory,13,0,Physics,Robinson Hall,Robinson Hall Room 351 
PHY 0001 LB,Physics 1 and 11 shared Lab,LAB,TBD,9/2/14,12/8/14,M,1:30 PM,4:00 PM,M022 351,Class Laboratory,14,0,Physics,Robinson Hall,Robinson Hall Room 351 
PHY 0001 LC,Physics 1 and 11 shared Lab,LAB,TBD,9/2/14,12/8/14,M,1:30 PM,4:00 PM,M022 351,Class Laboratory,14,0,Physics,Robinson Hall,Robinson Hall Room 351 
PHY 0001 LD,Physics 1 and 11 shared Lab,LAB,TBD,9/2/14,12/8/14,M,4:15 PM,6:45 PM,M022 351,Class Laboratory,13,0,Physics,Robinson Hall,Robinson Hall Room 351 
PHY 0001 LE,Physics 1 and 11 shared Lab,LAB,TBD,9/2/14,12/8/14,M,4:15 PM,6:45 PM,M022 351,Class Laboratory,13,0,Physics,Robinson Hall,Robinson Hall Room 351 
PHY 0001 LF,Physics 1 and 11 shared Lab,LAB,TBD,9/2/14,12/8/14,M,7:00 PM,9:30 PM,M022 351,Class Laboratory,14,0,Physics,Robinson Hall,Robinson Hall Room 351 
PHY 0001 LG,Physics 1 and 11 shared Lab,LAB,TBD,9/2/14,12/8/14,M,7:00 PM,9:30 PM,M022 351,Class Laboratory,14,0,Physics,Robinson Hall,Robinson Hall Room 351 
PHY 0001 LH,Physics 1 and 11 shared Lab,LAB,TBD,9/2/14,12/8/14,T,1:30 PM,4:00 PM,M022 351,Class Laboratory,14,0,Physics,Robinson Hall,Robinson Hall Room 351 
PHY 0001 LI,Physics 1 and 11 shared Lab,LAB,TBD,9/2/14,12/8/14,T,1:30 PM,4:00 PM,M022 351,Class Laboratory,14,0,Physics,Robinson Hall,Robinson Hall Room 351 
PHY 0001 LJ,Physics 1 and 11 shared Lab,LAB,TBD,9/2/14,12/8/14,T,4:15 PM,6:45 PM,M022 351,Class Laboratory,14,0,Physics,Robinson Hall,Robinson Hall Room 351 
PHY 0001 LK,Physics 1 and 11 shared Lab,LAB,TBD,9/2/14,12/8/14,T,4:15 PM,6:45 PM,M022 351,Class Laboratory,14,0,Physics,Robinson Hall,Robinson Hall Room 351 
PHY 0001 LL,Physics 1 and 11 shared Lab,LAB,TBD,9/2/14,12/8/14,T,7:00 PM,9:30 PM,M022 351,Class Laboratory,14,0,Physics,Robinson Hall,Robinson Hall Room 351 
PHY 0001 LM,Physics 1 and 11 shared Lab,LAB,TBD,9/2/14,12/8/14,W,9:00 AM,11:30 AM,M022 351,Class Laboratory,12,0,Physics,Robinson Hall,Robinson Hall Room 351 
PHY 0001 LN,Physics 1 and 11 shared Lab,LAB,TBD,9/2/14,12/8/14,W,1:30 PM,4:00 PM,M022 351,Class Laboratory,14,0,Physics,Robinson Hall,Robinson Hall Room 351 
PHY 0001 LO,Physics 1 and 11 shared Lab,LAB,TBD,9/2/14,12/8/14,W,1:30 PM,4:00 PM,M022 351,Class Laboratory,11,0,Physics,Robinson Hall,Robinson Hall Room 351 
PHY 0001 LP,Physics 1 and 11 shared Lab,LAB,TBD,9/2/14,12/8/14,W,4:15 PM,6:45 PM,M022 351,Class Laboratory,14,0,Physics,Robinson Hall,Robinson Hall Room 351 
PHY 0001 LQ,Physics 1 and 11 shared Lab,LAB,TBD,9/2/14,12/8/14,W,7:00 PM,9:30 PM,M022 351,Class Laboratory,14,0,Physics,Robinson Hall,Robinson Hall Room 351 
PHY 0001 LR,Physics 1 and 11 shared Lab,LAB,TBD,9/2/14,12/8/14,W,4:15 PM,6:45 PM,M022 351,Class Laboratory,13,0,Physics,Robinson Hall,Robinson Hall Room 351 
PHY 0001 LS,Physics 1 and 11 shared Lab,LAB,TBD,9/2/14,12/8/14,W,7:00 PM,9:30 PM,M022 351,Class Laboratory,14,0,Physics,Robinson Hall,Robinson Hall Room 351 
PHY 0001 LT,Physics 1 and 11 shared Lab,LAB,TBD,9/2/14,12/8/14,R,1:30 PM,4:00 PM,M022 351,Class Laboratory,12,0,Physics,Robinson Hall,Robinson Hall Room 351 
PHY 0001 LU,Physics 1 and 11 shared Lab,LAB,TBD,9/2/14,12/8/14,R,1:30 PM,4:00 PM,M022 351,Class Laboratory,14,0,Physics,Robinson Hall,Robinson Hall Room 351 
PHY 0001 LV,Physics 1 and 11 shared Lab,LAB,TBD,9/2/14,12/8/14,R,7:00 PM,9:30 PM,M022 351,Class Laboratory,14,0,Physics,Robinson Hall,Robinson Hall Room 351 
PHY 0001 LW,Physics 1 and 11 shared Lab,LAB,TBD,9/2/14,12/8/14,R,7:00 PM,9:30 PM,M022 351,Class Laboratory,0,0,Physics,Robinson Hall,Robinson Hall Room 351 
PHY 0001 LX,Physics 1 and 11 shared Lab,LAB,TBD,9/2/14,12/8/14,F,9:00 AM,11:30 AM,M022 351,Class Laboratory,14,0,Physics,Robinson Hall,Robinson Hall Room 351 
PHY 0001 LY,Physics 1 and 11 shared Lab,LAB,TBD,9/2/14,12/8/14,F,1:30 PM,4:00 PM,M022 351,Class Laboratory,13,0,Physics,Robinson Hall,Robinson Hall Room 351 
PHY 0001 LZ,Physics 1 and 11 shared Lab,LAB,TBD,9/2/14,12/8/14,F,1:30 PM,4:00 PM,M022 351,Class Laboratory,14,0,Physics,Robinson Hall,Robinson Hall Room 351 
PHY 0001 RA,Intro Physics I W/lab,RCT,TBD,9/2/14,12/8/14,T,3:00 PM,3:50 PM,M002 006,Classroom,29,1,Physics,Bromfield Pearson,Bromfield-Pearson 006
PHY 0001 RB,Intro Physics I W/lab,RCT,TBD,9/2/14,12/8/14,W,1:30 PM,2:20 PM,M022 153,Classroom,24,1,Physics,Robinson Hall,Robinson 153
PHY 0001 RE,Intro Physics I W/lab,RCT,TBD,9/2/14,12/8/14,R,4:30 PM,5:25 PM,M022 152,Classroom,29,1,Physics,Robinson Hall,Robinson 152
PHY 0001 RF,Intro Physics I W/lab,RCT,TBD,9/2/14,12/8/14,W,4:30 PM,5:20 PM,M002 007,Classroom,29,1,Physics,Bromfield Pearson,Bromfield-Pearson 007
PHY 0001 RG,Intro Physics I W/lab,RCT,TBD,9/2/14,12/8/14,W,3:00 PM,3:50 PM,M022 152,Classroom,29,1,Physics,Robinson Hall,Robinson 152
PHY 0001 RI,Intro Physics I W/lab,RCT,TBD,9/2/14,12/8/14,R,3:00 PM,3:50 PM,M002 006,Classroom,27,1,Physics,Bromfield Pearson,Bromfield-Pearson 006
PHY 0006 01,Physics For Humanists,LEC,Goldstein Gary R,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M003 112,Classroom,44,1,Physics,Anderson Hall,Anderson 112 
PHY 0010 01,Physics Music & Color,LEC,Gunther Leon,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M022 151,Class Laboratory,14,1,Physics,Robinson Hall,Robinson Hall Room 151 
PHY 0010 LA,Physics Music & Color,LAB,Gunther Leon,9/2/14,12/8/14,W,3:00 PM,5:30 PM,M022 151,Class Laboratory,6,1,Physics,Robinson Hall,Robinson Hall Room 151 
PHY 0010 LB,Physics Music & Color,LAB,Gunther Leon,9/2/14,12/8/14,R,1:30 PM,4:00 PM,M022 151,Class Laboratory,8,1,Physics,Robinson Hall,Robinson Hall Room 151 
PHY 0011 01,General Physics I W/lab,LEC,Tobin Roger,9/2/14,12/8/14,M,9:30 AM,10:20 AM,M022 253,Classroom,173,1,Physics,Robinson Hall,Robinson 253
PHY 0011 01,General Physics I W/lab,LEC,Tobin Roger,9/2/14,12/8/14,TR,10:30 AM,11:20 AM,M022 253,Classroom,173,1,Physics,Robinson Hall,Robinson 253
PHY 0011 RB,General Physics I W/lab,RCT,TBD,9/2/14,12/8/14,R,3:00 PM,3:50 PM,M038 016,Classroom,25,1,Physics,East Hall,East 016
PHY 0011 RC,General Physics I W/lab,RCT,TBD,9/2/14,12/8/14,T,4:30 PM,5:20 PM,M002 005,Classroom,26,1,Physics,Bromfield Pearson,Bromfield-Pearson 005
PHY 0011 RD,General Physics I W/lab,RCT,TBD,9/2/14,12/8/14,T,3:00 PM,3:50 PM,M019 009,Classroom,27,1,Physics,Aidekman Arts Center,Aidekman 009
PHY 0011 RG,General Physics I W/lab,RCT,TBD,9/2/14,12/8/14,R,9:30 AM,10:20 AM,M022 152,Classroom,25,1,Physics,Robinson Hall,Robinson 152
PHY 0011 RH,General Physics I W/lab,RCT,TBD,9/2/14,12/8/14,W,6:00 PM,6:50 PM,M022 153,Classroom,28,1,Physics,Robinson Hall,Robinson 153
PHY 0011 RI,General Physics I W/lab,RCT,TBD,9/2/14,12/8/14,R,9:30 AM,10:20 AM,M022 153,Classroom,15,1,Physics,Robinson Hall,Robinson 153
PHY 0011 RJ,General Physics I W/lab,RCT,TBD,9/2/14,12/8/14,W,3:00 PM,3:50 PM,M002 005,Classroom,27,1,Physics,Bromfield Pearson,Bromfield-Pearson 005
PHY 0012 01,General Physics II W/lab,LEC,Atherton Timothy,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M022 253,Classroom,64,1,Physics,Robinson Hall,Robinson 253
PHY 0012 LA,General Physics II W/lab,LAB,TBD,9/2/14,12/8/14,M,1:30 PM,4:00 PM,M022 352,Class Laboratory,13,1,Physics,Robinson Hall,Robinson Hall Room 352 
PHY 0012 LB,General Physics II W/lab,LAB,TBD,9/2/14,12/8/14,M,1:30 PM,4:00 PM,M022 352,Class Laboratory,0,1,Physics,Robinson Hall,Robinson Hall Room 352 
PHY 0012 LC,General Physics II W/lab,LAB,TBD,9/2/14,12/8/14,M,6:30 PM,9:00 PM,M022 352,Class Laboratory,12,1,Physics,Robinson Hall,Robinson Hall Room 352 
PHY 0012 LD,General Physics II W/lab,LAB,TBD,9/2/14,12/8/14,M,6:30 PM,9:00 PM,M022 352,Class Laboratory,11,1,Physics,Robinson Hall,Robinson Hall Room 352 
PHY 0012 LE,General Physics II W/lab,LAB,TBD,9/2/14,12/8/14,T,6:30 PM,9:00 PM,M022 352,Class Laboratory,13,1,Physics,Robinson Hall,Robinson Hall Room 352 
PHY 0012 LG,General Physics II W/lab,LAB,TBD,9/2/14,12/8/14,W,1:30 PM,4:00 PM,M022 352,Class Laboratory,4,1,Physics,Robinson Hall,Robinson Hall Room 352 
PHY 0012 LH,General Physics II W/lab,LAB,TBD,9/2/14,12/8/14,T,6:30 PM,9:00 PM,M022 352,Class Laboratory,11,1,Physics,Robinson Hall,Robinson Hall Room 352 
PHY 0012 LI,General Physics II W/lab,LAB,TBD,9/2/14,12/8/14,R,1:30 PM,4:00 PM,M022 352,Class Laboratory,0,1,Physics,Robinson Hall,Robinson Hall Room 352 
PHY 0012 RA,General Physics II W/lab,RCT,TBD,9/2/14,12/8/14,T,4:30 PM,5:20 PM,M022 152,Classroom,18,1,Physics,Robinson Hall,Robinson 152
PHY 0012 RB,General Physics II W/lab,RCT,TBD,9/2/14,12/8/14,W,4:30 PM,5:20 PM,M022 153,Classroom,24,1,Physics,Robinson Hall,Robinson 153
PHY 0012 RD,General Physics II W/lab,RCT,TBD,9/2/14,12/8/14,R,9:30 AM,10:20 AM,M002 005,Classroom,21,1,Physics,Bromfield Pearson,Bromfield-Pearson 005
PHY 0012 RE,General Physics II W/lab,RCT,TBD,9/2/14,12/8/14,R,1:30 PM,2:20 PM,M038 016,Classroom,1,1,Physics,East Hall,East 016
PHY 0013 01,Intro Modern Physics,LEC,Gallagher Hugh M,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M196E 100,Classroom,33,1,Physics,Sophia Gordon Hall,Sophia Gordon
PHY 0013 RA,Intro Modern Physics,RCT,Gallagher Hugh M,9/2/14,12/8/14,M,1:30 PM,2:20 PM,M022 153,Classroom,5,1,Physics,Robinson Hall,Robinson 153
PHY 0013 RB,Intro Modern Physics,RCT,Gallagher Hugh M,9/2/14,12/8/14,R,4:30 PM,5:25 PM,M002 005,Classroom,15,1,Physics,Bromfield Pearson,Bromfield-Pearson 005
PHY 0013 RC,Intro Modern Physics,RCT,Gallagher Hugh M,9/2/14,12/8/14,F,1:30 PM,2:20 PM,M022 152,Classroom,13,1,Physics,Robinson Hall,Robinson 152
PHY 0020 01,Relativity and Cosmology,LEC,Ford Lawrence H,9/2/14,12/8/14,MW,4:30 PM,5:45 PM,M022 152,Classroom,11,1,Physics,Robinson Hall,Robinson 152
PHY 0031 01,Optics And Wave Motion,LEC,Cebe Peggy,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M028 134,Classroom,5,1,Physics,Science and Technology Center,Sci-Tech 134
PHY 0031 LA,Optics And Wave Motion,LAB,Cebe Peggy,9/2/14,12/8/14,T,3:00 PM,4:15 PM,M022 150,Class Laboratory,1,1,Physics,Robinson Hall,Robinson Hall Room 150 
PHY 0031 LB,Optics And Wave Motion,LAB,Cebe Peggy,9/2/14,12/8/14,W,3:00 PM,4:15 PM,M022 150,Class Laboratory,2,1,Physics,Robinson Hall,Robinson Hall Room 150 
PHY 0031 LC,Optics And Wave Motion,LAB,Cebe Peggy,9/2/14,12/8/14,W,4:30 PM,5:45 PM,M022 150,Class Laboratory,2,1,Physics,Robinson Hall,Robinson Hall Room 150 
PHY 0042 01,Electricity &magnetism I,LEC,Beauchemin Pierre-Hugues,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M022 153,Classroom,10,1,Physics,Robinson Hall,Robinson 153
PHY 0061 01,Quant Thry/atom Physics,LEC,Sliwa Christopher J.,9/2/14,12/8/14,TR,4:30 PM,5:45 PM,M022 153,Classroom,20,1,Physics,Robinson Hall,Robinson 153
PHY 0062 01,Particle Physics,LEC,Oliver William P,9/2/14,12/8/14,TR,3:00 PM,4:15 PM,M022 153,Classroom,7,1,Physics,Robinson Hall,Robinson 153
PHY 0103 01,Graduate Teaching Seminar,SEM,Gallagher Hugh M,9/2/14,12/8/14,F,12:00 PM,1:15 PM,M022 152,Classroom,5,0.5,Physics,Robinson Hall,Robinson 152
PHY 0107 01,Astronomy and Physics Seminar,SEM,Sliwa Christopher J.,9/2/14,12/8/14,M,4:30 PM,5:45 PM,M022 250,Computer Lab,16,0.5,Physics,Robinson Hall,Robinson Hall Room 250
PHY 0115 01,Optics and Wave Motion,LEC,Cebe Peggy,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M028 134,Classroom,0,1,Physics,Science and Technology Center,Sci-Tech 134
PHY 0115 LA,Optics and Wave Motion,LAB,Cebe Peggy,9/2/14,12/8/14,T,3:00 PM,4:15 PM,M022 150,Class Laboratory,0,1,Physics,Robinson Hall,Robinson Hall Room 150 
PHY 0115 LB,Optics and Wave Motion,LAB,Cebe Peggy,9/2/14,12/8/14,W,3:00 PM,4:15 PM,M022 150,Class Laboratory,0,1,Physics,Robinson Hall,Robinson Hall Room 150 
PHY 0115 LC,Optics and Wave Motion,LAB,Cebe Peggy,9/2/14,12/8/14,W,4:30 PM,5:45 PM,M022 150,Class Laboratory,0,1,Physics,Robinson Hall,Robinson Hall Room 150 
PHY 0131 01,Adv Classical Mech,LEC,Staii Cristian,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M022 153,Classroom,4,1,Physics,Robinson Hall,Robinson 153
PHY 0145 01,Clas.electromag Theory I,LEC,Napier Austin,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M022 153,Classroom,10,1,Physics,Robinson Hall,Robinson 153
PHY 0163 01,Quantum Theory I,LEC,Mann A William,9/2/14,12/8/14,MWF,10:30 AM,11:45 AM,M022 153,Classroom,5,1,Physics,Robinson Hall,Robinson 153
PHY 0263 01,Adv Quantum Mech,LEC,Vilenkin Alexander,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M024 304,Classroom,8,1,Physics,Tisch Library,Tisch 304
PJS 0001 01,Intro Peace/justice Stdy,LEC,Atshan Saed A.,9/2/14,12/8/14,M,4:30 PM,7:15 PM,M024 304,Classroom,57,1,Peace & Justice Studies,Tisch Library,Tisch 304
PJS 0027 01,Human Rights And Culture,LEC,Bishara Amahl,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M010 206,Classroom,11,1,Peace & Justice Studies,Eaton Hall,Eaton 206
PJS 0099 01,Internship-Social Change,LEC,Bryan Dale,9/2/14,12/8/14,M,4:30 PM,7:15 PM,M010 124,Seminar Room,10,1,Peace & Justice Studies,Eaton Hall,Eaton 124
PJS 0109 01,Com Act In Public Health,LEC,Roelofs Cora,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M024 314,Classroom,2,1,Peace & Justice Studies,Tisch Library,Tisch 314
PJS 0120 01,Soc Of War & Peace,LEC,Joseph Paul I,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M024 316,Classroom,10,1,Peace & Justice Studies,Tisch Library,Tisch 316
PJS 0121 01,Sem: Pol Cul Com Perp,LEC,Cruz Consuelo,9/2/14,12/8/14,T,6:30 PM,9:00 PM,M086 103,Classroom,0,1,Peace & Justice Studies,Olin Center,Olin 103
PJS 0130 01,Social Inequalities/Social Jus,LEC,Rodriquez Tomas,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M009 112,Classroom,4,1,Peace & Justice Studies,Pearson Laboratory,Pearson 112
PJS 0131 01,Negot & Conflict Resol,LEC,Burdick Robert,9/2/14,12/8/14,R,6:00 PM,9:00 PM,M086 005,Classroom,17,1,Peace & Justice Studies,Olin Center,Olin 005
PJS 0131 01,Negot & Conflict Resol,LEC,Burdick Robert,9/2/14,12/8/14,R,6:00 PM,9:00 PM,M086 005,Classroom,17,1,Peace & Justice Studies,Olin Center,Olin 005
PJS 0131 01,Negot & Conflict Resol,LEC,Burdick Robert,9/2/14,12/8/14,R,6:00 PM,9:00 PM,M086 005,Classroom,17,1,Peace & Justice Studies,Olin Center,Olin 005
PJS 0131 01,Negot & Conflict Resol,LEC,Burdick Robert,9/2/14,12/8/14,R,6:00 PM,9:00 PM,M086 005,Classroom,17,1,Peace & Justice Studies,Olin Center,Olin 005
PJS 0131 01,Negot & Conflict Resol,LEC,Burdick Robert,9/2/14,12/8/14,R,6:00 PM,9:00 PM,M086 005,Classroom,17,1,Peace & Justice Studies,Olin Center,Olin 005
PJS 0135 01,Social Movements,LEC,Leondar-Wright Betsy,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M006 100A,Classroom,9,1,Peace & Justice Studies,Lane Hall,Lane 100A
PJS 0150 01,Special Topics,LEC,Graham Laura K.,9/2/14,12/8/14,M,6:00 PM,9:00 PM,M004 114,Classroom,11,1,Peace & Justice Studies,Barnum Hall,Barnum 114
PJS 0150 04,Special Topics,LEC,Camara Kathleen A,9/2/14,12/8/14,W,6:00 PM,9:00 PM,M012 157,Classroom,7,1,Peace & Justice Studies,Eliot Pearson Center,Eliot-Pearson 157
PJS 0150 07,Special Topics,LEC,Robinson Pearl T,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M027 113,Classroom,0,1,Peace & Justice Studies,Paige Hall,Paige Crane Room
PJS 0150 08,Special Topics,LEC,Hitchner R. Bruce,9/2/14,12/8/14,T,1:30 PM,4:00 PM,M010 203,Classroom,15,1,Peace & Justice Studies,Eaton Hall,Eaton 203
PJS 0150 09,Special Topics,LEC,Joseph Peniel E.,9/2/14,12/8/14,M,1:30 PM,4:00 PM,M034 201,Seminar Room,1,1,Peace & Justice Studies,Packard Hall,Packard Conference Room
PJS 0150 10,Special Topics,LEC,Graham Laura K.,9/2/14,12/8/14,T,9:00 AM,11:30 AM,M003 112,Classroom,6,1,Peace & Justice Studies,Anderson Hall,Anderson 112 
PJS 0164 01,Educ For Peace & Justice,LEC,Donahue-Keegan Deborah,9/2/14,12/8/14,W,6:00 PM,9:00 PM,M010 201,Classroom,8,1,Peace & Justice Studies,Eaton Hall,Eaton 201 
PJS 0165 01,After Violence:truthJus,LEC,Shaw Rosalind H,9/2/14,12/8/14,W,9:00 AM,11:30 AM,M010 301,Seminar Room,0,1,Peace & Justice Studies,Eaton Hall,Eaton Hall Room 301
PJS 0170 01,Understanding Civil Wars,LEC,Greenhill Kelly M,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M027 010,Classroom,8,1,Peace & Justice Studies,Paige Hall,Paige Terrace Room
POR 0003 A,Intermed Portuguese I,LEC,Soares Cristine,9/2/14,12/8/14,TRF,12:00 PM,12:50 PM,M086 006,Classroom,9,1,Portuguese,Olin Center,Olin 006 
POR 0003 RA,Intermed Portuguese I,RCT,TBD,9/2/14,12/8/14,W,12:00 PM,12:40 PM,M086 102,Classroom,7,1,Portuguese,Olin Center,Olin 102
POR 0003 RB,Intermed Portuguese I,RCT,TBD,9/2/14,12/8/14,M,12:00 PM,12:40 PM,M086 107,Classroom,3,1,Portuguese,Olin Center,Olin 107
POR 0023 A,Por For Spn&rom Lang Spk,LEC,Soares Cristine,9/2/14,12/8/14,TWF,9:30 AM,10:20 AM,M086 006,Classroom,13,1,Portuguese,Olin Center,Olin 006 
POR 0023 RA,Por For Spn&rom Lang Spk,RCT,Soares Cristine,9/2/14,12/8/14,W,12:00 PM,12:40 PM,M086 002,Classroom,7,1,Portuguese,Olin Center,Olin 002
POR 0023 RB,Por For Spn&rom Lang Spk,RCT,Soares Cristine,9/2/14,12/8/14,W,12:45 PM,1:20 PM,M086 334,Classroom,2,1,Portuguese,Olin Center,Olin Center Room 334
POR 0191 A,Sp Top/portuguese Cultre,LEC,Soares Cristine,9/2/14,12/8/14,T,6:30 PM,9:00 PM,M086 006,Classroom,6,1,Portuguese,Olin Center,Olin 006 
PS 0004 02,First-Year Tutorial in Politic,LEC,Rasmussen Dennis,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M034 201,Seminar Room,19,1,Political Science,Packard Hall,Packard Conference Room
PS 0039 01,So Sem: Comparative Pol,LEC,Robinson Pearl T,9/2/14,12/8/14,R,1:20 PM,4:20 PM,M118 103,Seminar Room,6,1,Political Science,Fine Arts House,11 Talbot Ave 103
PS 0041 01,Western Pol Thought I,LEC,Evrigenis Ioannis,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M009 104,Classroom,76,1,Political Science,Pearson Laboratory,Pearson 104
PS 0043 01,JusticeEquality&liberty,LEC,Denby David A,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M004 008,Classroom,12,1,Political Science,Barnum Hall,Barnum 008
PS 0043 RA,JusticeEquality&liberty,RCT,Denby David A,9/2/14,12/8/14,R,9:30 AM,10:20 AM,M007 113,Classroom,0,1,Political Science,Braker Hall,Braker 113
PS 0043 RB,JusticeEquality&liberty,RCT,Denby David A,9/2/14,12/8/14,F,12:00 PM,12:50 PM,M017 225,Classroom,0,1,Political Science,Miner Hall,Miner 225
PS 0043 RC,JusticeEquality&liberty,RCT,Denby David A,9/2/14,12/8/14,F,10:30 AM,11:20 AM,M017 225,Classroom,0,1,Political Science,Miner Hall,Miner 225
PS 0043 RD,JusticeEquality&liberty,RCT,Denby David A,9/2/14,12/8/14,T,9:30 AM,10:20 AM,M017 225,Classroom,0,1,Political Science,Miner Hall,Miner 225
PS 0061 01,Intro International Rel,LEC,Beckley Michael,9/2/14,12/8/14,TR,3:00 PM,4:15 PM,M004 008,Classroom,145,1,Political Science,Barnum Hall,Barnum 008
PS 0061 RA,Intro International Rel,RCT,Rasmussen Ivan W.,9/2/14,12/8/14,T,4:30 PM,5:20 PM,M007 222,Classroom,23,1,Political Science,Braker Hall,Braker 222
PS 0061 RB,Intro International Rel,RCT,Rasmussen Ivan W.,9/2/14,12/8/14,T,6:00 PM,6:50 PM,M007 118,Classroom,16,1,Political Science,Braker Hall,Braker 118
PS 0061 RC,Intro International Rel,RCT,Rasmussen Ivan W.,9/2/14,12/8/14,W,3:00 PM,3:50 PM,M007 226,Classroom,23,1,Political Science,Braker Hall,Braker 226
PS 0061 RD,Intro International Rel,RCT,Rasmussen Ivan W.,9/2/14,12/8/14,W,4:30 PM,5:20 PM,M004 114,Classroom,24,1,Political Science,Barnum Hall,Barnum 114
PS 0061 RE,Intro International Rel,RCT,Rasmussen Ivan W.,9/2/14,12/8/14,R,9:30 AM,10:20 AM,M019 013,Classroom,19,1,Political Science,Aidekman Arts Center,Aidekman 013
PS 0061 RF,Intro International Rel,RCT,Rasmussen Ivan W.,9/2/14,12/8/14,R,10:30 AM,11:20 AM,M007 225,Classroom,18,1,Political Science,Braker Hall,Braker 225
PS 0061 RG,Intro International Rel,RCT,Rasmussen Ivan W.,9/2/14,12/8/14,F,12:00 PM,12:50 PM,M007 225,Classroom,22,1,Political Science,Braker Hall,Braker 225
PS 0101 01,Pres & Executive Branch,LEC,Berry Jeffrey M,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M003 313,Classroom,29,1,Political Science,Anderson Hall,Anderson 313
PS 0103 01,Pol Sci Research Methods,LEC,Russell Deborah J. Schildkraut,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M024 103,Open Laboratory,22,1,Political Science,Tisch Library,Tisch Library Mark 4 Lab
PS 0105 01,Constitutional Law,LEC,Walsh Teresa,9/2/14,12/8/14,TR,4:30 PM,5:45 PM,M024 304,Classroom,28,1,Political Science,Tisch Library,Tisch 304
PS 0106 01,Race and Politics,LEC,Masuoka Natalie,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M086 011,Classroom,24,1,Political Science,Olin Center,Olin 011
PS 0113 01,Sem:nonprofits&civil Soc,LEC,Berry Jeffrey M,9/2/14,12/8/14,M,9:00 AM,11:30 AM,M038 113,Seminar Room,16,1,Political Science,East Hall,East 113
PS 0118 08,Topics in American Politics,LEC,Walsh Teresa,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M003 313,Classroom,11,1,Political Science,Anderson Hall,Anderson 313
PS 0121 01,Sem: Pol Cul Com Perp,LEC,Cruz Consuelo,9/2/14,12/8/14,T,6:30 PM,9:00 PM,M086 103,Classroom,14,1,Political Science,Olin Center,Olin 103
PS 0126 01,Chinese Politics,LEC,Remick-Yamamoto Elizabeth J.,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M024 314,Classroom,33,1,Political Science,Tisch Library,Tisch 314
PS 0127 01,Latin Amer Politics,LEC,Cruz Consuelo,9/2/14,12/8/14,MW,4:30 PM,5:45 PM,M003 312,Classroom,33,1,Political Science,Anderson Hall,Anderson 312
PS 0135 01,Comparative Revolution,LEC,Remick-Yamamoto Elizabeth J.,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M003 312,Classroom,22,1,Political Science,Anderson Hall,Anderson 312
PS 0141 01,Shakespeare's Rome,LEC,Sullivan Vickie B,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M024 314,Classroom,15,1,Political Science,Tisch Library,Tisch 314
PS 0146 01,LibertyMorality&virtue,LEC,Devigne Robert,9/2/14,12/8/14,TR,3:00 PM,4:15 PM,M034 201,Seminar Room,8,1,Political Science,Packard Hall,Packard Conference Room
PS 0149 01,Contemporary Pol Theory,LEC,Rasmussen Dennis,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M024 314,Classroom,15,1,Political Science,Tisch Library,Tisch 314
PS 0151 01,Political Phil Of Hobbes,LEC,Evrigenis Ioannis,9/2/14,12/8/14,R,1:30 PM,4:00 PM,M010 123,Seminar Room,10,1,Political Science,Eaton Hall,Eaton 123
PS 0158 07,Topics In Pol Thought,LEC,Devigne Robert,9/2/14,12/8/14,TR,6:00 PM,7:15 PM,M034 201,Seminar Room,12,1,Political Science,Packard Hall,Packard Conference Room
PS 0170 01,Understanding Civil Wars,LEC,Greenhill Kelly M,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M027 010,Classroom,39,1,Political Science,Paige Hall,Paige Terrace Room
PS 0188 01,Topics In Intern'l Rel,LEC,Robinson Pearl T,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M027 113,Classroom,6,1,Political Science,Paige Hall,Paige Crane Room
PS 0188 06,Topics In Intern'l Rel,LEC,Tirrell Andrew R.,9/2/14,12/8/14,TR,3:00 PM,4:15 PM,M017 221,Seminar Room,7,1,Political Science,Miner Hall,Miner 221
PS 0188 11,Topics In Intern'l Rel,LEC,Drezner Daniel,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M010 202,Classroom,16,1,Political Science,Eaton Hall,Eaton 202
PS 0188 11RA,Topics In Intern'l Rel,RCT,Ziolkowski Caleb M.,9/2/14,12/8/14,F,9:30 AM,10:20 AM,M007 118,Classroom,5,1,Political Science,Braker Hall,Braker 118
PS 0188 11RB,Topics In Intern'l Rel,RCT,Melaas Aaron J.,9/2/14,12/8/14,R,6:00 PM,6:50 PM,M086 109,Classroom,11,1,Political Science,Olin Center,Olin 109
PS 0188 13,Topics In Intern'l Rel,LEC,Beckley Michael,9/2/14,12/8/14,TR,4:30 PM,5:45 PM,M010 201,Classroom,37,1,Political Science,Eaton Hall,Eaton 201 
PS 0188 25,Topics In Intern'l Rel,LEC,Smith Charles A,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M019 012,Classroom,18,1,Political Science,Aidekman Arts Center,Aidekman 012
PS 0188 45,Topics In Intern'l Rel,LEC,Taliaferro Jeffrey,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M086 012,Classroom,21,1,Political Science,Olin Center,Olin 012
PS 0189 03,Sem In Int'l Relations,LEC,Fujihira Shinju,9/2/14,12/8/14,M,6:30 PM,9:00 PM,M034 201,Seminar Room,14,1,Political Science,Packard Hall,Packard Conference Room
PS 0189 04,Sem In Int'l Relations,LEC,Taliaferro Jeffrey,9/2/14,12/8/14,T,9:00 AM,11:30 AM,M034 201,Seminar Room,9,1,Political Science,Packard Hall,Packard Conference Room
PS 0189 05,Sem In Int'l Relations,LEC,Mufti Malik,9/2/14,12/8/14,W,9:00 AM,11:30 AM,M017 112,Classroom,11,1,Political Science,Miner Hall,Miner 112
PS 0189 06,Sem In Int'l Relations,LEC,Smith Charles A,9/2/14,12/8/14,M,9:00 AM,11:30 AM,M017 221,Seminar Room,8,1,Political Science,Miner Hall,Miner 221
PS 0198 01,Senior Honors Thesis,LEC,Masuoka Natalie,9/2/14,12/8/14,W,6:30 PM,9:00 PM,M017 112,Classroom,8,1,Political Science,Miner Hall,Miner 112
PSY 0001 01,Intro To Psychology,LEC,Maddox Keith B,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M151 302,Classroom,160,1,Psychology,Cabot Center,Cabot Asean Aud.
PSY 0001 02,Intro To Psychology,LEC,Maddox Keith B,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M151 302,Classroom,107,1,Psychology,Cabot Center,Cabot Asean Aud.
PSY 0012 01,Abnormal Psychology,LEC,Mascher Jackquelyn,9/2/14,12/8/14,R,6:30 PM,9:00 PM,M003 206,Classroom,77,1,Psychology,Anderson Hall,Anderson 206
PSY 0013 01,Social Psychology,LEC,Maddox Keith B,9/2/14,12/8/14,TR,3:00 PM,4:15 PM,M009 104,Classroom,102,1,Psychology,Pearson Laboratory,Pearson 104
PSY 0017 01,Indust/organiz Psych,LEC,Miller-Jacobs Harold,9/2/14,12/8/14,M,1:30 PM,4:00 PM,M012 163,Seminar Room,20,1,Psychology,Eliot Pearson Center,Eliot-Pearson 163
PSY 0025 01,Physiological Psychology,LEC,DeBold Joseph F,9/2/14,12/8/14,M,9:30 AM,10:20 AM,M027 010,Classroom,50,1,Psychology,Paige Hall,Paige Terrace Room
PSY 0025 01,Physiological Psychology,LEC,DeBold Joseph F,9/2/14,12/8/14,TR,10:30 AM,11:20 AM,M027 010,Classroom,50,1,Psychology,Paige Hall,Paige Terrace Room
PSY 0027 01,Perception,LEC,Ditman-Brunye Tali,9/2/14,12/8/14,M,6:30 PM,9:00 PM,M002 007,Classroom,37,1,Psychology,Bromfield Pearson,Bromfield-Pearson 007
PSY 0028 01,Cognitive Psychology,LEC,Thomas Ayanna K.,9/2/14,12/8/14,MW,6:00 PM,7:15 PM,M003 312,Classroom,49,1,Psychology,Anderson Hall,Anderson 312
PSY 0031 01,Stats For Behav Sci,LEC,Sloboda Lara N,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M019 102,Assembly,140,1,Psychology,Aidekman Arts Center,Cohen Auditorium
PSY 0031 A,Stats For Behav Sci,LAB,Sloboda Lara N,9/2/14,12/8/14,R,9:00 AM,11:30 AM,M021 109,Class Laboratory,24,1,Psychology,Psychology Building,Psychology Building Room 109
PSY 0031 B,Stats For Behav Sci,LAB,Sloboda Lara N,9/2/14,12/8/14,R,1:30 PM,4:00 PM,M021 109,Class Laboratory,24,1,Psychology,Psychology Building,Psychology Building Room 109
PSY 0031 C,Stats For Behav Sci,LAB,Sloboda Lara N,9/2/14,12/8/14,R,4:00 PM,6:30 PM,M021 109,Class Laboratory,24,1,Psychology,Psychology Building,Psychology Building Room 109
PSY 0031 D,Stats For Behav Sci,LAB,Sloboda Lara N,9/2/14,12/8/14,R,6:30 PM,9:00 PM,M021 109,Class Laboratory,24,1,Psychology,Psychology Building,Psychology Building Room 109
PSY 0031 E,Stats For Behav Sci,LAB,Sloboda Lara N,9/2/14,12/8/14,F,9:00 AM,11:30 AM,M021 109,Class Laboratory,23,1,Psychology,Psychology Building,Psychology Building Room 109
PSY 0031 F,Stats For Behav Sci,LAB,Sloboda Lara N,9/2/14,12/8/14,F,1:30 PM,4:00 PM,M021 109,Class Laboratory,21,1,Psychology,Psychology Building,Psychology Building Room 109
PSY 0032 01,Experimental Psychology,LEC,Sommers Samuel,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M151 302,Classroom,96,1,Psychology,Cabot Center,Cabot Asean Aud.
PSY 0032 A,Experimental Psychology,LAB,Sommers Samuel,9/2/14,12/8/14,T,9:00 AM,11:30 AM,M021 109,Class Laboratory,23,1,Psychology,Psychology Building,Psychology Building Room 109
PSY 0032 B,Experimental Psychology,LAB,Sommers Samuel,9/2/14,12/8/14,T,1:30 PM,4:00 PM,M021 109,Class Laboratory,24,1,Psychology,Psychology Building,Psychology Building Room 109
PSY 0032 C,Experimental Psychology,LAB,Sommers Samuel,9/2/14,12/8/14,T,6:30 PM,9:00 PM,M021 109,Class Laboratory,24,1,Psychology,Psychology Building,Psychology Building Room 109
PSY 0032 D,Experimental Psychology,LAB,Sommers Samuel,9/2/14,12/8/14,M,6:30 PM,9:00 PM,M021 109,Class Laboratory,25,1,Psychology,Psychology Building,Psychology Building Room 109
PSY 0036 01,Exp Social Psy,LEC,Rock Mindi,9/2/14,12/8/14,W,6:30 PM,9:00 PM,M021 109,Class Laboratory,18,1,Psychology,Psychology Building,Psychology Building Room 109
PSY 0038 01,Res Meth Clin Psy,LEC,Vanelzakker Michael B.,9/2/14,12/8/14,M,1:30 PM,4:00 PM,M021 109,Class Laboratory,22,1,Psychology,Psychology Building,Psychology Building Room 109
PSY 0040 01,Lab:physio Psychology,LEC,Miczek Klaus A,9/2/14,12/8/14,MW,8:30 AM,9:20 AM,M025 102A,Conference Room,8,1,Psychology,Bacon Hall,Bacon Hall Room 102A
PSY 0041 01,Percept/cognitn Lab,LEC,Taylor Holly,9/2/14,12/8/14,M,1:30 PM,4:00 PM,M021 201,Lecture Room,6,1,Psychology,Psychology Building,Psychology Building Room 201
PSY 0049 01,Lab:psychophysiology,LEC,Holcomb Phillip J,9/2/14,12/8/14,M,1:30 PM,4:00 PM,M021 301,Lecture Room,6,1,Psychology,Psychology Building,Psychology Building Room 301
PSY 0053 01,Engineering Psychology,LEC,Brunye Thaddeus T,9/2/14,12/8/14,F,9:00 AM,11:30 AM,M003 208,Classroom,16,1,Psychology,Anderson Hall,Anderson 208
PSY 0056 01,Drugs & Behavior,LEC,Cohen Carolyn,9/2/14,12/8/14,M,1:30 PM,4:00 PM,M003 312,Classroom,48,1,Psychology,Anderson Hall,Anderson 312
PSY 0064 01,Intro To Linguistics,LEC,Goldberg Ariel M,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M009 106,Classroom,24,1,Psychology,Pearson Laboratory,Pearson 106
PSY 0071 01,Clinical Methods,LEC,Greenwald Deborah,9/2/14,12/8/14,F,1:30 PM,4:00 PM,M022 153,Classroom,23,1,Psychology,Robinson Hall,Robinson 153
PSY 0103 01,Brain & Behavior,LEC,Miczek Klaus A,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M003 306,Classroom,35,1,Psychology,Anderson Hall,Anderson 306
PSY 0106 01,Sem:clinical Psychology,LEC,Harder David W,9/2/14,12/8/14,R,1:30 PM,4:00 PM,M012 163,Seminar Room,17,1,Psychology,Eliot Pearson Center,Eliot-Pearson 163
PSY 0107 01,Adv Statistics I,LEC,Chechile Richard A,9/2/14,12/8/14,F,12:00 PM,1:15 PM,M021 109,Class Laboratory,17,1,Psychology,Psychology Building,Psychology Building Room 109
PSY 0107 01,Adv Statistics I,LEC,Chechile Richard A,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M007 223,Classroom,17,1,Psychology,Braker Hall,Braker 223
PSY 0120 01,Project Study/human Sys A,LEC,Aurelio David,9/2/14,12/8/14,W,6:00 PM,7:15 PM,M003 210,Classroom,0,0,Psychology,Anderson Hall,Anderson 210
PSY 0127 01,Behav Endocrinology,LEC,DeBold Joseph F,9/2/14,12/8/14,TR,3:00 PM,4:15 PM,M024 310,Classroom,14,1,Psychology,Tisch Library,Tisch 310
PSY 0128 01,Nutrition & Behavior,LEC,Goldsmith Marcy Coppelman,9/2/14,12/8/14,W,1:30 PM,4:00 PM,M013 101,Classroom,12,1,Psychology,26 Winthrop Street,26 Winthrop St Room 101
PSY 0129 01,Cognitive Neuroscience,LEC,Holcomb Phillip J,9/2/14,12/8/14,M,6:30 PM,9:00 PM,M021 301,Lecture Room,14,1,Psychology,Psychology Building,Psychology Building Room 301
PSY 0131 01,Cog Neuro Psych,LEC,Goldberg Ariel M,9/2/14,12/8/14,M,9:00 AM,11:30 AM,M003 312,Classroom,15,1,Psychology,Anderson Hall,Anderson 312
PSY 0133 01,Psychology & The Law,LEC,Sommers Samuel,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M002 007,Classroom,29,1,Psychology,Bromfield Pearson,Bromfield-Pearson 007
PSY 0134 01,Intrper/conf&negotiation,LEC,Nathanson Sinaia,9/2/14,12/8/14,M,1:30 PM,4:00 PM,M027 007,Seminar Room,12,1,Psychology,Paige Hall,Paige 007
PSY 0140 01,Mathematical Psychology,LEC,Chechile Richard A,9/2/14,12/8/14,TR,4:30 PM,5:45 PM,M021 201,Lecture Room,3,1,Psychology,Psychology Building,Psychology Building Room 201
PSY 0142 01,Seminar Aff Neuroscience,LEC,Urry Heather L.,9/2/14,12/8/14,W,1:30 PM,4:00 PM,M021 201,Lecture Room,10,1,Psychology,Psychology Building,Psychology Building Room 201
PSY 0150 01,Semantics,LEC,Jackendoff Ray S.,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M017 224,Classroom,4,1,Psychology,Miner Hall,Miner 224
PSY 0181 01,Superv Seminar Fieldwork A,LEC,Harder David W,9/2/14,12/8/14,F,9:30 AM,11:30 AM,M118 103,Seminar Room,10,0,Psychology,Fine Arts House,11 Talbot Ave 103
PSY 0181 02,Superv Seminar Fieldwork A,LEC,Kuperberg Gina R.,9/2/14,12/8/14,R,6:30 PM,9:00 PM,M021 301,Lecture Room,18,0,Psychology,Psychology Building,Psychology Building Room 301
PSY 0195 01,Sr Sem:cognitive&brain A,LEC,Thomas Ayanna K.,9/2/14,12/8/14,M,3:00 PM,4:00 PM,M021 111,Seminar Room,30,0,Psychology,Psychology Building,Psychology Building Conf Rm
PSY 0196 01,Seminar In Psychology,LEC,Muentener Paul,9/2/14,12/8/14,W,1:30 PM,4:00 PM,M013 108,Classroom,3,1,Psychology,26 Winthrop Street,26 Winthrop St Room 108
PSY 0196 02,Seminar In Psychology,LEC,Kanarek Robin,9/2/14,12/8/14,W,1:30 PM,4:00 PM,M040 005,Classroom,17,1,Psychology,Jackson Gym,Jackson 005
PSY 0212 01,Psychopathology,LEC,Shin Lisa,9/2/14,12/8/14,W,9:00 AM,11:30 AM,M021 201,Lecture Room,3,1,Psychology,Psychology Building,Psychology Building Room 201
PSY 0240 01,Mathematical Psychology,LEC,Chechile Richard A,9/2/14,12/8/14,TR,4:30 PM,5:45 PM,M021 201,Lecture Room,1,1,Psychology,Psychology Building,Psychology Building Room 201
PSY 0242 01,Seminar Aff Neuroscience,LEC,Urry Heather L.,9/2/14,12/8/14,W,1:30 PM,4:00 PM,M021 201,Lecture Room,9,1,Psychology,Psychology Building,Psychology Building Room 201
PSY 0248 01,The Predictive Mind,LEC,Kuperberg Gina R.,9/2/14,12/8/14,R,1:30 PM,4:00 PM,M021 301,Lecture Room,17,1,Psychology,Psychology Building,Psychology Building Room 301
PSY 0260 01,Sem:teaching In Psy,LEC,Taylor Holly,9/2/14,12/8/14,T,9:00 AM,11:30 AM,M021 301,Lecture Room,12,1,Psychology,Psychology Building,Psychology Building Room 301
REL 0001 01,Intro To Religion,LEC,Walser Joseph,9/2/14,12/8/14,T,9:00 AM,11:30 AM,M027 113,Classroom,42,1,Religion,Paige Hall,Paige Crane Room
REL 0004 01,Introduction to World Art I,LEC,Abramson Daniel,9/2/14,12/8/14,MW,10:30 AM,11:20 AM,M019 102,Assembly,7,1,Religion,Aidekman Arts Center,Cohen Auditorium
REL 0004 A,Introduction to World Art I,RCT,TBD,9/2/14,12/8/14,M,4:30 PM,5:20 PM,M118 103,Seminar Room,0,1,Religion,Fine Arts House,11 Talbot Ave 103
REL 0004 B,Introduction to World Art I,RCT,TBD,9/2/14,12/8/14,M,6:00 PM,6:50 PM,M118 103,Seminar Room,2,1,Religion,Fine Arts House,11 Talbot Ave 103
REL 0004 C,Introduction to World Art I,RCT,TBD,9/2/14,12/8/14,T,12:00 PM,12:50 PM,M040 006,Classroom,0,1,Religion,Jackson Gym,Jackson 006
REL 0004 D,Introduction to World Art I,RCT,TBD,9/2/14,12/8/14,T,4:30 PM,5:20 PM,M118 103,Seminar Room,0,1,Religion,Fine Arts House,11 Talbot Ave 103
REL 0004 E,Introduction to World Art I,RCT,TBD,9/2/14,12/8/14,W,3:00 PM,3:50 PM,M040 006,Classroom,0,1,Religion,Jackson Gym,Jackson 006
REL 0004 F,Introduction to World Art I,RCT,TBD,9/2/14,12/8/14,R,12:00 PM,12:50 PM,M019 012,Classroom,2,1,Religion,Aidekman Arts Center,Aidekman 012
REL 0004 G,Introduction to World Art I,RCT,TBD,9/2/14,12/8/14,R,6:00 PM,6:50 PM,M118 103,Seminar Room,3,1,Religion,Fine Arts House,11 Talbot Ave 103
REL 0005 01,Intro Arts Of Asia,LEC,Kaminishi Ikumi,9/2/14,12/8/14,TR,4:30 PM,5:45 PM,M024 316,Classroom,3,1,Religion,Tisch Library,Tisch 316
REL 0012 01,The Arts Of Japan,LEC,Kaminishi Ikumi,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M024 316,Classroom,6,1,Religion,Tisch Library,Tisch 316
REL 0021 01,Intro To Hebrew Bible,LEC,Hutaff Margaret,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M010 203,Classroom,18,1,Religion,Eaton Hall,Eaton 203
REL 0025 01,Medieval Architecture,LEC,Overbey Karen E.,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M019 009,Classroom,2,1,Religion,Aidekman Arts Center,Aidekman 009
REL 0028 01,Medieval Art Mediterrane,LEC,Hoffman Eva R,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M019 009,Classroom,3,1,Religion,Aidekman Arts Center,Aidekman 009
REL 0036 01,Hist of Christianity 1,LEC,Eyl Jennifer,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M024 314,Classroom,9,1,Religion,Tisch Library,Tisch 314
REL 0039 01,Religion in America 1,LEC,Curtis Heather D,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M010 202,Classroom,10,1,Religion,Eaton Hall,Eaton 202
REL 0045 01,Intro To Buddhism,LEC,Walser Joseph,9/2/14,12/8/14,M,6:30 PM,9:00 PM,M019 013,Classroom,20,1,Religion,Aidekman Arts Center,Aidekman 013
REL 0048 01,Intro To Islam,LEC,Garden Kenneth,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M040 005,Classroom,33,1,Religion,Jackson Gym,Jackson 005
REL 0055 01,Tech & Jewish Oral Trad,LEC,Summit Jeffrey,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M195 251,Classroom,1,1,Religion,Music Building,Granoff 251
REL 0068 01,Martin Luther:man & Era,LEC,Brown Daniel W,9/2/14,12/8/14,TR,3:00 PM,4:15 PM,M086 318,Classroom,2,1,Religion,Olin Center,Olin 318
REL 0073 01,Aspects Sephardic Trad,LEC,Ascher Gloria J,9/2/14,12/8/14,TR,4:30 PM,5:45 PM,M086 116,Classroom,1,1,Religion,Olin Center,Olin 116
REL 0099 01,Theory & Method Religion,LEC,Lemons Elizabeth B,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M010 203,Classroom,8,1,Religion,Eaton Hall,Eaton 203
REL 0100 01,Religion And Film,LEC,Lemons Elizabeth B,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M024 314,Classroom,15,1,Religion,Tisch Library,Tisch 314
REL 0107 01,Evangelicalism in America,LEC,Curtis Heather D,9/2/14,12/8/14,W,9:00 AM,11:30 AM,M010 124,Seminar Room,7,1,Religion,Eaton Hall,Eaton 124
REL 0125 01,Medieval Architecture,LEC,Overbey Karen E.,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M019 009,Classroom,0,1,Religion,Aidekman Arts Center,Aidekman 009
REL 0128 01,Medieval Art Mediterrane,LEC,Hoffman Eva R,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M019 009,Classroom,0,1,Religion,Aidekman Arts Center,Aidekman 009
REL 0134 01,Myth Ritual & Symbol,LEC,Stanton Catherine Louise,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M010 203,Classroom,5,1,Religion,Eaton Hall,Eaton 203
REL 0137 01,King David Israelite Mon,LEC,Rosenberg Joel,9/2/14,12/8/14,W,4:30 PM,7:15 PM,M086 107,Classroom,2,1,Religion,Olin Center,Olin 107
REL 0143 01,Sociology Of Religion,LEC,Aymer Paula,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M024 304,Classroom,4,1,Religion,Tisch Library,Tisch 304
REL 0149 01,Religion Colonial India,LEC,Hatcher Brian A.,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M010 207,Classroom,4,1,Religion,Eaton Hall,Eaton 207
REL 0157 01,Theories Spiritual Dev,LEC,Scarlett W George,9/2/14,12/8/14,R,1:30 PM,4:00 PM,M012 157,Classroom,2,1,Religion,Eliot Pearson Center,Eliot-Pearson 157
REL 0191 02,Special Topics,LEC,Garden Kenneth,9/2/14,12/8/14,TR,3:00 PM,4:15 PM,M010 207,Classroom,6,1,Religion,Eaton Hall,Eaton 207
REL 0191 03,Special Topics,LEC,Eyl Jennifer,9/2/14,12/8/14,T,1:30 PM,4:00 PM,M010 124,Seminar Room,3,1,Religion,Eaton Hall,Eaton 124
RUS 0001 A,Elementary Russian,LEC,Lemelin Christopher,9/2/14,12/8/14,F,1:30 PM,2:20 PM,M086 116,Classroom,12,1,Russian,Olin Center,Olin 116
RUS 0001 A,Elementary Russian,LEC,Lemelin Christopher,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M086 103,Classroom,12,1,Russian,Olin Center,Olin 103
RUS 0001 B,Elementary Russian,LEC,Iffland Petrov Nancy,9/2/14,12/8/14,F,10:30 AM,11:20 AM,M086 102,Classroom,9,1,Russian,Olin Center,Olin 102
RUS 0001 B,Elementary Russian,LEC,Iffland Petrov Nancy,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M027 007,Seminar Room,9,1,Russian,Paige Hall,Paige 007
RUS 0003 A,Intermediate Russian,LEC,Lemelin Christopher,9/2/14,12/8/14,F,12:00 PM,12:50 PM,M086 103,Classroom,14,1,Russian,Olin Center,Olin 103
RUS 0003 A,Intermediate Russian,LEC,Lemelin Christopher,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M086 103,Classroom,14,1,Russian,Olin Center,Olin 103
RUS 0021 01,Composition/conversation,LEC,Chaput Patricia,9/2/14,12/8/14,F,12:00 PM,12:50 PM,M086 102,Classroom,4,1,Russian,Olin Center,Olin 102
RUS 0021 01,Composition/conversation,LEC,Chaput Patricia,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M086 334,Classroom,4,1,Russian,Olin Center,Olin Center Room 334
RUS 0080 01,Russian Film,LEC,Johnson Vida T,9/2/14,12/8/14,TR,4:30 PM,7:00 PM,M086 012,Classroom,9,1,Russian,Olin Center,Olin 012
RUS 0091 01,Special Topics,LEC,Carleton Gregory,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M086 012,Classroom,4,1,Russian,Olin Center,Olin 012
RUS 0091 02,Special Topics,LEC,Lemelin Christopher,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M086 011,Classroom,13,1,Russian,Olin Center,Olin 011
RUS 0121 01,Advanced Russian,LEC,Gassel-Vozlinskaya Tatyana,9/2/14,12/8/14,F,10:30 AM,11:20 AM,M086 111,Classroom,7,1,Russian,Olin Center,Olin 111
RUS 0121 01,Advanced Russian,LEC,Gassel-Vozlinskaya Tatyana,9/2/14,12/8/14,MW,4:30 PM,5:45 PM,M086 318,Classroom,7,1,Russian,Olin Center,Olin 318
RUS 0123 01,Russia Today: Bus & Pol,LEC,Gassel-Vozlinskaya Tatyana,9/2/14,12/8/14,MW,6:00 PM,7:15 PM,M086 006,Classroom,6,1,Russian,Olin Center,Olin 006 
RUS 0191 02,Special Topics,LEC,Lemelin Christopher,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M086 011,Classroom,3,1,Russian,Olin Center,Olin 011
SOC 0001 01,Intro To Sociology,LEC,Dhingra Pawan,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M010 201,Classroom,74,1,Sociology,Eaton Hall,Eaton 201 
SOC 0030 01,Sex & Gender In Society,LEC,Nava-coulter Brett,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M010 202,Classroom,46,1,Sociology,Eaton Hall,Eaton 202
SOC 0040 01,Media And Society,LEC,Sobieraj Sarah,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M010 201,Classroom,62,1,Sociology,Eaton Hall,Eaton 201 
SOC 0094 01,Special Topics,LEC,Vecitis Katherine Sirles,9/2/14,12/8/14,TR,4:30 PM,5:45 PM,M024 314,Classroom,28,1,Sociology,Tisch Library,Tisch 314
SOC 0094 02,Special Topics,LEC,Nava-coulter Brett,9/2/14,12/8/14,MW,4:30 PM,5:45 PM,M010 201,Classroom,20,1,Sociology,Eaton Hall,Eaton 201 
SOC 0101 01,Quant Research Methods,LEC,Clerge Orly,9/2/14,12/8/14,TR,3:00 PM,4:15 PM,M010 201,Classroom,62,1,Sociology,Eaton Hall,Eaton 201 
SOC 0102 01,Qualitative Res Methods,LEC,Marrow Helen B.,9/2/14,12/8/14,R,12:00 PM,2:30 PM,M010 124,Seminar Room,15,1,Sociology,Eaton Hall,Eaton 124
SOC 0110 01,Racial/ethnic Minorities,LEC,Aymer Paula,9/2/14,12/8/14,MW,4:30 PM,5:45 PM,M010 207,Classroom,10,1,Sociology,Eaton Hall,Eaton 207
SOC 0112 01,Criminology,LEC,Vecitis Katherine Sirles,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M003 210,Classroom,26,1,Sociology,Anderson Hall,Anderson 210
SOC 0120 01,Soc Of War & Peace,LEC,Joseph Paul I,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M024 316,Classroom,29,1,Sociology,Tisch Library,Tisch 316
SOC 0130 01,Social Inequalities/Social Jus,LEC,Rodriquez Tomas,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M009 112,Classroom,9,1,Sociology,Pearson Laboratory,Pearson 112
SOC 0135 01,Social Movements,LEC,Leondar-Wright Betsy,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M006 100A,Classroom,13,1,Sociology,Lane Hall,Lane 100A
SOC 0141 01,Medical Sociology,LEC,Gillespie Christopher K.,9/2/14,12/8/14,TR,6:00 PM,7:15 PM,M010 202,Classroom,11,1,Sociology,Eaton Hall,Eaton 202
SOC 0143 01,Sociology Of Religion,LEC,Aymer Paula,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M024 304,Classroom,4,1,Sociology,Tisch Library,Tisch 304
SOC 0149 08,Selected Topics In Soc,LEC,Joseph Paul I,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M010 124,Seminar Room,7,1,Sociology,Eaton Hall,Eaton 124
SOC 0149 15,Selected Topics In Soc,LEC,Weber Shannon Nicolle,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M010 201,Classroom,15,1,Sociology,Eaton Hall,Eaton 201 
SOC 0188 04,Seminar In Current Soc,LEC,Sobieraj Sarah,9/2/14,12/8/14,T,1:30 PM,4:00 PM,M006 100A,Classroom,14,1,Sociology,Lane Hall,Lane 100A
SOC 0190 01,Politics/media Immigr,LEC,Marrow Helen B.,9/2/14,12/8/14,W,1:30 PM,4:00 PM,M024 310,Classroom,15,1,Sociology,Tisch Library,Tisch 310
SPN 0001 A,Elem Spanish I,LEC,Oppenheim Adele W,9/2/14,12/8/14,MW,8:30 AM,9:20 AM,M086 113,Classroom,16,1,Spanish,Olin Center,Olin 113
SPN 0001 A,Elem Spanish I,LEC,Oppenheim Adele W,9/2/14,12/8/14,R,9:30 AM,10:20 AM,M086 113,Classroom,16,1,Spanish,Olin Center,Olin 113
SPN 0001 AZ,Elem Spanish I,LEC,Klatt Andrew J,9/2/14,12/8/14,MW,8:30 AM,9:20 AM,M086 111,Classroom,15,1,Spanish,Olin Center,Olin 111
SPN 0001 AZ,Elem Spanish I,LEC,Klatt Andrew J,9/2/14,12/8/14,R,9:30 AM,10:20 AM,M086 111,Classroom,15,1,Spanish,Olin Center,Olin 111
SPN 0001 B,Elem Spanish I,LEC,Oppenheim Adele W,9/2/14,12/8/14,TRF,8:30 AM,9:20 AM,M086 113,Classroom,15,1,Spanish,Olin Center,Olin 113
SPN 0001 C,Elem Spanish I,LEC,Haltom Pam,9/2/14,12/8/14,TWF,9:30 AM,10:20 AM,M086 112,Classroom,15,1,Spanish,Olin Center,Olin 112
SPN 0001 D,Elem Spanish I,LEC,Haltom Pam,9/2/14,12/8/14,MWF,10:30 AM,11:20 AM,M086 006,Classroom,16,1,Spanish,Olin Center,Olin 006 
SPN 0001 E,Elem Spanish I,LEC,Tano Cheryl Anne,9/2/14,12/8/14,F,3:30 PM,4:20 PM,M086 006,Classroom,11,1,Spanish,Olin Center,Olin 006 
SPN 0001 E,Elem Spanish I,LEC,Tano Cheryl Anne,9/2/14,12/8/14,MW,3:00 PM,3:50 PM,M086 006,Classroom,11,1,Spanish,Olin Center,Olin 006 
SPN 0001 F,Elem Spanish I,LEC,Tano Cheryl Anne,9/2/14,12/8/14,M,4:30 PM,5:20 PM,M086 113,Classroom,16,1,Spanish,Olin Center,Olin 113
SPN 0001 F,Elem Spanish I,LEC,Tano Cheryl Anne,9/2/14,12/8/14,TR,3:00 PM,3:50 PM,M086 113,Classroom,16,1,Spanish,Olin Center,Olin 113
SPN 0001 G,Elem Spanish I,LEC,Tano Cheryl Anne,9/2/14,12/8/14,TWR,4:30 PM,5:20 PM,M086 113,Classroom,14,1,Spanish,Olin Center,Olin 113
SPN 0002 A,Elem Spanish II,LEC,Haltom Pam,9/2/14,12/8/14,MW,8:30 AM,9:20 AM,M086 006,Classroom,16,1,Spanish,Olin Center,Olin 006 
SPN 0002 A,Elem Spanish II,LEC,Haltom Pam,9/2/14,12/8/14,R,9:30 AM,10:20 AM,M086 006,Classroom,16,1,Spanish,Olin Center,Olin 006 
SPN 0002 B,Elem Spanish II,LEC,Oppenheim Adele W,9/2/14,12/8/14,TWF,9:30 AM,10:20 AM,M086 001,Classroom,15,1,Spanish,Olin Center,Olin 001
SPN 0002 C,Elem Spanish II,LEC,de Laire Mulgrew Anne,9/2/14,12/8/14,M,9:30 AM,10:20 AM,M038 016,Classroom,18,1,Spanish,East Hall,East 016
SPN 0002 C,Elem Spanish II,LEC,de Laire Mulgrew Anne,9/2/14,12/8/14,TR,10:30 AM,11:20 AM,M038 016,Classroom,18,1,Spanish,East Hall,East 016
SPN 0002 D,Elem Spanish II,LEC,Paolini Elena,9/2/14,12/8/14,F,3:30 PM,4:20 PM,M086 113,Classroom,11,1,Spanish,Olin Center,Olin 113
SPN 0002 D,Elem Spanish II,LEC,Paolini Elena,9/2/14,12/8/14,MW,3:00 PM,3:50 PM,M086 113,Classroom,11,1,Spanish,Olin Center,Olin 113
SPN 0002 E,Elem Spanish II,LEC,Fernandez-Garcia Marisol,9/2/14,12/8/14,MWF,1:30 PM,2:20 PM,M086 220,Classroom,10,1,Spanish,Olin Center,Olin 220
SPN 0002 F,Elem Spanish II,LEC,Smith Patricia,9/2/14,12/8/14,MWR,4:30 PM,5:20 PM,M086 102,Classroom,8,1,Spanish,Olin Center,Olin 102
SPN 0002 RA,Elem Spanish II,RCT,Rosso-O'Laughlin Marta R,9/2/14,12/8/14,M,12:00 PM,12:40 PM,M086 101,Classroom,10,1,Spanish,Olin Center,Olin 101
SPN 0002 RB,Elem Spanish II,RCT,Rosso-O'Laughlin Marta R,9/2/14,12/8/14,M,12:00 PM,12:40 PM,M086 102,Classroom,11,1,Spanish,Olin Center,Olin 102
SPN 0002 RC,Elem Spanish II,RCT,Rosso-O'Laughlin Marta R,9/2/14,12/8/14,M,12:45 PM,1:25 PM,M086 101,Classroom,11,1,Spanish,Olin Center,Olin 101
SPN 0002 RD,Elem Spanish II,RCT,Rosso-O'Laughlin Marta R,9/2/14,12/8/14,M,6:00 PM,6:40 PM,M086 101,Classroom,10,1,Spanish,Olin Center,Olin 101
SPN 0002 RE,Elem Spanish II,RCT,Rosso-O'Laughlin Marta R,9/2/14,12/8/14,T,4:30 PM,5:10 PM,M086 001,Classroom,11,1,Spanish,Olin Center,Olin 001
SPN 0002 RF,Elem Spanish II,RCT,Rosso-O'Laughlin Marta R,9/2/14,12/8/14,T,5:15 PM,5:55 PM,M086 001,Classroom,3,1,Spanish,Olin Center,Olin 001
SPN 0002 RG,Elem Spanish II,RCT,Rosso-O'Laughlin Marta R,9/2/14,12/8/14,T,6:00 PM,6:40 PM,M086 102,Classroom,0,1,Spanish,Olin Center,Olin 102
SPN 0002 RH,Elem Spanish II,RCT,Rosso-O'Laughlin Marta R,9/2/14,12/8/14,W,12:00 PM,12:40 PM,M086 006,Classroom,10,1,Spanish,Olin Center,Olin 006 
SPN 0002 RJ,Elem Spanish II,RCT,Rosso-O'Laughlin Marta R,9/2/14,12/8/14,W,4:30 PM,5:10 PM,M086 103,Classroom,7,1,Spanish,Olin Center,Olin 103
SPN 0002 RK,Elem Spanish II,RCT,Rosso-O'Laughlin Marta R,9/2/14,12/8/14,W,6:00 PM,6:40 PM,M086 108,Classroom,4,1,Spanish,Olin Center,Olin 108
SPN 0003 A,Intermed Spanish I,LEC,Older Dora V,9/2/14,12/8/14,MW,8:30 AM,9:20 AM,M086 112,Classroom,17,1,Spanish,Olin Center,Olin 112
SPN 0003 A,Intermed Spanish I,LEC,Older Dora V,9/2/14,12/8/14,R,9:30 AM,10:20 AM,M086 112,Classroom,17,1,Spanish,Olin Center,Olin 112
SPN 0003 B,Intermed Spanish I,LEC,Older Dora V,9/2/14,12/8/14,TRF,8:30 AM,9:20 AM,M086 112,Classroom,15,1,Spanish,Olin Center,Olin 112
SPN 0003 C,Intermed Spanish I,LEC,Older Dora V,9/2/14,12/8/14,TWF,9:30 AM,10:20 AM,M086 101,Classroom,16,1,Spanish,Olin Center,Olin 101
SPN 0003 D,Intermed Spanish I,LEC,Gonzalez Pedemonte Nilza V,9/2/14,12/8/14,M,9:30 AM,10:20 AM,M086 113,Classroom,15,1,Spanish,Olin Center,Olin 113
SPN 0003 D,Intermed Spanish I,LEC,Gonzalez Pedemonte Nilza V,9/2/14,12/8/14,TR,10:30 AM,11:20 AM,M086 113,Classroom,15,1,Spanish,Olin Center,Olin 113
SPN 0003 E,Intermed Spanish I,LEC,Gonzalez Pedemonte Nilza V,9/2/14,12/8/14,MWF,10:30 AM,11:20 AM,M086 220,Classroom,17,1,Spanish,Olin Center,Olin 220
SPN 0003 F,Intermed Spanish I,LEC,Belansky Aida,9/2/14,12/8/14,TRF,12:00 PM,12:50 PM,M086 218,Classroom,15,1,Spanish,Olin Center,Olin 218
SPN 0003 G,Intermed Spanish I,LEC,de Laire Mulgrew Anne,9/2/14,12/8/14,MWF,1:30 PM,2:20 PM,M086 006,Classroom,16,1,Spanish,Olin Center,Olin 006 
SPN 0003 H,Intermed Spanish I,LEC,Dietrick Charles P,9/2/14,12/8/14,MWF,1:30 PM,2:20 PM,M086 113,Classroom,16,1,Spanish,Olin Center,Olin 113
SPN 0003 J,Intermed Spanish I,LEC,de Laire Mulgrew Anne,9/2/14,12/8/14,F,2:30 PM,3:20 PM,M086 220,Classroom,15,1,Spanish,Olin Center,Olin 220
SPN 0003 J,Intermed Spanish I,LEC,de Laire Mulgrew Anne,9/2/14,12/8/14,TR,1:30 PM,2:20 PM,M086 220,Classroom,15,1,Spanish,Olin Center,Olin 220
SPN 0003 K,Intermed Spanish I,LEC,Belansky Aida,9/2/14,12/8/14,M,4:30 PM,5:20 PM,M086 220,Classroom,13,1,Spanish,Olin Center,Olin 220
SPN 0003 K,Intermed Spanish I,LEC,Belansky Aida,9/2/14,12/8/14,TR,3:00 PM,3:50 PM,M086 220,Classroom,13,1,Spanish,Olin Center,Olin 220
SPN 0003 L,Intermed Spanish I,LEC,Belansky Aida,9/2/14,12/8/14,TWR,4:30 PM,5:20 PM,M086 112,Classroom,16,1,Spanish,Olin Center,Olin 112
SPN 0003 M,Intermed Spanish I,LEC,Mederos Raysa,9/2/14,12/8/14,MTR,6:00 PM,6:50 PM,M086 113,Classroom,16,1,Spanish,Olin Center,Olin 113
SPN 0004 A,Intermed Spanish II,LEC,Risse Katherine,9/2/14,12/8/14,MW,8:30 AM,9:20 AM,M086 110,Classroom,14,1,Spanish,Olin Center,Olin 110
SPN 0004 A,Intermed Spanish II,LEC,Risse Katherine,9/2/14,12/8/14,R,9:30 AM,10:20 AM,M086 110,Classroom,14,1,Spanish,Olin Center,Olin 110
SPN 0004 B,Intermed Spanish II,LEC,Risse Katherine,9/2/14,12/8/14,TWF,9:30 AM,10:20 AM,M086 111,Classroom,16,1,Spanish,Olin Center,Olin 111
SPN 0004 C,Intermed Spanish II,LEC,Risse Katherine,9/2/14,12/8/14,M,9:30 AM,10:20 AM,M086 006,Classroom,14,1,Spanish,Olin Center,Olin 006 
SPN 0004 C,Intermed Spanish II,LEC,Risse Katherine,9/2/14,12/8/14,TR,10:30 AM,11:20 AM,M086 006,Classroom,14,1,Spanish,Olin Center,Olin 006 
SPN 0004 D,Intermed Spanish II,LEC,Dietrick Charles P,9/2/14,12/8/14,MWF,10:30 AM,11:20 AM,M086 113,Classroom,11,1,Spanish,Olin Center,Olin 113
SPN 0004 E,Intermed Spanish II,LEC,Marcelin Teresa,9/2/14,12/8/14,TRF,12:00 PM,12:50 PM,M086 001,Classroom,10,1,Spanish,Olin Center,Olin 001
SPN 0004 F,Intermed Spanish II,LEC,Fernandez-Garcia Marisol,9/2/14,12/8/14,F,3:30 PM,4:20 PM,M086 107,Classroom,7,1,Spanish,Olin Center,Olin 107
SPN 0004 F,Intermed Spanish II,LEC,Fernandez-Garcia Marisol,9/2/14,12/8/14,MW,3:00 PM,3:50 PM,M086 107,Classroom,7,1,Spanish,Olin Center,Olin 107
SPN 0004 G,Intermed Spanish II,LEC,Marcelin Teresa,9/2/14,12/8/14,M,9:30 AM,10:20 AM,M019 012,Classroom,11,1,Spanish,Aidekman Arts Center,Aidekman 012
SPN 0004 G,Intermed Spanish II,LEC,Marcelin Teresa,9/2/14,12/8/14,TR,10:30 AM,11:20 AM,M019 012,Classroom,11,1,Spanish,Aidekman Arts Center,Aidekman 012
SPN 0004 H,Intermed Spanish II,LEC,Fernandez-Garcia Marisol,9/2/14,12/8/14,MWR,4:30 PM,5:20 PM,M086 006,Classroom,10,1,Spanish,Olin Center,Olin 006 
SPN 0004 RA,Intermed Spanish II,RCT,Dietrick Charles P,9/2/14,12/8/14,M,12:00 PM,12:40 PM,M086 110,Classroom,10,1,Spanish,Olin Center,Olin 110
SPN 0004 RB,Intermed Spanish II,RCT,Dietrick Charles P,9/2/14,12/8/14,M,12:00 PM,12:40 PM,M086 111,Classroom,11,1,Spanish,Olin Center,Olin 111
SPN 0004 RC,Intermed Spanish II,RCT,Dietrick Charles P,9/2/14,12/8/14,M,12:45 PM,1:25 PM,M086 110,Classroom,11,1,Spanish,Olin Center,Olin 110
SPN 0004 RD,Intermed Spanish II,RCT,Dietrick Charles P,9/2/14,12/8/14,M,12:45 PM,1:25 PM,M086 111,Classroom,9,1,Spanish,Olin Center,Olin 111
SPN 0004 RE,Intermed Spanish II,RCT,Dietrick Charles P,9/2/14,12/8/14,M,6:00 PM,6:40 PM,M086 108,Classroom,7,1,Spanish,Olin Center,Olin 108
SPN 0004 RF,Intermed Spanish II,RCT,Dietrick Charles P,9/2/14,12/8/14,T,4:30 PM,5:10 PM,M086 220,Classroom,9,1,Spanish,Olin Center,Olin 220
SPN 0004 RG,Intermed Spanish II,RCT,Dietrick Charles P,9/2/14,12/8/14,T,5:15 PM,5:55 PM,M086 102,Classroom,5,1,Spanish,Olin Center,Olin 102
SPN 0004 RH,Intermed Spanish II,RCT,Dietrick Charles P,9/2/14,12/8/14,W,12:00 PM,12:40 PM,M086 110,Classroom,11,1,Spanish,Olin Center,Olin 110
SPN 0004 RJ,Intermed Spanish II,RCT,Dietrick Charles P,9/2/14,12/8/14,W,12:00 PM,12:40 PM,M086 101,Classroom,11,1,Spanish,Olin Center,Olin 101
SPN 0004 RL,Intermed Spanish II,RCT,Dietrick Charles P,9/2/14,12/8/14,W,12:45 PM,1:25 PM,M086 101,Classroom,2,1,Spanish,Olin Center,Olin 101
SPN 0004 RM,Intermed Spanish II,RCT,Dietrick Charles P,9/2/14,12/8/14,W,6:00 PM,6:40 PM,M086 109,Classroom,7,1,Spanish,Olin Center,Olin 109
SPN 0021 A,Comp/conv I,LEC,Gonzalez Pedemonte Nilza V,9/2/14,12/8/14,MW,8:30 AM,9:20 AM,M086 220,Classroom,12,1,Spanish,Olin Center,Olin 220
SPN 0021 A,Comp/conv I,LEC,Gonzalez Pedemonte Nilza V,9/2/14,12/8/14,R,9:30 AM,10:20 AM,M086 220,Classroom,12,1,Spanish,Olin Center,Olin 220
SPN 0021 B,Comp/conv I,LEC,Cantu Anne,9/2/14,12/8/14,TRF,8:30 AM,9:20 AM,M086 111,Classroom,15,1,Spanish,Olin Center,Olin 111
SPN 0021 C,Comp/conv I,LEC,Cantu Anne,9/2/14,12/8/14,TWF,9:30 AM,10:20 AM,M086 220,Classroom,15,1,Spanish,Olin Center,Olin 220
SPN 0021 D,Comp/conv I,LEC,Rincon Calero Maria Ester,9/2/14,12/8/14,MWF,10:30 AM,11:20 AM,M003 212,Classroom,15,1,Spanish,Anderson Hall,Anderson 212
SPN 0021 E,Comp/conv I,LEC,Levy-Konesky Nancy,9/2/14,12/8/14,TRF,12:00 PM,12:50 PM,M086 111,Classroom,16,1,Spanish,Olin Center,Olin 111
SPN 0021 F,Comp/conv I,LEC,Rincon Calero Maria Ester,9/2/14,12/8/14,MWF,1:30 PM,2:20 PM,M086 109,Classroom,10,1,Spanish,Olin Center,Olin 109
SPN 0021 G,Comp/conv I,LEC,Levy-Konesky Nancy,9/2/14,12/8/14,F,2:30 PM,3:20 PM,M086 006,Classroom,14,1,Spanish,Olin Center,Olin 006 
SPN 0021 G,Comp/conv I,LEC,Levy-Konesky Nancy,9/2/14,12/8/14,TR,1:30 PM,2:20 PM,M086 006,Classroom,14,1,Spanish,Olin Center,Olin 006 
SPN 0021 H,Comp/conv I,LEC,Rincon Calero Maria Ester,9/2/14,12/8/14,M,4:30 PM,5:20 PM,M086 108,Classroom,15,1,Spanish,Olin Center,Olin 108
SPN 0021 H,Comp/conv I,LEC,Rincon Calero Maria Ester,9/2/14,12/8/14,TR,3:00 PM,3:50 PM,M086 108,Classroom,15,1,Spanish,Olin Center,Olin 108
SPN 0021 J,Comp/conv I,LEC,Rincon Calero Maria Ester,9/2/14,12/8/14,TWR,4:30 PM,5:20 PM,M086 218,Classroom,9,1,Spanish,Olin Center,Olin 218
SPN 0021 RA,Comp/conv I,RCT,Davis Maria-Concepcion Lagunas,9/2/14,12/8/14,M,12:00 PM,12:40 PM,M086 112,Classroom,10,1,Spanish,Olin Center,Olin 112
SPN 0021 RB,Comp/conv I,RCT,Davis Maria-Concepcion Lagunas,9/2/14,12/8/14,M,12:00 PM,12:40 PM,M086 113,Classroom,11,1,Spanish,Olin Center,Olin 113
SPN 0021 RC,Comp/conv I,RCT,Davis Maria-Concepcion Lagunas,9/2/14,12/8/14,M,12:45 PM,1:25 PM,M086 112,Classroom,11,1,Spanish,Olin Center,Olin 112
SPN 0021 RD,Comp/conv I,RCT,Davis Maria-Concepcion Lagunas,9/2/14,12/8/14,M,12:45 PM,1:25 PM,M086 113,Classroom,10,1,Spanish,Olin Center,Olin 113
SPN 0021 RE,Comp/conv I,RCT,Davis Maria-Concepcion Lagunas,9/2/14,12/8/14,M,6:00 PM,6:40 PM,M086 220,Classroom,9,1,Spanish,Olin Center,Olin 220
SPN 0021 RF,Comp/conv I,RCT,Davis Maria-Concepcion Lagunas,9/2/14,12/8/14,M,6:00 PM,6:40 PM,M086 102,Classroom,11,1,Spanish,Olin Center,Olin 102
SPN 0021 RG,Comp/conv I,RCT,Davis Maria-Concepcion Lagunas,9/2/14,12/8/14,T,4:30 PM,5:10 PM,M086 111,Classroom,8,1,Spanish,Olin Center,Olin 111
SPN 0021 RH,Comp/conv I,RCT,Davis Maria-Concepcion Lagunas,9/2/14,12/8/14,T,5:15 PM,5:55 PM,M086 220,Classroom,3,1,Spanish,Olin Center,Olin 220
SPN 0021 RJ,Comp/conv I,RCT,Davis Maria-Concepcion Lagunas,9/2/14,12/8/14,W,12:00 PM,12:40 PM,M086 111,Classroom,11,1,Spanish,Olin Center,Olin 111
SPN 0021 RK,Comp/conv I,RCT,Davis Maria-Concepcion Lagunas,9/2/14,12/8/14,W,12:00 PM,12:40 PM,M086 112,Classroom,12,1,Spanish,Olin Center,Olin 112
SPN 0021 RL,Comp/conv I,RCT,Davis Maria-Concepcion Lagunas,9/2/14,12/8/14,W,12:45 PM,1:25 PM,M086 111,Classroom,11,1,Spanish,Olin Center,Olin 111
SPN 0021 RM,Comp/conv I,RCT,Davis Maria-Concepcion Lagunas,9/2/14,12/8/14,W,12:45 PM,1:25 PM,M086 112,Classroom,8,1,Spanish,Olin Center,Olin 112
SPN 0021 RN,Comp/conv I,RCT,Davis Maria-Concepcion Lagunas,9/2/14,12/8/14,W,4:30 PM,5:10 PM,M086 220,Classroom,6,1,Spanish,Olin Center,Olin 220
SPN 0022 A,Comp/conv II,LEC,Cantu Anne,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M086 109,Classroom,18,1,Spanish,Olin Center,Olin 109
SPN 0022 B,Comp/conv II,LEC,Millay Amy,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M086 111,Classroom,15,1,Spanish,Olin Center,Olin 111
SPN 0022 C,Comp/conv II,LEC,Millay Amy,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M086 109,Classroom,17,1,Spanish,Olin Center,Olin 109
SPN 0022 D,Comp/conv II,LEC,Davis Maria-Concepcion Lagunas,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M086 113,Classroom,17,1,Spanish,Olin Center,Olin 113
SPN 0022 E,Comp/conv II,LEC,Simpson Dana,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M086 110,Classroom,17,1,Spanish,Olin Center,Olin 110
SPN 0022 F,Comp/conv II,LEC,Smith Patricia,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M086 102,Classroom,17,1,Spanish,Olin Center,Olin 102
SPN 0022 RA,Comp/conv II,RCT,Davis Maria-Concepcion Lagunas,9/2/14,12/8/14,M,12:00 PM,12:40 PM,M086 006,Classroom,10,1,Spanish,Olin Center,Olin 006 
SPN 0022 RB,Comp/conv II,RCT,Davis Maria-Concepcion Lagunas,9/2/14,12/8/14,M,12:45 PM,1:25 PM,M086 006,Classroom,11,1,Spanish,Olin Center,Olin 006 
SPN 0022 RC,Comp/conv II,RCT,Davis Maria-Concepcion Lagunas,9/2/14,12/8/14,M,12:45 PM,1:25 PM,M086 102,Classroom,11,1,Spanish,Olin Center,Olin 102
SPN 0022 RD,Comp/conv II,RCT,Davis Maria-Concepcion Lagunas,9/2/14,12/8/14,M,6:00 PM,6:40 PM,M086 001,Classroom,10,1,Spanish,Olin Center,Olin 001
SPN 0022 RE,Comp/conv II,RCT,Davis Maria-Concepcion Lagunas,9/2/14,12/8/14,M,6:00 PM,6:40 PM,M086 109,Classroom,9,1,Spanish,Olin Center,Olin 109
SPN 0022 RF,Comp/conv II,RCT,Davis Maria-Concepcion Lagunas,9/2/14,12/8/14,T,4:30 PM,5:10 PM,M086 006,Classroom,9,1,Spanish,Olin Center,Olin 006 
SPN 0022 RG,Comp/conv II,RCT,Davis Maria-Concepcion Lagunas,9/2/14,12/8/14,W,12:00 PM,12:40 PM,M086 113,Classroom,10,1,Spanish,Olin Center,Olin 113
SPN 0022 RH,Comp/conv II,RCT,Davis Maria-Concepcion Lagunas,9/2/14,12/8/14,W,12:00 PM,12:40 PM,M086 001,Classroom,11,1,Spanish,Olin Center,Olin 001
SPN 0022 RJ,Comp/conv II,RCT,Davis Maria-Concepcion Lagunas,9/2/14,12/8/14,W,12:45 PM,1:25 PM,M086 113,Classroom,8,1,Spanish,Olin Center,Olin 113
SPN 0022 RK,Comp/conv II,RCT,Davis Maria-Concepcion Lagunas,9/2/14,12/8/14,W,12:45 PM,1:25 PM,M086 001,Classroom,10,1,Spanish,Olin Center,Olin 001
SPN 0022 RL,Comp/conv II,RCT,Davis Maria-Concepcion Lagunas,9/2/14,12/8/14,W,5:15 PM,5:55 PM,M086 220,Classroom,10,1,Spanish,Olin Center,Olin 220
SPN 0022 RM,Comp/conv II,RCT,Davis Maria-Concepcion Lagunas,9/2/14,12/8/14,W,6:00 PM,6:40 PM,M086 110,Classroom,10,1,Spanish,Olin Center,Olin 110
SPN 0022 RN,Comp/conv II,RCT,Davis Maria-Concepcion Lagunas,9/2/14,12/8/14,W,12:45 PM,1:25 PM,M086 110,Classroom,10,1,Spanish,Olin Center,Olin 110
SPN 0022 XB,Comp/conv II,LEC,Levy-Konesky Nancy,9/2/14,12/8/14,TR,4:30 PM,5:45 PM,M086 110,Classroom,12,1,Spanish,Olin Center,Olin 110
SPN 0022 XC,Comp/conv II,LEC,Smith Patricia,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M086 102,Classroom,16,1,Spanish,Olin Center,Olin 102
SPN 0023 A,Span Heritage Speakers,LEC,Rosso-O'Laughlin Marta R,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M086 001,Classroom,5,1,Spanish,Olin Center,Olin 001
SPN 0031 A,Main Curr Spn Lit I,LEC,Simpson Dana,9/2/14,12/8/14,TR,4:30 PM,5:45 PM,M086 108,Classroom,9,1,Spanish,Olin Center,Olin 108
SPN 0031 B,Main Curr Spn Lit I,LEC,Pollakowski Kathleen,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M086 111,Classroom,5,1,Spanish,Olin Center,Olin 111
SPN 0031 C,Main Curr Spn Lit I,LEC,Marquez-Raffetto Tamara,9/2/14,12/8/14,TR,3:00 PM,4:15 PM,M086 110,Classroom,6,1,Spanish,Olin Center,Olin 110
SPN 0034 A,Survey Latin Amer Lit,LEC,Mazzotti Jose Antonio,9/2/14,12/8/14,TR,3:00 PM,4:15 PM,M086 111,Classroom,6,1,Spanish,Olin Center,Olin 111
SPN 0034 B,Survey Latin Amer Lit,LEC,Gerassi-Navarro Nina,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M086 110,Classroom,9,1,Spanish,Olin Center,Olin 110
SPN 0034 C,Survey Latin Amer Lit,LEC,Ruiz Pablo,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M086 111,Classroom,10,1,Spanish,Olin Center,Olin 111
SPN 0034 D,Survey Latin Amer Lit,LEC,Palou Pedro Angel,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M086 101,Classroom,5,1,Spanish,Olin Center,Olin 101
SPN 0091 01,Special Topics,LEC,Ascher Gloria J,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M086 011,Classroom,4,1,Spanish,Olin Center,Olin 011
SPN 0103 A,Latin Amer Novel,LEC,Millay Amy,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M086 102,Classroom,18,1,Spanish,Olin Center,Olin 102
SPN 0121 A,Adv Comp/conversation I,LEC,Berte Maria Juliana,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M086 220,Classroom,12,1,Spanish,Olin Center,Olin 220
SPN 0121 B,Adv Comp/conversation I,LEC,Berte Maria Juliana,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M086 220,Classroom,10,1,Spanish,Olin Center,Olin 220
SPN 0121 C,Adv Comp/conversation I,LEC,Davis Maria-Concepcion Lagunas,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M086 218,Classroom,13,1,Spanish,Olin Center,Olin 218
SPN 0122 A,Adv Comp&conversation II,LEC,Simpson Dana,9/2/14,12/8/14,TR,3:00 PM,4:15 PM,M086 112,Classroom,9,1,Spanish,Olin Center,Olin 112
SPN 0126 A,Spanish In The Community,LEC,Klatt Andrew J,9/2/14,12/8/14,R,6:30 PM,9:00 PM,M086 102,Classroom,9,1,Spanish,Olin Center,Olin 102
SPN 0141 A,Spn Drama Siglio De Oro,LEC,Marquez-Raffetto Tamara,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M086 108,Classroom,10,1,Spanish,Olin Center,Olin 108
SPN 0150 A,Latin Amer Civilization,LEC,Mazzotti Jose Antonio,9/2/14,12/8/14,TR,6:00 PM,7:15 PM,M086 101,Classroom,10,1,Spanish,Olin Center,Olin 101
SPN 0191 A,Special Topics,LEC,Pollakowski Kathleen,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M086 103,Classroom,5,1,Spanish,Olin Center,Olin 103
SPN 0191 B,Special Topics,LEC,Palou Pedro Angel,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M086 110,Classroom,19,1,Spanish,Olin Center,Olin 110
SPN 0191 C,Special Topics,LEC,Gerassi-Navarro Nina,9/2/14,12/8/14,MW,3:00 PM,4:15 PM,M086 334,Classroom,4,1,Spanish,Olin Center,Olin Center Room 334
SPN 0191 D,Special Topics,LEC,Ruiz Pablo,9/2/14,12/8/14,MW,4:30 PM,5:45 PM,M086 110,Classroom,14,1,Spanish,Olin Center,Olin 110
SPN 0193 22,Independent Study,LEC,Berte Maria Juliana,9/2/14,12/8/14,TR,1:30 PM,2:45 PM,M086 001,Classroom,0,1,Spanish,Olin Center,Olin 001
SWA 0001 01,Elementary Swahili I,LEC,Brown Daniel W,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M027 010,Classroom,9,1,Swahili,Paige Hall,Paige Terrace Room
SWA 0003 01,Intermediate Swahili I,LEC,Brown Daniel W,9/2/14,12/8/14,TR,10:30 AM,11:45 AM,M086 334,Classroom,5,1,Swahili,Olin Center,Olin Center Room 334
UEP 0113 01,Housing Policy,LEC,Greenstein Rosalind,9/2/14,12/8/14,R,6:30 PM,9:00 PM,M002 005,Classroom,6,1,Urban & Environmental Policy & Planning,Bromfield Pearson,Bromfield-Pearson 005
UEP 0130 01,Negot & Conflict Resol,LEC,Burdick Robert,9/2/14,12/8/14,R,6:00 PM,9:00 PM,M086 005,Classroom,19,1,Urban & Environmental Policy & Planning,Olin Center,Olin 005
UEP 0130 01,Negot & Conflict Resol,LEC,Burdick Robert,9/2/14,12/8/14,R,6:00 PM,9:00 PM,M086 005,Classroom,19,1,Urban & Environmental Policy & Planning,Olin Center,Olin 005
UEP 0130 01,Negot & Conflict Resol,LEC,Burdick Robert,9/2/14,12/8/14,R,6:00 PM,9:00 PM,M086 005,Classroom,19,1,Urban & Environmental Policy & Planning,Olin Center,Olin 005
UEP 0130 01,Negot & Conflict Resol,LEC,Burdick Robert,9/2/14,12/8/14,R,6:00 PM,9:00 PM,M086 005,Classroom,19,1,Urban & Environmental Policy & Planning,Olin Center,Olin 005
UEP 0130 01,Negot & Conflict Resol,LEC,Burdick Robert,9/2/14,12/8/14,R,6:00 PM,9:00 PM,M086 005,Classroom,19,1,Urban & Environmental Policy & Planning,Olin Center,Olin 005
UEP 0173 01,Transportation Planning,LEC,Chase Mark,9/2/14,12/8/14,T,6:00 PM,9:00 PM,M147 108,Classroom,10,1,Urban & Environmental Policy & Planning,97 Talbot Avenue,97 Talbot Ave Room 108
UEP 0173 02,Transportation Planning,LEC,Chase Mark,9/2/14,12/8/14,T,6:00 PM,9:00 PM,M147 108,Classroom,3,1,Urban & Environmental Policy & Planning,97 Talbot Avenue,97 Talbot Ave Room 108
UEP 0178 01,Urban Policy and Planning,LEC,Witten Jon,9/2/14,12/8/14,M,6:30 PM,9:00 PM,M002 005,Classroom,23,1,Urban & Environmental Policy & Planning,Bromfield Pearson,Bromfield-Pearson 005
UEP 0194 03,Special Topics,LEC,Russell Robert H,9/2/14,12/8/14,W,10:30 AM,11:45 AM,M147 108,Classroom,3,0.5,Urban & Environmental Policy & Planning,97 Talbot Avenue,97 Talbot Ave Room 108
UEP 0200 01,Land Use Planning,LEC,Witten Jon,9/2/14,12/8/14,M,1:30 PM,4:00 PM,M147 108,Classroom,18,1,Urban & Environmental Policy & Planning,97 Talbot Avenue,97 Talbot Ave Room 108
UEP 0213 01,Housing Policy,LEC,Greenstein Rosalind,9/2/14,12/8/14,R,6:30 PM,9:00 PM,M002 005,Classroom,7,1,Urban & Environmental Policy & Planning,Bromfield Pearson,Bromfield-Pearson 005
UEP 0232 01,Intro To Gis,LEC,Parmenter Barbara M,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M024 203,Class Laboratory,19,1,Urban & Environmental Policy & Planning,Tisch Library,Tisch Library GIS Lab
UEP 0240 01,U.S. Social Wel Policy,LEC,Jennings James,9/2/14,12/8/14,M,1:20 PM,4:20 PM,M010 204,Classroom,16,1,Urban & Environmental Policy & Planning,Eaton Hall,Eaton 204
UEP 0250 01,Foundations Of Publ Pol,LEC,Krimsky Sheldon,9/2/14,12/8/14,W,1:30 PM,4:00 PM,M003 312,Classroom,25,1,Urban & Environmental Policy & Planning,Anderson Hall,Anderson 312
UEP 0252 01,Cities SpacePlace&time,LEC,Agyeman Julian,9/2/14,12/8/14,MW,4:30 PM,5:45 PM,M024 316,Classroom,29,1,Urban & Environmental Policy & Planning,Tisch Library,Tisch 316
UEP 0254 01,Quantitative Reasoning,LEC,Warfield Marjorie Erickson,9/2/14,12/8/14,T,9:00 AM,11:30 AM,M010 208,Computer Lab,17,1,Urban & Environmental Policy & Planning,Eaton Hall,Eaton 208 
UEP 0254 LA,Quantitative Reasoning,LAB,Warfield Marjorie Erickson,9/2/14,12/8/14,W,4:30 PM,6:00 PM,M010 208,Computer Lab,8,1,Urban & Environmental Policy & Planning,Eaton Hall,Eaton 208 
UEP 0254 LB,Quantitative Reasoning,LAB,Warfield Marjorie Erickson,9/2/14,12/8/14,F,12:00 PM,2:30 PM,M010 208,Computer Lab,7,1,Urban & Environmental Policy & Planning,Eaton Hall,Eaton 208 
UEP 0256 01,Program Evaluation,LEC,Goldman Laurie S.,9/2/14,12/8/14,T,6:00 PM,9:00 PM,M108 103,Seminar Room,7,1,Urban & Environmental Policy & Planning,Dearborn House,72 Professors Row Room 103
UEP 0264 01,Green Urb Desgn & Placemkg,LEC,Cousineau Christine,9/2/14,12/8/14,W,6:30 PM,9:00 PM,M147 108,Classroom,9,1,Urban & Environmental Policy & Planning,97 Talbot Avenue,97 Talbot Ave Room 108
UEP 0265 01,Corp Managmnt Env Issues,LEC,Rappaport Ann Barclay,9/2/14,12/8/14,TR,12:00 PM,1:15 PM,M003 211,Classroom,5,1,Urban & Environmental Policy & Planning,Anderson Hall,Anderson 211
UEP 0271 01,Community Econ Devel,LEC,Barringer Margaret,9/2/14,12/8/14,M,6:00 PM,9:00 PM,M147 108,Classroom,10,1,Urban & Environmental Policy & Planning,97 Talbot Avenue,97 Talbot Ave Room 108
UEP 0275 01,Policy Implemen & Innovation,LEC,Goldman Laurie S.,9/2/14,12/8/14,W,6:00 PM,9:00 PM,M108 103,Seminar Room,10,1,Urban & Environmental Policy & Planning,Dearborn House,72 Professors Row Room 103
UEP 0278 01,Env JusticeSecrtySustn,LEC,Loh Penn S,9/2/14,12/8/14,R,1:30 PM,4:00 PM,M147 108,Classroom,10,1,Urban & Environmental Policy & Planning,97 Talbot Avenue,97 Talbot Ave Room 108
UEP 0279 01,Wtr Rescs/wtrshd Mgmt,LEC,Horsley Scott W,9/2/14,12/8/14,F,9:00 AM,11:30 AM,M147 108,Classroom,13,1,Urban & Environmental Policy & Planning,97 Talbot Avenue,97 Talbot Ave Room 108
UEP 0288 01,Refl Public Pol Practice,LEC,Loh Penn S,9/2/14,12/8/14,W,4:30 PM,5:45 PM,M147 108,Classroom,9,0.5,Urban & Environmental Policy & Planning,97 Talbot Avenue,97 Talbot Ave Room 108
UEP 0293 01,Special Topics,LEC,Agyeman Julian,9/2/14,12/8/14,T,1:30 PM,4:00 PM,M147 108,Classroom,10,0.5,Urban & Environmental Policy & Planning,97 Talbot Avenue,97 Talbot Ave Room 108
UEP 0293 02,Special Topics,LEC,Loh Penn S,9/2/14,12/8/14,M,10:30 AM,11:45 AM,M147 108,Classroom,7,0.5,Urban & Environmental Policy & Planning,97 Talbot Avenue,97 Talbot Ave Room 108
UEP 0293 03,Special Topics,LEC,Cousineau Christine,9/2/14,12/8/14,R,4:30 PM,5:45 PM,M147 108,Classroom,8,0.5,Urban & Environmental Policy & Planning,97 Talbot Avenue,97 Talbot Ave Room 108
UEP 0294 19,Special Topics,LEC,Hoyt Lorlene M.,9/2/14,12/8/14,F,9:00 AM,11:30 AM,M108 103,Seminar Room,8,0.5,Urban & Environmental Policy & Planning,Dearborn House,72 Professors Row Room 103
UEP 0294 22,Special Topics,LEC,Hazelton Glenn,9/2/14,12/8/14,R,6:30 PM,9:00 PM,M024 203,Class Laboratory,14,0.5,Urban & Environmental Policy & Planning,Tisch Library,Tisch Library GIS Lab
WGSS 0073 01,Intro To Queer Studies,LEC,Weber Shannon Nicolle,9/2/14,12/8/14,MW,6:00 PM,7:15 PM,M024 316,Classroom,27,1,"""Women's",Tisch Library,Tisch 316
WGSS 0190 01,Doing Feminist Research,LEC,Vaught Sabina,9/2/14,12/8/14,W,1:20 PM,4:20 PM,M010 204,Classroom,14,1,"""Women's",Eaton Hall,Eaton 204
WL 0017 01,Love&sexuality Wrld Lit,LEC,Carleton Gregory,9/2/14,12/8/14,MW,10:30 AM,11:45 AM,M086 012,Classroom,6,1,World Literature,Olin Center,Olin 012
WL 0091 01,Special Topics,LEC,Lemelin Christopher,9/2/14,12/8/14,MW,1:30 PM,2:45 PM,M086 011,Classroom,0,1,World Literature,Olin Center,Olin 011
WL 0101 01,Classics Of World Cinema,LEC,Rosenberg Joel,9/2/14,12/8/14,R,4:30 PM,5:45 PM,M024 310,Classroom,7,1,World Literature,Tisch Library,Tisch 310
WL 0101 01,Classics Of World Cinema,LEC,Rosenberg Joel,9/2/14,12/8/14,T,4:30 PM,7:30 PM,M024 310,Classroom,7,1,World Literature,Tisch Library,Tisch 310*/});