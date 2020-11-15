$(document).ready(function () {
    //This display an image of a dancing crab

    // $(".crabbutton").click(function(){
    //     $(".crabimage").attr('style', 'display: inline');
    // })

    var playing = false;

    $(".crabbutton").click(function () {
        $(".crabimage").toggleClass("show");
        if (playing == false) {
            $('#crab-rave').trigger("play");
            playing = true;
        } else {
            $('#crab-rave').trigger("pause");
            playing = false;
        }
    })
    
});




// const onClick = () => {
//     console.log('crab button clicked');
//     const crabImage = document.getElementById('crab-image');
//     const audio = document.getElementById('crab-rave');
//     if (crabImage.classList.contains('show')) {
//         crabImage.classList.remove('show');
//         audio.pause();
//     } else {
//         crabImage.classList.add('show');
//         audio.play();
//     }
// }

// const onLoad = () => {
//     const button = document.getElementById('crab-button');
//     if (button) {
//         button.addEventListener('click', onClick)
//     }



// }
// window.addEventListener('load', onLoad)