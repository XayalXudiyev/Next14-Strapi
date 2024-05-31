import { create } from "zustand";
import { createJSONStorage, persist } from 'zustand/middleware'


export type Product = {
    id: number;
    attributes: {
        name: string;
        description?: string;
        mrp?: number;
        sellingPrice: number;
        itemQuantityType?: string;
        slug?: string;
        images: {
            data: {
                attributes: {
                    url: string;
                }
            }
        };
    };
    quantity: number;
    total: any;
};

interface CartStore {
    items: Product[];
    addItem: (data: Product, quantity: number, total?: number) => void;
    removeItem: (id: number) => void;
    removeAll: () => void;
}


export const useCart = create(
    persist<CartStore>(
        (set, get) => ({
            items: [],
            addItem: (product, quantity, total) => {
                set((state) => {
                    const existingItem = state.items.find((item) => item.id === product.id);

                    console.log(existingItem)

                    if (existingItem) {
                        return {
                            items: state.items?.map((item) =>
                                item.id === product.id
                                    ? { ...item, quantity: item.quantity + quantity, total: item.total + total }
                                    : item
                            ),
                        };
                    } else {
                        return { items: [...state.items, { ...product, quantity }] };
                    }
                });
            },
            removeItem: (id) =>
                set((state) => ({ items: state.items.filter((item) => item.id !== id) })),
            removeAll: () => set({ items: [] }),
        }),
        {
            name: "cart-storage",
            storage: createJSONStorage(() => localStorage),
        }
    )
);