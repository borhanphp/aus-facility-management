import { createClient } from 'contentful';

const SPACE_ID = 'htfrwrr77ru6';
const ACCESS_TOKEN = 'G0FlOHFhlD2JNyt872ItIHAux5XLyQV8sB80tzxZ2P8';

export const contentfulClient = createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN,
});
