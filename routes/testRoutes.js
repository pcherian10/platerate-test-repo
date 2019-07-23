'use strict'
const axios = require('axios')

module.exports = app => {
  app.get('/', (req, res) => {

    res.render('home')
   })

  app.get('/posts', (req, res) => {
    const getPostData = () => {
      return axios.get(`https://jsonplaceholder.typicode.com/posts`)
              .then(res => res.data)
              .catch(err => console.log(err))
      }
    getPostData().then(posts => {
      res.render('posts', { posts })
    })
  })

  app.get('/aboutme', (req, res) => {
    let { q } = req.query
    if ( q ) {
      q.toString().toLowerCase()
    }
    console.log(q)
    const answers = [
      { question: "Tell me about yourself", answer: "I'm a full stack engineer with a background in finance and photography." },
      { question: "What excites you about technology?", answer: "The ability to build new and innovative things" },
      { question: "What is your preferred technology stack?", answer: "PostgreSQL, Node, Express, React" },
      { question: "What are your favorite hobbies?", answer: "photography and gadget shopping"}
    ]
    let data = [];

    if ( q === "description" ) {
      data.push(answers[0]);
    } else if ( q === "tech") {
      data.push(answers[1]);
    } else if ( q === "techstack" ) {
      data.push(answers[2])
    } else if ( q === "hobbies" ) {
      data.push(answers[3])
    } else {
      data = answers 
    }

    console.log(data)
    res.render('aboutme', { data })

  })

  app.get('*', (req, res) => {
    res.render('invalid')
  })

}