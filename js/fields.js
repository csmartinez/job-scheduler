function addFields(){
// Number of inputs to create

var number = document.getElementById("employeeAmount").value;
var employeePerShift = document.getElementById("employeePerShift").value;
// Container <div> where dynamic content will be placed
var container = document.getElementById("container");
// Clear previous contents of the container

if(number <= 1) {
  alert("Please enter the number of employees.");
} else if (employeePerShift < 1) {
  alert("Please enter the number of employees per shift.");
} else {
  while (container.hasChildNodes()) {
      container.removeChild(container.lastChild);
  }
  container.appendChild(document.createElement("br"));
  for (i=0;i<number;i++){
      // Append a node with a random text
      container.appendChild(document.createTextNode((i+1) + ". Employee Name: "));
      // Create an <input> element, set its type and name attributes
      var input = document.createElement("input");
      input.type = "text";
      input.name = "employee" + i;
      input.id = "employee" + i;
      container.appendChild(input);
      // Append a line break
      container.appendChild(document.createElement("br"));

      // Append a node with a random text
      container.appendChild(document.createTextNode(" Employee Availability: "));
      container.appendChild(document.createElement("br"));

      var input = document.createElement("input");
      input.type = "checkbox";
      input.name = "monAvail" + i;
      input.id = "monAvail" + i;
      input.checked = true;
      container.appendChild(input);
      container.appendChild(document.createTextNode(" Mon "));

      var input = document.createElement("input");
      input.type = "checkbox";
      input.name = "tuesAvail" + i;
      input.id = "tuesAvail" + i;
      input.checked = true;
      container.appendChild(input);
      container.appendChild(document.createTextNode(" Tue "));

      var input = document.createElement("input");
      input.type = "checkbox";
      input.name = "wedAvail" + i;
      input.id = "wedAvail" + i;
      input.checked = true;
      container.appendChild(input);
      container.appendChild(document.createTextNode(" Wed "));

      var input = document.createElement("input");
      input.type = "checkbox";
      input.name = "thurAvail" + i;
      input.id = "thurAvail" + i;
      input.checked = true;
      container.appendChild(input);
      container.appendChild(document.createTextNode(" Thur "));

      var input = document.createElement("input");
      input.type = "checkbox";
      input.name = "friAvail" + i;
      input.id = "friAvail" + i;
      input.checked = true;
      container.appendChild(input);
      container.appendChild(document.createTextNode(" Fri "));

      var input = document.createElement("input");
      input.type = "checkbox";
      input.name = "satAvail" + i;
      input.id = "satAvail" + i;
      input.checked = true;
      container.appendChild(input);
      container.appendChild(document.createTextNode(" Sat "));

      var input = document.createElement("input");
      input.type = "checkbox";
      input.name = "sunAvail" + i;
      input.id = "sunAvail" + i;
      input.checked = true;
      container.appendChild(input);
      container.appendChild(document.createTextNode(" Sun "));

      // Append a line break
      container.appendChild(document.createElement("br"));
      container.appendChild(document.createElement("br"));
  }
      var button = document.createElement("input");
      button.type = "button";
      button.value = "NEXT";
      button.className = "btn btn-primary";
      button.onclick = function() {submit()}; // ADD FUNCTION HERE
      container.appendChild(button);
      container.appendChild(document.createElement("br"));
      container.appendChild(document.createElement("br"));
  }
}


