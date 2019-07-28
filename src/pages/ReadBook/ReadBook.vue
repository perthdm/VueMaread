<style scoped>
    @import "./ReadBook.css";
</style>

<template>
    <div>


        <div class="read-header">
            <Topbar>
                <nav class="uk-navbar-container background-color-none" uk-navbar="dropbar: true">
                    <div class="uk-navbar-left">
                        <ul class="uk-navbar-nav">
                            <router-link to="/book">
                                <li class="uk-active button-bar"><span class="uk-navbar-toggle paddind-right-remove"
                                        uk-icon="chevron-left"></span></li>
                            </router-link>
                        </ul>
                    </div>
                    <div class="read-title uk-text-truncate">
                        ตอนที่ 1 pdfdsnflasdnflasdflnsdflnsdlfnsdanflsadnlfnasdlfnlsadfn
                    </div>
                    <div class="uk-navbar-right">
                        <ul class="uk-navbar-nav">
                            <li class="uk-active button-bar">
                                <span class="uk-navbar-toggle paddind-left-remove" uk-icon="settings"></span>
                                <div class="uk-navbar-dropdown padding-dropdown  uk-margin-remove shawdow"
                                    uk-drop="mode : click ;boundary: !nav; boundary-align: true; pos: bottom-justify;">
                                    <div>
                                        <ion-range class="uk-padding-remove" mode="ios" value="0.5" step="0.1" min="0"
                                            max="1">
                                            <i class="fas fa-sun" slot="start" size="small"></i>
                                            <i class="far fa-sun" slot="end"></i>
                                        </ion-range>
                                    </div>

                                    <div class="custom-radios uk-margin-remove-top" uk-grid>
                                        <div class="filter uk-width-expand uk-text-truncate">
                                            ฟิลเตอร์
                                        </div>

                                        <div
                                            class="uk-text-center uk-width-auto uk-margin-small-left uk-padding-remove">
                                            <input type="radio" id="color-1" name="color" value="color-1" checked>
                                            <label for="color-1">
                                                <span>
                                                </span>
                                            </label>

                                        </div>
                                        <div
                                            class="uk-text-center uk-width-auto uk-margin-small-left uk-padding-remove">
                                            <input type="radio" id="color-2" name="color" value="color-2">
                                            <label for="color-2">
                                                <span>
                                                </span>
                                            </label>

                                        </div>
                                        <div
                                            class="uk-text-center uk-width-auto uk-margin-small-left uk-padding-remove">
                                            <input type="radio" id="color-3" name="color" value="color-3">
                                            <label for="color-3">
                                                <span>
                                                </span>
                                            </label>

                                        </div>
                                    </div>





                                </div>
                            </li>
                            <li class="button-bar">
                                <span class="uk-navbar-toggle paddind-left-remove" uk-icon="social"></span>
                            </li>

                        </ul>

                    </div>
                </nav>
            </Topbar>
        </div>










        <div class="read-content">
            Growth mindset vs Fixed mindset
            ความแตกต่างของ Growth mindset และ Fixed mindset
            คนที่มีวิธีคิดแบบตายตัว (Fixed mindset) คือคนที่เชื่อว่าตัวเองเกิดมาพร้อมกับความสามารถบางอย่าง
            และก็ขาดคุณสมบัติบางอย่างเช่นกัน ในขณะที่คนที่มีวิธีคิดแบบเติบโต (Growth mindset)
            คือคนที่เชื่อว่าเค้าสามารถพัฒนาตัวเองในหลายๆ ด้านได้ หากขยันเรียนรู้และฝึกฝนมากพอ

            ดังนั้นคนที่มีวิธีคิดแบบเติบโตจึงพัฒนาตัวเองอยู่เรื่อยๆ เรียนรู้ทักษะใหม่ๆ ชีวิตคือการเปลี่ยนแปลง
            แต่คนที่มีมีวิธีคิดแบบตายตัวก็จะมีมุมมองที่ต่างออกไป ที่มันจะขัดขวางการพัฒนาตัวเองให้ดีขึ้น
            เมื่อไหร่ก็ตามที่คนเหล่านี้ล้มเหลว ก็มักจะโทษคนอื่นๆ

            คำชมที่เด็กได้รับจากผู้ใหญ่ คำชมจะส่งผลให้เด็กคิดแบบตายตัวและหลีกเลี่ยงความท้าทาย
            คนที่มีวิธีคิดแบบตายตัวต้องการพิสูจน์ตัวเอง คนที่มีวิธีคิดแบบเติบโตต้องการพัฒนาตัวเอง
            คนที่มีวิธีคิดแบบตายตัวจะมองว่าความล้มเหลวคือหายนะ แต่คนที่มีวิธีคิดแบบเติบโตจะมองว่ามันคือโอกาส
            คนที่มีวิธีคิดแบบตายตัวไม่คิดว่าเค้าสามารถเรียนรู้จากความผิดพลาดได้
            แต่มองว่าความผิดพลาดเป็นหลักฐานว่าพ่ายแพ้และไม่ดีพอ และมันจะเป็นแบบนั้นตลอดไป
            คนที่มีวิธีคิดแบบตายตัวมักจะต้องการความมั่นใจ และพยายามรักษาความมั่นใจนั้นไว้ โดยการโทษคนอื่น หาขอแก้ตัว โกง
            จะไม่หาทางหรือคิดวิเคราะห์ปัญหาที่เกิดขึ้น ไม่ฝึกฝนพัฒนาตัวเองให้ดีขึ้น มองว่าตัวเองเป็นได้แค่นี้
            คนที่มีวิธีคิดแบบตายตัวมักจะหลีกเลี่ยงปัญหา เมื่อต้องเจอกับสถานการณ์ที่ยาก ท้าทาย
            เค้าจะมองว่ามันเป็นความเสี่ยง
            คนที่มีวิธีคิดแบบเติบโตจะเผชิญหน้ากับปัญหา และมองว่าปัญหาไม่ใช่อุปสรรคแต่เป็นความท้าทาย
            เค้ามุ่งมั่นที่จะพัฒนาตัวเองและคนรอบข้างให้ดีขึ้น เชื่อว่าทุกคนต่างก็เติบโตและพัฒนาขึ้นได้อีก
            ไม่ว่าใครก็สามารถเปลี่ยนแปลงวิธีคิดได้ ถึงแม้ว่าเราจะตกเป็นเหยื่อของการคิดแบบตายตัว
            แต่สมองของเราก็สามารถเปลี่ยนแปลงได้ ถ้าเราต้องการที่จะเปลี่ยนวิธีคิดใหม่ เป็นแบบเติบโต
            เราสามารถฝึกฝนตัวเราเองให้เปลี่ยนวิธีคิดได้

            แต่วิธีคิดแบบตายตัวก็ใช่ว่าจะเปลี่ยนแปลงกันได้ง่ายๆ มันไม่หายไปในทันที
            หลายครั้งที่เราต้องปกป้องตัวเองจากความพ่ายแพ้ความล้มเหลว หรือแสดงความสามารถให้คนอื่นๆ เห็น
            เพื่อสร้างความมั่นใจ ทำให้เราสบายใจ ดังนั้น จึงเป็นเรื่องยากที่จะกำจัดวิธีคิดแบบนั้นให้หายไป

            แต่เราก็ไม่จำเป็นต้องเลิกคิดแบบเดิมทั้งหมด เราแค่เข้าใจการคิดแบบเติบโต และค่อยๆ เปลี่ยนแปลง
            และเปลี่ยนในบางสถานการณ์เท่านั้น ก็เพียงพอแล้ว
        </div>

        <div class="read-page" id="toggle-page">
            <div class="range-page">
                <ion-range class="uk-padding-remove" color="light" mode="ios" value="0.5" step="0.1" min="0" max="1">
                    <i class="uk-text-right" slot="end">1 จาก 300</i>
                </ion-range>
            </div>
            <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider="finite:ture">

                <ul class="uk-slider-items uk-child-width-auto">
                    <li>
                        <div class="uk-text-center">
                            <img class="img-read-page" src="../../assets/imgs/1.jpg" alt="">
                        </div>
                    </li>
                    <li>
                        <div class="uk-text-center">
                            <img class="img-read-page" src="../../assets/imgs/1.jpg" alt="">
                        </div>
                    </li>
                    <li>
                        <div class="uk-text-center">
                            <img class="img-read-page" src="../../assets/imgs/1.jpg" alt="">
                        </div>
                    </li>
                    <li>
                        <div class="uk-text-center">
                            <img class="img-read-page" src="../../assets/imgs/1.jpg" alt="">
                        </div>
                    </li>
                    <li>
                        <div class="uk-text-center">
                            <img class="img-read-page" src="../../assets/imgs/1.jpg" alt="">
                        </div>
                    </li>
                    <li>
                        <div class="uk-text-center">
                            <img class="img-read-page" src="../../assets/imgs/1.jpg" alt="">
                        </div>
                    </li>
                    <li>
                        <div class="uk-text-center">
                            <img class="img-read-page" src="../../assets/imgs/1.jpg" alt="">
                        </div>
                    </li>

                </ul>


            </div>
        </div>

        <div class="read-footer">
            <nav class="uk-navbar">
                <div class="uk-navbar-left">
                    <span  uk-toggle="target: #toggle-page" uk-icon="thumbnails"></span>
                </div>

                <div class="uk-navbar-right">
                    <ul class="uk-pagination">
                        <li><a href="#"><span class="uk-margin-small-right" uk-pagination-previous></span>
                                หน้าก่อนหน้า</a>
                        </li>
                        <li class="uk-margin-auto-left"><a href="#">หน้าถัดไป <span class="uk-margin-small-left"
                                    uk-pagination-next></span></a></li>
                    </ul>
                </div>
            </nav>



        </div>

    </div>
</template>



<script src="./ReadBook.js"></script>