/**
 * Отвечает за вывод каждого блока курса валют и металлов
 */

import {Exchangeblock} from "../models";

export default function ExchangeBlock ({currency, rate, changeRate}: Exchangeblock) {
    return (
        <div className="col-md-4 col-12 mt-3">
        <div className="currency">
            <strong>{currency}</strong> {rate} <div className="greyText">{changeRate}</div>
        </div>
        </div>
    )
}