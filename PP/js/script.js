// Toggle chatbot display
function toggleChat() {
  const chatbox = document.getElementById("chatbox");
  chatbox.style.display = chatbox.style.display === "flex" ? "none" : "flex";
}

// Kirim pesan saat tekan Enter
document.getElementById("userInput").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
      event.preventDefault(); // mencegah default behavior
      sendMessage(); // panggil fungsi kirim
  }
});

// Simulasi kirim pesan
function sendMessage() {
  const input = document.getElementById("userInput");
  const content = document.getElementById("chat-content");

  if (!input.value.trim()) return;

  const userMessage = document.createElement("div");
  userMessage.className = "chat-user";
  userMessage.textContent = input.value;

  content.appendChild(userMessage);
  input.value = ""; // kosongkan input

  // Simulasi chatbot reply
  setTimeout(() => {
      const botMessage = document.createElement("div");
      botMessage.className = "chat-bot";
      botMessage.textContent = "Aku belum bisa menjawab, tapi aku belajar terus!";
      content.appendChild(botMessage);
      content.scrollTop = content.scrollHeight; // scroll ke bawah
  }, 1000);
}

// Hapus semua pesan
function clearChat() {
  document.getElementById("chat-content").innerHTML = "";
}

let articleVisible = false;

// Fungsi untuk menampilkan artikel
function showArticles() {
  const section = document.getElementById("articles-section");
  const list = document.getElementById("article-list");

  if (!articleVisible) {
    section.style.display = "block"; // Menampilkan artikel
    list.innerHTML = ""; // Bersihkan artikel yang sudah ada sebelumnya

    // Dummy artikel data
    const dummyArticles = [
      { title: "Tips Sehat ala Gen-Z", text: "Makan seimbang, tidur cukup, dan batasi scrolling!" },
      { title: "Mental Health Check", text: "Kenali tanda stres, dan jangan ragu cari bantuan." },
      { title: "Detox Digital", text: "Istirahat dari gadget itu penting, lho!" },
    ];

    dummyArticles.forEach((item) => {
      const card = document.createElement("div");
      card.className = "article-card";
      card.innerHTML = `<h4>${item.title}</h4><p>${item.text}</p>`;
      list.appendChild(card);
    });

  } else {
    section.style.display = "none"; // Menyembunyikan artikel
    list.innerHTML = ""; // Bersihkan daftar artikel
  }

  articleVisible = !articleVisible; // Toggle visibility
}
