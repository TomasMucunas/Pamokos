import { useState, useEffect } from "react";
import InvoiceForm from "./components/InvoiceForm";
import Navbar from "./components/Navbar";
import { fetchInvoices, addInvoice, deleteInvoice, updateInvoice } from "./api";
import "./App.css";

function App() {
  const [invoices, setInvoices] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [filterStatus, setFilterStatus] = useState("all");
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchInvoices()
      .then(setInvoices)
      .catch(() => setError("Duomenų įkėlimo klaida"));
  }, []);

  const filteredInvoices =
    filterStatus === "all"
      ? invoices
      : invoices.filter((invoice) => invoice.status === filterStatus);

  const formatDate = (dateStr) =>
    new Date(dateStr).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

  const handleAddInvoice = async (newInvoice) => {
    try {
      const addedInvoice = await addInvoice(newInvoice);
      setInvoices([...invoices, addedInvoice]);
      setShowForm(false);
    } catch {
      setError("Klaida pridedant sąskaitą faktūrą");
    }
  };

  const handleUpdateInvoice = async (updatedInvoice) => {
    try {
      const invoice = await updateInvoice(updatedInvoice);
      setInvoices(
        invoices.map((inv) => (inv.id === invoice.id ? invoice : inv))
      );
      setShowForm(false);
      setSelectedInvoice(null);
    } catch {
      setError("Klaida atnaujinant sąskaitą faktūrą");
    }
  };

  const handleDeleteInvoice = async (id) => {
    if (!window.confirm("Ar tikrai norite ištrinti šią sąskaitą faktūrą?")) return;
    try {
      await deleteInvoice(id);
      setInvoices(invoices.filter((invoice) => invoice.id !== id));
    } catch {
      setError("Klaida šalinant sąskaitą faktūrą");
    }
  };

  useEffect(() => {
    document.body.className = isDarkTheme ? "dark-theme" : "light-theme";
  }, [isDarkTheme]);

  return (
    <div className={`layout ${isDarkTheme ? "dark-theme" : "light-theme"}`}>
      <Navbar toggleTheme={() => setIsDarkTheme(!isDarkTheme)} />

      <main className="main-content">
        <header className="header">
          <div className="header-left">
            <h1>Invoices</h1>
            <p>There are {filteredInvoices.length} total invoices</p>
          </div>
          <div className="header-right">
            <div className="filter-dropdown">
              <button
                className="filter-btn"
                onClick={() => setShowFilterOptions(!showFilterOptions)}
              >
                Filter by status <span className="chevron">▼</span>
              </button>
              {showFilterOptions && (
                <div className="filter-options">
                  {["all", "draft", "pending", "paid"].map((status) => (
                    <div
                      key={status}
                      className={`filter-option ${
                        filterStatus === status ? "checked" : ""
                      }`}
                      onClick={() => {
                        setFilterStatus(status);
                        setShowFilterOptions(false);
                      }}
                    >
                      {filterStatus === status ? "✓" : ""}{" "}
                      {status.charAt(0).toUpperCase() + status.slice(1)}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <button
              className="new-invoice-btn"
              onClick={() => setShowForm(true)}
            >
              <span className="plus">+</span> New Invoice
            </button>
          </div>
        </header>

        {error && <p className="error">{error}</p>}

        <div className="invoices-list">
          {filteredInvoices.map((invoice) => (
            <div key={invoice.id} className="invoice-item">
              <div className="invoice-id">#{invoice.id}</div>
              <div className="invoice-due">
                Due {formatDate(invoice.due_date)}
              </div>
              <div className="invoice-client">{invoice.client}</div>
              <div className="invoice-amount">
                £{" "}
                {invoice.amount.toLocaleString("en-GB", {
                  minimumFractionDigits: 2,
                })}
              </div>
              <div className={`invoice-status ${invoice.status}`}>
                <span className="status-dot"></span>
                {invoice.status.charAt(0).toUpperCase() +
                  invoice.status.slice(1)}
              </div>
              <div className="actions">
                <button
                  className="edit-btn"
                  onClick={() => {
                    setSelectedInvoice(invoice);
                    setShowForm(true);
                  }}
                >
                  ✏️
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDeleteInvoice(invoice.id)}
                >
                  🗑️
                </button>
              </div>
            </div>
          ))}
        </div>

        {showForm && (
          <InvoiceForm
            onSubmit={selectedInvoice ? handleUpdateInvoice : handleAddInvoice}
            onCancel={() => {
              setShowForm(false);
              setSelectedInvoice(null);
            }}
            initialData={selectedInvoice}
          />
        )}
      </main>
    </div>
  );
}

export default App;
