


const user = {
    name: 'Reed',
    age: 28
}

const moreUserInfo = {
    job: 'programmer',
    citizen: 'USA'
}

const combine = {
    ...user,
    ...moreUserInfo
}

console.log(combine)

const item1 = { id: 1, name: 'monkey', price: 1000 };
const item2 = { id: 2, name: 'puppy', price: 2000 };
const state = {
    cart: []
}
const addToCart = (product) => {
    const exist = state.cart.find((x) => x.id === product.id);
    if (exist) {
        console.log(`found`)
        console.log(exist)
        console.log('###########')
        state.cart.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )      
    } else {
      state.cart = ([...state.cart, { ...product, qty: 1 }]);
    }
  }; 
addToCart(item1)
console.log('after adding item1')
console.log('---------------')

console.log(state.cart)
addToCart(item2)
console.log('after adding item2');

console.log('---------------');
console.log(state.cart)
 
console.log('adding item1 again, qty not increased');
addToCart(item1); 
console.log(state.cart);