// import {Card} from "constructors.js";


$(document).ready(function(){

    const shapes = ['triangle','rectangle','circle'];
    const colors = ['red','blue','green'];
    const fills = ['blank','striped','full'];

    class Card {

        // constructor(color, shape, fill) {
        //     this.color = color;
        //     this.shape = shape;
        //     this.fill = fill;
        // }

        constructor() {
            this.color = colors[Math.floor(Math.random()*colors.length)].toString();
            this.shape = shapes[Math.floor(Math.random()*shapes.length)].toString();
            this.fill = fills[Math.floor(Math.random()*fills.length)].toString();
        }

        getHtml() {
            const cardDiv = document.createElement("div")
            cardDiv.innerText = this.color + ' ' + this.shape + ' ' + this.fill;
            cardDiv.classList.add("card");
            // cardDiv.dataset.value = `${this.value} ${this.suit}`
            return cardDiv
        }
    }

    $('.square').each(function() {
        let card = new Card();
        $(this).append(card.getHtml());
    })

    $('.card').click(() => console.log($(this)));

    // const text = document.querySelector(".card");
    // text.addEventListener('click', () => console.log('yo'));
});