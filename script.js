
function Result(params) {
    let input1 = document.querySelector("#sum1").value;
    let input2 = document.querySelector("#sum2").value;

    console.log(input1);
    console.log(input2);

    let Result1 = Number(input1) + Number(input2)
    console.log(Result1);

    let sum3Element = document.querySelector("#sum3");
    sum3Element.innerText = Result1;
}








