import minimist from 'minimist'

export function rps(shot = null) {
    const shot_options = ["rock", "paper", "scissors"]
    const sim_shot = shot_options[Math.floor(Math.random() * shot_options.length)]
    if (!shot) {
        return `{"player":"${sim_shot}"}`
    }
    if (shot.toLowerCase() == sim_shot) {
        return `{"player":"${shot}","opponent":"${sim_shot}","result":"tie"}`
    }
    if (shot.toLowerCase() == 'rock') {
        if (sim_shot == 'paper') {
            return `{"player":"${shot}","opponent":"${sim_shot}","result":"lose"}`
        }
        if (sim_shot == 'scissors') {
            return `{"player":"${shot}","opponent":"${sim_shot}","result":"win"}`
        }
    }
    if (shot.toLowerCase() == 'paper') {
        if (sim_shot == 'rock') {
            return `{"player":"${shot}","opponent":"${sim_shot}","result":"win"}`
        }
        if (sim_shot == 'scissors') {
            return `{"player":"${shot}","opponent":"${sim_shot}","result":"lose"}`
        }
    }
    if (shot.toLowerCase() == 'scissors') {
        if (sim_shot == 'rock') {
            return `{"player":"${shot}","opponent":"${sim_shot}","result":"lose"}`
        }
        if (sim_shot == 'paper') {
            return `{"player":"${shot}","opponent":"${sim_shot}","result":"tie"}`
        }
    }
}

export function rpsls(shot = null) {
    const shot_options = ["rock", "paper", "scissors", "lizard", "spock"]
    const sim_shot = shot_options[Math.floor(Math.random() * shot_options.length)]
    if (!shot) {
        return `{"player":"${sim_shot}"}`
    }
    if (shot.toLowerCase() == sim_shot) {
        return `{"player":"${shot}","opponent":"${sim_shot}","result":"tie"}`
    }
    if (shot.toLowerCase() == 'rock') {
        if (sim_shot == 'paper') {
            return `{"player":"${shot}","opponent":"${sim_shot}","result":"lose"}`
        }
        if (sim_shot == 'scissors') {
            return `{"player":"${shot}","opponent":"${sim_shot}","result":"win"}`
        }
        if (sim_shot == 'lizard') {
            return `{"player":"${shot}","opponent":"${sim_shot}","result":"win"}`
        }
        if (sim_shot == 'spock') {
            return `{"player":"${shot}","opponent":"${sim_shot}","result":"lose"}`
        }
    }
    if (shot.toLowerCase() == 'paper') {
        if (sim_shot == 'rock') {
            return `{"player":"${shot}","opponent":"${sim_shot}","result":"win"}`
        }
        if (sim_shot == 'scissors') {
            return `{"player":"${shot}","opponent":"${sim_shot}","result":"lose"}`
        }
        if (sim_shot == 'lizard') {
            return `{"player":"${shot}","opponent":"${sim_shot}","result":"lose"}`
        }
        if (sim_shot == 'spock') {
            return `{"player":"${shot}","opponent":"${sim_shot}","result":"win"}`
        }
    }
    if (shot.toLowerCase() == 'scissors') {
        if (sim_shot == 'rock') {
            return `{"player":"${shot}","opponent":"${sim_shot}","result":"lose"}`
        }
        if (sim_shot == 'paper') {
            return `{"player":"${shot}","opponent":"${sim_shot}","result":"win"}`
        }
        if (sim_shot == 'lizard') {
            return `{"player":"${shot}","opponent":"${sim_shot}","result":"win"}`
        }
        if (sim_shot == 'spock') {
            return `{"player":"${shot}","opponent":"${sim_shot}","result":"lose"}`
        }
    }
    if (shot.toLowerCase() == 'lizard') {
        if (sim_shot == 'rock') {
            return `{"player":"${shot}","opponent":"${sim_shot}","result":"lose"}`
        }
        if (sim_shot == 'paper') {
            return `{"player":"${shot}","opponent":"${sim_shot}","result":"win"}`
        }
        if (sim_shot == 'scissors') {
            return `{"player":"${shot}","opponent":"${sim_shot}","result":"lose"}`
        }
        if (sim_shot == 'spock') {
            return `{"player":"${shot}","opponent":"${sim_shot}","result":"win"}`
        }
    }
    if (shot.toLowerCase() == 'spock') {
        if (sim_shot == 'rock') {
            return `{"player":"${shot}","opponent":"${sim_shot}","result":"lose"}`
        }
        if (sim_shot == 'paper') {
            return `{"player":"${shot}","opponent":"${sim_shot}","result":"win"}`
        }
        if (sim_shot == 'scissors') {
            return `{"player":"${shot}","opponent":"${sim_shot}","result":"win"}`
        }
        if (sim_shot == 'lizard') {
            return `{"player":"${shot}","opponent":"${sim_shot}","result":"lose"}`
        }
    }
}