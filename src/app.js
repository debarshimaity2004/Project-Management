import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/instagram', (req, res) => {
  res.send('This is the Instagram page')
})

export default app;