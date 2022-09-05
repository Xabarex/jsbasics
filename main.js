/*
 funckje strzałkowe/lambdy (arrow funcs)
 arrayas and their methods (map, for each, sort, filter, reduce)
 objects
 */


function d20() {
    return Math.ceil(Math.random() * 20)
}


class Warrior {
    
    constructor(name, hitPoints, armorClass, toHitBonus, damage) {
        this.name = name
        this.hitPoints = hitPoints
        this.armorClass = armorClass
        this.toHitBonus = toHitBonus
        this.damage = damage
    }

    isAlive() {
        return this.hitPoints > 0
    }
    
    attack(targetWarrior) {
        const toHitRoll = d20() + this.toHitBonus
        if (toHitRoll >= targetWarrior.armorClass) {
            console.log(`${this.name} hits ${targetWarrior.name} !`)
            targetWarrior.takeDamage(this.damage)
        } else {
            console.log(`${this.name} misses ${targetWarrior.name} !`)
        }
    }

    takeDamage(damageTaken) {
        this.hitPoints -= damageTaken
        console.log(`${this.name} takes ${damageTaken} damage and now has ${this.hitPoints} hit points left`)
    }

}

const warriorEustahy = new Warrior('Eustahy', 40, 15, 3, 8)
const warriorOla = new Warrior('Ola', 45, 13, 4, 7)

while (warriorEustahy.isAlive() && warriorOla.isAlive()) {
    warriorEustahy.attack(warriorOla)
    warriorOla.attack(warriorEustahy)

    if (!warriorOla.isAlive() && warriorEustahy.isAlive()) {
        console.log(`${warriorEustahy.name} is a winner`)
    } else if (!warriorEustahy.isAlive() && warriorOla.isAlive()) {
        console.log(`${warriorOla.name} is a winner`)
    } else if (!warriorEustahy.isAlive() && !warriorOla.isAlive()) {
        console.log('It\'s a tie')
    }
    
}
