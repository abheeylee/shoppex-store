//PRODUCTS

const products = [
    {
      id: 0,
      name: "Jacket",
      price: 299.99,
      instock: 100,
      sold: 10,
      del: 7000,
      promoPercentage: 14,
      description:
        "Lorem ipsum dolor sit amet.",
      imgSrc: "./assets/images/products/jacket-3.jpg",
      imgSrcH: "./assets/images/products/jacket-4.jpg",

      imgSrcHA: "./assets/images/products/jacket-3.jpg",
      imgSrcHB: "./assets/images/products/jacket-4.jpg",
      imgSrcHC: "./assets/images/products/sports-3.jpg",
      imgSrcHD: "./assets/images/products/sports-4.jpg",
    },
    {
      id: 1,
      name: "jacket",
      price: 24.99,
      instock: 43,
      sold: 20,
      del: 7000,
      promoPercentage: 11,
      description:
      "Lorem ipsum dolor sit amet.",
      imgSrc: "./assets/images/products/jacket-5.jpg",
      imgSrcH: "./assets/images/products/jacket-6.jpg",

      imgSrcHA: "./assets/images/products/shoe-1.jpg",
      imgSrcHB: "./assets/images/products/watch-2.jpg",
      imgSrcHC: "./assets/images/products/shoe-3.jpg",
      imgSrcHD: "./assets/images/products/watch-4.jpg",
     
    },
    {
      id: 2,
      name: "skirt",
      price: 19.99,
      instock: 10,
      sold: 33,
      del: 5000,
      promoPercentage: 25,
      description:
      "Lorem ipsum dolor sit amet.",
      imgSrc: "./assets/images/products/clothes-3.jpg",
      imgSrcH: "./assets/images/products/clothes-4.jpg",

      imgSrcHA: "./assets/images/products/perfume.jpg",
      imgSrcHB: "./assets/images/products/shoe-2.jpg",
      imgSrcHC: "./assets/images/products/shampoo.jpg",
      imgSrcHD: "./assets/images/products/shoe-4.jpg",
    },
    {
      id: 3,
      name: "shoe",
      price: 25.99,
      instock: 5,
      sold: 34,
      del: 3900,
      promoPercentage: 33,
      description:
      "Lorem ipsum dolor sit amet.",
      imgSrc: "./assets/images/products/shoe-2.jpg",
      imgSrcH: "./assets/images/products/shoe-2_1.jpg",

      imgSrcHA: "./assets/images/products/jacket-4.jpg",
      imgSrcHB: "./assets/images/products/shoe-2.jpg",
      imgSrcHC: "./assets/images/products/party-wear-1.jpg",
      imgSrcHD: "./assets/images/products/perfume.jpg",
    },
    {
      id: 4,
      name: "clock",
      price: 29.99,
      instock: 4,
      sold: 5,
      del: 3600,
      promoPercentage: 19,
      description:
      "Lorem ipsum dolor sit amet.",
      imgSrc: "./assets/images/products/watch-3.jpg",
      imgSrcH: "./assets/images/products/watch-4.jpg",

      imgSrcHA: "./assets/images/products/shoe-1.jpg",
      imgSrcHB: "./assets/images/products/belt.jpg",
      imgSrcHC: "./assets/images/products/jewellery-1.jpg",
      imgSrcHD: "./assets/images/products/clothes-1.jpg",
    },
    {
      id: 5,
      name: "jacket",
      price: 39.99,
      instock: 40,
      sold: 43,
      del: 6700,
      promoPercentage: 15,
      description:
      "Lorem ipsum dolor sit amet.",
      imgSrc: "./assets/images/products/party-wear-1.jpg",
      imgSrcH: "./assets/images/products/party-wear-2.jpg",

      imgSrcHA: "./assets/images/products/shoe-1.jpg",
      imgSrcHB: "./assets/images/products/shoe-2.jpg",
      imgSrcHC: "./assets/images/products/shoe-3.jpg",
      imgSrcHD: "./assets/images/products/shoe-4.jpg",

    },
    {
        id: 6,
        name: "T-shirt 6",
        price: 39.99,
        instock: 40,
        sold: 29,
        del: 3700,
        promoPercentage: 70,
        description:
        "Lorem ipsum dolor sit amet.",
        imgSrc: "./assets/images/products/jacket-1.jpg",
        imgSrcH: "./assets/images/products/jacket-2.jpg",

        imgSrcHA: "./assets/images/products/shoe-1.jpg",
        imgSrcHB: "./assets/images/products/shoe-2.jpg",
        imgSrcHC: "./assets/images/products/shoe-3.jpg",
        imgSrcHD: "./assets/images/products/shoe-4.jpg",

      },
      {
        id: 7,
        name: "sports shoe",
        price: 39.99,
        instock: 40,
        sold: 31,
        del: 600,
        promoPercentage: 75,
        description:
        "Lorem ipsum dolor sit amet.",
        imgSrc: "./assets/images/products/sports-2.jpg",
        imgSrcH: "./assets/images/products/sports-4.jpg",

        imgSrcHA: "./assets/images/products/shoe-1.jpg",
        imgSrcHB: "./assets/images/products/shoe-2.jpg",
        imgSrcHC: "./assets/images/products/shoe-3.jpg",
        imgSrcHD: "./assets/images/products/shoe-4.jpg",
      },
      {
        id: 8,
        name: "office shoe",
        price: 39.99,
        instock: 40,
        sold: 3,
        del: 800,
        promoPercentage: 55,
        description:
        "Lorem ipsum dolor sit amet.",
        imgSrc: "./assets/images/products/shoe-1.jpg",
        imgSrcH: "./assets/images/products/shoe-1_1.jpg",

        imgSrcHA: "./assets/images/products/shoe-1.jpg",
        imgSrcHB: "./assets/images/products/shoe-2.jpg",
        imgSrcHC: "./assets/images/products/shoe-3.jpg",
        imgSrcHD: "./assets/images/products/shoe-4.jpg",
      },
      {
        id: 9,
        name: "top & short",
        price: 39.99,
        instock: 40,
        sold: 11,
        del: 4000,
        promoPercentage: 80,
        description:
        "Lorem ipsum dolor sit amet.",
        imgSrc: "./assets/images/products/shorts-1.jpg",
        imgSrcH: "./assets/images/products/shorts-2.jpg",


        imgSrcHA: "./assets/images/products/shoe-1.jpg",
        imgSrcHB: "./assets/images/products/shoe-2.jpg",
        imgSrcHC: "./assets/images/products/shoe-3.jpg",
        imgSrcHD: "./assets/images/products/shoe-4.jpg",
      },
      {
        id: 10,
        name: "shirt",
        price: 39.99,
        instock: 40,
        sold: 47,
        del: 9000,
        promoPercentage: 20,
        description:
        "Lorem ipsum dolor sit amet.",
        imgSrc: "./assets/images/products/shirt-2.jpg",
        imgSrcH: "./assets/images/products/shirt-1.jpg",

        imgSrcHA: "./assets/images/products/shoe-1.jpg",
        imgSrcHB: "./assets/images/products/shoe-2.jpg",
        imgSrcHC: "./assets/images/products/shoe-3.jpg",
        imgSrcHD: "./assets/images/products/shoe-4.jpg",
      },
      {
        id: 11,
        name: "watch",
        price: 39.99,
        instock: 40,
        sold:21,
        del: 300,
        promoPercentage: 60,
        description:
        "Lorem ipsum dolor sit amet.",
        imgSrc: "./assets/images/products/watch-1.jpg",
        imgSrcH: "./assets/images/products/watch-2.jpg",

        imgSrcHA: "./assets/images/products/shoe-1.jpg",
        imgSrcHB: "./assets/images/products/shoe-2.jpg",
        imgSrcHC: "./assets/images/products/shoe-3.jpg",
        imgSrcHD: "./assets/images/products/shoe-4.jpg",
      },
      
  ];


