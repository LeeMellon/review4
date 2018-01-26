function FullPizza (toppings, cheese, sauce){
  this.toppings = [["peperoni", 5], ["mushrooms", 3] ,["jalapenos", 4]] ;
  this.cheees = ["mozz",2];
  this.sauce = ["mar", 2];
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

var custy = new Customer ("Tony", "cash",);
var pie1 = new FullPizza();

$(function(){




});
