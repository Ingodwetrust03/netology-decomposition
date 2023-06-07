/**
 * Отвечает за вывод рекламного баннера под формой поиска, скорее всего дизайн не будетменяться, только изображение и ссылка, которые приходят из ропсов
 */

interface Props {
    bannerUrl: string;
    linkUrl: string;
}

export default function BannerBlock ({bannerUrl, linkUrl}: Props) {
    return (
        <div className="row mt-3 mb-5">
            <div className="col-12">
                <a href={linkUrl} target="_blank">
                <img src={bannerUrl} alt="banner"/>
                </a>
            </div>
        </div>
    )
}