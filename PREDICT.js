function per(){
    var name = document.getElementById("name").value;
    var per = Math.random()*100;
    var res = document.getElementById("res");
    res.outerHTML=("THE RESULT IS "+ per);
}