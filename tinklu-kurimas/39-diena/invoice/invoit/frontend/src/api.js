const API_URL = "http://localhost:5000/api/invoices"; // Путь к твоему бэкенду

export async function fetchInvoices() {
  const response = await fetch(API_URL);
  return await response.json();
}

export async function addInvoice(invoice) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(invoice),
  });
  return await response.json();
}

export async function deleteInvoice(id) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
}

export async function updateInvoice(id, updatedData) {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    });
    return await response.json();
  }
  