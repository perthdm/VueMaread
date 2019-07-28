<style scoped>
    @import "./Login.css";
</style>

<template>
    <div>
        <div class="login-content">
            <div class="container">
                <div class="uk-width-1-1 uk-text-center">
                    <img class="imgLogo uk-animation-scale-up" src="../../assets/imgs/logoMareadsRed.svg">
                </div>
                <div class="padding-t30">

                    <ul class="uk-child-width-expand" uk-tab>
                        <li class="uk-active">
                            <router-link to="/login">เข้าสู่ระบบ</router-link>
                        </li>
                        <li>
                            <router-link to="/register">ลงทะเบียน</router-link>
                        </li>
                    </ul>

                    <div class="uk-margin">

                        <div class="uk-inline uk-width-1-1">
                            <span class="uk-form-icon" uk-icon="icon: mail"></span>
                            <input class="uk-input " type="email" placeholder="อีเมล" v-model="email">
                        </div>
                    </div>
                    <div class="uk-margin">
                        <div class="uk-inline uk-width-1-1">
                            <span class="uk-form-icon" uk-icon="icon: lock"></span>
                            <input class="uk-input " type="password" placeholder="รหัสผ่าน" v-model="password">
                        </div>
                    </div>

                        <button class="uk-button bt-rad uk-width-1-1 uk-margin-small-bottom uk-text-truncate" v-on:click="login">
                            เข้าสู่ระบบ
                        </button>
            

                    <p class="uk-text-truncat uk-text-center">หากคุณลืมรหัสผ่าน  <router-link to="/forgetpassword">กดที่นี่</router-link></p>


                    <p class="uk-heading-line uk-text-center"><span>หรือ</span></p>

                    <button class="uk-button bt-facebook uk-width-1-1 uk-margin-small-bottom uk-text-truncate"><span
                            class="uk-margin-small-right" uk-icon="icon: facebook;"></span>เข้าสู่ระบบด้วย
                        FACEBOOK</button>
                    <button class="uk-button bt-google  uk-width-1-1 uk-margin-small-bottom uk-text-truncate"><span
                            class="uk-margin-small-right" uk-icon="icon: google;"></span>เข้าสู่ระบบด้วย
                        GOOGLE
                    </button>

                </div>

            </div>
        </div>
    </div>
</template>

<script src="./Login.js"></script>
