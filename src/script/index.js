class Render {
    constructor() {
        this.context = document.querySelector('.context');

    }
    init() {
        $.ajax({
            url: 'http://localhost/iqiyi1/php/index1.php',

            dataType: 'json',

        }).done((data) => {
            let strhtml = '<ul class="product_item">';
            for (let value of data) {
                strhtml += `
                        <li class="col">
                            <div class="productinfo">
                                <a href="datails.html?id=${value.id}"> 
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


class Denglu {
    constructor() {
        var a = document.querySelector('#a');
        var mask = document.querySelector('#mask');
        var login = document.querySelector('#login');
        var span = document.querySelector('#span');
        var title = document.querySelector('#title');
    }
    init() {
        a.onclick = window.onresize = function() {
            mask.style.display = 'block';
            login.style.display = 'block';
            login.style.left = (document.documentElement.clientWidth - login.offsetWidth) / 2 + 'px';
            login.style.top = (document.documentElement.clientHeight - login.offsetHeight) / 2 + 'px';
        }
        span.onclick = function() {
            mask.style.display = 'none';
            login.style.display = 'none';
        }
        title.onmousedown = function(ev) {
            var ev = ev || window.event;
            var shortx = ev.offsetX;
            var shorty = ev.offsetY;
            document.onmousemove = function(ev) {
                var ev = ev || window.event;
                var l = ev.clientX - shortx;
                var t = ev.clientY - shorty;

                //限定范围
                if (l < 0) {
                    l = 0;
                } else if (l >= document.documentElement.clientWidth - login.offsetWidth) {
                    l = document.documentElement.clientWidth - login.offsetWidth
                }


                //限定范围
                if (t < 0) {
                    t = 0;
                } else if (t >= document.documentElement.clientHeight - login.offsetHeight) {
                    t = document.documentElement.clientHeight - login.offsetHeight
                }

                login.style.left = l + 'px';
                login.style.top = t + 'px';
            };
            document.onmouseup = function() {
                document.onmousemove = null;
                document.onmouseup = null;
            };
            return false;

        }
    }

}

define([], function() {
    return {
        init: function() {
            new Render().init();
            new Denglu().init();
        }
    }
});