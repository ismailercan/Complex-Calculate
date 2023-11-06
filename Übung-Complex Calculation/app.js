let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


let karekokButton = document.getElementById("karekok").onclick;
let kareButton = document.getElementById("kare");
let toplamButton = document.getElementById("toplam");
let ortalamaButton = document.getElementById("ortalama");
let maxButton = document.getElementById("max");
let minButton = document.getElementById("min");


let resultElement = document.getElementById("result");



function operationKarekok() {
    let result = parseInt(document.getElementById("number").value)
   return resultElement.innerHTML = "Result : " + Math.sqrt(result) ;
    
}


function operationKare() {
    
    let result = parseInt(document.getElementById("number").value)
    resultElement.innerHTML = "Result : " + Math.pow(result, 2) ;
    
}

function operationToplam(){
    let sum=0
    console.log(myArray)
    for(let i=0; i<myArray.length; i++){
        sum = sum + myArray[i];                
    }
    let result = sum;
    return  resultElement.innerHTML= result;
}

function operationOrtalama(){
    let sum=0
    console.log(myArray)
    for(let i=0; i<myArray.length; i++){
        sum = sum + myArray[i];                
    }
   let result=sum/(myArray.length);
  return  resultElement.innerHTML= result;
}

function operationMax(){
    console.log(...myArray);
    let max = Math.max(...myArray); // "..." Array in icindekileri disina cikariyor
    let result = max;
    return resultElement.innerHTML = result;
}

function operationMin(){
    console.log(...myArray);
    let min = Math.min(...myArray); // "..." Array in icindekileri disina cikariyor
    let result = min;
    return resultElement.innerHTML = result;
}



let myArray = []; // Boş bir dizi oluşturun

const numberInput = document.getElementById("number");

numberInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") { // Enter tuşuna basıldığını kontrol edin
        const inputValue = parseInt(number.value);
        if (!isNaN(inputValue)) {
            myArray.push(inputValue); // Diziye girilen sayıyı ekleyin
            console.log("Dizi Güncellendi:", myArray);
            number.value = ""; // Input alanını temizleyin
        }
    }
});



/*
//Karekök
for(let i=1; i<=numbers.length; i++){
    console.log(Math.sqrt(i));
}

//Kare
for(let i=1; i<=numbers.length; i++){
    console.log(Math.pow(i,2));
}

//?Tüm sayilarin toplami
for(let i=1; i<=numbers.length; i++){
    sum = sum + i;
    console.log(sum);
}

//?Ortalama
for(let i=1; i<=numbers.length; i++){
    sum = sum + i;
    console.log(sum/numbers.length);
}

//Max Min
console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
*/



