const sendAllGames = (request, response, next) => {
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(request.gamesArray));
    next();
};

const sendGameCreated = (request, response) => {
    response.setHeader("Content-Type", "application/json");
    response.end(JSON.stringify(request.game));
};

export {
    sendAllGames,
    sendGameCreated
}