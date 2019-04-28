# Triangle Tracker
#### 26th April 2019
#### This is a web application that lets the user enter the length values for three sides of a triangle. The program then determines if the values will produce an isosceles, equilateral or scalene triangle, or no triangle at all.
#### By **Peter Kingori**
## Description
This is an application that lets a user know whether a triangle is Isosceles, Equilateral, Scalene or NOT a triangle at all.

The user enters the length values of the three sides of a triangle in the form provided. The form collects the inputted values and in the background does calculations and uses appropriate control flows and logical operators to determine the type of triangle.

The values are stored in an array, although this is not strictly necessary for it to work. Then it first checks if the sum of any two sides is greater than the third remaining side, in which case a triangle can be formed, otherwise the values entered cannot form a triangle.

After this it checks if two sides are exactly equal, which forms an Isosceles triangle. Otherwise it checks if all three sides are equal, which produces an Equilateral triangle. If neither of these two results comes up, then the values form a Scalene triangle which has no sides equal.

The link to the live site on Github Pages is https://peterkingori.github.io/TriangleTracker/.
## Instructions for use
Simply enter three integer values in the form provided, click the submit button and see the result.
## Behaviour Driven Development Process
This program should take in 3 values representing the sides of a triangle, determine the type of triangle whether an Isosceles, Equilateral or Scalene triangle, or NOT a triangle at all, and return the result to the user.
1. For any three values to form a triangle, the sum of any two sides of the triangle should be greater than the remaining third side. Otherwise a triangle CANNOT be formed using those values.
2. For an Equilateral Triangle, all sides must be equal.
3. For an Isosceles Triangle, two sides must be exactly equal.
4. For a Scalene Triangle, none of the sides is equal, but the sum of any two sides of the triangle must be greater than the third side.

| Behaviour our program should handle | Input example | Output example |
| ----------------------------------- | ------------- | -------------- |
| Values that cannot form a triangle | 18, 8, 6       | Cannot form a triangle |
| Values that cannot form a triangle | 0, 0, 0       | Cannot form a triangle |
| Values that form an equilateral triangle | 10, 10, 10 | | Equilateral Triangle |
| Values that form an isosceles triangle | 14, 14, 8 | | Isosceles Triangle |
| Values that form a scalene triangle | 20, 15, 32 | | Scalene Triangle |

## Technologies Used
The application uses HTML and CSS for the front end user interface, and JavaScript for the backend logic and calculations.
## Support and contact details
If you run into any issues or have questions, ideas or concerns feel free to contact me.  You are also encouraged to make a contribution to the project.}
### License
This project is licensed under the **GNU General Public License**. See the full [LICENSE](https://choosealicense.com/licenses/gpl-3.0/) for details.
2019 **Peter Kingori**
