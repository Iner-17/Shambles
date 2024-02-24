function openPopUp(videoId, startTime, endTime) {
    let videoUrl = 'https://www.youtube.com/embed/' + videoId + '/VIDEO_ID?start='+ startTime + '&end=' + endTime;
    document.getElementById('videoFrame').src = videoUrl;

    document.querySelector('.popup-container').style.display = "block";
}

function closePopup() {
    document.querySelector('.popup-container').style.display = "none";
    document.getElementById('videoFrame').src = '';
}