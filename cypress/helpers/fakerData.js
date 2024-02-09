import { faker } from "@faker-js/faker";

export const generateUserData = () => ({
  phoneNumber: faker.phone.number(),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  company: "Cypress",
  email: faker.internet.email(),
});
