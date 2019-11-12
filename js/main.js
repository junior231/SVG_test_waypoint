(() => {
    // try to get the object and do stop with it

    const waypoint = new Waypoint({
        // what element is waypoint looking at?
        // the handler will fire when it scrolls down

        element: document.getElementById('beer-barrel'),
        // what should we do when we hit the waypoint? this is up to you
        // you can trigger animation, do an AJAX call... whatever
        handler: function(direction) {
          console.log('Scrolled to waypoint!')
          this.element.innerHTML += `<p>Added this with waypoint ${direction}</p>`
        }
      })

      const waypoint2 = new Waypoint({
        // what element is waypoint looking at?
        // the handler will fire when it scrolls down

        element: document.getElementById('beer'),
        // what should we do when we hit the waypoint? this is up to you
        // you can trigger animation, do an AJAX call... whatever
        handler: function(direction) {
          console.log('Scrolled to waypoint 2!')
        },

        offset: 400
      })

    const svgGraphic = document.querySelector("#beer-glass");

    svgGraphic.addEventListener("click", () => {
        console.log(this.querySelector('.svg-graphic'));
    })
})();