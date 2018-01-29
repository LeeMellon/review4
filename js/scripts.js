function Pizza() {
  this.toppings = [];
  this.invoice = [];
  this.price = 0;
}
                                                                                //takes from array bulk, strips excess marks and splits at ",".
Pizza.prototype.cleanInvoice = function(bulk) {                                 //then saves the  data now cleaned to the Pizza object as ["Dough: Gluten-Free", 5]
  var toppingsClean = "";                                                       //so that the price and invoice methods can do their thing.
  var priceClean = 0;
  bulk.forEach(function(top) {
    eachPiece = top.replace(/\"/g, "").split(",")
    toppingsClean = eachPiece[0];
    priceClean = parseInt(eachPiece[1]);
  })

  this.toppings.push([toppingsClean, priceClean]);
  return this.toppings;
}

Pizza.prototype.getPrice = function() {
  var toppingsPrice = 0;
  this.toppings.forEach(function(item) {
    toppingsPrice += parseFloat(item[1]);
  });
  return this.price = toppingsPrice;
}

Pizza.prototype.getInvoice = function() {
  var toppingInvoice = [];
  this.toppings.forEach(function(item) {
    var itemName = item[0];
    var itemPrice = item[1];
    var invoiceItem = itemName + "        for  $ " + itemPrice + ".00"
    toppingInvoice.push(invoiceItem)
  })
  return this.invoice = toppingInvoice;
}

var pie1 = new Pizza();

$(function() {
  $("#sizeForm").change(function(event) {
    var size = $("input:radio[name=size]:checked").val();
    $(".sizeChoice").fadeOut(900, "swing", "complete");
    $("#" + size + "Pizza").delay(950).fadeIn(900, "swing");
    $("#" + size + "orderBttn").click(function(event) {
      event.preventDefault();
      var bulk = [];
      $('input[name=pizzaParts]:checked').map(function() {                      //takes the input from checkboxes
        var coarseFormInput = ($(this).val());                                  //saves as cFI
        bulk.push(coarseFormInput);                                             //pushes all cFI to bulk where it is saved like this ["Dough: Gluten-Free,5", "Sauce: Classic Marinara,3"]
        pie1.cleanInvoice(bulk);
        var recipt = pie1.getInvoice();
        var price = pie1.getPrice();
        var invoiceEl = document.getElementById("invoice");
        var priceEl = document.getElementById("price");
        invoiceEl.innerHTML = recipt;
        priceEl.innerHTML = "$ " + price;
        $("#" + size + "Pizza").fadeOut(900, "swing");
        $(".costCont").delay(950).fadeTo(900, 1);
      })
    })
  })
});
