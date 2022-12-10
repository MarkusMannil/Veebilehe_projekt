/*
autor: https://itnext.io/how-to-download-files-with-javascript-d5a69b749896
võtab failinime ja data ning salvastab selle arvutisse
 */



function save(filename, data) {
    // loob dokument liiki ankru
    const anchor = document.createElement("a");
    // loeb sisse nime
    anchor.href = data;
    // loeb sisse mille peab alla laadima
    anchor.download = filename;
    // anname dokumendile ajutise ankru
    document.body.appendChild(anchor);
    // laseme selle alla tõmmata
    anchor.click();
    // ja eemaldame selle
    document.body.removeChild(anchor);

}

function play(audiofail) {
    // loo uus audio konstant ja mängi seda
    // autor: Markus Männil
    const audio = new Audio(audiofail);
    audio.play();
    console.log("music")
}

// autor: https://linuxhint.com/program-to-write-data-in-text-file-javascript/
function writeToFile(name,email,message) {
    // kasutab fs liidest
    console.log("SAIN SIIA")
    const fs = require("fs");
    const stringToWrite = "FROM: "+ name +" email: " + email + " \n message: "+ message ;

    fs.writeFile("../assets/data.txt", stringToWrite, (err) => {
        if (err) {
            console.error(err);
            return;
        }
    });
    console.log("Data has been Written");
}