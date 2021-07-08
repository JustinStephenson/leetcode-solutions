import java.util.HashMap;
import java.util.Map;

public class Design_Parking_System {
	
	class ParkingSystem {
		Map<Integer, Integer> parkingTypeCarNumMap;
	    public ParkingSystem(int big, int medium, int small) {
	        parkingTypeCarNumMap = new HashMap<>();
	        parkingTypeCarNumMap.put(1, big);
	        parkingTypeCarNumMap.put(2, medium);
	        parkingTypeCarNumMap.put(3, small);
	    }
	    
	    public boolean addCar(int carType) {
	    	int parkingLotNum = parkingTypeCarNumMap.get(carType);
	    	parkingTypeCarNumMap.put(carType, parkingLotNum == 0 ? 0 : parkingLotNum - 1);
	        return parkingLotNum > 0;
	    }
	}

}
