var RestControllerModule = (function () {	

  var getOrders = function (callback) {
    axios.get('/orders').then(function (response) {		
			console.log(response.data);                  
            var ord=response.data['1'].orderAmountsMap;   
            console.log("BIEN2");  
            callback.onSuccess(ord);                                   
            console.log("BIEN3");            
            var ord=response.data['3'].orderAmountsMap;
            callback.onSuccess(ord);     
                                                              
        })
        .catch(function (error) {
            document.innerHTML = "(There is a problem with our servers. We apologize for the inconvince, please try again later)";            
	});
  };

  var updateOrder = function (order, callback) {
    // todo implement
  };

  var deleteOrder = function (orderId, callback) {
    // todo implement
  };

  var createOrder = function (order, callback) {
    // todo implement
  };

  return {
    getOrders: getOrders,
    updateOrder: updateOrder,
    deleteOrder: deleteOrder,
    createOrder: createOrder
  };

})();
