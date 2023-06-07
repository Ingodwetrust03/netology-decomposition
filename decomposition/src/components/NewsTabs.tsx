/**
 * ОТвечает за вывод табов перед блоком с новостями
 * В качестве пропса принимает массив категорий из App.tsx
 */

export default function NewsTabs ({categories}) {
    return (
        categories.map(category => <div className="col-3 category" key={category.id}>{category.title}</div>)
    )
}