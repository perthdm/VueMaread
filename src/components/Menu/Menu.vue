<template>
    <div class="Menu">
       <ion-tabs>
                <ion-tab tab="home">Home Content</ion-tab>
                <ion-tab tab="settings">Settings Content</ion-tab>

                <ion-tab-bar slot="bottom">

                    <ion-tab-button tab="/" v-bind:style="{ color: tabs.fiction }" >
                        <i class="fas fa-book-open" style="font-size: 20px;"></i>
                        <ion-label style="font-size: 12px !important;">นิยาย</ion-label>
                        
                    </ion-tab-button>

                    <ion-tab-button tab="book" v-bind:style="{ color: tabs.book }" >
                        <i class="fas fa-book" style="font-size: 20px;"></i>
                        <ion-label style="font-size: 12px !important;">หนังสือ</ion-label>
                    </ion-tab-button>
                    <ion-tab-button tab="history" v-bind:style="{ color: tabs.history }" >
                    <i class="fas fa-wallet" style="font-size: 20px;"></i>
                        <ion-label style="font-size: 12px !important;">ประวัติ</ion-label>
                    </ion-tab-button>

                    <ion-tab-button tab="store" v-bind:style="{ color: tabs.store }" >
                    <i class="fas fa-shopping-cart" style="font-size: 20px;"></i>
                        <ion-label style="font-size: 12px !important;">ร้านค้า</ion-label>
                    </ion-tab-button>

                    <ion-tab-button tab="contect" v-bind:style="{ color: tabs.contect }" >
                    <i class="fas fa-users" style="font-size: 20px;"></i>
                        <ion-label style="font-size: 12px !important;">ติดต่อเรา</ion-label>
                    </ion-tab-button>


                </ion-tab-bar>
            </ion-tabs>
    </div>
</template>
<script src="./Menu.js"></script>

<style scoped>
    @import "./Menu.css";
</style>