const axios = require('axios')

module.exports = app => {
  app.get('/posts', (req, res) => {
    const getPostData = () => {
      return axios.get(`https://jsonplaceholder.typicode.com/posts`)
              .then(res => res.data)
              .catch(err => console.log(err))
      }
    getPostData().then(data => res.send(data))
  })

  app.get('/aboutme', (req, res) => {
    const { description, tech, techstack, hobbies } = req.params 
    console.log(description)
  })
}