var DocumentClient = require("documentdb").DocumentClient;

/* application endpoint */
var endpoint = "https://alictai.documents.azure.com:443/";

/* authentication key */
var authKey = "QyShL9J4ubBkv2Yk1dil1Klmy3hL1C1zcPhIkhE2iSnWJ/d1ZVeclSlPh6F2Yg/0MD38Gs4Hv6/d3z6+M+WWvw==";

var client = new DocumentClient(endpoint, {"masterKey": authKey});

var databaseDefinition = {"id": "flowkap"};
var collectionDefinition = {"id": "TuftsF15"};

var documentDefinition = {
	"Course" : "ACL 0003 01",
	"Title" : "Real Seminar",
	"CourseType" : "LEC",
	"Instructor" : "Herbert Jean L S",
	"StartDate" : "9/2/14",
	"EndDate" : "12/8/14",
	"Weekdays" : "M",
	"StartTime" : "12:00 PM",
	"EndTime" : "1:15 PM",
	"Location" : "M010 209",
	"RoomType" : "Classroom",
	"Enrolled" : "2",
	"Credits" : "0.5",
	"Department" : "All College",
	"BuildingName" : "Eaton Hall",
	"RoomName": "Eaton 209"
}

client.createDatabase(databaseDefinition, function(err, database) {
	client.createCollection(database._self, collectionDefinition, function(err, collection) {
		client.createDocument(collection._self, documentDefinition, function(err,document) {
			client.queryDocuments(collection._self, "SELECT * FROM docs d where d.title='Real Seminar'").toArray(function(err, results) {
				console.log("Query Results:");
				console.log(results);
			});
		});
	});
});