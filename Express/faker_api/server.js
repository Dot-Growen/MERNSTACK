const express = require("express");
const faker = require("faker");
const app = express();



class User {
  constructor(){
    this.id = faker.random.number();
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.phoneNumber = faker.phone.phoneNumber();
    this.email = faker.internet.email();
    this.password = faker.internet.password();
  }
}

class Company {
  constructor() {
    this.id = faker.random.number();
    this.name = faker.company.companyName();
    this.address = [
      this.street = faker.address.streetName(),
      this.city = faker.address.city(),
      this.state = faker.address.state(),
      this.zipCode = faker.address.zipCode(),
      this.country = faker.address.country(),
    ]
  }
};

const user1 = new User()

app.get("/api/users/new", (req, res) => {
  res.send(new User());
});

app.get("/api/companies/new", (req, res) => {
  res.send(new Company());
});

app.get("/api/user/company", (req, res) => {
  res.send(new User())
  console.log(new Company())
  return (
    new User(),
    new Company
  )
})

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);