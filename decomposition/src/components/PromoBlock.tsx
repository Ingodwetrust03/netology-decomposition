/**
 * Отвечает за вывод контента правого промо блока
 * Подразумевается что расположение и наличие контента неизменно, меняются только изображеие, заголовок и текст,
 * которые приходят в виде пропсов
 */


import {Promoblock} from "../models";


export default function PromoBlock ({imageUrl, title, description}: Promoblock) {
    return (
        <div>
            <img src={imageUrl} alt="image" />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}