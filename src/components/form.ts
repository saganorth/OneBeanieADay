
export default function FormComponent(): HTMLElement {
    const form = document.createElement('form');
    form.className = 'custom-form';
    form.innerHTML = `
        <h2>Shipping Information</h2>
        
        <div class="form-row">
            <div class="form-group">
                <label for="firstName">First Name *</label>
                <input type="text" id="firstName" name="firstName" required />
            </div>
            <div class="form-group">
                <label for="lastName">Last Name *</label>
                <input type="text" id="lastName" name="lastName" required />
            </div>
        </div>
        
        <label for="email">Email *</label>
        <input type="email" id="email" name="email" required />
        
        <label for="phone">Phone Number *</label>
        <input type="tel" id="phone" name="phone" required />
        
        <label for="address">Street Address *</label>
        <input type="text" id="address" name="address" required />
        
        <div class="form-row">
            <div class="form-group">
                <label for="postalCode">Postal Code *</label>
                <input type="text" id="postalCode" name="postalCode" required />
            </div>
            <div class="form-group">
                <label for="city">City *</label>
                <input type="text" id="city" name="city" required />
            </div>
        </div>
        
        <label for="country">Country *</label>
        <select id="country" name="country" required>
            <option value="">Select Country</option>
            <option value="SE" selected>Sweden</option>
            <option value="NO">Norway</option>
            <option value="DK">Denmark</option>
            <option value="FI">Finland</option>
        </select>
    `;
    return form;
}