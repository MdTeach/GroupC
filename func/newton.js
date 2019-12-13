const pi = 22 / 7;

//Input from the fields
const y = document.getElementById("y");
const a = document.getElementById("a");
const err = document.getElementById("err");
const btn = document.getElementById("btn");

let ansPanel = document.getElementById("ans-panel");
let processPanel = document.getElementById("process-panel");

btn.addEventListener("click", () => {
    //rap("x^3-x^2-5", 1, 3, ansPanel, processPanel);
    rap(y.value, parseInt(a.value), parseInt(err.value), ansPanel, processPanel);
});
//TODO: 1: get all input
//      2: pass input
//      3: display

//bisect('x*E^x-cos(x)', 0, 1, 5)
//rap('x^2+4sin(x)', -1.5, 2)

function rap(y, approxRoot, err, ansPanel, processPanel) {
    let data = "Solution:";
    let ans = "";

    let approxValue = approxRoot;
    let y1 = nerdamer('diff(' + y + ',x)');
    let error = Math.pow(10, -err);

    let i = 0;

    while (true) {
        i++;
        data += "<h1>Step " + i + "</h1>";

        let tempY = nerdamer(y, {
            x: approxValue
        }).evaluate();
        data += "<h5>f(x) = " + y + " = " + tempY + ",for x = " + approxValue + "</h5>";

        let tempY1 = nerdamer(y1, {
            x: approxValue
        }).evaluate();
        data += "<h5>f'(x) = " + y1 + " = " + tempY1 + ",for x = " + approxValue + "</h5>";

        let tempApproxValue = approxValue;
        approxValue = approxValue - (tempY / tempY1);
        data += "<h5> x' = x-f(x)/f'(x) = " + approxValue + "</h5><hr>";

        if (mod(tempApproxValue - approxValue) < error) {
            break;
        }
    }

    let Finalvalue = nerdamer(y, {
        x: approxValue
    }).evaluate();

    ans += "<h3> Root is:" + approxValue + "</h3><h3>Iteration: " + i + "</h3><h3>f(x) = " + Finalvalue + "</h3>";
    ansPanel.innerHTML = ans;
    processPanel.innerHTML = data;


}

function mod(number) {
    if (number >= 0) {
        return number;
    } else {
        return number * -1;
    }
}