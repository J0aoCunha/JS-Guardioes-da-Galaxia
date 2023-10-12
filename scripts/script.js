const members = [
    { name: "Peter Quill", id: "Peter" },
    { name: "Gamora Titan", id: "gamora" },
    { name: "Drax o destruidor", id: "Drax" },
    { name: "Mantis", id: "mantis" },
    { name: "Rocket Raccoon", id: "rocket" },
    { name: "I am Groot", id: "groot" }
]

let activeMembers = 0;

const images = document.getElementById("images")
const menu = document.getElementById("menu")

function ChangeStatusButton() {

    const prev = document.getElementById('button_back');
    const isFirst = activeMembers == 0;
    prev.disabled = isFirst;

    const next = document.getElementById('button_next')
    const isLast = activeMembers == members.length - 1;
    next.disabled = isLast;
}

function navigationMembers(direction) {
    activeMembers += direction;

    const member = members[activeMembers];
    console.log(activeMembers, member);

    images.style.transform = `translateY(${-100 * activeMembers}vh)`

    ChangeStatusButton()
}

function chageMenu() {
    menu.classList.toggle('active')
}