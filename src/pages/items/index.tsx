// ItemsList.tsx
import React, { useEffect, useState } from 'react';
import { collection, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from "../../../firebase.config";
import { ItemDocument, ItemData } from './types';
import './styles.css';
import { useAuth } from '../../context/useAuth';

const CompanyItemsManager: React.FC = () => {
  const { user, company } = useAuth();
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

  const deleteItem = async (itemIndex: number) => {
    console.log("I will delete the item: "+itemIndex+" from company: "+ company?.name)
    try {
      const companyItemsDocument = doc(db, 'items', user?.id)
      const docSnap = await getDoc(companyItemsDocument)
  
      if (docSnap.exists()) {
        const documentData = docSnap.data()
        
        if (documentData.data && Array.isArray(documentData.data) && itemIndex >= 0 && itemIndex < documentData.data.length) {
          const updatedDataArray = [...documentData.data];
          updatedDataArray.splice(itemIndex, 1);
  
          // Update the document with the modified data array
          await updateDoc(companyItemsDocument, { data: updatedDataArray });
          console.log('Company item deleted successfully');
          window.location.reload();
        } else {
          console.log('Invalid position or data array does not exist');
        }
      } else {
        console.log('Document does not exist');
      }
    } catch (error) {
      console.error('Error deleting element:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Productos de la empresa: {company?.name} </h1>

      <a className="btn btn-success" href="/company-item/new">Agregar producto</a>
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
    </div>
  );
};

export default CompanyItemsManager;
