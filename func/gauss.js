const pi = 22 / 7;

//Input from the fields
const y1 = document.getElementById("y1");
const y2 = document.getElementById("y2");
const y3 = document.getElementById("y3");
const err = document.getElementById("err");
const btn = document.getElementById("btn");

let ansPanel = document.getElementById("ans-panel");
let processPanel = document.getElementById("process-panel");

btn.addEventListener("click", () => {
    gauss(
        y1.value,
        y2.value,
        y3.value,
        parseInt(err.value),
        processPanel,
        ansPanel
    );

});

//gauss('(5-y-z)/2', '(15-3x-2x)/5', '(8-2x-y)/4');
gauss('(-1+2y-3z)/5', '(2+3x-z)/9', '(2x-y-3)/7', 3, processPanel, ansPanel);

function gauss(fy1, fy2, fy3, tenPower, processPanel, ansPanel) {

    let data = "";
    let ans = "";

    let x2 = 0;
    let y2 = 0;
    let z2 = 0;

    let x3 = 0;
    let y3 = 0;
    let z3 = 0;

    let acc = Math.pow(10, tenPower);

    let i = 0;
    while (true) {
        i++
        x3 = x2;
        y3 = y2;
        z3 = z2;

        x2 = Math.round(nerdamer(fy1, { x: x2, y: y2, z: z2 }).evaluate() * acc) / acc;
        data += "<h1>Step:" + i + "</h1>";
        data += "<h5>x = " + fy1 + "</h5>";
        data += "<h5>Putting x,y,z to " + x3 + ", " + y3 + " and " + z3 + " respt we get, x(" + i + ") = " + x2 + "</h5>";

        y2 = Math.round(nerdamer(fy2, { x: x2, y: y2, z: z2 }).evaluate() * acc) / acc;
        data += "<h5>y = " + fy2 + "</h5>";
        data += "<h5>Putting x,y,z to " + x3 + ", " + y3 + " and " + z3 + " respt we get, y(" + i + ") = " + y2 + "</h5>";


        z2 = Math.round(nerdamer(fy3, { x: x2, y: y2, z: z2 }).evaluate() * acc) / acc;
        data += "<h5>z = " + fy3 + "</h5>";
        data += "<h5>Putting x,y,z to " + x3 + ", " + y3 + " and " + z3 + " respt we get, z(" + i + ") = " + z2 + "</h5><br>";

        if (x3 == x2 && y3 == y2 && z3 == z2) {
            break;
        }


    }
    ans += "<h2>Ans:</h2>";
    ans += "<h4> X = " + x2 + "</h4>";
    ans += "<h4> Y = " + y2 + "</h4>";
    ans += "<h4> Z = " + z2 + "</h4>";
    ans += "<h5>No of iteration: " + i + "</h5>";
    processPanel.innerHTML = data;
    ansPanel.innerHTML = ans;

}