import React, { Fragment } from 'react'
import { useTranslation } from 'react-i18next';
import { Dropdown } from 'react-dropdown';
import { RuSVG, UzSVG } from '../../../assets';


export default function SelectCustoms() {
    const { i18n: { language, changeLanguage }, t } = useTranslation()
    const getContent = (title, img) => {
        return <Fragment>
            <div className='image'>
                <img src={img} alt="svg" />
            </div>
            <span>{title}</span>
        </Fragment>
    }

    const options = [
        { value: 'ru', label: getContent("lang.ru", RuSVG) },
        { value: 'uz', label: getContent("lang.uz", UzSVG) },
    ]

    return (
        <div>
            <Dropdown
                options={options}
                value={language}
                onChange={(val) => changeLanguage(val.value)}
            />
        </div>
    )
}
