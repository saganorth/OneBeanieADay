
export default function FormComponent(): HTMLElement {
    const form = document.createElement('form');
    form.className = 'custom-form';
    form.innerHTML = `
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required />
        
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required />
        
        <label for="street">Message:</label>
        <textarea id="street" name="street" required></textarea>

        <label for="postalCode">Postal Code:</label>
        <input type="text" id="postalCode" name="postalCode" required />

        <label for ="city">City:</label>
        <input type="text" id="city" name="city" required />
        

    `;
    return form;
}