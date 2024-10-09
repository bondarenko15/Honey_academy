export default function ratesWidth() {
    document.addEventListener('DOMContentLoaded', updateWidths);
    document.querySelectorAll('.rates_tabs .item').forEach(function (tab, index) {
        tab.addEventListener('click', function () {
            setTimeout(updateWidths, 100);
            document.querySelectorAll('.rates_tabs .item').forEach(function (tab) {
                tab.classList.remove('active');
            });
            tab.classList.add('active');

            document.querySelectorAll('.rates_info--tab').forEach(function (content) {
                content.classList.remove('active');
            });
            document.querySelectorAll('.rates_info--tab')[index].classList.add('active');
        });
        /* const rates = document.querySelectorAll('.block_table') || null;
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
        }; */
        
    })
    function updateWidths() {
        const rates = document.querySelectorAll('.block_table');
        
        if (rates) {
            rates.forEach(rate => {
                const tableName = rate.querySelector('.table_name').offsetWidth;
                const tableOptions = rate.querySelector('.block_table-options');
    
                tableOptions.style.marginLeft = tableName + "px";
    
                const items = rate.querySelectorAll('.table_value');
                const itemOptions = rate.querySelectorAll('.options_items .item');
                const itemOptionsMount = rate.querySelectorAll('.options_items .item_month');
                const optionsItems = rate.querySelectorAll('.options_items');
    
                items.forEach(i => {
                    let valueWidth = i.offsetWidth;
    
                    itemOptions.forEach(a => {
                        a.style.width = (valueWidth * 2) + "px";
                    });
    
                    itemOptionsMount.forEach(c => {
                        c.style.width = valueWidth + "px";
                    });
    
                    optionsItems.forEach(b => {
                        b.style.width = (valueWidth * 6) + "px";
                    });
                });
            });
        }
    }
};



