
export default function PopUpComponent() {

 const popup = document.createElement("div");
  popup.style.position = "fixed";
  popup.style.right = "1rem";
  popup.style.bottom = "1rem";
  popup.style.background = "rgba(0,0,0,0.85)";
  popup.style.color = "white";
  popup.style.padding = "0.75rem 1rem";
  popup.style.borderRadius = "6px";
  popup.style.display = "none";
  popup.style.zIndex = "9999";
    document.body.appendChild(popup);

    function showPopup(text: string, ms = 2000) {
      popup.textContent = text;
      popup.style.display = "block";
      window.setTimeout(() => {
        popup.style.display = "none";
      }, ms);
    }
  
    return {
      showPopup,
    };
  }