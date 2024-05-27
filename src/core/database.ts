import {
  collection,
  doc,
  documentId,
  getDoc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { app } from "../../firebase.config";
import { Company, CompanyItem, Product, ResgisterUser } from "./types";
import { FirebaseError } from "firebase/app";
import { EditUser } from "../schemas/edit";
import { companyType } from "../schemas/company";
import { auth } from "./auth";
import { RegisterProductForm } from "../schemas/product";


export const database = getFirestore(app);

export async function registerUser({ id, ...userInfo }: ResgisterUser) {
  try {
    await setDoc(doc(database, "users", id), {
      ...userInfo,
    });
    return true;
  } catch (e) {
    if (e instanceof FirebaseError) {
      console.error(e);
    }
    return false;
  }
}

export type User = {
  id: string;
  name: string;
  email: string;
  password?: string;
  provider?: string;
};

export async function getUser(id: string): Promise<User | null> {
  try {
    const userSnap = await getDoc(doc(database, "users", id));
    if (!userSnap.exists()) return null;
    return { id, ...userSnap.data() } as User;
  } catch (e) {
    if (e instanceof FirebaseError) {
      console.error(e);
    }
    return null;
  }
}

export async function editUser({
  email,
  userData,
}: {
  email: string;
  userData: EditUser;
}) {
  try {
    const userDocs = await getDocs(
      query(collection(database, "users"), where("email", "==", email))
    );

    const userId = userDocs.docs[0].id;

    await setDoc(doc(database, "users", userId), userData, { merge: true });
    return true;
  } catch (e) {
    return false;
  }
}

export async function getProduct(id: string): Promise<CompanyItem | null> {
  try {
    const productSnap = await getDoc(doc(database, "items", id));
    if (!productSnap.exists()) return null;
    return { id, ...productSnap.data() } as CompanyItem;
  } catch (e) {
    if (e instanceof FirebaseError) {
      console.error(e);
    }
    return null;
  }
}

export async function getProducts(): Promise<CompanyItem[] | null> {
  try {
    const productDocs = await getDocs(collection(database, "items"));
    const products: CompanyItem[] = [];

    productDocs.forEach((doc) => {
      const data = doc.data();
      if (data && Array.isArray(data.data)) {
        data.data.forEach((item: any) => {
          products.push({
            name: item.name,
            price: parseInt(item.price, 10), // Ensure price is converted to a number
            imageUrl: item.imageUrl,
            categories: item.categories || [], // Default to an empty array if categories are not present
            availability: {
              color: Array.isArray(item.availability?.color) ? item.availability.color : [], // Default to an empty array if color is not an array
              size: Array.isArray(item.availability?.size) ? item.availability.size : [] // Default to an empty array if size is not an array
            }
          } as CompanyItem);
        });
      }
    });

    return products.length > 0 ? products : null;
  } catch (e) {
    if (e instanceof FirebaseError) {
      console.error('Error fetching products:', e);
    }
    return null;
  }
}

export async function getProductsByCategory(category: string): Promise<CompanyItem[] | null> {
  try {
    const itemsRef = collection(database, 'items');
    const querySnapshot = await getDocs(itemsRef);
    const products: CompanyItem[] = [];

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      if (data && Array.isArray(data.data)) {
        data.data.forEach((item: any) => {
          if (item.categories && item.categories.includes(category)) {
            products.push({
              name: item.name,
              price: parseInt(item.price, 10), // Ensure price is converted to a number
              imageUrl: item.imageUrl,
              categories: item.categories || [], // Default to an empty array if categories are not present
              availability: {
                color: Array.isArray(item.availability?.color) ? item.availability.color : [], // Default to an empty array if color is not an array
                size: Array.isArray(item.availability?.size) ? item.availability.size : [] // Default to an empty array if size is not an array
              }
            } as CompanyItem);
          }
        });
      }
    });

    return products.length > 0 ? products : null;
  } catch (error) {
    if (error instanceof FirebaseError) {
      console.error('Error fetching products by category:', error);
    }
    return null;
  }
}

export async function getCartItems(ids: string[]) {
  try {
    const productDocs = await getDocs(
      query(collection(database, "items"), where(documentId(), "in", ids))
    );
    const productData = productDocs.docs.map(
      (d) => ({ id: d.id, ...d.data() } as Product)
    );
    return productData;
  } catch (error) {
    return null;
  }
}

export async function getCompany(id: string): Promise<Company | null> {
  try {
    const companySnap = await getDoc(doc(database, "companies", id));
    if (!companySnap.exists()) return null;
    return { id, ...companySnap.data() } as Company;
  } catch (e) {
    if (e instanceof FirebaseError) {
      console.error(e);
    }
    return null;
  }
}

export async function editCompany({
  id,
  companyData,
}: {
  id: string;
  companyData: companyType;
}) {
  try {
    await setDoc(doc(database, "companies", id), companyData, { merge: true });
    return true;
  } catch (e) {
    return false;
  }
}


export async function getAccountBusiness() {
  const user = auth.currentUser;
  if (!user) {
  return null;
  }
  const docs = await getDocs(
  query(collection(database, "users", user.uid, "company"))
  );
  const [companyDoc] = docs.docs;
  return docs.docs.length === 0
  ? null
  : ({ id: companyDoc.id, ...companyDoc.data() } as Company);
}


export async function getCompanyItems(id: string): Promise<CompanyItem[] | null> {
  try {
    const snap = await getDoc(doc(database, "items", id));
    if (!snap.exists()) {
      return null;
    }
    
    const data = snap.data();
    if (data && Array.isArray(data.data)) {
      return data.data.map((item: any) => ({
        name: item.name,
        price: parseInt(item.price, 10),
        imageUrl: item.imageUrl,
        categories: item.categories || [],
        availability: {
          color: item.availability?.color || [],
          size: item.availability?.size || []
        }
      })) as CompanyItem[];
    }

    return null;
  } catch (e) {
    if (e instanceof FirebaseError) {
      console.error(e);
    }
    return null;
  }
}