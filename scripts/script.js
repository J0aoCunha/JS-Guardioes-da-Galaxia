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

function navigationMembers(direction) {
    activeMembers += direction;

    const member = members[activeMembers];
    console.log(activeMembers, member);

    images.style.transform = `translateY(${-100 * activeMembers}vh)`
}