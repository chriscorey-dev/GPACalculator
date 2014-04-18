var studentName = prompt("What is the student's name?");
var getGrades = prompt("How many grades do you wish to enter?");
var numGrades = parseInt(getGrades);
var finalGrade = 0;
var number = 0;
for (var i = 1; i <= numGrades; i++) {
	var getGrade = prompt("Type in grade");
	var grade = parseInt(getGrade);
	finalGrade = finalGrade += grade;
}
var studentGPA = finalGrade /= numGrades;
alert(studentName+"'s GPA is "+studentGPA.toFixed(2));