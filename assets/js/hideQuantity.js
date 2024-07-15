export default function hideQuantity() {
    const items = document.querySelectorAll('.hideQuantity .item') || null;
    const blogNews = document.querySelectorAll('.blog_news-more .item') || null;
    let newArray = Array.from(items || blogNews);
    var deleteItem = newArray;
    function deleteItems(i, j) {
        deleteItem.splice(i, j)
        deleteItem.forEach((item) => {
            item.style.display = 'none'
        });
    }
    if (window.innerWidth < 1365) {
        deleteItems(0, 10)
    } 
     else if (window.innerWidth > 1365) {
        deleteItems(0, 9)
    }
}