function submit() {
  var openHour = parseInt(document.getElementById("openHour").value);
  var openMinutes = document.getElementById("openMinutes").value;
  var closeHour = parseInt(document.getElementById("closeHour").value) + 12;
  var closeMinutes = document.getElementById("closeMinutes").value;
  var employeePerShift = document.getElementById("employeePerShift").value;
  //Check Boxes
  var availMonday = document.getElementById("Monday").checked;
  var availTuesday = document.getElementById("Tuesday").checked;
  var availWednesday = document.getElementById("Wednesday").checked;
  var availThursday = document.getElementById("Thursday").checked;
  var availFriday = document.getElementById("Friday").checked;
  var availSaturday = document.getElementById("Saturday").checked;
  var availSunday = document.getElementById("Sunday").checked;

  // Make a list of days open to iterate through
  var openDays = [];
  if (availMonday) {
    openDays.push("Monday");
  }
  if (availTuesday) {
    openDays.push("Tuesday");
  }
  if (availWednesday) {
    openDays.push("Wednesday");
  }
  if (availThursday) {
    openDays.push("Thursday");
  }
  if (availFriday) {
    openDays.push("Friday");
  }
  if (availSaturday) {
    openDays.push("Saturday");
  }
  if (availSunday) {
    openDays.push("Sunday");
  }

  // Finds total hours and divdes by 8 to find number of full shifts in a day
  var needList = [];
  var total = closeHour - openHour;
  var numOfShifts = parseInt(total/8);

  // Iterates through all days store is open
  for (i=0; i < openDays.length; i++) {
    // Creates ShiftNeed for all full length shifts
    var day = openDays[i];
    for (j = 0; j < numOfShifts; j++) {
      for (k = 0; k < employeePerShift; k++) {
        let newShift = new ShiftNeed(day, openHour + (8*j), openHour + (8*(j+1)));
        needList.push(newShift);
      }
    }

    // Creates any remainder shifts
    if (total%8 != 0) {
      for (k = 0; k < employeePerShift; k++) {
        let newShift = new ShiftNeed(day, closeHour - (total%8), closeHour);
        needList.push(newShift);
      }
    }
  }
  // Test for shift creation
  // for (i=0; i < needList.length; i++) {
  //   alert(needList[i].getDayOfWeek() + " " + needList[i].getStartTime() + " " + needList[i].getEndTime());
  // }

  // Iterates through employees and stores information in employeeList
  var numOfEmployee = 0
  var employeeList = []
  while (document.getElementById("employee" + numOfEmployee)) {
    tempName = document.getElementById("employee" + numOfEmployee).value;
    tempAvail = [];
    if (document.getElementById("monAvail" + numOfEmployee).checked) {
      tempAvail.push("Monday");
    }
    if (document.getElementById("tuesAvail" + numOfEmployee).checked) {
      tempAvail.push("Tuesday");
    }
    if (document.getElementById("wedAvail" + numOfEmployee).checked) {
      tempAvail.push("Wednesday");
    }
    if (document.getElementById("thurAvail" + numOfEmployee).checked) {
      tempAvail.push("Thursday");
    }
    if (document.getElementById("friAvail" + numOfEmployee).checked) {
      tempAvail.push("Friday");
    }
    if (document.getElementById("satAvail" + numOfEmployee).checked) {
      tempAvail.push("Saturday");
    }
    if (document.getElementById("sunAvail" + numOfEmployee).checked) {
      tempAvail.push("Sunday");
    }
    let newEmployee = new Employee(tempName, tempAvail);
    employeeList.push(newEmployee)
    numOfEmployee++;
  }
  // Test for employee creation
  // for (i=0; i < numOfEmployee; i++) {
  //   alert(employeeList[i].getName() + " " + employeeList[i].getAvail());
  // }

  // Create a schedule which is a list of filled Shifts

  // Loops through the needsList for each day
  for(i = 0; i < openDays.length; i++) {
      var tempDay = openDays[i];
      // Create a temp list of employees to prevent employees from being scheduled
      // twice in the same day.
      var tempEmployeeList = [];
      for (j = 0; j < employeeList.length; j++ ) {
        tempEmployeeList.push(employeeList[j].getName());
      }
      for (k = 0; k < needList.length; k++) {
        if (tempDay == needList[k].getDayOfWeek()) {
          // Grab a random employee to filled shift need
          random = Math.floor(Math.random() * tempEmployeeList.length);
          let tempShift = new Shift(needList[k].getDayOfWeek(), needList[k].getStartTime(), needList[k].getEndTime(), tempEmployeeList[random]);
          schedule.push(tempShift);
          // Remove employee from temp list to prevent working in the same day twice
          tempEmployeeList.splice(random, 1);
        }
      }
    }

  // Test for schedule creation
  // for (i=0; i < needList.length; i++) {
  //   alert(schedule[i].getDayOfWeek() + " " + schedule[i].getStartTime() + " " + schedule[i].getEndTime() + " " + schedule[i].getEmployee());
  // }

  // Hide entry fields
  var formContainer = document.getElementById("form-container");
  if (formContainer.style.display === "none") {
      formContainer.style.display = "block";
  } else {
      formContainer.style.display = "none";
  }

  // Displays basic text version of schedule
  var scheduleContainer = document.getElementById("schedule-container");
  var count = 0;
  scheduleContainer.appendChild(document.createElement("br"));
  scheduleContainer.appendChild(document.createElement("br"));

  for(i = 0; i < 7; i++) {
    var tempDay = openDays[i];
    // var dayNameElement = document.createElement("h3");
    // var dayNameText = document.createTextNode(openDays[i]);
    // dayNameElement.appendChild(dayNameText);
    // scheduleContainer.appendChild(dayNameElement);
    // scheduleContainer.appendChild(document.createElement("br"));
    var weekCalendar = document.createElement("div");
    weekCalendar.style.width = "14.25%";
    weekCalendar.style.cssFloat = "left";
    weekCalendar.style.marginBottom = "40px";
    var h3 = document.createElement("h5");
    var weekDay = document.createTextNode(openDays[i])
    h3.appendChild(weekDay);
    weekCalendar.appendChild(h3);
    weekCalendar.appendChild(document.createElement("br"));
    weekCalendar.appendChild(document.createElement("br"));

    for (k = 0; k < schedule.length; k++) {
      if (tempDay == schedule[k].getDayOfWeek()) {
         var shiftElement = document.createElement("p");
         shiftElement.style.width = "100px;";
         shiftElement.style.border = "1px solid gray";
         var tempStartTime = schedule[k].getStartTime();
         var tempEndTime = schedule[k].getEndTime();
         if(tempStartTime > 12) {
           tempStartTime = tempStartTime - 12;
         }
         if(tempEndTime > 12) {
           tempEndTime = tempEndTime - 12;
         }
         var shiftText = document.createTextNode(schedule[k].getEmployee() + '  (' + tempStartTime + "am - " + tempEndTime + 'pm)');
         weekCalendar.appendChild(shiftText);
         shiftElement.id = schedule[k].getDayOfWeek() + 'Shift' + count;
         weekCalendar.appendChild(shiftElement);
         count = count + 1;

      }
    }
    scheduleContainer.appendChild(weekCalendar);
  }

  var button = document.createElement("input");
  button.type = "button";
  button.value = "BACK";
  button.className = "btn btn-primary";
  button.style = "color: white; background-color: gray;"
  button.onclick = function() {back()}; // ADD FUNCTION HERE
  scheduleContainer.appendChild(button);
  scheduleContainer.appendChild(document.createElement("br"));
  scheduleContainer.appendChild(document.createElement("br"));

  var button2 = document.createElement("input");
  button2.type = "button";
  button2.value = "GENERATE NEW";
  button2.className = "btn btn-primary";
  button2.onclick = function() {regen()}; // ADD FUNCTION HERE
  button2.id = 'regenerate';
  scheduleContainer.appendChild(button2);
  scheduleContainer.appendChild(document.createElement("br"));
  scheduleContainer.appendChild(document.createElement("br"));
}

