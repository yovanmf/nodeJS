const { addNoteHandler, getAllNotesHandler } = require("./handler");

const routes = [
    {
        method: 'POST',
        path: '/',
        handler: addNoteHandler,
    },
    {
        method: 'GET',
        path: '/notes',
        handler: getAllNotesHandler
    },
];

module.exports = routes;