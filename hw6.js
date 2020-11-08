//function to make selection from product page appear on details page (after clicking show more button)
function linkingPages() {
	var link = window.location.href;
	console.log(link);
	var linkparts = link.split("?");
	if (linkparts.length == 2) {
		var info = linkparts[1];
		var more = JSON.parse(localStorage.getItem(info));

		console.log(more);

		document.getElementById("productname").innerHTML = more.name;
		document.getElementById("productprice").innerHTML = more.price;
	};
};

//list for objects/bun items to enter
var productList =[];

//product class for buns to be purchased
class Product {
	constructor(name, price, glaze, quantity) {
		this.name = name
		this.price = price
		this.glaze = glaze
		this.quantity = quantity
	}
};

//add the dropdown value to the cartList
function addToCart() {
	//objects for 6b
	var name = document.getElementById("productname").innerText;
	var glaze = document.getElementById("glazedropdown").value;
	var quantity = document.getElementById("quantitydropdown").value;
	var price = Number(quantity) * parseFloat(document.getElementById("productprice").innerHTML);
	//create object instance 6b
	var purchase = new Product(name, price, glaze, quantity)
	//add this to a list
	productList.push(purchase)
	//update the list by adding each order of items
	updateCart(productList.length)
	//console.log(productList)
};

//the cartTotal is the amount of orders (seen next to shopping cart)
function updateCart(purchase) {
	var cartTotal = document.getElementById("cartTotal")
	cartTotal.innerHTML = purchase

	//6b
	//store the productList in localStorage (setItem)
	var stringify = localStorage.setItem("order", JSON.stringify(productList))
	var objOrder = JSON.parse(localStorage.getItem("order"));

	//console.log(obj)
	//alert(objOrder[0].name +" is in the cart") //omg 2 hours to figure this out D:
	//I AM HERE having a scope problem with my functions (can't separate functions and localStorage) w/o messing up code
	function checkout() {
		var cost = []
		var total = 0
		//rename items in cart
		//loop through obj and just pull out names (make a list)
		for (var i=0; i < objOrder.length; i++) {
			for (var j=0; j < objOrder[i].length; j++) {
			}
			total += objOrder[i].price
			var subtotal = total.toFixed(2)
			subtotal = document.getElementById("subprice").innerHTML;
		}
	}
};

//function to checkoutItems when cart icon is clicked
//loop through obj, get all the qty: values and add them >> replace innerHTML cartTotal on yourcartHTML



	//make all qty add/count into 1 value
	//replace elements with js
	//document.getElementById("cartCount").innerHTML = itemTotal + " Items";
//}
