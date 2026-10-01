'use server';

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function updateSettings(formData: FormData) {
  const whatsappNumber = formData.get('whatsappNumber') as string;
  const bankAccount = formData.get('bankAccount') as string;
  const qrisUrl = formData.get('qrisUrl') as string;

  let settings = await prisma.mosqueSettings.findFirst();
  
  if (settings) {
    await prisma.mosqueSettings.update({
      where: { id: settings.id },
      data: { whatsappNumber, bankAccount, qrisUrl }
    });
  } else {
    await prisma.mosqueSettings.create({
      data: {
        whatsappNumber,
        bankAccount,
        qrisUrl,
        name: "Masjid At Taubah",
        latitude: 0,
        longitude: 0,
        iqamahIntervals: "{}"
      }
    });
  }

  revalidatePath('/');
  revalidatePath('/donasi/bayar');
  revalidatePath('/admin/pengaturan');
}
