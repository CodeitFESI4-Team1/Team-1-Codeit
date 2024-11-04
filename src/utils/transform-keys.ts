function toCamelCase(str: string): string {
  return str.replace(/_([a-z])/g, (_, char) => char.toUpperCase());
}

export function transformKeysToCamel<T>(obj: T): T {
  if (Array.isArray(obj)) {
    return obj.map(transformKeysToCamel) as unknown as T;
  }

  if (obj !== null && typeof obj === 'object') {
    return Object.keys(obj).reduce(
      (acc, key) => {
        const camelKey = toCamelCase(key);
        (acc as Record<string, unknown>)[camelKey] = transformKeysToCamel(
          (obj as Record<string, unknown>)[key],
        );
        return acc;
      },
      {} as Record<string, unknown>,
    ) as T;
  }

  return obj;
}
