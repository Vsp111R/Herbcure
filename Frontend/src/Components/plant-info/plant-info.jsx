import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './plant-info.css';

const plantData = {
  aloeVera: {
    name: "Aloe Vera",
    image: "/images/aloe-vera.jpeg",
    description: `Aloe Vera is a succulent plant known for its medicinal and cosmetic uses. It is widely cultivated for its thick, fleshy leaves that contain a gel-like substance, which is utilized in a variety of applications. Aloe Vera is used extensively for skin care, particularly for its soothing properties when applied to burns, cuts, and other skin irritations. The plant has been revered for centuries, with evidence of its use dating back to ancient Egypt. Aloe Vera is known for its ability to reduce inflammation and promote healing of the skin. It has also gained popularity in the health and wellness industry due to its potential benefits for digestion and immune function. The gel from the plant can be consumed in small quantities to support digestive health, and it is believed to aid in detoxification of the body. Aloe Vera is rich in vitamins, minerals, and antioxidants, making it a staple ingredient in many health supplements.`,
    uses: [
      "Skin treatment",
      "Hair care",
      "Wound healing",
      "Digestive aid",
      "Detoxification",
    ],
    benefits: [
      "Promotes skin healing",
      "Supports digestion",
      "Boosts immunity",
      "Improves skin hydration",
      "Reduces inflammation",
    ],
  },
  tulsi: {
    name: "Tulsi (Holy Basil)",
    image: "/images/tulsi.jpeg",
    description: `Tulsi, also known as Holy Basil, is an aromatic plant native to the Indian subcontinent. Revered for its religious and medicinal significance, Tulsi is considered a sacred plant in Hinduism. It has been used for thousands of years in Ayurveda for its healing properties and is known as the "Queen of Herbs." Tulsi is a powerful adaptogen, meaning it helps the body adapt to stress and maintain balance. The plant has antibacterial, antiviral, and antifungal properties, making it a popular remedy for a wide range of infections.`,
    uses: [
      "Herbal tea",
      "Aromatherapy",
      "Respiratory relief",
      "Skin care",
      "Stress relief",
    ],
    benefits: [
      "Reduces stress",
      "Enhances immunity",
      "Supports respiratory health",
      "Improves mental clarity",
      "Promotes heart health",
    ],
  },
  neem: {
    name: "Neem",
    image: "/images/neem.jpeg",
    description: `Neem, scientifically known as Azadirachta indica, is a tree native to the Indian subcontinent. It has been used for over 5,000 years in Ayurvedic medicine for its numerous health benefits. Neem is often referred to as the "village pharmacy" because of its wide array of medicinal uses. Every part of the neem tree, including the leaves, bark, seeds, and flowers, contains potent compounds with antibacterial, antiviral, antifungal, and anti-inflammatory properties.`,
    uses: [
      "Skin care",
      "Dental care",
      "Pest control",
      "Blood sugar regulation",
      "Liver detoxification",
    ],
    benefits: [
      "Purifies blood",
      "Treats acne",
      "Boosts liver health",
      "Regulates blood sugar",
      "Protects against infections",
    ],
  },
  mint: {
    name: "Mint",
    image: "/images/mint.jpeg",
    description: `Mint is a versatile herb commonly used in culinary and medicinal applications. It belongs to the Mentha genus, which includes several species such as peppermint and spearmint. Mint is known for its refreshing aroma and cooling properties. The leaves of the mint plant are rich in essential oils, particularly menthol, which provides its characteristic fragrance and taste.`,
    uses: [
      "Flavoring food",
      "Herbal tea",
      "Digestive aid",
      "Aromatherapy",
      "Oral care",
    ],
    benefits: [
      "Aids digestion",
      "Relieves nausea",
      "Freshens breath",
      "Improves mental clarity",
      "Reduces stress",
    ],
  },
  lavender: {
    name: "Lavender",
    image: "/images/lavender.jpeg",
    description: `Lavender, scientifically known as Lavandula, is a fragrant herb native to the Mediterranean region. It is widely cultivated for its aromatic flowers and its essential oils, which have a wide range of uses in both beauty and health. Lavender is renowned for its calming and soothing properties, making it a popular herb in aromatherapy.`,
    uses: [
      "Essential oils",
      "Aromatherapy",
      "Skin healing",
      "Sleep aid",
      "Digestive aid",
    ],
    benefits: [
      "Reduces anxiety",
      "Improves sleep",
      "Relieves pain",
      "Soothes skin",
      "Promotes relaxation",
    ],
  },
};

const PlantInfo = () => {
  const { plantId } = useParams();
  const plant = plantData[plantId];

  if (!plant) {
    return <h2>Plant not found</h2>;
  }

  return (
    <div className="plant-info-container">
      <h1>{plant.name}</h1>
      <img src={plant.image} alt={plant.name} className="plant-image" />
      <p>{plant.description}</p>
      <h3>Uses</h3>
      <ul>
        {plant.uses.map((use, index) => (
          <li key={index}>{use}</li>
        ))}
      </ul>
      <h3>Benefits</h3>
      <ul>
        {plant.benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>
      <Link to="/herbcure">Back to Plant List</Link>
    </div>
  );
};

export default PlantInfo;
