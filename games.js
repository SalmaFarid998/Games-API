// Details
// Home

// import and export to index.js

async function getGames(category){
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


async function getDetails(id){
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
