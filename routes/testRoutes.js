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
      console.log(posts)
      res.render('posts', { posts })
    })
  })

  app.get('/aboutme', (req, res) => {
    const { description, tech, techstack, hobbies } = req.params 
    console.log(description)
    console.log(tech)
    console.log(techstack)
    console.log(hobbies)
    res.render('/aboutme')
  })
}