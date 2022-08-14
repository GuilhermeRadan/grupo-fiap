import {Card} from './Card.js'

export function nivel1 (){

    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    var card1 = new Card(ctx.fillStyle = '#D3D3D3', ctx.fillRect(130, 150, 100, 100));
    var card2 = new Card(ctx.fillStyle = '#BA55D3', ctx.fillRect(240, 150, 100, 100));
    var card3 = new Card(ctx.fillStyle = '#DC143C', ctx.fillRect(350, 150, 100, 100));
    var card4 = new Card(ctx.fillStyle = '#DC143C', ctx.fillRect(130, 260, 100, 100));
    var card5 = new Card(ctx.fillStyle = '#DC143C', ctx.fillRect(240, 260, 100, 100));
    var card6 = new Card(ctx.fillStyle = '#DC143C', ctx.fillRect(350, 260, 100, 100));
    var card7 = new Card(ctx.fillStyle = '#DC143C', ctx.fillRect(130, 370, 100, 100));
    var card8 = new Card(ctx.fillStyle = '#DC143C', ctx.fillRect(240, 370, 100, 100));
    var card9 = new Card(ctx.fillStyle = '#D3D3D3', ctx.fillRect(350, 370, 100, 100));
    
    let listCards = [card1, card2, card3, card4, card5, card6, card7, card8, card9]

    return listCards;

}



