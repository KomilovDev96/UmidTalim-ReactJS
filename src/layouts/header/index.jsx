import React from 'react';
import "./style.scss";
import { useTranslation } from 'react-i18next';
export default function HeaderCustoms() {
    const {t} = useTranslation()
    return (
        <header>
            <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex justify-center items-center flex-col text-center'>
                <h1 className='font-bold text-5xl'>UMID TA'LIM</h1>
                <p className='font-light'>{t(`title.main`)}</p>
            </div>
        </header>
    )
}
