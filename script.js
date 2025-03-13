// script.js
document.addEventListener("DOMContentLoaded", () => {
    const writeupsList = document.getElementById("writeups-list");
    
    const writeups = [
        { title: "HTB - Machine 1", link: "https://github.com/AlexGRDev/writeup1" },
        { title: "HTB - Machine 2", link: "https://github.com/AlexGRDev/writeup2" }
    ];
    
    writeups.forEach(writeup => {
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.href = writeup.link;
        a.textContent = writeup.title;
        a.target = "_blank";
        li.appendChild(a);
        writeupsList.appendChild(li);
    });
});