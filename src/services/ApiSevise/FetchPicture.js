import axios from 'axios';

const API_KEY = '30575168-17224cd1fdcc15493416f473f';

export default async function FetchPicture(name, page) {
  const response = await axios.get(
    `https://pixabay.com/api/?q=${name}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );

  let newData = [];

  response.data.hits.forEach(data => {
    const { id, largeImageURL, tags, webformatURL } = data;

    newData.push({ id, largeImageURL, tags, webformatURL });
  });

  return newData;
}
