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
};

//the cartTotal is the amount of orders (seen next to shopping cart)
function updateCart() {
	//the cartTotal is the length of the productList
	var cartTotal = document.getElementById("cartTotal")
	cartTotal.innerHTML = productList.length //has to be in a function?

	//console.log(productList.length)
	//console.log(productList)

	//6b
	//store the productList in localStorage (setItem)
	var stringify = localStorage.setItem("order", JSON.stringify(productList))

	//carryOver() to store info and bring up on Cart page
	carryOver()
};

//console.log(productList) //works globally... or does it?

var objOrder = JSON.parse(localStorage.getItem("order"));
var total = 0
var cartsummary = objOrder.length

function carryOver() {
	//loop through obj and just pull out names (make a list)
	for (var i=0; i < objOrder.length; i++) {
		for (var j=0; j < objOrder[i].length; j++) {
		}
		total = total + objOrder[i].price
		var subtotal = total.toFixed(2)
	}
	document.getElementById("cartCount").innerHTML = cartsummary + " Items"
	document.getElementById("subtotalprice").innerHTML = "$ " + subtotal

	//itemZero
	document.getElementById("itemZero").innerHTML = objOrder[0].name
	document.getElementById("itemZeroPrice").innerHTML = "$" + objOrder[0].price
	document.getElementById("itemZeroGlaze").innerHTML = objOrder[0].quantity + " X Glaze: " + objOrder[0].glaze
	//itemOne
	document.getElementById("itemOne").innerHTML = objOrder[1].name
	document.getElementById("itemOnePrice").innerHTML = "$" + objOrder[1].price
	document.getElementById("itemOneGlaze").innerHTML = objOrder[1].quantity + " X Glaze: " + objOrder[1].glaze
};

function clearItemZero() {
	localStorage.removeItem(objOrder[0]) //order is not defined
};

function clearItemOne() {
	localStorage.removeItem(objOrder[1])
};
