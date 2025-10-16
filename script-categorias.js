// Filtragem de produtos por categoria

document.addEventListener('DOMContentLoaded', function () {
  // Mapeamento de categorias para produtos
  const categoriaMap = {
    'Feminino': ['Blusa Floral', 'Vestido de Verão', 'Saia Plissada', 'Camiseta Estampada'],
    'Masculino': ['Calça Jeans', 'Jaqueta de Couro', 'Moletom Unissex', 'Tênis Casual'],
    'Infantil': ['Moletom Unissex', 'Camiseta Estampada']
  };

  // Seleciona os links das categorias
  const categoriaLinks = document.querySelectorAll('.categorias nav a');
  // Seleciona todos os produtos
  const produtos = document.querySelectorAll('.catalogo-produtos .produto-item');

  categoriaLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const categoria = link.textContent.trim();
      // Filtra os produtos
      produtos.forEach(produto => {
        const nomeProduto = produto.querySelector('h3').textContent.trim();
        if (categoriaMap[categoria] && categoriaMap[categoria].includes(nomeProduto)) {
          produto.style.display = '';
        } else {
          produto.style.display = 'none';
        }
      });
    });
  });

  // Exibe todos os produtos ao carregar
  document.querySelector('.categorias h2').addEventListener('click', function () {
    produtos.forEach(produto => produto.style.display = '');
  });
});
