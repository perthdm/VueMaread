<style scoped>
    @import "./Readfiction.css";
</style>

<template>
    <div>


        <div class="read-header">
            <Topbar>
                <nav class="uk-navbar-container background-color-none" uk-navbar="dropbar: true">
                    <div class="uk-navbar-left">
                        <ul class="uk-navbar-nav" v-on:click="Back()">
                                <li class="uk-active button-bar"><span class="uk-navbar-toggle paddind-right-remove" uk-icon="chevron-left"></span></li>
                                
                        </ul>
                    </div>
                    <div class="read-title uk-text-truncate">
                       {{ DetailArray.title }}
                    </div>
                    <div class="uk-navbar-right">
                        <ul class="uk-navbar-nav">
                            <li class="uk-active button-bar">
                                <span class="uk-navbar-toggle paddind-left-remove" uk-icon="bookmark"></span>
                            </li>
                            <li class="uk-active button-bar">
                                <span class="uk-navbar-toggle paddind-left-remove" uk-icon="settings"></span>
                                <div class="uk-navbar-dropdown padding-dropdown  uk-margin-remove shawdow"
                                    uk-drop="mode : click ;boundary: !nav; boundary-align: true; pos: bottom-justify;">
                                    <div>
                                        <ion-range class="uk-padding-remove" mode="ios" @ionChange="brightChange($event)" value="0.5" step="0.1" min="0"
                                            max="1">
                                            <i class="fas fa-sun" slot="start" size="small"></i>
                                            <i class="far fa-sun" slot="end"></i>
                                        </ion-range>
                                    </div>
                                    <div>
                                        <ion-range class="uk-padding-remove" mode="ios" value="1" color="dark"
                                            min="0.75" max="1.75" step="0.25" snaps="true" @ionChange="fontSize($event)">
                                            <ion-label class="text-small uk-text-center" slot="start">A-</ion-label>
                                            <ion-label class="text-big" slot="end">A+</ion-label>
                                        </ion-range>
                                    </div>

                                    <div  uk-grid>
                                            <div class="filter uk-width-1-4 uk-text-truncate">
                                                    ฟอนต์
                                                 </div>
                                             
                                                 <div class="uk-text-center uk-width-expand uk-margin-small-left uk-padding-remove">
                                                        <select  class="uk-select select-none-option" @change="fontChange($event)" >
                                                                <option v-for="font in fontsArr">{{ font }}</option>
                                                        </select> 
                                                 </div>
                                    </div>


                                    <div class="custom-radios uk-margin-remove-top" uk-grid>
                                        <div class="filter uk-width-expand uk-text-truncate">
                                                 ฟิลเตอร์
                                        </div>
                                    
                                        <div class="uk-text-center uk-width-auto uk-margin-small-left uk-padding-remove" v-on:click="modeChange('normal', $event)">
                                            <input type="radio" id="color-1" name="color" value="color-1" checked>
                                            <label for="color-1">
                                                <span>
                                                </span>
                                            </label>
                                          
                                        </div>
                                        <div class="uk-text-center uk-width-auto uk-margin-small-left uk-padding-remove" v-on:click="modeChange('dark', $event)">
                                            <input type="radio" id="color-2" name="color" value="color-2">
                                            <label for="color-2">
                                                <span>
                                                </span>
                                            </label>
                                           
                                        </div>
                                        <div class="uk-text-center uk-width-auto uk-margin-small-left uk-padding-remove" v-on:click="modeChange('sepia', $event)">
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


        <div class="read-content" v-bind:style="contentStyle" v-bind:class="contentClass" v-html="DetailArray.content">
            
        </div>

        <div class="read-footer">
            <nav class="uk-navbar">
                <div class="uk-navbar-left">
                    <span uk-toggle="target: #offcanvas-reveal" uk-icon="thumbnails"></span>
                </div>

                <div class="uk-navbar-right">
                    <ul class="uk-pagination">
                        <li><a href="#"><span class="uk-margin-small-right" uk-pagination-previous></span> ก่อนหน้า</a>
                        </li>
                        <li class="uk-margin-auto-left"><a href="#">ถัดไป <span class="uk-margin-small-left"
                                    uk-pagination-next></span></a></li>
                    </ul>
                </div>
            </nav>

            <!-- Chapter -->
            <div class="chapter" id="offcanvas-reveal" uk-offcanvas="mode: reveal; overlay: true">
                <div class="uk-offcanvas-bar uk-padding-remove">

                    <div class="chapter-title">
                        สารบัญ
                    </div>
                    <div class="chapter-content">
                        <ion-list>
                            <ion-radio-group>
                                <ion-item>
                                    <ion-label>
                                        <div class="title-list uk-text-truncate">บทนำ</div>
                                        <div class="time-list uk-text-truncate">อัพเดตล่าสุด 12/05/2562</div>
                                    </ion-label>
                                    <ion-radio slot="end" mode="ios" value="biff" checked></ion-radio>
                                </ion-item>

                                <ion-item>
                                    <ion-label>
                                        <div class="title-list uk-text-truncate">บทที่ 1 ภาระหน้าที่</div>
                                        <div class="time-list uk-text-truncate">อัพเดตล่าสุด 12/05/2562</div>
                                    </ion-label>
                                    <ion-radio slot="end" mode="ios" value="griff"></ion-radio>
                                </ion-item>

                                <ion-item>
                                    <ion-label>
                                        <div class="title-list uk-text-truncate">บทที่ 2 พระชายารอง</div>
                                        <div class="time-list uk-text-truncate">อัพเดตล่าสุด 12/05/2562</div>
                                    </ion-label>
                                    <ion-radio slot="end" mode="ios" value="buford"></ion-radio>
                                </ion-item>
                                <ion-item>
                                    <ion-label>
                                        <div class="title-list uk-text-truncate">บทนำ</div>
                                        <div class="time-list uk-text-truncate">อัพเดตล่าสุด 12/05/2562</div>
                                    </ion-label>
                                    <ion-radio slot="end" mode="ios" value="r"></ion-radio>
                                </ion-item>

                                <ion-item>
                                    <ion-label>
                                        <div class="title-list uk-text-truncate">บทที่ 1 ภาระหน้าที่</div>
                                        <div class="time-list uk-text-truncate">อัพเดตล่าสุด 12/05/2562</div>
                                    </ion-label>
                                    <ion-radio slot="end" mode="ios" value="e"></ion-radio>
                                </ion-item>

                                <ion-item>
                                    <ion-label>
                                        <div class="title-list uk-text-truncate">บทที่ 2 พระชายารอง</div>
                                        <div class="time-list uk-text-truncate">อัพเดตล่าสุด 12/05/2562</div>
                                    </ion-label>
                                    <ion-radio slot="end" mode="ios" value="q"></ion-radio>
                                </ion-item>
                            </ion-radio-group>
                        </ion-list>

                    </div>
                </div>
            </div>
            <!-- Chapter -->

        </div>

    </div>
</template>



<script src="./Readfiction.js"></script>