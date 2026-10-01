import prisma from '@/lib/prisma';
import { generateDummyData } from './actions';

export const dynamic = 'force-dynamic';

export default async function AdminDashboard() {
  // Mengambil data ASLI dari Database
  const totalAgendas = await prisma.agenda.count();
  const pendingServices = await prisma.serviceRequest.count({
    where: { status: 'PENDING' }
  });

  return (
    <div>
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.875rem', fontWeight: 700, color: '#0f172a' }}>Dashboard Hari Ini</h1>
        <p style={{ color: '#64748b' }}>Apa yang perlu Anda kerjakan hari ini?</p>
      </header>

      {totalAgendas === 0 && (
        <form action={generateDummyData} style={{ marginBottom: '2rem' }}>
          <div style={{ background: '#fef3c7', padding: '1rem', borderRadius: '8px', border: '1px solid #f59e0b' }}>
            <p style={{ color: '#b45309', marginBottom: '0.5rem', fontWeight: 600 }}>Database masih kosong!</p>
            <button type="submit" style={{ background: '#d97706', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}>
              Isi Data Contoh Sekarang (Uji Koneksi)
            </button>
          </div>
        </form>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        
        {/* Widget 1 */}
        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
          <h3 style={{ color: '#64748b', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>JADWAL SALAT</h3>
          <p style={{ fontSize: '1.125rem', fontWeight: 700, color: '#047857' }}>✓ Sudah Diperbarui</p>
        </div>

        {/* Widget 2 */}
        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
          <h3 style={{ color: '#64748b', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>KAJIAN HARI INI</h3>
          <p style={{ fontSize: '1.125rem', fontWeight: 700, color: '#0f172a' }}>{totalAgendas} Agenda Terjadwal</p>
          <button style={{ marginTop: '1rem', background: '#047857', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '8px', cursor: 'pointer' }}>Tambah Agenda</button>
        </div>

        {/* Widget 3 */}
        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
          <h3 style={{ color: '#64748b', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>PERMINTAAN LAYANAN</h3>
          <p style={{ fontSize: '1.125rem', fontWeight: 700, color: '#f59e0b' }}>{pendingServices} Pendaftar Baru</p>
          <a href="#" style={{ display: 'inline-block', marginTop: '1rem', color: '#047857', fontSize: '0.875rem', fontWeight: 600 }}>Lihat Pendaftar →</a>
        </div>

      </div>
    </div>
  );
}
