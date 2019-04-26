//Function to use the values entered and determine type of triangle
function triangletype() {
  //array to hold the lengths of the triangle sides inputted by user
  var length = [];
  length[0] = parseInt(document.getElementById("value1").value);
  length[1] = parseInt(document.getElementById("value2").value);
  length[2] = parseInt(document.getElementById("value3").value);

  if (((length[0] + length[1]) > length[2]) && ((length[0] + length[2]) > length[1]) && ((length[1] + length[2]) > length[0])) {
    if ((length[0] === length[1] && length[0] !== length[2]) || (length[0] === length[2] && length[0] !== length[1]) || (length[1] === length[2] && length[1] !== length[0])) {
      //print on screen isosceles triangle
      document.getElementById('displayresult').innerHTML = "That is an Isosceles Triangle";
    } else if ((length[0] === length[1]) && (length[1] === length[2])) {
      //print on screen equilateral triangle
      document.getElementById('displayresult').innerHTML = "That is an Equilateral Triangle";
    } else {
      //print on screen scalene triangle
      document.getElementById('displayresult').innerHTML = "That is a Scalene Triangle";
    }
  } else {
    //print the values cannot form a triangle
    document.getElementById('displayresult').innerHTML = "Those values cannot form a triangle";
  }
}

/*Trying to output an image of the appropriate triangle corresponding to the values entered*/
/*var qrEqual = document.createElement("img");
qrEqual.src = "images/isosceles.png";
document.body.appendChild(qrEqual);*/
