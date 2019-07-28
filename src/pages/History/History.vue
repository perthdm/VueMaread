<style scoped>
    @import "./History.css";
</style>

<template>
    <div>

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

                <div class="uk-navbar-right">
                    <span class="uk-navbar-toggle icon-nav" uk-icon="icon: file-edit"></span>
                </div>
            </nav>
        </Topbar>

        <Menu active="history"></Menu>
        <Slidebar></Slidebar>

      <div class="sub-topbar">
            <ul class="uk-child-width-expand uk-background-default"
                uk-switcher="animation: uk-animation-slide-left-medium, uk-animation-slide-right-medium;connect: .switcher-container" uk-tab>
                <li><a href="#">นิยาย</a></li>
                <li><a href="#">หนังสือ</a></li>
            </ul>
        </div>

        <Content>
            <ul class="uk-switcher switcher-container margin-sub-topbar">
                <li>
                    <ion-item>
                        <ion-thumbnail slot="start">
                            <img class="img-list" src="../../assets/imgs/1.jpg">
                        </ion-thumbnail>
                        <ion-label>
                            <div class="title-list uk-text-truncate">รักต้องคำสาปแห่งโหลวหลาน</div>
                            <div class="subtitle-list uk-text-truncate"><span class="icon-list"
                                    uk-icon="play-circle"></span> ตอนที่ 11</div>
                            <div class="time-list uk-text-truncate">อ่านเมื่อ 12/05/2562</div>
                        </ion-label>
                    </ion-item>
                </li>
                <li>
                    <ion-item>
                        <ion-checkbox mode="ios" slot="start" color="danger">

                        </ion-checkbox>
                        <ion-thumbnail mode="ios" slot="start">
                            <img class="img-list" src="../../assets/imgs/1.jpg">
                        </ion-thumbnail>
                        <ion-label>
                            <div class="title-list uk-text-truncate">รักต้องคำสาปแห่งโหลวหลาน</div>
                            <div class="time-list uk-text-truncate">อ่านเมื่อ 12/05/2562</div>
                        </ion-label>
                    </ion-item>
                </li>
            </ul>
    </Content>
    </div>
</template>



<script src="./History.js"></script>