document.getElementById('search').addEventListener('input', function() {
    let filter = this.value.toUpperCase();
    let fileItems = document.querySelectorAll('.file-item');
    
    fileItems.forEach(function(item) {
        let text = item.querySelector('span').textContent;
        if (text.toUpperCase().indexOf(filter) > -1) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
});
