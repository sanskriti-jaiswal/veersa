const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();
const path = require('path');
const favicon = require('express-favicon');

// Server Setup
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

app.get('/', (req, res) => {
    console.log('Home Page');

    // Colors 
    const bg_color = "#0e110e"; // blackish
    const text_color = "#fefde1"; // white-yellow 
    const accent_color = "#0ae448"; // green
    const alt_accent_color = "#fec5fb"; // pinkish
    
    res.render('home', { bg_color, text_color, accent_color, alt_accent_color });
});


app.listen(PORT , () => {
    try {
        console.log(`Server: http://localhost:${PORT}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
})


