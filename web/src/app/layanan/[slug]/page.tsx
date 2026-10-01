import Link from 'next/link';
import prisma from '@/lib/prisma';
import { redirect } from 'next/navigation';

export default function LayananDetail({ params }: { params: { slug: string } }) {
  const titles: Record<string, string> = {
    tpa: 'Pendaftaran TPA',
    fasilitas: 'Peminjaman Fasilitas Masjid'
  };

  const title = titles[params.slug] || 'Layanan Masjid';

  // Server Action untuk memproses formulir
  async function submitLayanan(formData: FormData) {
    'use server';
    
    const nama = formData.get('nama') as string;
    const whatsapp = formData.get('whatsapp') as string;
    const keterangan = formData.get('keterangan') as string;

    // 1. Simpan ke Database agar muncul di Dashboard Admin
    await prisma.serviceRequest.create({
      data: {
        serviceType: titles[params.slug] || params.slug,
        submitterName: nama,
        whatsappNumber: whatsapp,
        details: keterangan,
        status: "PENDING"
      }
    });

    // 2. Ambil nomor WA dari Pengaturan Database
    const settings = await prisma.mosqueSettings.findFirst();
    const adminWa = settings?.whatsappNumber || '088211425288';
    const waNumberStr = adminWa.startsWith('0') ? '62' + adminWa.slice(1) : adminWa;

    // 3. Format pesan untuk dikirim via WhatsApp
    const message = `Assalamu'alaikum, saya ingin mengajukan *${title}*.\n\n*Nama:* ${nama}\n*Keterangan:* ${keterangan}\n\nMohon petunjuk selanjutnya.`;
    const waUrl = `https://wa.me/${waNumberStr}?text=${encodeURIComponent(message)}`;

    // 4. Redirect ke WhatsApp
    redirect(waUrl);
  }

  return (
    <div style={{ padding: '1.5rem', backgroundColor: '#f8fafc', minHeight: '100vh' }}>
      <header style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <Link href="/" style={{ padding: '0.5rem', background: 'white', borderRadius: '50%', display: 'flex', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <img width="24" height="24" src="https://img.icons8.com/ios/48/0f172a/back--v1.png" alt="Back" />
        </Link>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a' }}>{title}</h1>
      </header>

      <div style={{ background: 'white', padding: '1.5rem', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', border: '1px solid #e2e8f0' }}>
        <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>Silakan isi formulir di bawah ini. Data Anda akan tersimpan di sistem, dan Anda akan diteruskan ke WhatsApp Admin untuk konfirmasi.</p>
        
        <form action={submitLayanan} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.5rem' }}>Nama Lengkap</label>
            <input name="nama" type="text" required placeholder="Masukkan nama Anda" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.5rem' }}>Nomor WhatsApp</label>
            <input name="whatsapp" type="tel" required placeholder="Contoh: 08123456789" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.5rem' }}>Keterangan Tambahan</label>
            <textarea name="keterangan" required rows={4} placeholder="Tuliskan detail permohonan Anda..." style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', resize: 'vertical' }}></textarea>
          </div>
          
          <button type="submit" style={{ marginTop: '1rem', width: '100%', padding: '1rem', background: '#047857', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 600, fontSize: '1rem', cursor: 'pointer' }}>Kirim & Lanjutkan ke WA</button>
        </form>
      </div>
    </div>
  );
}
