describe('Ice Cream Widget' , function(){
    it('show the price of a flavour' , function(){

      var instance = IceCream();
      instance.setTotalPrice("vanilla");
      instance.getFlavourCost();
      assert.deepEqual("10.00", instance.getFlavourCost());
      
    });
    it('show the price of a container' , function(){

        var instance = IceCream();
        instance.setTotalPrice("plain cone");
        instance.getContainerCost();
        assert.deepEqual("5.00", instance.getContainerCost());
      });
      it('show the price of a topping' , function(){

        var instance = IceCream();
        instance.setTotalPrice("smarties");
        instance.getToppingCost();
        assert.deepEqual("R15.00", instance.getToppingCost());
      });
      it('show the total price of the ice cream' , function(){

        var instance = IceCream();
        instance.setTotalPrice("vanilla");
        instance.setTotalPrice("smarties");
        instance.setTotalPrice("plain cone");
        instance.getTotalPrice();
        assert.deepEqual("30.00", instance.getTotalPrice());
      });

});