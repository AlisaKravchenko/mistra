const HEADER = document.createElement('div')
HEADER.innerHTML = `
<div class="fast-connection-wrap"> 
    <div class="fast-connection container">
        <div class="fast-connection-questions">
            <div class="fast-connection-head-wrap">
                <p class="fast-connection-head wow animate__animated animate__fadeInDown">У вас есть вопрос?</p>
            </div>
            <div class="fast-connection-links"> 
                
                <div class="fast-connection-section wow animate__animated animate__fadeInDown">
                    <span class="material-symbols-outlined" translate="no">
                        call
                    </span>
                    <a href="tel:+420546212995">+420 546 212 995</a>
                </div>
                <div class="fast-connection-section wow animate__animated animate__fadeInDown">
                    <span class="material-symbols-outlined" translate="no">
                        mail
                    </span>
                    <a href="mailto:mistra@mistra.cz">mistra@mistra.cz</a>
                    
                </div>
            </div>
        </div>
        <div class="fast-connection-section fast-connection-youtube wow animate__animated animate__fadeInDown">
            <span class="material-symbols-outlined youtube-ico" translate="no">
                arrow_right
            </span>
            <a href="https://www.youtube.com/channel/UCXgXUdod9Zw9XZAwaKm_gRQ"><p>Наш&nbsp;<span translate="no">YouTube</span></p></a>
        </div>
    </div>
</div>
<div class="header-wrap">    
    <div class="container">
        <header>
            <div class="header">
                <div class="logo wow animate__animated animate__fadeInLeft">
                    <img src="img/logo.png" alt="">
                </div>
                <div class="menu-section">
                    
                    <div class="menu wow animate__animated animate__fadeInDown">
                        <ul>
                            <li><a href="index.html">Главная</a></li>
                            <li class="menu-product-catalog">
                                <a href="product-catalog.html">Каталог продукции</a>
                                
                                <div class="dropdown-catalog">
                                    <div class="dropdown-menu product-dropdown-menu">
                                        <a class="dropdown-item" href="kayman-aftomat-g700.html">Автоматические ножницы <br>KAYMAN AUTOMATIC G700</a>
                                        <a class="dropdown-item" href="excavator-scissors.html">Эскаваторные ножницы CONDOR</a>
                                        <a class="dropdown-item" href="rail-switch.html">BREAKER рельсолом</a>
                                        <a class="dropdown-item" href="tenant-eagle.html">Канатный съемник EAGLE</a>
                                        <a class="dropdown-item" href=""transplanter.html">Рассадопосадочная машина MOLE</a>
                                    </div>
                                </div>
                                
                            </li>
                            <li><a href="product-category.html">Категория продукции</a></li>
                            <li><a href="services.html">Услуги</a></li>
                            <li><a href="about-company.html">О компании</a></li>
                            <li><a href="contacts.html">Контакты</a></li>
                        </ul>
                    </div>
                    <div class="language wow animate__animated animate__fadeInRight">
                        <div class="dropdown language-dropdown">
                            <button
                                class="btn btn-secondary dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Выберите язык
                            </button>
                            <div
                                class="dropdown-menu language-dropdown-menu"
                                aria-labelledby="dropdownMenuButton"
                            >
                                <p data-google-lang="cs">Чешский<img src="img/translate-flags/lang__cz.png"></img></p>
                                <p data-google-lang="ar">Арабский<img src="img/translate-flags/lang__ar.png"></img></p>
                                <p data-google-lang="de">Немецкий<img src="img/translate-flags/lang__de.png"></img></p>
                                <p data-google-lang="en">Английский<img src="img/translate-flags/lang__en.png"></img></p>
                                <p data-google-lang="es">Испанский<img src="img/translate-flags/lang__es.png"></img></p>
                                <p data-google-lang="fr">Французский<img src="img/translate-flags/lang__fr.png"></img></p>
                                <p data-google-lang="it">Итальянский<img src="img/translate-flags/lang__it.png"></img></p>
                                <p data-google-lang="nl">Нидерландский<img src="img/translate-flags/lang__nl.png"></img></p>
                                <p data-google-lang="pt">Португальский<img src="img/translate-flags/lang__pt.png"></img></p>
                                <p data-google-lang="ru">Русский<img src="img/translate-flags/lang__ru.png"></img></p>
                                <p data-google-lang="sv">Шведский<img src="img/translate-flags/lang__sv.png"></img></p>
                                <!-- <p data-google-lang="zh">Китайский<img src="img/translate-flags/lang__zh.png"></img></p> -->
                            </div>
                        </div>
                    </div>
                    <div class="small-menu-btn wow animate__animated animate__fadeInRight">
                        <span translate="no" class="material-symbols-outlined" id="small-menu-open">
                                menu
                        </span>
                    </div>
                    <div class="small-menu-wrap">
                        <div class="small-menu">
                            <span class="material-symbols-outlined" translate="no" id="small-menu-close">
                                    close
                            </span>
                            <ul>
                                <li><a href="index.html">Главная</a></li>
                                <li>
                                    <a href="product-catalog.html">Каталог продукции</a>
                                    <div class="more-menu-toggle">
                                        <div class="more-menu-btn-wrap">
                                            <span translate="no" class="material-symbols-outlined more-menu-btn">
                                                add
                                            </span>
                                        </div>
                                        <div class="more-menu">
                                            <ul>
                                                <li><a href="kayman-aftomat-g700.html">Автоматические ножницы <br>KAYMAN AUTOMATIC G700</a></li>
                                                <li><a href="excavator-scissors.html">Эскаваторные ножницы CONDOR</a></li>
                                                <li><a href="rail-switch.html">BREAKER рельсолом</a></li>
                                                <li><a href="tenant-eagle.html">Канатный съемник EAGLE</a></li>
                                                <li><a href="transplanter.html">Рассадопосадочная машина MOLE</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li><a href="product-category.html">Категория продукции</a></li>
                                <li><a href="services.html">Услуги</a></li>
                                <li><a href="about-company.html">О компании</a></li>
                                <li><a href="contacts.html">Контакты</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            
        </header>
    </div>
</div>

`
document.body.prepend(HEADER)