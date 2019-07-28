<style scoped>
    @import "./DetailFiction.css";
</style>
<template>
    <div>
        <div class="read-header">
            <Topbar>
                <nav class="uk-navbar-container background-color-none" uk-navbar="dropbar: true">
                    <div class="uk-navbar-left">
                        <ul class="uk-navbar-nav">
                            <router-link to="/">
                                <li class="uk-active button-bar"><span class="uk-navbar-toggle paddind-right-remove"
                                        uk-icon="chevron-left"></span></li>
                            </router-link>
                        </ul>
                    </div>
                    <div class="read-title uk-text-truncate">
                        {{ FictionDetail.title }}
                    </div>
                    <div class="uk-navbar-right">
                        <ul class="uk-navbar-nav">
                           
                            <li class="button-bar">
                                <span class="uk-navbar-toggle paddind-left-remove" uk-icon="social"></span>
                            </li>

                        </ul>

                    </div>
                </nav>
            </Topbar>
        </div>



        <div class="detail-content">
            <!------------------------ Detail ------------------------>
            <div class="uk-text-center detail-title uk-padding-small bg-detail" uk-grid>
                <div class="uk-width-auto uk-text-center">
           
                    <img src="../../assets/imgs/img-book-mu.png" class="ui image detail-img"
                        style="background-size: cover ; background-position: center;"
                        v-bind:style="{ backgroundImage : 'url(https://ebook.mareads.com/img/cover/' + FictionDetail.cover_url +')' }">
                </div>
                <div class="uk-width-expand uk-width-2-3@s uk-width-3-4@m uk-text-left detail-title-flex">
                    <h3 class="ui header color-red">
                        {{ FictionDetail.title }}
                        <div class="sub header">{{ FictionDetail.writer }}</div>
                        <div class="star">
                        <i class="fas fa-star star-icon" v-for="item in Rating"></i>
                        <i class="fas fa-star star-icon-none" v-for="item in BlackStarArray"></i> ({{ FictionDetail.num_of_review }} รีวิว) 
                        </div>
                    </h3>
                    <div class="block-ellipsis">
                       {{ FictionDetail.excerpt }}
                    </div>
                </div>
            </div>
            <!------------------------ Detail ------------------------>

            <ul class="uk-child-width-expand uk-margin-remove-top uk-margin-remove-bottom"
                uk-tab="animation: uk-animation-slide-left-medium, uk-animation-slide-right-medium;connect: .switcher-container">
                <li><a href="#">ตอน</a></li>
                <li><a href="#">ความคิดเห็น</a></li>
            </ul>

            <ul class="uk-switcher switcher-container uk-margin uk-margin-remove">
                <!------------------------ Chapter ------------------------>
                <li>
                    <table class="uk-table uk-table-small uk-table-hover uk-table-divider">
                        <tbody>
                            <tr v-for="(item, index) in FictionChapter" v-on:click="readFiction(item.id)">
                                <td class="width-35 paddind-right-remove uk-text-middle">
                                    <img src="../../assets/icon/book.svg">
                                </td>
                                <td class="chapter-title-list uk-text-truncate">
                                    <!-- ตอนที่ {{ index+1 }}  -->
                                    {{ item.title }}
                                    <div class="chapter-subtitle-list">อัพเดท {{ item.created_at.substring(0,10) }}</div>
                                </td>
                                 <td class="uk-table-shrink uk-text-middle">
                                     <!-- Boormark -->
                                    <button type="button" class="bt-bookmark"><i class="fas fa-bookmark"></i></button>

                                    <!-- No Bookmark -->
                                     <!-- <button type="button" class="bt-bookmark"><i class="far fa-bookmark"></i></button> -->

                                </td>
                            </tr>
                        </tbody>
                    </table>
                </li>
                <!------------------------ Chapter ------------------------>

                <!------------------------ Comments ------------------------>
                <li>

                    <div class="ui small comments">
                     <div class="comment" v-for="item in FictionReview">
                            <a class="avatar">
                                <img v-bind:src="'http://ebook.mareads.com/api/user/get/image/'+ item.user.photoURL">
                            </a>
                            <div class="content">
                                <a class="author">{{ item.user.displayName }}</a>
                                <div class="metadata">
                                    <span class="date">{{ item.created_at }}</span>
                                </div>
                                <div class="text">
                                    <p> {{ item.message }}
                                    </p>
                                </div>
                                <div class="actions">
                                    <!-- <a class="reply">แสดงความเห็น</a>
                                    <a class="save">ดูความเห็น</a>
                                    <a class="hide">ลบ</a> -->
                                </div>
                            </div>
                        </div>
                    </div>

                </li>
                <!------------------------ Comments ------------------------>
            </ul>
        </div>



        <div class="read-footer footer-display">
            <div>
                <ul class="uk-switcher switcher-container uk-margin uk-margin-remove">
                    <li>
                         <button class="fluid ui red button" v-on:click="StartReadFiction()">เริ่มอ่าน</button>
                    </li>
                    <li>
                        <div class="ui fluid action input">
                            <input type="text" placeholder="ความคิดเห็น">
                            <div class="ui red button">ส่ง</div>
                        </div>
                    </li>

                </ul>

            </div>
        </div>



    </div>
</template>



<script src="./DetailFiction.js"></script>