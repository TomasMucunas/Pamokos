import { useState } from "react";
import "./InvoiceForm.css";

function InvoiceForm({ onSubmit, onCancel, initialData = null }) {
  const [client, setClient] = useState(initialData?.client || "");
  const [dueDate, setDueDate] = useState(initialData?.due_date || "");
  const [amount, setAmount] = useState(initialData?.amount || "");
  const [status, setStatus] = useState(initialData?.status || "pending");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newInvoice = { client, due_date: dueDate, amount, status };
    onSubmit(newInvoice);
  };

  return (
    <div className="invoice-form-overlay">
      <div className="invoice-form">
        <h2>{initialData ? "Edit Invoice" : "New Invoice"}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-section">
            <h3>Invoice Details</h3>
            <div className="form-group">
              <label htmlFor="client">Client's Name</label>
              <input
                type="text"
                id="client"
                value={client}
                onChange={(e) => setClient(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="dueDate">Due Date</label>
              <input
                type="date"
                id="dueDate"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="amount">Amount (€)</label>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="status">Status</label>
              <select id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="paid">Paid</option>
                <option value="pending">Pending</option>
                <option value="draft">Draft</option>
              </select>
            </div>
          </div>

          <div className="form-actions">
            <button type="button" className="btn-cancel" onClick={onCancel}>
              Cancel
            </button>
            <button type="submit" className="btn-save">
              Save Invoice
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default InvoiceForm;
