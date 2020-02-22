/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
// TODO: write your code here
export function Character(name, type) {
    try {
        if (typeof name !== 'string' || (name.length < 2 || name.length > 10)) {
            throw new Error('Зашкварное имя, голубчик');
        }
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        switch (type) {
        case 'Bowman':
            this.attack = 25;
            this.protection = 25;
            break;
        case 'Swordsman':
            this.attack = 40;
            this.protection = 10;
            break;
        case 'Magician':
            this.attack = 10;
            this.protection = 40;
            break;
        // case 'Daemon':
        //     this.attack = 10;
        //     this.protection = 40;
        //     break;
        // case 'Undead':
        //     this.attack = 25;
        //     this.protection = 25;
        //     break;
        // case 'Zombie':
        //     this.attack = 40;
        //     this.protection = 10;
        //     break;
        default:
            throw new Error('Зашкварный тип, голубчик');
        }
    } catch (error) {
        return error;
    }
}

const bowman = new Character(123, 'Bowman');
console.log(bowman);
