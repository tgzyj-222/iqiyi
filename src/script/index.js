;
(function() {

    class render {
        constructor() {
            this.context = $('.context');
        }
        init() {
            $ajax({
                url: 'http://localhost/iqiyi1/php/',
                dataType: 'json'
            }).then((data) => {
                let strhtml = '<ul class="product_item">';
                for (let value of data) {
                    strhtml += `
                        <li class="col">
                            <div class="productinfo">
                                <a href="datalist.html?id=${value.id}"> 
                                    <img src="${value.picurl}">
                                </a>
                                <div class="product_tcho">
                                    <p class="producttitle">${value.title}</p>
                                    <p class="subtitle">
                                        <span class="tospan1"><em>${value.explain}</em></span>
                                        <span class="tospan2">${value.introduce}</span>
                                    </p>
                                    <p class="productdesc">
                                        <span class="tospan3">￥${value.price}</span>
                                        <span class="tospan4">已售：${value.shopnum}</span>
                                    </p>
                                </div>
                            </div>
                        </li>
                    `;
                }
                strhtml += '</ul>';
                this.context.innerHTML = strhtml;
            });
        }
    }

    new render().init();

})();