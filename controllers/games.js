const sendAllGames = (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(req.gamesArray));
    next();
}

export default sendAllGames;