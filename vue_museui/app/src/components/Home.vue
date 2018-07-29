<template>
  <div class="demo-grid">
    <mu-row gutter>
      <mu-col class="resume-left" span="4">
          <!-- 头像 -->
          <header-img></header-img>
          <!-- 个人基本信息 -->
          <div class="baseInfo">
            <mu-container>
              <mu-text-field placeholder="输入年龄"  v-model="age"  icon="face" fullWidth :underlineShow="false" ></mu-text-field>
              <mu-text-field placeholder="输入住址" v-model="adress" type="text" icon="place" fullWidth :underlineShow="false"></mu-text-field>
              <mu-text-field placeholder="输入电话号码" v-model="phone" icon="phone" fullWidth :underlineShow="false"></mu-text-field>
              <mu-text-field placeholder="输入邮箱" v-model="email" icon="mail" suffix=".com" fullWidth :underlineShow="false"></mu-text-field>
              </mu-container>
          </div>
          <!-- 技能 -->
          <skills></skills>
          <!-- 兴趣爱好 -->
          <interest></interest>
      </mu-col>

      <mu-col class="resume-right" span="8">
        <mu-button icon class="demo-float-button createPic" @click="createImg" >
          <mu-icon value="camera"></mu-icon>
        </mu-button>
          <div>
              <mu-text-field placeholder="请输入姓名"  :underlineShow="false" class="nameInput" v-model="name"></mu-text-field>
              <div class="ambition">
                <mu-text-field placeholder="请输入求职志向" :underlineShow="false" v-model="ambition" ></mu-text-field>
              </div>
          </div>
          <!-- 教育背景 -->
          <education></education>
          <!-- 工作经验 -->
          <work></work>
          <!-- 奖项荣誉 -->
          <award></award>
          <!-- 自我评价 -->
          <assessment></assessment>

          <!-- 简历预览 -->
          <div v-if="readResume">
            <div class="shadow"></div>
            <div class="resume">
                <mu-card>
                    <mu-card-media title="恭喜你，简历成功生成" subTitle="">
                      <img :src="resumeImg" />
                    </mu-card-media>
                    <mu-card-actions>
                      <a :href="url" target="_blank" download class="generatePic">下载简历</a>
                      <mu-button flat label="关闭预览" @click="closeResume" >关闭预览</mu-button>
                    </mu-card-actions>
                  </mu-card>
            </div>
          </div>

      </mu-col>
    </mu-row>
  </div>
</template>
<script>
import HeaderImg from './HeaderImg';
import Skills from './Skills';
import Interest from './Interest';
import Education from './Education';
import Work from './Work';
import Award from './Award';
import Assessment from './Assessment';
import Html2canvas from '../../static/js/html2canvas';
import MuIcon from "muse-ui/src/Icon/Icon";

export default{
  data(){
      return{
        age:"",
        adress:"",
        phone:"",
        email:"",
        name:"",
        ambition:"",
        url:"",
        resumeImg:"../../static/img/headerImg.jpg",
        readResume:false
      }
  },
  methods:{
    createImg(){
        console.log("生成图片中");
      const height = document.getElementById("app").offsetHeight;
      const width = document.getElementById("app").offsetWidth;
      const canvas = document.querySelector("canvas");
      const ctx = canvas.getContext("2d");
      const _this = this;
        // canvas.width = width;
        // canvas.height = height;
        // Html2canvas(document.querySelector("#app"), {canvas: canvas}).then(function(canvas) {
        //     // console.log('简历已经生成');
        //     var img = canvas.toDataURL();
        //     console.log(img);
        // });
        Html2canvas(document.querySelector("#app"), {
            onrendered: function(canvas){
                // document.body.appendChild(canvas);
              const img = canvas.toDataURL();
                // console.log(img); //在console中会输出图片的路径，然后复制在浏览器一粘贴，就可以看到。
                _this.url = img;
                _this.resumeImg = img;
                _this.readResume = true;
            },
        });
    },
    closeResume(){
      this.readResume = false;
    },
  },
  components:{
    MuIcon,
    Skills,
    Interest,
    Education,
    Work,
    Award,
    Assessment,
    HeaderImg
  }
}
</script>
