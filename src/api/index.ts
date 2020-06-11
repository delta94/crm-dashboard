const apiUrl = `${process.env.REACT_APP_API_URL}`;

const gamesUrl = `${apiUrl}/games`;
const developersUrl = `${apiUrl}/developers`;
const publishersUrl = `${apiUrl}/publishers`;
const tagsUrl = `${apiUrl}/tags`;
const genresUrl = `${apiUrl}/genres`;
const featuresUrl = `${apiUrl}/features`;

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

const getPOSTRequest = (url: string) => async (data: any) => {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const json = await res.json();

    if (res.status !== 200) throw new Error(json.error);

    return { json };
  } catch (error) {
    return { error };
  }
};

export const uploadMediaRequest = async (id: string, file: Blob) => {
  const url = `${gamesUrl}/media/${id}`;
  const formData = new FormData();

  formData.append('image', file);

  try {
    const res = await fetch(url, {
      method: 'PUT',
      body: formData,
    });

    const json = await res.json();

    if (res.status !== 200) throw new Error(json.error);

    return { json };
  } catch (error) {
    return { error };
  }
};

export const getGamesRequest = getGETRequest(gamesUrl);
export const getDevelopersRequest = getGETRequest(developersUrl);
export const getPublishersRequest = getGETRequest(publishersUrl);
export const getTagsRequest = getGETRequest(tagsUrl);
export const getGenresRequest = getGETRequest(genresUrl);
export const getFeaturesRequest = getGETRequest(featuresUrl);

export const createOrUpdateGameRequest = getPOSTRequest(gamesUrl);
export const createGameMediaRequest = getPOSTRequest(`${gamesUrl}/media`);
