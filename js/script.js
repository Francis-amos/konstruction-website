let fileInput = document.getElementById("file-input");
let imageContainer = document.getElementById("images");
let numOfFiles = document.getElementById("num-of-files"); 

function preview(){

    imageContainer.innerHTML = "";
    numOfFiles.textContent = `${fileInput.files.length}
    FIles Selected`;
    
    for(i of fileInput.files){
        let reader = new FileReader();
        let figure = document.createElement("figure");
        let figCap = document.createElement("figcaption");

        figCap.innerText = i.name;
        figure.appendChild(figCap);
        reader.onload=()=>{
            let img = document.createElement("img");
            img.setAttribute("src",reader.result);
            figure.insertBefore(img,figCap);
        }

        imageContainer.appendChild(figure);
        reader.readAsDataURL(i);
    }



}


var businessProfile = document.querySelector(".business-profile");
var listItem = document.getElementById('list-item');

listItem.addEventListener('click', businessMenuToggle);

function businessMenuToggle(){
    businessProfile.classList.toggle("business-menu-height");
}



