<style scoped>
    @import "./DetailBook.css";
</style>
<template>
    <div>
        <div class="read-header">
            <Topbar>
                <nav class="uk-navbar-container background-color-none" uk-navbar="dropbar: true">
                    <div class="uk-navbar-left">
                        <ul class="uk-navbar-nav">
                            <router-link to="/book">
                                <li class="uk-active button-bar"><span class="uk-navbar-toggle paddind-right-remove"
                                        uk-icon="chevron-left"></span></li>
                            </router-link>
                        </ul>
                    </div>
                    <div class="read-title uk-text-truncate">
                         {{ EbookDetail.name }}
                    </div>
                    <div class="uk-navbar-right">
                        <ul class="uk-navbar-nav">
                     
                            <li class="button-bar">
                                <span class="uk-navbar-toggle paddind-left-remove" uk-icon="social" v-on:click="Share()"></span>
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
                        v-bind:style="{ backgroundImage : 'url(https://ebook.mareads.com/img/upload/imgEbooks/' + EbookDetail.picturecover +')' }">
                </div>
                <div class="uk-width-expand uk-width-2-3@s uk-width-3-4@m uk-text-left detail-title-flex">
                    <h3 class="ui header color-red">
                          {{ EbookDetail.name }}
                        <div class="sub header"> {{ EbookDetail.author.displayName }} </div>
                        <div class="star">
                        <i class="fas fa-star star-icon" v-for="item in Rating"></i>
                         <i class="fas fa-star star-icon-none" v-for="item in BlackStarArray"></i> ({{ EbookDetail.reviewer }} xxxxxxxxxxxxxx รีวิว)
                        </div>
                    </h3>
                    <div class="block-ellipsis">
                    {{ EbookDetail.detail }}
                    </div>
                </div>
            </div>
            <!------------------------ Detail ------------------------>

            <ul class="uk-child-width-expand uk-margin-remove-top uk-margin-remove-bottom"
                uk-tab="animation: uk-animation-slide-left-medium, uk-animation-slide-right-medium;connect: .switcher-container">
                <li><a href="#">รายละเอียด</a></li>
                <li><a href="#">ความคิดเห็น</a></li>
            </ul>

            <ul class="uk-switcher switcher-container uk-margin uk-margin-remove">
                <!------------------------ Chapter ------------------------>
                <li>

                    <table class="uk-table uk-table-small uk-table-divider">
                        <tbody>
                            <tr>
                                <th class="color-red w-100">ประเภท</th>
                                <td class="uk-text-right uk-table-expand">{{ (EbookDetail.objType).toUpperCase() }}</td>
                            </tr>
                            <tr>
                                <th class="color-red w-100">หมวดหมู่</th>
                                <td class="uk-text-right uk-text-truncate"> {{ EbookDetail.hashtag }} </td>
                            </tr>
                            <tr>
                                <th class="color-red w-100">จำนวนหน้า</th>
                                <td class="uk-text-right"> {{ EbookDetail.numpage }} หน้า </td>

                            </tr>
                            <tr>
                                <th class="color-red w-100">วันที่อัพเดท</th>
                                <td class="uk-text-right">{{ EbookDetail.updated_at }}</td>
                            </tr>
                        </tbody>
                    </table>

                </li>
                <!------------------------ Chapter ------------------------>

                <!------------------------ Comments ------------------------>
                <li>
                    <div class="ui small comments">
                        <div class="comment">
                            <a class="avatar">
                                <img src="../../assets/imgs/1.jpg">
                            </a>
                            <div class="content">
                                <a class="author">Elliot Fu</a>
                                <div class="metadata">
                                    <span class="date">Yesterday at 12:30AM</span>
                                </div>
                                <div class="text">
                                    <p>This has been very useful for my research. Thanks as well! This has been very
                                        useful
                                        for my research. Thanks as well! This has been very useful for my research.
                                        Thanks
                                        as well!</p>
                                </div>
                                <div class="actions">
                                    <a class="reply">แสดงความเห็น</a>
                                    <a class="save">ดูความเห็น</a>
                                    <a class="hide">ลบ</a>
                                </div>
                            </div>
                            <div class="comments">
                                <div class="comment">
                                    <a class="avatar">
                                        <img src="../../assets/imgs/1.jpg">
                                    </a>
                                    <div class="content">
                                        <a class="author">Jenny Hess</a>
                                        <div class="metadata">
                                            <span class="date">Just now</span>
                                        </div>
                                        <div class="text">
                                            Elliot you are always so right :)
                                        </div>
                                        <div class="actions">
                                            <a class="hide">ลบ</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="comment">
                            <a class="avatar">
                                <img src="../../assets/imgs/1.jpg">
                            </a>
                            <div class="content">
                                <a class="author">Elliot Fu</a>
                                <div class="metadata">
                                    <span class="date">Yesterday at 12:30AM</span>
                                </div>
                                <div class="text">
                                    <p>This has been very useful for my research. Thanks as well! This has been very
                                        useful
                                        for my research. Thanks as well! This has been very useful for my research.
                                        Thanks
                                        as well!
                                    </p>
                                </div>
                                <div class="actions">
                                    <a class="reply">แสดงความเห็น</a>
                                    <a class="save">ดูความเห็น</a>
                                    <a class="hide">ลบ</a>
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
                        <div class="uk-text-center" uk-grid>
                            <div class="uk-width-expand footer-display uk-margin-small-right" v-on:click="ReadEbook()">
                                <button class="fluid ui red button">อ่าน</button>
                            </div>
                            <div class="uk-width-auto uk-padding-remove">
                                <button class="uk-button-red" uk-icon="download" v-on:click="Download()"></button>
                            </div>
                        </div>
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



<script src="./DetailBook.js"></script>