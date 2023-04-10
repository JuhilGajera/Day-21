
const characters = fetch('https://raw.githubusercontent.com/adhithiravi/React-Hooks-Examples/master/testAPI.json');
characters
  .then (data => data.json()) 
  .then (data => {
    setTimeout(() => console.log(data),5000)
    //  console.log(data.articles.map((val) => val.title))
  })



  const characters1 = fetch('https://raw.githubusercontttent.com/adhithiravi/React-Hooks-Examples/master/testAPI.json');
  characters1
    .then (data => data.json()) 
    .then (data => {
       console.log(data)
    })

  .catch((error) => {
     console.error(error)
  }) 