$server = "tcp:o7pv8909g1.database.windows.net,1433";
$user = "alictai"@SERVER_ID;
$pwd = "password";
$db = "flowkap_db";

$conn = sqlsrv_connect($server, array("UID"=>$user, "PWD"=>$pwd, "Database"=>$db));

if($conn === false){
    die(print_r(sqlsrv_errors()));
}