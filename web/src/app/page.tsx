import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';
import prisma from '@/lib/prisma';
import PrayerCountdown from '@/components/PrayerCountdown';

export const dynamic = 'force-dynamic';

export default async function Home() {
  // Mengambil agenda terdekat dari Database secara dinamis
  const nextAgenda = await prisma.agenda.findFirst({
    where: { status: 'PUBLISHED' },
    orderBy: { date: 'asc' }
  });

  const settings = await prisma.mosqueSettings.findFirst();
  const whatsappNumber = settings?.whatsappNumber || '088211425288';
  const whatsappUrl = `https://wa.me/${whatsappNumber.startsWith('0') ? '62' + whatsappNumber.slice(1) : whatsappNumber}`;

  return (
    <>
      <div className={styles.homeContainer}>
        {/* Header */}
        <header className={styles.header}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Image src="/logo.png" alt="Logo Masjid At Taubah" width={48} height={48} style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }} priority />
            <div className={styles.mosqueInfo}>
              <h1 className="text-gradient" style={{ fontSize: '1.25rem' }}>Masjid At Taubah</h1>
              <p>Kamis, 1 Oktober 2026</p>
            </div>
          </div>
          <div>
            {/* Icons8 Notification Icon */}
            <img width="28" height="28" src="https://img.icons8.com/ios/48/1f293b/bell.png" alt="Notifikasi" />
          </div>
        </header>

        {/* Hero Section (Next Prayer Realtime) */}
        <section className={styles.heroCard}>
          <PrayerCountdown />
        </section>

        {/* Jadwal Salat Hari Ini */}
        <section>
          <div className={styles.sectionHeader}>
            <h3 className="text-title" style={{ fontSize: '1.25rem' }}>Jadwal Hari Ini</h3>
            <Link href="/jadwal">Semua Jadwal</Link>
          </div>
          <div className={styles.prayerList}>
            <div className={`glass-panel ${styles.prayerItem}`}>
              <p>Subuh</p>
              <h4>04:15</h4>
            </div>
            <div className={`glass-panel ${styles.prayerItem}`}>
              <p>Dzuhur</p>
              <h4>12:03</h4>
            </div>
            <div className={`glass-panel ${styles.prayerItem} ${styles.active}`}>
              <p>Ashar</p>
              <h4>15:18</h4>
            </div>
            <div className={`glass-panel ${styles.prayerItem}`}>
              <p>Maghrib</p>
              <h4>17:58</h4>
            </div>
            <div className={`glass-panel ${styles.prayerItem}`}>
              <p>Isya</p>
              <h4>19:08</h4>
            </div>
          </div>
        </section>

        {/* Agenda Terdekat */}
        <section>
          <div className={styles.sectionHeader}>
            <h3 className="text-title" style={{ fontSize: '1.25rem' }}>Agenda Terdekat</h3>
            <Link href="/agenda">Lihat Semua</Link>
          </div>
          
          {nextAgenda ? (
            <div className={`glass-panel ${styles.agendaCard}`}>
              <div className={styles.agendaDate}>
                <span className={styles.day}>{nextAgenda.date.getDate().toString().padStart(2, '0')}</span>
                <span className={styles.month}>{nextAgenda.date.toLocaleString('id-ID', { month: 'short' })}</span>
              </div>
              <div className={styles.agendaInfo}>
                <h3>{nextAgenda.title}</h3>
                <p>
                  <img width="14" height="14" src="https://img.icons8.com/ios/48/64748b/clock--v1.png" alt="Waktu" /> 
                  {nextAgenda.startTime} - Selesai
                </p>
                {nextAgenda.speaker && (
                  <p>
                    <img width="14" height="14" src="https://img.icons8.com/ios/48/64748b/user.png" alt="Pemateri" /> 
                    {nextAgenda.speaker}
                  </p>
                )}
              </div>
            </div>
          ) : (
            <div className={`glass-panel ${styles.agendaCard}`} style={{ justifyContent: 'center' }}>
              <p style={{ color: '#64748b', fontSize: '0.875rem' }}>Belum ada agenda terdekat minggu ini.</p>
            </div>
          )}
        </section>

        {/* Quick Services */}
        <section>
          <div className={styles.sectionHeader}>
            <h3 className="text-title" style={{ fontSize: '1.25rem' }}>Layanan Masjid</h3>
          </div>
          <div className={styles.servicesGrid}>
            <Link href="/layanan/tpa" className={styles.serviceItem} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className={styles.serviceIcon}>
                <img width="32" height="32" src="https://img.icons8.com/ios/48/047857/reading.png" alt="TPA" />
              </div>
              <span>Daftar TPA</span>
            </Link>
            <Link href="/layanan/fasilitas" className={styles.serviceItem} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className={styles.serviceIcon}>
                <img width="32" height="32" src="https://img.icons8.com/ios/48/047857/mosque.png" alt="Fasilitas" />
              </div>
              <span>Peminjaman</span>
            </Link>
            <Link href="/donasi" className={styles.serviceItem} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className={styles.serviceIcon}>
                <img width="32" height="32" src="https://img.icons8.com/ios/48/047857/handshake.png" alt="Bantuan" />
              </div>
              <span>Zakat/Infaq</span>
            </Link>
            <a href={whatsappUrl} className={styles.serviceItem} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className={styles.serviceIcon}>
                <img width="32" height="32" src="https://img.icons8.com/ios/48/047857/whatsapp.png" alt="Kontak" />
              </div>
              <span>Kontak WA</span>
            </a>
          </div>
        </section>
      </div>

      {/* Bottom Navigation */}
      <nav className={styles.bottomNav}>
        <Link href="/" className={`${styles.navItem} ${styles.active}`}>
          <img width="24" height="24" src="https://img.icons8.com/ios-filled/48/047857/home.png" alt="Home" />
          <span>Home</span>
        </Link>
        <Link href="/jadwal" className={styles.navItem}>
          <img width="24" height="24" src="https://img.icons8.com/ios/48/64748b/mosque.png" alt="Jadwal" />
          <span>Jadwal</span>
        </Link>
        <Link href="/agenda" className={styles.navItem}>
          <img width="24" height="24" src="https://img.icons8.com/ios/48/64748b/calendar--v1.png" alt="Agenda" />
          <span>Agenda</span>
        </Link>
        <Link href="/donasi" className={styles.navItem}>
          <img width="24" height="24" src="https://img.icons8.com/ios/48/64748b/receive-cash.png" alt="Donasi" />
          <span>Donasi</span>
        </Link>
        <Link href="/admin" className={styles.navItem}>
          <img width="24" height="24" src="https://img.icons8.com/ios/48/64748b/menu--v1.png" alt="Admin" />
          <span>Admin</span>
        </Link>
      </nav>
    </>
  );
}
