let $ = document

const cartIcon = $.querySelector('#myCart')
const userCart = $.querySelector('.product-basket')
const notifier = $.getElementById("notify")

function notificationCounter(count) {

   notifier.innerHTML = count;

}


const productContainer = $.querySelector('.container')

const allProducts = [

    {id:1 , title:'shirt1' , price:16 , image:'images/f1.jpg'},
    {id:2 , title:'shirt2' , price:24 , image:'images/f2.jpg'},
    {id:3 , title:'shirt3' , price:17 , image:'images/f3.jpg'},
    {id:4 , title:'shirt4' , price:34 , image:'images/f4.jpg'},
    {id:5 , title:'shirt5' , price:14 , image:'images/f5.jpg'},
    {id:6 , title:'shirt6' , price:19 , image:'images/f6.jpg'},
    {id:7 , title:'shirt7' , price:83 , image:'images/f11.jpg'},
    {id:8 , title:'shirt8' , price:64 , image:'images/f12.jpg'},
    {id:9 , title:'shirt9' , price:18 , image:'images/f13.jpg'},
    {id:10 , title:'shirt10' , price:21 , image:'images/f7.jpg'},
    {id:11 , title:'shirt11' , price:32 , image:'images/f8.jpg'},
    {id:11 , title:'shirt12' , price:32 , image:'images/f10.jpg'},
]

let userBasket = []



allProducts.forEach(function(product){

    let productDiv = $.createElement('div')
    productDiv.classList.add('box')


    let productImg = $.createElement('img')
    productImg.setAttribute('src' , product.image)

    let productH4 = $.createElement('h4')
    productH4.classList.add('pro-name')
    productH4.innerHTML = product.title

    let productH5 = $.createElement('h5')
    productH5.innerHTML = product.price + '$'

    let cartDiv = $.createElement('div')
    cartDiv.classList.add('cart')


    cartDiv.addEventListener('click' , function(){

        productToCart(product.id)
    })


    let cartLink = $.createElement('a')
    let cartIcon = $.createElement('i')
    cartIcon.classList.add('uil-shopping-cart')

    cartLink.append(cartIcon)

    cartDiv.append(cartLink)

    productDiv.append(productImg , productH4 , productH5 , cartDiv)

    productContainer.append(productDiv)

    console.log(productContainer);
})


    let totalPrice = $.createElement('p')
    totalPrice.classList.add('total')

function calcTotal(userBasket){

    let sum = 0

    userBasket.forEach(function(product){

        sum += product.price
    })

    totalPrice.innerHTML = sum + '$'
}

    let purBtn = $.createElement('button')
    purBtn.classList.add('purchase')
    purBtn.innerHTML = 'purchase'

purBtn.addEventListener('click' , function(){

    userBasket = []
    basketproGenerator(userBasket)
    let basketL = userBasket.length
    notificationCounter(basketL)


})


function basketproGenerator(userBasket){

    userCart.innerHTML = ''

    userBasket.forEach(function(item){

        let myRow = $.createElement('div')
        myRow.classList.add('row')
    
        let basketImg = $.createElement('img')
        basketImg.setAttribute('src' , item.image)
    
        let basketName = $.createElement('p')
        basketName.classList.add('pro-name')
        basketName.innerHTML = item.title
    
        let basketPrice = $.createElement('p')
        basketPrice.classList.add('pro-price')
        basketPrice.innerHTML = item.price + '$'
    
        let basketBtn = $.createElement('i')
        basketBtn.classList.add('bx')
        basketBtn.classList.add('bxs-trash')

        basketBtn.addEventListener('click' , function(){

            removeProduct(item.id)


        })
    
    
        myRow.append(basketImg , basketName , basketPrice , basketBtn)
    
        
        
    
        userCart.append(myRow , totalPrice , purBtn)
    })
    

}


function removeProduct(productId){

    userBasket = userBasket.filter(function(item){

        return item.id !== productId

    })

    let basketLe = userBasket.length

    notificationCounter(basketLe)

    calcTotal(userBasket)
    basketproGenerator(userBasket)

}
    

function productToCart(productId){

    let mainProduct = allProducts.find(function(product){

        return product.id === productId
    })

    let basketLen = userBasket.length + 1

    userBasket.push(mainProduct)
    basketproGenerator(userBasket)
    notificationCounter(basketLen)
    calcTotal(userBasket)
}

function togglemenu(){

    userCart.classList.toggle("open-basket")
}

