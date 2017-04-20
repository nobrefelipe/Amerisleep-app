import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({

    state: {

        sizes: [

            {
                name: "Twin",
                size: "60\" x 75\"",
                price : "1100"
            },

            {
                name: "Twin XL",
                size: "70\" x 85\"",
                price : "1300"
            },

            {
                name: "Full",
                size: "80\" x 80\"",
                price : "1500"
            },

            {
                name: "Queen",
                size: "60\" x 80\"",
                price : "1900"
            },


            {
                name: "King",
                size: "90\" x 95\"",
                price : "2100"
            },



        ],

        features: [

            {
                id: 'dual-fullbody',
                name: "Dual, Full body wave massage",
                description: "The fully adjustable, dual wave massage offers variable<br> intensity for extreme relaxation from head to toe.",
                delay: 500,
                size: '180px'
            },

            {
                id: 'controls',
                name: "Controls",
                description: "The fully adjustable, dual wave massage offers variable<br> intensity for extreme relaxation from head to toe.",
                delay: 800,
                size: '380px'
            }
        ],

        remoteFeatures: [

            {
                title: 'Capacitive-touch remote control',
                description: 'Programmable control at your finger tips.'
            },

            {
                title: 'Full massage function',
                description: 'Incorporating wave technology for head to toe relaxation.'
            },

            {
                title: 'Android and iOS App controls',
                description: 'Unrivalled connectivity and control.'
            },

            {
                title: 'USB Ports',
                description: 'Charge up to eight USB devices'
            },

            {
                title: 'Under bed lighting',
                description: 'Ambient and Functional illumination'
            },

            {
                title: 'Wallhugger® engineering',
                description: 'Lift and glide technology allows perfect positioning of your bed next to your nightstand.'
            },

            {
                title: 'Pillow tilt articulation',
                description: 'Optimal support for your head while you read, work or watch TV in bed.'
            },

            {
                title: 'Twenty Year Warranty',
                description: 'Protecting your investment and comfort for peace of mind'
            },

        ]

    }

});