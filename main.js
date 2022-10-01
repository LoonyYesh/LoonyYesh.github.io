function solveIt(num){
    var sum = 0;
    while (num>0) {
        sum = sum + num % 10;
        num = ~~(num / 10);
    }
    return sum;
}
function processIt(){
    var input = document.getElementById("input").value;
    var total = document.getElementById("total").value;
    input = input.replace(" ","");
    const myarr = input.split(",");
    myarr.forEach(num => {
        let temp = solveIt(num);
        if(temp==total){
            document.getElementById("ans").innerHTML += "," + num;
        }
    });
}