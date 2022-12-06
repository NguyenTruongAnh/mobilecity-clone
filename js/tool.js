const tool = (() => {
    const products = [
        {
            img: 'url(./assets/images/products/tool1.jpg)',
            name: 'Tai nghe Bluetooth TWS AP Pro Rp 1:1 (Sạc không dây, xuyên âm) ',
            price: '450.000 đ',
            link: '#',
        },
        {
            img: 'url(./assets/images/products/tool2.jpg)',
            name: 'Xiaomi Mi Band 4',
            price: '650.000 đ',
            link: '#',
        },
        {
            img: 'url(./assets/images/products/tool3.jpg)',
            name: 'Tai nghe Bluetooth AP 2 Rep 1:1 (Có định vị, sạc không dây)',
            price: '299.000 đ',
            link: '#',
        },
        {
            img: 'url(./assets/images/products/tool4.jpg)',
            name: 'Tai nghe Bluetooth T-I8S',
            price: '390.000 đ',
            link: '#',
        },
        {
            img: 'url(./assets/images/products/tool5.jpg)',
            name: 'Tai nghe Bluetooth i27',
            price: '400.000 đ',
            link: '#',
        },
        {
            img: 'url(./assets/images/products/tool6.jpg)',
            name: 'Tai nghe Samsung AKG S8, S9, Plus (Chính hãng)',
            price: '149.000 đ',
            link: '#',
        },
        {
            img: 'url(./assets/images/products/tool7.jpg)',
            name: 'Tai nghe Xiaomi In-Ear Headphones Basic',
            price: '69.000 đ',
            link: '#',
        },
        {
            img: 'url(./assets/images/products/tool8.jpg)',
            name: 'Củ sạc nhanh Samsung',
            price: '250.000 đ',
            link: '#',
        },
    ]

    return {
        render() {
            const htmlTool = products.map((product) => {
                return `
                <div class="col l-2 m-3 c-6">
                    <div class="container-product__item">
                        <div class="container-product__item-heading item-heading--s-size">
                            <a href=${product.link} class="container-product__item-link">
                                <div class="container-product__item-img container-product__item-img--s-size" style="background-image: ${product.img}"></div>
                            </a>
                        </div>
                        <div class="container-product__item-wrap">
                            <div class="container-product__item-info">
                                <a href=${product.link} class="container-product__item-name">
                                    ${product.name} 
                                </a>
                                <!-- <i class="container-product__item-sale-icon fas fa-gift"></i> -->
                            </div>
                            <div class="container-product__item-buy">
                                <span class="container-product__item-price">
                                    ${product.price}
                                </span>
                                <a href=${product.link} class="container-product__item-btn">MUA</a>
                            </div>
                        </div>
                    </div>
                </div>
                `
            }, '').join('');

            document.querySelector('.tool-products').innerHTML = htmlTool;
        },
        init() {
            this.render();
        }
    }
})();

tool.init();