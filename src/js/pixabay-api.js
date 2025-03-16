import axios from 'axios';

const baseURL = 'https://pixabay.com/api/';


export function backendData(searchWord) {
    const params = {
            key: "49367974-1ddb9c95ea8d865fcbee88608",
            q: searchWord,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
       
    }; 

    return axios.get(baseURL, { params })
        .then(response => {
            // console.log(response);
            return response.data;
        })
        .catch(error => {
            console.log("Помилка при отриманні даних:", error);
        });
}

