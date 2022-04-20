import React from 'react'

function J04_Loops() {

    function loopExample(){
        console.log("******Section 01******")

        let whl_num = 5;

        while(whl_num > 0){
            console.log("The While Loop is working and the flag is: " + whl_num);
            whl_num--;
        }
        
        //Do while loop (The code will run at least once)
        let dwh_num = 0;
        
        do{
            console.log("The Do While Loop is working and the flag is: " + dwh_num);
            dwh_num++;
        }while(dwh_num < 5)

        //For Loop
        for(let i = 0; i<5; i++){
            console.log("The For Loop is working and the flag is: " + i);
        }
  
        return "Console Log Section 01"
      }

      function strProperties(){
        console.log("******Section 02******")

        const str_text = "The Dawn of a New Age";
        const str_text2 = "     The Dawn of a New Age";
        
        console.log(str_text);
        console.log("The number of chars in the string is: ");
        console.log(str_text.length);
        console.log(str_text.toLowerCase());
        console.log(str_text.toUpperCase());
        console.log(str_text.charAt(4));
        console.log(str_text.indexOf("N"));
        
        console.log(str_text2);
        console.log(str_text2.trim());
        console.log(str_text2.startsWith("the dawn"));
        console.log(str_text2.trim().toLowerCase().startsWith("the dawn"));
        console.log(str_text2.includes("Dawn"));
        console.log(str_text2.slice(0,13));
        console.log(str_text2.slice(-3));

        return "Console Log Section 02"
      }

      function templateLiterals(){
        console.log("******Section 03******")

        const tl_str1 = "Without Template Literals ";
        const tl_str2 = "concatenation is needed.";
        console.log(tl_str1 + tl_str2);
        
        const tl_str3 = 36;
        const tl_str4 = 18;
        const tl_str5 = `With Template Literals we have ${tl_str3} + ${tl_str4} equals to ${36+18}`;

        console.log(tl_str5);

        return "Console Log Section 03"
      }

      function arrProperties(){
        console.log("******Section 04******")

        let array_names1 = ["Gideon", "Dave", "Solomon", "Patricia", "Matias"];
        let array_names2 = ["Megumi", "Albert", "Tina", "Patie"];
        
        console.log("Arrays Properties and Methods");
        console.log(array_names1.length);
        
        let array_concat = array_names1.concat(array_names2);
        console.log(array_concat);
        console.log(array_concat.reverse());
        
        //Add or remove on the beginning of the array
        array_concat.unshift("Sakura");
        console.log(array_concat);
        array_concat.shift();
        console.log(array_concat);
        
        //Add or remove on the end of the array
        array_concat.push("Sakura");
        console.log(array_concat);
        array_concat.pop();
        console.log(array_concat);
        
        //Grab from any position of the array
        const array_splice = array_concat.splice(2,4);
        
        console.log("Array Splice: From position X grab N values");
        console.log(array_concat);
        console.log(array_splice);

        return "Console Log Section 04"
      }

  return (
    <div className='container'>
        <div className='row'>
            <h2>Loops, Properties and Template Literals: </h2>
            <div className='col-sm-10'>
                <p>1- While, Do While and For Loops: </p>
                <h6>Code: </h6>
                <img src='http://localhost:3000/img/j04_Code01.png' alt='Loops'></img>
                <h6>Result: </h6>
                <strong>{loopExample()}</strong>
                <br></br>
                <br></br>

                <p>2- String Properties and Methods: </p>
                <h6>Code: </h6>
                <img src='http://localhost:3000/img/j04_Code02.png' alt='Strings'></img>
                <h6>Result: </h6>
                <strong>{strProperties()}</strong>
                <br></br>
                <br></br>

                <p>3- Template Literals: </p>
                <h6>Code: </h6>
                <img src='http://localhost:3000/img/j04_Code03.png' alt='Templates'></img>
                <h6>Result: </h6>
                <strong>{templateLiterals()}</strong>
                <br></br>
                <br></br>

                <p>4- Arrays Properties and Methods: </p>
                <h6>Code: </h6>
                <img src='http://localhost:3000/img/j04_Code04.png' alt='Arrays'></img>
                <h6>Result: </h6>
                <strong>{arrProperties()}</strong>
                <br></br>
                <br></br>

                <a href='http://localhost:3000/'>Return to home page</a>
            </div>
        </div>
    </div>
  )
}

export default J04_Loops