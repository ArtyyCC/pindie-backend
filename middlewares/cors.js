import {ALLOWED_CORS} from "../config.js";


export const cors = (request, response, next) => {
    const {origin} = request.headers;

    if (ALLOWED_CORS.includes(origin)) {
        response.header('Access-Control-Allow-Origin', '*'); // To ignore the clean slate
        // response.header('Access-Control-Allow-Origin', origin);
    }

    next();
}


