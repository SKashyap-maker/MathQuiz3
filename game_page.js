function send(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    right_answer = parseInt(number1) * parseInt(number2);

    question_number = "<h4>" + number1 + "X" + number2 + "</h4>";
    input = "<br> Answer: <input type='text' id='input_check'";
    check_button = "<br> <br> <button class='btn btn info' onclick='Check()'> Check </button>";

    join = question_number + input + check_button;
    document.getElementById("output").innerHTML = join; 
    
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
 }