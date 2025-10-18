const BOT_TOKEN = "8452586263:AAEJ4AakVZPaTPD4R3nbHHHQ0WlUSAqi_VY";
const CHAT_ID = "-4989108288";

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
      let ok;
      if (form.querySelector("#svc_title") != null) {
        const title_for_sample = form.querySelector("#svc_title");
        ok = await sendToTelegram(prefix + title_for_sample.innerText, data);
      } else {
        ok = await sendToTelegram(prefix, data);
      }

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
bindForm('#popup_audit .form[data-form="audit"]', "ЛИД: Получить аудит");
bindForm('#popup_service .form[data-form="service"]', "ЛИД: Услуга:");
