/*const src = "img/crowblink.gif";
let cInt = setInterval(crowMake, 50);
const body = document.body;
let num = 0;
let tElem = document.createElement("img");
tElem.style.width = "20%";
tElem.style.height = "auto";
tElem.style.position = "absolute";
tElem.style.left = "50px";
tElem.style.top = "100px";

body.appendChild(tElem);
tElem.setAttribute("class", "");
tElem.alt = "Crow Blinking";

function crowMake() {
    if (num > 1000) {
        clearInterval(cInt);
        return;
    }

    tElem.src = `img/f${num % 6 + 1}.png`;


    num++;
}
*/
let pauseChart = [5000, 50, 50, 50, 50, 1000];
let ended = false;
function crow(top, num) {
    this.curNum = num;
    this.forward = true;
    this.img = document.createElement("img");
    document.body.appendChild(this.img);
    this.img.style.width = top / 8 + 3 + "%";
    this.img.style.height = "auto";
    this.img.alt = "Crow Blinking"
    this.img.src = `img/f${num}.png`;
    this.img.style.position = "absolute";
    this.img.style.left = `${Math.random() * 120 - 10}%`;
    this.img.style.top = top + "%";
    Math.random() < 0.5 ? this.img.style.transform = "scaleX(-1)" : null;
    this.timeout = null;
}

function nextCrow(tCrow) {

    let { forward, curNum } = tCrow;
    if (ended && curNum === 0) {
        tCrow.img.src = `img/f${curNum}.png`;
        return;
    }
    curNum === 5 && forward ? tCrow.forward = false : null;
    curNum === 0 && !forward ? tCrow.forward = true : null;
    tCrow.forward ? (tCrow.curNum++, tCrow.img.src = `img/f${curNum}.png`) : (tCrow.curNum--, tCrow.img.src = `img/f${curNum}.png`);
    console.log(curNum);
    tCrow.timeout = setTimeout(() => { nextCrow(tCrow) }, pauseChart[curNum] * Math.random() * 0.5 + pauseChart[curNum] * 0.5);
}

let curCrows = 1;
let makeInt = setInterval(crowMake, 10);
let totCrows = 100;
let allCrows = [];
function crowMake() {
    if (curCrows > totCrows) {
        clearInterval(makeInt);
        return;
    }
    let tCrow = new crow(curCrows / totCrows * 100, Math.floor(Math.random() * 6));
    nextCrow(tCrow);
    curCrows += curCrows / totCrows;
    allCrows.push(tCrow);
}
/*
function endCrow(tCrow) {
    clearTimeout(tCrow.timeout);
    tCrow.img.src = "img/f0.png"
}
*/
let zoomLevel = 1;
/*
document.addEventListener("keypress", () => {
    ended = true;
    setInterval(() => {
        document.body.style['--zoom'] = zoomLevel;
        zoomLeve += 0.01;
    }, 50);
})
*/