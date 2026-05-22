<script>

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

        function openPromo(){

            promoModal.style.display = "block";

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

        setTimeout(openPromo,5000);

        setInterval(openPromo,300000);

    }

});

loadHTML("footer", "footer.html");

</script>
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
