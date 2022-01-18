class Form{
    constructor(){}
    display(){
        var title = createElement('h2');
        title.html("game cars");
        title.position(130,0);

        var input = createInput('name');
        input.position(130,160);

        var button = createButton('play');
        button.position(150,200);

        var msg = createElement('h2');
        msg.position(130,160);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playerCount+= 1;
            player.update(name);
            player.updateCount(playerCount);
            msg.html('hello '+ name);
        })
    }
}