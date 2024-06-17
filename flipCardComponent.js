class FlipCardElement extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {

        const imgFront = this.getAttribute('img-front');
        const backTitle = this.getAttribute('back-title');
        const backIntro = this.getAttribute('back-intro');
        const backDesc = this.getAttribute('back-description');

        this.shadowRoot.innerHTML = `

        <style>

        img {
            /*border-radius:20px;*/
            width: 100%;
            height: 100%;
        }

        p {
            color: white;
        }


        /* The flip box container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
.flip-box {
    background-color: transparent;
    width: 620px;
    height: 400px;
    border: 1px solid #f1f1f1;
    perspective: 1000px;
    /* Remove this if you don't want the 3D effect */
    position: relative;
}

/* This container is needed to position the front and back side */
.flip-box-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-box:hover .flip-box-inner {
    transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-box-front,
.flip-box-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    /* Safari */
    backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */


/* Style the back side */
.flip-box-back {
    background-color: rgb(44, 79, 114);
    color: white;
    transform: rotateY(180deg);
    padding-right: 10px;
    padding-left: 10px;
    border-radius: 5px;
}

        </style>

        <div class="flip-box">
          <div class="flip-box-inner">
            <div class="flip-box-front">
              <img src="${imgFront}">
            </div>
            <div class="flip-box-back">
              <h2>${backTitle} </h2>
              <p style="text-align: justify;">
                <span style="font-weight: bold;">${backIntro ?? ""}</span>
                <br>
                ${backDesc}
                <br><br>
              </p>
              <a class="text-bottom btn btn-primary" href="/services_pages/fix.html">Découvrez nos offres !</a>
            </div>
          </div>
        </div>

        
        `
    }

}

window.customElements.define('flip-card', FlipCardElement);