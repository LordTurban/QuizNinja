var form = document.forms.search;
var input = form.elements.searchBox;

input.addEventListener("focus", function() {
    if (input.value === "Search Here") {
        input.value = "";
    }
}, false);

input.addEventListener("blur", function() {
    if (input.value == "") {
        input.value = "Search Here";
    }
}, false);

input.addEventListener("change", function() { alert("changed") }, false);

form.addEventListener("submit", search, false);

function search(event) {
    alert("You searched for: " + input.value);
    event.preventDefault();
}

input.value = "Search Here";