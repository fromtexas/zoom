(function() {
  const elements = {
    img: document.querySelector("img"),
    container: document.querySelector(".product-wrapper")
  };

  let w;
  let h;
  const containerHeight = parseInt(
    window.getComputedStyle(elements.container).height
  );

  elements.img.addEventListener("mousemove", e => {
    // condition for img dimentions (w and h)
    if (h) {
      let y = -((h - containerHeight) / containerHeight) * e.clientY;
      console.log(h, containerHeight, e.clientY);
      elements.img.style.top = y + "px";
    }
  });

  elements.img.addEventListener("mouseenter", e => {
    const img = new Image();

    let loaded = new Promise((res, rej) => {
      img.onload = () => res("done");
      img.src = e.target.src;
    });

    loaded.then(res => {
      w = img.width;
      h = img.height;
    });

    elements.img.style.position = "absolute";

    elements.img.style.width = "100%";
  });

  elements.img.addEventListener("mouseleave", () => {
    elements.img.style.position = "relative";
    elements.img.style.top = "auto";
    elements.img.style.left = "auto";
    elements.img.style.width = "400px";
  });
})();
