/* 
    Payton Lutterman
    Project Portal
    Last Updated 12-5-23
*/

let currentDate = new Date().toLocaleDateString();
let date = document.querySelector("#date");

date.textContent = currentDate;

let currentYear = new Date().getFullYear();
let year = document.querySelector("#year");

year.textContent = currentYear;