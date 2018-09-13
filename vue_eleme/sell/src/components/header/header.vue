<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64" height="64" :src="seller.avatar"/>
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div class="support" v-if="seller.supports">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div v-if="seller.supports" class="support-count" @click="showDetail">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper" @click="showDetail">
      <span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="bg">
      <img :src="seller.avatar" width="100%" height="100%"/>
    </div>
    <div class="detail" v-show="detailShow">
      <div class="detail-wrapper clear">
        <div class="detail-main">
          <h1 class="name">{{seller.name}}</h1>
          <div class="star-wrapper">
            <star :size="48" :score="seller.score"></star>
          </div>
          <div class="title">
            <div class="line"></div>
            <div class="text">优惠信息</div>
            <div class="line"></div>
          </div>
          <ul v-if="seller.supports" class="supports">
            <li class="support-item" v-for="(item,index) in seller.supports" :key="index">
              <span class="icon" :class="classMap[seller.supports[index].type]"></span>
              <span class="text">{{seller.supports[index].description}}</span>
            </li>
          </ul>
          <div class="title">
            <div class="line"></div>
            <div class="text">商家公告</div>
            <div class="line"></div>
          </div>
          <div class="bulletin">
            <p class="content">{{seller.bulletin}}</p>
          </div>
        </div>
      </div>
      <div class="detail-close" @click="closeDetail">
        <i class="icon-close"></i>
      </div>
    </div>
  </div>
</template>
<script>
  import star from '../star/star.vue';
  export default{
    name: 'headers',
    components: {
      star
    },
    props: {
      seller: {
        type: Object
      }
    },
    data() {
      return {
        detailShow: false
      };
    },
    methods: {
      showDetail() {
        this.detailShow = true;
      },
      closeDetail() {
        this.detailShow = false;
      }
    },
    created() {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
    }
  }
  ;
</script>

<style lang="less" scoped>
  @import "../../common/less/mixin.less";
  @import "../../common/less/style";
  @import "../../common/less/base";

  .header {
    position: relative;
    overflow: hidden;
    color: #ffffff;
    background-color: rgba(7, 17, 27, 0.5);
    blur: 10px;
    .content-wrapper {
      padding: 24px 12px 18px 24px;
      font-size: 0;
      position: relative;
      .avatar {
        border-radius: 2px;
        display: inline-block;
        vertical-align: top;
      }
      .content {
        margin-left: 16px;
        display: inline-block;
        font-size: 14px;
        .title {
          margin: 2px 0 8px 0;
          .brand {
            display: inline-block;
            width: 30px;
            height: 18px;
            .bg-image('brand');
            background-size: 30px 18px;
            background-repeat: no-repeat;
            vertical-align: top;
          }
          .name {
            font-size: 16px;
            margin-left: 6px;
            font-weight: bold;
            line-height: 18px;
          }

        }
        .description {
          margin: 0 12px 10px 0;
          font-size: 12px;
          font-weight: 200;
          line-height: 12px;

        }
        .support {
          font-size: 0;
          .icon {
            display: inline-block;
            vertical-align: top;
            width: 12px;
            height: 12px;
            margin-right: 4px;
            background-size: 12px 12px;
            background-repeat: no-repeat;
            &.decrease {
              .bg-image('decrease_1');
            }
            &.discount {
              .bg-image('discount_1');
            }
            &.guarantee {
              .bg-image('guarantee_1');
            }
            &.invoice {
              .bg-image('invoice_1');
            }
            &.special {
              .bg-image('special_1');
            }

          }
          .text {
            font-size: 10px;
            line-height: 12px;
            font-weight: 200;
          }

        }
      }
      .support-count {
        position: absolute;
        right: 12px;
        bottom: 14px;
        padding: 0 8px;
        line-height: 24px;
        height: 24px;
        background-color: rgba(0, 0, 0, 0.2);
        text-align: center;
        border-radius: 14px;
        .count {
          font-size: 10px;
          vertical-align: top;
        }
        .icon-keyboard_arrow_right {
          font-size: 10px;
          line-height: 24px;
          margin-left: 2px;
        }
      }

    }
    .bulletin-wrapper {
      position: relative;
      height: 28px;
      line-height: 28px;
      padding: 0 22px 0 12px;
      white-space: nowrap; //实现...效果
      overflow: hidden;
      text-overflow: ellipsis;
      background-color: rgba(7, 17, 27, 0.2);
      .bulletin-title {
        display: inline-block;
        width: 22px;
        height: 12px;
        .bg-image('bulletin');
        background-size: 22px 12px;
        background-repeat: no-repeat;
        margin-top: 8px;

      }
      .bulletin-text {
        font-size: 10px;
        margin: 0 4px;
        vertical-align: top;
      }
      .icon-keyboard_arrow_right {
        position: absolute;
        font-size: 10px;
        right: 12px;
        top: 8px;
      }
    }
    .bg {
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      filter: blur(10px);
    }
    .detail {
      position: fixed;
      width: 100%;
      height: 100%;
      overflow: auto;
      background-color: rgba(7, 17, 27, 0.8);
      z-index: 100;
      top: 0;
      left: 0;
      .detail-wrapper {
        min-height: 100%;
        width: 100%;
        .detail-main {
          margin-top: 64px;
          padding-bottom: 64px;
          .name {
            line-height: 16px;
            text-align: center;
            font-size: 16px;
            font-weight: 700;
          }
          .star-wrapper {
            margin-top: 18px;
            padding: 2px 0;
            text-align: center;
          }
          .title {
            display: flex;
            width: 80%;
            margin: 28px auto 24px auto;
            .line {
              flex: 1;
              position: relative;
              top: -6px;
              border-bottom: 1px solid rgba(255, 255, 255, 0.2);
            }
            .text {
              padding: 0 12px;
              font-weight: 700;
              font-size: 14px;
            }
          }
          .supports {
            width: 80%;
            margin: 0 auto;
            .support-item {
              padding: 0 12px;
              margin-bottom: 12px;
              font-size: 0;
              &:last-child {
                margin-bottom: 0;
              }
              .icon {
                display: inline-block;
                width: 16px;
                height: 16px;
                vertical-align: top;
                margin-right: 6px;
                background-size: 16px 16px;
                background-repeat: no-repeat;
                &.decrease {
                  .bg-image('decrease_2');
                }
                &.discount {
                  .bg-image('discount_2');
                }
                &.guarantee {
                  .bg-image('guarantee_2');
                }
                &.invoice {
                  .bg-image('invoice_2');
                }
                &.special {
                  .bg-image('special_2');
                }
              }
              .text {
                line-height: 16px;
                font-size: 12px;
              }
            }
          }
          .bulletin {
            width: 80%;
            margin: 0 auto;
            .content {
              padding: 0 12px;
              line-height: 24px;
              font-size: 12px;
            }

          }

        }
      }
      .detail-close {
        position: relative;
        width: 32px;
        height: 32px;
        margin: -64px auto 0 auto;
        clear: both;
        font-size: 32px;
        .icon-close {
          color: rgba(255, 255, 255, 0.5);
          font-size: 32px;
        }
      }
    }
  }
</style>
