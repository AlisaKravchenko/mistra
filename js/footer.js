const FOOTER = document.createElement('footer')
FOOTER.innerHTML = `
        <div class="container">
            <div class="footer-columns row">
                <div class="footer-column col-md-4 animate__animated animate__fadeInLeft wow">
                    <h4>Компания МАСТЕР</h4>
                    <p>Проектирование и производство машин для переработки металлических отходов</p>
                    <img src="img/svds-logo-e1616502441966.jpg" alt="">
                    <p class="gpdr">Защита персональных данных <span>GDPR</span></p>
                </div>
                <div class="footer-column col-md-4 animate__animated animate__fadeInLeft wow">
                    <h4>Операционная</h4>
                    <p>Druzstevní 1 <br>
                    Zbýšov <br>
                    664 11 <br>
                    Чехия <br>
                    <br>
                    +420 546 212 995 <br>
                    mistra@mistra.cz</p>
                </div>
                <div class="footer-column col-md-4 animate__animated animate__fadeInRight wow">
                    <h4>Платежная информация</h4>
                    <p>MISTRA sro <br>
                    Бржезина 373 <br>
                    Збраслав <br>
                    664 84 <br>
                    Чехия <br>
                    
                    Идентификационный номер: <br> 27723861 Номер плательщика <br>
                    НДС: CZ27723861</p>
                </div>
            </div>
            <hr>
            <p class="animate__animated animate__fadeIn wow">© 2020 МАСТЕР. Контент защищен законом об авторском праве.</p>
        </div>
`
document.body.append(FOOTER)