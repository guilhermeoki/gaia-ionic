var intervalo = 30 * 1000;//30 segundos

//essa funcao jah seta o timer. A gente guarda a variavel para poder limpar o timer, se quiser.
var myTimer = window.setInterval(notifyMe, intervalo);

// request permission on page load
document.addEventListener('DOMContentLoaded', function () {
    console.log('ok');
    if (Notification.permission !== "granted"){
        Notification.requestPermission();
    }
    // timerNotification();
});

function notifyMe() {
    if (!Notification) {
        alert('Desktop notifications not available in your browser. Try Chromium.'); 
        return;
    }

    if (Notification.permission !== "granted"){
        Notification.requestPermission();
    }
    else {
        var notification = new Notification('Ei!! Não se esquece de regar seu alecrim!!! :)', {
        icon: '../img/logo.png',
        body: "",
        });

        // notification.onclick = function () {
        // window.open("http://foo.com/bar");      
        // };
    }
}  