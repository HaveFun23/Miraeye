let timer = 1;
const caseCounter = document.querySelector(".case_counter");
caseCounter.innerText = "Case 1";
function changeTheCase(elem) {
  const direction = elem.getAttribute("data-dir");
  console.log("работаем");
  // Сначала скрываем предыдущий элемент
  switch (direction) {
    case "forw":
      if (timer < 3) {
        // если у вас 3 картинки
        timer += 1;
      } else {
        timer = 1;
      }
      if (timer > 1) {
        const prePic = document.querySelectorAll("#pic" + (timer - 1));
        if (prePic) {
          prePic.forEach((element) => {
            element.style.display = "none";
          });
        }
      }
      if (timer == 1) {
        const prePic = document.querySelectorAll("#pic3");
        if (prePic) {
          prePic.forEach((element) => {
            element.style.display = "none";
          });
        }
      }
      // Показываем текущий элемент
      const currentPic1 = document.querySelectorAll("#pic" + timer);
      if (currentPic1) {
        currentPic1.forEach((element) => {
          element.style.display = "block";
        });
      }

      break;
    case "back":
      if (timer > 1) {
        // если у вас 3 картинки
        timer -= 1;
      } else {
        timer = 3;
      }
      const prePic = document.querySelectorAll(
        "#pic" + (timer + 1 > 3 ? 1 : timer + 1)
      );
      console.log("#pic" + (timer + 1 > 3 ? 1 : timer + 1));
      if (prePic) {
        prePic.forEach((element) => {
          element.style.display = "none";
        });
      }

      // Показываем текущий элемент
      const currentPic = document.querySelectorAll("#pic" + timer);
      if (currentPic) {
        currentPic.forEach((element) => {
          element.style.display = "block";
        });
      }

      break;
    default:
      break;
  }
  caseCounter.innerText = "Case " + timer;
}
