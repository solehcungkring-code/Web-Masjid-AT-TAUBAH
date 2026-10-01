'use client';
import { useState, useEffect } from 'react';

const jadwalList = [
  { name: 'Subuh', time: '04:15' },
  { name: 'Dzuhur', time: '12:03' },
  { name: 'Ashar', time: '15:18' },
  { name: 'Maghrib', time: '17:58' },
  { name: 'Isya', time: '19:08' },
];

export default function PrayerCountdown() {
  const [nextPrayer, setNextPrayer] = useState(jadwalList[2]);
  const [timeLeft, setTimeLeft] = useState('Menghitung...');

  useEffect(() => {
    // Fungsi simulasi timer realtime sederhana
    const timer = setInterval(() => {
      const now = new Date();
      // Untuk MVP, kita ambil target jam 15:18 (Ashar) secara simulasi
      const targetTime = new Date();
      targetTime.setHours(15, 18, 0, 0);

      const diff = targetTime.getTime() - now.getTime();
      
      if (diff > 0) {
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        setTimeLeft(
          `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
        );
      } else {
        setTimeLeft('Waktunya Salat');
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <p style={{ margin: 0, fontSize: '1rem', opacity: 0.9 }}>Menuju {nextPrayer.name}</p>
      <h2 style={{ margin: '0.25rem 0', fontSize: '3rem', fontWeight: 800, textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>{nextPrayer.time}</h2>
      <div className="animate-pulse-glow" style={{ marginTop: '0.5rem', display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(255, 255, 255, 0.2)', borderRadius: '24px', fontSize: '1.25rem', fontWeight: 600, backdropFilter: 'blur(4px)' }}>
        - {timeLeft}
      </div>
    </>
  );
}
