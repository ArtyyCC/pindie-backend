const sendAllCategories = (request, response) => {
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(request.categoriesArray));
};

const sendCategoryCreated = (request, response) => {
    response.setHeader("Content-Type", "application/json");
    response.end(JSON.stringify(request.category));
};

const sendCategoryDelete = (request, response) => {
    response.setHeader("Content-Type", "application/json");
    response.end(JSON.stringify(request.category));
};


export {
    sendAllCategories,
    sendCategoryCreated,
    sendCategoryDelete
}