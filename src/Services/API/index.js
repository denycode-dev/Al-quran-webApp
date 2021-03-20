import GET from './API-GET';

const getSurahInfo = () => GET(true, 'data.json');

const APIConfig = {
  getSurahInfo,
};

export default APIConfig;