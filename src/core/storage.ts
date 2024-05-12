import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../../firebase.config";

export async function getProductImage(id: string) {
  try {
    const image = await getDownloadURL(ref(storage, `item-images/${id}.webp`));
    return image;
  } catch (e) {
    return null;
  }
}
