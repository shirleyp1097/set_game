$(document).ready(function(){
    const shapes = ['triangle','rectangle','circle'];
    const colors = ['red','blue','green'];
    const fills = ['blank','striped','full'];

    $('div .square').each(function() {
        let shape = shapes[Math.floor(Math.random()*shapes.length)].toString();
        let color = colors[Math.floor(Math.random()*colors.length)].toString();
        let fill = fills[Math.floor(Math.random()*fills.length)].toString();
        $(this).addClass([shape,color,fill]);

    })

    // var item = items[Math.floor(Math.random()*items.length)];
});