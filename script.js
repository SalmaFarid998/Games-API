import {Details} from './details.js'
import { Game } from './games.js'

let x = new Game()
x.createGames()
x.displayData()

class UI{
    clearActives(){
        let categoryLinks = document.querySelectorAll(".nav-link")
    for (let i=0; i<categoryLinks.length; i++){
            categoryLinks[i].classList.remove("active")
        }
    }
    addCategoriesToNavLinks(){
        let categoryLinks = document.querySelectorAll(".nav-link")
        for (let i=0; i<categoryLinks.length; i++){
            categoryLinks[i].addEventListener("click",()=>{
                let x = new Game()
                x.createGames(categoryLinks[i].attributes.category.nodeValue)
                x.displayData()
                
                // start()
                this.clearActives()
                categoryLinks[i].classList.toggle("active")
                }
                
            )
        }
        console.log("Adding Category Links Done")
    }
}
new UI().addCategoriesToNavLinks()