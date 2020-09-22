const express = require('express');
const app = express();
const morgan =  require('morgan');

const request = require('request');

//settings
app.set('port',process.env.PORT || 3001);
app.set('json spaces',2);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//routes
//app.use(require('./routes/index'));
app.use('/api/nuevoForm',require('./routes/nuevoFormulario'));

//starting the server
app.listen(app.get('port'),()=>{
    console.log(`Server on port ${app.get('port')}`)
}

);


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
  app.use(require('./routes/index'));
  /*
  app.get('http://localhost:3001/', (req, res) => {
      console.log(app.url);
    request(
      { url: 'http://localhost:3001/' },
      (error, response, body) => {
        if (error || response.statusCode !== 200) {
          return res.status(500).json({ type: 'error', message: err.message });
        }
  
        res.json(JSON.parse(body));
      }
    )
  });*/
  //app.listen(PORT, () => console.log(`listening on ${PORT}`));