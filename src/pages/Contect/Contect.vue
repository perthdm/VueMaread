<style scoped>
    @import "./Contect.css";
</style>

<template>
    <div>
        <Menu active="contect"></Menu>
        <Slidebar></Slidebar>
    
        <Topbar>
            <nav class="uk-navbar">
                <div class="uk-navbar-left">
                    <a href="#offcanvas-slide" uk-toggle>
                        <div class="uk-navbar-toggle icon-nav"><i class="fas fa-bars"></i></div>
                    </a>
                </div>

                <div class="uk-navbar-center">
                    <img class="logo" src="../../assets/imgs/logoMareads.svg">
                </div>

                <!-- <div class="uk-navbar-right">
                    <span class="uk-navbar-toggle icon-nav" uk-icon="icon: file-edit"></span>
                </div> -->

                  <div class="uk-navbar-right">
                    <div class="bar-button-right uk-navbar-toggle icon-nav" v-on:click="sendReport()" >ส่ง</div>
                </div>
            </nav>
        </Topbar>


        <Content>
            <div class="ToppicBar">
                ติดต่อสอบถาม
                <p>คุณนักอ่านมีข้อติดขัดหรือสงสัย สอบถามที่นี่</p>
            </div>
            <div class="margin-top-30">
                <ion-item class="item-interactive">
                    <ion-label position="fixed">เลือกหัวข้อ</ion-label>
                    <select class="uk-select select-none" v-model="topic">
                        <option disabled selected>ระบุปัญหา</option>
                        <option>ปัญหาหนังสือหาย</option>
                        <option>ปัญหาเปิดอ่านหนังสือไม่ได้</option>
                        <option>อื่นๆ</option>
                    </select>
                </ion-item>
                <ion-item>
                    <ion-label position="fixed">อีเมล</ion-label>
                    <ion-input :value="email" @input="email = $event.target.value"></ion-input>
                </ion-item>


                <ion-item>
                    <ion-label position="fixed">เบอร์โทรศัพท์</ion-label>
                    <ion-input :value="phone" @input="phone = $event.target.value"></ion-input>
                </ion-item>

                <ion-item>
                    <ion-label position="fixed">รายละเอียด</ion-label>
                    <ion-textarea rows="8" placeholder="กรุณากรอกรายละเอียด" :value="detail"
                        @input="detail = $event.target.value">
                    </ion-textarea>
                </ion-item>
            </div>
        </Content>
    </div>
</template>

<script src="./Contect.js"></script>