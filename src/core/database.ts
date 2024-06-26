import {
  addDoc,
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
import { Company, Product, ResgisterUser } from "./types";
import { FirebaseError } from "firebase/app";
import { EditUser } from "../schemas/edit";
import { RegisterCompanyForm } from "../schemas/company";
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
  address?: string;
  postalcode?: number;
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
export async function getProductsByCategory(
  category: string
): Promise<Product[] | null> {
  try {
    const itemsRef = collection(database, "items");
    const q = query(itemsRef, where("categories", "array-contains", category));
    const querySnapshot = await getDocs(q);
    const products: Product[] = [];

    querySnapshot.forEach((doc) => {
      products.push({ id: doc.id, ...doc.data() } as Product);
    });

    return products;
  } catch (error) {
    console.error("Error fetching products by category:", error);
    return null;
  }
}

export async function getProducts() {
  try {
    const productDocs = await getDocs(query(collection(database, "items")));
    const productData = productDocs.docs.map(
      (d) => ({ id: d.id, ...d.data() } as Product)
    );
    return productData;
  } catch (e) {
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
    console.log(productData);
    return productData;
  } catch (error) {
    return null;
  }
}

export async function createCompanyForUser({
  userId,
  companyData,
}: {
  userId: string;
  companyData: RegisterCompanyForm;
}) {
  try {
    await addDoc(collection(database, "users", userId, "company"), companyData);
    console.log("Empresa creada exitosamente!");
    return true;
  } catch (error) {
    console.error("Error al crear la empresa:", error);
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


export async function createProductForCompany({
  userId,
  companyId,
  productData,
}: {
  userId: string;
  companyId: string
  productData: RegisterProductForm;
}) {
  try {
    await addDoc(collection(database, "users", userId, "company", companyId, "product"), productData);
    console.log("Producto creado exitosamente!");
    return true;
  } catch (error) {
    console.error("Error al crear el producto:", error);
    return false;
  }
}

export async function getProduct() {
  const user = auth.currentUser;

  if (!user) {
    return null;
  }

  const docs = await getDocs(
    query(collection(database, "users", user.uid, "company", company.uid , "product"))
  );

  const [productDoc] = docs.docs;

  return docs.docs.length === 0
    ? null
    : ({ id: productDoc.id, ...productDoc.data() } as Product);
}
