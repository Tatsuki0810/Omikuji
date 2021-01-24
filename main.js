function kuji() {
    var list = ["大吉", "吉", "中吉", "小吉", "末吉", "凶"];
    var random = Math.floor(Math.random()*list.length);
    var result = list[random];
    document.getElementById("result").innerHTML = result;
}