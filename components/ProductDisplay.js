app.component('product-display', {
  props: {
    premium: {
      type: Boolean,
      required: true
    },
    cart: {
      type: Array,
      required: true
    }
  },
  template:
    /*html*/
    `<div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <!-- image goes here -->
        <!-- #3 challenge: href -->
        <a :href="socksURL" target="_blank">
          <!-- #7 challenge: add class to image -->
          <img
            :src="image"
            alt="Image of colored socks"
            :class="{ 'out-of-stock-img': !inStock }"
        /></a>
      </div>
      <div class="product-info">
        <h1>{{title}}</h1>
        <!-- #2 challenge: description -->
        <p>{{description}}</p>

        <!-- basic if logic -->
        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>

        <p>Shipping: {{ shipping }}</p>

        <!-- display none logic -->
        <!-- <p v-show="inStock">In Stock</p> -->

        <!-- conditional logic -->
        <!-- <p v-if="inventory > 10">In Stock</p>
        <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out</p>
        <p v-else>Out of Stock</p> -->

        <!-- #4 challenge: boolean && #8 challenge: onSale computed -->
        <!-- <p v-if="onSale">On Sale</p> -->
        <p v-if="onSale">{{saleMessage}}</p>

        <!-- for loop iteration in list -->
        <!-- <ul>
          <li v-for="detail in details">{{detail}}</li>
        </ul> -->
        
        <!-- #9 challenge: adding Details components -->
        <product-details :details="details"></product-details>
        
        <!-- binding key for unique usage -->
        <div
          v-for="variant, index in variants"
          :key="variant.id"
          @mouseover="updateVariant(index)"
          class="color-circle"
          :style="{ backgroundColor: variant.color }"
        ></div>
        <!-- #5 challenge adding list -->
        <!-- <ul>
          <li v-for="size in sizes">{{size}}</li>
        </ul> -->

        <!-- <button class="button" v-on:click="cart += 1">Add to Cart</button> -->
        <button
          class="button"
          :class="{ disabledButton: !inStock }"
          :disabled="!inStock"
          @click="addToCart"
        >
          Add to Cart
        </button>
        <!-- #6 challenge: decrement cart amount && #10 challenge: decrement cart amount with component -->
        <button
          class="button"
          :class="{ disabledButton: cart.length === 0 }"
          :disabled="cart.length === 0"
          @click="removeFromCart"
        >
          Remove Item
        </button>
      </div>
    </div>
    <review-list v-if="reviews.length" :reviews="reviews"></review-list>
    <review-form @review-submitted="addReview"></review-form>
  </div>`,
  data() {
    return {
      product: 'Socks',
      brand: 'Vue Mastery',
      description:
        'Soft organic cotton material formed into a blissful shroud for your feet.',
      selectedVariant: 0,
      socksURL: 'https://en.wikipedia.org/wiki/Sock',
      inventory: 100,
      onSale: true,
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [
        {
          id: 2234,
          color: 'green',
          image: './assets/images/socks_green.jpg',
          quantity: 50
        },
        {
          id: 2235,
          color: 'blue',
          image: './assets/images/socks_blue.jpg',
          quantity: 0
        }
      ],
      sizes: ['small', 'medium', 'large', 'x-large'],
      reviews: []
    };
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.variants[this.selectedVariant].id);
    },
    updateVariant(index) {
      this.selectedVariant = index;
    },
    removeFromCart() {
      // this.cart !== 0 ? (this.cart -= 1) : 0;
      this.$emit('remove-From-Cart', this.variants[this.selectedVariant].id);
    },
    addReview(review) {
      this.reviews.push(review);
    }
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity;
    },
    saleMessage() {
      return this.onSale ? `${this.brand} ${this.product} is on sale` : null;
    },
    shipping() {
      return this.premium ? 'Free' : 2.99;
    }
  }
});
