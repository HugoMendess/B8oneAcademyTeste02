
///////////////////////// SideBar - Menu

const btnShow = document.querySelectorAll(".nav__link-menu");
const menuShow = document.querySelectorAll(".nav__link-submenu");
const navHeight = document.querySelector(".nav");
const itemHeight = document.querySelectorAll(".nav__item-height");
const ItemListHover = document.querySelectorAll(".nav__item");

itemHeight.forEach(button => {


    button.addEventListener("click", (e) => {
        e.preventDefault();
        if (button.classList.contains("nav__item-one")) {
            const showSubMenu = document.querySelector(".nav__sub-one");
            if (showSubMenu.classList.contains("nav__link-submenu-show")) {
                navHeight.style.height = "308px";
                button.style.height = "48px";
                showSubMenu.classList.remove("nav__link-submenu-show");
            }

            else {
                navHeight.style.height = "580px";
                button.style.height = "320px";
                showSubMenu.classList.add("nav__link-submenu-show");
                // subMenu.classList.add("nav__link-submenu-show");
            }

        }

        else if (button.classList.contains("nav__item-two")) {
            const showSubMenu = document.querySelector(".nav__sub-two");
            if (showSubMenu.classList.contains("nav__link-submenu-show")) {
                navHeight.style.height = "308px";
                button.style.height = "48px";
                showSubMenu.classList.remove("nav__link-submenu-show");
            }

            else {
                navHeight.style.height = "580px";
                button.style.height = "320px";
                showSubMenu.classList.add("nav__link-submenu-show");
                // subMenu.classList.add("nav__link-submenu-show");
            }

        }

        else if (button.classList.contains("nav__item-tree")) {
            const showSubMenu = document.querySelector(".nav__sub-tree");
            if (showSubMenu.classList.contains("nav__link-submenu-show")) {
                navHeight.style.height = "308px";
                button.style.height = "48px";
                showSubMenu.classList.remove("nav__link-submenu-show");
            }

            else {
                navHeight.style.height = "580px";
                button.style.height = "320px";
                showSubMenu.classList.add("nav__link-submenu-show");
                // subMenu.classList.add("nav__link-submenu-show");
            }

        }

        else if (button.classList.contains("nav__item-for")) {
            const showSubMenu = document.querySelector(".nav__sub-for");
            if (showSubMenu.classList.contains("nav__link-submenu-show")) {
                navHeight.style.height = "308px";
                button.style.height = "48px";
                showSubMenu.classList.remove("nav__link-submenu-show");
            }

            else {
                navHeight.style.height = "580px";
                button.style.height = "320px";
                showSubMenu.classList.add("nav__link-submenu-show");
                // subMenu.classList.add("nav__link-submenu-show");
            }

        }

    })

});

// ItemListHover.forEach(item =>{
//     item.addEventListener("mouseover", ()=>{
//         item.style.background = "#F1F2F9";
//     })

//     item.addEventListener("mouseout", ()=>{
//         item.style.background = "none";
//     })

//     item.addEventListener("click", ()=>{
//         item.style.background = "none";
//     })
// });



///////////////////////// Menu User Actions 

const showUserActions = document.querySelector(".user-actions-profile");
const showHelpOptions = document.querySelector(".user-actions-info");
const showAlertActions = document.querySelector(".user-actions-alert");
const UserActionsBlock = document.querySelector(".main-actions__users");
const scrollMain = document.querySelector("body");

// Show User
showUserActions.addEventListener("mouseover", showUser);

//Hide User
// UserActionsBlock.addEventListener("mouseout", hideUser);

// Show Help
showHelpOptions.addEventListener("mouseover", showHelp);

// Show Alert
showAlertActions.addEventListener("mouseover", showAlert);

scrollMain.addEventListener("scroll", ()=>{
    hideOptions();
})


function showUser() {
    document.querySelector(".main-actions__users").style.display = "block";
    hideHelp();
    hideAlert();
    setInterval(hideOptions, 10000);

}

function showHelp() {
    document.querySelector(".main-actions__help").style.display = "block";
    hideUser();
    hideAlert();
    setInterval(hideOptions, 10000);
}

function showAlert() {
    document.querySelector(".main-actions__info").style.display = "block";
    hideUser();
    hideHelp();
    setInterval(hideOptions, 10000);
}

function hideUser() {
    document.querySelector(".main-actions__users").style.display = "none";
}

function hideHelp() {
    document.querySelector(".main-actions__help").style.display = "none";
}

function hideAlert() {
    document.querySelector(".main-actions__info").style.display = "none";
}

function hideOptions() {
    hideUser();
    hideHelp();
    hideAlert();
}


/////// Relatorio Buttons

const btn = document.querySelectorAll(".graphics__button");

btn.forEach(btn =>{
    btn.addEventListener("click", ()=>{
        if(btn.innerText == 'Vendas'){
            btn.classList.remove();
            btn.classList.contains("graphics__button--sales") ?  btn.classList.remove("graphics__button--sales") : btn.classList.add("graphics__button--sales");           
        }

        else if(btn.innerText == 'Pedidos'){
            btn.classList.contains("graphics__button--requests") ?  btn.classList.remove("graphics__button--requests") : btn.classList.add("graphics__button--requests");           
        }

        else if(btn.innerText == 'Revendedores'){
            btn.classList.contains("graphics__button--resellers") ?  btn.classList.remove("graphics__button--resellers") : btn.classList.add("graphics__button--resellers");           
        }
    })
})



