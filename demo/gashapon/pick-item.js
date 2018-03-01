'use strict'

import Gashapon from './../../plugins/gashapon.js';

class Demo extends Phaser.Scene {
    constructor() {
        super({
            key: 'demo'
        })
    }

    preload() {}

    create() {
        var gashapon = new Gashapon({
            mode: 'shuffle', // 0|'shuffle'|1|'random
            items: {
                a: 1,
                b: 2,
                c: 3
            },
            reload: false
        });

        console.log("Pick a: " + gashapon.next('a'));

        for (var i = 0; i < 6; i++) {
            console.log("Random pick: " + gashapon.next());
        }

        console.log("Pick a: " + gashapon.next('a'));
    }

    update() {

    }
}

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Demo
};

var game = new Phaser.Game(config);