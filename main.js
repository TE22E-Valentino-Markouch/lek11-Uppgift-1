    
    const rubrik_ruta = document.querySelector("#rubrik");
    const text_ruta = document.querySelector("#text");
    const main = document.querySelector("main");
    let array=[];
    const nyckel ="artiklar";
    

function add_text() {

    let artikel = {
        rubrik:rubrik_ruta.value ,
        text:text_ruta.value 
    }
    array.push(artikel);
    let json = JSON.stringify(array);
    window.localStorage.setItem(nyckel, json);
    rita_text();
}

function rita_text()
{
    main.innerHTML="";
    for (let i = 0; i < array.length; i++) {
        let p = document.createElement("p");
        p.textContent=array[i].rubrik +" "+array[i].text;
        main.appendChild(p);

    }   
}

function delete_ls()
{
    window.localStorage.setItem(nyckel, []);

}
function get_from_ls()
{
    let json =window.localStorage.getItem(nyckel);
    array = JSON.parse(json);
    rita_text();

}



function toogle_mode() {
let articles = document.querySelectorAll("article");
document.body.classList.toggle("dark");
for (let index = 0; index < articles.length; index++) {
    articles[index].classList.toggle("dark");    
}
}