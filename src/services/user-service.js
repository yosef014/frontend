import { storageService } from "./storage-service";
import { asyncStorageService } from "./async-storage-service";
import { utilService } from "./util-service";

export const userService = {
  query,
  getById,
  login,
  // signup,
  // logout,
  //   remove,
  //   save,
  //   getEmptyTodo,
};

const KEY = "usersDB";
const LOGGEDIN = "loggedIn";

var gUsers = _createUsers();

function query() {
  return JSON.parse(JSON.stringify(gUsers));
}

function getById(id) {
  return asyncStorageService.getById(KEY, id);
}
function login(userCred) {
  return utilService.saveToSessionStorage(LOGGEDIN, userCred);
}

_createUsers();
function _createUsers() {
  let users = storageService.load(KEY);
  if (!users || !users.length) {
    users = [
      {
        _id: "u101",
        fullname: "User 1",
        imgUrl: "/img/img1.jpg",
        username: "user1",
        password: "123",
        level: "basic/premium",
        ordersId: ["sdsadmf123"],
        reviews: [
          {
            id: "1234123",
            txt: "Very kind and works fast",
            rate: 4,
            by: {
              _id: "u102",
              fullname: "user2",
              imgUrl: "/img/img2.jpg",
            },
          },
        ],
      },
    ];

    storageService.store(KEY, users);
  }
  return users;
}
