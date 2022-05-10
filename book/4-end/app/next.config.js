import dotenv from 'dotenv';
dotenv.config();

module.exports = {
  env: {
    URL_APP: process.env.URL_APP,
    URL_API: process.env.URL_API,
    PORT_APP: process.env.PORT_APP,
    BUCKET_FOR_AVATARS: process.env.BUCKET_FOR_AVATARS,
  },
};
