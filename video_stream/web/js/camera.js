
$(document).ready(function () {
    console.log('Hi');
    $(this).data("cams", []);
    eel.start();
    $("#btn").click(function(){
        eel.say_hello_py("Javascript World!");  // Call a Python function
    });
});

$(document).change(function(){
    $(this).data("cams").each(function(index){
        var streamId = `#stream${index}`;
        $(streamId).data("play", false);
    });
});

eel.expose(jsUploadImage);
function jsUploadImage(index, val) {
    var streamId = `#stream${index}`;    
    $(streamId).attr("src", val);
    return $(streamId).data("play");
}

