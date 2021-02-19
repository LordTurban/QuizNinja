var form = document.forms.hero;
form.addEventListener("submit", makeHero, false);

function makeHero(event) {

    event.preventDefault(); // Prevent the form from being submitted //

    var hero = {}; // Create an empty object //

    hero.name = form.name.value; // Create a name property based on the input field's value //

    hero.realName = form.realName.value;

    hero.powers = [];
    for (i = 0; i < form.powers.lenght; i++) {
        if (form.powers[i].checked) {
            hero.powers.push(form.powers[i].value);
        }
    }

    for (i = 0; i < form.type.lenght; i++) {
        if (form.type[i].checked) {
            hero.type = form.type[i].value;
            break;
        }
    }

    hero.age = form.age.value;

    hero.city = form.city.value;

    hero.origin = form.origin.value;

    alert(JSON.stringify(hero)); // Convert object to JSON string and display in alert dialog //

    form.addEventListener("submit", validate, false);

    function validate(event) {
        var firstLetter = form.name.value[0];
        if (firstLetter.toUpperCase() === "X") {
            event.preventDefault();
            alert("Your name is not allowed to start with X!");
        }
    }

    form.name.addEventListener("blur", validateInline, false);

    function validateInline(event) {
        // Get the first letter of the name input field //
        var firstLetter = form.name.value[0];
        // Get a reference to the label for the name input field //
        var label = document.querySelector("label[for='name']");
        if (firstLetter.toUpperCase() === "X") {
            label.classList.add("error");
            label.textContent = "Your name is not allowed to start with X!";
        } else { // The error hasn't happened or has been fixed //
            label.classList.remove("error");
            label.textContent = "Name:";
        }
    }
}