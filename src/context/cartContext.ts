
import type { Products as Product } from '../models/productIteam';

type CartItem = Product & {
  quantity: number;
};

const STORAGE_KEY = 'cartItems';

let items: CartItem[] = load();
const subscribers: Array<() => void> = [];

function load(): CartItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as CartItem[]) : [];
  } catch {
    return [];
  }
}

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  try {
    subscribers.forEach((s) => s());
  } catch {}
}

export function getCart(): CartItem[] {
  return items.slice();
}

export function getCount(): number {
  return items.reduce((sum, it) => sum + it.quantity, 0);
}

export function addToCart(item: { id: string; quantity?: number; name?: string; price?: number }) {
  const qty = item.quantity ?? 1;
  const existing = items.find((i) => i.id === item.id);
  if (existing) {
    existing.quantity += qty;
  } else {
    items.push({ id: item.id, quantity: qty, name: item.name, price: item.price } as CartItem);
  }
  save();
}

export function onChange(fn: () => void) {
  subscribers.push(fn);
  return () => {
    const i = subscribers.indexOf(fn);
    if (i >= 0) subscribers.splice(i, 1);
  };
}

export const subscribe = onChange;

export function removeFromCart(id: string) {
  items = items.filter((i) => i.id !== id);
  save();
}

export function clearCart() {
  items = [];
  save();
}

export function getTotal(format = false): number | string {
  const total = items.reduce((sum, it) => sum + ((it.price ?? 0) * it.quantity), 0);
  return format ? `${Math.round(total / (total > 1000 ? 100 : 1))} SEK` : total;
}