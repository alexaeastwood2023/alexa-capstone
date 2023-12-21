//declaring an empty array to contain my newInstance I am going to create
let candlesStock = [];
//declaring an empty array; This will be used to hold onto future obj created keys/values to hold on to each item which is purchased by the user
let subTotal = 0; // total prier to tax
let taxTotal = 0; // total of each tax
let grandTotal = 0; // total of everything
// constructor function constructs a new object over and over again ** like a blueprint of a obj with the same keys each time**
function CandleObj(img, scentTitle, cost) {
  this.image = img;
  this.title = scentTitle;
  this.price = cost;
}
//this is a newInstance I am using the key word new and invoking the constructor function and adding values to my keys.  whatever falls in the first slot will fall in img and the key will be image.  Even if I put the title in first the key will still be image b/c its the first slot and then you move on.  candleOne will be a object with kys/values
let candle1 = new CandleObj('../images/candle5.jpeg', 'Cucumber Melon', '15.00');
let candle2 = new CandleObj(`../images/candle6.jpeg`, `French Vanilla`, `20.00`);
let candle3 = new CandleObj(`../images/candle7.jpeg`, `Cafe Al Fressco `, `20.00`);
let candle4 = new CandleObj(`../images/candle4.jpeg`, `Joop`, `15.00`);
let candle5 = new CandleObj(`../images/candle10.jpeg`, `Cashmer Woods`, `20.00`);
let candle6 = new CandleObj(`../images/candle9.jpeg`, `Cherry Blossom`, `15.00`);
let candle7 = new CandleObj(`../images/candle2.jpeg`, `Apple Cider`, `20.00`);
let candle8 = new CandleObj(`../images/candle8.jpeg`, `Beach Walk`, `15.00`);
let candle9 = new CandleObj(`../images/candle10.jpeg`, `Studson`, `15.00`);
let candle10 = new CandleObj(`../images/candle5.jpeg`, `Endless Weekend`, `20.00`);
let candle11 = new CandleObj(`../images/candle6.jpeg`, `French Vanilla`, `20.00`);
let candle12 = new CandleObj(`../images/candle7.jpeg`, `Carmel Bean`, `20.00`);
let candle13 = new CandleObj(`../images/candle4.jpeg`, `Cedarwood`, `15.00`);
let candle14 = new CandleObj(`../images/candle10.jpeg`, `Old Spice`, `20.00`);
let candle15 = new CandleObj(`../images/candle9.jpeg`, `Strawberry ShortCake`, `15.00`);
let candle16 = new CandleObj(`../images/candle2.jpeg`, `Apple Cinnamon`, `20.00`);
let candle17 = new CandleObj(`../images/candle8.jpeg`, `Blueberry CheeseCake`, `20.00`);
let candle18 = new CandleObj(`../images/candle10.jpeg`, `Moonlight`, `20.00`);
let candle19 = new CandleObj(`../images/candle7.jpeg`, `Sugar Cookie`, `20.00`);
let candle20 = new CandleObj(`../images/candle5.jpeg`, `Fresh Scent`, `15.00`);
let candle21 = new CandleObj(`../images/candle6.jpeg`, `Be Kissable`, `20.00`);
let candle22 = new CandleObj(`../images/candle7.jpeg`, `Expresso`, `20.00`);
let candle23 = new CandleObj(`../images/candle9.jpeg`, `Love Spell`, `20.00`);
let candle24 = new CandleObj(`../images/candle4.jpeg`, `Winter Green`, `15.00`);
let candle25 = new CandleObj(`../images/candle5.jpeg`, `Ocean Breeze`, `20.00`);
let candle26 = new CandleObj(`../images/candle6.jpeg`, `Coffee Cake`, `15.00`);
let candle27 = new CandleObj(`../images/candle8.jpeg`, `Blue Rasberry`, `20.00`);
let candle28 = new CandleObj(`../images/candle10.jpeg`, `Black Cherry`, `20.00`);

// using the .push its an array method and pushing each new obj into my empty array that was declared above
candlesStock.push(candle1, candle2, candle3, candle4, candle5, candle6, candle7, candle8, candle9, candle10, candle11, candle12, candle13, candle14, candle15, candle16, candle17, candle18, candle19, candle20, candle21, candle22, candle23, candle24, candle25, candle26, candle27, candle28);

createCandleCards(); // called my function here

