var faker = require('faker');


// For more fields, visit
// https://github.com/marak/Faker.js/#api-methods
//

var database = { employees: [] };

for (var i = 1; i <= 10; i++) {
    database.employees.push({
        id: i,
        name: faker.name.firstName() + " " + faker.name.lastName(),
        jobTitle: faker.name.jobTitle(),
        description: faker.lorem.sentences(),
        imageUrl: faker.image.avatar()
    });
}

console.log(JSON.stringify(database));
