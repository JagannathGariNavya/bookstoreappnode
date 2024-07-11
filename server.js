const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');
const orderRoutes = require('./routes/orderRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const { authenticateToken } = require('./config/middleware/authMiddleware');
const connectToDb = require('./config/mongoose');

const app = express();

app.use(bodyParser.json());
app.use('/api', authRoutes);
app.use('/api', authenticateToken, bookRoutes);
app.use('/api', authenticateToken, orderRoutes);
app.use('/api', authenticateToken, reviewRoutes);

app.get("/", async (req, res) => {
    res.send("hii this home route");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
    try {
        await connectToDb();
        console.log(`Server is running at ${PORT}`);
    } catch (error) {
        console.log("Oops, we got an error in running the port");
    }
});
