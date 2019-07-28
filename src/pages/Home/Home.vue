<style scoped>
    @import "./Home.css";
</style>

<template>
    <div id="home-page">

        <Logo></Logo>
        <Menu active="fiction"></Menu>
        <Slidebar></Slidebar>

        <div class="padding-top-30"> </div>
        <div class="sub-topbar">
            <!-- serach -->
            <div id="serach" class="uk-card search-bottom" hidden>
                <form class="uk-search uk-search-large">
                    <span uk-search-icon></span>
                    <input class="uk-search-input" type="search" placeholder="Search..." v-model="dataSearch"
                        v-on:keyup="search()">
                </form>
            </div>
            <!-- serach -->

            <!-- slider -->
            <div class="slider" uk-grid>
                <div class="uk-width-expand">
                    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider>
                        <ul class="uk-slider-items   uk-child-width-auto">
                            <li v-if="all" class="uk-slider-items-list  items-active uk-text-center uk-text-truncate"
                                v-on:click="selectCategory('all')">
                                ทั้งหมด
                            </li>

                            <li v-if="!all" class="uk-slider-items-list uk-text-center uk-text-truncate"
                                v-on:click="selectCategory('all')">
                                ทั้งหมด
                            </li>

                            <li class="uk-slider-items-list HomeColor uk-text-center uk-text-truncate"
                                v-for="(item, index) in CategoryArray" v-on:click="selectCategory(item.id,index)"
                                v-bind:class="{ 'items-active': ArrayColor[index] }">
                                {{ item.value }}
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="uk-width-auto icon-more">
                    <button class="uk-button uk-button-text" type="button"><span uk-icon="chevron-down"></span></button>
                    <div class="uk-padding-small" uk-dropdown="mode: click;">
                        <ul class="uk-nav uk-dropdown-nav">

                            <div v-if="all" class="items-active">
                                <li v-on:click="selectCategory('all')">ทั้งหมด</li>
                                <li class="uk-nav-divider"></li>
                            </div>

                            <div v-if="!all">
                                <li v-on:click="selectCategory('all')">ทั้งหมด</li>
                                <li class="uk-nav-divider"></li>
                            </div>

                            <div v-for="(item, index) in CategoryArray" v-bind:class="{ 'items-active': ArrayColor[index] }">
                                <li v-on:click="selectCategory(item.id,index)">{{ item.value }}</li>
                                <li class="uk-nav-divider"></li>
                            </div>

                        </ul>
                    </div>
                </div>
                <div class="uk-width-auto icon-more">

                    <!-- <img class="svg-icon" src="../../assets/imgs/tools-and-utensils.svg" uk-svg> -->
                    <button class="uk-button bt-none" type="button">
                        <img class="svg-icon" src="../../assets/imgs/list.svg" uk-svg>
                    </button>
                    <div class="uk-padding-small" uk-dropdown="mode: click;offset: 0">
                       <ul class="uk-nav uk-dropdown-nav">

                            <div class="items-active">
                                <li>เรียงตามตัวอักษร</li>
                                <li class="uk-nav-divider"></li>
                            </div>
                            <div>
                                <li>เรียงตามวันที่อัพเดท</li>
                                <li class="uk-nav-divider"></li>
                            </div>

                        </ul>
                    </div>
                </div>
            </div>
            <!-- slider -->
        </div>

        <Content>
            <div class="uk-child-width-1-3 uk-child-width-1-4@s uk-child-width-1-6@m uk-child-width-1-8@l uk-grid-small uk-text-center margin-book"
                uk-grid>

                <div v-for="item in FictionArray">
                    <div v-on:click="viewFiction(item)">
                        <div class="uk-card uk-text-left">
                            <img src="../../assets/imgs/img-book-mu.png"
                                style="background-size: cover;background-position: center;"
                                v-bind:style="{ backgroundImage : 'url(https://ebook.mareads.com/img/cover/' +item.cover_url +')' }">
                            <div class="title-book uk-text-truncate">{{ item.title }} </div>
                            <div class="subtitle-book uk-text-truncate">{{ item.writer }}</div>
                        </div>
                    </div>
                </div>

            </div>
        </Content>

    </div>
</template>

<script src="./Home.js"></script>