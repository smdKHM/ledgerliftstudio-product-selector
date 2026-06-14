'use client';

export default function ProductSelector() {
  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif', background: 'linear-gradient(135deg, #f8f7f5 0%, #f3f1ed 100%)', padding: '40px 20px', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: 700, color: '#1a1a1a', marginBottom: '12px', letterSpacing: '-0.5px' }}>Which LedgerLift Product Is Right for You?</h1>
          <p style={{ fontSize: '16px', color: '#666', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>Find your financial system in 30 seconds. Your revenue level and how organized your books are will tell you exactly which product fits.</p>
        </div>

        <div style={{ background: 'white', padding: '24px', borderRadius: '8px', marginBottom: '40px', borderLeft: '4px solid #2d5016', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
          <p style={{ color: '#333', fontSize: '14px', lineHeight: 1.6 }}><strong>How to use this:</strong> Find your revenue level (left to right) and your current books situation (top to bottom). The cell where they meet is your recommended product.</p>
        </div>

        <div style={{ background: 'white', borderRadius: '8px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', overflowX: 'auto' }}>
          <table style={{ borderCollapse: 'collapse', width: '100%', minWidth: '1000px', tableLayout: 'fixed' }}>
            <thead>
              <tr>
                <th style={{ background: '#2d5016', color: 'white', padding: '20px 16px', textAlign: 'right', fontWeight: 600, fontSize: '14px', width: '16%', boxSizing: 'border-box' }}></th>
                <th style={{ background: '#2d5016', color: 'white', padding: '20px 16px', textAlign: 'center', fontWeight: 600, fontSize: '14px', width: '28%', boxSizing: 'border-box' }}>$0–50K Revenue</th>
                <th style={{ background: '#2d5016', color: 'white', padding: '20px 16px', textAlign: 'center', fontWeight: 600, fontSize: '14px', width: '28%', boxSizing: 'border-box' }}>$50K–200K Revenue</th>
                <th style={{ background: '#2d5016', color: 'white', padding: '20px 16px', textAlign: 'center', fontWeight: 600, fontSize: '14px', width: '28%', boxSizing: 'border-box' }}>$200K+ Revenue</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ borderRight: '1px solid #e8e6e1', fontWeight: 600, color: '#1a1a1a', textAlign: 'right', paddingRight: '20px', fontSize: '14px', padding: '32px 20px', width: '16%', boxSizing: 'border-box' }}>Early & Unclear</td>
                <td style={{ border: '1px solid #e8e6e1', padding: '32px 20px', verticalAlign: 'top', minHeight: '220px', width: '28%', boxSizing: 'border-box' }}>
                  <div>
                    <div style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a', marginBottom: '8px' }}>Foundation Kit</div>
                    <div style={{ fontSize: '13px', color: '#2d5016', fontWeight: 600, marginBottom: '8px' }}>$27</div>
                    <div style={{ fontSize: '13px', color: '#666', marginBottom: '12px', lineHeight: 1.5 }}>Diagnostic + workbook to build your first real P&L. No system yet — just clarity.</div>
                  </div>
                  <div>
                    <a href="https://stan.store/ledgerliftstudio?utm_source=product-selector&utm_medium=selector&utm_campaign=foundation-kit&utm_content=early-50k" style={{ display: 'inline-block', background: '#2d5016', color: 'white', padding: '10px 16px', borderRadius: '4px', textDecoration: 'none', fontWeight: 600, fontSize: '13px', border: 'none' }}>Get Started</a>
                  </div>
                </td>
                <td style={{ border: '1px solid #e8e6e1', padding: '32px 20px', verticalAlign: 'top', minHeight: '220px', width: '28%', boxSizing: 'border-box' }}>
                  <div>
                    <div style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a', marginBottom: '8px' }}>Foundation Kit</div>
                    <div style={{ fontSize: '13px', color: '#2d5016', fontWeight: 600, marginBottom: '8px' }}>$27</div>
                    <div style={{ fontSize: '13px', color: '#666', marginBottom: '12px', lineHeight: 1.5 }}>Start here for clarity. Then move to Close Command Center for monthly rhythm.</div>
                  </div>
                  <div>
                    <a href="https://stan.store/ledgerliftstudio?utm_source=product-selector&utm_medium=selector&utm_campaign=foundation-kit&utm_content=early-50-200k" style={{ display: 'inline-block', background: '#2d5016', color: 'white', padding: '10px 16px', borderRadius: '4px', textDecoration: 'none', fontWeight: 600, fontSize: '13px', border: 'none' }}>Get Started</a>
                  </div>
                </td>
                <td style={{ border: '1px solid #e8e6e1', padding: '32px 20px', verticalAlign: 'top', minHeight: '220px', width: '28%', boxSizing: 'border-box' }}>
                  <div>
                    <div style={{ display: 'inline-block', background: '#e8f0e3', color: '#2d5016', padding: '4px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 600, marginBottom: '8px' }}>Recommended first</div>
                    <div style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a', marginBottom: '8px' }}>Bookkeeping Reset</div>
                    <div style={{ fontSize: '13px', color: '#2d5016', fontWeight: 600, marginBottom: '8px' }}>$997</div>
                    <div style={{ fontSize: '13px', color: '#666', marginBottom: '12px', lineHeight: 1.5 }}>Your books are probably behind. Reset them first, then build a system on clean foundation.</div>
                  </div>
                  <div>
                    <a href="https://cal.com/ledgerliftstudio/free-15-minute-books-reality-report?utm_source=product-selector&utm_medium=selector&utm_campaign=reset&utm_content=early-200k" style={{ display: 'inline-block', background: '#2d5016', color: 'white', padding: '10px 16px', borderRadius: '4px', textDecoration: 'none', fontWeight: 600, fontSize: '13px', border: 'none' }}>Schedule Call</a>
                  </div>
                </td>
              </tr>

              <tr>
                <td style={{ borderRight: '1px solid #e8e6e1', fontWeight: 600, color: '#1a1a1a', textAlign: 'right', paddingRight: '20px', fontSize: '14px', padding: '32px 20px', width: '16%', boxSizing: 'border-box' }}>Growing & Decent Records</td>
                <td style={{ border: '1px solid #e8e6e1', padding: '32px 20px', verticalAlign: 'top', minHeight: '220px', width: '28%', boxSizing: 'border-box' }}>
                  <div>
                    <div style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a', marginBottom: '8px' }}>Monthly Close Command Center</div>
                    <div style={{ fontSize: '13px', color: '#2d5016', fontWeight: 600, marginBottom: '8px' }}>$29</div>
                    <div style={{ fontSize: '13px', color: '#666', marginBottom: '12px', lineHeight: 1.5 }}>Monthly close workflow to see what you made, kept, and owe. Run it in under an hour.</div>
                  </div>
                  <div>
                    <a href="https://stan.store/ledgerliftstudio?utm_source=product-selector&utm_medium=selector&utm_campaign=close-command&utm_content=growing-50k" style={{ display: 'inline-block', background: '#2d5016', color: 'white', padding: '10px 16px', borderRadius: '4px', textDecoration: 'none', fontWeight: 600, fontSize: '13px', border: 'none' }}>View</a>
                  </div>
                </td>
                <td style={{ border: '1px solid #e8e6e1', padding: '32px 20px', verticalAlign: 'top', minHeight: '220px', width: '28%', boxSizing: 'border-box' }}>
                  <div>
                    <div style={{ display: 'inline-block', background: '#e8f0e3', color: '#2d5016', padding: '4px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 600, marginBottom: '8px' }}>Most popular</div>
                    <div style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a', marginBottom: '8px' }}>LedgerDesk Solo</div>
                    <div style={{ fontSize: '13px', color: '#2d5016', fontWeight: 600, marginBottom: '8px' }}>$197</div>
                    <div style={{ fontSize: '13px', color: '#666', marginBottom: '12px', lineHeight: 1.5 }}>Airtable-based system. Real operating system for close, P&L, expense tracking, all linked.</div>
                  </div>
                  <div>
                    <a href="https://www.etsy.com/shop/ledgerliftstudio?utm_source=product-selector&utm_medium=selector&utm_campaign=solo&utm_content=growing-50-200k" style={{ display: 'inline-block', background: '#2d5016', color: 'white', padding: '10px 16px', borderRadius: '4px', textDecoration: 'none', fontWeight: 600, fontSize: '13px', border: 'none' }}>Get LedgerDesk Solo</a>
                  </div>
                </td>
                <td style={{ border: '1px solid #e8e6e1', padding: '32px 20px', verticalAlign: 'top', minHeight: '220px', width: '28%', boxSizing: 'border-box' }}>
                  <div>
                    <div style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a', marginBottom: '8px' }}>LedgerDesk Access</div>
                    <div style={{ fontSize: '13px', color: '#2d5016', fontWeight: 600, marginBottom: '8px' }}>$147</div>
                    <div style={{ fontSize: '13px', color: '#666', marginBottom: '12px', lineHeight: 1.5 }}>Microsoft Access system. More control, offline capability, legacy workflows. For structured operations.</div>
                  </div>
                  <div>
                    <a href="https://www.etsy.com/shop/ledgerliftstudio?utm_source=product-selector&utm_medium=selector&utm_campaign=access&utm_content=growing-200k" style={{ display: 'inline-block', background: '#2d5016', color: 'white', padding: '10px 16px', borderRadius: '4px', textDecoration: 'none', fontWeight: 600, fontSize: '13px', border: 'none' }}>Get LedgerDesk Access</a>
                  </div>
                </td>
              </tr>

              <tr>
                <td style={{ borderRight: '1px solid #e8e6e1', fontWeight: 600, color: '#1a1a1a', textAlign: 'right', paddingRight: '20px', fontSize: '14px', padding: '32px 20px', width: '16%', boxSizing: 'border-box' }}>Established & Reconciled</td>
                <td style={{ border: '1px solid #e8e6e1', padding: '32px 20px', verticalAlign: 'top', minHeight: '220px', width: '28%', boxSizing: 'border-box' }}>
                  <div>
                    <div style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a', marginBottom: '8px' }}>LedgerDesk Solo</div>
                    <div style={{ fontSize: '13px', color: '#2d5016', fontWeight: 600, marginBottom: '8px' }}>$197</div>
                    <div style={{ fontSize: '13px', color: '#666', marginBottom: '12px', lineHeight: 1.5 }}>You know your numbers. Now systematize the close so you stay organized as you scale.</div>
                  </div>
                  <div>
                    <a href="https://www.etsy.com/shop/ledgerliftstudio?utm_source=product-selector&utm_medium=selector&utm_campaign=solo&utm_content=established-50k" style={{ display: 'inline-block', background: '#2d5016', color: 'white', padding: '10px 16px', borderRadius: '4px', textDecoration: 'none', fontWeight: 600, fontSize: '13px', border: 'none' }}>Get LedgerDesk Solo</a>
                  </div>
                </td>
                <td style={{ border: '1px solid #e8e6e1', padding: '32px 20px', verticalAlign: 'top', minHeight: '220px', width: '28%', boxSizing: 'border-box' }}>
                  <div>
                    <div style={{ display: 'inline-block', background: '#e8f0e3', color: '#2d5016', padding: '4px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 600, marginBottom: '8px' }}>Most popular here</div>
                    <div style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a', marginBottom: '8px' }}>LedgerDesk Solo</div>
                    <div style={{ fontSize: '13px', color: '#2d5016', fontWeight: 600, marginBottom: '8px' }}>$197</div>
                    <div style={{ fontSize: '13px', color: '#666', marginBottom: '12px', lineHeight: 1.5 }}>Airtable system built for founders who need real operational flow as revenue scales.</div>
                  </div>
                  <div>
                    <a href="https://www.etsy.com/shop/ledgerliftstudio?utm_source=product-selector&utm_medium=selector&utm_campaign=solo&utm_content=established-50-200k" style={{ display: 'inline-block', background: '#2d5016', color: 'white', padding: '10px 16px', borderRadius: '4px', textDecoration: 'none', fontWeight: 600, fontSize: '13px', border: 'none' }}>Get LedgerDesk Solo</a>
                  </div>
                </td>
                <td style={{ border: '1px solid #e8e6e1', padding: '32px 20px', verticalAlign: 'top', minHeight: '220px', width: '28%', boxSizing: 'border-box' }}>
                  <div>
                    <div style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a', marginBottom: '8px' }}>LedgerDesk Access</div>
                    <div style={{ fontSize: '13px', color: '#2d5016', fontWeight: 600, marginBottom: '8px' }}>$147</div>
                    <div style={{ fontSize: '13px', color: '#666', marginBottom: '12px', lineHeight: 1.5 }}>Access system for control and structured workflows. Offline-capable, VBA support, governance-ready.</div>
                  </div>
                  <div>
                    <a href="https://www.etsy.com/shop/ledgerliftstudio?utm_source=product-selector&utm_medium=selector&utm_campaign=access&utm_content=established-200k" style={{ display: 'inline-block', background: '#2d5016', color: 'white', padding: '10px 16px', borderRadius: '4px', textDecoration: 'none', fontWeight: 600, fontSize: '13px', border: 'none' }}>Get LedgerDesk Access</a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px', color: '#999', fontSize: '13px' }}>
          <p>Not sure which stage you're in? <a href="https://diagnostic.ledgerliftstudio.com/?utm_source=product-selector&utm_medium=footer&utm_campaign=diagnostic" style={{ color: '#2d5016', textDecoration: 'none', borderBottom: '1px solid #2d5016' }}>Take the diagnostic</a> or <a href="https://cal.com/ledgerliftstudio/free-15-minute-books-reality-report?utm_source=product-selector&utm_medium=footer&utm_campaign=call" style={{ color: '#2d5016', textDecoration: 'none', borderBottom: '1px solid #2d5016' }}>schedule a 15-min call</a></p>
        </div>
      </div>
    </div>
  );
}
