const uploadFile = document.getElementById("file");
const groupFile = document.querySelector(".group-file");
const rowFile = document.querySelector(".row-file");
const reader = new FileReader();


function addFile(name) {
    groupFile.innerHTML += `
        <div class="item">
            <div class="content-item">
                <img src="" alt="">
            </div>
            <div class="circle-xmark">
                <img src="image/circle-xmark.svg" alt="">
            </div>
            <div class="area-name">
                <small>${name}</small>
            </div>
        </div>
    `;
}



function checkTypeFile(name) {
    
    
    console.log(name);
    const arr = [".png", ".jfif"];

    

    const constainElement = arr.some((item) => name.includes(item));

    const contentItem = document.querySelector(".item:last-child .content-item");
    console.log(contentItem);
    if (constainElement) {
        contentItem.classList.remove("hidden");
        contentItem.classList.add("visible");
    } else {
        contentItem.classList.remove("visible");
        contentItem.classList.add("hidden");
    }
    return constainElement;
}

uploadFile.addEventListener("change", (event) => {
    const files = event.target.files;

    Array.from(files).forEach((file, index) => {
        addFile(file.name);

        reader.readAsDataURL(file);

        reader.addEventListener("load", (event) => {
            if (checkTypeFile(file.name)) {
                const imgPrimary = document.querySelectorAll(".content-item img")[index];
                let img = event.target.result;
                imgPrimary.src = img;
            }
        })
    })

});