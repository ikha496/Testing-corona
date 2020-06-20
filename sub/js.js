function addval() {
            var sum = 0;
   
var inputElements = document.getElementsByClassName("val");
for(var i=0; inputElements[i]; ++i){
      if(inputElements[i].checked){
           sum = sum + Number(inputElements[i].value);
      }
}
    

    if(sum==0)
        {
            window.open("../result none.html","_self");
        }
    else if(sum<=4)
        {
            window.open("../result low.html","_self");

        }
    else if (sum==5)
        {
            window.open("../result medium.html","_self");
        }
    else if (sum>=5)
        {
            window.open("../result high.html","_self");
        }
}
