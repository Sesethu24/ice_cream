function IceCream() {

    var flavourCost = 0;
    var toppingCost = 0;
    var containerCost = 0;
    var totalPrice = 0;
    // var items = {flavours:["vanilla","chocolate","strawberry"], toppings:["smarties",
    // "caramel","astros"], container:["plain cone","sugar cone","paper cup"]};
   
    function setFlavourCost(flavour){
        if (flavour == "vanilla") {
            flavourCost += 10;
        }
        else if (flavour == "chocolate"){
             flavourCost += 12;
        }
        else if(flavour == "strawberry"){
            flavourCost += 14;
        }
       
        return flavourCost;
    }
    function setToppingCost(topping){
        if (topping == "smarties") {
            toppingCost += 15;
        }
        else if (topping == "oreos"){
            toppingCost += 20;
        }
        else if (topping == "chocolate Dip"){
            toppingCost += 8;
        }
        return toppingCost;
    }
    function setContainerCost(container){
        if (container === "plain cone") {
            containerCost += 5;
        }
        else if(container === "sugar cone"){
            containerCost += 7;
        }
        return containerCost;
    }

function setTotalPrice(){

    totalPrice = flavourCost + toppingCost + containerCost;
}

   
    
    function getFlavourCost() {
        return flavourCost.toFixed(2);
    }
    function getToppingCost() {
        return toppingCost.toFixed(2);
    }
    function getContainerCost() {
        return containerCost.toFixed(2);
    }

    function getTotalPrice() {
        return totalPrice.toFixed(2);
    }
    return {
    
        getFlavourCost,
        getToppingCost,
        getContainerCost,
        getTotalPrice,
        setContainerCost,
        setFlavourCost,
        setToppingCost,
        setTotalPrice
    }
}