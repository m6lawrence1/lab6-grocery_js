var items = [
{
	name: "orange",
	price: 0.90,
},
{
	name: "apple",
	price: 0.75,
},
{
	name: "carrot",
	price: 0.80,
},
{
	name: "lemon",
	price: 1,
},
{
	name: "kale",
	price: 2,
},
{
	name: "milk",
	price: 3,
},
{
	name: "eggs",
	price: 3,
}
]


items.forEach(function(product) {
   var newElement = document.createElement("li");
   newElement.innerHTML = "Item - " + product.name + ", price = " + product.price;
   document.getElementById("foodlist").appendChild(newElement);
});


var sum = 0;
  for (var j = 0; j < items.length; j++) {
    sum += items[j].price;
  };

  var newElement = document.createElement("p");
  newElement.innerHTML = "Total cost = $" + sum;
  document.getElementById("total").appendChild(newElement);






