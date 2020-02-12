import axios from 'axios';

export const fetchData = async () => {
  try {
    const responce = await axios.get(
      'https://gist.githubusercontent.com/manfredxu99/c7de8bb829712e2e3f8b69995a7853e9/raw/434d8d1e981d171f86c0a1eac5f7f447309bde8c/data.json'
    );
    return responce.data;
  } catch (e) {
    console.log(e);
  }
};
