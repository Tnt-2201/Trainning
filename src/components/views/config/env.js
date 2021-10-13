/* eslint-disable prettier/prettier */
import {DEV_URL, PROD_URL} from '@env';

const devEnvironmentVariables = {
  DEV_URL,
};
const proEnvironmentVariables = {
  PROD_URL,
};

export default __DEV__ ? devEnvironmentVariables : proEnvironmentVariables;
