/*
** Tittle: Uptime Monitoring Application.
** Descriotion: A Restful API to monitor up and down time os user defined links.
** Author: Sujon Sheikh.
** Date: 21-09-2022.
*/

// Dependencies.
const colors = require('colors');
const http = require('http');

// App Object - Module Scaffolding.
const app = {};

// Configaration.
app.config = {
    port: 5000
};

// Create Server.
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`Hello Developer Now I a Start On: ${app.config.port}` .red.bold)
    });
};

// Handle Request and Response.
app.handleReqRes = (req, res) => {
    // Response handle.
    res.end('Hello World');
};

// Start the Server.
app.createServer();