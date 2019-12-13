const pi = 22 / 7;

//Input from the fields
const y = document.getElementById("y");
const a = document.getElementById("a");
const b = document.getElementById("b");
const err = document.getElementById("err");
const btn = document.getElementById("btn");

let ansPanel = document.getElementById("ans-panel");
let processPanel = document.getElementById("process-panel");

btn.addEventListener("click", () => {
    //bisect("x^3-x^2-5", 1, 5, 3);
    bisect(y.value, parseInt(a.value), parseInt(b.value), parseInt(err.value));
});
//TODO: 1: get all input
//      2: pass input
//      3: display

//bisect('x*E^x-cos(x)', 0, 1, 5)
//rap('x^2+4sin(x)', -1.5, 2)


function bisect(y, upperRange, lowerRange, error) {
    let data = "";
    let ans = "";
    //function to local variabel
    let fun = y;
    let a = upperRange;
    let b = lowerRange;

    //variable declarations
    let c = 0;
    let fc = 0;
    let e = 0;

    //error and counter
    let err = Math.pow(10, -error);
    const counter = nerdamer('round((log(b-a)-log(o))/log(2))+1', {
        a: a,
        b: b,
        o: err,
    }).evaluate();

    //Iteration
    for (let i = 0; i <= counter; i++) {
        c = (a + b) / 2;

        data += "<h3>Step " + (i + 1) + "</h3> c = (a+b)/2 => c = " + c + "<br>";
        fc = nerdamer(fun, {
            x: c,
            y: rad(c)
        }).evaluate();
        if (fc == 0) {
            document.write("Gottcha");
            break;
        } else {

            let fa = nerdamer(fun, {
                x: a
            }).evaluate();
            data += "f(a) = " + fa + "<br>";

            let fb = nerdamer(fun, {
                x: b,
                y: rad(b)
            }).evaluate();
            data += "f(b) = " + fb + "<br>";

            if (fa * fc < 0) {
                b = c;
                data += "Since f(a)*f(c)<0 so b = c i.e(" + c + ")<br><hr>";
            } else {
                a = c;
                data += "Since f(b)*f(c)<0 so a = c i.e(" + c + ")<br><hr></div></div>";
            }
        }

    }

    //displaying the output
    ans += "<h4>The root is " + c + "</h4>";
    ans += "<h5>" + "F(ans) is " + fc + "</h5>";
    ans += "<h5>The error was " + err + "</h5>";
    ans += "<h5>The no iteration was " + (counter + 1) + "</h5>";

    ansPanel.innerHTML = ans;
    processPanel.innerHTML = data;

    function rad(deg) {
        return pi / 180 * deg;
    }
}

function mod(number) {
    if (number >= 0) {
        return number;
    } else {
        return number * -1;
    }
}