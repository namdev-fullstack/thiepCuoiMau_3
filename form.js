
      document
        .querySelector("#wishForm")
        .addEventListener("submit", async (e) => {
          e.preventDefault();
          const form = e.target;
          const status = document.querySelector("#wishStatus");
          status.textContent = "Đang gửi lời chúc...";
          try {
            await fetch(
              "https://script.google.com/macros/s/AKfycbxOXQyzsOIWEmkJRLiV3S84v6hE8AJcg9kQKGxW0vreeQsoSFjPX5yCsNqDakrl7KMo/exec",
              {
                method: "POST",
                body: JSON.stringify({
                  name: form.name.value,
                  message: form.message.value,
                }),
              }
            );
            status.textContent = "🎉 Lời chúc đã được gửi thành công!";
            form.reset();
          } catch (err) {
            status.textContent = "❌ Có lỗi xảy ra, vui lòng thử lại!";
          }
        });
  