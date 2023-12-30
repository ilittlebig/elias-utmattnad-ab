export const apiCall = async <T>(
  method: "GET" | "POST" | "PUT" | "DELETE",
  endpoint: string,
  data?: any,
  headers?: HeadersInit
): Promise<T> => {
  try {
    const requestOptions: RequestInit = {
      method,
      headers: { ...headers }
    }

    if (data) {
      requestOptions.headers["Content-Type"] = "application/json";
      requestOptions.body = JSON.stringify(data);
    }

    const response = await fetch(endpoint, requestOptions);
    return response.headers.get("Content-Type")?.includes("application/json")
      ? (await response.json()) as T
      : (await response.text()) as unknown as T;
  } catch (error: any) {
    console.log(`Error during ${method} request to ${endpoint}:`, error);
    throw error;
  }
}
