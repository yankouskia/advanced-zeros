module.exports = function getZerosCount(number, base) {
 
 while (base % 2 == 0 && base != 2) {
   base = Math.floor(base / 2);
 };

 let zeros = 0;

 while(number > 0) {
  number = Math.floor(number / base);
  zeros += number;
 };

 return zeros;

}