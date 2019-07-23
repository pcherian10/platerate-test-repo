const axios = require('axios')
const ejs = require('ejs')

module.exports = app => {
  app.get('/', (req, res) => {
    people = ['geddy', 'neil', 'alex'],
    html = ejs.render('<%= people.join(", "); %>', {people: people});

    res.send(html)
   })

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
    console.log(tech)
    console.log(techstack)
    console.log(hobbies)

  })
}