// SELECT PRODUCT
const productsE1 = document.querySelector(".product-grid")
const catrtItemsE1 = document.querySelector(".cart-items")
const subtotalE1 = document.querySelector(".subtotal")
const count = document.querySelector(".count")
const featureSlider = document.querySelectorAll(".details-img")

console.log(featureSlider)
// RENDER PRODUCTS
function renderProducts () {
    products.forEach((product) => {
        productsE1.innerHTML +=`
        <div class="showcase" onclick="showDetails(${product.id})">

        <div class="showcase-banner">
        <a href="#">
        <img id="productImg" src="${product.imgSrc}" alt="Mens Winter Leathers Jackets" width="300" class="product-img default">
        
      </a>
         
          <p class="showcase-badge">${product.promoPercentage}%</p>
          <div class="showcase-actions">

            <button class="btn-action">
              <ion-icon name="heart-outline"></ion-icon>
            </button>

            <button class="btn-action">
              <ion-icon name="eye-outline"></ion-icon>
            </button>

            <button class="btn-action">
              <ion-icon name="repeat-outline"></ion-icon>
            </button>

            <button class="btn-action">
              <ion-icon onclick="addToCart(${product.id})" name="bag-add-outline"></ion-icon>
            </button>

          </div>

        </div>

        <div class="showcase-content">

          <a href="#" class="showcase-category">${product.name}</a>

          <a href="#">
            <h3 class="showcase-title">${product.description}</h3>
          </a>

          
          <div class="price-box">
            <p class="showcase-title">Availbe:  ${product.instock}pics</p>            
          </div>
          <div class="price-box">
            <p class="price">₦${product.price}</p>    
            <del>₦${product.del}</del>
          </div>
          <div class="price-box">
          <p class="showcase-title">sold: ${product.sold}pics</p>            
        </div>
        <div class="detail-slides">             
        <div class="detailSlide">
            <img src="${product.imgSrcHA}" alt="" class="details-img" >      
        </div>       
        <div class="detailSlide">
            <img src="${product.imgSrcHB}" alt="" class="details-img">
        </div>
        <div class="detailSlide">
            <img src="${product.imgSrcHC}" alt="" class="details-img">
        </div>
        <div class="detailSlide">
            <img src="${product.imgSrcHD}" alt="" class="details-img">
        </div>
      </div>
      </div>
        
        `
    })
}
renderProducts()

