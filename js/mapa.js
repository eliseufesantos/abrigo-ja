// Inicializa o mapa e adiciona marcadores dos abrigos
function inicializarMapa() {
    // Verifica se o objeto google está disponível
    if (!window.google) return;

    // Localização padrão (caso não consiga obter a do usuário)
    const localPadrao = { lat: -23.55052, lng: -46.633308 };
    const mapa = new google.maps.Map(document.getElementById('mapa-abrigos'), {
        center: localPadrao,
        zoom: 13,
    });

    // Tenta obter a localização do usuário
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                const userPos = {
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude
                };
                mapa.setCenter(userPos);
                // Marcador do usuário
                new google.maps.Marker({
                    position: userPos,
                    map: mapa,
                    title: 'Você está aqui',
                    icon: {
                        path: google.maps.SymbolPath.CIRCLE,
                        scale: 8,
                        fillColor: '#48bb78',
                        fillOpacity: 1,
                        strokeWeight: 2,
                        strokeColor: '#2c5282'
                    }
                });
            },
            () => {/* Se não permitir, mantém padrão */}
        );
    }

    // Adiciona marcadores dos abrigos (dadosAbrigos deve estar disponível globalmente)
    if (window.dadosAbrigos && Array.isArray(window.dadosAbrigos)) {
        window.dadosAbrigos.forEach(abrigo => {
            if (abrigo.latitude && abrigo.longitude) {
                const marker = new google.maps.Marker({
                    position: { lat: abrigo.latitude, lng: abrigo.longitude },
                    map: mapa,
                    title: abrigo.nome,
                    icon: {
                        url: 'assets/logo.svg',
                        scaledSize: new google.maps.Size(32, 32)
                    }
                });
                const info = new google.maps.InfoWindow({
                    content: `<strong>${abrigo.nome}</strong><br>${abrigo.endereco || ''}`
                });
                marker.addListener('click', () => info.open(mapa, marker));
            }
        });
    }
} 