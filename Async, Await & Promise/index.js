// import { checkCart, func, rejectPromise, resolvePromise } from './utils.js';

// func()()();

// let cart = 'Promise';
// cart = undefined;

// const promise = checkCart(cart, 0);
// console.log(promise);

// promise.then((data) => resolvePromise(data, promise)).catch((err) => rejectPromise(err, promise));

// const p1 = Promise.reject(1);
// const p2 = Promise.reject(2);
// const p3 = new Promise((resolve, reject) => {
//   reject(new Error('Not okay'));
//   // resolve(3);
// });

// Promise.all([p2, p1, p3])
//   .then((data) => console.log(data, 'then all'))
//   .catch((err) => console.log(err, 'catch all'));

// Promise.any([p3, p1, p2])
//   .then((data) => console.log(data, 'then any'))
//   .catch((err) => console.log(err, 'catch any'));

// Promise.allSettled([p3, p1, p2])
//   .then((data) => console.log(data, 'then allSettled'))
//   .catch((err) => console.log(err, 'catch allSettled'));

// Promise.race([p3, p1, p2])
//   .then((data) => console.log(data, 'then race'))
//   .catch((err) => console.log(err, 'catch race'));

const p1 = new Promise((resolve, reject) => {
  if (!true) {
    reject(new Error('Found Error'));
  }
  setTimeout(() => {
    resolve('resolved data 1');
  }, 10000);
});
const p2 = new Promise((resolve, reject) => {
  if (!true) {
    reject(new Error('Found Error'));
  }
  setTimeout(() => {
    resolve('resolved data 2');
  }, 20000);
});

function getData() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise Resolve');
    }, 5000);
  });
  console.log('data after promise');
  return promise;
}

// getData().then((cb) => console.log(cb));

async function getDataPromise() {
  try {
    console.log('data before promise');
    const res1 = await p1;
    console.log(res1);
    const res2 = await p2;
    console.log(res2);

    console.log('data after promise');
  } catch (error) {
    console.log(error.message);
  }
}

// getDataPromise();

const API_URL = 'https://api.github.com/users/theredbandicoot';

async function getUser() {
  const res = await fetch(API_URL);
  const user = await res.json();
  console.log('test');
  console.log(user.login);
}

getUser();
