// const product = 'Socks'

const app = Vue.createApp({
  data() {
    return {
      cart: [],
      premium: true
    };
  },
  methods: {
    updateCart(id) {
      // this.cart += 1;
      this.cart.push(id);
    },
    removeFromCart(id) {
      // this.cart !== 0 ? (this.cart -= 1) : 0;
      this.cart.pop(id);
    }
  }
});
