
$("h2").click(function(){

    $(this).next().removeClass(".hamada").slideToggle(function(){
        $(".container p").not($(this)).slideUp()
    })

})

function countDown(){


    let CurrentDate = new Date().getTime();

    let partyDate = new Date(2021 , 12 , 17);

    let timeLeft = partyDate - CurrentDate;

    let s = Math.floor(timeLeft / 1000)
    let m = Math.floor(s / 60);
    let h = Math.floor(m / 60);
    let d = Math.floor(h / 24);

    h %= 24;
    m %= 60;
    s %= 60;

    $("#days").html(d);
    $("#hours").html(h);
    $("#mins").html(m);
    $("#seconds").html(s);

    setTimeout(countDown, 1000);

}
countDown()



function char(){

    let max = 10;


    $("#textArea").keyup(function(){

        let textLenght = $("#textArea").val().length;

        let char = max - textLenght;

        if(char >= 0){

            $("#charLeft").html(char + " " +  "Character Reamining")

        }
        else if (char <= 0){
            $("#charLeft").html("your available character finished")
        }


    })

}
char()


$(".fa-bars").click(function(){

    listWidth = $(".list-unstyled").outerWidth()

    currentLeft = $(".sideBar").css("left");


    if(currentLeft == "0px"){
        $(".sideBar").animate({left : -listWidth} , 1000)
        $("#mainIcon").removeClass("far fa-times-circle")
        $("#mainIcon").addClass("fas fa-bars")
        $(".list-unstyled").slideUp(800)
        $(".hiddenIcons").show("500")


    }
    else{
        $(".sideBar").animate({left : `0px`} , 1000)
        $("#mainIcon").removeClass("fas fa-bars")
        $("#mainIcon").addClass("far fa-times-circle")
        $(".list-unstyled").slideDown(1300)
        $(".hiddenIcons").hide("500")

    }


})

$(document).ready(function(){

    $("#loading , .spinner" ).fadeOut(1000 , function(){
        $("#loading").addClass("d-none")
    })

    listWidth = $(".list-unstyled").outerWidth()

    $(".sideBar").animate({left : -listWidth} , 0)
    $(".list-unstyled").slideUp(1000)


})