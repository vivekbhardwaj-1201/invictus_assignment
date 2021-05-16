import React from "react";
function Counts({sentence,n}) {
    // console.log(sentence.length);
    document.writeln('Frequency Of elements')
    sentence = sentence.replace(/[^a-z]/g, '');
  sentence = sentence.toLowerCase();
    const lowerAlph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var noOfCountsOfEachCharacter = {};
    var getCharacter, counter, actualLength, noOfCount;
    for (
    counter = 0, actualLength = sentence.length;
    counter < actualLength;
    ++counter
    ){
    getCharacter = sentence.charAt(counter);
    //   if (!isNaN(getCharacter)) continue;
      if (getCharacter>='a' && getCharacter <'z')
    noOfCount = noOfCountsOfEachCharacter[getCharacter];
    noOfCountsOfEachCharacter[getCharacter] = noOfCount ? noOfCount + 1 : 1;
  }
  document.write('<table border="1">')
  // for (getCharacter in noOfCountsOfEachCharacter) {
  //     if (getCharacter !== " ") {
  //         document.writeln("<tr><td>" + getCharacter + "</td>")
  //         document.writeln("<td>" + noOfCountsOfEachCharacter[getCharacter] + "</td></tr>")
  //   }
  //   }
    for (counter = 0; counter < n; ++counter){
        var sortChar = lowerAlph[counter];
         document.write("<tr><td>" + sortChar + "</td>")
        document.write("<td>" + noOfCountsOfEachCharacter[sortChar] + "</td></tr>")
    }
  document.write('</table>')
 return (
      <div>Frequency Of Elements</div>
  );
}
export default Counts;
