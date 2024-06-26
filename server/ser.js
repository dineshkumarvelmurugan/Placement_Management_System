const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/training', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

const trainingSchema = new mongoose.Schema({
    trainingName: String,
    name: String,
    rollno: String,
    branch: String,
    year: String,
    skill: String
});

const Training = mongoose.model('Training', trainingSchema, "trainingData");

// Route for adding new entry
app.post('/add', async (req, res) => {
    const { trainingName, name, rollno, branch, year, skill } = req.body;
    try {
        const newEntry = new Training({
            trainingName,
            name,
            rollno,
            branch,
            year,
            skill
        });
        // Save the document to the database
        const result = await newEntry.save();
        console.log('Entry created:', result);
        res.status(201).send("Entry has been added!");
    } catch (err) {
        console.error('Error creating entry:', err);
        // Log the specific error message returned by MongoDB, if available
        const errorMessage = err.code ? err.code : err.message;
        res.status(500).send(`Entry Creation failed: ${errorMessage}`);
    }
});

app.get('/view', async (req, res) => {
    try {
        const data = await Training.find();
        res.status(200).json(data);
    } catch (err) {
        console.error('Error retrieving data:', err);
        res.status(500).send('Internal Server Error');
    }
});

const PORT = 4201;
app.listen(PORT, () => {
    console.log(`Server is running on port http://127.0.0.1:${PORT}`);
});