function createCandleCards() { //my function to create the cards
  let candleRoot = document.getElementById("candleRoot"); // got the element by Id of candleRoot
  // I am looping over the array that I pushed my objs into to create multiple cards/.length tells me how many are in my array
  for (let i = 0; i < candlesStock.length; i++) {
    // by using += Im adding mulitple pieces of HTML if I only use = it will only display the last card.
    candleRoot.innerHTML += `<div class="card mb-3 mt-2 mx-auto" style="width: 18rem;">
   <img src="${candlesStock[i].image}" class="card-img-top shadow mt-3" alt="candles">
   <div class="card-body">
     <h4 class="card-title h4ForTitleOfCandles"><b>${candlesStock[i].title}</b></h4>
     <p class="pTagForPrice"><b>$${candlesStock[i].price}</b></p>
     <label class="qty">
         <b>Qty:</b>
     <input type="number" class="form-control" min="0" maxlength="100" name='qty'>
             </label>
             <br>
             <button class="btn btn-secondary mt-4" name="${i}" onclick="createCart(event)" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"> Add To Cart </button>
             </div>
             <hr>
 </div> `;
  }
}
// created my createCart function here
function createCart(e) {
  let i = e.target.name;
  //I am using the Number() instead of the parseInt() so I dont lose the change
  let cost = Number(candlesStock[i].price);
  let qty = e.target.parentElement.children[2].children[1].value;
  qty = Number(qty);
  let scent = candlesStock[i].title;
  console.log(scent, i);
  //I am taking the qty and the cost of each item and adding it together
  let itemTotal = qty * cost;
  //I created an object to hold onto all information from each candle the user wants to buy
  let shoppingObj = {
    scent: scent,
    price: cost,
    qty: qty,
    itemTotal: itemTotal
  };
  addCart(shoppingObj); //called my function addCart here
}
// here is my localstorage
let shoppingArray = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

