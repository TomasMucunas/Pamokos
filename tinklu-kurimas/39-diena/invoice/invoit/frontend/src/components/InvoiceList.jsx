function InvoiceList({ invoices, filter }) {
    const filteredInvoices = filter === "all" ? invoices : invoices.filter((invoice) => invoice.status === filter)
  
    return (
      <div className="invoices-list">
        {filteredInvoices.map((invoice) => (
          <div key={invoice.id} className="invoice-item">
            <div className="invoice-id">#{invoice.id}</div>
            <div className="invoice-due">Due {invoice.paymentDue}</div>
            <div className="invoice-client">{invoice.clientName}</div>
            <div className="invoice-amount">£{invoice.total.toFixed(2)}</div>
            <div className={`invoice-status ${invoice.status}`}>
              <span className="status-dot"></span>
              {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
            </div>
            <div className="chevron-right">❯</div>
          </div>
        ))}
      </div>
    )
  }
  
  export default InvoiceList
  
  