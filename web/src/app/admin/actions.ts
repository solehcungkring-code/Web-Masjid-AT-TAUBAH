'use server';

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function generateDummyData() {
  // Tambah agenda dummy
  await prisma.agenda.create({
    data: {
      title: "Kajian Tafsir Al-Qur'an (Data Asli DB)",
      speaker: "Ust. Ahmad",
      date: new Date(),
      startTime: "19:30",
      description: "Membahas tafsir surat Al-Baqarah",
    }
  });

  // Tambah layanan dummy
  await prisma.serviceRequest.create({
    data: {
      serviceType: "TPA",
      submitterName: "Budi Santoso",
      whatsappNumber: "08123456789",
      details: "Mendaftar TPA kelas sore",
    }
  });

  revalidatePath('/');
  revalidatePath('/admin');
}
