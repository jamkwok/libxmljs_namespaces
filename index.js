const libxmljs = require('libxmljs');
const xml = `<OTA_HotelRateAmountNotifRQ xmlns:a="http://www.opentravel.org/OTA/2003/05" xmlns:b="http://www.opentravel.org/OTA/2003/06" EchoToken="20130410081421">
  <a:POS>
    <Source>ya</Source>
  </a:POS>
  <b:POS>
    <Source>blah</Source>
  </b:POS>
</OTA_HotelRateAmountNotifRQ>`

console.log(xml);
var xmlDoc = libxmljs.parseXml(xml);

// xpath queries
var gchild = xmlDoc.get('//Source');
console.log(xmlDoc.get('//Source').text()); "No Name Space"
console.log(xmlDoc.get('a:POS', {a: 'http://www.opentravel.org/OTA/2003/05'}).child(1).text());
console.log(xmlDoc.get('b:POS', {b: 'http://www.opentravel.org/OTA/2003/06'}).child(1).text());

