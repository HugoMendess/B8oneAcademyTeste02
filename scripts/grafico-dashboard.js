 // Gráficos

 const ctx = document.getElementById("grapchis__chart");
 const ctxLine = document.getElementById("grapchis__chart-Line");
 const ctxRevenue = document.getElementById("grapchis__chart-revenue");

 const labels = [
     '06/10/21',
      '07/10/21',
      '08/10/21',
      '09/10/21',
      '10/10/21', 
      '11/10/21', 
      '12/10/21'
    ];


const config = {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
          label: 'Estornado',
          data: [0, 30, 10, 10, 10, 50, 250],
          borderColor: 'rgb(66, 93, 199, 1)',
          fill: false,
          tensio: 0.1
        },{
          label: 'Cancelado',
          data: [0, 25, 0, 0, 45, 0, 0, 50],
          borderColor: 'rgba(240, 52, 96, 1)',
          fill: false
        },{
          label: 'Não Pago',
          data: [0, 25, 30, 75, 40, 60, 100],
          borderColor: 'rgba(255, 190, 0, 1)',
          fill: false
        },{ 
            label: 'Pago',
            data: [0, 80, 80, 120, 45, 150],
            borderColor: 'rgba(46, 176, 66, 1)',
            fill: false
          }]
      },
    options: {
        maintainAspectRation: false,
        scales:{
            y:{
                beginAtZero: true,
            }
        },
       
    }
};

const configRevenue = {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
          label: 'Estornado',
          data: [0, 60, 60, 110, 45, 130, 130],
          borderColor: 'rgba(46, 176, 66, 1)',
          fill: false,
          tensio: 0.1
        },{
          label: 'Cancelado',
          data: [0, 20, 10, 15, 45, 20, 0, 20],
    
          borderColor: 'rgb(66, 93, 199, 1)',
          fill: false
        },{
          label: 'Não Pago',
          data: [0, 25, 30, 75, 40, 60, 100],
          borderColor: 'rgba(240, 52, 96, 1)',
          fill: false
        },{ 
            label: 'Pago',
            data: [0, 10, 0, 0, 10,  35, 45],
          
            fill: false
          }]
      },
    options: {
        maintainAspectRation: false,
        scales:{
            y:{
                beginAtZero: true,
            }
        },
       
    }
};

const configChartLine ={
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
          label: 'Estornado',
          data: [0, 60, 60, 130, 45, 150, 150],
          borderColor: 'rgb(66, 93, 199, 1)',
          fill: false,
          tensio: 0.1
        }],
    options: {
        maintainAspectRation: false,
        scales:{
            y:{
                beginAtZero: true,
            }
        },
       
    }
}};

const myChart = new Chart(ctx, config);
const charLine = new Chart(ctxLine, configChartLine);
const charRevenue = new Chart(ctxRevenue, configRevenue);

// Gráfico de Pedidos Ocultado
ctxLine.style.display = 'none';
ctxRevenue.style.display = 'none';


// Relátorios Gerais - Buttons

const btnOptions = document.querySelectorAll(".graphics__button");

btnOptions.forEach(button =>{
    button.addEventListener("click", () =>{

            if(button.classList.contains("graphics__button--sales")){
                button.classList.remove("graphics__button--sales");
            }
            showTabs(button.innerText);
        
    });
})


function showTabs(item){
    const cardsList = document.querySelector(".graphics__cards");
    const cardContainer = document.querySelector(".graphics__cards-container");

    if(item == 'Pedidos'){
        cardsList.style.display = 'none';
        cardContainer.style.height = '83px';
        ctx.style.display = 'none';
        ctxLine.style.display = 'block';
        hideRevenue(ctxRevenue);
       
    }

    else if(item == 'Vendas'){

        cardsList.style.display = 'flex';
        cardContainer.style.height = '178px';
        ctx.style.display = 'block';
        ctxLine.style.display = 'none';
        hideRevenue(ctxRevenue);
    
       
    }

    else if(item == 'Revendedores'){
    
       showRevenu(cardsList, ctx, ctxLine, ctxRevenue);
    
       
    }

  
}


function showRevenu(list, graphic_one, graphic_two, graphic_tree){
    const graphics = document.querySelector(".graphics");
    const blockGraphic =  document.querySelector(".graphics__block-content");
    const cardsContainer = document.querySelector(".graphics__cards-container");
    const cardsHead = document.querySelector(".graphics__cards-head");
    const graphicCards = document.querySelector(".graphics__cards");
    const OptionsList =  document.querySelector(".graphics__options-list");
    const ranking =  document.querySelector(".graphics__block-ranking");

    list.style.display = 'none';
    graphic_one.style.display = 'none';
    graphic_two.style.display = 'none';
    graphic_tree.style.display = 'block';
    OptionsList.style.display = 'block';
    ranking.style.display = 'block';
    graphics.style.flexDirection = 'row';

    // graphics.classList.add(".graphics--modifer");
    blockGraphic.classList.add("graphics__block-content--modifer");
    cardsContainer.classList.add("graphics__cards-container--modifer");
    cardsHead.classList.add("graphics__cards-head--modifer");
    graphicCards.classList.add("graphics__cards--modifer");
    
   
    
}

function hideRevenue(graphic_tree){

    const graphics = document.querySelector(".graphics");
    const blockGraphic =  document.querySelector(".graphics__block-content");
    const cardsContainer = document.querySelector(".graphics__cards-container");
    const cardsHead = document.querySelector(".graphics__cards-head");
    const graphicCards = document.querySelector(".graphics__cards");
    const OptionsList =  document.querySelector(".graphics__options-list");
    const ranking =  document.querySelector(".graphics__block-ranking");

    graphic_tree.style.display = 'none';
    OptionsList.style.display = 'none';
    ranking.style.display = 'none';
    graphics.style.flexDirection = 'colum';
    // graphics.classList.remove(".graphics--modifer");
    blockGraphic.classList.remove("graphics__block-content--modifer");
    cardsContainer.classList.remove("graphics__cards-container--modifer");
    cardsHead.classList.remove("graphics__cards-head--modifer");
    graphicCards.classList.remove("graphics__cards--modifer");
}