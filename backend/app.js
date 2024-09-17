const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const medicineRoutes = require('./routes/medicineRoutes');

require('dotenv').config();

const app = express();

app.use(bodyParser.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/medicines', medicineRoutes);

sequelize.sync().then(() => {
    app.listen(3000, () => {
        console.log('Server running on port 3000');
    });
}).catch(err => console.log('Error syncing with the database', err));
