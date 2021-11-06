import express, { json } from 'express';
import { run } from './models/DataSpaceFlight';
import { routes } from './routes';
import cors from 'cors';

const app = express()

run()

app.use(cors());
app.use(json());
app.use(routes)


app.listen(3333, () => console.log("Server is running on port 3333"));