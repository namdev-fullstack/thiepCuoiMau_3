
    const cover = document.querySelector('.cover-wrapper');
    const logo = document.querySelector('.split-right-logo');
    const inviteText = document.getElementById('invite-text');
    const flowerContainer = document.getElementById('flowers');

    const music = document.getElementById("bgMusic");

logo.addEventListener('click', () => {
  cover.classList.toggle('open');
  inviteText.style.display = 'none';

  music.play();

  setTimeout(() => {
    createFlowers(25);
  }, 1300);

  // Sau 1.8s (khi thiệp mở hoàn toàn) -> ẩn lớp cover để có thể click nội dung dưới
  setTimeout(() => {
    cover.classList.add('done');
  }, 1800);
});



    function createFlowers(count) {
      for (let i = 0; i < count; i++) {
        const flower = document.createElement('div');
        flower.classList.add('flower');
        flower.style.left = Math.random() * 100 + '%';
        flower.style.animationDuration = (Math.random() * 1.5 + 1.5) + 's';
        flower.style.animationDelay = Math.random() * 0.5 + 's';
        flowerContainer.appendChild(flower);

        setTimeout(() => flower.remove(), 2000); // 2s rồi xoá để nhẹ
      }
    }
