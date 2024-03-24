const notaPrimeiroBi = 10;
const notaSegundoBi = 5;
const notaTerceiroBi = 1;
const notaQuartoBi = 2;

let media = (notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi)/4

 if (media >=7) {
    media += media *0.1;
 }
    console.log (`a media é ${media.toFixed(2)}`);
 
 