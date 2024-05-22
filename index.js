function GetValue()
{
    var myarray= new Array(
        "aliens or whatever",
        "any universe from Everything Everywhere All at Once",
        "2010s YA dystopia",
        "a past life",
        "you in 50 years",
        "you 20 years ago",
        "the last video game/movie/book you played/watched/read",
        "Lord of the Rings if the hobbits slayed",
        "body swap (partner, parent, etc)",
        "utopia"

    );
    var random = myarray[Math.floor(Math.random() * myarray.length)];
   document.getElementById("message").innerHTML=random;
}

