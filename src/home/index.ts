import aboutSection from "../components/aboutSection";
import Herocomponent from "../components/ui/hero";

export default function homePage() {
    const container = document.createElement("div");
    container.className = 'home-page'; 
    container.appendChild(Herocomponent());
    container.appendChild(aboutSection());
    
    return container;
}

