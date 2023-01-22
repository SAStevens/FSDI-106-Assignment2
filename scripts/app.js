var importantIcon = "fa-regular fa-thumbs-up important";
var nonImportantIcon = "fa-regular fa-thumbs-down";

function toggleImportant() {
    console.log("Icon Clicked!");

    $("#iImportant").removeClass(nonImportantIcon);
    $("#iImportant").addClass(importantIcon);
}

function toggleForm() {
    console.log("Button clicked!");

    $(".form-container").toggle();

}

function init(){
    console.log("Task Manager");

    $("#iImportant").click(toggleImportant);
    $("#btnToggleForm").click(toggleForm);

}

window.onload = init;