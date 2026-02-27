import { fetchExchangeRate } from './api.js';

const idPrice = document.getElementById('price');
const idLastUpdate = document.getElementById('last-update');
const refreshBtn = document.getElementById('refresh-btn');
const idVariation = document.getElementById('variation')


async function init(){
    try {
        idPrice.textContent = "Carregando...";
        const data = await fetchExchangeRate();
        const showPrice = parseFloat(data.high).toFixed(2);
        const dateBrasil = new Date(data.create_date).toLocaleString('pt-BR');
        const showVariation = parseFloat(data.pctChange).toFixed(2)

        idVariation.classList.remove('up', 'down', 'neutral');

        if (showVariation > 0){
            idVariation.classList.add('up')
            idVariation.textContent = `O dólar subiu ${showVariation}%`
        }else {
            idVariation.classList.add('down')
            idVariation.textContent = `O dólar caiu ${Math.abs(showVariation)}%`
        }

        idPrice.textContent = `R$ ${showPrice}`
        idLastUpdate.textContent = dateBrasil;
        }catch(error){
            idPrice.textContent = "Erro na cotação";
            console.error("Detalhes do erro:", error);
            alert("Não foi possível atualizar a cotação agora. Tente novamente.");
        }
    }
init()

refreshBtn.addEventListener("click", init);