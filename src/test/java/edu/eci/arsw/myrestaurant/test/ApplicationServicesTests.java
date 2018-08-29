package edu.eci.arsw.myrestaurant.test;

import edu.eci.arsw.myrestaurant.beans.BillCalculator;
import edu.eci.arsw.myrestaurant.model.Order;
import edu.eci.arsw.myrestaurant.services.OrderServicesException;
import edu.eci.arsw.myrestaurant.services.RestaurantOrderServices;
import edu.eci.arsw.myrestaurant.services.RestaurantOrderServicesStub;
import java.util.logging.Level;
import java.util.logging.Logger;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.fail;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringBootConfiguration;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest()
public class ApplicationServicesTests {

    @Autowired
    RestaurantOrderServices ros;

    
    @Test
    public void pruebaOrden1() throws OrderServicesException{
        try{         
            int data = ros.calculateTableBill(1);
            assertEquals(data,45302);
        }catch (Exception e) {
                fail("No se ha podido calcular el total, la mesa no existe");
            }                                 
    }
    
    @Test
    public void pruebaOrden3() throws OrderServicesException{
        try{         
            int data = ros.calculateTableBill(3);
            assertEquals(data,32290);
        }catch (Exception e) {
                fail("No se ha podido calcular el total, la mesa no existe");
            }                                 
    }
    
}
