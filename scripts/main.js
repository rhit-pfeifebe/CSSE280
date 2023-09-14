function paint(color){
    const circle = document.getElementById('circleID');
    circle.style = `background-color:${color}`;
    console.log(circle);
}

let counter = 0;

main = function(){
    console.log("Ready");
    document.querySelector("#decrementButton").onclick = (event) => {
        console.log("decrement button");
        counter = counter - 1;
        updateView();
    };
    document.querySelector("#resetButton").onclick = (event) => {
        console.log("reset button");
        counter = 0;
        updateView();
    };
    document.querySelector("#incrementButton").onclick = (event) => {
        console.log("increment button");
        counter = counter + 1;
        updateView();
    };
}



updateView = function(){
    document.querySelector("#counterText").innerHTML = `Counter = ${counter}`
}


main();