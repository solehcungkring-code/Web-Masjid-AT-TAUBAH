import Link from 'next/link';

export default function JadwalPage() {
  const jadwals = [
    { name: 'Imsak', time: '04:05', type: 'sunnah' },
    { name: 'Subuh', time: '04:15', type: 'wajib' },
    { name: 'Terbit', time: '05:32', type: 'sunnah' },
    { name: 'Dhuha', time: '05:56', type: 'sunnah' },
    { name: 'Dzuhur', time: '12:03', type: 'wajib' },
    { name: 'Ashar', time: '15:18', type: 'wajib' },
    { name: 'Maghrib', time: '17:58', type: 'wajib' },
    { name: 'Isya', time: '19:08', type: 'wajib' }
  ];

  return (
    <div style={{ padding: '1.5rem', paddingBottom: '100px', backgroundColor: '#f8fafc', minHeight: '100vh' }}>
      <header style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <Link href="/" style={{ padding: '0.5rem', background: 'white', borderRadius: '50%', display: 'flex', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <img width="24" height="24" src="https://img.icons8.com/ios/48/0f172a/back--v1.png" alt="Back" />
        </Link>
        <div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a' }}>Jadwal Salat</h1>
          <p style={{ color: '#047857', fontWeight: 600, fontSize: '0.875rem' }}>Masjid At Taubah, Jakarta</p>
        </div>
      </header>

      <div style={{ background: 'white', borderRadius: '24px', padding: '1.5rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05)' }}>
        <div style={{ textAlign: 'center', paddingBottom: '1.5rem', borderBottom: '1px dashed #e2e8f0', marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a' }}>Kamis, 1 Oktober 2026</h2>
          <p style={{ color: '#64748b' }}>20 Rabiul Akhir 1448 H</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {jadwals.map(jadwal => (
            <div key={jadwal.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: jadwal.type === 'wajib' ? '#f0fdf4' : '#f8fafc', borderRadius: '12px', borderLeft: jadwal.type === 'wajib' ? '4px solid #047857' : '4px solid #cbd5e1' }}>
              <span style={{ fontSize: '1.125rem', fontWeight: jadwal.type === 'wajib' ? 700 : 500, color: jadwal.type === 'wajib' ? '#047857' : '#64748b' }}>{jadwal.name}</span>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a' }}>{jadwal.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Navigasi Bawah */}
      <nav style={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(16px)', borderTop: '1px solid rgba(255, 255, 255, 0.5)', padding: '1rem', display: 'flex', justifyContent: 'space-around', alignItems: 'center', zIndex: 1000 }}>
        <Link href="/" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', textDecoration: 'none', color: '#64748b' }}>
          <img width="24" height="24" src="https://img.icons8.com/ios/48/64748b/home.png" alt="Home" />
          <span style={{ fontSize: '11px', fontWeight: 600 }}>Home</span>
        </Link>
        <Link href="/jadwal" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', textDecoration: 'none', color: '#047857' }}>
          <img width="24" height="24" src="https://img.icons8.com/ios-filled/48/047857/mosque.png" alt="Jadwal" />
          <span style={{ fontSize: '11px', fontWeight: 600 }}>Jadwal</span>
        </Link>
        <Link href="/agenda" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', textDecoration: 'none', color: '#64748b' }}>
          <img width="24" height="24" src="https://img.icons8.com/ios/48/64748b/calendar--v1.png" alt="Agenda" />
          <span style={{ fontSize: '11px', fontWeight: 600 }}>Agenda</span>
        </Link>
        <Link href="/donasi" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', textDecoration: 'none', color: '#64748b' }}>
          <img width="24" height="24" src="https://img.icons8.com/ios/48/64748b/receive-cash.png" alt="Donasi" />
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
