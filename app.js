//Getting required buttons
const closebtn = document.querySelector('.close-btn');
const toggleBtn = document.querySelector('.sidebar-toggle');
const sideBar = document.querySelector('.sidebar');
console.log(sideBar.classList);

//Adding functionality of Toggel Button
toggleBtn.addEventListener('click', () => {
    sideBar.classList.toggle("show-sidebar");
})

closebtn.addEventListener("click", () => {
    sideBar.classList.remove('show-sidebar');
})