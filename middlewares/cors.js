import {PORT} from '../config.js'


const allowedCors = [
    'https://practicum.yandex.ru',
    'https://students-projects.ru',
    `localhost:${PORT}`
];

export const cors = (request, response, next) => {
    const {origin} = request.headers;

    if (allowedCors.includes(origin)) {
        // response.header('Access-Control-Allow-Origin', '*'); To ignore the clean slate
        response.header('Access-Control-Allow-Origin', origin);
    }

    next();
}


