module.exports = function getZerosCount(number, base) {
 
 /*while (base % 2 == 0 && base != 2) {
   base = Math.floor(base / 2);
 };*/

 var Ans = [];
 var d = 2;
   while (d * d <= base) {
     if (base % d == 0){
        Ans.unshift(d);
        base = base/d;
      }
       else {d += 1;};
    }
   if (base > 1) {
       Ans.unshift(base);
   };

function compareReversed(a, b) {
    return b - a;
  }

  Ans.sort(compareReversed);
   

 let zeros = 0;

 while(number > 0) {
  number = Math.floor(number / Ans[0]);
  zeros += number;
 };

 return zeros;

}