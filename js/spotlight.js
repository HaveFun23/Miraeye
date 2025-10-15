const hero = document.getElementById("hero");
const svg = document.getElementById("spotlight");
const logo = document.getElementById("logo-eye");

let eyeCenter = { x: 0, y: 0 };
const updateEyeCenter = () => {
  const r = logo.getBoundingClientRect();
  eyeCenter = { x: r.left + r.width / 2, y: r.top + r.height / 2 };
};
const resizeSVG = () => {
  const rect = hero.getBoundingClientRect();
  svg.setAttribute("viewBox", `0 0 ${rect.width} ${rect.height}`);
  svg.setAttribute("width", rect.width);
  svg.setAttribute("height", rect.height);
  svg.style.left = rect.left + "px";
  svg.style.top = rect.top + "px";
};
const rebuildDefs = () => {
  svg.innerHTML = `<defs>
    <mask id="mask-inverse"><rect x="0" y="0" width="100%" height="100%" fill="white"/></mask>
    <mask id="mask-beam"><rect x="0" y="0" width="100%" height="100%" fill="black"/></mask>
  </defs>
  <rect x="0" y="0" width="100%" height="100%" fill="#000" opacity="0.9" mask="url(#mask-inverse)"></rect>
  <g mask="url(#mask-beam)">
    <rect x="0" y="0" width="100%" height="100%" fill="var(--orange)" opacity="0.88"></rect>
    <rect x="0" y="0" width="100%" height="100%" fill="var(--teal)" opacity="0.10"></rect>
  </g>`;
};

const cap = { rx: 120, ry: 120 }; // fixed-size ellipse
function updateBeam(clientX, clientY) {
  const rect = hero.getBoundingClientRect();
  // clamp mouse to hero
  const cx = Math.max(0, Math.min(rect.width, clientX - rect.left));
  const cy = Math.max(0, Math.min(rect.height, clientY - rect.top));

  // eye position relative to hero
  const ex = eyeCenter.x - rect.left;
  const ey = eyeCenter.y - rect.top;

  const angle = Math.atan2(cy - ey, cx - ex);
  const base = 6;
  const spread = 1.79;

  const a1 = angle - spread,
    a2 = angle + spread;

  // Helper to append into masks
  const maskInv = svg.querySelector("#mask-inverse");
  const maskBeam = svg.querySelector("#mask-beam");
  maskInv.innerHTML =
    '<rect x="0" y="30" width="100%" height="100%" fill="white"/>';
  maskBeam.innerHTML =
    '<rect x="0" y="0" width="100%" height="100%" fill="black"/>';

  // compute polygon points
  const p0 = { x: ex + Math.cos(a1) * base, y: ey + Math.sin(a1) * base };
  const p1 = { x: ex + Math.cos(a2) * base, y: ey + Math.sin(a2) * base };

  // function to find ellipse edge point for direction theta
  const edgePoint = (theta) => {
    const ca = Math.cos(angle),
      sa = Math.sin(angle);
    const dirx = Math.cos(theta),
      diry = Math.sin(theta);
    const lx = dirx * ca + diry * sa;
    const ly = -dirx * sa + diry * ca;
    const t =
      1 /
      Math.sqrt((lx * lx) / (cap.rx * cap.rx) + (ly * ly) / (cap.ry * cap.ry));
    const wx = t * lx * ca + t * ly * -sa;
    const wy = t * lx * sa + t * ly * ca;
    return { x: cx + wx, y: cy + wy };
  };
  const p2 = edgePoint(a2);
  const p3 = edgePoint(a1);

  const polyStr = `${p0.x},${p0.y} ${p1.x},${p1.y} ${p2.x},${p2.y} ${p3.x},${p3.y}`;

  // build shapes
  const polyInv = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "polygon"
  );
  polyInv.setAttribute("points", polyStr);
  polyInv.setAttribute("fill", "black");

  const polyBeam = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "polygon"
  );
  polyBeam.setAttribute("points", polyStr);
  polyBeam.setAttribute("fill", "white");

  const eyeLogo = document.querySelector(".main_logo");
  eyeLogo.style.transform = `rotate(${(angle * 180) / Math.PI}deg)`;
  const ellipseInv = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "ellipse"
  );
  ellipseInv.setAttribute("cx", cx);
  ellipseInv.setAttribute("cy", cy);
  ellipseInv.setAttribute("rx", cap.rx);
  ellipseInv.setAttribute("ry", cap.ry);
  ellipseInv.setAttribute(
    "transform",
    `rotate(${(angle * 180) / Math.PI}, ${cx}, ${cy})`
  );
  ellipseInv.setAttribute("fill", "black");

  const ellipseBeam = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "ellipse"
  );
  ellipseBeam.setAttribute("cx", cx);
  ellipseBeam.setAttribute("cy", cy);
  ellipseBeam.setAttribute("rx", cap.rx);
  ellipseBeam.setAttribute("ry", cap.ry);
  ellipseBeam.setAttribute("stroke", "black");
  ellipseBeam.setAttribute("stroke-width", "1px");
  ellipseBeam.setAttribute("fill", "white");

  maskInv.appendChild(polyInv);
  maskInv.appendChild(ellipseInv);
  maskBeam.appendChild(polyBeam);
  maskBeam.appendChild(ellipseBeam);
}

rebuildDefs();
resizeSVG();
updateEyeCenter();
window.addEventListener("resize", () => {
  resizeSVG();
  updateEyeCenter();
});

hero.addEventListener("mousemove", (e) => {
  updateBeam(e.clientX, e.clientY);
});
// default beam position center
(() => {
  const r = hero.getBoundingClientRect();
  updateBeam(r.left + r.width * 0.62, r.top + r.height * 0.42);
})();
