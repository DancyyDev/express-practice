const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

var db

const url = 'mongodb+srv://Dancyy:Kiwi2919@cluster0.cntrt.mongodb.net/?retryWrites=true&w=majority'
const dbName = 'expressPractice'

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))

app.listen(1001, function() {
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, 
        (error, client) => {
        if(error) {
            throw error;
        }
        db = client.db(dbName);
        console.log("1001 Connected to `" + dbName + "`!");
    });
    
    
}); 

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.get('/post', (req, res) => {
    db.collection('info').find().toArray((err, result) => {
        if (err) return console.log(err)
        res.render('post.ejs', {info: result})
      })
    
})

app.get('/update', (req, res) => {
    db.collection('info').find().toArray((err, result) => {
        if (err) return console.log(err)
        res.render('update.ejs', {info: result})
    })
})

app.put('/update' , (req, res) => {
    db.collection('info').findOneAndUpdate(
        { 
            name: req.body.name,
            element: req.body.element,
            style: req.body.style 
        },
        { $set: {
            name: 'chicken',
            element: 'chicken',
            style: 'chicken'
        }   
    },
    {
        sort: {_id: -1},  
        upsert: true
    }, (err, result) => {
        if (err) return res.send(err)
        res.send(result)
    })
})

app.get('/delete', (req, res) => {
    db.collection('info').find().toArray((err, result) => {
        if (err) return console.log(err)
        res.render('delete.ejs', {info: result})
      })
    
})

app.delete('/deleteThat', (req, res) => {
    db.collection('info').findOneAndDelete(
      {
        name: req.body.name,
        element: req.body.element,
        style: req.body.style
      }, (err, result) => {
      if (err) return res.send(500, err)
      res.send('Message deleted!')
    })
  })


// ////////////////////////
// post page
// ///////////////////////

app.post('/order', (req, res) => {
    db.collection('info').insertOne({
        name: req.body.name,
        element: req.body.element,
        style: req.body.style
    }).then(result => {
        console.log('saved to database')
        res.redirect('/post')
      })
      .catch(error => console.error(error))
  })