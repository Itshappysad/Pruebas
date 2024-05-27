// types.ts
export interface Availability {
    size: string[];
    color: string[];
  }
  
  export interface ItemData {
    imageUrl: string;
    categories: string[];
    name: string;
    price: number;
    availability: Availability;
  }
  
  export interface ItemDocument {
    id: string;
    data: ItemData[];
  }
  