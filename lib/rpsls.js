import minimist from 'minimist'

export function rps(shot = null) {
    const shot_options = ["rock", "paper", "scissors"]
    const sim_shot = shot_options[Math.floor(Math.random() * shot_options.length)]
    var shot;
    var option;
    const argv = minimist(process.argv.slice(2))
    for (var i=2; i<process.argv.length; i+=2) {
      option = process.argv[i]
    //   switch (option) {
    //     case '-h':
    //         show_rps_help();
    //         process.exit(0);
    //     case '--help':
    //         show_rps_help();
    //         process.exit(0);
    //     case '-r':
    //         show_rps_rules();
    //         process.exit(0);
    //     case '--rules':
    //         show_rps_rules();
    //         process.exit(0);
    //   }
    }
    if (!shot) {
        shot = option;
    }
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
    // else {
    //     show_rps_rules();
    // }
}

export function rpsls(shot = null) {
    const shot_options = ["rock", "paper", "scissors", "lizard", "spock"]
    const sim_shot = shot_options[Math.floor(Math.random() * shot_options.length)]
    var shot;
    const argv = minimist(process.argv.slice(2))
    var option;
    for (var i=2; i<process.argv.length; i+=2) {
      option = process.argv[i]
    //   switch (option) {
    //     case '-h':
    //         show_rps_help();
    //         process.exit(0);
    //     case '--help':
    //         show_rps_help();
    //         process.exit(0);
    //     case '-r':
    //         show_rps_rules();
    //         process.exit(0);
    //     case '--rules':
    //         show_rps_rules();
    //         process.exit(0);
    //   }
    }
    if (!shot) {
        shot = option;
    }
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
    // else {
    //     show_rpsls_rules();
    // }
}

// function show_rps_help() {
//     console.log("Usage: node-rps [SHOT]\nPlay Rock Paper Scissors (RPS)\n")
//     console.log("\t-h, --help\t\tdisplay this help message and exit")
//     console.log("\t-r, --rules\t\tdisplay the rules and exit")
//     console.log("Examples:")
//     console.log("\tnode-rps\t\tReturn JSON with single player RPS result.")
//     console.log("\t\t\t\te.g. {\"player\":\"rock\"}")
//     console.log("\tnode-rps rock\t\tReturn JSON with results for RPS played against a simulated opponent.")
//     console.log("\t\t\t\te.g {\"player\":\"rock\",\"opponent\":\"scissors\",\"result\":\"win\"}")
// }

// function show_rpsls_help() {
//     console.log("Usage: node-rpsls [SHOT]")
//     console.log("Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!\n")
//     console.log("\t-h, --help\t\tdisplay this help message and exit")
//     console.log("\t-r, --rules\t\tdisplay the rules and exit")
//     console.log("Examples:")
//     console.log("\tnode-rpsls\t\tReturn JSON with single player RPSLS result.")
//     console.log("\t\t\t\te.g. {\"player\":\"rock\"}")
//     console.log("\tnode-rps rock\t\tReturn JSON with results for RPSLS played against a simulated opponent.")
//     console.log("\t\t\t\te.g {\"player\":\"rock\",\"opponent\":\"Spock\",\"result\":\"lose\"}")
// }

// function show_rps_rules() {
//     console.log("Rules for Rock Paper Scissors:\n")
//     console.log("\t- Scissors CUTS Paper")
//     console.log("\t- Paper COVERS Rock")
//     console.log("\t- Rock CRUSHES Scissors")
// }

// function show_rpsls_rules() {
//     console.log("Rules for the Lizard-Spock Expansion of Rock Paper Scissors:\n")
//     console.log("\t- Scissors CUTS Paper")
//     console.log("\t- Paper COVERS Rock")
//     console.log("\t- Rock SMOOSHES Lizard")
//     console.log("\t- Lizard POISONS Spock")
//     console.log("\t- Spock SMASHES Scissors")
//     console.log("\t- Scissors DECAPITATES Lizard")
//     console.log("\t- Lizard EATS Paper")
//     console.log("\t- Paper DISPROVES Spock")
//     console.log("\t- Spock VAPORIZES Rock")
//     console.log("\t- Rock CRUSHES Scissors")
// }