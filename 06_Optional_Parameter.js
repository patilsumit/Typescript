function sum(num1, num2, num3) {
    var sum;
    if (num3 == undefined) {
        sum = num1 + num2;
    }
    else {
        sum = num1 + num2 + num3;
    }
    return (sum);
}
sum(10, 20);
sum(10, 20, 30);
console.log(sum(10, 20));
