const PARAGRAPH =
    [
        "1- Aliquam at enim mattis, condimentum nisi non, volutpat est. Phasellus vel nulla convallis metus tempor ullamcorper. Quisque vel nunc sed arcu volutpat mollis vitae quis ante. Nulla tristique aliquam elementum. Nunc varius, sem eu congue fringilla, libero velit euismod velit, sed rutrum elit nisi sodales purus. Ut posuere, eros vitae tempus blandit, quam diam vulputate tellus, ut viverra massa ipsum id leo. ",
        "2- Quisque vel tincidunt ex, ut interdum lorem. Aliquam tincidunt tortor vitae turpis fringilla, nec fermentum elit ultricies. Duis nec pretium elit. Quisque et turpis felis. Praesent congue ut nibh eget molestie. Ut a risus vel ipsum hendrerit congue. Duis nisi magna, commodo in arcu quis, bibendum tempor arcu. ",
        "3- Suspendisse aliquet urna vitae placerat pellentesque. Aliquam laoreet ante sem, sit amet aliquet augue facilisis ut. Vestibulum ornare odio massa. Maecenas in faucibus lorem. Morbi laoreet bibendum leo, vel ornare neque eleifend ut. Aliquam et magna molestie, tempor leo eget, eleifend tortor.",
        "4- Ut eu eros ac felis blandit convallis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus scelerisque posuere metus, a ornare ante finibus ac. Mauris pulvinar faucibus blandit. ",
    ]


let cardBottom = document.querySelector(".card-bottom");
let cardBottomP = document.createElement("p");
let counter = 0;

Show();

function Show() {
    cardBottomP.innerHTML = "";
    cardBottom.classList.add("pElement");
    cardBottomP.innerHTML = PARAGRAPH[counter];
    cardBottom.insertBefore(cardBottomP, cardBottom.firstChild);
}
function Next() {
    if (counter <= PARAGRAPH.length - 1) {
        counter++;
        if (counter > PARAGRAPH.length - 1)
            counter = 0;
    }
    Show();

}
function Prev() {
    if (counter >= 0) {
        counter--;
        if (counter < 0)
            counter = PARAGRAPH.length - 1;
    }
    Show();
}
