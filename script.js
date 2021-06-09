const button = document.querySelector(".button");

button.addEventListener("click", function() {
    let timeVideo = prompt('How long is your video? (Example: 60.45)');
    let speedVideo025 = Math.round(timeVideo / 0.25);
    let speedVideo050 = Math.round(timeVideo / 0.5);
    let speedVideo075 = Math.round(timeVideo / 0.75);
    let speedVideo1 = Math.round(timeVideo / 1);
    let speedVideo125 = Math.round(timeVideo / 1.25);
    let speedVideo150 = Math.round(timeVideo / 1.50);
    let speedVideo175 = Math.round(timeVideo / 1.75);
    let speedVideo2 = Math.round(timeVideo / 2);

    alert(`
    You entered a value ${timeVideo}. Your result:
    At speed 0.25, you need ${speedVideo025} minutes!
    At speed 0.50, you need ${speedVideo050} minutes!
    At speed 0.75, you need ${speedVideo075} minutes!
    At speed 1, you need ${speedVideo1} minutes!
    At speed 1.25, you need ${speedVideo125} minutes!
    At speed 1.50, you need ${speedVideo150} minutes!
    At speed 1.75, you need ${speedVideo175} minutes!
    At speed 2, you need ${speedVideo2} minutes! `
    );
});


// При скорости 0.25 вам потребуется ${speedVideo025} минут!
// При скорости 0.50 вам потребуется ${speedVideo050} минут!
// При скорости 0.75 вам потребуется ${speedVideo075} минут!
// При скорости 1 вам потребуется ${speedVideo1} минут!
// При скорости 1.25 вам потребуется ${speedVideo125} минут!
// При скорости 1.50 вам потребуется ${speedVideo150} минут!
// При скорости 1.75 вам потребуется ${speedVideo175} минут!
// При скорости 2 вам потребуется ${speedVideo2} минут!`
