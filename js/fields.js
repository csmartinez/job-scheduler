function addFields(){
// Number of inputs to create

var number = document.getElementById("employeeAmount").value;
// Container <div> where dynamic content will be placed
var container = document.getElementById("container");
// Clear previous contents of the container
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
    container.appendChild(input);
    // Append a line break
    container.appendChild(document.createElement("br"));

    // Append a node with a random text
    container.appendChild(document.createTextNode(" Employee Availability: "));
    container.appendChild(document.createElement("br"));
    // Create an <input> element, set its type and name attributes

    var input = document.createElement("input");
    input.type = "checkbox";
    input.name = "monAvail" + i;
    input.checked = true;
    container.appendChild(input);
    container.appendChild(document.createTextNode(" Mon "));

    var input = document.createElement("input");
    input.type = "checkbox";
    input.name = "tuesAvail" + i;
    input.checked = true;
    container.appendChild(input);
    container.appendChild(document.createTextNode(" Tue "));

    var input = document.createElement("input");
    input.type = "checkbox";
    input.name = "wedAvail" + i;
    input.checked = true;
    container.appendChild(input);
    container.appendChild(document.createTextNode(" Wed "));

    var input = document.createElement("input");
    input.type = "checkbox";
    input.name = "thurAvail" + i;
    input.checked = true;
    container.appendChild(input);
    container.appendChild(document.createTextNode(" Thur "));

    var input = document.createElement("input");
    input.type = "checkbox";
    input.name = "friAvail" + i;
    input.checked = true;
    container.appendChild(input);
    container.appendChild(document.createTextNode(" Fri "));

    var input = document.createElement("input");
    input.type = "checkbox";
    input.name = "satAvail" + i;
    input.checked = true;
    container.appendChild(input);
    container.appendChild(document.createTextNode(" Sat "));

    var input = document.createElement("input");
    input.type = "checkbox";
    input.name = "sunAvail" + i;
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

function submit() {
  var openHour = parseInt(document.getElementById("openHour").value);
  var openMinutes = document.getElementById("openMinutes").value;
  var closeHour = parseInt(document.getElementById("closeHour").value) + 12;
  var closeMinutes = document.getElementById("closeMinutes").value;
  //Check Boxes
  var availMonday = document.getElementById("Monday").checked;
  var availTuesday = document.getElementById("Tuesday").checked;
  var availWednesday = document.getElementById("Wednesday").checked;
  var availThursday = document.getElementById("Thursday").checked;
  var availFriday = document.getElementById("Friday").checked;
  var availSaturday = document.getElementById("Saturday").checked;
  var availSunday = document.getElementById("Sunday").checked;

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

  var needList = [];
  var total = closeHour - openHour;
  var numOfShifts = parseInt(total/8);

  for (i=0; i < openDays.length; i++) {
    var day = openDays[i];
    for (j = 0; j < numOfShifts; j++) {
      let newShift = new ShiftNeed(day, openHour + (8*j), openHour + (8*(j+1)));
      needList.push(newShift);
    }

    if (total%8 != 0) {
      let newShift = new ShiftNeed(day, closeHour - (total%8), closeHour);
      needList.push(newShift);
    }

  }

  for (i=0; i < needList.length; i++) {
    alert(needList[i].getDayOfWeek() + " " + needList[i].getStartTime() + " " + needList[i].getEndTime());
  }
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
