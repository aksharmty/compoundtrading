function loadHTML(id, file, callback) {
  fetch(file)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
      if (callback) callback();
    });
}

loadHTML("header", "header.html");
loadHTML("menu", "menu.html");
loadHTML("sidebar", "sidebar.html", () => {
    const script = document.createElement('script');
    script.src = 'data/banners.js?v=' + new Date().getTime();
    document.body.appendChild(script);
});
loadHTML("footer", "footer.html");
