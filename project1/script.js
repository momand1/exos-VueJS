var products = [

    { name: 'Big Mac', price: 5.99, image: 'imgs/big-mac.png', compteur: 0, isSelected: false },

    { name: 'McChicken', price: 4.99, image: 'imgs/mc-chicken.png', compteur: 0, isSelected: false },

    { name: 'Double Cheese Burger', price: 2.99, image: 'imgs/double-cb.png', compteur: 0, isSelected: false },

    { name: 'Fries', price: 2.99, image: 'imgs/fries.png', compteur: 0, isSelected: false },

    { name: 'Mc Nuggets', price: 3.49, image: 'imgs/nuggets.png', compteur: 0, isSelected: false },

    { name: 'Salad', price: 2.79, image: 'imgs/salad.png', compteur: 0, isSelected: false },

    { name: 'Coke', price: 1.99, image: 'imgs/cola.png', compteur: 0, isSelected: false },

    { name: 'Ice Tea', price: 1.99, image: 'imgs/lipton.png', compteur: 0, isSelected: false },

    { name: 'Water', price: 1.49, image: 'imgs/water.png', compteur: 0, isSelected: false }

]

const app = Vue.createApp({
    data() {
        return {
            products:window.products,
            disabledBtn: false



        }
    },
    methods: {
        toggleSelection(item) {
            item.isSelected=!item.isSelected
            item.compteur = 1;
        },

        increment(item) {
            item.compteur++;
            
        },
        decrement(item) {
            if (item.compteur > 1) {
                item.compteur--;
            }
        },
        totalProd(prod) {
            return (prod.price * prod.compteur).toFixed(2);
        },
        totalPrice() {
            return this.products.reduce((total, prod) => {
                if (prod.isSelected) { 
                    return total + parseFloat(this.totalProd(prod));
                }
                return total;

            }, 0).toFixed(2)
        },
        check() {
          return this.totalPrice() > 0;
        }
    },

    computed: {
        filterProducts() {
            return this.products.filter(product => product.isSelected)
        },
        isDisabled() {
            return (prod) => {
                prod.compteur <= 1;
            }
        }
    }
})

    app.mount('#app')