function back(){
  schedule = [];
  var scheduleContainer = document.getElementById("schedule-container");
  while (scheduleContainer.hasChildNodes()) {
    scheduleContainer.removeChild(scheduleContainer.firstChild);
  }
  var formContainer = document.getElementById("form-container");
  if (formContainer.style.display === "none") {
      formContainer.style.display = "unset";
  } else {
      formContainer.style.display = "unset";
  }
}

function regen(){
  schedule = [];
  var scheduleContainer = document.getElementById("schedule-container");
  while (scheduleContainer.hasChildNodes()) {
    scheduleContainer.removeChild(scheduleContainer.firstChild);
  }
  var formContainer = document.getElementById("form-container");
  if (formContainer.style.display === "none") {
      formContainer.style.display = "block";
  } else {
      formContainer.style.display = "none";
  }
  submit();
}

class ShiftNeed {

  constructor(dayOfWeek, startTime, endTime) {
    this.dayOfWeek = dayOfWeek;
    this.startTime = startTime;
    this.endTime = endTime;
  }

  getDayOfWeek() {
    return this.dayOfWeek;
  }

  getStartTime() {
    return this.startTime;
  }

  getEndTime() {
    return this.endTime;
  }

  setDayOfWeek(newDayofWeek) {
    this.dayOfWeek = newDayofWeek;
  }

  setStartTime(newStartTime) {
    this.startTime = newStartTime;
  }

  setEndTime(newEndTime) {
    this.endTime = newEndTime;
  }
// Qualifications go here
}

class Employee {

  constructor(name, availList) {
    this.name = name;
    this.availList = availList;
  }
  getName() {
    return this.name;
  }
  getAvail() {
    return this.availList;
  }
}

class Shift extends ShiftNeed {

  constructor(dayOfWeek, startTime, endTime, employee) {
    super(dayOfWeek, startTime, endTime);
    this.employee = employee;
  }

  getEmployee() {
    return this.employee;
  }
}

function runTest1() {
   let newEmployee = new Employee("Eddy", ["Monday", "Tuesday"]);
   var result1;
   var result2;

   if(newEmployee.getName() == "Eddy") {
     result1 = " >>PASS";
   } else {
     result1 = " >>FAIL";
   }

   if(newEmployee.getAvail() == "Monday,Tuesday") {
     result2 = " >>PASS";
   } else {
     result2 = " >>FAIL";
   }

   alert("UNIT TEST 1\ngetName(): " + newEmployee.getName()
   + result1 + "\ngetAvail(): " + newEmployee.getAvail() + result2);
}

function runTest2() {
  var result1;
  let newShift = new Shift("Monday", 8, 12, "Frank");

  if(newShift.getEmployee() == "Frank") {
    result1 = " >>PASS";
  } else {
    result1 = " >>FAIL";
  }

  alert("UNIT TEST 2\ngetEmployee(): " + newShift.getEmployee() + result1);
}

function runTest3() {
  var result1;
  var result2;
  var result3;
  let newShiftNeed = new ShiftNeed("Friday", 12, 5);

  if(newShiftNeed.getStartTime() == 12) {
    result1 = " >>PASS";
  } else {
    result1 = " >>FAIL";
  }

  if(newShiftNeed.getEndTime() == 5) {
    result2 = " >>PASS";
  } else {
    result2 = " >>FAIL";
  }

  if(newShiftNeed.getDayOfWeek() == "Friday") {
    result3 = " >>PASS";
  } else {
    result3 = " >>FAIL";
  }

  alert("UNIT TEST 3\ngetStartTime(): " + newShiftNeed.getStartTime() + result1
        + "\ngetEndTime(): " + newShiftNeed.getEndTime() + result2
        + "\ngetDayOfWeek(): " + newShiftNeed.getDayOfWeek() + result3);
}

var schedule = [];
