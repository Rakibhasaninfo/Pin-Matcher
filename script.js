
        function emtryValue(id){
            document.getElementById('matched').value=''
        }

        function emtryText(id) {
            document.getElementById(id).innerText =''
        }

        function displayNone(id) {
            document.getElementById(id).style.display='none'
        }

        function displayBlock(id) {
            document.getElementById(id).style.display='block'
        }

        function randomNumFun() {
            var randomNum = Math.floor(1000 + Math.random() *9000);
            document.getElementById('genaret-num').value = randomNum;
            emtryValue('input-pin')
            displayNone('matched')
            displayNone('unmatched')
        }

        function btnKay(id) {
            let prevValue = document.getElementById('input-pin').value
            let kay = document.getElementById(id).innerHTML; 
            document.getElementById('input-pin').value = prevValue + kay;
        }

        function clean() {
            document.getElementById('input-pin').value ='';
        }

        function cleanlast() {
           let inputResult = document.getElementById('input-pin').value;
           let removeLastValue = inputResult.slice(0, inputResult.length -1);
           document.getElementById('input-pin').value = removeLastValue;
        }

        function submitBtn() {
            var randomNum = document.getElementById('genaret-num').value;
            typeNum = document.getElementById('input-pin').value;
            
            if (randomNum == typeNum) {
                displayBlock('matched')
            }

            else{
                displayBlock('unmatched')
            };
        }