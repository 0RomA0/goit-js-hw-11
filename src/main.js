import { backendData } from "./js/pixabay-api";
import { renderPhotos } from "./js/render-functions";

// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


const loader = document.querySelector(".loader");
const form = document.querySelector(".form");
const input = document.querySelector("input");
const galleryUl = document.querySelector('.gallery');


form.addEventListener("submit", formSubmit);


export function formSubmit(event) {

    event.preventDefault();

    
if (input.value.trim() === "") {
    return iziToast.show(
    {
        message: `❌ Eter a search word`,
        position: "topRight",
        color: "red",
    }) ;
    } 

    galleryUl.innerHTML = '';
    loader.style.display = "block"; // Показуємо лоадер

    backendData(input.value).then(data => {
        if (data.hits.length === 0) {

                iziToast.show({
                    message: `❌ Sorry, there are no images matching your search query. Please try again!`,
                    position: "topRight",
                    color: "red",
                });
            }  else {
                renderPhotos(data.hits); 
            }
        })
        .catch(error => {
            console.log("Помилка при отриманні даних:", error);
        })
        .finally(() => {
      loader.style.display = "none"; // Ховаємо лоадер після запиту
    });
        

    form.reset();
}

