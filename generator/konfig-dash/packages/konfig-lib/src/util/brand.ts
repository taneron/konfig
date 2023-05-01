const BrandSymbol = Symbol('__brand')
export type Brand<K, T> = K & { [BrandSymbol]: T }
