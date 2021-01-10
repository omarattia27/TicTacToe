count = 0;

function myFunction(ID) {
    if(count%2){
        num = 'X';
        count++;
    }else{
        num = 'O';
        count++;
    }
    console.log(ID,num);
    document.getElementById(ID).value = num.toString();
    document.getElementById(ID).innerHTML = document.getElementById(ID).value;
    check_everything();
  }

function check(ID1,ID2,ID3){
    var a = document.getElementById(ID1);
    var b = document.getElementById(ID2);
    var c = document.getElementById(ID3);
    if((a.value == b.value) && (b.value == c.value) && ((a.value == 'X') || (a.value == 'O'))){
      document.getElementById("king").innerHTML = "Winner is "+a.value;
    }
}  

function check_everything(){
    check('1','2','3');
    check('1','4','7');
    check('4','5','6');
    check('7','8','9');
    check('2','5','8');
    check('3','6','9');
    check('1','5','9');
    check('3','5','7');
}