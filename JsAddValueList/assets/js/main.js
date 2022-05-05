const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", function (e) {
    e.preventDefault();
    Validate(this.previousElementSibling.children[1]);
})

input.onkeyup = function () {
    Validate(this);
}

input.onkeydown = function () {
    Validate(this);
}

input.onblur = function () {
    Validate(this);
}

function Validate(e) {
    if (e.value.trim() == "") e.nextElementSibling.classList.remove("d-none");
    else e.nextElementSibling.classList.add("d-none");
}

const ul = document.querySelector("ul");

btn.addEventListener("click", function (e) {
    e.preventDefault();
    if (isNotNull(input) /*&& isEqual(input)*/) {
        let li = document.createElement("li");
        li.innerText = input.value;
        ul.append(li);
        li.classList.add("list-group-item")
    }
})


function isNotNull(e) {
    if (e.value.trim() == "") { e.nextElementSibling.classList.remove("d-none"); return false; }
    else { e.nextElementSibling.classList.add("d-none"); return true; }
}

// function isEqual(e) {
//     if (e.value.trim() == document.querySelectorAll("li").innerText) return false;
//     else return true;
// }