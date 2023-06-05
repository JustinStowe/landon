const AWS = require("aws-sdk");
const fs = require("fs");

AWS.config.update({
  region: "us-east-1",
});

console.log("Writing entries to Services table");

const dynamodb = new AWS.DynamoDB.DocumentClient();
const servicesData = JSON.parse(
  fs.readFileSync("../components/data/Services.json", "utf-8")
);

servicesData.forEach(function (service) {
  const params = {
    TableName: "Services",
    Item: {
      name: service.name,
    },
  };

  dynamodb.put(params, function (err, data) {
    if (err)
      console.error(
        "Unable to load data into table for services",
        service.name,
        ". Error: ",
        JSON.stringify(err, null, 2)
      );
    else console.log("Added", service.name, "to table.");
  });
});
