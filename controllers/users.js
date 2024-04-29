const sendAllUsers = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(req.usersArray));
};

const sendUserCreated = (request, response) => {
    response.setHeader("Content-Type", "application/json");
    response.end(JSON.stringify(request.user));
};

const sendUserDelete = (request, response) => {
    response.setHeader("Content-Type", "application/json");
    response.end(JSON.stringify(request.user));
};


export {
    sendAllUsers,
    sendUserCreated,
    sendUserDelete
}
