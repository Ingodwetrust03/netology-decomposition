/**
 * Отвечает за вывод дочерних элементов относящихся к виджетам погоды, эфира, расписаний и др.
 */

export default function Widgets (props: any) {
    return (
        <div className="row row-gap-3">
            {props.children}
        </div>
    )
}