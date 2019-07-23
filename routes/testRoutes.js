const axios = require('axios')
const ejs = require('ejs')

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
    //Only the title and body of all the posts should be displayed in an centered and ordered HTML list on the DOM
      res.render('posts', { posts })
    })
  })

  app.get('/aboutme', (req, res) => {
    const { q } = req.query
    const answers = [
      { question: "Tell me about yourself", answer: "I'm a full stack engineer with a background in finance and photography." },
      { question: "What excites you about technology?", answer: "The ability to build new and innovative things" },
      { question: "What is your preferred technology stack?", answer: "PostgreSQL, Node, Express, React" },
      { question: "what are your favorite hobbies?", answer: "photography and gadget shopping"}
    ]
    let data = null;

    switch( q ) {
      case 'description':
        data = answers[0]
      case 'tech':
        data = answers[1]
      case 'techstack':
        data = answers[2]
      case 'hobbies':
        data = answers[3]
      default:
        data = answers
    }

    res.render('aboutme', data)
  })
}