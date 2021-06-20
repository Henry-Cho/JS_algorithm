// 1603번 문제

/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
 let parkingLot = {};
 var ParkingSystem = function(big, medium, small) {
     parkingLot[1] = big;
     parkingLot[2] = medium;
     parkingLot[3] = small;
     
 };
 
 /** 
  * @param {number} carType
  * @return {boolean}
  */
 let answer = [];
 ParkingSystem.prototype.addCar = function(carType) {
     if (parkingLot[carType] !== 0) {
         parkingLot[carType] -= 1;
         return true;
     }
     return false;
 };
 
 /** 
  * Your ParkingSystem object will be instantiated and called as such:
  * var obj = new ParkingSystem(big, medium, small)
  * var param_1 = obj.addCar(carType)
  */