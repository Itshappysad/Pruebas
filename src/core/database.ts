import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';
import { app } from '../../firebase.config';
import { ResgisterUser } from './types';
import { FirebaseError } from 'firebase/app';

export const database = getFirestore(app);

export async function registerUser({ id, ...userInfo }: ResgisterUser) {
  try {
    await setDoc(doc(database, 'users', id), {
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
    const userSnap = await getDoc(doc(database, 'users', id));
    if (!userSnap.exists()) return null;
    return userSnap.data() as User;
  } catch (e) {
    if (e instanceof FirebaseError) {
      console.error(e);
    }
    return null;
  }
}

//TODO: Añadir manejo de produtos en la base de datos
