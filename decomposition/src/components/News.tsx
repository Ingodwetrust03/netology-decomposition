/**
 * ОТвечает только за вывод дочерних элементов относящихся к новостям
 * Компоненты NewsTabs, NewsItem, DateAndTime
 */

export default function News (props: any) {
    return (
        <div className="row">
            {props.children}
        </div>
    )
}