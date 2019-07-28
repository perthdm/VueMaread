<template>
    <div>

        <!-- slide -->

        <div class="slide" id="offcanvas-slide" uk-offcanvas="overlay: true">
            <div class="uk-offcanvas-bar">
                <img class="logo" src="../../assets/imgs/logoMareads.svg">
                <!------------------------ PROFILE ------------------------>
                <div class="uk-text-center profile" uk-grid>
                    <div class="uk-width-auto uk-text-center">
                        <img class="slide-img-profile"
                            v-bind:src="'http://ebook.mareads.com/api/user/get/image/'+photoURL "
                            style="border-radius:50% ; border:0.5vw solid white">
                    </div>
                    <div class="uk-width-expand uk-width-2-3@s uk-width-3-4@m uk-text-left detail-title-flex">
                        <h4 class="profile-title uk-margin-remove uk-padding-remove">{{ displayname }} </h4>
                        <div class="profile-email uk-text-truncate">{{ email }}</div>
                    </div>
                </div>
                <!------------------------ PROFILE ------------------------>



                <ul class="uk-nav-default uk-nav-parent-icon" uk-nav>
                    <li class="uk-nav-header">ผู้ใช้งาน</li>

                    <li v-on:click="profilePage()"><span class="uk-margin-small-right" uk-icon="icon: user"></span>
                        โปรไฟล์</li>
                    <li v-on:click="changePasswordPage()"><span class="uk-margin-small-right"
                            uk-icon="icon: thumbnails"></span> เปลี่ยนรหัสผ่าน</li>
                    <li class="uk-nav-header">การตั้งค่า</li>
                    <li v-on:click="settingPage()"><span class="uk-margin-small-right" uk-icon="icon: settings"></span>
                        ตั้งค่า</li>
                    <li class="uk-nav-header">เงื่อนไขและข้อตกลง</li>
                    <li v-on:click="provisionPage()">
                        <span class="uk-margin-small-right" uk-icon="icon: list"></span> เงื่อนไขและข้อตกลงของ Mareads
                    </li>
                    <li v-on:click="contectPage()"><span class="uk-margin-small-right" uk-icon="icon: receiver"></span>
                        ติดต่อสอบถาม</li>


                    <li class="uk-nav-divider"></li>
                    <div v-on:click="logout()">
                        <li><span class="uk-margin-small-right" uk-icon="icon: sign-out"></span> ออกจากระบบ</li>
                    </div>
                </ul>
            </div>
        </div>
        <!-- slide -->


    </div>
</template>
<script src="./Slidebar.js"></script>

<style scoped>
    @import "./Slidebar.css";
</style>