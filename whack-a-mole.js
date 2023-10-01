if (typeof window !== 'undefined') {
    const score = document.querySelector(".score span");
    const holes = document.querySelectorAll(".hole");
    const playBtn = document.querySelector(".buttons .play");
    const stopBtn = document.querySelector(".buttons .stop");

    window.addEventListener("click", () => {
        cursor.style.animation = "hit 0.1s ease";
        setTimeout(() => {
          cursor.style.removeProperty("animation");
        }, 100);
      });

    playBtn.addEventListener("click", () => {
        playBtn.style.display = "none";
        stopBtn.style.display = "block";
      
        let hole;
        let points = 0;
      
        const startGame = setInterval(() => {
          let n = Math.floor(Math.random() * 9);
          hole = holes[n];
      
          let image = document.createElement("img");
          image.setAttribute("src", "./Game images/mole.png");
          image.setAttribute("class", "mole");
          hole.appendChild(image);
      
          setTimeout(() => {
            hole.removeChild(image);
          }, 600);
        }, 700);
      
        window.addEventListener("click", (e) => {
          if (e.target === hole) score.innerText = ++points;
        });
      
        stopBtn.addEventListener("click", () => {
          clearInterval(startGame);
          stopBtn.style.display = "none";
          playBtn.style.display = "block";
          score.innerText = 0;
        });
    });
}