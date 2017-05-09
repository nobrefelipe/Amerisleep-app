import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({

    state: {

        sizes: [

            {
                name: "Twin XL",
                size: "38\" x 80\"",
                price : "1800"
            },

            {
                name: "Full",
                size: "54\" x 75\"",
                price : "1900"
            },


            {
                name: "Queen",
                size: "60\" x 80\"",
                price : "1900"
            },


            {
                name: "Split King",
                size: "38\" x 80\" - 2",
                price : "3600"
            },



        ],

        features: [

            {
                id: 'item01',
                name: "Dual, full body wave massage",
                description: "The fully adjustable, dual wave massage offers variable intensity<br>for extreme relaxation from head to toe.",
                delay: 500,
                size: '180px'
            },

            {
                id: 'item02',
                name: "USB port system",
                description: "Located on either side of the base are two 4-port USB hubs,<br>allowing you to charge up to eight USB devices from the comfort of your bed.",
                delay: 800,
                size: '420px'
            },

            {
                id: 'item03 reverse',
                name: "MicroHook™ retention system",
                description: "The retention system keeps your mattress from slipping<br>as you adjust the base up and down, removing the need for a retainer bar at the foot of the bed",
                delay: 1100,
                size: '180px'
            },

            {
                id: 'item04',
                name: "Under-bed lighting",
                description: "Multi-directional under-bed lighting is fully dimmable,<br>providing both ambience and functionality.",
                delay: 1400,
                size: '520px'
            }
        ],

        remoteFeatures: [

            {
                title: 'Programmable remote control',
                description: 'Touch-sensitive control, at your fingertips.'
            },

            {
                title: 'Android and iOS app control',
                description: 'Compatible with mobile devices, for unrivalled connectivity.'
            },

            {
                title: 'Wallhugger® engineering',
                description: 'Unrivalled connectivity and control.'
            },

            // {
            //     title: 'USB Ports',
            //     description: 'Lift and glide technology, for perfect positioning of your bed next to your nightstand.'
            // },

            {
                title: 'Pillow tilt articulation',
                description: 'Optimal support for your head while you read, work or watch TV in bed.'
            },

            {
                title: 'Twenty year warranty',
                description: 'Protecting your investment and giving you total peace of mind.'
            }

        ]

    }

});