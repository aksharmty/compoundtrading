function loadHTML(id, file, callback) {

    fetch(file)
    .then(res => res.text())
    .then(data => {

        document.getElementById(id).innerHTML = data;

        if(callback) callback();

    });

}

loadHTML("menu", "menu.html");

loadHTML("sidebar", "sidebar.html", () => {

    // banners
    const script = document.createElement('script');
    script.src = 'data/banners.js?v=' + new Date().getTime();
    document.body.appendChild(script);

    // popup init after sidebar loaded
    let currentPage = window.location.pathname;

    if(currentPage.indexOf("kucoin-dca-bot.html") === -1){

        const promoModal = document.getElementById("promoModal");
        const closeBtn = document.getElementById("promoClose");

        const POPUP_INTERVAL = 5 * 60 * 1000; // 5 minutes

        function openPromo(){

            let lastShown = localStorage.getItem("promoLastShown");
            let now = Date.now();

            if(!lastShown || (now - parseInt(lastShown)) >= POPUP_INTERVAL){
                promoModal.style.display = "block";
                localStorage.setItem("promoLastShown", now);
            }
        }

        function closePromo(){
            promoModal.style.display = "none";
        }

        closeBtn.onclick = closePromo;

        window.onclick = function(e){
            if(e.target == promoModal){
                closePromo();
            }
        }

        // 5 sec after page load
        setTimeout(openPromo, 5000);

        // Check every minute
        setInterval(openPromo, 60000);
    }

});

loadHTML("footer", "footer.html");


/*  
function loadHTML(id, file, callback) {
  fetch(file)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
      if (callback) callback();
    });
}

loadHTML("menu", "menu.html");
loadHTML("sidebar", "sidebar.html", () => {
    const script = document.createElement('script');
    script.src = 'data/banners.js?v=' + new Date().getTime();
    document.body.appendChild(script);
});
loadHTML("footer", "footer.html");*/
