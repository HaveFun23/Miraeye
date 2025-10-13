const BOT_TOKEN = "PASTE_TELEGRAM_BOT_TOKEN";
const CHAT_ID = "PASTE_TELEGRAM_CHAT_ID";

async function sendToTelegram(prefix, data) {
  const text = `${prefix}\nИмя: ${data.name}\nКанал: ${data.channel}\nКонтакт: ${data.contact}`;
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: CHAT_ID, text }),
  });
  return res.ok;
}

function bindForm(selector, prefix) {
  const form = document.querySelector(selector);
  if (!form) return;
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const data = Object.fromEntries(fd.entries());
    try {
      const ok = await sendToTelegram(prefix, data);
      if (ok) {
        form.querySelector(".form__ok").hidden = false;
        form.reset();
      } else alert("Ошибка отправки");
    } catch (err) {
      alert("Ошибка сети");
    }
  });
}
bindForm('.form[data-form="contact"]', "ЛИД: форма 'Как начать'");
bindForm('#popup-audit .form[data-form="audit"]', "ЛИД: Получить аудит");
bindForm('#popup-service .form[data-form="service"]', "ЛИД: Услуга");
