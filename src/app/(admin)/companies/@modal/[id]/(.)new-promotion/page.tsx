'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import PromotionFormModal from '@/app/components/promotion-form-modal';

export interface PageProps {
  params: { id: string | Promise<string> };
}

export default function Page({ params }: PageProps) {
  const router = useRouter();

  const id = typeof params.id === 'string' ? params.id : React.use(params.id);

  return (
    <PromotionFormModal
      companyId={id}
      show={true}
      onClose={() => router.back()}
    />
  );
}
