function Pizza() {
  this.toppings = [];
  this.invoice = [];
  this.price = 0;
}

Pizza.prototype.cleanInvoice = function(bulk) {
  var toppingsDirty = []
  var toppingsClean = "";
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
    // event.preventDefault();
  //   debugger
    $(".sizeChoice").fadeOut(900, "swing", "complete");
    $("#" + size + "Pizza").delay(950).fadeIn(900, "swing");
    // debugger
    $("#" + size + "orderBttn").click(function(event) {
      // debugger
      event.preventDefault();
      var bulk = [];
      $('input[name=pizzaParts]:checked').map(function() {
        // debugger
        var coarseFormInput = ($(this).val());
        console.log(coarseFormInput);
        bulk.push(coarseFormInput);
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
