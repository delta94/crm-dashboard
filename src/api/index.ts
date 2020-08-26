import { API_URL } from 'const';
import { createGETRequest } from 'admin-library';

const developersUrl = `${API_URL}/developers`;
const publishersUrl = `${API_URL}/publishers`;
const tagsUrl = `${API_URL}/tags`;
const genresUrl = `${API_URL}/genres`;
const featuresUrl = `${API_URL}/features`;
const languagesUrl = `${API_URL}/localization_languages`;
const settingsUrl = `${API_URL}/settings`;

export const getDevelopersRequest = createGETRequest(developersUrl);
export const getPublishersRequest = createGETRequest(publishersUrl);
export const getTagsRequest = createGETRequest(tagsUrl);
export const getGenresRequest = createGETRequest(genresUrl);
export const getFeaturesRequest = createGETRequest(featuresUrl);
export const getLanguagesRequest = createGETRequest(languagesUrl);
export const getSettingsRequest = createGETRequest(settingsUrl);
