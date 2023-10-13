const members = [
    { name: "Peter Quill", id: "peter" },
    { name: "Gamora Titan", id: "gamora" },
    { name: "Drax o destruidor", id: "drax" },
    { name: "Mantis", id: "mantis" },
    { name: "Rocket Raccoon", id: "rocket" },
    { name: "I am Groot", id: "groot" }
]

let activeMembers = 0;

const images = document.getElementById("images");
const menu = document.getElementById("menu");
const membersName = document.getElementById("member__name");

function ChangeStatusButton() {

    const prev = document.getElementById('button_back');
    const isFirst = activeMembers == 0;
    prev.disabled = isFirst;

    const next = document.getElementById('button_next')
    const isLast = activeMembers == members.length - 1;
    next.disabled = isLast;

}

function navigationMembers(direction) {
    activeMembers = activeMembers + direction;

    const member = members[activeMembers];

    images.style.transform = `translateY(${-100 * activeMembers}vh)`;
    membersName.classList = member.id;

    ChangeStatusButton();
    changeName(member.name); 


}

function changeMenu() {
    menu.classList.toggle('active');
}