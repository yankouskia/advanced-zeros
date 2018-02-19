# advanced-zeros
Let's count zeros!

## Task

Your task is to implement `getZerosCount` function, which takes any integer number `number` (`1 <= number <= 10^7`) as first argument and any integer number `base` (`2 <= base <= 256`) as second argument. You should calculate *how many zeros in the end of number, which is factorial of `number` in `base` base system*

For example:
```js
    const zerosCount = getZerosCount(10, 10); // Factorial of 10 is 3628800 and the same in 10th base system
    console.log(zerosCount); // 2. Because there is 2 *tail* zeros in number 3628800
```

```js
    const zerosCount = getZerosCount(16, 16); // Factorial of 16 is 20922789888000 in 10th base system and *130777758000* in 16th base system
    console.log(zerosCount); // 3. Because there is 3 *tail* zeros in number *130777758000*
```

### Important!
Do not try to calculate factorial! First - you will not get exact answer on big numbers. Second - it could take several years to calculate factorial on big integers! Try to think up your awesome solution without such calculations. Good luck!