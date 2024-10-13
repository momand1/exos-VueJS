const app = Vue.createApp({
    data() {
        return {
            arrProd: [
                { name: 'Product 1', price: 12, quantity: 5, category: 'Catégorie 1' },
                { name: 'Product 2', price: 12, quantity: 9, category: 'Catégorie 2' },
            ],
            newProd: { },
            isVisible: false,
            editProd: {},
            indexModal: -1 // we put -1 because the array starts from 0
        }
    },
    methods: {
        addProd() {
            if (this.newProd.name && this.newProd.price && this.newProd.quantity && this.newProd.category) {
                this.arrProd.push(this.newProd)
                this.newProd = {}
            }
            else {
                alert('Please fill all the fields')
            }
            
        },
        showMode(id) {
            this.isVisible = !this.isVisible;
            this.editProd = {...this.arrProd[id]} //... spread operator for copying an object
            this.indexModal = id
        },
        save() {
            if (this.editProd.name && this.editProd.price && this.editProd.quantity && this.editProd.category) {
                this.arrProd[this.indexModal] = {...this.editProd}
                // this.editProd = {}
                // this.isVisible = false
                this.close()
            }
            else {
                this.isVisible = true
                alert('Please fill all the fields')

            }

        },
        close() {
            this.isVisible = false;

        },
        deleteProd(indice) {
            if (confirm('Are you sure you want to delete this product?')) {
                this.arrProd.splice(indice, 1)
            }
        },
        saveToLocalStorage() {
            localStorage.setItem('products', JSON.stringify(this.arrProd))
        }
    },
    watch: {
        arrProd: {
            deep: true,
            handler() {
                this.saveToLocalStorage()
            }
        }
    },
    created() {
        let storedProducts = JSON.parse(localStorage.getItem('products'));
        if (storedProducts) {
            this.arrProd = storedProducts
        }
    },
})

app.mount('#app')