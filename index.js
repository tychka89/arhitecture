const app = () => {
  const result = document.getElementById('result');

  const inc = document.getElementById('increment');
  inc.addEventListener('click', () => {
    result.textContent = parseInt(result.textContent, 10) + 1;
  });
};

app();