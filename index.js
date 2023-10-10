const express = require ('express');
const app = express ();
const pool = require('./queries.js')
const route = require('./route.js')
const port = 3000

app.use('/route', route)

app.get('/', (req,res) => {
    pool.query ('SELECT*FROM public.actor', (err, result) => {
        if(err){
            throw err
        }
        res.send(result.rows)
        
    })
});

app.get('/', (req,res) => {
    pool.query ('SELECT*FROM public.film', (err, result) => {
        if(err){
            throw err
        }
        res.send(result.rows)
        
    })
});

app.get('/', (req,res) => {
    pool.query ('SELECT*FROM public.film where film_id < 3', (err, result) => {
        if(err){
            throw err
        }
        res.send(result.rows)
    })
});

app.get('/', (req,res) => {
    pool.query ('SELECT*FROM public.category', (err, result) => {
        if(err){
            throw err
        }
        res.send(result.rows)
    })
});

app.get('/', (req,res) => {
    pool.query ('SELECT * FROM public.film_category ORDER BY film_id ASC, category_id ASC ', (err, result) => {
        if(err){
            throw err
        }
        res.send(result.rows)
    })
});

pool.connect((err, res) => {
        console.log(err);
        console.log('connected');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});