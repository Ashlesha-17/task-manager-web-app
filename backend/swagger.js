const swaggerJsdoc = require("swagger-jsdoc");

const options = {

    definition: {
        openapi: "3.0.0",

        info: {
            title: "Task Manager API",
            version: "1.0.0",
            description: "Task Manager API with JWT Authentication"
        },

        servers: [
            {
                url: "http://localhost:5000"
            }
        ]
    },

    apis: ["./routes/*.js", "./server.js"]
};

const specs = swaggerJsdoc(options);

module.exports = specs;