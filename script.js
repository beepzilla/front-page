function closePopup() {
    document.getElementById("popupOverlay").style.display = "none";
}

new TradingView.widget({
    "container_id": "tradingview_chart",
    "autosize": true,
    "symbol": "BINANCE:BTCUSDT",
    "interval": "60",
    "timezone": "Etc/UTC",
    "theme": "dark",
    "style": "1",
    "locale": "en",
    "toolbar_bg": "#f1f3f6",
    "enable_publishing": false,
    "allow_symbol_change": true,
    "details": true,
    "withdateranges": true,
    "hide_side_toolbar": false,
    "studies": [
        "MACD@tv-basicstudies",
        "RSI@tv-basicstudies"
    ]
});

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Set the default tab to be displayed
document.getElementsByClassName("tab-link")[0].click();
