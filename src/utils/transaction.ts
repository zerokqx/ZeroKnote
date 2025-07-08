export type Transaction<T = string[]> = {
  id: number;
  error?: boolean;
  created_at: string;
  data: T;
};

export function createTransaction<T>(data: T): Transaction<T> {
  const id = Math.floor(Math.random() * 256); // u8 — от 0 до 255
  const created_at = new Date().toISOString();

  return {
    id,
    error: undefined,
    created_at,
    data,
  };
}
