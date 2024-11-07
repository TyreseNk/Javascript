const sensorgegevensJSON='{"temperatuur": 22.5, "luchtvochtigheid": 45, "tijdstip": "2024-09-05T14:30:00Z"}';
const sensorgegevens= JSON.parse(sensorgegevensJSON);
console.log(`De temperatuur is ${sensorgegevens.temperatuur}°C, de luchtvochtigheid is ${sensorgegevens.luvhtvochtigheid}%, en de meting is gedaan op ${sensorgegevens.tijdstip} om ${sensorgegevens.tijdstip}.`)