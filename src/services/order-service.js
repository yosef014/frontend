// import { storageService } from './async-storage.service'
import { httpService } from "./http-service";
// import { socketService, SOCKET_EVENT_USER_UPDATED } from './socket.service'

const STORAGE_KEY_LOGGEDIN_USER = "orderLS";

export const orderService = {
  getOrders,
  getById,
  remove,
  update,
  save,
  getEmptyOrder,
};

async function getOrders() {
  // return storageService.query('order')
  return await httpService.get(`order`);
}

async function getById(orderId) {
  // const order = await storageService.get('order', orderId)
  const order = await httpService.get(`order/${orderId}`);
  return order;
}
async function remove(orderId) {
  // return storageService.remove('order', orderId)
  return await httpService.delete(`order/${orderId}`);
}
async function save(order) {
    if (order._id) {
      return await httpService.put(`order/${order._id}`, order);
    } else {
      return await httpService.post("order", order);
    }
}

async function update(order) {
  // await storageService.put('order', order)
  order = await httpService.put(`order/${order._id}`, order);
  // Handle case in which admin updates other order's details
  if (getLoggedinOrder()._id === order._id) _saveLocalOrder(order);
  return order;
}

function getEmptyOrder() {
  return Promise.resolve({
    createdAt: "",
    description: "",
    price: null,
    timeToDeliver: "",
    imgUrl: "",
    seller: {
      _id: "",
      fullname: "",
      imgUrl: "",
    },
    buyer: {
      _id: "",
      fullname: "",
      imgUrl: "",
    },
    gig: {
      _id: "",
      category: "",
      price: null,
        description: "",
        timeToDeliver: "",
    },
    status: "Pending",
  });
}


function _saveLocalOrder(order) {
  sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(order));
  return order;
}

// (async ()=>{
//     await userService.signup({fullname: 'Puki Norma', username: 'user1', password:'123',score: 10000, isAdmin: false})
//     await userService.signup({fullname: 'Master Adminov', username: 'admin', password:'123', score: 10000, isAdmin: true})
//     await userService.signup({fullname: 'Muki G', username: 'muki', password:'123', score: 10000})
// })();

// This IIFE functions for Dev purposes
// It allows testing of real time updates (such as sockets) by listening to storage events
// (async () => {
//     var user = getLoggedinUser()
//     // Dev Helper: Listens to when localStorage changes in OTHER browser

//     // Here we are listening to changes for the watched user (comming from other browsers)
//     window.addEventListener('storage', async () => {
//         if (!gWatchedUser) return;
//         const freshUsers = await storageService.query('user')
//         const watchedUser = freshUsers.find(u => u._id === gWatchedUser._id)
//         if (!watchedUser) return;
//         if (gWatchedUser.score !== watchedUser.score) {
//             console.log('Watched user score changed - localStorage updated from another browser')
//             socketService.emit(SOCKET_EVENT_USER_UPDATED, watchedUser)
//         }
//         gWatchedUser = watchedUser
//     })
// })();

// This is relevant when backend is connected
// (async () => {
//     var user = getLoggedinUser()
//     if (user) socketService.emit('set-user-socket', user._id)
// })();

// import { storageService } from "./storage-service";
// import { asyncStorageService } from "./async-storage-service";
// import { utilService } from "./util-service.js";

// export const orderService = {
//   query,
//   getById,
//   remove,
//   save,
//   getEmptyOrder,
// };

// const KEY = "ordersDB";

// var gOrders = _createOrders();

// function query() {
//   return JSON.parse(JSON.stringify(gOrders));
// }

// function getById(id) {
//   return asyncStorageService.getById(KEY, id);
// }
// function remove(id) {
//   const idx = gOrders.findIndex((order) => order._id === id);
//   gOrders.splice(idx, 1);
//   storageService.store(KEY, gOrders);
// }

// function save(order) {
//   const orderToSave = JSON.parse(JSON.stringify(order));
//   const savedOrder = orderToSave._id ? _update(orderToSave) : _add(orderToSave);

//   storageService.store(KEY, gOrders);
//   return savedOrder;
// }

// function _add(order) {
//   order._id = utilService.makeId();
//   gOrders.unshift(order);
//   return order;
// }

// function _update(order) {
//   const idx = gOrders.findIndex((currOrder) => currOrder._id === order._id);
//   gOrders.splice(idx, 1, order);
//   return order;
// }

// function getEmptyOrder() {
//   return Promise.resolve({
//     createdAt: "",
//     seller: {
//       _id: "",
//       fullname: "",
//     },
//     buyer: {
//       _id: "",
//       fullname: "",
//     },
//     gig: {
//       _id: "",
//       title: "",
//     },
//     status: "Pending",
//   });
// }

// _createOrders();
// function _createOrders() {
//   let orders = storageService.load(KEY);
//   if (!orders || !orders.length) {
//     (orders = [
//       {
//         "_id": "o1225",
//         "createdAt": 9898989,
//         "buyer": {
//          " _id": "u101",
//           "username": "user1 ",
//           "imgUrl":
//             "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/4abf6f5b58e4d78cfb7c410cf8d7a9ac-1626111679444/4a04b77c-22ee-4ce8-b4be-747fd059e9ff.jpg",
//           "level": "basic/premium",
//           "ordersId": ["o1225"],
//         },
//         "seller": {
//           "_id": "u101",
//           "username": "emil",
//           "imgUrl":
//             "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/5344c10fd4820db3626c4fc24968783d-1588608774469/1e4a3bd9-b71d-48ce-8ac0-0ff6d667caf4.jpeg",
//           "level": "basic/premium",
//           "ordersId": ["sdsadmf123"],
//         },
//         "gig": {
//           "_id": "i101",
//           "img": "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/68762796/original/3e060210316e42972fbe0b478a67f315d3263a64.jpg",
//           "title": "Design Logo",
//           "price": 20,
//           "description": "deeescriptionn",
//           "timeToDeliver": "2",
//         },
//         "status": "pending",
//       },
//       {
//         _id: "123",
//         createdAt: 11111,
//         buyer: {
//           _id: "u102",
//           username: "user2 ",
//           imgUrl:
//             "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/238386778/original/6cbadb0819de5e6bb929addc30cce004d4def9a0.jpeg",
//           level: "basic/premium",
//           ordersId: ["ttt"],
//         },
//         seller: {
//           _id: "u101",
//           username: "yosef",
//           imgUrl:
//             "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/111136222/original/f5a994b31e614cd0a3fba7283de8ab418ffd78ca.png",
//           level: "basic/premium",
//           ordersId: ["sdsadmf123"],
//         },
//         gig: {
//           _id: "i101",
//           img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/68762796/original/3e060210316e42972fbe0b478a67f315d3263a64.jpg",
//           title: "Design Logo",
//           price: 20,
//           description: "deeescriptionn",
//           timeToDeliver: "2",
//         },
//         status: "approved",
//       },
//     ]),
//       storageService.store(KEY, orders);
//   }
//   return orders;
// }
