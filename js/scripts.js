//Function to use the values entered and determine type of triangle
function triangletype() {
  //array to hold the lengths of the triangle sides inputted by user
  var lengths = [];
  length[0] = document.getElementById("value1").value;
  length[1] = document.getElementById("value2").value;
  length[2] = document.getElementById("value3").value;

  if (((length[0] + length[1]) > length[2]) || ((length[0] + length[2]) > length[1]) || ((length[1] + length[2]) > length[0])) {
    if (length[0] === length[1] || length[0] === length[2] || length[1] === length[2]) {
      print on screen isosceles triangle
    }
    else if (length[0] === length[1] && length[1] === length[2]) {
      print on screen equilateral triangle
    }
    else {
      print on screen scalene triangle
    }
  }
  else {
    print the values cannot form a triangle
  }
}
