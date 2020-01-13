class Details {
    constructor() {
        //接收sid
        this.id = location.search.substring(1).split('=')[1];
        // console.log(this.id)
        this.spic = $('#spic');
        this.bpic = $('#bpic');
        this.sf = $('#sf');
        this.bf = $('#bf');
        this.list = $('#list');
        this.list_ul = $('#list ul');
        this.count = $('#count');
    }

    init() {
            // console.log(this.id)
            //将接收的id传给后端。
            $.ajax({
                url: 'http://localhost/iqiyi1/php/getid.php',
                data: {
                    id: this.id
                },

                dataType: 'json'

            }).done((objdata) => {
                console.log(this.id)
                $('.pd_tit').html(objdata.title)
                $('.b_img img').attr('src', objdata.picurl)
                    // $('#spic img').attr('src', objdata.url);
                $('h3').html(objdata.title);
                $('.pd_price em').html(objdata.price);

                // let piclist = objdata.urls.split(',');
                // let $strhtml = '';
                // $.each(piclist, function(index, value) {
                //     $strhtml += `<li><img src="${value}" /></li>`;
                // });

                // this.list_ul.html($strhtml)

            });
            //执行添加购物车操作
            // this.addcart();
        }
        //添加购物车操作
        // addcart() {
        //     let goodsnum = []; //商品的数量
        //     let goodsid = []; //商品的编号
        //     //cartnum  cartsid:本地存储的key值
        //     function getcookie() {
        //         if (localStorage.getItem('cartnum') && localStorage.getItem('cartsid')) {
        //             goodsnum = localStorage.getItem('cartnum').split(',');
        //             goodsid = localStorage.getItem('cartsid').split(',');
        //         }
        //     }
        //     $('.p-btn a').on('click', () => {
        //         getcookie();
        //         if ($.inArray(this.id, goodsid) === -1) { //第一次点击,将sid传入，取到数量直接传入
        //             goodsid.push(this.id);
        //             localStorage.setItem('cartsid', goodsid); //存入sid
        //             goodsnum.push(this.count.val());
        //             localStorage.setItem('cartnum', goodsnum); //存入数量
        //         } else {
        //             let index = $.inArray(this.id, goodsid); //当前sid在数组中对应的位置
        //             let newnum = parseInt(goodsnum[index]) + parseInt(this.count.val()); //原来存储的值+当前的值
        //             goodsnum[index] = newnum; //新的数量
        //             localStorage.setItem('cartnum', goodsnum); //存入数量
        //         }
        //     });
        // }
}


define([], function() {
    return {
        init: function() {
            new Details().init();

        }
    }
});