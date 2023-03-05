const API_KEY = '32979410-6576ce951400b06dd5e7c6a2c';
const BASE_URL = 'https://pixabay.com/api/';
// let imgPerPage = 12;
// let page = 1;

export const getImages = (queryText, page, imgPerPage) => {
  return fetch(
    `${BASE_URL}?q=${queryText}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${imgPerPage}`
  );
};

// import axios from 'axios';

// async function fetchImages(searchQuery, page = 1, imgPerPage = 40) {
//   const BASE_URL = 'https://pixabay.com/api/';
//   const API_KEY = '32979410-6576ce951400b06dd5e7c6a2c';

//   const response = await axios.get(
//     `${BASE_URL}?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${imgPerPage}`
//   );

//   return response.data;
// }

// export { fetchImages };
