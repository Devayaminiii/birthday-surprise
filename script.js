/* =====================================================
   LOADING SCREEN
===================================================== */

let progress = 0;

let progressBar = document.getElementById("progressBar");

let loadingText = document.getElementById("loadingText");


let loading = setInterval(function(){


    progress += 1;


    progressBar.style.width = progress + "%";


    loadingText.innerHTML = progress + "%";



    if(progress >= 100){


        clearInterval(loading);



        document.getElementById("loadingScreen")
        .style.display="none";


        startMusic();


    }


},40);




/* =====================================================
   BACKGROUND MUSIC
===================================================== */


const bgMusic = document.getElementById("bgMusic");

const musicBtn = document.getElementById("musicBtn");


let musicPlaying = false;



function startMusic(){


    bgMusic.volume = 0.4;


    bgMusic.play()
    .then(()=>{


        musicPlaying=true;

        musicBtn.innerHTML="🔊";


    })

    .catch(()=>{


        musicPlaying=false;

        musicBtn.innerHTML="🔇";


    });


}



musicBtn.onclick=function(){


    if(musicPlaying){


        bgMusic.pause();


        musicBtn.innerHTML="🔇";


        musicPlaying=false;



    }

    else{


        bgMusic.play();


        musicBtn.innerHTML="🔊";


        musicPlaying=true;


    }


};




/* =====================================================
   PASSWORD SYSTEM
===================================================== */


const correctPassword="ashuu";



const passwordInput=
document.getElementById("password");


const unlockBtn=
document.getElementById("unlockBtn");


const hintBtn=
document.getElementById("hintBtn");


const hintText=
document.getElementById("hintText");




hintBtn.onclick=function(){


    hintText.innerHTML=

    "Hint: Your brother's special name ❤️";


};




unlockBtn.onclick=function(){



    let enteredPassword =
    passwordInput.value;



    if(enteredPassword === correctPassword){



        unlockSuccess();



    }


    else{


        passwordInput.value="";


        passwordInput.placeholder=
        "Wrong Password ❌";


    }


};




/* =====================================================
   PASSWORD SUCCESS
===================================================== */


function unlockSuccess(){


    document.getElementById("passwordPage")
    .style.display="none";



    document.getElementById("giftSection")
    .style.display="flex";



    createConfetti();



    setTimeout(function(){



        openGift();



    },3000);



}






/* =====================================================
   GIFT OPENING
===================================================== */


function openGift(){



    const gift =
    document.getElementById("giftBox");



    gift.innerHTML="✨🎁✨";



    gift.style.transform=
    "scale(1.5)";



    setTimeout(function(){



        document.getElementById("giftSection")
        .style.display="none";



        document.getElementById("surprisePage")
        .style.display="flex";



    },2000);



}

/* =====================================================
   SURPRISE POPUPS
===================================================== */


const videoCard =
document.getElementById("videoCard");


const wishCard =
document.getElementById("wishCard");


const photoCard =
document.getElementById("photoCard");


const aboutCard =
document.getElementById("aboutCard");



const videoPopup =
document.getElementById("videoPopup");


const wishPopup =
document.getElementById("wishPopup");


const photoPopup =
document.getElementById("photoPopup");


const aboutPopup =
document.getElementById("aboutPopup");



const closeButtons =
document.querySelectorAll(".close");




videoCard.onclick=function(){

    videoPopup.style.display="flex";

};



wishCard.onclick=function(){

    wishPopup.style.display="flex";

};



photoCard.onclick=function(){

    photoPopup.style.display="flex";

};



aboutCard.onclick=function(){

    aboutPopup.style.display="flex";

};





closeButtons.forEach(function(btn){


    btn.onclick=function(){


        videoPopup.style.display="none";

        wishPopup.style.display="none";

        photoPopup.style.display="none";

        aboutPopup.style.display="none";


    };


});





window.onclick=function(e){


    if(e.target.classList.contains("popup")){


        e.target.style.display="none";


    }


};






/* =====================================================
   VOICE NOTE
===================================================== */


const voiceBtn =
document.getElementById("voiceBtn");


const voiceAudio =
document.getElementById("voiceAudio");



let voicePlaying=false;



voiceBtn.onclick=function(){



    if(voicePlaying){



        voiceAudio.pause();



        voiceBtn.innerHTML=
        "▶ Play Voice";



        voicePlaying=false;



    }


    else{


        stopAllSongs();


        voiceAudio.play();



        voiceBtn.innerHTML=
        "⏸ Pause Voice";



        voicePlaying=true;



    }



};





voiceAudio.onended=function(){


    voiceBtn.innerHTML=
    "▶ Play Voice";


    voicePlaying=false;


};







/* =====================================================
   SONG PLAYER
===================================================== */


const songButtons =
document.querySelectorAll(".songBtn");



const songPlayer =
document.getElementById("songPlayer");



