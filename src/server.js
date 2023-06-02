const express = require('express')
const cors = require('cors')
const app = express();
const fs1 = require('node:fs')
const stream = require('stream')
const concat = require('stream-concat');
const fs = require("fs");

app.use(cors());
app.use(express.json());

port = 3080;

app.listen(port, () => {
  console.log("Server listening on to port::" + port);
});

const path = require('path');
const imageDire = "C:\\IdeaProjects\\UF1_REC_Ismael_Naciri_Fernandez\\src\\UF1_ExamenAaD\\Imatges";
const destineDire = "C:\\IdeaProjects\\UF1_REC_Ismael_Naciri_Fernandez\\src\\UF1_ExamenAaD\\Documents\\Docs1";
const copyToFile = "C:\\IdeaProjects\\UF1_REC_Ismael_Naciri_Fernandez\\src\\UF1_ExamenAaD\\Documents\\FitxerOrigen.txt";
const fitxerIsmaUrl = "C:\\IdeaProjects\\UF1_REC_Ismael_Naciri_Fernandez\\src\\UF1_ExamenAaD\\Documents\\FitxerIsma.txt";
const FitxerDesti = "C:\\IdeaProjects\\UF1_REC_Ismael_Naciri_Fernandez\\src\\UF1_ExamenAaD\\Documents\\Docs1\\FitxerDesti.txt";


app.post("/api/ex1", (req, res) => {
  const arxius = fs.readSync(imageDire);
  arxius.forEach((arxiu) => {
    const ruta = imageDire + "/" + arxiu;
    const stats = fs.statSync(ruta);
    if (!stats.isDirectory) {
      const readableStream = fs.createReadStream(ruta, { highWaterMark: 8192 });
      console.log(`${path.basename(ruta)}`);

      readableStream.on('data', (chunk) => {
        console.log(chunk);
      })
    }
  })
})


app.post("/api/ex2", (req, res) => {
  const arxius = fs.readSync(imageDire);
  arxius.forEach((arxiu) => {
    const ruta = imageDire + "/" + arxiu;
    const stats = fs.statSync(ruta);
    if (!stats.isDirectory && arxiu.startsWith('a')
      && arxiu.startsWith('A') && arxiu.endsWith('.jpg') ) {
      const readableStream = fs.createReadStream(ruta, { highWaterMark: 8192 });
      console.log(`${path.basename(ruta)}`);

      readableStream.on('data', (chunk) => {
        console.log(chunk);
      })
    } else {
      console.log("AAAAAAHH!!!")
    }
  })
})


app.post("/api/ex3", (req, res) => {
  fs.readFile(fitxerIsmaUrl, 'utf-8', (err, data) => {
    if (err)
      throw err;

    fs.appendFile(copyToFile, data, (err) => {
      if (err)
        throw err;
    })
  })

  fs.readFile(copyToFile, 'utf-8', (err, data) => {
    if (err)
      throw err;

    fs.writeFile(FitxerDesti, data, (err) => {
      if (err)
        throw err;
    })
  })
})

const sourceURL = "C:\\IdeaProjects\\UF1_REC_Ismael_Naciri_Fernandez";

app.post("/api/ex4", (req, res) => {
  const endURL = "C:\\IdeaProjects\\UF1_REC_Ismael_Naciri_Fernandez\\RECU_ISMA_NACIRI.txt"

  if (fs.existsSync(endURL)) {
    console.log("Ja existeix pallús!")
    readAllSource();
  }
  else {
    fs.writeFileSync(sourceURL, "41596613D");
    console.log("S'ha creat correctamen.")
    readAllSource();
  }
})

function readAllSource() {
  fs.readdir(sourceURL, (err, files) => {
    files.forEach(file => {
      let fileDetails = fs.lstatSync(path.resolve(sourceURL, file));

      if (fileDetails.isDirectory())
        console.log("Directory: " + file);
      else {
        console.log("File: " + file);
      }
    })
  })
}
