// $(document).ready(function () {
//     $('.text').textillate({
//         loop: true,
//         sync: true,
//         in:{
//             effect: "bounceIn",
//         },
//         in:{
//             effect: "bounceOut",
//         },

//     });
// });
$(document).ready(function () {
    $('.text').textillate({
        loop: true, // Keeps looping the animation
        in: {
            effect: "bounceIn", // Applies bounceIn animation
        },
        out: {
            effect: "bounceOut", // Applies bounceOut animation
            shuffle: false, // Prevents text scrambling
        },
        autoStart: true, // Ensures the animation starts automatically
        callback: function () {
            // Optional: add any additional behavior after animations
        },
    });
    // Siri Configuration
    var siriWave = new SiriWave({
        container: document.getElementById("siri-container"),
        width: 800,
        height: 200,
        style: "ios9", 
        amplitude: "1",
        speed: "0.30",
        autostart: true
    });

      // Siri message automation
    //   $('.siri-message').textillate({
    //     loop: true, // Keeps looping the animation
    //     in: {
    //         effect: "fadeInUp", // Applies bounceIn animation
    //     },
    //     out: {
    //         effect: "fadeOutUp", // Applies bounceOut animation
    //         shuffle: false, // Prevents text scrambling
    //     },
    //     autoStart: true, // Ensures the animation starts automatically
    //     callback: function () {
    //         // Optional: add any additional behavior after animations
    //     },
    // });

    $('.siri-message').textillate({
                loop: true,
                sync: true,
                in:{
                    effect: "fadeInUp",
                    sync: true,
                },
                out:{
                    effect: "fadeOutUp",
                    shuffle: false,
                    sync:true,
                },
            });

   



   // mic button click event

    $("#MicBtn").click(function () { 
        eel.playassistantSound()
        $("#Oval").attr("hidden", true);
        $("#SiriWave").attr("hidden", false);
        eel.allCommands()()
    
    });

});
