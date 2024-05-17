function GetValue()
{
    var myarray= new Array("Lord of the Rings if the Hobbits slayed","Upsidedown world","aliens or whatever");
    var random = myarray[Math.floor(Math.random() * myarray.length)];
   document.getElementById("message").innerHTML=random;
}

