// app.js

const express = require('express');
const app = express();
const PORT = 3000;

// In-memory store
let items = [
  { id: 1, name: 'Item One' },
  { id: 2, name: 'Item Two' }
];

// Middleware
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('hello, world');
});

// Get all items
app.get('/items', (req, res) => {
  res.json(items);
});

// Get a single item by ID
app.get('/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ error: 'Item not found' });
  res.json(item);
});

// Add new item
app.post('/items', (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: 'Name is required' });
  
  const newItem = { id: items.length + 1, name };
  items.push(newItem);
  res.status(201).json(newItem);
});

// Update item
app.put('/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ error: 'Item not found' });

  const { name } = req.body;
  if (!name) return res.status(400).json({ error: 'Name is required' });

  item.name = name;
  res.json(item);
});

// Delete item
app.delete('/items/:id', (req, res) => {
  const index = items.findIndex(i => i.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Item not found' });

  const deleted = items.splice(index, 1);
  res.json(deleted[0]);
});

// Handle invalid routes
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
