function resolvePromise(data, promise) {
  console.log(data, promise);
  head.textContent = data;
}
function rejectPromise(err, promise) {
  console.log(err.message, promise);
  head.textContent = err.message;
}

function checkCart(cart, delay) {
  const promise = new Promise((resolve, reject) => {
    if (!cart) {
      reject(new Error('No Item In Cart'));
    }
    setTimeout(() => {
      resolve(cart);
    }, delay);
  });
  return promise;
}

function func() {
  console.log('Hello World 1');
  function cbOne() {
    console.log('Hello World 3');
    function cbTwo() {
      console.log('Hello World 2');
    }
    return cbTwo;
  }
  return cbOne;
}

export { resolvePromise, rejectPromise, checkCart, func };
