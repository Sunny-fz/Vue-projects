<!-- 自我评价 -->
<template>
<div class="assessment">
  <div class="title">
    <mu-icon value="mood" color="#1d3653" ></mu-icon>
    <span>自我评价</span>
  </div>
  <mu-button icon  class="demo-float-button awardBtn" @click="openAssessment" >
    <mu-icon value="add"></mu-icon>
  </mu-button>
  <mu-dialog width="500" :open="assessmentDialog" title="自我评价" @close="closeAssessment">
      <mu-row gutter>
        <mu-col >
          <mu-text-field help-text="进行自我评价"  multiLine :rows="1" :rowsMax="5" max-length="20" fullWidth v-model="assessmentContent" ></mu-text-field>
        </mu-col>
      </mu-row>
    <mu-button flat @click="closeAssessment" primary label="关闭">关闭</mu-button>
    <mu-button flat  color="blue" label="确定" @click="assessmentData" >确定</mu-button>
  </mu-dialog>

  <div class="assessment-content">
      <div v-if="assessmentEmpty" class="empty">自我评价</div>
      <div v-for="(item,index) in assessments" v-else class="list">
          <mu-row gutter>
            <mu-col span="10">
               <span class="content-font"> • {{item}}</span>
            </mu-col>
            <mu-col span="2">
              <a href="javascript:;" class="deleteBtn" @click="deleteAssessment(index)">
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
      assessmentDialog:false,
      assessmentContent:"",
      assessments:[],
      assessmentEmpty:true
    }
  },
  methods: {
    openAssessment() {
      this.assessmentDialog = true
    },
    closeAssessment () {
      this.assessmentDialog = false
    },
    assessmentData(){
      this.assessments.push(this.assessmentContent);
      this.assessmentContent = "";
      this.assessmentDialog = false;
      this.assessmentEmpty = false;
    },
    deleteAssessment(index){
      this.assessments.splice(index,1);
      if(this.assessments.length===0){
          this.assessmentEmpty = true;
      }
    },
  }
}
</script>