///////////////////////// Menu - Side Bar - API


async function fetchMenu() {
    const response = await fetch("https://test-final.b8one.academy/menu");
    const responseJson = await response.json();

    return responseJson;
}

function populateMenu(items) {
    const sideBarItemsList = document.querySelectorAll(".nav__option");
    const sideBarItemsHtml = items.map((item, index) => {
        return `${item.name}`;
    });

    for (let i = 0; i < sideBarItemsList.length; i++) {
        for (let j = 0; j < sideBarItemsHtml.length; j++) {
            sideBarItemsList[i].innerHTML = sideBarItemsHtml[i];
        }
    }


}

///////////////////////// Ranking de Vendedores
async function fecthRanking(){
    const response = await fetch("https://test-final.b8one.academy/resellers/ranking");
    const responseJson = await response.json();
 
    return responseJson;
}

function populateRanking(items){
    const rankingListArray = document.querySelector(".graphics__ranking-list");
    const firstName = ['HR', 'DL', 'BS', 'MN', 'YC'];
    console.log(firstName);

    const rankingListHtml = items.map((item, index) =>{
        return `
        <li class="graphics__ranking-item">
            <img src="assets/images/ranking_${index+1}.png" alt="" class="graphics__ranking-image">

            <div class="graphics__ranking-block-info">
                <div class="graphics__ranking-avatar">
                    <span class="graphics__ranking-avatar-icon">
                        ${firstName[index]}
                    </span>
                </div>

                <div class="graphics__ranking-details">
                        <span class="graphics__ranking-name">
                            ${item.name}
                        </span>
        
                    <div class="graphics__ranking-total">
                        <span class="graphics__ranking-total-points">
                            ${item.ordersCount} pedidos
                        </span>
        
                        <div class="graphics__ranking-total-percentage">
                            <span class="graphics__ranking-total-text">
                                ${item.percentage}
                            </span>
        
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.9998 9.5L7.99976 6.5L4.99976 9.5" stroke="#158F2E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                                
                        </div>
                    </div>
                </div>
            </div>
    </li>
        `;
    });

        // Adicionando as Lis na Lista
        const rankingList = rankingListHtml.join(" ");
        rankingListArray.insertAdjacentHTML("beforeend", rankingList);
    
}


///////////////////////// Produtos mais vendidos - Insights - API

async function fetchProducts() {
    const response = await fetch("https://test-final.b8one.academy/products/more-sold");
    const responseJson = await response.json();

    return responseJson;
}

function populateProducts(products){
    const productsListArray = document.querySelector(".insights-list");

    const productsListHtmlArray = products.map((product, index) =>{
        return `
        <li class="insights-list__row-products">
            <div class="insights-list__product-number">
                <span class="insights-list__product-text">
                    ${index + 1}
                </span>
            </div>

            <div class="insights-list__product-content">
                <div class="insights-list__product-info">
                    <img src="${product.image}" alt="Produto 1" class="insights-list__product-image" referrerpolicy="no-referrer">
                    <span class="insights-list__product-title">
                        ${product.name}
                    </span>
                </div>

                <div class="insights-list__product-details">
                    <span class="insights-list__fixed-left">
                        ${product.orderId}
                    </span>

                    <span class="insights-list__fixed-right insights-list__fixed-right--none">
                        ${product.department}
                    </span>

                    <span class="insights-list__fixed-right">
                        ${product.price}
                    </span>
                </div>
            </div>
        </li>
        `;
  
    }); 
    

    // Adicionando as Lis na Lista
    const productsListHtml = productsListHtmlArray.join(" ");
    productsListArray.insertAdjacentHTML("beforeend", productsListHtml);

    //// Filtrar produtos

    const select = document.querySelector(".insights-block-pags__options");
    const listProduct = document.querySelectorAll(".insights-list__row-products");


    select.addEventListener('change', filterProducts);

    function filterProducts() {
        const option = this.selectedOptions[0];
        const result = option.textContent;
        const num = Number(result);

        listProduct.forEach(products => {
            products.style.display = "flex";
        });

        for (let i = num; i < listProduct.length; i++) {
            console.log(i);
            listProduct[i].style.display = "none";


        }


    }
   

}



///////////////////////// Relatório de Vendas - Gráficos - API

async function fetchSales() {
    const response = await fetch("https://test-final.b8one.academy/sales");
    const responseJson = await response.json();

    return responseJson;
}

function populateSales(items) {
    const salesRevenues = document.querySelector(".grapchis__cards-revenues");
    const salesTotal = document.querySelector(".grapchis__cards-totalSales");
    const salesTicket = document.querySelector(".grapchis__cards-averageTicket");

    const salesObjectHtml = items;
    salesRevenues.innerText = (Number((salesObjectHtml.revenues)/100)).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
    salesTotal.innerText = salesObjectHtml.totalSales;
    salesTicket.innerText = Number((salesObjectHtml.averageTicket)/100).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});;

    // var f = atual.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}


/////////// Animação
const overlay = document.querySelector(".overlay");

// Quando a página for totalmente carregada, o overlay será desabilitado e a página
// irá aparecer.

window.addEventListener("load", function () {
    overlay.style.display = "none";
})


async function main() {
        const data = await fetchMenu();
        const product = await fetchProducts();
        const itemSales = await fetchSales();
        const itemRanking = await fecthRanking();
        populateMenu(data.menuTree);
        populateProducts(product.products);
        populateSales(itemSales);
        populateRanking(itemRanking.resellers);
        
    }

main();



