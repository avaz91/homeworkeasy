var arr = []
var total = 0
var win =0, lose = 0
function random() {
    var r = Math.floor(Math.random() * 120) + 19
    return r

}
var c = random()
$(".main-section-div1").html(c)

$(".image1").attr("data-num")

function random4() {
    arr=[]
    while (arr.length < 4) {
        var r4 = Math.floor(Math.random() * 20) + 1
        if (arr.indexOf(r4) === -1) {
            arr.push(r4)
        }
    }
    $("#d1").attr("data-num", arr[0])
    $("#d2").attr("data-num", arr[1])
    $("#d3").attr("data-num", arr[2])
    $("#d4").attr("data-num", arr[3])
}
random4()
function reset(){

    c = random()
    $(".main-section-div1").html(c)
    total=0
    $(".span").html(0)
    random4()
      
}

$(".image1").on("click", function () {
    total += parseInt($(this).attr("data-num"))

    $(".span").html(total)
if (total==c){  
    $(".main-section-span-win").html(++win)
    reset()    
}else if (total>c){
    $(".main-section-span-lose").html(++lose)
    reset()
}

})
