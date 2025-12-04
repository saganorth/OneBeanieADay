import type{ Product } from '../models/product';
import { ProductListProps } from '../models/productIteam';
import PopUpComponent from './popup';

export default function ProductList({ 
  products, 
  handleAddToCart,
  assetBaseUrl = "",
}: ProductListProps): HTMLElement {
 const root = document.createElement("div");
    root.className = "productlist";
    const grid = document.createElement("div");
    grid.className = "productgrid";
    root.appendChild(grid);
    root.appendChild(PopUpComponent().showPopup);
 
    products.forEach((product)=> {
        const cardWrap =document.createElement("div");
        cardWrap.className = "productcardwrap";
        const card = document.createElement("div");
        card.className = "productcard";
        const a = document.createElement("a");
        a.href = `/products/${product.category}/${product.id}`;
        a.className = "productlink";
        const img = document.createElement("img");
        
        const leadingUrl = product.imageUrl.startsWith('/')
          ? `${assetBaseUrl}${product.imageUrl}`
          : `${assetBaseUrl}/${product.imageUrl}`;

    })

ProductList.map((product) =>
    <div className="flex flex-wrap justify-around">
      {products.map((product) => {
        const imageUrl = product.imageUrl.startsWith('/')
          ? `${assetBaseUrl}${product.imageUrl}`
          : `${assetBaseUrl}/${product.imageUrl}`;

        return (
          <div key={product.id} className="m-4 w-64 relative group">
            <div className="block overflow-hidden shadow-lg bg-white p-5 flex flex-col justify-between border border-white h-auto">
            <Link href={`/products/${product.category}/${product.id}`} className="text-center">
         
              <Image
                src={imageUrl}
                alt={product.namn}
                width={500}
                height={300}
                className="w-full mb-4 object-contain"
                style={{ maxHeight: '300px' }}
              />

                <span className="font-bold text-xl" style={{ fontFamily: "'Caveat', cursive" }}>
                  {product.namn}
                </span>
              </Link>

              <button
                onClick={() => handleCartClick(product)}
                className="center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-3 py-2 text-sm rounded"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        );
      })}

      {/* Popup Component */}
      {showPopup && selectedProduct && (
        <Popup show={showPopup} onClose={() => setShowPopup(false)} />
      )}
    </div>
  );
};

