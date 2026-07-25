let loading=0;

let timer=setInterval(function(){

loading++;

document.getElementById("bar").style.width=loading+"%";

document.getElementById("percent").innerHTML=loading+"%";

if(loading>=100){

clearInterval(timer);

document.getElementById("loader").style.display="none";

document.getElementById("main").style.display="block";

}

},25);
const message=`Hi mama,

Arike mhi If you're reading this, it means you scanned my weird QR code😂 and now I can't hide how I feel anymore.

These past few days have been some of the happiest I've had in a long time. Every conversation with you leaves me smiling, and I find myself looking forward to every message from you. You've become someone I genuinely care about.

I know we've only known each other for a short time, I just want to be honest with how I feel.

Arike will you be my woman, the one whose voice I wanna listen to in the morning and whose face I wanna see throughout my day, the person I can always call or text if I'm happy or sad, the one I'd go extra miles for, the woman behind my smile.

No matter what your answer is, thank you for making these days so special.

But I really hope you'll say yes, because I'd love to see where this journey takes us🥹❤️

Love you ❤️`;

let i=0;

function typing(){

if(i<message.length){

document.getElementById("text").innerHTML+=message.charAt(i);

i++;

setTimeout(typing,30);

}

}

typing();

function yes(){

document.getElementById("reply").innerHTML=

"<h2>🥹❤️ You just made me the happiest man alive.</h2>";

}

function maybe(){

document.getElementById("reply").innerHTML=

"<h2>😊 That's okay. I'll keep putting a smile on your face while we continue getting to know each other. ❤️</h2>";

}
