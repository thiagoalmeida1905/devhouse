import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import routes from './routes';

class App {
    constructor() {
        this.server = express();
        mongoose.connect('mongodb+srv://devhouse:devhouse@devhouse.yd3u5.mongodb.net/debhouse?retryWrites=true&w=majority&appName=devhouse',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        this.middlewares();
        this.routes();
    }

    middlewares(){

        this.server.use(
            '/files',
            express.static(path.resolve(__dirname, '..', 'uploads'))
        )

        this.server.use(express.json());
    }

    routes(){
        this.server.use(routes);
    }
}

export default new App().server;