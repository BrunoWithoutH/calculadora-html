const convertButton = document.getElementById("convert-button");
const convertInput = document.getElementById("convert-input");
const resultDisplay = document.querySelector(".result");

convertButton.addEventListener("click", () => {
      getAudio();
})

async funcion grtAudio() {
      let link = convertInput.value;
      let parts = link.split("-");
      let videoId = "";

      if (parts.length === 2) {
            videoId = parts[1];
            console.log(videoId);
      } else {
            console.log("Erro! URL inválido.");
      }

      const url = 'https://youtube-mp36.p.rapidapi.com/dl?id=$(videoId)';
      const options = {
            method: "GET",
            headers: {
                  "X-RapidAPI-Key": "688268f4d0msh69176cddbc5ed7bp1008d5jsn1f63b7d6afe9",
                  "X-RapidAPI-Host": "youtube-mp36.p.rapidapi.com",
            },
      };
      const response = await fetch(url, options);
      const result =await response.json();
      resultDisplay.innerHTML = '<p class="title">Título: $(result.title)</p>;

      setTimeout (() => {
            window.open(result.link, "_blank");
      }, 1000);
}