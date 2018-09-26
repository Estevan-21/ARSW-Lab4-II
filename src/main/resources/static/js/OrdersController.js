var OrdersControllerModule = (function () {

  var showOrdersByTable = function () {  	
	  console.log("SHOW1");
    var callback = {
        onSuccess: function(ord){
			var cont=1;
            console.log("SHOW");
            console.log(ord);	
			var ord3=JSON.stringify(ord);   
			console.log(ord3);
			  for (i=0;i < 6;i++){
				  ord3=ord3.replace('"',"");
			  }      
			  ord3=ord3.replace('{',"");
			  ord3=ord3.replace('}',"");
			  ord3=ord3.split(",");   
				console.log("TER");
			  var tablas=document.getElementById('table');
			   
			  var textoHTML= '<table id='+cont+' class="table table-striped table-sm"> <thead> <tr> <th>Product</th> <th>Quantity</th> </tr> </thead> <tbody id="OrdersBody">';
			  
			  for (i=0;i < ord3.length;i++){
				ord3[i]=ord3[i].split(":");
				textoHTML+= "<tr> <td>";
				textoHTML+=ord3[i][0];
				textoHTML+="</td> <td>";
				textoHTML+=ord3[i][1];   
				textoHTML+="</td> </tr>";				
				}
				console.log("TER2");  
			  textoHTML+="</tbody> </table>" 			  
			tablas.innerHTML+=textoHTML;			
            },
        onFailed: function(exception){
			console.log(exception);
        }
    }
    RestControllerModule.getOrders(callback)
  };

  var updateOrder = function () {
    // todo implement
  };

  var deleteOrderItem = function (itemName) {
    // todo implement
  };

  var addItemToOrder = function (orderId, item) {
    // todo implement
  };

  return {
    showOrdersByTable: showOrdersByTable,
    updateOrder: updateOrder,
    deleteOrderItem: deleteOrderItem,
    addItemToOrder: addItemToOrder
  };

})();
