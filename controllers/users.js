const sendAllUsers = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(req.usersArray));
};

const sendUserCreated = (request, response) => {
    response.setHeader("Content-Type", "application/json");
    response.end(JSON.stringify(request.user));
};

const sendUserDeleted = (request, response) => {
    response.setHeader("Content-Type", "application/json");
    response.end(JSON.stringify(request.user));
};

const sendUserById = (request, response) => {
    response.setHeader("Content-Type", "application/json");
    response.end(JSON.stringify(request.user));
};

const sendUserUpdated = (request, response) => {
    response.setHeader("Content-Type", "application/json");
    response.end(JSON.stringify({message: "User Update"}));
};


export {
    sendAllUsers,
    sendUserCreated,
    sendUserDeleted,
    sendUserById,
    sendUserUpdated
}
