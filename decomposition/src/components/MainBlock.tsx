/**
 * Отвечает только за вывод дочерних элементов в верхнем блоке,
 * до блока с формой поиска
 *
 */

export default function MainBlock (props: any) {
    return (
        <div className="row">
            {props.children}
        </div>
    )
}