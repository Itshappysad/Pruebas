// ItemsList.tsx
import React, { useEffect, useState } from 'react';
import { collection, doc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from "../../../firebase.config";
import { ItemDocument, ItemData } from './types';
import './styles.css';

const CompanyItemsManager: React.FC = () => {
  const [items, setItems] = useState<ItemDocument[]>([])
  const [loading, setLoading] = useState(true)
  const [newItem, setNewItem] = useState<ItemData>({
    imageUrl: '',
    categories: [],
    name: '',
    price: 0,
    availability: { size: [], color: [] },
  })


  useEffect(() => {
    const fetchItems = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'items'));
        const itemsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...(doc.data() as Omit<ItemDocument, 'id'>),
        }));
        setItems(itemsData);
      } catch (error) {
        console.error("Error fetching items: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  // const addItem = async (id: string) => {
  //   try {
  //     const itemDoc = doc(db, 'items', id);
  //     const currentItem = items.find(item => item.id === id);
  //     const updatedData = currentItem ? [...currentItem.data, newItem] : [newItem];

  //     await updateDoc(itemDoc, { data: updatedData });
  //     setNewItem({
  //       imageUrl: '',
  //       categories: [],
  //       name: '',
  //       price: 0,
  //       availability: { size: [], color: [] },
  //     });
  //     // Re-fetch or update local state
  //     setItems(prevItems => prevItems.map(item => {
  //       if (item.id === id) {
  //         return { ...item, data: updatedData };
  //       }
  //       return item;
  //     }));
  //   } catch (error) {
  //     console.error("Error adding item: ", error);
  //   }
  // };

  // const editItem = async (docId: string, itemIndex: number, updatedItem: ItemData) => {
  //   try {
  //     const itemDoc = doc(db, 'items', docId);
  //     const currentItem = items.find(item => item.id === docId);
  //     if (!currentItem) return;

  //     const updatedData = [...currentItem.data];
  //     updatedData[itemIndex] = updatedItem;

  //     await updateDoc(itemDoc, { data: updatedData });
  //     setItems(prevItems => prevItems.map(item => {
  //       if (item.id === docId) {
  //         return { ...item, data: updatedData };
  //       }
  //       return item;
  //     }));
  //   } catch (error) {
  //     console.error("Error editing item: ", error);
  //   }
  // };

  const deleteItem = async (itemIndex: number) => {
    console.log('I will delete the item:',itemIndex)
    // try {
    //   const itemDoc = doc(db, 'items', docId);
    //   const currentItem = items.find(item => item.id === docId);
    //   if (!currentItem) return;

    //   const updatedData = currentItem.data.filter((_, index) => index !== itemIndex);

    //   await updateDoc(itemDoc, { data: updatedData });
    //   setItems(prevItems => prevItems.map(item => {
    //     if (item.id === docId) {
    //       return { ...item, data: updatedData };
    //     }
    //     return item;
    //   }));
    // } catch (error) {
    //   console.error("Error deleting item: ", error);
    // }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Productos</h1>
      <div className="container">

        <div className="row">
            <h2 className="col-sm"> Imagen </h2>
            <h2 className="col-sm">ID</h2>
            <h2 className="col-sm">Nombre</h2>
            <h2 className="col-sm">Precio</h2>
            <h2 className="col-sm">Categorías</h2>
            <h2 className="col-sm">Tallas</h2>
            <h2 className="col-sm">Colores</h2>
            <h2 className="col-sm">Acciones</h2>
        </div>
        {items[0].data.map((dataItem, index) => (
          <div className="row" key={index}>
            <img className="col-sm item-img" src={dataItem.imageUrl} alt={dataItem.name} width={100} />
            <p className="col-sm">{index}</p>
            <p className="col-sm">{dataItem.name}</p>
            <p className="col-sm">{dataItem.price}</p>
            <p className="col-sm">{dataItem.categories.join(', ')}</p>
            <p className="col-sm">{dataItem.availability.size.join(', ')}</p>
            <p className="col-sm">{dataItem.availability.color.join(', ')}</p>
            <div className="col-sm buttons">
              {/* <button onClick={() => editItem(item.id, index, { ...dataItem, name: 'Updated Name' })}>Update</button> */}
              <button className="btn btn-danger" onClick={() => deleteItem(index)}>Eliminar</button>
            </div>
          </div>
        ))}
      </div>
      {/* <h2>Agregar nuevo producto</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        addItem('Nlc8aohcSwNCKuceZeG1wCh7k8j2'); // Use the appropriate id
      }}>
        <input
          type="text"
          placeholder="Image URL"
          value={newItem.imageUrl}
          onChange={(e) => setNewItem({ ...newItem, imageUrl: e.target.value })}
        />
        <input
          type="text"
          placeholder="Categories (comma separated)"
          value={newItem.categories.join(', ')}
          onChange={(e) => setNewItem({ ...newItem, categories: e.target.value.split(',').map(cat => cat.trim()) })}
        />
        <input
          type="text"
          placeholder="Name"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          value={newItem.price}
          onChange={(e) => setNewItem({ ...newItem, price: Number(e.target.value) })}
        />
        <input
          type="text"
          placeholder="Sizes (comma separated)"
          value={newItem.availability.size.join(', ')}
          onChange={(e) => setNewItem({
            ...newItem,
            availability: { ...newItem.availability, size: e.target.value.split(',').map(size => size.trim()) }
          })}
        />
        <input
          type="text"
          placeholder="Colors (comma separated)"
          value={newItem.availability.color.join(', ')}
          onChange={(e) => setNewItem({
            ...newItem,
            availability: { ...newItem.availability, color: e.target.value.split(',').map(color => color.trim()) }
          })}
        />
        <button type="submit">Add Item</button>
      </form> */}
    </div>
  );
};

export default CompanyItemsManager;
