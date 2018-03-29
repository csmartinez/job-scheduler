function addFields(){
// Number of inputs to create
var number = document.getElementById("employeeAmount").value;
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
alert("Beware the Ides of March \n - Shakespear");
}
</script
