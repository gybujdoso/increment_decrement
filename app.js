var numberBox = document.querySelector("#numberBox");
var plus = document.querySelector("#plus");
var minus = document.querySelector("#minus");
var reset = document.querySelector("#reset");

var x = 0;
numberBox.value = 0;

plus.addEventListener('click', () => {
    var y = numberBox.value;
    x = y;
    x++;
    numberBox.value = x;
});

minus.addEventListener('click', () => {
    let y = numberBox.value;
    x = y;
    x--;
    numberBox.value = x;
});

reset.addEventListener('click', () => {
    x = 0;
    numberBox.value = x;
});