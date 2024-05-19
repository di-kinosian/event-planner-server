const express = require('express')
const mongoose = require('mongoose');
const path = require('path')

const PORT = process.env.PORT || 5001

const app = express()

// Middleware to parse JSON
app.use(express.json());


app.use(express.static(path.join(__dirname, 'public')))
  .get('/', (req, res) => res.render('pages/index'))

const dbUri = 'mongodb+srv://kinosyandiana:GpZxeRdyHl95b5y2@cluster0.g7hjjsz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

// const dbUri = 'mongodb+srv://makhynenko:4ibsbg3F8q1fnnzj@mongocluster.34licqe.mongodb.net/?retryWrites=true&w=majority&appName=mongoCluster'
mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true, dbName: 'app' })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const itemSchema = new mongoose.Schema({
  name: String,
  price: Number,
});

const Item = mongoose.model('Item', itemSchema);

// Routes
app.get('/items', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post('/items', async (req, res) => {
  const newItem = new Item(req.body);
  try {
    const savedItem = await newItem.save();
    res.json(savedItem);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`))