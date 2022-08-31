//set initial count
let count = 0;

//select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    //used to see the buttons were accessing
    console.log(btn);
    //this checks for which button the user clicked on
    //the console log checks what the button being clicked is
    btn.addEventListener('click', function(e){
        console.log(e.currentTarget.classList);
        const styles = e.currentTarget.classList;
        //logic for decrease, increase and reset buttons
        if (styles.contains("decrease")){
            count -= 10;
        } else if (styles.contains("increase")){
            count += 10;
        } else if (styles.contains("reset")){
            count = 0;
        }
        //changing color based on count value
        if (count > 0){
            value.style.color = "DarkSeaGreen";
        }
        if (count < 0){
            value.style.color = "GoldenRod";
        }
        if (count == 0){
            value.style.color = "black";
        }
        value.textContent = count;
    })
});