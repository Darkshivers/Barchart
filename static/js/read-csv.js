
var lines = [];
var position = 0;
var multipleof4 = 1;
var tablechoice = 1;

function handleFiles(files) {
      // Check for the various File API support.
      if (window.FileReader) {
          // FileReader are supported.
          getAsText(files[0]);
      } else {
          alert('FileReader are not supported in this browser.');
      }
    }

    function getAsText(fileToRead) {
      var reader = new FileReader();
      // Read file into memory as UTF-8      
      reader.readAsText(fileToRead);
      // Handle errors load
      reader.onload = loadHandler;
      reader.onerror = errorHandler;
    }

    function loadHandler(event) {
      var csv = event.target.result;
      processData(csv);
    }

    function processData(csv) {
        var allTextLines = csv.split(/\r\n|\n/);
        
        for (var i=0; i<allTextLines.length; i++) {
            var data = allTextLines[i].split(',');
                var tarr = [];
                for (var j=0; j<data.length; j++) {
                    tarr.push(data[j]);
                }
                lines.push(tarr);
            
        }

       
      console.log(lines);
      positional(lines.length);
      
    }

    function errorHandler(evt) {
      if(evt.target.error.name == "NotReadableError") {
          alert("Cannot read file !");
      }
    }


    function getfourvalues() {

            document.getElementById("bchart1").innerHTML = "";
            document.getElementById("p").innerHTML = ""; 

            document.getElementById("bchart2").innerHTML = "";
            document.getElementById("p2").innerHTML = ""; 

            document.getElementById("bchart3").innerHTML = "";
            document.getElementById("p3").innerHTML = ""; 
            
            document.getElementById("bchart4").innerHTML = "";
            document.getElementById("p4").innerHTML = ""; 

            for (i = 0; i<15; i++) 
            if (lines[position] != null) { 
                heightnum = lines[position];
                console.log(lines[position]);
                whichtable(multipleof4);
                console.log(multipleof4);
                position++;
                placement(position);
            }   

            else {
                alert("End of the List!")
                return;
            }
        }

    function whichtable(standing) {
    
            if (multipleof4 <= 4){
                multipleof4++;
                createchart1(standing); 
            }

            else if (multipleof4 <= 8 && multipleof4 > 4){
                multipleof4++;
                createchart2(standing);
            }  

            else if (multipleof4 <= 12 && multipleof4 > 8) {
                multipleof4++;
                createchart3(standing);
            } 
                
            else if (multipleof4 <= 15 && multipleof4 > 8) {
                multipleof4++;  
                createchart4(standing);
            }

            if (multipleof4 >= 16){
                multipleof4 = 1;   
                createchart4(standing);         
            }
        }


  function getpreviousfour(){
        position = position - 4; 
        document.getElementById("main").innerHTML = "";
            document.getElementById("p").innerHTML = "";
            for (i = 0; i<4; i++) {   
                console.log(lines[position]);
                createchart1(lines[position]);
                createchart2(lines[position]);
                position++;                 
          } 
        }   

