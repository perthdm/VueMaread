<style scoped>
    @import "./Book.css";
</style>

<template>
    <div id="home-page">

        <Logo></Logo>
        <Menu active="book"></Menu>
        <Slidebar></Slidebar>

        <!-- <div class="padding-top-30"> </div> -->

        <div class="sub-topbar">

           
            <div id="serach" class="uk-card search-bottom" hidden>
                <form class="uk-search uk-search-large">
                    <span uk-search-icon></span>
                    <input class="uk-search-input" type="search" placeholder="Search...">
                </form>
            </div>

          
        </div>


        <Content>
            <div class="uk-child-width-1-3 uk-child-width-1-4@s uk-child-width-1-6@m uk-child-width-1-8@l uk-grid-small uk-text-center margin-book"
                uk-grid>

                <div v-for="item in EbookArray">
                    <div v-on:click="viewEbook(item)">
                        <div class="uk-card uk-text-left">
                            <img src="../../assets/imgs/img-book-mu.png"
                                style="background-size: cover;background-position: center;"
                                v-bind:style="{ backgroundImage : 'url(https://ebook.mareads.com/img/upload/imgEbooks/' +item.picturecover +')' }">
                            <div class="title-book uk-text-truncate">{{ item.name }}</div>
                            <div class="subtitle-book uk-text-truncate">{{ item.author.displayName }} </div>
                        </div>
                    </div>


                </div>
            </div>
        </Content>

    </div>
</template>



<script src="./Book.js"></script>