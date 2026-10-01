export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f8fafc' }}>
      {/* Sidebar Placeholder */}
      <aside style={{ width: '250px', background: '#1e293b', color: 'white', padding: '2rem 1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '2rem' }}>
          <img src="/logo.png" alt="Logo" width="40" height="40" style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
          <h2 style={{ fontSize: '1.125rem', fontWeight: 700 }}>Admin Masjid</h2>
        </div>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <a href="/admin" style={{ color: '#34d399', fontWeight: 600 }}>Hari Ini</a>
          <a href="/admin/jadwal" style={{ color: '#94a3b8' }}>Jadwal Salat</a>
          <a href="/admin/agenda" style={{ color: '#94a3b8' }}>Agenda</a>
          <a href="/admin/pengumuman" style={{ color: '#94a3b8' }}>Pengumuman</a>
          <a href="/admin/pengaturan" style={{ color: '#94a3b8', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #334155' }}>⚙️ Pengaturan</a>
        </nav>
      </aside>
      
      {/* Main Content */}
      <main style={{ flex: 1, padding: '2rem' }}>
        {children}
      </main>
    </div>
  );
}
