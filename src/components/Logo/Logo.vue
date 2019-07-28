<template>
    <div class="topbar">
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
                <a href="#serach" uk-toggle="target: #serach; animation: uk-animation-fade">
                <div class="uk-navbar-toggle icon-nav"><i class="fas fa-search"></i></div>
                </a>
                <!-- <ion-icon class="uk-navbar-toggle icon-nav" name="search"></ion-icon> -->
            </div>
        </nav>

    </div>
</template>
<script src="./Logo.js"></script>

<style scoped>
    @import "./Logo.css";
</style>