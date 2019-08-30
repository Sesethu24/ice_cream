var selectFlavourElem = document.querySelector(".selectFlavour");
var selectContainerElem = document.querySelector(".selectContainer");
var checkElement = document.querySelector(".check");
var addPriceElem = document.querySelector(".submitBtn");

var theTemplate = document.querySelector(".orderTemplate").innerHTML;
    
    var orderTemplate = Handlebars.compile(theTemplate);
    var myData = document.querySelector(".orderData");

    var order = IceCream();

    function myOrder(){
        let toppings = document.querySelectorAll(".topping:checked");
        
        toppings.forEach(element => {
        

           order.setFlavourCost(selectFlavourElem.value);
           order.setToppingCost(selectContainerElem.value);
           order.setContainerCost(checkElement.value);
           order.setTotalPrice(element.value);
        

            var handlers = orderTemplate({

                flavour: "R" + order.getFlavourCost(),
                container:  "R" + order.getContainerCost(),
                topping: "R" + order.getToppingCost(),
                total: "R" + order.getTotalPrice()
                
            })
            myData.innerHTML = handlers;
        });
      
       
        
       
     //console.log(toppings.value);
    }
    addPriceElem.addEventListener('click', myOrder)