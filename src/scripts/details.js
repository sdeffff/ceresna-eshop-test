document.querySelectorAll('.change-preview').forEach(function (img) {
    img.addEventListener('click', function () {
        console.log('asd');
        document.querySelector('.preview-img').src = this.src;
    });
});