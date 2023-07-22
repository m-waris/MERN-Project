const mongoose = require('mongoose');

// Your MongoDB connection URL
const url = 'mongodb+srv://mwarismahmood:BNezrf5jtQOTTxhl@cluster0.dq9xnyf.mongodb.net/foodappdb?retryWrites=true&w=majority';

// Function to establish a connection to MongoDB
const databaseConnection = async () => {
    try {
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

module.exports = databaseConnection;

// Function to fetch data from the 'food_items' collection
const fetchFoodItems = async () => {
    try {
        // Establish the connection
        await databaseConnection();

        // Define the schema for the 'food_items' collection
        const foodItemSchema = new mongoose.Schema({
            // Define the schema fields here based on your collection structure
            // For example:
            name: String,
            price: Number,
            category: String,
        });

        // // Create a model based on the schema
        const FoodItem = mongoose.model('food_items', foodItemSchema);

        // Fetch all data from the 'food_items' collection
        const allFoodItems = await FoodItem.find({});
        // Do something with the fetched data (e.g., console.log or return it)
        console.log("data is fetched");

        // Close the connection after the data is fetched (optional, you can keep the connection open if needed)
        mongoose.disconnect();
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
//fetchFoodItems();