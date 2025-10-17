// side bar working 
//toggle button 
const toggleBtn=document.querySelector(".toggleButton")
const slideBar=document.querySelector(".pg-db_sidebarContainer")

toggleBtn.addEventListener("click",()=>{
    slideBar.classList.toggle("collapsed");
});