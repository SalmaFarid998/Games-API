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
    console.log(gameObjectArray)
    displayData()
  
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
        let col = `<div class="col-md-4 p-3" id='${gameObjectArray[i].id}'>
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
    // setTimeout(addCategoriesToNavLinks,3000)
    
}

function addCategoriesToNavLinks(){
    let categoryLinks = document.querySelectorAll(".nav-link")
    for (let i=0; i<categoryLinks.length; i++){
        categoryLinks[i].addEventListener("click",()=>{
            start(categoryLinks[i].attributes.category.nodeValue)

        })
    }
    console.log("Adding Category Links Done")
}


// displayDetails()
