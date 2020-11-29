eel.expose(jsCreateCameraLayout);
function jsCreateCameraLayout(index){
    $('.main').prepend(
        `<div class="col-6">
            <div class="row no-gutters">
                <div class="col text-center border">
                    <div class="video-container">
                        <img id="stream${index}" src="./play.jpg" class="img-fluid img-responsive video" data-switch="open">
                        <svg id="wait${index}" viewBox="0 0 16 16" class="bi bi-play-fill wait" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                            </svg>
                    </div>
                </div>
            </div>
        </div>`
    );

    var streamId = `#stream${index}`;
    var waitId = `#wait${index}`;
    var temp = $(document).data("cams");
    temp.push(index);
    $(document).data("cams", temp);
    

    $(streamId).data("play", false);

    $(streamId).click(function(){
        $(waitId).fadeIn("fast");
        $(this).data("play", false);
    });

    $(waitId).click(function(){
        $(streamId).data("play", true);
        eel.open_camera(index);
        $(this).fadeOut("slow");
    });    

}
