let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choose");
const msg = document.querySelector(".result");
const computer_choice = document.querySelector(".Computer");
const user = document.querySelector("#u_score");
const score= document.querySelector("#comp_score");

let us = 0;
let cs = 0;

const compChoice = () => {
    const options = ["rock", "paper", "scissors"];
    let val = Math.floor(Math.random()*3);
    return options[val];
}
const draw = () =>
    {
        console.log("Draw");
        msg.innerText = "There is a Draw";
        msg.style.backgroundColor =  "orange";
    }
const showWinner = (userWin) =>
    {
        if(userWin)
            {
                console.log("User wins");
                us++;
                msg.innerText = "You win!!";
                msg.style.backgroundColor =  "green";
                user.innerText = us;
            }
            else
            {
                console.log("Computer wins");
                cs++;
                msg.innerText = "You loose!!";
                msg.style.backgroundColor =  "red";
                score.innerText = cs;
            } 
    }
const playGame = (userChoice) => {
    console.log("User's choice = ",userChoice);
    //generate computer choice
    let computer = compChoice();
    console.log("Computer's choice = ",computer);

    if(userChoice == computer)
        {
            draw();
        }
    else 
    {
        let userWin;
        if(userChoice == "paper")
        {
            userWin = computer == "rock" ? true : false;
        }
        else if(userChoice == "rock")
            {
                userWin = computer == "paper" ? false : true;
            }
        else{
                userWin = computer == "paper" ? true : false;
            }
        showWinner(userWin); 
    }
    return computer;
}

choices.forEach((choose) => {
    choose.addEventListener("click",() => {
        const choiceID = choose.getAttribute("id")
        let comp_choice = playGame(choiceID)
        computer_choice.innerText = "Computer's Choice: " + comp_choice;
})
});