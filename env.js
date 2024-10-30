//ortam değişkenleri sayesinde uygulamayı güvenl esnek ve taşınabilir yapmak mümkün 
//örn  
// PORT=3000
// API_URL=https://api.example.com
// DB_HOST=localhost
console.log(process.env.NAME);
console.log(process.env.PROFESSION);
console.log("Im a starting a new series on", process.env.COURSES)