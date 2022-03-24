import { storageService } from "./storage-service";
import { asyncStorageService } from "./async-storage-service";
import {utilService} from './util-service.js'


export const orderService = {
  query,
  getById,
  remove,
  save,
};

const KEY = "ordersDB";

var gOrders = _createOrders();

function query() {
  return JSON.parse(JSON.stringify(gOrders));
}

function getById(id) {
  return asyncStorageService.getById(KEY, id);
}
function remove(id) {
  const idx = gOrders.findIndex(order => order._id === id)
  gOrders.splice(idx, 1)
  storageService.store(KEY, gOrders)
}

function save(order) {
  const orderToSave = JSON.parse(JSON.stringify(order))
  const savedOrder = (orderToSave._id) ? _update(orderToSave) : _add(orderToSave)

  storageService.store(KEY, gOrders)
  return savedOrder;
}


function _add(order) {
  order._id = utilService.makeId()
  gOrders.unshift(order)
  return order
}

function _update(order) {
  const idx = gOrders.findIndex(currOrder => currOrder._id === order._id)
  gOrders.splice(idx, 1, order)
  return order
}







_createOrders();
function _createOrders() {
  let orders = storageService.load(KEY);
  if (!orders || !orders.length) {
    orders = [
      {
        "_id": "o1225",
        "createdAt": 9898989,
        "buyer": {
          "_id": "u101",
          "username": "user1 ",
          "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/4abf6f5b58e4d78cfb7c410cf8d7a9ac-1626111679444/4a04b77c-22ee-4ce8-b4be-747fd059e9ff.jpg",
          "level": "basic/premium",
          "ordersId": ["o1225"]
        },
        "seller": {
          "_id": "1243sads",
          "username": "emil",
          "imgUrl":"https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/5344c10fd4820db3626c4fc24968783d-1588608774469/1e4a3bd9-b71d-48ce-8ac0-0ff6d667caf4.jpeg",
          "level": "basic/premium",
          "ordersId": ["sdsadmf123"]
        },
        "gig": {
          "_id": "i101",
          "img":"https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/68762796/original/3e060210316e42972fbe0b478a67f315d3263a64.jpg",
          "title": "Design Logo",
          "price": 20,
          "description": 'deeescriptionn',
          "timeToDeliver": '2',
        },
        "status": "pending"
      }
    ],
      storageService.store(KEY, orders);
  }
  return orders;
}
