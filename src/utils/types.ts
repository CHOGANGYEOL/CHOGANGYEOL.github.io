// Utility type to filter out keys pointing to nested objects and include keys pointing to non-object values
export type FilterObjectKeys<T> = {
	[K in keyof T]: T[K] extends Record<string, any> ? never : K;
}[keyof T];

// Utility type to extract and include keys of nested objects
export type IncludeNestedKeys<T> = {
	[K in keyof T]: T[K] extends Record<string, any> ? keyof T[K] : never;
}[keyof T];
