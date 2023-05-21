import {faker} from "@faker-js/faker";
import lodash from 'lodash'

function createUser() {
    return {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        phone: faker.phone.number()
    };
}

let users = faker.helpers.multiple(createUser, {
    count: 10,
});

console.log("unsorted: ", users)

users = lodash.sortBy(users, 'lastName');

console.log('sorted: ', users)