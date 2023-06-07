/**
 * Отвечает за вывод формы поиска, по идее в кчаестве пропса должна принимать значение value у инпута,
 * взятого из useState в App.tsx
 */

export default function SearchBlock () {
    return (
        <div className="row mt-5">
            <div className="col-12">
                <form className="row g-3">
                        <div className="col-9">
                            <input type="text" className="form-control" placeholder="Search" />
                        </div>
                        <div className="col-3">
                            <button type="submit" className="btn btn-primary mb-3">Поиск</button>
                        </div>
                </form>
        </div>
        </div>
    )
}