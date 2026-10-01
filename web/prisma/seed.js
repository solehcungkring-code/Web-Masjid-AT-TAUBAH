const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Membersihkan data lama agar tidak duplikat saat di-run ulang
  await prisma.agenda.deleteMany();
  await prisma.serviceRequest.deleteMany();

  // Memasukkan data Agenda
  await prisma.agenda.create({
    data: {
      title: "Kajian Tafsir Al-Qur'an (Rutin)",
      speaker: "Ustadz Dr. H. Fulan, MA.",
      date: new Date(), // Hari ini
      startTime: "18:30",
      description: "Melanjutkan pembahasan Tafsir Ibnu Katsir",
      status: "PUBLISHED"
    }
  });

  await prisma.agenda.create({
    data: {
      title: "Tahsin & Belajar Tajwid",
      speaker: "Ustadz Ahmad (Pengurus TPA)",
      date: new Date(new Date().setDate(new Date().getDate() + 1)), // Besok
      startTime: "16:00",
      description: "Terbuka untuk umum (Semua Umur)",
      status: "PUBLISHED"
    }
  });

  // Memasukkan data Permintaan Layanan
  await prisma.serviceRequest.create({
    data: {
      serviceType: "TPA",
      submitterName: "Bapak Budi Santoso",
      whatsappNumber: "081234567890",
      details: "Mendaftar kelas TPA sore untuk 2 orang anak",
      status: "PENDING"
    }
  });
  
  await prisma.serviceRequest.create({
    data: {
      serviceType: "Peminjaman Fasilitas",
      submitterName: "Ibu Siti Nurhaliza",
      whatsappNumber: "089876543210",
      details: "Ingin meminjam Aula Serbaguna untuk acara Khitanan akhir bulan",
      status: "PENDING"
    }
  });

  console.log("✅ Database berhasil diisi dengan data dummy berkualitas!");
}

main()
  .catch(e => {
    console.error("❌ Gagal mengisi database:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
