import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

const PORT = 5000;


const products = [
    {
        name: "Laptop",
        price: 100000,
        description: "A high-performance laptop for all your computing needs."
    },
    {
        name: "Keyboard",
        price: 10000,
        description: "Good for Gaming work"
    },
    {
        name: "Mouse",
        price: 1000,
        description: "Good for normal work"
    },
    {
        name: "Mechanical Keyboard",
        description: "RGB mechanical keyboard with blue switches for fast and comfortable typing.",
        price: 45000
    },

]

app.get('/products', (_, res) => {
    res.send(products)
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})