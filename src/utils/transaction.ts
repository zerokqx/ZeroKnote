import { Transaction } from "@rustType/Transaction"
export function createTransaction<T>(data: T): Transaction<T> {
  const id = Math.floor(Math.random() * 256); // u8 — от 0 до 255
  const created_at = new Date().toISOString();

  return {
    id,
    error: null,
    created_at,
    data,
  };
}
