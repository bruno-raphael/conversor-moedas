


    document.getElementById('converterForm').addEventListener('submit', function(event) {
        event.preventDefault();
    
        const amount = parseFloat(document.getElementById('amount').value);
        const fromCurrency = document.getElementById('fromCurrency').value;
        const toCurrency = document.getElementById('toCurrency').value;
    
        if (isNaN(amount) || amount <= 0) {
            alert('Por favor, insira um valor válido.');
            return;
        }
    
        const apiKey = '601db20257c4577ffe0f2191'; // Substitua pela sua chave de API real
        const apiUrl = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
    
        // Adiciona um indicador de carregamento
        document.getElementById('result').innerText = 'Carregando...';
    
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const rate = data.rates[toCurrency];
                if (!rate) {
                    alert('Taxa de câmbio não disponível.');
                    return;
                }
                const convertedAmount = amount * rate;
                document.getElementById('result').innerText = `Resultado: ${convertedAmount.toFixed(2)} ${toCurrency}`;
            })
            .catch(error => {
                console.error('Erro ao buscar taxas de câmbio:', error);
                alert('Erro ao buscar taxas de câmbio.');
            });
    });
    