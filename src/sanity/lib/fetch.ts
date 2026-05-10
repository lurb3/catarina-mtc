import { client } from "./client";

/**
 * Wrapper para chamadas GROQ que devolve um fallback (em vez de explodir o
 * build) quando o projecto Sanity ainda não está configurado ou há um erro
 * de rede. Os erros são registados na consola para diagnóstico.
 */
export async function safeFetch<T>(
  query: string,
  params: Record<string, unknown> = {},
  fallback: T,
): Promise<T> {
  try {
    return await client.fetch<T>(query, params);
  } catch (error) {
    console.warn(
      "[sanity] fetch failed, a usar fallback:",
      error instanceof Error ? error.message : error,
    );
    return fallback;
  }
}
