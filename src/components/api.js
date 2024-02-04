import axios from 'axios';

export const feach = async (query, page) => {
  const response = await axios.get(`https://api.unsplash.com/search/photos`, {
    params: {
      query,
      page,
      client_id: 'v-NocWjoOb_LPFFOM7qt5Kaj1nLlaip-hwBUmam8J4Y',
      per_page: 5,
      orientation: 'squarish',
    },
  });
  return response.data;
};
