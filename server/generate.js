var faker = require('faker');

var database = { employees: [] };

for (var i = 1; i <= 10; i++) {
    database.employees.push({
        id: i,
        fname: faker.name.firstName(),
        lname: faker.name.lastName(),
        jobTitle: faker.name.jobTitle(),
        description: faker.lorem.sentences(),
        imageUrl: "./avatar.png"
    });
}

console.log(JSON.stringify(database));
