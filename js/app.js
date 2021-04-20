"use strict"

function calculer() 
{ 
    let a = document.getElementById("output").value 
    let b = eval(a) 
    document.getElementById("output").value = b 
} 

function afficher(val) 
{ 
    document.getElementById("output").value+=val 
} 

function effacer() 
{ 
    document.getElementById("output").value = "" 
} 