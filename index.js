const app = () => {
  let counterValue = 0;

  const result = document.getElementById('result');

  const incHandler = () => {
    counterValue += 1;
    result.textContent = counterValue;
  }

  const decHandler = () => {
    counterValue -= 1;
    result.textContent = counterValue;
  }

  const inc = document.getElementById('increment');
  inc.addEventListener('click', incHandler);

  const dec = document.getElementById('decrement');
  dec.addEventListener('click', decHandler);
  
};

app();