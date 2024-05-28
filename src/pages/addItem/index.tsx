import React, { useState, useEffect } from 'react';
import { doc, getDoc, updateDoc, arrayUnion } from 'firebase/firestore';
import { db } from "../../../firebase.config";
import { useAuth } from '../../context/useAuth';
import { toast } from 'sonner';

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
        console.log('La empresa no existe');
      }
    };

    fetchItems();
  }, [documentId]);

  const handleSubmit = async (e) => {
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
      toast.info('El producto fue agregado.');
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
    setSelectedCategories((prevCategories) => 
      prevCategories.includes(category) 
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
    <div className="container mt-4">
      <h2 className="mb-4">Empresa: {company?.name}</h2>
      <h2 className="mb-4">Agregar nuevo producto</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <h3 className="form-label">Nombre</h3>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <h3 className="form-label">URL de la imagen</h3>
          <input
            type="text"
            className="form-control"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <h3 className="form-label">Precio</h3>
          <input
            type="number"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <h3 className="form-label">Categorías</h3>
          {categoriesList.map((category) => (
            <div key={category} className="form-check">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
              />
              <label className="form-check-label">{category}</label>
            </div>
          ))}
        </div>
        <div className="mb-3">
          <h3 className="form-label">Colores disponibles</h3>
          {colorsList.map((color) => (
            <div key={color} className="form-check">
              <input
                type="checkbox"
                checked={selectedColors.includes(color)}
                onChange={() => handleColorChange(color)}
              />
              <label className="form-check-label">{color}</label>
            </div>
          ))}
        </div>
        <div className="mb-3">
          <h3 className="form-label">Tallas disponibles</h3>
          {sizesList.map((size) => (
            <div key={size} className="form-check flex">
              <input
                type="checkbox"
                checked={selectedSizes.includes(size)}
                onChange={() => handleSizeChange(size)}
              />
              <label className="form-check-label">{size}</label>
            </div>
          ))}
        </div>
        <div className='grid gap-4 grid-cols-2'>
          <a className='btn btn-secondary' href="/company-items">Regresar a Administrar Productos</a>
          <button className="btn btn-success" type="submit">Publicar producto</button>
        </div>
      </form>
    </div>
  );
};

export default AddCompanyItem;