// ADD TO CART
let cartItem =[]
function addToCart(id) {
  
  //check if product already exist in cart
  if(cartItem.some((item) => item.id === id)) {
    changeNumberOfUnits("plus", id)
  }else{
    const item = products.find((product) => product.id === id);
  
    cartItem.push({
      ...item,
      numberOfUnits: 1,
    });
}


updateCart();
} 

//UPDATE CART
function updateCart(){
  renderCartItems();
  renderSubTotal();
}

//caculate and render subtotal

function renderSubTotal(){
  let totalPrice = 0, 
    totalItems =  0;
    
  
  cartItem.forEach((item) => {
    totalPrice += item.price * item.numberOfUnits
    totalItems += item.numberOfUnits
  });
  subtotalE1.innerHTML = `Subtotal (${totalItems} items): ₦${totalPrice.toFixed(2)}`;
  count.innerHTML =totalItems;
}



//RENDER CART ITEMS
function renderCartItems (){
  
  catrtItemsE1.innerHTML = ""
  cartItem.forEach((item) => {
    catrtItemsE1.innerHTML+=`
   
          <!-- render cart items here -->
          <div class="cart-item">
              <div class="item-info">
                  <img src="${item.imgSrc}" alt="${item.name}">
                  <p onclick=" removeItemFromCArt(${item.id})" class="delete-item">&times;</p>
              </div>
              <div class="unit-price">
                  <small>₦</small>${item.price}
              </div>
              <div class="units">
                  <div onclick="changeNumberOfUnits('minus', ${item.id})" class="btn minus">-</div>
                  <div class="number">${item.numberOfUnits}</div>
                  <div onclick="changeNumberOfUnits('plus',  ${item.id})" class="btn plus">+</div>           
              </div>
          </div>

    `
  })
  
}

// remove item from cart
function removeItemFromCArt(id) {
  cartItem = cartItem.filter((item) => item.id !== id  )

  updateCart()
}

// change number of unit for item

function changeNumberOfUnits (action, id) {
  cartItem = cartItem.map((item) => {
    
    let numberOfUnits = item.numberOfUnits
    
    if(item.id=== id){
      if(action === "minus" && numberOfUnits > 1){
        numberOfUnits--;
      }else if(action === "plus" && numberOfUnits < item.instock){
      numberOfUnits++;
      }
    }

    return {
      ...item,
      numberOfUnits,
    };
  });

  updateCart();
};



// DETAIL SLIDER



featureSlider.forEach((item) => {
  item.addEventListener('click', () =>{
    imgs.src= item.src
    
  })
}) 




/*onst sliderBtns = [...featureSlider];
let imgId = 1;

sliderBtns.forEach((sliderItem) => {
  sliderItem.addEventListener('click',(event) =>{
    event.preventDefault();
    imgId = sliderItem.dataset.id;
    slideImage()
  })
})

function slideImage(){
  const displayWidth = document.querySelector('.showcase-img img:first-child').clientWidth;
  document.querySelector('.showcase-img').style.transform =`translateX(${- (imgId -1) * displayWidth}px);`
}
*/

// DETAILS FOR EACH ITEM
const title = document.getElementById('title');
const desc = document.getElementById('desc');
const price = document.getElementById('price');
const del = document.getElementById('del');
const sold = document.getElementById('sold');
const availbe = document.getElementById('available');
const imgs = document.getElementById('imgs');
const imgsra = document.getElementById('imgsra');
const imgsrb = document.getElementById('imgsrb');
const imgsrc = document.getElementById('imgsrc');
const imgsrd = document.getElementById('imgsrd');
const productImg = document.getElementById('productImg');



productImg

function showDetails (id) {
    const choosenProduct = products.find((product) => product.id === id);
    title.textContent= choosenProduct.name
    desc.innerHTML= choosenProduct.description
    price.innerHTML= "₦" + choosenProduct.price
    del.innerHTML= "₦" + choosenProduct.del
    sold.innerHTML= choosenProduct.sold
    availbe.innerHTML= choosenProduct.instock
    imgs.src= choosenProduct.imgSrc
    imgs.src= choosenProduct.imgSrcH

    
    
    imgsra.src= choosenProduct.imgSrcHA
    imgsrb.src= choosenProduct.imgSrcHB
    imgsrc.src= choosenProduct.imgSrcHC
    imgsrd.src= choosenProduct.imgSrcHD

 
    productImg.src= choosenProduct.imgSrcHA
    productImg.src= choosenProduct.imgSrcHB
    productImg.src= choosenProduct.imgSrcHC
    productImg.src= choosenProduct.imgSrcHD
    
    
    
    
}









