for(var i=0;i<document.querySelectorAll(".b").length;i++)
{
    document.querySelectorAll(".b")[i].addEventListener("click", function(){
        var ch = this.innerHTML;
        switch(ch)
        {
            case "A":
                var a1 = new Audio("./tom-1.mp3");
                a1.play();
                break;
            case "B":
                var a2 = new Audio("./tom-3.mp3");
                a2.play();
                break;
            case "C":
                var a3 = new Audio("./crash.mp3");
                a3.play();
                break;
            case "D":
                var a4 = new Audio("./kick-bass.mp3");
                a4.play();
                break;
            case "E":
                var a5 = new Audio("./snare.mp3");
                a5.play();
                break;
            case "F":
                var a6 = new Audio("./tom-4.mp3");
                a6.play();
                break;
            case "G":
                var a7 = new Audio("./tom-2.mp3");
                a7.play();
                break;
            default:
                console.log("Button does not exist...")
        }

    });
}


document.addEventListener("keypress",function(event){
    keysound(event.key);
});
function keysound(key)
{
    switch(key)
    {
        case "A":
        case "a":
            var aa = new Audio("./tom-1.mp3");
            aa.play();
            break;
        case "B":
        case "b":
            var ab = new Audio("./tom-3.mp3");
            ab.play();
            break;
        case "C":
        case "c":
            var ac = new Audio("./crash.mp3");
            ac.play();
            break;
        case "D":
        case "d":
            var ad = new Audio("./kick-bass.mp3");
            ad.play();
            break;
        case "E":
        case "e":
            var ae = new Audio("./snare.mp3");
            ae.play();
            break;
        case "F":
        case "f":
            var af = new Audio("./tom-4.mp3");
            af.play();
            break;
        case "G":
        case "g":
            var ag = new Audio("./tom-2.mp3");
            ag.play();
            break;
        default:
            console.log("Invalid keypress...");
    }
}