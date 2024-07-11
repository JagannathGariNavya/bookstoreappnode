
const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const { specs } = require('./config/swagger');
const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');
const orderRoutes = require('./routes/orderRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const { authenticateToken } = require('./config/middleware/authMiddleware');
const connectToDb = require('./config/mongoose');

const app=express();
// const path=require('p')

app.use(bodyParser.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use('/api', authRoutes);
app.use('/api', authenticateToken, bookRoutes);
app.use('/api', authenticateToken, orderRoutes);
app.use('/api', authenticateToken, reviewRoutes);

app.get("/",async(req,res)=>{
    res.send("hii this home route")
})

app.use('/api-docs',swaggerUi.serve);
const PORT =process.env.PORT || 3000;

app.listen(PORT,async()=>{
    try {
        await connectToDb();
        console.log(`server is running at ${PORT}`);
    } catch (error) {
          console.log("oops we got error in running port");
    }
})