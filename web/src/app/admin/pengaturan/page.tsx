import prisma from '@/lib/prisma';
import { updateSettings } from './actions';

export const dynamic = 'force-dynamic';

export default async function PengaturanPage() {
  const settings = await prisma.mosqueSettings.findFirst();

  return (
    <div>
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.875rem', fontWeight: 700, color: '#0f172a' }}>Pengaturan Masjid</h1>
        <p style={{ color: '#64748b' }}>Kelola informasi publik masjid Anda.</p>
      </header>

      <div style={{ background: 'white', padding: '1.5rem', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', border: '1px solid #e2e8f0', maxWidth: '600px' }}>
        <form action={updateSettings} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.5rem' }}>Nomor WhatsApp Admin</label>
            <p style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: '0.5rem' }}>Gunakan format awalan 08xxx. Nomor ini digunakan untuk semua pesan masuk dari Jamaah.</p>
            <input 
              name="whatsappNumber" 
              type="text" 
              defaultValue={settings?.whatsappNumber || '088211425288'} 
              style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none' }} 
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.5rem' }}>Informasi Rekening Donasi</label>
            <p style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: '0.5rem' }}>Tuliskan Nama Bank, Nomor Rekening, dan Atas Nama.</p>
            <input 
              name="bankAccount" 
              type="text" 
              defaultValue={settings?.bankAccount || 'BSI 7123 456 789 a.n. DKM At Taubah'} 
              style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none' }} 
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.5rem' }}>Tautan Gambar QRIS (URL)</label>
            <p style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: '0.5rem' }}>Masukkan URL/Link gambar barcode QRIS Masjid Anda.</p>
            <input 
              name="qrisUrl" 
              type="text" 
              placeholder="https://..."
              defaultValue={settings?.qrisUrl || ''} 
              style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none' }} 
            />
          </div>

          <button type="submit" style={{ padding: '0.75rem 1.5rem', background: '#047857', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 600, fontSize: '1rem', cursor: 'pointer', alignSelf: 'flex-start' }}>
            Simpan Perubahan
          </button>
        </form>
      </div>
    </div>
  );
}
