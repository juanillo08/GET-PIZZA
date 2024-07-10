const tabs =document.querySelectorAll(".sell__img");
const contents = document.querySelectorAll(".sell__details");

tabs.forEach((tab) =>{
    tab.addEventListener("click", ()=> {
        removeActiveTab();
        tab.classList.add("active");
        const activeContent = document.querySelector(`#${tab.id}-content`);

        removeActiveContent();
        activeContent.classList.add("active");
    });
});

function removeActiveTab(){
    tabs.forEach((tab) => {
        tab.classList.remove("active");
    })
}
function removeActiveContent(){
    contents.forEach((content) => {
        content.classList.remove("active");
    })
}