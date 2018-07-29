<template>
<div class="work">
  <div class="title">
    <mu-icon value="work" color="#1d3653" ></mu-icon>
    <span>工作经验</span>
  </div>
  <mu-button icon  class="demo-float-button educationBtn" @click="openWork" >
    <mu-icon value="add" color="#1d3653" ></mu-icon>
  </mu-button>

  <el-dialog  :visible="workDialog" title="工作经验" @close="closeWork">
    <mu-row gutter>
      <mu-col span="6">
        <div >
          <el-date-picker
            value-format="yyyy-MM-dd"
            v-model="work.startTime"
            type="date"
            placeholder="开始时间">
          </el-date-picker>
        </div>
      </mu-col>

      <mu-col span="6">
        <el-date-picker
          value-format="yyyy-MM-dd"
          v-model="work.endTime"
          type="date"
          placeholder="结束时间">
        </el-date-picker>
      </mu-col>
      <mu-col span="6">
        <mu-text-field help-text="工作单位" fullWidth v-model="work.department" ></mu-text-field>
      </mu-col>
      <mu-col span="6">
        <mu-text-field help-text="职位" fullWidth v-model="work.position" ></mu-text-field>
      </mu-col>
    </mu-row>
    <mu-row gutter>
      <mu-col >
        <mu-text-field help-text="输入工作经验实例"  multiLine :rows="1" :rowsMax="5" fullWidth v-model="work.content" ></mu-text-field>
      </mu-col>
    </mu-row>
    <div slot="footer" class="dialog-footer">
      <el-button  @click="closeWork" primary label="关闭">关闭</el-button>
      <el-button  type="primary"   label="确定" @click="workData" >确定</el-button>
    </div>
  </el-dialog>

  <div class="work-content">
      <div v-if="workEmpty" class="empty">请添加工作经验情况</div>
      <div v-for="(item,index) in works" v-else class="list">
          <mu-row gutter>
            <mu-col span="4">
                <span class="title-font">{{item.startTime}}</span>
                <span class="title-font">--</span>
                <span class="title-font">{{item.endTime}}</span>
              </mu-col>
              <mu-col span="3">
                <span class="title-font">{{item.department}}</span>
              </mu-col>
              <mu-col span="3">
                <span class="title-font">{{item.position}}</span>
              </mu-col>
              <mu-col span="2">
                <a href="javascript:;" class="deleteBtn" @click="deleteWork(index)">
                    <mu-icon value="delete" color="#fff" ></mu-icon>
                </a>
              </mu-col>
            </mu-row>
            <mu-row gutter>
            <mu-col span="12">
              <span class="content-font">{{item.content}}</span>
            </mu-col>
        </mu-row>
      </div>
  </div>
</div>
</template>
<style></style>
<script>
  export default{
    data () {
      return {
        workDialog:false,
        workEmpty:true,
        work:{
          startTime:"",
          endTime:"",
          department:"",
          position:"",
          content:"",
        },
        works:[],
      }
    },
    methods: {
        openWork () {
          this.workDialog = true
        },
        closeWork () {
          this.workDialog = false
        },
        workData(){
          this.works.push(this.work);
          this.work = {
            startTime:"",
            endTime:"",
            department:"",
            position:"",
            content:"",
          };
          this.workDialog = false;
          this.workEmpty = false;
        },
        deleteWork(index){
          this.works.splice(index,1);
          if(this.works.length==0){
              this.workEmpty = true;
          }
        },
    },
  }
</script>
