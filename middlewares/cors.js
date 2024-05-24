import {ALLOWED_CORS} from "../config.js";


export const cors = (request, response, next) => {
    const {origin} = request.headers;
    if (ALLOWED_CORS.includes(origin)) {
        response.header('Access-Control-Allow-Origin', origin);
        response.header('Access-Control-Allow-Headers', 'Content-type,Authorization,Accept,X-Custom-Header');
        response.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE");
        response.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization");
    }

    next();
}


