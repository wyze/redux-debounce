import config from '../../webpack.config';
import express from 'express';
import webpack from 'webpack';

const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));

app.get('*', ( req, res ) =>
  res.send(`
    <!doctype html>
    <html>
      <head>
        <title>redux-debounce Example</title>
      </head>
      <body>
        <div id="root"></div>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
  `)
);

app.listen(3000, 'localhost', err => {
  if ( err ) {
    console.log(err); // eslint-disable-line

    return;
  }

  console.log('Listening at http://localhost:3000'); // eslint-disable-line
});
