import Link from 'next/link';

export default function DonasiPage() {
  return (
    <div style={{ padding: '1.5rem', paddingBottom: '100px', backgroundColor: '#f8fafc', minHeight: '100vh' }}>
      <header style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <Link href="/" style={{ padding: '0.5rem', background: 'white', borderRadius: '50%', display: 'flex', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <img width="24" height="24" src="https://img.icons8.com/ios/48/0f172a/back--v1.png" alt="Back" />
        </Link>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a' }}>Pusat Donasi</h1>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        
        {/* Campaign 1 */}
        <div style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', border: '1px solid #e2e8f0' }}>
          <div style={{ height: '120px', background: 'linear-gradient(to right, #047857, #10b981)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img width="64" height="64" src="https://img.icons8.com/ios/100/ffffff/mosque.png" alt="Pembangunan" />
          </div>
          <div style={{ padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>Pembangunan Tempat Wudhu</h3>
            <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '1.5rem', lineHeight: 1.5 }}>Renovasi dan perluasan tempat wudhu wanita agar lebih nyaman dan tertutup.</p>
            
            <div style={{ marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', fontWeight: 600 }}>
              <span style={{ color: '#047857' }}>Terkumpul: Rp 15.000.000</span>
              <span style={{ color: '#64748b' }}>Target: Rp 50 Juta</span>
            </div>
            {/* Progress bar */}
            <div style={{ width: '100%', height: '8px', background: '#e2e8f0', borderRadius: '4px', overflow: 'hidden', marginBottom: '1.5rem' }}>
              <div style={{ width: '30%', height: '100%', background: '#047857', borderRadius: '4px' }}></div>
            </div>

            <Link href="/donasi/bayar?kampanye=wudhu" style={{ display: 'block', textAlign: 'center', width: '100%', padding: '0.75rem', background: '#047857', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 600, fontSize: '1rem', cursor: 'pointer', textDecoration: 'none' }}>Donasi Sekarang</Link>
          </div>
        </div>

        {/* Campaign 2 */}
        <div style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', border: '1px solid #e2e8f0' }}>
          <div style={{ height: '120px', background: 'linear-gradient(to right, #b45309, #f59e0b)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img width="64" height="64" src="https://img.icons8.com/ios/100/ffffff/food-donor.png" alt="Pembangunan" />
          </div>
          <div style={{ padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>Nasi Jumat Berkah</h3>
            <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '1.5rem', lineHeight: 1.5 }}>Program berbagi 300 box nasi gratis setiap selesai salat Jumat.</p>
            
            <Link href="/donasi/bayar?kampanye=jumat" style={{ display: 'block', textAlign: 'center', width: '100%', padding: '0.75rem', background: '#b45309', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 600, fontSize: '1rem', cursor: 'pointer', textDecoration: 'none' }}>Donasi Sekarang</Link>
          </div>
        </div>

      </div>

      {/* Navigasi Bawah Tetap Sama */}
      <nav style={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(16px)', borderTop: '1px solid rgba(255, 255, 255, 0.5)', padding: '1rem', display: 'flex', justifyContent: 'space-around', alignItems: 'center', zIndex: 1000 }}>
        <Link href="/" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', textDecoration: 'none', color: '#64748b' }}>
          <img width="24" height="24" src="https://img.icons8.com/ios/48/64748b/home.png" alt="Home" />
          <span style={{ fontSize: '11px', fontWeight: 600 }}>Home</span>
        </Link>
        <Link href="/jadwal" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', textDecoration: 'none', color: '#64748b' }}>
          <img width="24" height="24" src="https://img.icons8.com/ios/48/64748b/mosque.png" alt="Jadwal" />
          <span style={{ fontSize: '11px', fontWeight: 600 }}>Jadwal</span>
        </Link>
        <Link href="/agenda" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', textDecoration: 'none', color: '#64748b' }}>
          <img width="24" height="24" src="https://img.icons8.com/ios/48/64748b/calendar--v1.png" alt="Agenda" />
          <span style={{ fontSize: '11px', fontWeight: 600 }}>Agenda</span>
        </Link>
        <Link href="/donasi" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', textDecoration: 'none', color: '#047857' }}>
          <img width="24" height="24" src="https://img.icons8.com/ios-filled/48/047857/receive-cash.png" alt="Donasi" />
          <span style={{ fontSize: '11px', fontWeight: 600 }}>Donasi</span>
        </Link>
        <Link href="/admin" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', textDecoration: 'none', color: '#64748b' }}>
          <img width="24" height="24" src="https://img.icons8.com/ios/48/64748b/menu--v1.png" alt="Admin" />
          <span style={{ fontSize: '11px', fontWeight: 600 }}>Admin</span>
        </Link>
      </nav>
    </div>
  );
}
