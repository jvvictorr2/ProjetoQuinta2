const api = 'http://localhost:8080/hamburgers';

function getHamburgers() {
  fetch(api)
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById('hamburgerList');
      list.innerHTML = '';
      data.forEach(h => {
        const li = document.createElement('li');
        li.textContent = `${h.nome}: ${h.descricao} - R$${h.preco}`;
        const btn = document.createElement('button');
        btn.textContent = 'Excluir';
        btn.onclick = () => deleteHamburger(h.id);
        li.appendChild(btn);
        list.appendChild(li);
      });
    });
}

function addHamburger() {
  const nome = document.getElementById('nome').value;
  const descricao = document.getElementById('descricao').value;
  const preco = parseFloat(document.getElementById('preco').value);

  fetch(api, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nome, descricao, preco })
  }).then(() => getHamburgers());
}

function deleteHamburger(id) {
  fetch(`${api}/${id}`, { method: 'DELETE' })
    .then(() => getHamburgers());
}

getHamburgers();