// created an arrow function here of addCart
const addCart = (shoppingObj) => {
  let objValues = Object.values(shoppingObj);
  let exists = false;
  for (let item of shoppingArray) {
    if (item.scent === shoppingObj.scent) {
      console.log(shoppingObj.scent);
      exists = true;
      item.qty = shoppingObj.qty;
      item.itemTotal = shoppingObj.itemTotal;
    }
  }
  exists ? null : shoppingArray.push(shoppingObj); //ternary
  localStorage.setItem('cart', JSON.stringify(shoppingArray));
  console.log(shoppingArray);
  createShoppingView();
};
// this is the shopping card body
function createShoppingView() {
  let htmlOne;
  // i grabbed the element by ID for the table body
  let tableBody = document.getElementById('tableBody');
  tableBody.innerHTML = "";
  // made the sub, tax, and grand total to = 0
  subTotal = 0;
  taxTotal = 0;
  grandTotal = 0;
  // for loop for the table of the shopping cart body
  for (let i = 0; i < shoppingArray.length; i++) {
    // let eachItemTax = shoppingArray[i].itemTotal * 0.07;
    let item = shoppingArray[i];
    subTotal += item.itemTotal;
    taxTotal += item.itemTotal * 0.07;
    shippingTotal = 6.25;
    grandTotal = subTotal + taxTotal + shippingTotal;
    
    // this is the table and it will show everything you have added into your cart
    let htmlOne = grandTotal === 0 ? "" : `
  <tr>
  <td class="text-white tableText cartFontSize">${item.qty}
   <button value="${item.scent}" class="text-white btn btn-danger border-light decrease">-</button>
  <button value="${item.scent}" class="btn btn-success border-light increase">+</button>
  </td>
  <td class="text-white tableText cartFontSize">${item.scent}</td>
 <td class="text-white tableText cartFontSize">$${item.price}.00</td>
  <td id="removeAll"><button class="btn btn-danger ms-2 border-light" onclick='removeItem(event, ${i})'>X</button></td>
  </tr>

`;
//  make a remove all items as well as make the - and + buttons add or subtract items
    tableBody.innerHTML += htmlOne;
  }

  // this is for the decrease button
$(`.decrease`).on("click", function(e) {
    let scent = e.target.value;
      for (let i = 0; i < shoppingArray.length; i++) {
        let item = shoppingArray[i];
    if (item.scent === scent) {
      item.qty--;
      item.itemTotal = item.price * item.qty;
      console.log(item)
      if(item.qty === 0){
        shoppingArray.splice(i, 1);
      }
    }
  }
  createShoppingView();
  });
  
  // this is for the increase button
    $(`.increase`).on("click", function(e) {
        let scent = e.target.value;
      for (let item of shoppingArray) {
    if (item.scent === scent) {
      item.qty++;
      item.itemTotal = item.price * item.qty;
      // console.log(item);
    }
  }
  createShoppingView();
  });
  // this is going to show you subtotal your tax total and your grandtotal and then have a check out and a close button underneath that
  let htmlTwo = grandTotal === 0 ? `<h3 class="text-danger removeText text-center mt-5">YOUR CART IS EMPTY</h3>` : `<div id='moneyDiv'>
  <!-- <p class="text-white textShadow pTagSize"><i>If you want to update the qty on any item, please go back and put the qty and then click add to cart. Example: If you want 3 instead of 4, you just insert 3 again and then press add to cart</i> </p> -->
<p class="text-white tableText fontSizeOnTable"><b>Subtotal:<span class="text-white" id="subTotal"> $${subTotal.toFixed(2)}</span></b></p>
<p class="text-white tableText fontSizeOnTable"><b>Tax: <span class="text-white" id="taxTotal">$${taxTotal.toFixed(2)}</span></b></p>
<p class="text-white tableText fontSizeOnTable"><b>Shipping & Handlding: $${shippingTotal}</b></p>
<p class="text-white tableText fontSizeOnTable"><b>Grand Total: <span class="text-white" id="grandTotal">$${grandTotal.toFixed(2)}</span></b></p>
<hr class="border-light">
<button class='btn btn-secondary border-light offset-4 mt-2 mb-3' data-bs-toggle="modal" data-bs-target="#exampleModal">Check Out</button>
</div>
<h6 class="text-white textShadow text-center">If you have not signed up with us to get our free gifts or discounts, please be sure to do that before you check out! Thank you!</h6>
`;
  $('#totalBody').html(htmlTwo);
  let modalTotal = document.getElementById('chargedTotal'); // this is the id that I targeted in the modal at the bottom of it, it will say `Your card will be billed` and it gives the total so that way you know what is going to be charged to your card before you hit confirm or close
  console.log(modalTotal);
  //  this is a jQuery chain I put the text-info and text-center and mt to the words made the font family a different style
  $(`#chargedTotal`).addClass(`text-info`).addClass(`text-center`).addClass(`mt-3`).
    css({
      "font-family": `papyrus`,
      "font-weight": `bolder`
    });
  // this is where I added a class so that way I can change the color of the text so they know that this is a warning before they hit confirm
  modalTotal.innerText = `Your Card Will Be Billed: $${grandTotal.toFixed(2)}`; // at the bottom of my modal this is where it will put the text `Your card will be billed` and it fills in the amount
}
// created my removeItem function here
function removeItem(e, i) {
  e.preventDefault();
  let item = $(e.target).parent().parent().remove();
  console.log(e.target);
  shoppingArray.splice(i, 1);
  localStorage.setItem('cart', JSON.stringify(shoppingArray)); // localstorage here
  createShoppingView();
}
// this is the creditcard function that has an onsubmit that way if you try to submit the form without filling it out I put a required on there so u can not move forward unless u fill in the information
$(`#creditCard`).on("submit", function () {
  let cardName = document.getElementById(`cardName`).value; // i grabbed the value of the input of the cardname
  let email = document.getElementById(`emailAddress`).value; // I grabbed the value and element by id for the email input
  let modalBody = document.getElementById(`modalBody`); // grabbed the element by id
  // this is what will pop up after you inserted the information for the creditcard
  let freeGifts = [`<img class="d-block w-50 offset-3" src="../images/lotion2.jpeg" alt="lotion">`, `<img class="d-block w-50 offset-3" src="../images/scent2.jpeg" alt="scent 2">`, `<img class="d-block w-50 offset-3" src="../images/scent oil 1.jpeg" alt="scent oil 1">`, `<img class="d-block w-50 offset-3" src="../images/threeCandles.jpeg" alt="three candles">`, `<img class="d-block w-50 offset-3" src="../images/sixCandles.jpeg" alt="six candles">`,`<img class="d-block w-50 offset-3" src="../images/flameAndCandle.jpeg" alt="flame and candles">`]
  // this is math.random so that it will filter through the images
  let random = Math.floor(Math.random() * freeGifts.length)
  // this is the discounts array
  let discounts = [`10%`, `30%`, `50%`, `100%`]
  // this will filter through the discounts array up above
  let random1 = Math.floor(Math.random() * discounts.length)
  // this is what will pop up after you inserted the information for the creditcard
  modalBody.innerHTML = `<h3 class="text-white text-center"><b>Your Order Has Been Submitted <span class="text-info text-shadow">${cardName}</span></b></h3>
  <h5 class="text-white text-center"><b>We will email you the receipt to <span class="text-info textShadow">${email}</span> and there will be a ${discounts[random1]} discount on your next purchase! Thank you for shopping with us!</b></h5>
  <p class="text-white text-center"><b>Your card was charged <span class="text-info textShadow">$${grandTotal.toFixed(2)}</span></b></p>
  ${freeGifts[random]}
  <h6 class="text-white text-center mt-2">* Here is a gift for shopping with us!!!*</h6>
  <button class="btn btn-secondary border-light d-block w-50 offset-3" data-bs-dismiss="modal"">Close</button>`});
  
  
