var OrdersControllerModule = (function () {
  var order1 = [];	
  
  var showOrdersByTable = function () {  	
	var cont=1;
    var callback = {
        onSuccess: function(ord){
        	var order2 = [];			            
			var ord3=JSON.stringify(ord);   			
			  for (i=0;i < 6;i++){
				  ord3=ord3.replace('"',"");
			  }      
			  ord3=ord3.replace('{',"");
			  ord3=ord3.replace('}',"");
			  ord3=ord3.split(",");   			
			  var tablas=document.getElementById('table');			   
			  var textoHTML='<div class="inner"><H3> Table '+ cont +'</H3></div> <table id='+cont+' class="table table-striped table-sm"> <thead> <tr> <th>Product</th> <th>Quantity</th> </tr> </thead> <tbody id="OrdersBody">';			  
			  for (i=0;i < ord3.length;i++){
				ord3[i]=ord3[i].split(":");
				textoHTML+= "<tr> <td>";
				textoHTML+=ord3[i][0];
				order2.push(ord3[i][0]);
				textoHTML+="</td> <td>";
				textoHTML+=ord3[i][1]; 
				order2.push(ord3[i][1]);  
				textoHTML+="</td> </tr>";				
				}	
			order1.push(order2);	
			console.log(order1);		
			textoHTML+="</tbody> </table>" 			  
			tablas.innerHTML+=textoHTML;
			cont=cont+1;			
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
