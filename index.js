


let homeScore_el = document.getElementById("home-score")
let awayScore_el = document.getElementById("away-score")

let new_game_btn_el = document.getElementById("new-game-btn")
let result_text_el = document.getElementById("result-text")




let homeScore = 0
let awayScore = 0

function addOne(currTeam){
    if(currTeam === "home-score-incr"){
        homeScore += 1
        homeScore_el.textContent = homeScore
    }else if(currTeam === "away-score-incr"){
        awayScore += 1
        awayScore_el.textContent = awayScore
    }

    checkLeadTeam()
}

function addTwo(currTeam){
    if(currTeam === "home-score-incr"){
        homeScore += 2
        homeScore_el.textContent = homeScore
    }else if(currTeam === "away-score-incr"){
        awayScore += 2
        awayScore_el.textContent = awayScore
    }

    checkLeadTeam()
}

function addThree(currTeam){
    if(currTeam === "home-score-incr"){
        homeScore += 3
        homeScore_el.textContent = homeScore
    }else if(currTeam === "away-score-incr"){
        awayScore += 3
        awayScore_el.textContent = awayScore
    }

    checkLeadTeam()
}


function resetScores(){

    if(homeScore > awayScore){
        result_text_el.textContent = "Home team won by " + (homeScore -awayScore) + " points"
    }else if(homeScore < awayScore){
        result_text_el.textContent = "Away team won by " + (awayScore -homeScore) + " points"

    }else{
        result_text_el.textContent = "Match Tied"

    }

    homeScore = 0
    awayScore = 0

    homeScore_el.innerText = "0"
    awayScore_el.innerText = "0"

    checkLeadTeam()
}

function checkLeadTeam(){

    if(homeScore > awayScore){
        homeScore_el.className = "leading-highlight"
        awayScore_el.classList.remove("leading-highlight")

    }else if(homeScore < awayScore){
        awayScore_el.className = "leading-highlight"
        homeScore_el.classList.remove("leading-highlight")

    }else{
        homeScore_el.classList.remove("leading-highlight")
        awayScore_el.classList.remove("leading-highlight")


    }


}