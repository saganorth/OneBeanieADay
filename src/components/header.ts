

export default function Header (){
    const header = document.createElement("header");
    header.innerHTML = `
        <nav class="bg-gray-800 p-4 text-white">
            <ul class="flex space-x-4 items-center">
                <li><a href="/" class="hover:underline">Home</a></li>
                <li><a href="/products" class="hover:underline">Products</a></li>
                <li><a href="/about" class="hover:underline">About</a></li>
                <li><a href="/contact" class="hover:underline">Contact</a></li>
                <li>
                  <a href="/cart" class="hover:underline flex items-center" aria-label="View cart">
                    <i class="fas fa-shopping-cart" aria-hidden="true"></i>
                    <span class="sr-only">Cart</span>
                    <span class="ml-2 bg-red-500 text-white rounded-full px-2 text-xs">0</span>
                  </a>
                </li>
            </ul>
        </nav>
        `;  return header;

}