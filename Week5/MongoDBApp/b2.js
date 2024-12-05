const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://FreeClusterApplicationUser001:rSrm9mYcuDKQRqcM@myfreecluster001.jv1bn.mongodb.net/?retryWrites=true&w=majority&appName=MyFreeCluster001";

// const uri = <connection-string>
// Create a new client and connect to MongoDB
const client = new MongoClient(uri);
async function run() {
  try {
    // Connect to the "insertDB" database and access its "haiku" collection
    const foods = client.db("foods");
    const fruit = foods.collection("fruit");
    
    // Create a document to insert
    const lemon = {
        name: "lemon",
        price: 0.5,
        description: "Yellow and sour!"
    }
    // Insert the defined document into the "haiku" collection
    const result = await fruit.insertOne(lemon);
    // Print the ID of the inserted document
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } finally {
     // Close the MongoDB client connection
    await client.close();
  }
}
// Run the function and handle any errors
run().catch(console.dir);