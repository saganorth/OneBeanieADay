
export default function PopUpComponent() {

  const popup = document.createElement("div");
  popup.className = "popup-notification";
  popup.style.position = "fixed";
  popup.style.right = "1rem";
  popup.style.bottom = "1rem";
  popup.style.background = "#111";
  popup.style.color = "white";
  popup.style.padding = "1rem 1.5rem";
  popup.style.borderRadius = "8px";
  popup.style.display = "none";
  popup.style.zIndex = "9999";
  popup.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
  popup.style.fontWeight = "500";
  popup.style.fontSize = "0.875rem";
  popup.style.transition = "opacity 0.3s ease";
  document.body.appendChild(popup);

  function showPopup(text: string, ms = 2000) {
    popup.textContent = text;
    popup.style.display = "block";
    popup.style.opacity = "1";
    
    window.setTimeout(() => {
      popup.style.opacity = "0";
      window.setTimeout(() => {
        popup.style.display = "none";
      }, 300);
    }, ms);
  }

  return {
    showPopup,
  };
}