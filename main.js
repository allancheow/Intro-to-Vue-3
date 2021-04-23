// const product = 'Socks'

const app = Vue.createApp({
  data() {
    return {
      product: 'Socks',
      description:
        'Soft organic cotton material formed into a blissful shroud for your feet.',
      image: './assets/images/socks_green.jpg',
      socksURL: 'https://en.wikipedia.org/wiki/Sock',
      inStock: true,
      inventory: 100,
      onSale: true,
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [
        { id: 2234, color: 'green' },
        { id: 2235, color: 'blue' }
      ],
      sizes: ['small', 'medium', 'large', 'x-large']
    };
  }
});
