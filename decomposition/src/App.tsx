
import './App.css'
import Widgets from "./components/Widgets";
import Widget from "./components/Widget";
import BannerBlock from "./components/BannerBlock";
import SearchBlock from "./components/SearchBlock";
import PromoBlock from "./components/PromoBlock";
import MainBlock from "./components/MainBlock";
import Exchange from "./components/Exchange";
import ExchangeBlock from "./components/ExchangeBlock";
import News from "./components/News";
import NewsItem from "./components/NewsItem";
import DateAndTime from "./components/DateAndTime";
import NewsTabs from "./components/NewsTabs";

function App() {
    const today = new Date();
    const categoriesArr = [
        {
        id: 1,
        title: "Сейчас в СМИ"
        },
        {
            id: 2,
            title:  "В Германии"
        },
        {
            id: 3,
            title:  "Рекомендуем"
        }
        ]

  return (

    <>
        <MainBlock>
            <div className="col-md-8 col-12">
                <News>
                    <NewsTabs categories={categoriesArr}></NewsTabs>
                    <DateAndTime today={today}></DateAndTime>
                    <NewsItem icon={'./src/assets/img/news-icon-01.jpg'} title="Выяснено, почему люди с более высоким уровнем интеллекта соображают медленнее" link="#"></NewsItem>
                    <NewsItem icon={"./src/assets/img/news-icon-02.jpg"} title="Meta анонсировала гарнитуру смешанной реальности Quest 3" link="https://ya.ru"></NewsItem>
                    <NewsItem icon={"./src/assets/img/news-icon-01.jpg"} title="Выяснено, почему люди с более высоким уровнем интеллекта соображают медленнее" link="#"></NewsItem>
                    <NewsItem icon={"./src/assets/img/news-icon-02.jpg"} title="Meta анонсировала гарнитуру смешанной реальности Quest 3" link="#"></NewsItem>
                    <NewsItem icon={"./src/assets/img/news-icon-01.jpg"} title="Выяснено, почему люди с более высоким уровнем интеллекта соображают медленнее" link="#"></NewsItem>
                </News>
                <Exchange>
                    <ExchangeBlock currency="USD MOEX" rate={63.52} changeRate="+0.09"></ExchangeBlock>
                    <ExchangeBlock currency="EUR MOEX" rate={70.52} changeRate="+0.14"></ExchangeBlock>
                    <ExchangeBlock currency="НЕФТЬ" rate={64.90} changeRate="-1.63%"></ExchangeBlock>
                </Exchange>
            </div>
            <div className="col-md-4 col-12">
                <PromoBlock imageUrl={"./src/assets/img/promo-icon.jpg"} title="Работа над ошибками" description="Смотрите на яндекс и запоминайте"></PromoBlock>
            </div>
        </MainBlock>

        <SearchBlock></SearchBlock>

        <BannerBlock bannerUrl={"./src/assets/img/banner.jpg"} linkUrl="https://ya.ru"></BannerBlock>

        <Widgets>
            <Widget title="Погода">
                <div className="row">
                    <div className="col-md-2 col-12">
                        <i className="material-icons">sunny</i>
                    </div>
                    <div className="col-md-2 col-12">
                        <span>+17<sup>&deg;</sup></span>
                    </div>
                    <div className="col-md-5 col-12">
                        <p>Утрм +17<sup>&deg;</sup>,</p>
                        <p>днем +20<sup>&deg;</sup></p>
                    </div>
                </div>
            </Widget>
            <Widget title="Карта Германии"><p>Расписания</p></Widget>
            <Widget title="Эфир">
                <div className="row">
                    <div className="col-md-2 col-12">
                        <i  className="material-icons">play_circle</i>
                    </div>
                    <div className="col-md-5 col-12">
                        <p>Управление как искуство</p>
                    </div>
                    <div className="col-md-5 col-12">
                        <div className="greyText">Успех</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 col-12">
                        <i  className="material-icons">play_circle</i>
                    </div>
                    <div className="col-md-5 col-12">
                        <p>Ночь. Мир в это время </p>
                    </div>
                    <div className="col-md-5 col-12">
                        <div className="greyText">earthTV</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 col-12">
                        <i  className="material-icons">play_circle</i>
                    </div>
                    <div className="col-md-5 col-12">
                        <p>Андрей Вознесенский</p>
                    </div>
                    <div className="col-md-5 col-12">
                        <div className="greyText">Совершенно секретно</div>
                    </div>
                </div>
            </Widget>
            <Widget title="Посещаемое">
                <div className="d-flex align-middle">
                <h4>Недвижимость</h4><span>&nbsp;-&nbsp;Все о сталинках</span>
                </div>
                <div className="d-flex align-middle">
                    <h4>Маркет</h4><span>&nbsp;-&nbsp;люстры и светильники</span>
                </div>
                <div className="d-flex align-middle">
                    <h4>Авто.ру</h4><span>&nbsp;-&nbsp;привод 4х4</span>
                </div>
            </Widget>
            <Widget title="Телепрограмма">
                <div className="tv-cast">
                    <div>02:00</div>
                    <div>TNT/Best</div>
                    <div className="greyText">TNT International</div>
                </div>
                <div className="tv-cast">
                    <div>02:15</div>
                    <div>Джинглики</div>
                    <div className="greyText">Карусель</div>
                </div>
                <div className="tv-cast">
                    <div>02:25</div>
                    <div>Наедине со всеми</div>
                    <div className="greyText">Первый</div>
                </div>
            </Widget>
        </Widgets>
    </>
  )
}

export default App
