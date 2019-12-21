function main() {

  const Stdjs = document.querySelector("#adddb")
  const Crsjs = document.querySelector("#crsdb");
  const Asgjs = document.querySelector("#asgdb");
  const Apcjs = document.querySelector("#apcdb");
  if (Stdjs != null) {
    Stdjs.addEventListener('click', validateStudentsDate);
  }
  if (Asgjs != null) {
    Asgjs.addEventListener('click', validateAssignments);
  }
  if (Asgjs != null) {
    Asgjs.addEventListener('click', validateSubDate);
  }
  if (Apcjs != null) {
    Apcjs.addEventListener('click', validateSubDatePC);
  }
  if (Crsjs != null) {
    Crsjs.addEventListener('click', validateCourseDate);
  }




  function validateAssignments(e) {
    var oral = document.forms["Assignments"]["OralMark"].value;
    var total = document.forms["Assignments"]["TotalMark"].value;
    if (total < oral || total > 100 || oral < 0) {
      alert("Mark was wrong! Please check it again...");
      e.preventDefault();
    }
  }

  function validateSubDate(e) {
    var x = document.forms["Assignments"]["subDateTime"].value;
    var currDate = new Date();
    var givenDate = new Date(x);
    if (givenDate > currDate) {
      alert("Incorrect Date!");
      e.preventDefault();
    }
  }

  function validateSubDatePC(e) {
    var x = document.forms["AssignmentsPC"]["subDateTime"].value;
    var currDate = new Date();
    var givenDate = new Date(x);
    if (givenDate > currDate) {
      alert("Incorrect Date!");
      e.preventDefault();
    }
  }

  function validateStudentsDate(e) {
    var x = document.forms["Students"]["DateOfBirth"].value;
    var currDate = new Date();
    var givenDate = new Date(x);
    if (givenDate > currDate) {
      alert("Incorrect Date!");
      e.preventDefault();
    }
  }

  function validateCourseDate(e) {
    var x = document.forms["Courses"]["StartDate"].value;
    var startDate = new Date(x);
    var y = document.forms["Courses"]["EndDate"].value;
    var endDate = new Date(y);
    if (startDate > endDate) {
      alert("Incorrect Date(s)!");
      e.preventDefault();
    }
  }
}
window.addEventListener('load', main);