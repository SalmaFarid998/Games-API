import { Details } from "./details.js";
export class Game{
    //     constructor(developer, profileUrl, gameUrl, genre, id, platform, publisher, releaseDate, shortDescription, thumbnail, title) {
    //     this.developer = developer;
    //     this.freetogame_profile_url = profileUrl;
    //     this.game_url = gameUrl;
    //     this.genre = genre;
    //     this.id = id;
    //     this.platform = platform;
    //     this.publisher = publisher;
    //     this.release_date = releaseDate;
    //     this.short_description = shortDescription;
    //     this.thumbnail = thumbnail;
    //     this.title = title;
    // }
    async getGames(category){
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        }
        if(category == undefined){
            category = "sailing"
        }
        let response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options)
        let finalResponse = await response.json()
        console.log("get games done")
        return finalResponse

    }
    async  displayData(){
        
    }
    async createGames(category) {
    let gameObjectArray = []
    let games =  await this.getGames(category);
        for (let i=0; i<games.length; i++){
            let game = games[i]
            // let game = {developer: g.developer, g.freetogame_profile_url, g.game_url, g.genre, g.id, g.platform, g.publisher, g.release_date, g.short_description, g.thumbnail, g.title}
            gameObjectArray.push(game)
            
        }
        // display Data
        let cols = ``;
        for (let i=0; i<gameObjectArray.length; i++){
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
                new Details().fetchDetails(gameBoxes[i].id)
                ///////////////////////
            })
        }
        
      
    }
}

