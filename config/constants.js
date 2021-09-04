/* Constant values which are used through out app */
const USER_IMAGE_PATH = "/uploads/user/"; // user image path
const NO_IMAGE_PATH = "site/no_image.jpg"; // for showing no image where image is not avaialable
const NOT_NULL_ARRAY = ['undefined', null, '', 'null'];
const DEFAULT_API_LANGUAGE = 'en'; // Declaring default language
const JWT_SECRET_KEY = "asdjhfgjhgsjdhfjsgfshdgfjhshdfhjggjhdgjkljkljklfhuefhfghfhrtusdfb";//"jwtsecretkey";

const ADMIN_EMAIL = 'harshrdtl@gmail.com';

module.exports = {
        APP_NAME: "Test Project", // Aplication name
        MAIL_FROM: "harshrdtl@gmail.com", // Email id from mail has been sent
        USER_IMAGE_PATH: USER_IMAGE_PATH,
        NO_IMAGE_PATH: NO_IMAGE_PATH,
        PAGE_SIZE: 10,
        // SMTP Configurations
        SMTP: {
                SMTP_EMAIL: "harshrdtl@gmail.com",
                SMTP_PASSWORD: "harshdalsaniya@4277",
                SMTP_HOST: "",
                SMTP_PORT: "465",
                SMTP_FROM: "harshrdtl@gmail.com"
        },
        API_URL: '',// app api url
        APP_URL : '',
        ADMIN_EMAIL : ADMIN_EMAIL,
        DEFAULT_API_LANGUAGE: DEFAULT_API_LANGUAGE,
        JWT_SECRET_KEY : JWT_SECRET_KEY,
};