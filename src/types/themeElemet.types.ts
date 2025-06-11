export interface ThemeUnit<T = string> {
  primary: T;
  accent: T;
  muted: T;
  secondary: T;
}

export interface Statuses<T = string> {
  error: T;
  warning: T;
  success: T;
}

export type ThemeUnitPick<K extends keyof ThemeUnit, T = string> = Pick<
  ThemeUnit<T>,
  K
>;

export type Theme<T = string> = {
  border: ThemeUnitPick<'primary', T> & Statuses<T>;
  active: T;
} & Record<'button' | 'text', ThemeUnit<T> & Statuses<T>> &
  Record<'window' | 'block', ThemeUnitPick<'primary', T>>;
