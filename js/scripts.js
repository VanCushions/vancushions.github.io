/*!
* Start Bootstrap - New Age v6.0.6 (https://startbootstrap.com/theme/new-age)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-new-age/blob/master/LICENSE)
*/
//
// Scripts
// 


const xyz = ['z','y','x','w','v','u','t','s','r','q','p','o','n','m','l','l','j','i','h','g','f','e','d','c','b','a'];
const num = ['0','1','2','3','4','5','6','7','8','9','0','1','2','3','4','5','6','7','8','9','0','1','2','3','4','5'];
const value = "mailto:mail@example.org";


window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    /* const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    }; */

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });


    var intId = setInterval(() => {
        document.getElementById("abc").textContent = "C" + xyz[11] + xyz[12] + xyz[6] + xyz[25] + xyz[23] + xyz[6];
        document.getElementById("abcd").textContent = "C" + xyz[11] + xyz[12] + xyz[6] + xyz[25] + xyz[23] + xyz[6];
        document.getElementById("feedbackModalLabel").textContent = "C" + xyz[11] + xyz[12] + xyz[6] + xyz[25] + xyz[23] + xyz[6] + " " + xyz[5] + xyz[7];
        document.getElementById("cbutton").style.display = "block";
        clearInterval(intId);
    }, 5000);

});


function sbtnPrepare() {
    var intId2 = setInterval(() => {
        document.getElementById("subNum").textContent = num[10] + num[7] + num[17] + num[16] + num[9] + " " + num[21] + num[10] + num[0] + num[6] + num[14] + num[24];
        document.getElementById("submitButton").textContent = "E" + xyz[13] + xyz[25] + xyz[17] + xyz[15] + " " + xyz[5] + xyz[7];
        document.getElementById("subMsg").textContent = xyz[23] + xyz[25] + xyz[13] + xyz[10] + xyz[21] + xyz[8] + xyz[4] + xyz[25] + xyz[12] + xyz[23] + xyz[5] + xyz[7] + xyz[18] + xyz[17] + xyz[11] + xyz[12] + xyz[7] + value.charAt(11) + xyz[19] + xyz[13] + xyz[25] + xyz[17] + xyz[15] + value.charAt(19) + xyz[23] + xyz[11] + xyz[13];
        document.getElementById("submitButton").style.visibility = "visible";
        clearInterval(intId2);
    }, 3000);
}

function submit() {
    location.href = value.substring(0,7) + xyz[23] + xyz[25] + xyz[13] + xyz[10] + xyz[21] + xyz[8] + xyz[4] + xyz[25] + xyz[12] + xyz[23] + xyz[5] + xyz[7] + xyz[18] + xyz[17] + xyz[11] + xyz[12] + xyz[7] + value.charAt(11) + xyz[19] + xyz[13] + xyz[25] + xyz[17] + xyz[15] + value.charAt(19) + xyz[23] + xyz[11] + xyz[13];
}

function linktoInstagram() {
    window.open("https://www.instagram.com/campervancushions.uk/", "_blank");
}

function addRow() {
  if(document.getElementById("table0").rows.length <11) {
    let newRow = document.getElementById("table0").insertRow(document.getElementById("table0").rows.length-1).innerHTML = '<tr><td><input type="number" placeholder="Enter length (mm)"></input></td><td><input type="number" placeholder="Enter width (mm)"></input></td></tr>';
  }
}

function estimate() {
    let ct = 100;
    let dm = 0.000056;
    let rw = 1400;
    let fla = 1.3;
    let fppm = 15;
    let zpu = 5;

    let tl = 0;
    let tw = 0;
    let ta = 0;
    let tfpev = 0;
    let tfpiv = 0;
    let tfp = 0;
    let tpa = 0;
    let tfza = 0;
    let tsa = 0;
    let tta = 0;
    let tar = 0;
    let tzl = 0;
    let zl = 0;
    let ga = 0;
    let tmp = 0;
    let l = 0;

    let cushionTable = document.getElementById("table0");

    for (loop = 0; loop < cushionTable.rows.length - 1; loop++) {
        tl = Math.abs(Number(cushionTable.rows[loop].cells[0].firstChild.value));
        tw = Math.abs(Number(cushionTable.rows[loop].cells[1].firstChild.value));
        ta = tl * tw;
        tfpev = ta * dm;
        tfpiv = tfpev * 1.2;
        tfp += tfpiv;

        ga += (tl * tw * 2) + (tw * ct * 2) + (tl * ct * 2);

        tpa = (tl + 25) * (tw + 25) * 2;
        tfza = (tl + 25) * (ct + 25) * 3;
        tsa = (tw + 25) * (ct + 25) * 2;
        tta = tpa + tfza + tsa;
        tar += tta;

        tzl = (tl + 150) / 1000;
        zl += tzl;

        if(tl > 1800) {
            l += 105;
        } else if(tl > 1300) {
            l += 95;
        } else if(tl > 800) {
            l += 85;
        } else {
            l += 75;
        }
    }

    if(tfp === 0) {
        return;
    }

    let fl = tar / rw;
    let fm = fl / 1000;
    let afm = fm * fla;
    let fiv = fppm * afm * 1.2;
    let fdc = fiv + 13;

    let zm = Math.ceil(zl / zpu);
    let zp = zm * 8;

    let dppm = 1.6;
    let dp = afm * dppm;

    let saf = 1.2;
    let sl = zl * saf;
    let sppm = 0.75;
    let sp = sl * sppm;

    let gppm = 1;
    let gp = ga / 1000000 * gppm;

    let tp = 7;

    tmp += tfp;
    tmp += fdc;
    tmp += zp;
    tmp += dp;
    tmp += sp;
    tmp += gp;
    tmp += tp;

    document.getElementById("grandTotal").innerHTML = "The estimated total is: £" + (tmp + l).toFixed(0);
    document.getElementById("debug").innerHTML = "Don't forget, this is just a guide price, so please contact us for an accurate quote based on foam, fabric, shipping, and other options.";
}

function clearTable() {
    let cushionTable = document.getElementById("table0");
    cushionTable.innerHTML = '<tbody><tr><td><input type="number" placeholder="Enter length (mm)"></input></td><td><input type="number" placeholder="Enter width (mm)"></input></td></tr><tr><td colspan="2" style="text-align: right;"><button class="plusbutton" id="addButton" onclick="addRow()">+</button></td></tr></tbody>';

    grandTotal.innerHTML = "";
    debug.innerHTML = "";
}