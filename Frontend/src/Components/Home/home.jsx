import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Import CSS for styling

const Home = () => {
  const navigate = useNavigate();

  // Updated product data with more details
  const products = [
    {
      id: 1,
      name: "Aloe Vera Plant",
      price: "₹299",
      originalPrice: "₹399",
      discount: "25% OFF",
      seller: "HerbCure Naturals",
      image: "/images/aloe-vera.jpeg",
    },
    {
      id: 2,
      name: "Basil Herb",
      price: "₹199",
      originalPrice: "₹259",
      discount: "23% OFF",
      seller: "Green Garden",
      image: "/images/basil.jpeg",
    },
    {
      id: 3,
      name: "Tulsi Plant",
      price: "₹249",
      originalPrice: "₹349",
      discount: "29% OFF",
      seller:  "HerbCure Naturals",
      image: "/images/tulsi.jpeg",
    },
    {
      id: 4,
      name: "Neem Plant",
      price: "₹399",
      originalPrice: "₹499",
      discount: "20% OFF",
      seller:  "HerbCure Naturals",
      image: "/images/neem.jpeg",
    },
    {
      id: 5,
      name: "Mint Leaves Plant",
      price: "₹179",
      originalPrice: "₹229",
      discount: "22% OFF",
      seller: "Fresh Herbs Co.",
      image: "/images/mint.jpeg",
    },
    {
      id: 6,
      name: "Lavender Plant",
      price: "₹349",
      originalPrice: "₹449",
      discount: "22% OFF",
      seller: "Blossom Garden",
      image: "/images/Lavender.jpg",
    },
    {
      id: 7,
      name: "Lemongrass Plant",
      price: "₹199",
      originalPrice: "₹299",
      discount: "33% OFF",
      seller:  "HerbCure Naturals",
      image: "/images/lemongrass.jpg",
    },
    {
      id: 8,
      name: "chamomile",
      price: "₹250",
      originalPrice: "₹399",
      discount: "37% OFF",
      seller:  "HerbCure Naturals",
      image: "/images/chamomile.jpg",
    },
  ];

  // Perfume data
  const general = [
    {
      id: 1,
      name: "Chameli Perfume",
      price: "₹510",
      originalPrice: "₹600",
      discount: "15% OFF",
      seller: "HerbCure Fregments",
      image: "/perfumes/Amber.jpg",
    },
    {
      id: 2,
      name: "Kaadambari Perfume",
      price: "₹399",
      originalPrice: "₹599",
      discount: "33% OFF",
      seller: "Fragrance World",
      image: "/perfumes/Kaadambari.jpg",
    },
    {
      id: 3,
      name: "Lamhe Perfume",
      price: "₹900",
      originalPrice: "₹1000",
      discount: "10% OFF",
      seller: "Varsache Fregnance",
      image: "/perfumes/Lamhe.jpg",
    },
    {
      id: 4,
      name: "Shamama Perfume",
      price: "₹1200",
      originalPrice: "₹1500",
      discount: "20% OFF",
      seller: "Herbcure Fregnance",
      image: "/perfumes/Shamama.jpg",
    },
    {
      id: 5,
      name: "Yaquet Perfume",
      price: "₹722.50",
      originalPrice: "850",
      discount: "15% OFF",
      seller: "Fragrance World",
      image: "/perfumes/Yaquet.jpg",
    },
    {
      id: 7,
      name: "Zaffrani Chandana Perfume",
      price: "₹968",
      originalPrice: "₹1100",
      discount: "12% OFF",
      seller: "Fragrance World",
      image: "/perfumes/ZAFFRANI .jpg",
    },
    {
      id: 8,
      name: "Phuaar Perfume",
      price: "₹792",
      originalPrice: "₹900",
      discount: "12% OFF",
      seller: "HerbCure Fregments",
      image: "/perfumes/Phuaar.jpg",
    },
   
    {
      id: 9,
      name: "Jasmine Perfume",
      price: "₹799",
      originalPrice: "₹1099",
      discount: "27% OFF",
      seller: "Fragrance World",
      image: "/perfumes/Jasmine.jpeg",
    },
  ];
  const perfumes = [
    {
      id: 1,
      name: "Guduchi Tablet",
      originalPrice: "₹250",
      discount: "10% OFF",
      price: "₹225",
      seller: "HerbCure Naturals",
      image: "/general/Guduchi-Tablet.jpg",
    },
    {
      id: 2,
      name: "Ashwagandha Tablet",
      originalPrice: "₹300",
      discount: "15% OFF",
      price: "₹255",
      seller: "HerbCure Naturals",
      image: "/general/Ashwagandha-Tablet.jpg",
    },
    {
      id: 3,
      name: "Wheat Grass Juice Powder",
      originalPrice: "₹450",
      discount: "12% OFF",
      price: "₹396",
      seller: "HerbCure Naturals",
      image: "/general/Wheat Grass Juice Powder.jpg",
    },
    {
      id: 4,
      name: "Sprouted Golden Flax Seed Powder",
      originalPrice: "₹350",
      discount: "10% OFF",
      price: "₹315",
      seller: "HerbCure Naturals",
      image: "/general/Sprouted Golden Flax Seed Powder.jpg",
    },
    {
      id: 5,
      name: "Spirulina Powder",
      originalPrice: "₹500",
      discount: "20% OFF",
      price: "₹400",
      seller: "HerbCure Naturals",
      image: "/general/Spirulina Powder.jpg",
    },
    {
      id: 6,
      name: "Karela, Jamun, Neem, Amla Juice",
      originalPrice: "₹400",
      discount: "15% OFF",
      price: "₹340",
      seller: "HerbCure Naturals",
      image: "/general/Karela ,Jamun ,Neem ,Amla-juice.jpg",
    },
    {
      id: 7,
      name: "Ginger, Garlic Juice",
      originalPrice: "₹320",
      discount: "10% OFF",
      price: "₹288",
      seller: "HerbCure Naturals",
      image: "/general/Ginger,Garlic-juice.jpg",
    },
    {
      id: 8,
      name: "Amla, Karela, Jamun, Guduchi Juice",
      originalPrice: "₹380",
      discount: "12% OFF",
      price: "₹334",
      seller: "HerbCure Naturals",
      image: "/general/Amla, Karela, Jamun, Guduchi - juice.jpg",
    },
];

  // Discount data with brief information
  const discounts = [
    {
      id: 1,
      image: "/images/discount1.jpeg",
      title: "Buy 1 Get 1 Free",
      description: "Get a free plant with every purchase of ₹500 or more.",
    },
    {
      id: 2,
      image: "/images/discount2.jpeg",
      title: "20% Off All Orders",
      description: "Use code PLANT20 at checkout to receive 20% off your order.",
    },
    {
      id: 3,
      image: "/images/discount3.jpg",
      title: "Free Shipping",
      description: "Get free shipping on all orders over ₹1000.",
    },
  ];
  const herbalFlowers = [
    {
      id: 1,
      name: "Hibiscus",
      originalPrice: "₹400",
      discount: "15% OFF",
      price: "₹340",
      seller: "HerbCure Naturals",
      image: "/herbal-flowers/Hibiscus-.jpg",
    },
    {
      id: 2,
      name: "Rose",
      originalPrice: "₹350",
      discount: "10% OFF",
      price: "₹315",
      seller: "HerbCure Naturals",
      image: "/herbal-flowers/Rose.jpg",
    },
    {
      id: 3,
      name: "Calendula",
      originalPrice: "₹450",
      discount: "12% OFF",
      price: "₹396",
      seller: "HerbCure Naturals",
      image: "/herbal-flowers/Calendula (Marigold).jpg",
    },
    {
      id: 4,
      name: "Jasmine",
      originalPrice: "₹500",
      discount: "20% OFF",
      price: "₹400",
      seller: "HerbCure Naturals",
      image: "/herbal-flowers/Jasmine.jpg",
    },
    {
      id: 5,
      name: "Echinacea",
      originalPrice: "₹600",
      discount: "18% OFF",
      price: "₹492",
      seller: "HerbCure Naturals",
      image: "/herbal-flowers/Echinacea.jpg",
    },
    {
      id: 6,
      name: "Butterfly Pea Flower",
      originalPrice: "₹300",
      discount: "10% OFF",
      price: "₹270",
      seller: "HerbCure Naturals",
      image: "/herbal-flowers/Butterfly Pea Flower.jpg",
    },
    {
      id: 7,
      name: "Dandelion",
      originalPrice: "₹350",
      discount: "15% OFF",
      price: "₹297.50",
      seller: "HerbCure Naturals",
      image: "/herbal-flowers/Dandelion.jpg",
    },
    {
      id: 8,
      name: "Passionflower",
      originalPrice: "₹450",
      discount: "12% OFF",
      price: "₹396",
      seller: "HerbCure Naturals",
      image: "/herbal-flowers/Passionflower.jpg",
    },
  ];
  

  // Function to navigate to the product page
  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="home-container">
      {/* Discount Banner */}
      <div className="discount-banner">
        {discounts.map((discount) => (
          <div key={discount.id} className="discount-card">
            <img src={discount.image} alt={discount.title} />
            <h3 className="discount-title">{discount.title}</h3>
            <p className="discount-description">{discount.description}</p>
          </div>
        ))}
      </div>
      

      {/* Product Listings */}
      <h2 className="section-title">Best Sellers</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="product-card" 
            onClick={() => handleProductClick(product.id)}
          >
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-seller">
              Seller: <strong>{product.seller}</strong>
              {product.seller === "HerbCure Naturals" && (
                <span className="trusted-banner">100% Trusted</span>)}</p>
            <p className="product-seller">Seller: <strong>{product.seller}</strong></p>
            <p className="product-price">
              <span className="discounted-price">{product.price}</span>
              <span className="original-price">{product.originalPrice}</span>
              <span className="discount">{product.discount}</span>
              
            </p>
            <p className="product-rating">Rating: 5 {product.rating} &#9733;</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        ))}
      </div>
      <h2 className="section-title">Perfumes</h2>
<div className="product-grid">
  {general.map((perfume) => (
    <div 
      key={perfume.id} 
      className="product-card" 
      onClick={() => handleProductClick(perfume.id)}
    >
      <img src={perfume.image} alt={perfume.name} className="product-image" />
      <h3 className="product-name">{perfume.name}</h3>
      
      <p className="product-seller">Seller: <strong>{perfume.seller}</strong></p>
      
      <p className="product-price">
        <span className="discounted-price">{perfume.price}</span>
        <span className="original-price">{perfume.originalPrice}</span>
        <span className="discount">{perfume.discount}</span>
      </p> <p className="product-rating">Rating: 5 {perfume.rating} &#9733;</p>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  ))}
</div>

      {/* Perfume Listings */}
      <h2 className="section-title">General</h2>
      <div className="product-grid">
        {perfumes.map((perfume) => (
          <div 
            key={perfume.id} 
            className="product-card" 
            onClick={() => handleProductClick(perfume.id)}
          >
            <img src={perfume.image} alt={perfume.name} className="product-image" />
            <h3 className="product-name">{perfume.name}</h3>
            <p className="product-seller">Seller: <strong>{perfume.seller}</strong></p>
            {perfume.seller === "HerbCure Fregnance" && (
              <span className="trusted-banner">100% Trusted</span>)}
            <p className="product-price">
              <span className="discounted-price">{perfume.price}</span>
              <span className="original-price">{perfume.originalPrice}</span>
              <span className="discount">{perfume.discount}</span>
            </p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
          
        ))}
        
        <h2 className="section-title">Herbal Flowers</h2>
<div className="product-grid">
  {herbalFlowers.map((flower) => (
    <div 
      key={flower.id} 
      className="product-card" 
      onClick={() => handleProductClick(flower.id)}
    >
      <img src={flower.image} alt={flower.name} className="product-image" />
      <h3 className="product-name">{flower.name}</h3>
      <p className="product-seller">Seller: <strong>{flower.seller}</strong></p>
      <p className="product-price">
        <span className="discounted-price">{flower.price}</span>
        <span className="original-price">{flower.originalPrice}</span>
        <span className="discount">{flower.discount}</span>
      </p>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  ))}
</div>


       
        
      </div>
    </div>
  );
};

export default Home;
