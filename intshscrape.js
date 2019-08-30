const request = require('request')
const cheerio = require('cheerio')
const fs = require('fs')
const readlineSync = require('readline-sync')
const writeStream1 = fs.createWriteStream('Internships1.csv');
// const writeStream2 = fs.createWriteStream('mumbaiInternships2.csv');

var cityName = readlineSync.question('select city name out of mumbai , bangalore ,hyderabad, chennai, kolkata , delhi ');
console.log( 'selected city is ' + cityName );
if(cityName === 'delhi'){
  cityName='delhi%20ncr';
  console.log(cityName);
}
writeStream1.write('Internship category, Company Name,location , Duration , Stipend , Apply by \n')

 request('https://internshala.com/internships/internship-in-' + cityName + '/page-1/#', (error , response ,html) => {
  if(!error && response.statusCode==200){
    const $ = cheerio.load(html);
console.log("connected-1 " + cityName);

 console.log($('.internsip_seo_heading_container_desktop').eq(0).text());
// INTERNSHIP CATEGORY , COMPANY NAME, DURATION , STIPEND , APPLY BY
$('.individual_internship').each((i, el) => {

 const intCtg = $(el).find('.internship_meta').find('h4').eq(0).text().replace(/\s\s+/g,' ');
  const comName = $(el).find('.internship_meta').find('h4').eq(1).text().replace(/\s\s+/g,' ');
const location = $(el).find('.internship_meta').find('p').text().replace(/\s\s+/g,' ');
  const duration = $(el).find('.internship_meta').find('td').eq(1).text().replace(/\s\s+/g,' ');
  const stipend =  $(el).find('.internship_meta').find('td').eq(2).text().replace(/\s\s+/g,' ');
  const applyBy =  $(el).find('.internship_meta').find('td').eq(4).text().replace(/\s\s+/g,' ');

 // console.log(intCtg);
 // console.log(comName);
 // console.log(duration);
 // console.log(stipend);
 // console.log(applyBy);
 writeStream1.write(intCtg +',' +comName + ',' + location + ',' + duration + ',' + stipend + ',' + applyBy + '\n');

})
console.log("working-1");
//   IF ENDS here
} })




request('https://internshala.com/internships/internship-in-' + cityName + '/page-2', (error , response ,html) => {
 if(!error && response.statusCode==200){
   const $ = cheerio.load(html);
console.log("connected-2");


// INTERNSHIP CATEGORY , COMPANY NAME, DURATION , STIPEND , APPLY BY
$('.individual_internship').each((i, el) => {

const intCtg = $(el).find('.internship_meta').find('h4').eq(0).text().replace(/\s\s+/g,' ');
 const comName = $(el).find('.internship_meta').find('h4').eq(1).text().replace(/\s\s+/g,' ');
const location = $(el).find('.internship_meta').find('p').text().replace(/\s\s+/g,' ');
 const duration = $(el).find('.internship_meta').find('td').eq(1).text().replace(/\s\s+/g,' ');
 const stipend =  $(el).find('.internship_meta').find('td').eq(2).text().replace(/\s\s+/g,' ');
 const applyBy =  $(el).find('.internship_meta').find('td').eq(4).text().replace(/\s\s+/g,' ');

// console.log(intCtg);
// console.log(comName);
// console.log(duration);
// console.log(stipend);
// console.log(applyBy);
writeStream1.write(intCtg +',' +comName  + ',' + location + ',' + duration + ',' + stipend + ',' + applyBy + '\n');

})
console.log("working-2");
//   IF ENDS here
} })

request('https://internshala.com/internships/internship-in-' + cityName + '/page-3', (error , response ,html) => {
 if(!error && response.statusCode==200){
   const $ = cheerio.load(html);
console.log("connected-3");


// INTERNSHIP CATEGORY , COMPANY NAME, DURATION , STIPEND , APPLY BY
$('.individual_internship').each((i, el) => {

const intCtg = $(el).find('.internship_meta').find('h4').eq(0).text().replace(/\s\s+/g,' ');
 const comName = $(el).find('.internship_meta').find('h4').eq(1).text().replace(/\s\s+/g,' ');
const location = $(el).find('.internship_meta').find('p').text().replace(/\s\s+/g,' ');
 const duration = $(el).find('.internship_meta').find('td').eq(1).text().replace(/\s\s+/g,' ');
 const stipend =  $(el).find('.internship_meta').find('td').eq(2).text().replace(/\s\s+/g,' ');
 const applyBy =  $(el).find('.internship_meta').find('td').eq(4).text().replace(/\s\s+/g,' ');

// console.log(intCtg);
// console.log(comName);
// console.log(duration);
// console.log(stipend);
// console.log(applyBy);
writeStream1.write(intCtg +',' +comName +  ',' + location + ',' + duration + ',' + stipend + ',' + applyBy + '\n');

})
console.log("working-3");
//   IF ENDS here
} })

request('https://internshala.com/internships/internship-in-' + cityName + '/page-4', (error , response ,html) => {
 if(!error && response.statusCode==200){
   const $ = cheerio.load(html);
console.log("connected-4");

// INTERNSHIP CATEGORY , COMPANY NAME, DURATION , STIPEND , APPLY BY
$('.individual_internship').each((i, el) => {

const intCtg = $(el).find('.internship_meta').find('h4').eq(0).text().replace(/\s\s+/g,' ');
 const comName = $(el).find('.internship_meta').find('h4').eq(1).text().replace(/\s\s+/g,' ');
const location = $(el).find('.internship_meta').find('p').text().replace(/\s\s+/g,' ');
 const duration = $(el).find('.internship_meta').find('td').eq(1).text().replace(/\s\s+/g,' ');
 const stipend =  $(el).find('.internship_meta').find('td').eq(2).text().replace(/\s\s+/g,' ');
 const applyBy =  $(el).find('.internship_meta').find('td').eq(4).text().replace(/\s\s+/g,' ');

console.log(intCtg);
console.log(comName);
console.log(duration);
console.log(stipend);
console.log(applyBy);
writeStream1.write(intCtg +',' +comName + ',' + location + ',' + duration + ',' + stipend + ',' + applyBy + '\n');

})
console.log("working-4");
//   IF ENDS here
} })
