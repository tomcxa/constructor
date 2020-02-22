import { Character } from '../app';

test.each([
    [
        'Swinger', 'Bowman', {
            name: 'Swinger',
            type: 'Bowman',
            health: 100,
            level: 1,
            attack: 25,
            protection: 25,
        },
    ],
    [
        'Akakiy', 'Swordsman', {
            name: 'Akakiy',
            type: 'Swordsman',
            health: 100,
            level: 1,
            attack: 40,
            protection: 10,
        },
    ],
    [
        'Grigory', 'Magician', {
            name: 'Grigory',
            type: 'Magician',
            health: 100,
            level: 1,
            attack: 10,
            protection: 40,
        },
    ],
    [
        'S', 'Bowman', Error('Зашкварное имя, голубчик'),
    ],
    [
        '123234234324', 'Bowman', Error('Зашкварное имя, голубчик'),
    ],
    [
        1232, 'Bowman', Error('Зашкварное имя, голубчик'),
    ],
    [
        'Swinger', 1232, Error('Зашкварный тип, голубчик'),
    ],
    [
        'Swinger', 'Bowman2', Error('Зашкварный тип, голубчик'),
    ],
])(('should chtoto'), (name, type, expected) => {
    const result = new Character(name, type);

    expect(result).toEqual(expected);
});
