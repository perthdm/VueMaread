<style scoped>
    @import "./ChangePassword.css";
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
                        เปลี่ยนรหัสผ่าน
                    </div>
                    <div class="uk-navbar-right" v-on:click="ChangePassword()">
                        <div class="bar-button-right ">บันทึก</div>
                    </div>
                </nav>
            </Topbar>
        </div>

              
              
           
        <Content>

              

            <ion-item>
                <ion-label position="fixed">รหัสผ่านเก่า</ion-label>
                <ion-input  v-bind:value="user.oldPassword" @input="user.oldPassword = $event.target.value" type="password" placeholder="ป้อนรหัสผ่าน" ></ion-input>
            </ion-item>
            <ion-item>
                <ion-label position="fixed">รหัสผ่านใหม่</ion-label>
                <ion-input  v-bind:value="user.newPassword" @input="user.newPassword = $event.target.value" type="password" placeholder="ป้อนรหัสผ่าน"></ion-input>
            </ion-item>
            <ion-item>
                <ion-label position="fixed">ยืนยันรหัสผ่าน</ion-label>
                <ion-input v-bind:value="user.confirmPassword" @input="user.confirmPassword = $event.target.value"  type="password" placeholder="ป้อนรหัสผ่านอีกครั้ง"></ion-input>
            </ion-item>

           
        </Content>

    </div>
</template>



<script src="./ChangePassword.js"></script>