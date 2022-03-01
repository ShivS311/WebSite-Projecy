
let percentageEl = document.getElementById("percentage")



document.getElementById("btn").addEventListener("click", AwnSearch);


function AwnSearch() {
    let Answer = 0;
    
    //Question 1 

    let input1 = document.getElementById("text1").value


    if (input1 === "18") {
        Answer++;
        document.getElementById("1").innerHTML = "Correct";
       
    } else {
        document.getElementById("1").innerHTML = "Incorrect";
    }
    //Question 2 
    let input2 = document.getElementById("text2").value
    input2 = input2.toLowerCase();

    if (input2 === "12") {
        Answer++;
        document.getElementById("2").innerHTML = "Correct";
     
    } else {
        document.getElementById("2").innerHTML = "Incorrect";

    }
    //Question 3 
    let input3 = document.getElementById("text3").value
    input3 = input3.toLowerCase();

    if (input3 === "13") {
        Answer++;
        document.getElementById("3").innerHTML = "Correct";
      
    } else {
        document.getElementById("3").innerHTML = "Incorrect";
    }


    //Question 4 
    let input4 = document.getElementById("text4").value

    if (input4 === "x" || input4 === "X") {
        Answer++;
        document.getElementById("4").innerHTML = "Correct";
      
    } else {
        document.getElementById("4").innerHTML = "Incorrect";
    }
// Feedback
if (Answer === 1) {
    document.getElementById("repesonse").innerHTML = "Ohh No! Better luck next time ";
} else if (Answer === 2) {
    document.getElementById("repesonse").innerHTML = "Good try";
} else if (Answer === 3) {
    document.getElementById("repesonse").innerHTML = "your doing good man";
} else if (Answer === 4) {
    document.getElementById("repesonse").innerHTML = "You Got them all! LETS GO!!";
} else if (Answer === 0) {
    document.getElementById("repesonse").innerHTML = "Study Harder (All info in the about section)";
}

    let scorePercentage = Math.round(Answer / 4 * 100)
    percentageEl.innerHTML = `You got ${Answer}/4 (${scorePercentage}%)!`

}






