export class Details{
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
    async getDetails(id){
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        }
    
        let response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)
        let finalResponse = await response.json()
        console.log("getting details done")
        return finalResponse
    }
    async fetchDetails(id) {
        let game =  await this.getDetails(id);
        let gameDetails = new Details(game.description, game.developer, game.freetogame_profile_url, game.game_url, game.genre, game.id, game.publisher, game.release_date, game.screenshots, game.status, game.title, game.thumbnail)
          gameDetails.display()
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
