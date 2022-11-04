const express = require('express');

const app = express();

app.get('/', (req, res) => {
  const blog = { id: 1, title: 'Blog Title', description: 'Blog Description' };

  res.send(blog);
});

const port = 4000;

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda Başlatıldı!`);
});
