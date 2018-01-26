function FullPizza (){
  this.toppings = [["Topping: peperoni", 5], ["Topping: mushrooms", 3] ,["Topping: jalapenos", 4], ["cheese: Mozzerella", 4], ["Sauce: Marinarra", 3]] ;
  this.invoice = [];
  this.price = 0;
}

function Pizza (){
  this.toppings = [];
  this.invoice = [];
  this.price = 0;
}

function Customer (name, card, order){
  this.name = name;
  this.card = "";
  this.order = [];
}

FullPizza.prototype.getPrice = function(){
  var toppingsPrice =0;
  this.toppings.forEach(function(item){
   toppingsPrice += item[1];
  });
  return this.price += toppingsPrice;
}

FullPizza.prototype.getInvoice = function(){
  var toppingInvoice = [];
  this.toppings.forEach(function(item){
    var itemName = item[0];
    var itemPrice = item[1];
    var invoiceItem = itemName +"        for  $ " + itemPrice + ".00"
    toppingInvoice.push(invoiceItem)
    console.log(itemName, itemPrice, toppingInvoice);
  })
  return this.invoice = toppingInvoice;
}


var custy = new Customer ("Tony", "cash",);
var pie1 = new FullPizza();

$(function(){




});
