const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser'); // Import cookie-parser here
const { requireAuth, admin } = require('./middleware/authMiddleware'); // Ensure Admin is imported


const app = express();

// Use EJS as the view engine
app.set('view engine', 'ejs');

// Middleware for serving static files
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser()); // Use cookie-parser middleware here

// Database connection
mongoose.connect('mongodb+srv://mina:123@cluster0.mtyhmrn.mongodb.net/Bookly')
    .then(() => {
        console.log('Connected to the database');
        // Start the server after a successful database connection
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    })
    .catch((err) => {
        console.error('Database connection error:', err);
    });



// Routes
app.get('/', (req, res) => res.render('signIn'));
app.get('/admin',requireAuth,(req, res) => res.render('admin'));

app.use(authRoutes);
