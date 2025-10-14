const I18N = {
  ru: {
    nav_services: "Услуги",
    nav_how: "Как начать",
    nav_cases: "Кейсы",
    nav_hero: "Главная",
    hero_h1a: "Остановите конкурентов,",
    hero_h1b: "ворующих ваш трафик",
    hero_sub:
      "Мы убираем недобросовестных конкурентов, использующих ваши брендовые ключи в Google.",
    btn_audit: "Получить аудит",
    btn_tg: "Написать в TG",
    btn_cancel: "Отмена",
    btn_consult: "Консультация",
    services_title: "Услуги",
    svc_full:
      "Защита бренда под ключ — поиск и уничтожение конкурентов по всем направлениям для наилучшего результата",
    svc_geo:
      "Сопровождение на определенных гео — защищаем вас от конкурентов в определенных странах",
    svc_analysis:
      "Анализ брендового трафика для понимания стратегии борьбы с недобросовестными конкурентами",
    svc_consult: "Консультации, касающиеся брендового трафика",
    how_title: "Как начать",
    how_s1: "Шаг 1: оставьте заявку — укажите, где удобнее связаться.",
    how_s2: "Шаг 2: мы проведём экспресс-анализ бренда и конкурентной среды.",
    how_s3: "Шаг 3: согласуем стратегию подавления и план действий.",
    how_s4: "Шаг 4: приступаем, уничтожаем недобросовестных конкурентов.",
    form_title: "Свяжемся с вами",
    form_name: "Имя",
    form_prefer: "Где удобнее общаться",
    form_contact: "Контакт (ник/номер/email)",
    form_send: "Отправить",
    form_ok: "Заявка отправлена. Мы на связи!",
    audit_title: "Получить аудит",
  },
  en: {
    nav_services: "Services",
    nav_how: "How it works",
    nav_cases: "Cases",
    nav_hero: "Home",
    hero_h1a: "Stop competitors stealing your traffic",
    hero_sub:
      "We remove unfair competitors abusing your branded keywords on Google.",
    btn_audit: "Get an audit",
    btn_tg: "Message on TG",
    btn_cancel: "Cancel",
    btn_consult: "Consultation",
    services_title: "Services",
    svc_full:
      "Full brand defense — find and eliminate competitors across all channels for the best result",
    svc_geo:
      "Geo-specific support — protect you from competitors in selected countries",
    svc_analysis:
      "Branded traffic analysis to plan the strategy against unfair competitors",
    svc_consult: "Consulting on branded traffic",
    how_title: "How to start",
    how_s1: "Step 1: leave a request — tell us where to reach you.",
    how_s2: "Step 2: we run an express brand & competition scan.",
    how_s3: "Step 3: align suppression strategy and action plan.",
    how_s4: "Step 4: execute and eliminate unfair competitors.",
    form_title: "We'll contact you",
    form_name: "Name",
    form_prefer: "Preferred channel",
    form_contact: "Contact (handle/number/email)",
    form_send: "Send",
    form_ok: "Request sent. We'll be in touch!",
    audit_title: "Get an audit",
  },
};

let LANG = "ru";
const applyI18N = () => {
  const dict = I18N[LANG];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });
  document.documentElement.lang = LANG;
};
const btns = document.querySelectorAll("#lang_but");
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btns.forEach((el) => {
      if (el.className == "active") el.className = "";
    });
    btn.className = "active";
    LANG = btn.dataset.lang;
    document
      .querySelectorAll(".lang__btn")
      .forEach((b) => b.classList.toggle("lang__btn--active", b === btn));
    applyI18N();
  });
});
applyI18N();
