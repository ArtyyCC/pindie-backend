import jwt from 'jsonwebtoken';


const checkAuth = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization || !authorization.startsWith("Bearer ")) {
        return res.status(401).send({ message: "Необходима авторизация" });
    }
    const token = authorization.replace("Bearer ", "");
    try {
        req.user = jwt.verify(token, "i-am-so-tired");
    } catch (err) {
        return res.status(401).send({ message: "Необходима авторизация" });
    }
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
