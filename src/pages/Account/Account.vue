<style scoped>
    @import "./Account.css";
</style>
<template>
    <div>
        <div class="read-header">
            <Topbar>
                <nav class="uk-navbar">
                    <div class="uk-navbar-left">
                        <ul class="uk-navbar-nav">
                            <router-link to="/book">
                                <li class="uk-active button-bar"><span class="uk-navbar-toggle paddind-right-remove"
                                        uk-icon="chevron-left"></span></li>
                            </router-link>
                        </ul>
                    </div>
                    <div class="uk-navbar-center">
                        บัญชีผู้ใช้
                    </div>
                    <div class="uk-navbar-right">

                    </div>
                </nav>
            </Topbar>
        </div>


        <Content>


            <router-link to="/changepassword">
                <ion-item detail>
                    <ion-label position="fixed">เปลี่ยนหรัสผ่าน</ion-label>
                </ion-item>
            </router-link>


           


        </Content>

    </div>
</template>



<script src="./Account.js"></script>