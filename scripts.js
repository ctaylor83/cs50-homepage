/* JS Search function for the recipes page */

document.getElementById('searchInput').addEventListener('input', function() {
    var query = this.value.toLowerCase();
    var cards = document.querySelectorAll('.card');
    cards.forEach(function(card) {
        var title = card.querySelector('.card-title').textContent.toLowerCase();
        if (title.indexOf(query) !== -1) {
            card.parentElement.style.display = '';
        } else {
            card.parentElement.style.display = 'none';
        }
    });
});

/* JS tickbox function - I want the user to be able to tick against items they have in ingredients for easier tracking */

function toggleComplete(item) {
    item.classList.toggle('completed');
}
