import express from 'express';

interface AppResponse {
  code: number,
  message: string
}

const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.json({
    code: 0,
    message: 'do not hit me too often',
  } as AppResponse);
});

app.listen(port);