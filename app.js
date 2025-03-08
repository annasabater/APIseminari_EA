import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import subjectRoutes from './routes/subject.routes.js';

const app = express();

app.use(bodyParser.json());
app.use('/api/subjects', subjectRoutes);

mongoose.connect('mongodb://localhost:27017/annasabater')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor en marxa a http://localhost:${PORT}`);
});

export default app;
