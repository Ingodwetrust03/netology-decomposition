/**
 * Отвечает за вывод дочерних элементов относящихся к курсам валют и металлов
 */

export default function Exchange (props: any) {
    return (
        <div className="row">
            {props.children}
        </div>
    )
}