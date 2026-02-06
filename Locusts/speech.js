const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.lang = 'en-US'; 

recognition.interimResults = true;
recognition.continuous = true;

// HTML element (id="overlay") where the recognized speech text appears on screen
const transcriptArea = document.getElementById("overlay");

recognition.onresult = function(event) {
    const rawTranscript = event.results[event.results.length - 1][0].transcript;
    let transcript = rawTranscript;
    // the below inside "(...)" was from this format "xxx".replace("", "_") in this link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
    // g means replace all instances, i means ignore case (learned from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
    // /./ gi is learned from MDN regex quantifiers
    // . means matches any single character 
    // This creates an error effect, where all speech is "lcsts drkndd thy skyy"
    transcript = transcript.replace(/./gi, "lcsts drkndd thy skyy");
    // This shows the live (interim) transcript in the textarea
    transcriptArea.textContent = transcript;
};

recognition.onerror = function(event) {
    console.error('Speech recognition error:', event.error);
};

recognition.start();


