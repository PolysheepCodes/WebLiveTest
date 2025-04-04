console.log("TheDailyOWO Testing");
console.log("Functions available for manual testing \n document.TSFA() \n alertpopuptrigger() \n alertpopupreset()");

// Random Motif Funcs Debug \\

var RFMArray = [
    "TheDailyOWO 2024 | Site Author: PolySheep Codes (Scott)<br>The website you are trying to reach is no longer in service",
    "TheDailyOWO 2024 | Site Author: PolySheep Codes (Scott)<br>Powered by electricity",
    "TheDailyOWO 2024 | Site Author: PolySheep Codes (Scott)<br>Powered by a hilariously underpowered server",
    "TheDailyOWO 2024 | Site Author: PolySheep Codes (Scott)<br>The websites i run on my server are a form of torture for it",
    "footer.body.motif"
];
var RFM = Math.floor(Math.random() * RFMArray.length);
document.getElementById("RFMOutput").innerHTML = RFMArray[RFM];

var RCMArray = [
    "every day my RAM usage on your computer gets higher and higher due to my creators innability to code proper- [Killed by the creator]",
    "console.log.motif",
    "fun fact: my origin server currently hosts 4 websites total yet the number is doomed to grow exponentially",
    "insert TF2 reference here",
    "insert cookie clicker reference here",
    "TDO Debug Sandbox Special Dialog"
];
var RCM = Math.floor(Math.random() * RCMArray.length);
document.getElementById("RCMOutputDebug").innerHTML = RCMArray[RCM];
console.log(RCMArray[RCM]);

// The Secret Function Debug \\

if ( RFMArray[RFM] == "footer.body.motif" ) {
    var s1 = true; 
}

if ( RCMArray[RCM] == "console.log.motif" ) {
    var s2 = true;
}

document.getElementById("TriggeredManually").innerHTML = "TSF Triggered Manually = undefined";
document.getElementById("TSFStatus").innerHTML = "TSF Active = False";

if ( s2 && s1 == true ) {
    var TSFArray = [
        "Test Pass: secret function activated!",
        "Test Pass: i will never tell you how you did this",
        "Test Pass: func.secret.active",
        "Test Pass: oh? something happened",
        "Test Pass: TDO Sandbox Special Secret Dialog"
    ];
    var TSF = Math.floor(Math.random() * RCMArray.length);
    console.log(TSFArray[TSF]);
    document.getElementById("TSFDOutput").innerHTML = TSFArray[TSF];
    document.getElementById("TSFStatus").innerHTML = "TSF Active = true";
    document.getElementById("TriggeredManually").innerHTML = "TSF Triggered Manually = false";
}

document.TSFA = function TSFDebugActivate() {
    // Should Only Be Used if Alterred chances are still too hard \\
    var TSFArray = [
        "secret function activated!",
        "i will never tell you how you did this",
        "func.secret.active",
        "oh? something happened",
        "Congrats, i spent too long on this joke no one will even snoop enough to see :sob:"
    ];
    var TSF = Math.floor(Math.random() * TSFArray.length);
    console.log(TSFArray[TSF]);
    document.getElementById("TSFDOutput").innerHTML = TSFArray[TSF];
    document.getElementById("TriggeredManually").innerHTML = "TSF Triggered Manually = true";
    document.getElementById("TSFStatus").innerHTML = "TSF Active = true";
};

// The Ultimate Secret \\

Object.defineProperty(window, 'MSGXInt', {
    // Snooping into the code isnt fun when it comes to finding secrets, id suggest searching through official Adonis materials and if you know my current system understanding there might be a chance you find the keys instead of having to mine the keys out of the code -Scott V \\
    get: function HS1_ALSB() {
        console.log("Beginning Logon sequence");
        console.log("<o> User unidentified: entering guest mode <o>");
        console.log("begin playback of last log");
        console.log("LogX monitoring system active");
        console.log("> MSGX-Cli");
        console.log("MSGX: Logging in | User: AGuard-52x");
        console.log("Login complete");
        console.log("Log Corrupted, unable to play next lines of file");
        console.log(" ");
        console.log("Adonis: the hidden files 2024 (1)");
        window.setTimeout(()=>alertpopuptrigger2(), 2500);
  }
});

// Animation Trigger Functions \\

var popup = document.getElementById("alert-popup");
var popup2 = document.getElementById("overlay");
var popup3 = document.getElementById("alert-popup2");
popup2.style.visibility = "hidden";

function alertpopuptrigger() {
    popup.style.visibility = "visible";
    popup2.style.visibility = "visible";
    popup.style.animation = "alert-popup .5s";
    popup2.style.animation = "overlay .5s";
}

function alertpopupreset() {
    popup.style.animation = "alert-fadeout .5s";
    popup2.style.animation = "overlay-fadeout .5s";
    setTimeout(()=>popup.style.visibility = "hidden", 475);
    setTimeout(()=>popup2.style.visibility = "hidden", 475);
}

function alertpopuptrigger2() {
    popup3.style.visibility = "visible";
    popup2.style.visibility = "visible";
    popup3.style.animation = "alert-popup .5s";
    popup2.style.animation = "overlay .5s";
}

function alertpopupreset2() {
    popup3.style.visibility = "hidden";
    popup2.style.visibility = "hidden";
    popup3.style.animation = "none";
    popup2.style.animation = "mone";
}
