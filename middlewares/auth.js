import jwt from 'jsonwebtoken';


const checkAuth = (req, res, next) => {
    const {authorization} = req.headers;

    if (!authorization || !authorization.startsWith("Bearer ")) {
        return res.status(401).send({
            message: "\n" +
                "Authorization required"
        });
    }

    const token = authorization.replace("Bearer ", "");
    req.user = jwt.verify(token, 'i-am-so-tired');
    next();
};

const checkCookiesJWT = (request, response, next) => {
    if (!request.cookies.jwt) {
        return response.redirect('/');
    }
    request.headers.authorization = `Bearer ${request.cookies.jwt}`;
    next();
};

export {
    checkAuth,
    checkCookiesJWT
};
