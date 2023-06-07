/**
 * Отвечает за вывод каждого виджета, на вход в качестве пропсов принимает заголовок и дочерние элементы,
 * так как контент после заголовка в виджетах расположен по-разному
 */

interface Props {
    title: string;
    children: any;
}

export default function Widget ({title, children}: Props) {
    return (
        <div className="col-md-4 col-12">
            <h3>{title}</h3>
            {children}
        </div>
    )
}