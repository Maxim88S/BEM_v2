document.addEventListener('DOMContentLoaded', () => {
  // Параллакс-эффект для заднего фона
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    document.querySelector('.aquarium__section--intro')
      .style.backgroundPositionY = scrolled * 0.5 + 'px';
  });

  // Интерактивная зона
  const interactiveArea = document.querySelector('.interactive-area');
  const speciesData = {
    "Клоун-рыбка": "Обитает среди анемонов, выживает благодаря иммунитету к яду.",
    "Дискус": "Популярная декоративная рыба родом из Амазонки, требовательна к качеству воды.",
    "Гуппи": "Выносливая и плодовитая, идеальна для начинающих аквариумистов."
  };

  // Создаём плавающих рыбок
  Object.keys(speciesData).forEach((name, index) => {
    const fish = document.createElement('img');
    fish.src = name === "Клоун-рыбка" ? 'clownfish.png'
             : name === "Дискус" ? 'discus.png' : 'guppy.png';
    fish.alt = name;
    fish.className = 'interactive-area__fish';
    fish.style.top = (20 + index * 30) + '%';
    fish.style.left = (10 + index * 30) + '%';
    fish.addEventListener('click', () => {
      alert(`${name}: ${speciesData[name]}`);
    });
    interactiveArea.appendChild(fish);
  });
});
