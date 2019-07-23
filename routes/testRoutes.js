const axios = require('axios')
const ejs = require('ejs')

module.exports = app => {
  app.get('/', (req, res) => {

    res.render('index')
   })

  app.get('/posts', (req, res) => {
    const getPostData = () => {
      return axios.get(`https://jsonplaceholder.typicode.com/posts`)
              .then(res => res.data)
              .catch(err => console.log(err))
      }
    getPostData().then(data => {
    //Only the title and body of all the posts should be displayed in an centered and ordered HTML list on the DOM
    data.map( elem => { elem.title, elem.body })
    res.render('index', {data})
    })
  })

  app.get('/aboutme', (req, res) => {
    const { description, tech, techstack, hobbies } = req.params 
    console.log(description)
    console.log(tech)
    console.log(techstack)
    console.log(hobbies)

  })
}