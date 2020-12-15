const app = new Vue({
    el:"#app",
    data: {
        title:" My Simple Shop",
        products: [
            {
                 name: "Moustache Mask",
                 price: 18,
                 image: "./assets/masque-moustache.jpg",
                 image2: "./assets/masque-moustache-2.jpg",
                 hovered: null,
                 
                 stock:1,
                 tags: {
                     Type:"Funny",
                     For:"Menus"
                 }
            },
            {
                name: "Christmas Sweater",
                price: 35,
                image: "./assets/christmas-sweater.jpg",
                image2: "./assets/christmas-sweater-2.jpg",
                hovered: null,
                stock:10,
                tags: {
                    SIZE:"S,M,L,XL",
                    Material:"Wool"
                }
           },
           {
            name: "Tetris Lamp",
            price: 27,
            image: "./assets/tetris-lamp.jpg",
            image2: "./assets/tetris-lamp-2.jpg",
            hovered: null,
            stock:12,
            tags: {
                Mood:"Retro",
                For:"Geeks"
            }
        }
    
        ],
            cart: [],
            totalPrice: 0,
            discount_code:"",
            displayCart:false
    
        },
    
    methods: {
        addToCart(product){
            this.cart.push(product);
            this.totalPrice += product.price;
            this.displayCart="true";
            
        }
    }

});