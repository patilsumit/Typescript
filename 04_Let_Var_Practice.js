//Note the scope difference
function scopeTesting() {
    var testVar = 100;
    for (var testLet = 0; testLet <= 10; testLet++) {
        console.log("The value of Let " + testLet);
        console.log("The value of Var " + testVar);
    }
    console.log("The Value of var" + testLet);
    console.log("The Value of var" + testVar);
}
scopeTesting();
