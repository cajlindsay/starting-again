import express from 'express';
import history from 'connect-history-api-fallback';

export default function buildProdServer(envKeys) {
  const app = express();

  // handler for env.js file
  app.get('/env.js', (req, res) => {
    const dict = envKeys.reduce(
      (prev, next) => ({
        ...prev,
        [next]: process.env[next]
      }),
      {}
    );

    res.type('.js');
    res.send(`window.env = ${JSON.stringify(dict, null, 2)};`);
  });

  // for spa, handle all unknown paths by serving index.html
  app.use(history());

  // handle static files
  app.use(express.static('static'));

  // listen
  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
  });
}
