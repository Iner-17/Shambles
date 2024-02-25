function openPopUp(videoId, startTime, endTime) {
    let videoUrl = 'https://www.youtube.com/embed/' + videoId + '/VIDEO_ID?start='+ startTime + '&end=' + endTime;
    document.getElementById('videoFrame').src = videoUrl;

    document.querySelector('.popup-container').style.display = "block";
    
    // setTimeout(() => {document.querySelector('.popup-container').style.display = "none";}, ((endTime - startTime) * 1000) + 2)

}

function closePopup() {
    document.querySelector('.popup-container').style.display = "none";
    document.getElementById('videoFrame').src = '';
}