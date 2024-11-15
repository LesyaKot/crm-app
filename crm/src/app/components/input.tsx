'use client';

import React from 'react';
import { Field } from 'formik';

export interface InputProps {
    label?: string;
    id?: string;
    name: string;
    type?: string;
    placeholder?: string;

}

export default function Input({ label, id, ...rest }: InputProps) {
    return (
        <div className="flex flex-col">
            {label && <label htmlFor={id} className="mb-2 text-base text-gray-900">{label}</label>}
            <Field {...rest} id={id} className="p-3 h-11 text-sm rounded border border-gray-300 shadow" />
        </div>
    );
}
