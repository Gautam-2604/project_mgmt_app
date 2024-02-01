const express = require('express');
const colors = require('colors');
const connectDB = require('./config/db')
require('dotenv').config()
const schema = require('./schema/schema')
const {graphqlHTTP}  = require('express-graphql');
const app = express();

connectDB();
const port = process.env.PORT || 5000;
app.use('/graphql',graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}))

app.listen(port,console.log(`Server running on port ${port}`));