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

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const offset = 200; // Adjust this value as needed

        // Trigger click on the home tab link
        document.querySelector('.tab-link[href="#home"]').click();

        // Wait for the home tab content to be displayed
        setTimeout(() => {
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;

            // Scroll to the target position
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }, 100); // Adjust this timeout as needed
    });
});

// Radio controls
const audioPlayer = document.getElementById('audio-player');
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const nextBtn = document.getElementById('next-btn');

let isPlaying = false;
let currentSongIndex = 0;
const songs = [
    'https://ipfs.io/ipfs/Qma4cKFvWvfqoKXpB3KCPhFsz2ySje5PSNywTBZff8eXT4/stellar-escape-prigida-main-version-25318-03-02%20(1).mp3',
    'https://ipfs.io/ipfs/QmdcYArSqshxQ5LE6BgWgQQPnz7AWB4AFHXwsbBusqQXfk/game-over-danijel-zambo-main-version-02-03-1394.mp3',
    'https://ipfs.io/ipfs/QmdcYArSqshxQ5LE6BgWgQQPnz7AWB4AFHXwsbBusqQXfk/sunset-in-junipero-bach-main-version-19643-03-22.mp3',
    'https://ipfs.io/ipfs/QmdcYArSqshxQ5LE6BgWgQQPnz7AWB4AFHXwsbBusqQXfk/easy-arcade-hartzmann-main-version-28392-02-32.mp3',
    'https://ipfs.io/ipfs/QmdcYArSqshxQ5LE6BgWgQQPnz7AWB4AFHXwsbBusqQXfk/milky-way-mountaineer-main-version-28369-02-20.mp3',
    'https://ipfs.io/ipfs/QmdcYArSqshxQ5LE6BgWgQQPnz7AWB4AFHXwsbBusqQXfk/space-ranger-moire-main-version-03-04-10814.mp3',
    'https://ipfs.io/ipfs/Qma4cKFvWvfqoKXpB3KCPhFsz2ySje5PSNywTBZff8eXT4/stardust-danijel-zambo-main-version-03-13-1372.mp3',
    'https://ipfs.io/ipfs/QmdcYArSqshxQ5LE6BgWgQQPnz7AWB4AFHXwsbBusqQXfk/pencil-crayons-sulyya-main-version-27127-03-10.mp3'
];

playBtn.addEventListener('click', () => {
    if (!isPlaying) {
        audioPlayer.src = songs[currentSongIndex];
        audioPlayer.play();
        isPlaying = true;
        playBtn.style.display = 'none';
        pauseBtn.style.display = 'inline';
    }
});

pauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        audioPlayer.pause();
        isPlaying = false;
        playBtn.style.display = 'inline';
        pauseBtn.style.display = 'none';
    }
});

nextBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    audioPlayer.src = songs[currentSongIndex];
    audioPlayer.play();
    isPlaying = true;
    playBtn.style.display = 'none';
    pauseBtn.style.display = 'inline';
});

audioPlayer.addEventListener('ended', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    audioPlayer.src = songs[currentSongIndex];
    audioPlayer.play();
});
