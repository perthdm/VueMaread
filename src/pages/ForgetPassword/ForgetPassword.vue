<style scoped>
    @import "./ForgetPassword.css";
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
                        
                        <li class="uk-active"><router-link to="/forgetpassword">ลืมรหัสผ่าน</router-link></li>
                    </ul>


                <div class="uk-margin">
                    <div class="uk-inline uk-width-1-1">
                        <span class="uk-form-icon" uk-icon="icon: mail"></span>
                        <input class="uk-input " type="email" placeholder="อีเมล" v-model="email">
                    </div>
                </div>
                <button class="uk-button bt-rad uk-width-1-1 uk-margin-small-bottom" v-on:click="ForgetPassword()">ยืนยัน</button>
                <p class="uk-text-truncat uk-text-center padding-t30">เข้าสู่ระบบ  <router-link to="/login">กดที่นี่</router-link></p>
            </div>


        </div>

    </div>
    </div>
</template>

<script src="./ForgetPassword.js"></script>