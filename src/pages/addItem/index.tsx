import { useState, useEffect } from 'react';
import { doc, getDoc, updateDoc, arrayUnion } from 'firebase/firestore';
import { db } from "../../../firebase.config";
import { useAuth } from '../../context/useAuth';


const colorsList = [
  "aqua",
  "black",
  "blue",
  "fuchsia",
  "gray",
  "green",
  "lime",
  "maroon",
  "navy",
  "olive",
  "purple",
  "red",
  "silver",
  "teal",
  "white",
  "yellow"
];

const sizesList = ["xs", "s", "m", "l", "xl", "xxl"];

const categoriesList = ["shirt", "pant", "accessory", "new", "best-seller", "50off"];

const AddCompanyItem = () => {
  const { user, company } = useAuth();
  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [price, setPrice] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);

  const documentId = user?.id;

  useEffect(() => {
    const fetchItems = async () => {
      const docRef = doc(db, 'items', documentId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setItems(docSnap.data().data);
      } else {
        console.log('Document does not exist');
      }
    };

    fetchItems();
  }, [documentId]);


  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const newItem = {
      name,
      imageUrl,
      price: parseFloat(price),
      categories: selectedCategories,
      availability: {
        color: selectedColors,
        size: selectedSizes
      }
    };

    try {
      const docRef = doc(db, 'items', documentId);
      await updateDoc(docRef, {
        data: arrayUnion(newItem)
      });
      alert('Item added successfully');
      // Clear the form
      setName('');
      setImageUrl('');
      setPrice('');
      setSelectedCategories([]);
      setSelectedColors([]);
      setSelectedSizes([]);
      
      // Fetch updated items
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setItems(docSnap.data().data);
      }
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  const handleCategoryChange = (category) => {
    selectedCategories((prevCategories) => 
      prevCategories.includes(color) 
        ? prevCategories.filter((c) => c !== category) 
        : [...prevCategories, category]
    );
  };

  const handleColorChange = (color) => {
    setSelectedColors((prevColors) => 
      prevColors.includes(color) 
        ? prevColors.filter((c) => c !== color) 
        : [...prevColors, color]
    );
  };

  const handleSizeChange = (size) => {
    setSelectedSizes((prevSizes) => 
      prevSizes.includes(size) 
        ? prevSizes.filter((s) => s !== size) 
        : [...prevSizes, size]
    );
  };

  return (
    <div>
      <h2>Empresa: {company?.name}</h2>
      <h2>Agregar nuevo producto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>URL de la imagen</label>
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Precio</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Categorías</label>
          {categoriesList.map((category) => (
            <div key={category}>
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
              />
              <label>{category}</label>
            </div>
          ))}
        </div>
        <div>
          <label>Colores disponibles</label>
          {colorsList.map((color) => (
            <div key={color}>
              <input
                type="checkbox"
                checked={selectedColors.includes(color)}
                onChange={() => handleColorChange(color)}
              />
              <label>{color}</label>
            </div>
          ))}
        </div>
        <div>
          <label>Tallas disponibles</label>
          {sizesList.map((size) => (
            <div key={size}>
              <input
                type="checkbox"
                checked={selectedSizes.includes(size)}
                onChange={() => handleSizeChange(size)}
              />
              <label>{size}</label>
            </div>
          ))}
        </div>
        <button className="btn btn-success" type="submit">Publicar producto</button>
      </form>
    </div>
  );
};

export default AddCompanyItem;
function setItems(data: any) {
  throw new Error('Function not implemented.');
}

