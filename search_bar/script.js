const icon = document.getElementById("icon");
const search_box = document.getElementById("search_box");
const my_search = document.getElementById("my_search");
const close_btn = document.getElementById("close_btn");

icon.addEventListener('click', ()=>{
    search_box.classList.toggle("active");
    input.classList.toggle("active");
});

close_btn.addEventListener('click', ()=>{
    my_search.value='';
});