sap.ui.jsview("helloworld.helloworld", {

      getControllerName : function() {
         return "helloworld.helloworld";
      },

      createContent : function(oController) { 
    	  var aControls = []; 
    	  var oButton = new sap.ui.commons.Button({ 
    	    id : this.createId("MyButton"), 
    	    text : "Hello World" 
    	  }); 
    	  aControls.push(oButton.attachPress(oController.doIt)); 
    	  return aControls;
    }

});
