var fs = require('fs');
var json = JSON.parse(fs.readFileSync('/jsontest.json', 'utf8'));
const Counties = json
export default Counties
