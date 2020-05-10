function rot13(str) {

const rot13Table = {A:'N',B:'O',C:'P',D:'Q',E:'R',F:'S',G:'T',H:'U',I:'V',J:'W',K:'X',L:'Y',M:'Z',N:'A',O:'B',P:'C',Q:'D',R:'E',S:'F',T:'G',U:'H',V:'I',W:'J',X:'K',Y:'L',Z:'M'};
  str  = str.split("");

  str = str.map(value=>rot13Table[value]!=undefined?rot13Table[value]:value);
  str = str.join("");
 

  return str;
}

rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT");
