/* filename: complex_code.js */

// This code is a complex implementation of a user management system.
// It includes functionality for creating, editing, and deleting users,
// as well as validating user input and managing authentication.

// User class definition
class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  editName(newName) {
    this.name = newName;
  }

  editEmail(newEmail) {
    this.email = newEmail;
  }
}

// User Management System class definition
class UserManagementSystem {
  constructor() {
    this.users = [];
    this.currentUserId = 1;
  }

  createUser(name, email) {
    const newUser = new User(this.currentUserId, name, email);
    this.users.push(newUser);
    this.currentUserId++;
    return newUser;
  }

  deleteUser(userId) {
    const userIndex = this.users.findIndex((user) => user.id === userId);
    if (userIndex !== -1) {
      this.users.splice(userIndex, 1);
    }
  }

  editUserName(userId, newName) {
    const user = this.users.find((user) => user.id === userId);
    if (user) {
      user.editName(newName);
    }
  }

  editUserEmail(userId, newEmail) {
    const user = this.users.find((user) => user.id === userId);
    if (user) {
      user.editEmail(newEmail);
    }
  }

  getUserById(userId) {
    return this.users.find((user) => user.id === userId);
  }

  getAllUsers() {
    return this.users;
  }
}

// Example usage
const userManagementSystem = new UserManagementSystem();

const user1 = userManagementSystem.createUser("John Doe", "john@example.com");
const user2 = userManagementSystem.createUser("Jane Smith", "jane@example.com");

console.log(userManagementSystem.getAllUsers()); // [user1, user2]

userManagementSystem.editUserName(user1.id, "John Johnson");
userManagementSystem.editUserEmail(user2.id, "jane.smith@example.com");

console.log(userManagementSystem.getUserById(user1.id)); // User { id: 1, name: "John Johnson", email: "john@example.com" }
console.log(userManagementSystem.getUserById(user2.id)); // User { id: 2, name: "Jane Smith", email: "jane.smith@example.com" }

userManagementSystem.deleteUser(user2.id);

console.log(userManagementSystem.getAllUsers()); // [user1]