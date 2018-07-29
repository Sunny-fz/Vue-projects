
<template>
  <div class="interest">
    <div class="title">
      <span>兴趣爱好</span>
      <a href="javascript:void(0);" class="add addBtn" @click="openInterest" >
        <mu-icon value="add" color="#fff" ></mu-icon>
      </a>
    </div>
    <div>
      <mu-dialog :open="interestDialog" title="兴趣爱好" @close="closeInterest">
        <mu-text-field label="兴趣爱好" labelFloat fullWidth v-model="interest" ></mu-text-field>
        <mu-button flat @click="closeInterest" color="primary" label="取消">取消</mu-button>
        <mu-button flat color="success" label="确定" @click="interestData" >确定</mu-button>
      </mu-dialog>
    </div>

    <div class="interest-item">
      <div v-if="interestEmpty" class="empty">请先添加兴趣爱好</div>
      <div v-for="(item,index) in interests" class="list" v-else>
        <p>
          <span>  • {{item}}</span>
          <a href="javascript:void (0);" class="delete" @click="deleteInterest(index)">
            <mu-icon value="delete" ></mu-icon>
          </a>
        </p>
      </div>
  </div>


  </div>
</template>
<style></style>
<script>
export default {
  data () {
    return {
      interestDialog:false,
      interest:"",
      interests:[],
      interestEmpty:true,
    }
  },
  methods: {
    openInterest() {
      this.interestDialog = true
    },
    closeInterest() {
      this.interestDialog = false
    },
    interestData(){
        this.interests.push(this.interest);
        this.interest="";
        this.interestDialog = false;
        this.interestEmpty = false;
    },
    deleteInterest(index){
      this.interests.splice(index,1);
      if(this.interests===0){
          this.interestEmpty = true;
      }
    }
  }
}
</script>
