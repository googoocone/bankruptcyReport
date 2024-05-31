const express = require('express');
const next = require('next');
const cors = require('cors');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();
    const port = process.env.PORT || 3000;

    server.use(cors());
    server.use(express.json());


    // Main Page

    server.get('/home', (req,res) => {
      return app.render(req,res, '/consult', req.query);
    })

    // Example API route
    server.get('/api/hello', (req, res) => {
        res.json({ message: 'Hello from the server!' });
    });

    // All other routes handled by Next.js
    server.get('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(port, (err) => {
        if (err) throw err;
        console.log(`Server is running on http://localhost:${port}`);
    });
});
