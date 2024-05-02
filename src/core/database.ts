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
import { Product, ResgisterUser } from "./types";
import { FirebaseError } from "firebase/app";
import { EditUser } from "../schemas/edit";

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
  name: string;
  email: string;
  password?: string;
  provider?: string;
};

export async function getUser(id: string): Promise<User | null> {
  try {
    const userSnap = await getDoc(doc(database, "users", id));
    if (!userSnap.exists()) return null;
    return userSnap.data() as User;
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
