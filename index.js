

/*for(i=0;i<7;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", basma);
    function basma(e) {
       switch (document.querySelector("button").textContent) {
        case value:
            
            break;
       
        default:
            break;
       }

    }

}*/


const ses1 = document.querySelector("#ses1");
const ses2 = document.querySelector("#ses2");
const ses3 = document.querySelector("#ses3");
const ses4 = document.querySelector("#ses4");
const ses5 = document.querySelector("#ses5");
const ses6 = document.querySelector("#ses6");
const ses7 = document.querySelector("#ses7");

for (let i = 0; i < 7; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", basmaeylemi)


    function basmaeylemi(e){

        let buttonInner=this.innerHTML
        switch (buttonInner) {
            case "w": ses4.play();
                break;
            case "a": ses5.play();
                break;
            case "s": ses6.play();
                break;
            case "d": ses7.play();
                break;
            case "j": ses1.play();
                break;
            case "l": ses2.play();
                break;
            case "k": ses3.play();
                break;
        }
        buttonAnimation(buttonInner)

    }
    

}




    

document.addEventListener("keypress", basmaeylemi2)
    function basmaeylemi2(e) {

        let key = e.key;
        switch (key) {
            case "w": ses4.play();
                break;
            case "a": ses5.play();
                break;
            case "s": ses6.play();
                break;
            case "d": ses7.play();
                break;
            case "j": ses1.play();
                break;
            case "l": ses2.play();
                break;
            case "k": ses3.play();
                break;
        }

        buttonAnimation(key)
    }


function buttonAnimation(currentKey){
    var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed")
    }, 100);
}



