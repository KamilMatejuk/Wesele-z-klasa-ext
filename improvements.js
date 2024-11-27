function improveBiggerLinkHitbox() {
    articles = document.querySelectorAll('.offers-list article');
    for (const article of articles) {
        article.style.cursor = 'pointer';
        const link = article.querySelector('a');
        const wrapper_link = document.createElement('a');
        wrapper_link.href = link.href;
        wrapper_link.className = 'ext';
        // insert wrapper link on all article
        article.parentNode.replaceChild(wrapper_link, article);
        wrapper_link.appendChild(article);
        // remove link inside
        link.parentNode.replaceChild(document.createTextNode(link.textContent), link);
    }
}
