import Link from 'next/link';
import prisma from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export default async function DonasiBayarPage({
  searchParams,
}: {
  searchParams: { kampanye: string };
}) {
  const kampanyeNama = searchParams.kampanye === 'wudhu' ? 'Pembangunan Tempat Wudhu' : 'Nasi Jumat Berkah';
  
  const settings = await prisma.mosqueSettings.findFirst();
  const bankAccount = settings?.bankAccount || 'BSI 7123 456 789 a.n. DKM At Taubah';
  const qrisUrl = settings?.qrisUrl || 'https://img.icons8.com/ios/100/0f172a/qr-code.png';
  const whatsappNumber = settings?.whatsappNumber || '088211425288';
  const whatsappUrl = `https://wa.me/${whatsappNumber.startsWith('0') ? '62' + whatsappNumber.slice(1) : whatsappNumber}`;

  return (
    <div style={{ padding: '1.5rem', backgroundColor: '#f8fafc', minHeight: '100vh' }}>
      <header style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <Link href="/donasi" style={{ padding: '0.5rem', background: 'white', borderRadius: '50%', display: 'flex', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <img width="24" height="24" src="https://img.icons8.com/ios/48/0f172a/back--v1.png" alt="Back" />
        </Link>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a' }}>Instruksi Pembayaran</h1>
      </header>

      <div style={{ background: 'white', padding: '1.5rem', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', border: '1px solid #e2e8f0' }}>
        <p style={{ color: '#64748b', marginBottom: '1.5rem', fontSize: '0.875rem' }}>Anda akan berdonasi untuk program: <strong>{kampanyeNama}</strong>.</p>
        
        <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem' }}>Pilihan Transfer Bank</h3>
        <div style={{ background: '#f1f5f9', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
          <p style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a' }}>{bankAccount}</p>
        </div>

        <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem' }}>Atau via QRIS</h3>
        <div style={{ background: '#f1f5f9', padding: '1.5rem', borderRadius: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '1.5rem' }}>
          <div style={{ width: '150px', height: '150px', background: 'white', padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img width="100" height="100" src={qrisUrl} alt="QRIS" style={{ objectFit: 'contain' }} />
          </div>
          <p style={{ marginTop: '1rem', fontSize: '0.875rem', color: '#64748b' }}>Scan menggunakan Gopay, OVO, Dana, dll.</p>
        </div>

        <div style={{ padding: '1rem', background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '8px' }}>
          <p style={{ fontSize: '0.875rem', color: '#166534', textAlign: 'center' }}>
            Setelah transfer, mohon konfirmasi ke Admin kami melalui WhatsApp.
          </p>
          <a href={whatsappUrl} style={{ display: 'block', textAlign: 'center', marginTop: '0.75rem', padding: '0.5rem', background: '#16a34a', color: 'white', borderRadius: '8px', textDecoration: 'none', fontWeight: 600 }}>Konfirmasi via WA</a>
        </div>
      </div>
    </div>
  );
}
