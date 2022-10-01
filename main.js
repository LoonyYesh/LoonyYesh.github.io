function solveIt(num){
    var sum = 0;
    while (num>0) {
        sum = sum + num % 10;
        num = num / 10;
    }
    document.getElementById("ans").innerHTML = sum;
}