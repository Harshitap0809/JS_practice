// Let's Practice:
// 1. You are creating a website for your college. Create a class User with properties, name & email. It also has a method called viewData() that allows user to view website data.
// 2. Create a new class called Admin which inherits from User. Add a new method called editData to Admin that allows it to edit website data.

// 1
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  viewData() {
    console.log("Name: " + this.name + ", Email: " + this.email);
  }
}
let user1 = new User("VanshMishra", "vansh@gmail.com");
let user2 = new User("HarshitaPandey", "hp@gmail.com");
console.log(user1.viewData());
console.log(user2.viewData());
console.log(user1.email);

// 2
class Admin extends User {
  // optional here, but good practice to call parent class constructor
  constructor(name, email) {
    super(name, email);
  }
  editData() {
    console.log("Editing website data...");
  }
}
let ObjAdmin = new Admin("Harshita", "harshitapandey@gmail.com");
console.log(ObjAdmin.name);
console.log(ObjAdmin.email);
console.log(ObjAdmin.viewData());
console.log(ObjAdmin.editData());
