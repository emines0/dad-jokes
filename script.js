const url = 'https://icanhazdadjoke.com'
const jokeEl = document.getElementById('joke')
const btn = document.getElementById('jokeBtn')

const config = {
   headers: {
      Accept: 'application/json'
   }
}

// asynchronous version
async function generateJoke() {
   const res = await fetch(url, config)
   const data = await res.json()

   jokeEl.innerHTML = data.joke
}

// const config = {
//    headers: {
//       Accept: 'application/json'
//    }
// }

// function generateJoke() {
//    fetch(url, config)
//       .then((res) => res.json())
//       .then((data) => {
//          jokeEl.innerHTML = data.joke
//       })
// }

// Event Listeners
btn.addEventListener('click', generateJoke)

// Global scope
generateJoke()
