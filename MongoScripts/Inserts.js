// note: This script needs to be executed only once

// Connect to MEAN database
var db = connect("127.0.0.1:27017/MEAN");

// insert following documents in projects collection
db.projects.insert({"projectName" : ".net" , "isActive" : true });
db.projects.insert({"projectName" : "java" , "isActive" : true });
db.projects.insert({"projectName" : "C#" , "isActive" : true });
db.projects.insert({"projectName" : "NodeJS" , "isActive" : true });

// insert following documents in 
db.priorities.insert({"priority": "Low" , "isActive" : true });
db.priorities.insert({"priority": "Medium" , "isActive" : true });
db.priorities.insert({"priority": "High" , "isActive" : true });


