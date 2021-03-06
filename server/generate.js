var faker = require('faker');


// For more fields, visit
// https://github.com/marak/Faker.js/#api-methods
//

var database = { employees: [] };

for (var i = 1; i <= 100; i++) {
  database.employees.push({
    id: i,
    name: faker.name.firstName(),
    jobTitle: faker.name.jobTitle(),
    description: faker.lorem.sentences(),
    imageUrl: faker.image.avatar(),
    address: faker.address.city() + ", " + faker.address.zipCode(),
    phoneNumber: faker.phone.phoneNumber(),
    dateOfJoin: faker.date.past()

  });
}

console.log(JSON.stringify(database));
