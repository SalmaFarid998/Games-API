// Function to display homepage with all games
let gameObjectArray
async function createGames(category) {
    gameObjectArray = []
  let games =  await getGames(category);
    for (let i=0; i<games.length; i++){
        let g = games[i]
        let game = new Game(g.developer, g.freetogame_profile_url, g.game_url, g.genre, g.id, g.platform, g.publisher, g.release_date, g.short_description, g.thumbnail, g.title)
        gameObjectArray.push(game)
        
    }
    displayData()
  
}

async function fetchDetails(id) {
  let game =  await getDetails(id);
  let gameDetails = new Details(game.description, game.developer, game.freetogame_profile_url, game.game_url, game.genre, game.id, game.publisher, game.release_date, game.screenshots, game.status, game.title, game.thumbnail)
    gameDetails.display()
}
class Details {
    constructor(description, developer, freetogame_profile_url, game_url, genre, id, publisher, release_date, screenshots, status, title, thumbnail) {
        this.description = description;
        this.developer = developer;
        this.freetogame_profile_url = freetogame_profile_url;
        this.game_url = game_url;
        this.genre = genre;
        this.id = id;
        this.publisher = publisher;
        this.release_date = release_date;
        this.screenshots = screenshots;
        this.status = status;
        this.title = title;
        this.thumbnail = thumbnail;
    }
    display(){
        document.getElementById("game-details-box").style.display = "flex";
        document.getElementById("game-box").style.display = "none";
        let block = `<div class=col-12><i id="close-btn">Close</i></div><div class="col-md-4">
        <img src="${this.thumbnail}">
      </div>
      <div class="col-md-8">
        <h3>${this.title}</h3>
        <p>Category: <span>${this.genre}</span></p>
        <p>Status: <span>${this.status}</span></p>
        <hr>
        <p>${this.description}</p>
        <a class="btn btn-primary" href="${this.game_url}">Show Game</a>
      </div>`
      document.getElementById("game-details-box").innerHTML = block
      document.getElementById("close-btn").addEventListener("click", ()=>{
        document.getElementById("game-details-box").style.display = "none";
        document.getElementById("game-box").style.display = "flex";
      })
    }

}


class Game {
    constructor(developer, profileUrl, gameUrl, genre, id, platform, publisher, releaseDate, shortDescription, thumbnail, title) {
        this.developer = developer;
        this.freetogame_profile_url = profileUrl;
        this.game_url = gameUrl;
        this.genre = genre;
        this.id = id;
        this.platform = platform;
        this.publisher = publisher;
        this.release_date = releaseDate;
        this.short_description = shortDescription;
        this.thumbnail = thumbnail;
        this.title = title;
    }
}

// displayData()
async function displayData(){
    // await createGames()
    let cols = ``;
    for (i=0; i<gameObjectArray.length; i++){
        let col = `<div class="game col-md-4 p-3" id='${gameObjectArray[i].id}'>
        <div class="border border-primary b-3 p-3 h-100">
        <img src="${gameObjectArray[i].thumbnail}" class="w-100 p-2 ">
        <h4>${gameObjectArray[i].title}</h4>
        <p>${gameObjectArray[i].short_description}</p>
        <div class="border b-2 b-primary"><span>${gameObjectArray[i].platform}</span></div>

        </div>
        </div>`
        
        cols+=col
    }
    document.getElementById("game-box").innerHTML = cols
    let gameBoxes = document.querySelectorAll(".game")
    for (let i=0; i<gameBoxes.length; i++){
        gameBoxes[i].addEventListener("click",()=>{
            fetchDetails(gameBoxes[i].id)
        })
    }
    
}
function clearActives(){
    let categoryLinks = document.querySelectorAll(".nav-link")
for (let i=0; i<categoryLinks.length; i++){
        categoryLinks[i].classList.remove("active")
    }
}
function addCategoriesToNavLinks(){
    let categoryLinks = document.querySelectorAll(".nav-link")
    for (let i=0; i<categoryLinks.length; i++){
        categoryLinks[i].addEventListener("click",()=>{
            start(categoryLinks[i].attributes.category.nodeValue)
            clearActives()
            categoryLinks[i].classList.toggle("active")
            }
            
        )
    }
    console.log("Adding Category Links Done")
}