let currentButton=null;



songButtons.forEach(function(button){



    button.onclick=function(){



        let song =
        button.getAttribute("data-song");




        if(currentButton===button && !songPlayer.paused){



            songPlayer.pause();



            button.innerHTML="▶";



        }


        else{



            stopAllSongs();



            songPlayer.src=song;



            songPlayer.play();



            button.innerHTML="⏸";



            currentButton=button;



        }



    };


});






function stopAllSongs(){



    songPlayer.pause();



    songPlayer.currentTime=0;



    songButtons.forEach(function(btn){


        btn.innerHTML="▶";


    });



    voiceAudio.pause();



    voiceAudio.currentTime=0;



    voiceBtn.innerHTML="▶ Play Voice";



    voicePlaying=false;



}





songPlayer.onended=function(){



    if(currentButton){


        currentButton.innerHTML="▶";


    }


};

/* =====================================================
   FINAL SURPRISE BUTTON
===================================================== */


const letterBtn =
document.getElementById("letterBtn");



letterBtn.onclick=function(){



    document.getElementById("musicSection")
    .style.display="none";



    document.getElementById("letterSection")
    .style.display="flex";



    startLetter();



    startFireworks();



};





/* =====================================================
   LETTER TYPING EFFECT
===================================================== */


const message =

"Dear Ashuu ❤️\n\n" +

"Happy Birthday to my amazing brother.\n\n" +

"You are not just my brother,\n" +

"you are my biggest support,\n" +

"my protector and my best friend.\n\n" +

"Thank you for every smile,\n" +

"every memory and every moment.\n\n" +

"May your life always be filled with\n" +

"happiness, success and endless love.\n\n" +

"Always stay happy.\n\n" +

"Love you forever ❤️\n\n" +

"From Your Sister 💖";



let letterIndex=0;



function startLetter(){



    const textBox =
    document.getElementById("typingText");



    textBox.innerHTML="";



    letterIndex=0;



    let typing =
    setInterval(function(){



        textBox.innerHTML +=
        message.charAt(letterIndex);



        letterIndex++;



        if(letterIndex>=message.length){



            clearInterval(typing);



        }



    },60);



}







/* =====================================================
   CONFETTI SYSTEM
===================================================== */


function createConfetti(){



    const container =
    document.getElementById("confetti");



    for(let i=0;i<120;i++){



        let piece =
        document.createElement("div");



        piece.className=
        "confetti-piece";



        piece.style.left =
        Math.random()*100+"vw";



        piece.style.animationDuration =
        (Math.random()*3+2)+"s";



        piece.style.background =
        randomColor();



        container.appendChild(piece);



    }



}






function randomColor(){



    let colors=[

    "#ff0080",

    "#ffd700",

    "#00ffff",

    "#ff6347",

    "#ffffff"

    ];



    return colors[
    Math.floor(Math.random()*colors.length)
    ];



}






/* =====================================================
   FIREWORKS
===================================================== */


function startFireworks(){



    const canvas =
    document.getElementById("fireworks");



    const ctx =
    canvas.getContext("2d");



    canvas.width =
    window.innerWidth;



    canvas.height =
    window.innerHeight;



    let particles=[];




    function createFirework(){



        let x =
        Math.random()*canvas.width;



        let y =
        Math.random()*canvas.height/2;



        for(let i=0;i<50;i++){



            particles.push({

                x:x,

                y:y,

                dx:(Math.random()-0.5)*8,

                dy:(Math.random()-0.5)*8,

                life:100

            });



        }



    }






    function animate(){



        ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
        );



        particles.forEach(function(p){



            ctx.beginPath();



            ctx.arc(
            p.x,
            p.y,
            3,
            0,
            Math.PI*2
            );



            ctx.fillStyle =
            "#ffcc00";



            ctx.fill();



            p.x += p.dx;

            p.y += p.dy;

            p.life--;



        });





        particles =
        particles.filter(
        p=>p.life>0
        );



        requestAnimationFrame(animate);



    }



    setInterval(
    createFirework,
    900
    );



    animate();



}




/* =====================================================
   RESIZE FIREWORK CANVAS
===================================================== */


window.onresize=function(){


    const canvas =
    document.getElementById("fireworks");


    if(canvas){


        canvas.width =
        window.innerWidth;


        canvas.height =
        window.innerHeight;


    }


};


// CONTINUE TO MUSIC BUTTON FIX

window.addEventListener("load", function(){

    const musicPageBtn = document.getElementById("musicPageBtn");

    console.log("Button found:", musicPageBtn);


    if(musicPageBtn){

        musicPageBtn.addEventListener("click", function(){

            console.log("Continue button clicked");


            document.getElementById("surprisePage").style.display = "none";


            document.getElementById("musicSection").style.display = "flex";


            window.scrollTo(0,0);


        });

    }

});
