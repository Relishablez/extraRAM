function downloadRam() {
    // Find the checked radio button and fetch its value
    let selectedRam = document.querySelector('input[name="ramOptions"]:checked').value;
    let progressBar = document.getElementById('progressBar');
    let downloadStatus = document.getElementById('downloadStatus');

    let progress = 0;
    let increment = 100 / (selectedRam * 1.33);

    downloadStatus.innerText = "Downloading...";

    let downloadInterval = setInterval(function() {
        progress += increment;
        progressBar.style.width = progress + '%';

        if (progress >= 100) {
            clearInterval(downloadInterval);
            downloadStatus.innerText = `Successfully downloaded ${selectedRam}GB of RAM! 🚀 Boosted Performance!`;
        }
    }, 100);
}
