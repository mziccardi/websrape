
var Nightmare = require('nightmare');
var nightmare = Nightmare({  show: true })

nightmare
  .goto('http://www.hostelworld.com')
  .click('#home-search-keywords')
  .type('#home-search-keywords','Paris, France')
  .click('.suggestion')
  .click('.orange_button')
  .wait('.resultcontainer')
  .evaluate(function () {
    var dorms = document.querySelectorAll('.dormroom')
    var list = [].slice.call(dorms)
    return list.map(function(dorm){
      return dorm.outerText
    });
  })
  .end()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });
