const SelectAttack = document.getElementById("Select-attack")
const Reset = document.getElementById("Reset")
const buttonPetPlayer = document.getElementById("Button-pet")
const buttonReset = document.getElementById("button-Reset")
const sectionSelectAttack = document.getElementById("Select-attack")



const sectionSelectPetPlayer = document.getElementById("select-pet")
const spanPetEnemy = document.getElementById("pet-enemy")
const spanPetPlayer = document.getElementById("pet-player")

const spanLifePlayer = document.getElementById("Life-player")
const spanLifeEnemy = document.getElementById("Life-enemy")

const sectionMessages = document.getElementById("result")
const attacksOfEnemy = document.getElementById("attacks-of-enemy")
const attacksOfPlayer = document.getElementById("attacks-of-player")
const cardsContainer = document.getElementById("cardsContainer")
const attackContainer = document.getElementById("attackContainer")

let mokepones = []
let playerAttack
let enemyAttack
let petPlayer
let attacksMokepon
let buttonDirt
let buttonFire
let buttonWater
let inputHipodoge
let inputCapipepo
let inputRatigueya
let optionOfMokepon
let lifePlayer = 3
let lifeEnemy = 3



class Mokepon {
    constructor(name, image, life,) {
        this.name = name
        this.image = image
        this.life = life
        this.attacks = []
    }
}



let hipodoge = new Mokepon("Hipodoge", "../../mokepons_mokepon_hipodoge_attack.png", 5)

let capipepo = new Mokepon("Capipepo", "../../mokepons_mokepon_capipepo_attack.png", 5)

let ratigueya = new Mokepon("Ratigueya", "../../mokepons_mokepon_ratigueya_attack-b0c80a77-499a-49b6-a722-eab23f055cec.webp", 5)




hipodoge.attacks.push(
    { name: "💧", id: "button-Water" },
    { name: "💧", id: "button-Water" },
    { name: "💧", id: "button-Water" },
    { name: "🔥", id: "button-Fire" },
    { name: "🌱", id: "button-Dirt" },
)

capipepo.attacks.push(
    { name: "🌱", id: "button-Dirt" },
    { name: "🌱", id: "button-Dirt" },
    { name: "🌱", id: "button-Dirt" },
    { name: "💧", id: "button-Water" },
    { name: "🔥", id: "button-Fire" },

)

ratigueya.attacks.push(
    { name: "🔥", id: "button-Fire" },
    { name: "🔥", id: "button-Fire" },
    { name: "🔥", id: "button-Fire" },
    { name: "💧", id: "button-Water" },
    { name: "🌱", id: "button-Dirt" },
)

mokepones.push(hipodoge, capipepo, ratigueya)




function startGame() {



    mokepones.forEach((mokepon) => {
        optionOfMokepon = `
         <input type="radio" name="Pet" id= ${mokepon.name} />
          <label class="card-of-mokepon" for=${mokepon.name} >
  <p>${mokepon.name}</p>
  <img src=${mokepon.image} alt=${mokepon.name}>
</label>`

        cardsContainer.innerHTML += optionOfMokepon

        inputHipodoge = document.getElementById("Hipodoge")
        inputCapipepo = document.getElementById("Capipepo")
        inputRatigueya = document.getElementById("Ratigueya")

    })
    buttonPetPlayer.addEventListener("click", selectPetPlayer)







    buttonReset.addEventListener("click", restartGame)


}

function selectPetPlayer() {




    sectionSelectPetPlayer.style.display = "none"

    sectionSelectAttack.style.display = "flex"






    if (inputHipodoge.checked) {
        spanPetPlayer.innerHTML = inputHipodoge.id
        petPlayer = inputHipodoge.id
    }
    else if (inputCapipepo.checked) {
        spanPetPlayer.innerHTML = inputCapipepo.id
        petPlayer = inputCapipepo.id
    }
    else if (inputRatigueya.checked) {
        spanPetPlayer.innerHTML = inputRatigueya.id
        petPlayer = inputRatigueya.id
    }
    else {
        alert("choose one pet")
    }

    extractAttacks(petPlayer)
    selectEnemyPlayer()



}

function extractAttacks(petPlayer) {
    let attacks
    for (let i = 0; i < mokepones.length; i++) {
        if (petPlayer === mokepones[i].name) {
            attacks = mokepones[i].attacks
        }

    }

    showAttacks(attacks)



}







function showAttacks(attacks) {
    attacks.forEach((attacks) => {
        mokeponAttacks = `  
        <button id=${attacks.id} class="button-attack">${attacks.name}
         </button>
         `

        attackContainer.innerHTML += mokeponAttacks
    })


    buttonFire = document.getElementById("button- Dirt")
    buttonWater = document.getElementById("button- Fire")
    buttonDirt = document.getElementById("button- Water")


   buttonFire.addEventListener("click", fireAttack)


    buttonWater.addEventListener("click", waterAttack)


    buttonDirt.addEventListener("click", dirtAttack)


}


function selectEnemyPlayer() {
    let randomPet = random(0, mokepones.length - 1)



    spanPetEnemy.innerHTML = mokepones[randomPet].name

}

function fireAttack() {
    playerAttack = "FIRE"
    enemyRandomAttack()
}
function waterAttack() {
    playerAttack = "WATER"
    enemyRandomAttack()
}
function dirtAttack() {
    playerAttack = "DIRT"
    enemyRandomAttack()
}

function enemyRandomAttack() {
    let randomAttack = random(1, 3)

    if (randomAttack == 1) {
        enemyAttack = "FIRE"
    } else if (randomAttack == 2) {
        enemyAttack = "WATER"
    } else {
        enemyAttack = "DIRT"
    }

    battle()
}

function createMessage(result) {



    let newAttackOfThePlayer = document.createElement("p")
    let newAttackOfTheEnemy = document.createElement("p")

    sectionMessages.innerHTML = result
    newAttackOfThePlayer.innerHTML = playerAttack
    newAttackOfTheEnemy.innerHTML = enemyAttack



    attacksOfEnemy.appendChild(newAttackOfTheEnemy)
    attacksOfPlayer.appendChild(newAttackOfThePlayer)
}



function battle() {



    if (playerAttack == "WATER" && enemyAttack == "FIRE") {
        createMessage("You WIN")

        lifeEnemy--
        spanLifeEnemy.innerHTML = lifeEnemy


    } else if (playerAttack == "DIRT" && enemyAttack == "WATER") {
        createMessage("You WIN")

        lifeEnemy--
        spanLifeEnemy.innerHTML = lifeEnemy

    } else if (playerAttack == "FIRE" && enemyAttack == "DIRT") {
        createMessage("You WIN")

        lifeEnemy--
        spanLifeEnemy.innerHTML = lifeEnemy



    } else if (playerAttack == enemyAttack) {
        createMessage("TIE")

    } else {
        createMessage("You LOSE")
        lifePlayer--
        spanLifePlayer.innerHTML = lifePlayer

    }
    checkLifes()


}


function checkLifes() {
    if (lifeEnemy == 0) {
        createMessageFinal(" The enemy doesn't have lifes, YOU WIN, CONGRATULATIONS")
    } else if (lifePlayer == 0) {
        createMessageFinal("You LOSE, you doesn't have more lifes")
    }
}


function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
};


function createMessageFinal(resultFinal) {




    sectionMessages.innerHTML = resultFinal




    buttonWater.disabled = true


    buttonFire.disabled = true


    buttonDirt.disabled = true

    sectionReset.style.display = "none"


    buttonReset.addEventListener("click", restartGame)





}

function restartGame() {
    location.reload()
}


window.addEventListener("load", startGame)

