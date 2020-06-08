const apiUrl = `${process.env.REACT_APP_API_URL}`;

const getGamesUrl = `${apiUrl}/games`;
const getDevelopersUrl = `${apiUrl}/developers`;
const getPublishersUrl = `${apiUrl}/publishers`;
const getTagsUrl = `${apiUrl}/tags`;
const getGenresUrl = `${apiUrl}/genres`;
const getFeaturesUrl = `${apiUrl}/features`;

const getGETRequest = (url: string) => async () => {
  try {
    const res = await fetch(url);
    const json = await res.json();

    if (res.status !== 200) throw new Error(json.error);

    return { json };
  } catch (error) {
    return { error };
  }
};

export const getGamesRequest = getGETRequest(getGamesUrl);
export const getDevelopersRequest = getGETRequest(getDevelopersUrl);
export const getPublishersRequest = getGETRequest(getPublishersUrl);
export const getTagsRequest = getGETRequest(getTagsUrl);
export const getGenresRequest = getGETRequest(getGenresUrl);
export const getFeaturesRequest = getGETRequest(getFeaturesUrl);
