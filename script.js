window.onload = () => {
  document.querySelector('.menu').addEventListener('click', function() {
    this.classList.add('active');
    document.querySelector('.header .nav').classList.add('active');
    document.querySelector('html').classList.add('lock');
  });

  document.querySelector('.menu__close').addEventListener('click', function() {
    this.classList.remove('active');
    document.querySelector('.header .nav').classList.remove('active');
    document.querySelector('html').classList.remove('lock');
  });
}