export default function aboutSection() {
    const about = document.createElement("section");
    about.className = "about-section";
    about.innerHTML = `
        <h2>Why Saga Crafts One Beanie a Day</h2>
        <p>Saga makes one beanie a day to keep production small, intentional, and sustainable. Each beanie is handcrafted and inspected for quality, allowing Saga to focus on unique designs and materials rather than mass output. The daily rhythm creates scarcity and anticipation for collectors, reduces waste, and preserves traditional craftsmanship.</p>
        <p>All beanies are made from recycled yarn. The project is a creative challenge for Saga and a fun, community-driven way to reach more people.</p>
    `;
    return about;
}
