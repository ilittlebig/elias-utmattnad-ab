export const apiService = {
  async fetch (endpoint: string): Promise<any> {
    try {
      const response = await fetch(endpoint);
      if (!response.ok) {
	throw new Error(`HTTP Error! Status: ${response.status}`);
      }
      return response.json();
    } catch (error: any) {
      console.log("Error fetching data: ", error);
      throw error;
    }
  },

  async post (endpoint: string, data: any): Promise<any> {
    try {
      const response = await fetch(endpoint, {
	method: "POST",
	headers: { "Content-Type": "application/json" },
	body: JSON.stringify(data)
      });

      if (!response.ok) {
	throw new Error(`HTTP Error! Status: ${response.status}`);
      }
      return response.json();
    } catch (error: any) {
      console.log("Error posting data: ", error);
      throw error;
    }
  },

  async put (endpoint: string, data: any): Promise<any> {
    try {
      const response = await fetch(endpoint, {
	method: "PUT",
	headers: { "Content-Type": "application/json" },
	body: JSON.stringify(data)
      });

      if (!response.ok) {
	throw new Error(`HTTP Error! Status: ${response.status}`);
      }
      return response.json();
    } catch (error: any) {
      console.log("Error updating data: ", error);
      throw error;
    }
  },

  async delete (endpoint: string): Promise<any> {
    try {
      const response = await fetch(endpoint, {
	method: "DELETE",
	headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
	throw new Error(`HTTP Error! Status: ${response.status}`);
      }
      return response.json();
    } catch (error: any) {
      console.log("Error deleting data: ", error);
      throw error;
    }
  }
}
