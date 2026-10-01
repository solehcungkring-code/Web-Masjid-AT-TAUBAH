import prisma from '@/lib/prisma';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function AgendaPage() {
  const agendas = await prisma.agenda.findMany({
    where: { status: 'PUBLISHED' },
    orderBy: { date: 'asc' }
  });

  return (
    <div style={{ padding: '1.5rem', paddingBottom: '100px', backgroundColor: '#f8fafc', minHeight: '100vh' }}>
      <header style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <Link href="/" style={{ padding: '0.5rem', background: 'white', borderRadius: '50%', display: 'flex', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <img width="24" height="24" src="https://img.icons8.com/ios/48/0f172a/back--v1.png" alt="Back" />
        </Link>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a' }}>Agenda Masjid</h1>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {agendas.length > 0 ? (
          agendas.map(agenda => (
            <div key={agenda.id} style={{ background: 'white', padding: '1.5rem', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', border: '1px solid #e2e8f0', display: 'flex', gap: '1.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '60px' }}>
                <span style={{ fontSize: '1.75rem', fontWeight: 800, color: '#047857', lineHeight: 1 }}>{agenda.date.getDate().toString().padStart(2, '0')}</span>
                <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase' }}>{agenda.date.toLocaleString('id-ID', { month: 'short' })}</span>
              </div>
              <div style={{ flex: 1, borderLeft: '1px solid #e2e8f0', paddingLeft: '1.5rem' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>{agenda.title}</h3>
                <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#64748b', marginBottom: '0.25rem' }}>
                  <img width="16" height="16" src="https://img.icons8.com/ios/48/64748b/clock--v1.png" alt="Waktu" />
                  {agenda.startTime} - Selesai
                </p>
                {agenda.speaker && (
                  <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#64748b', marginBottom: '0.5rem' }}>
                    <img width="16" height="16" src="https://img.icons8.com/ios/48/64748b/user.png" alt="Pemateri" />
                    {agenda.speaker}
                  </p>
                )}
                {agenda.description && (
                  <p style={{ fontSize: '0.875rem', color: '#334155', marginTop: '0.5rem', padding: '0.5rem', background: '#f1f5f9', borderRadius: '8px' }}>
                    {agenda.description}
                  </p>
                )}
              </div>
            </div>
          ))
        ) : (
          <p style={{ textAlign: 'center', color: '#64748b', marginTop: '2rem' }}>Belum ada agenda bulan ini.</p>
        )}
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
        <Link href="/agenda" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', textDecoration: 'none', color: '#047857' }}>
          <img width="24" height="24" src="https://img.icons8.com/ios-filled/48/047857/calendar--v1.png" alt="Agenda" />
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
