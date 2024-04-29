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

      const url = 'https://coolguruji-youtube-to-mp3-download-v1.p.rapidapi.com/?id=$(videoId)'; 
      const options = { 	
            method: 'GET', 	
            headers: {
                  'X-RapidAPI-Key': 'fb1fdb8239mshd9f97b173f6a38bp1a48a2jsna9046c88382d',
                  'X-RapidAPI-Host': 'coolguruji-youtube-to-mp3-download-v1.p.rapidapi.com' 	
            } 
      }; 
      try { 	
            const response = await fetch(url, options); 	
            const result = await response.text();
            resultDisplay.innerHTML = '<p class="title">Título: $(result.title)</p>;

            console.log(result); 
      } 
      catch (error) { 	
            console.error(error); 
      }
}