/*alert("alert -> Hello, World1!");
window.alert("window.alert -> Hello, World2!");
document.write("document.write -> Hello, World3!<br><br>");*/
var x = "HW...";
document.write("document.write variable ->" + x + "<br><br>");
window.alert("window.alert variable ->" + x );
document.write("Lisa told Bart, \"Knock it off, Bart! Or I'll tell dad!\"<br>\"Eat my shorts!\" Bart responded.<br><br>");
document.write(" \"Be who you are and say what you feel," + " because those who mind don\'t matter and those who matter don\'t mind.\"" + "-Dr. Seuss");
var b = "<br><br>Concatenated" + " String"
document.write(b);

var Family = "The Arezzinis", Dad = "Jeremiah", Mom = "Hermoine", Daughter = "Penny", Son = "Zorro";
document.write("<br><br>Dad name: " + Dad);
document.write("<br><br>Math expression: " + (3 + 3));

function My_First_Function() //defining a function and naming it
{ 
    var str = "This is the button text!";
    document.getElementById("Button_Text").innerHTML = str;
}
