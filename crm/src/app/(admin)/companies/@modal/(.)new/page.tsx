// 'use client';
// import React from 'react';
// import { useRouter } from 'next/navigation';
// import CompanyFormModal from '@/app/components/company-form-modal';
//
// export interface PageProps {}
//
// export default function Page({}: PageProps) {
//     const router = useRouter();
//
//     return <CompanyFormModal show={true} onClose={() => router.back()} />;
// }

'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import CompanyFormModal from '@/app/components/company-form-modal';

export interface PageProps {}

export default function Page({}: PageProps) {
    const router = useRouter();

    const handleSubmit = (formData: any) => {
        // Обробка даних форми
        console.log('Form submitted:', formData);
        router.back(); // Повернення на попередню сторінку
    };

    return (
        <CompanyFormModal
            show={true}
            onClose={() => router.back()}
            onSubmit={handleSubmit}
        />
    );
}
