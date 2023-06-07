/**
 * Отвечает за вывод каждой новости
 */


import {Newsitem} from "../models";

export default function NewsItem ({icon, title, link}: Newsitem) {
    return (
        <div className="row">
            <div className="col-1">
                <img src={icon} alt={title} />
            </div>
            <div className="col-10">
                <a href={link} target="_blank">{title}</a>
            </div>
        </div>
    )
}