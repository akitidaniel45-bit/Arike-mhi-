// ====================================
// Daniel ❤️ Arike
// Premium Proposal Website
// Part 1
// ====================================

// Elements
const loader = document.getElementById("loader");
const main = document.getElementById("main");
const bar = document.getElementById("bar");
const percent = document.getElementById("percent");
const text = document.getElementById("text");
const hearts = document.getElementById("hearts");

let progress = 0;

// Loading Screen
const loading = setInterval(() => {

    progress++;

    bar.style.width = progress + "%";
    percent.innerHTML = progress + "%";

    if (progress >= 100) {

        clearInterval(loading);

        setTimeout(() => {

            loader.style.display = "none";
            main.style.display = "block";

            typeMessage();

            createHeart();
            setInterval(createHeart, 700);

        }, 500);

    }

}, 25);

// Proposal Message

const message = `Hi mama ❤️

Arike mhi,

If you're reading this, it means you scanned my weird QR code 😂 and now I can't hide how I feel anymore.

These past few days have been some of the happiest I've had in a long time.

Every conversation with you leaves me smiling and I find myself looking forward to every message.

You've become someone I genuinely care about.

I know we've only known each other for a short time, but I want to be honest with how I feel.

Arike...

Will you be my woman?

The one whose voice I want to hear every morning.

The one I'd gladly go the extra mile for.

The woman behind my smile.

No matter what your answer is...

Thank you for making these days so special.

I truly hope you'll say yes. ❤️

Love,
Daniel ❤️`;

let index = 0;

function typeMessage() {

    if (index < message.length) {

        text.innerHTML += message.charAt(index);

        index++;

        setTimeout(typeMessage, 28);

    }

}

// Floating Hearts

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = ["❤️","💕","💖","💗","💘"][Math.floor(Math.random()*5)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration = (5 + Math.random() * 4) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 9000);

}

// ====================================
// Part 2
// Buttons + Confetti
// ====================================

const yesBtn = document.getElementById("yesBtn");
const maybeBtn = document.getElementById("maybeBtn");
const reply = document.getElementById("reply");

// YES button
yesBtn.addEventListener("click", () => {

    // Confetti
    if (typeof confetti === "function") {
        confetti({
            particleCount: 250,
            spread: 180,
            origin: { y: 0.6 }
        });
    }

    reply.innerHTML = `
        <h2>🥹❤️ She said YES!!</h2>
        <p>
        Thank you for giving us a chance.<br><br>
        I promise to keep choosing you,
        respecting you,
        making you smile,
        and creating beautiful memories together.
        ❤️
        </p>
    `;

    yesBtn.disabled = true;
    maybeBtn.disabled = true;

});

// MAYBE button
maybeBtn.addEventListener("click", () => {

    reply.innerHTML = `
        <h2>😊 That's Okay ❤️</h2>
        <p>
        I don't want to rush something beautiful.<br><br>
        Let's keep laughing,
        keep talking,
        keep learning about each other,
        and see where this journey takes us.
        ❤️
        </p>
    `;

});

// Small sparkle effect
setInterval(() => {

    document.querySelectorAll(".glass").forEach(card => {

        card.style.boxShadow =
            "0 10px " +
            (35 + Math.random() * 20) +
            "px rgba(255,192,203,.35)";

    });

}, 1800);
