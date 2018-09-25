var RestControllerModule = (function () {	

  var getOrders = function (callback) {
    axios.get('/orders').then(function (response) {                
            var ord=response.data['1'].orderAmountsMap;   
            OrdersControllerModule.showOrdersByTable(ord);                                   
            var ord=response.data['3'].orderAmountsMap;
            OrdersControllerModule.showOrdersByTable(ord);                                                     
        })
        .catch(function (error) {
            order.innerHTML = "(There is a problem with our servers. We apologize for the inconvince, please try again later)";            
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