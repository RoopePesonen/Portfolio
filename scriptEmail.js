//console.log("Scripti toimii");//

const emailnappi = document.querySelector('.lahetanappi');

emailnappi.addEventListener('click', e => {
  e.preventDefault();
  sendJSON();
});

function sendJSON(){
  let xhr = new XMLHttpRequest();
  let url = "https://salpausemail.azurewebsites.net/api/HttpTriggerCSharp1?code=lWOELqiU07AqsBviOQYzuNIrQP7xoV7NV7C5W2ctgjIRcf7nXE2biw==";

  xhr.open("POST", url, true);

  xhr.setRequestHeader("Content-Type","application/json");

  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
      console.log("valmis, yhteys toimii");
    }
  };
  const nimi = document.querySelector('#nimi').value;
  const email = document.querySelector('#email').value;
  console.log("nimikentän sisältö: " + nimi);
  const viesti = document.querySelector('#viesti').value;
  console.log("viestikentän sisältö: " + viesti);
  
  var data = JSON.stringify({
    "EmailMsg": viesti, //Kirjoittaa sähköpostin sisällön
    "EmailTo": "roope.pesonen", //oma sähköposti
    "EmailName": nimi //nimi-kentän sisältö
    });
    xhr.send(data);
}