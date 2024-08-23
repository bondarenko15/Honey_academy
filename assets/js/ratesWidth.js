export default function ratesWidth() {
    const rates = document.querySelector('.block_table') || null;
    if (rates) {
        const name = document.querySelector('.table_name').offsetWidth;

        const tableOptions = document.querySelector('.block_table-options');

        tableOptions.style.marginLeft = name + "px";

        const item = document.querySelectorAll('.table_value');
        const itemOptions = document.querySelectorAll('.options_items .item');
        const itemOptionsMount = document.querySelectorAll('.options_items .item_month');
        const optionsItems = document.querySelectorAll('.options_items');
        item.forEach((i) => {
            let valueWidth = i.offsetWidth;
            itemOptions.forEach((a) => {
                a.style.width = (valueWidth * 2) + "px";
            })
            itemOptionsMount.forEach((c) => {
                c.style.width = valueWidth + "px";
            })
            optionsItems.forEach((b) => {
                b.style.width = (valueWidth * 6) + "px";
            })

        })
    };
}
