<template>
    <div class="award">
      <div class="title">
        <mu-icon value="star" color="#1d3653" ></mu-icon>
        <span>荣誉奖项</span>
      </div>
      <mu-button icon class="demo-float-button awardBtn" @click="openAward" >
        <mu-icon value="add" color="#1d3653"></mu-icon>
      </mu-button>
      <mu-dialog width="500" :open="awardDialog" title="荣誉奖项" @close="closeAward">
          <mu-row gutter>
            <mu-col span="6">
              <mu-text-field help-text="所获得的奖项"  multiLine :rows="1" :rowsMax="5" fullWidth v-model="awardContent" ></mu-text-field>
            </mu-col>
          </mu-row>
        <mu-button flat  @click="closeAward" primary label="关闭" >关闭</mu-button>
        <mu-button flat  primary label="确定" @click="awardData" >确定</mu-button>
      </mu-dialog>

      <div class="award-content">
          <div v-if="awardEmpty" class="empty">请添加荣誉奖项</div>
          <div v-for="(item,index) in awards" v-else class="list">
              <mu-row gutter >
                <mu-col>
                   <span class="content-font"> • {{item}}</span>
                </mu-col>
                <mu-col >
                  <a href="javascript:;" class="deleteBtn" @click="deleteAward(index)">
                    <mu-icon value="delete" color="#fff" ></mu-icon>
                  </a>
                </mu-col>
              </mu-row>
          </div>
      </div>
    </div>
</template>
<style></style>
<script>
  import MuIcon from "muse-ui/src/Icon/Icon";
  export default {
    components: {MuIcon},
    data () {
    return {
      awardDialog:false,
      awardContent:"",
      awards:[],
      awardEmpty:true
    }
  },
  methods: {
    openAward () {
      this.awardDialog = true
    },
    closeAward () {
      this.awardDialog = false
    },
    awardData(){
      this.awards.push(this.awardContent);
      this.awardContent = "";
      this.awardDialog = false;
      this.awardEmpty = false;
    },
    deleteAward(index){
      this.awards.splice(index,1);
      if(this.awards.length===0){
          this.awardEmpty = true;
      }
    },
  }
}
</script>
