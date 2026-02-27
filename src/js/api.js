export async function fetchExchangeRate() {
    try {
        // A lógica de busca entrará aqui
        const response = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL');
        const data = await response.json();
        return data.USDBRL;
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
        throw error;
    }
}