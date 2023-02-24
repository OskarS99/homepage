{
    const welcome = () => {
        console.log("Cześć!");
    }
    welcome();

    const onRemovePictureClick = () => {

        const zdjecie = document.querySelector(".zdjecie");
        zdjecie.remove();
    }
    


    const init = () => {
        let przycisk = document.querySelector(".przycisk");
        przycisk.addEventListener("click", onRemovePictureClick)
    }
     init();
}



