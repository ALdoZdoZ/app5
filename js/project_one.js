// cood loading
var loding_rondom_img = document.querySelector(".loaeding-pag");
let bacground_img = true;
var clear_functin;
var imgbackstorg = localStorage.getItem("rundom-pacgimg");
if (imgbackstorg !== null) {
  if (imgbackstorg === "true") {
    bacground_img = true;
  } else {
    bacground_img = false;
  }
}
var arra_img = [
  "06.png",
  "02.jpg",
  "03.jpg",
  "04.jpg",
  "05.jpg",
  "07.jpg",
  "08.jpg",
  "09.jpg",
  "10.jpg",
];
function opeatinimg() {
  if (bacground_img === true) {
    clear_functin = setInterval(function () {
      var random_math = Math.floor(Math.random() * arra_img.length);
      loding_rondom_img.style.backgroundImage =
        'url("IMG/' + arra_img[random_math] + '")';
    }, 1000);
  }
}

////////////////////////////////////////////
// cood seting
var seeting_togles = document.querySelector(".toogleicons .fa-gear");
var opens = document.querySelector(".seeteing-box");
seeting_togles.onclick = function () {
  this.classList.toggle("fa-spin");
  opens.classList.toggle("open");
};
document.addEventListener("click", function (e) {
  if (e.target !== seeting_togles) {
    if (opens.classList.contains("open")) {
      seeting_togles.classList.toggle("fa-spin");
      opens.classList.toggle("open");
    }
  }
});

//////////////////////////////////////////////
// cood color
let colorlist = document.querySelectorAll(".colorslisr li");
let color_storg = localStorage.getItem("colorslisr");
if (color_storg !== null) {
  document.documentElement.style.setProperty(
    "--main-color",
    localStorage.getItem("colorslisr")
  );
}

colorlist.forEach(function (li) {
  li.addEventListener("click", function (e) {
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    localStorage.setItem("colorslisr", this.dataset.color);
    e.target.parentElement
      .querySelectorAll(".activ-color")
      .forEach(function (e) {
        e.classList.remove("activ-color");
      });
    this.classList.add("activ-color");
  });
});
///////////////////////////////////////
// code yse or no bacgrand color;
let img_activ = document.querySelectorAll(".rundom-pacgimg span");
img_activ.forEach(function (span) {
  span.addEventListener("click", function (e) {
    e.target.parentElement
      .querySelectorAll(".acttive-img")
      .forEach(function (re) {
        re.classList.remove("acttive-img");
      });
    this.classList.add("acttive-img");
    if (e.target.dataset.backgr === "yess") {
      bacground_img = true;
      opeatinimg();

      localStorage.setItem("rundom-pacgimg", true);
    } else {
      bacground_img = false;
      clearInterval(clear_functin);
      localStorage.setItem("rundom-pacgimg", false);
    }
  });
});
document.querySelectorAll(".rundom-pacgimg span ").forEach(function (e) {
  e.classList.remove("acttive-img");
});
if (imgbackstorg === "true") {
  document.querySelector(" .rundom-pacgimg .yes").classList.add("acttive-img");
} else {
  document.querySelector(" .rundom-pacgimg .no").classList.add("acttive-img");
}
opeatinimg();
///////////////////////////////////
// coos skilse
let scrol_skils = document.querySelector(".skils");
window.onscroll = function () {
  let skilws_ofsttoop = scrol_skils.offsetTop;
  let skilws_ofhistop = scrol_skils.offsetHeight;
  let windo_hi = this.innerHeight;
  let windoscrol = this.pageYOffset;
  if (windoscrol > skilws_ofsttoop + skilws_ofhistop - windo_hi) {
    let team_skiles = document.querySelectorAll(
      ".skils-box .porgles-sk-box span"
    );
    team_skiles.forEach(function (doz) {
      doz.style.width = doz.dataset.width;
    });
  }
};
//////////////////////////////////////////////
// cood img ghalary
let ghalary_img = document.querySelectorAll(".galary-pag img");
ghalary_img.forEach(function (img) {
  img.addEventListener("click", function (e) {
    let overlay = document.createElement("div");
    overlay.className = "pop_overly";
    document.body.appendChild(overlay);
    let poupox = document.createElement("div");
    poupox.className = "popup";
    if (img.alt !== null) {
      let headingimg = document.createElement("h3");
      let imgalt = document.createTextNode(img.alt);
      headingimg.appendChild(imgalt);
      poupox.appendChild(headingimg);
    }
    let pouoimg = document.createElement("img");
    pouoimg.src = img.src;
    poupox.appendChild(pouoimg);
    let spanclose = document.createElement("span");
    let closeo = document.createTextNode("x");
    spanclose.className = "clos_buut";
    spanclose.appendChild(closeo);
    poupox.appendChild(spanclose);

    document.body.appendChild(poupox);
  });
});

document.addEventListener("click", function (e) {
  if (e.target.className == "clos_buut") {
    e.target.parentNode.remove();
    document.querySelector(".pop_overly").remove();
  }
});
///////////////////////////////////////////
// code nav& links all
let navbu = document.querySelectorAll(".nav-buliiitsall .bulit");
var linlsall = document.querySelectorAll(".links a");
function smmth(elem) {
  elem.forEach(function (e) {
    e.addEventListener("click", function (ev) {
      ev.preventDefault();
      document.querySelector(ev.target.dataset.sec).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}
smmth(navbu);
smmth(linlsall);
///////////////////////
// code resert
document.querySelector(".reaset_opatins").onclick = function () {
  localStorage.clear();
};
////////////////////////////////
// coode links alll-open meeda telpghne
var togleem = document.querySelector(".togle-menu ");
var openl = document.querySelector(".links");
var loodopp = document.querySelector(".contect-loding");
togleem.onclick = function () {
  this.classList.toggle("togleecircl");
  openl.classList.toggle("open");
  loodopp.classList.toggle("lodop");
};
document.addEventListener("click", function (e) {
  if (e.target !== togleem && e.target !== openl) {
    if (openl.classList.contains("open")) {
      togleem.classList.toggle("togleecircl");
      openl.classList.toggle("open");
      loodopp.classList.toggle("lodop");
    }
  }
});
