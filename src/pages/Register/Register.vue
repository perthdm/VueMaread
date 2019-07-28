<style scoped>
    @import "./Register.css";
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
                        <li><router-link to="/login">เข้าสู่ระบบ</router-link></li>
                        <li class="uk-active"><router-link to="/register">ลงทะเบียน</router-link></li>
                    </ul>


                <div class="uk-margin">
                    <div class="uk-inline uk-width-1-1">
                        <span class="uk-form-icon" uk-icon="icon: mail"></span>
                        <input class="uk-input " type="email" placeholder="อีเมล">
                    </div>
                </div>
                <div class="uk-margin">
                    <div class="uk-inline uk-width-1-1">

                        <span class="uk-form-icon" uk-icon="icon: lock"></span>
                        <input class="uk-input " type="password" placeholder="รหัสผ่าน">
                    </div>
                </div>
                <div class="uk-margin">
                    <div class="uk-inline uk-width-1-1">
                        <span class="uk-form-icon" uk-icon="icon: lock"></span>
                        <input class="uk-input " type="password" placeholder="ยืนยันรหัสผ่าน">
                    </div>
                </div>
                <div class="uk-margin">
                    <div class="uk-inline uk-width-1-1">
                        <span class="uk-form-icon" uk-icon="icon: user"></span>
                        <input class="uk-input " type="text" placeholder="ชื่อ">
                    </div>
                </div>
                <div class="uk-margin">
                    <div class="uk-inline uk-width-1-1">
                        <span class="uk-form-icon" uk-icon="icon: user"></span>
                        <input class="uk-input " type="text" placeholder="นามสกุล">
                    </div>
                </div>
                <div class="uk-margin">
                    <div class="uk-inline uk-width-1-1">
                        <span class="uk-form-icon" uk-icon="icon: pencil"></span>
                        <input class="uk-input " type="text" placeholder="นามปากกา">
                    </div>
                </div>
                <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                    <div class="uk-inline uk-width-1-1">
                        <label><input class="uk-checkbox" type="checkbox"> ยอมรับ เงื่อนไขและข้อกำหนด</label>
                    </div>
                </div>
                <button class="uk-button bt-rad uk-width-1-1 uk-margin-small-bottom">สมัครสมาชิค</button>
            </div>


        </div>

    </div>
    </div>
</template>

<script src="./Register.js"></script>