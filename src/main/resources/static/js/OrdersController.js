var orders= [{"id" : 1 ,"products":{"Product":"PIZZA", "Quantity":3 ,"Price":10000}},{"products":{"Product":"HOTDOG", "Quantity":1 ,"Price":3000}},{"products":{"Product":"COKE","Quantity":4 ,"Price":1300}}];
var orders2= [{"id" : 2,"products":{"Product":"PAN", "Quantity":3 ,"Price":10000}},{"products":{"Product":"HOTDOG", "Quantity":1 ,"Price":3000}},{"products":{"Product":"COKE","Quantity":4 ,"Price":1300}}];

//removeOrderById(2);

function addOrder(orders) {
  var tablas=document.getElementById('table');
  var id=orders[0].id;
  var textoHTML= '<table id='+id+' class="table table-striped table-sm"> <thead> <tr> <th>Product</th> <th>Quantity</th> <th>Price</th> </tr> </thead> <tbody id="OrdersBody">';
  for (i=0;i < orders.length;i++){
		textoHTML+= "<tr> <td>";
		textoHTML+=orders[i].products.Product;
		textoHTML+="</td> <td>";
		textoHTML+=orders[i].products.Quantity;
		textoHTML+="</td> <td>";
		textoHTML+=orders[i].products.Price;
		textoHTML+="</td> </tr>";
    }
  textoHTML+="</tbody> </table>"  
  tablas.innerHTML+=textoHTML;
}

function removeOrderById(id){
  var element = document.getElementById(id);
  node = element.parentNode;
  node.removeChild(element);
}

function newOrder(){
  addOrder(orders);
}
function loadOrders(){
  getOrders();
}

var apiUrl = "http://localhost:8080/orders";
var order = document.querySelector(".order");

function getOrders() {  
        axios.get('/orders').then(function (response) {                
            var ord=response.data['1'].orderAmountsMap;                      
            setOrder(ord,1)    
            var ord=response.data['3'].orderAmountsMap;  
            setOrder(ord,3)                                        
        })
        .catch(function (error) {
            order.innerHTML = "(There is a problem with our servers. We apologize for the inconvince, please try again later)";            
        });
    }
   
function setOrder(ord,cont){
  var ord3=JSON.stringify(ord);   
  for (i=0;i < 6;i++){
      ord3=ord3.replace('"',"");
  }      
  ord3=ord3.replace('{',"");
  ord3=ord3.replace('}',"");
  ord3=ord3.split(",");   
    
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
  textoHTML+="</tbody> </table>"  
  tablas.innerHTML+=textoHTML;
}

