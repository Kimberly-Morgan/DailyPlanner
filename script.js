$(document).ready(function () {
    $(".savebtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var key = $(this).parent().attr("id");
        localStorage.setItem(key, text);
    });
    for (var index = 9; index < 19; index++) {
        var text = localStorage.getItem("hour-" + index);
        $("#hour-" + index + " .description").val(text);
    }
    function updatehour(){
        var hournow=moment().hours();
        $(".time").each(function(){
            var hour=parseInt($(this).attr("id").split("-")[1]);
            if (hour<hournow){
                $(this).addClass("past")
            } else if(hour === hournow){
                $(this).removeClass("past")
                $(this).addClass("present")
            } else {
                $(this).removeClass("present")
                $(this).removeClass("past")
                $(this).addClass("future")
            }
        })
    }
    updatehour()
});