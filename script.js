function pushButton(operation) {
    var screen = document.getElementById("screen");
    screen.innerHTML += operation;
};
function delButton() {
    var screen = document.getElementById("screen");
    screen.innerHTML = screen.innerHTML.slice(0, screen.innerHTML.length - 1);
};
function resButton() {
    var screen = document.getElementById("screen");
    screen.innerHTML = "";
};
function equalButton() {
    var numbers = new Array();
    var operation = new Array();
    var screen = document.getElementById("screen");
    var aux = "";

    for (var i = 0; i < screen.innerHTML.length; i++) {
        aux += screen.innerHTML.charAt(i);
        if (screen.innerHTML.charAt(i) === "x" || screen.innerHTML.charAt(i) === "-" || screen.innerHTML.charAt(i) === "+" || screen.innerHTML.charAt(i) === "/") {
            numbers.push(parseFloat(aux.slice(0, aux.length - 1)));
            operation.push(screen.innerHTML.charAt(i));
            aux = "";
        };
    };
    if (aux != "") {
        numbers.push(parseFloat(aux));
    };
    if(numbers.length===0){
        screen.innerHTML = "ERROR";
        return ;
    };
    if (numbers.length <= operation.length) {
        screen.innerHTML = "ERROR";
        return ;
    };

    while (operation.length > 0) {
        for (var e = 0; e < operation.length; e++) {
            if (operation[e] === "x") {
                var opAux = numbers[e] * numbers[e + 1];
                numbers[e] = opAux;
                numbers.splice(e+1, 1);
                operation.splice(e, 1);
            };
            if (operation[e] === "/") {
                var opAux = numbers[e] / numbers[e + 1];
                numbers[e] = opAux;
                numbers.splice(e+1, 1);
                operation.splice(e, 1);
            };
        };
        for (var e = 0; e < operation.length; e++) {
            if (operation[e] === "+") {
                var opAux = numbers[e] + numbers[e + 1];
                numbers[e] = opAux;
                numbers.splice(e+1, 1);
                operation.splice(e, 1);
            };
            if (operation[e] === "-") {
                var opAux = numbers[e] - numbers[e + 1];
                numbers[e] = opAux;
                numbers.splice(e+1, 1);
                operation.splice(e, 1);
            };
        };
    };
    screen.innerHTML=numbers[0];

};
function changeTheme(){
    var barra = document.getElementById("drag");
    var theme = document.getElementById("theme");

    theme.href = "./style/theme"+barra.value+".css";
};