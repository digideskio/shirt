
// takes string
// takes stringoutputs color
var colorClaim = require("./color-claim.json")

String.prototype.hashCode = function() {
  var hash = 0, i, chr, len;
  if (this.length === 0) return hash;
  for (i = 0, len = this.length; i < len; i++) {
    chr   = this.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};


var combo = module.exports = function(str){
  var hash = str.hashCode()
  var ring = colorClaim

  // change negative to positive
  if (hash < 0) hash = hash + (2 *( -1 * hash))
  
  // UNICORN?? FYI - this thing is extreemly rare
  if (ring.length > hash) console.log("rare")

  var index = hash % ring.length
  return ring[index]
}
