import React from "react";

function Count({ sentence, n })//Destructuring recieved props
{
   console.log(n)
    document.writeln('<div style="text-align:center; color:blue; font-size:30px; margin-bottom:20px;">Frequency Of elements</div>')
    sentence = sentence.replace(/[^a-z]/g, '');//Removing all the characters except alphabets
    sentence = sentence.toLowerCase();//Converting all the alphabets to lowercase
    var noOfCountsOfEachCharacter = {};// To keep the count of no of occurences of elements
    var getCharacter, counter, actualLength, noOfCount;
  for (
    counter = 0, actualLength = sentence.length;
    counter < actualLength;
    ++counter
  ) {
    getCharacter = sentence.charAt(counter);
    //   if (!isNaN(getCharacter)) continue;
    if (getCharacter >= 'a' && getCharacter < 'z')
      noOfCount = noOfCountsOfEachCharacter[getCharacter];
    noOfCountsOfEachCharacter[getCharacter] = noOfCount ? noOfCount + 1 : 1;
  }
  var result = Object.keys(noOfCountsOfEachCharacter).sort(function(a, b) {
  return noOfCountsOfEachCharacter[b] - noOfCountsOfEachCharacter[a];
})
   document.write('<table border="3" width="200" align="center" >')
   //Printing all frequencies in alphabetical order
  console.log(typeof noOfCountsOfEachCharacter)
  for (counter = 0; counter < n; ++counter){
    document.write("<tr><td>" + result[counter] + "</td>")
    document.write("<td>" +noOfCountsOfEachCharacter[result[counter] ]+ "</td></tr>")
  }
  document.write('</table>')
  console.log(noOfCountsOfEachCharacter)
  console.log(result)
 return (
   <div>
     Frequency of elements
      </div>
  );
}
export default Count;
