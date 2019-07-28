<style scoped>
    @import "./Profile.css";
</style>
<template>
    <div>
        <div class="read-header">
            <Topbar>
                <nav class="uk-navbar">
                    <div class="uk-navbar-left">
                        <ul class="uk-navbar-nav">
                            <router-link to="/">
                                <li class="uk-active button-bar"><span class="uk-navbar-toggle paddind-right-remove"
                                        uk-icon="chevron-left"></span></li>
                            </router-link>
                        </ul>
                    </div>
                    <div class="uk-navbar-center">
                        โปรไฟล์
                    </div>
                    <div class="uk-navbar-right">
                        <div class="bar-button-right" id="test" v-on:click="edit()">แก้ไข</div>
                    </div>
                </nav>
            </Topbar>
        </div>


        <Content>
            <ion-list>
               
                    <div class="uk-margin uk-text-center padding-top-30">
                        <div uk-form-custom>
                            <input type="file" multiple>
                            <div class="img-profile"
                                v-bind:style="{ backgroundImage : 'url(http://ebook.mareads.com/api/user/get/image/'+Profile.photoURL+')' }">

                            </div>
                            <div class="uk-position-profile uk-position-bottom-right uk-overlay-primary icon-profile">
                                <i class="uk-link fas fa-camera"></i>
                            </div>
                        </div>
                    </div>
             
                <ion-item>
                    <ion-label position="fixed" class="color-red" >ชื่อ</ion-label>
                    <ion-input  v-bind:value="Profile.firstname" @input="Profile.firstname = $event.target.value" required readonly class="box1"></ion-input>
                </ion-item>

                <ion-item>
                    <ion-label position="fixed" class="color-red">นามสกุล</ion-label>
                    <ion-input  v-bind:value="Profile.lastname" @input="Profile.lastname = $event.target.value" required readonly class="box1"></ion-input>
                </ion-item>

                <ion-item>
                    <ion-label position="fixed" class="color-red">อีเมล</ion-label>
                    <ion-input   v-bind:value="Profile.email" @input="Profile.email = $event.target.value" required readonly></ion-input>
                </ion-item>

                <ion-item>
                    <ion-label position="fixed" class="color-red">นามปาก</ion-label>
                    <ion-input  v-bind:value="Profile.displayname" @input="Profile.displayname = $event.target.value" required readonly class="box1"></ion-input>
                </ion-item>

                <ion-item>
                    <ion-label position="fixed" class="color-red">วัน เดือน ปีเกิด</ion-label>
                    <ion-datetime  mode="ios" display-format="DD/MM/YYYY" value="12/10/2019" required readonly class="padding-left-8 box1"></ion-datetime>
                </ion-item>

                <ion-item>
                    <ion-label position="fixed" class="color-red">เบอร์โทรศัพท์</ion-label>
                    <ion-input  v-bind:value="Profile.phone" @input="Profile.phone = $event.target.value" required class="box1"></ion-input>
                </ion-item>



            </ion-list>
        </Content>

    </div>
</template>


<script src="./Profile.js"></script>
