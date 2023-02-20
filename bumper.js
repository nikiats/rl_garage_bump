const MY_USERNAME = 'nikiats';

let sgoodUrl = null;
let sbadUrl = null;
let MATCH_URL = `https://rocket-league.com/trades/${MY_USERNAME}`;
console.log(MATCH_URL);

function checkTime(ts) {
    if(ts.includes('minute')) {
        let mn = Number(ts.split(' ')[0])
        return mn >= 16;
    }
    return !(ts.includes('seco'));
}

const start_text = 'START';
const stop_text = 'STOP';

let Action = {
    Find: 1,
    Bump: 2,
    Close: 3
}

function bumpAll() {
    if(bumpInProcess) {
        console.log('[i] Bump already in process');
        return;
    }
    let trades = document.querySelectorAll('.rlg-trade');
    recursivka(trades, 0, 0);
}

function playSound(sound) {
    let s = new Audio(sound);
    s.volume = 0.8;
    s.play();
}

let bumpInProcess = false;

function recursivka(trades, i, stage) {
    if(i >= trades.length) {
        console.log('>> All bumped');
        bumpInProcess = false;
        if(started) {
            startTicker();
        }
        return;
    }

    let trade = trades[i];
    
    let time = trade.querySelector('.rlg-trade__time').querySelector('span').innerText;
    
    if(!checkTime(time)) {
        recursivka(trades, i+1, 0);
        return;
    }

    if(stage == 0) {
        let fa = document.querySelector('.fa-times');
        if(fa) {
            fa.click();
        }
        setTimeout(() => {
            recursivka(trades, i, 1);
        }, 2_000);
        return 
    } else {
        let b = trade.querySelector('.rlg-trade__bump');
        b.click();
        playSound(sgood);
        setTimeout(() => {
            recursivka(trades, i+1, 0);
        }, 15_000);
    }
}




let started = false;

console.log(window.location);

function startTicker() {
    if(window.location.href != MATCH_URL) return;
    console.log('Starting the ticker');
    ticker = setInterval(() => {
        localStorage.setItem('start', '1');
        window.location.reload();
    }, 180_000);
}



setTimeout(() => {
    sgoodUrl = browser.runtime.getURL("sounds/bump.mp3");
    sbadUrl = browser.runtime.getURL("sounds/bad.mp3");;


    console.log('Setting button event');
    document.querySelectorAll('.my-awesome-start-bumper-button').forEach(e => {
        e.parentElement.removeChild(e);
    })
    if(window.location.href != MATCH_URL) return;
    let btn = document.createElement('button');
    document.body.appendChild(btn);
    btn.innerText = 'START'
    btn.classList.add('my-awesome-start-bumper-button');
    btn.style.cssText = `
    position: fixed;
    font-size: 30px;
    font-weight: bold;
    padding: 10px;
    top: 100px;
    left: 100px;
    border: 3px solid lime;
    background-color: black;
    color: lime;
    z-index: 500000;
    `;

    let button = document.querySelector('.my-awesome-start-bumper-button');


    if(localStorage.getItem('start') == '1') {
        //playSound(sbad);
        button.style.color = 'red';
        button.innerHTML = stop_text;
        started = true;
        bumpAll();
    } else {
        button.style.color = 'lime';
        button.innerHTML = start_text;
    }


    button.onclick = (e) => {
        console.log('Clicked');
        if(started) {
            button.style.color = 'lime';
            button.innerHTML = start_text;
            localStorage.setItem('start', '0');
            clearInterval(ticker);
            started = false;
        } else {
            startTicker();
            localStorage.setItem('start', '1');
            window.location.reload();
            button.style.color = 'red';
            button.innerHTML = stop_text;
            started = true;
        }
    }
}, 1000);