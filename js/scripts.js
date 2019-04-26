//Function to use the values entered and determine type of triangle
function triangletype() {
  //array to hold the lengths of the triangle sides inputted by user
  //var lengths = [];
  var length1 = parseInt(document.getElementById("value1").value);
  var length2 = parseInt(document.getElementById("value2").value);
  var length3 = parseInt(document.getElementById("value3").value);

  if (((length1 + length2) > length3) && ((length1 + length3) > length2) && ((length2 + length3) > length1)) {
    if ((length1 === length2 && length1 !== length3) || (length1 === length3 && length1 !== length2) || (length2 === length3 && length2 !== length1)) {
      //print on screen isosceles triangle
      alert("Isosceles Triangle");
    } else if ((length1 === length2) && (length2 === length3)) {
      //print on screen equilateral triangle
      alert("Equilateral Triangle");
    } else {
      //print on screen scalene triangle
      alert("Scalene Triangle");
    }
  } else {
    //print the values cannot form a triangle
    alert("Those values cannot form a triangle");
  }

}
