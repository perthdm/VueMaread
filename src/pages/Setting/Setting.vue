<style scoped>
    @import "./Setting.css";
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
                        Setting
                    </div>
                    <div class="uk-navbar-right">

                    </div>
                </nav>
            </Topbar>
        </div>
        <Content>
            <ion-list>
                <ion-list-header>
                    <ion-label>การดาวน์โหลด</ion-label>
                </ion-list-header>
                <ion-item>
                    <ion-label>ดาวน์โหลดอัตโนมัติ
                            <p>ดาวน์โหลดอัตโนมัติเมื่อใช้ wifi</p>
                    </ion-label>
                    <ion-toggle slot="end" mode="ios" value="sausage" color="success"></ion-toggle>
                </ion-item>
                <ion-item lines="full">
                    <ion-label>
                        ลบข้อมูลดาวน์โหลดทั้งหมด
                    </ion-label>
                    <div  slot="end">
                            <font-awesome-icon  icon="trash-restore-alt"></font-awesome-icon>
                    </div>
                </ion-item>

                </ion-list>
       </Content>

    </div>
</template>



<script src="./Setting.js"></script>