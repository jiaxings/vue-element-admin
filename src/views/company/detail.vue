<template>
  <div class="dashboard-editor-container">

    <div class="company-detail-main">

      <div class="company-detail-card">
        <el-collapse v-model="activeNames" @change="handleChange" >
          <el-collapse-item name="1" >
            <template slot="title">
              <div style="margin-left: 20px"><h2>Overview</h2></div>
            </template>
            <el-row :gutter="20" >
              <el-col :span="24">
                <el-card class="box-card2">
                  <div class="component-item" style="min-height:420px;padding-bottom: 20px;">
                    <div>
                      <el-row :gutter="10" style="padding-left:30px;padding-right:30px;border-bottom: 1px solid #d8dce5;padding-bottom: 15px">
                        <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 3}" :xl="{span: 12}" style="align-items:center;">
                          <img style="opacity: 1;" alt="OneSoil" src="https://res-1.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_120,w_120,f_auto,b_white,q_auto:eco/hadf12bfapd6lr2bkiep">
                        </el-col>
                        <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 21}" :xl="{span: 12}" style="height:125px;  display:flex;align-items:center;">
                          <div style="vertical-align: middle;font-family:'Roboto,helvetica neue,sans-serif';">
                            <div style="font-weight:500;font-size:22px;align-self: center;text-align: left;">
                              {{ comp_entity.comp_name }}
                            </div>
                            <div style="font-weight:200;font-size:18px;color:rgba(0,0,0,.5);align-self: center;text-align: left;font-family:'Roboto,helvetica neue,sans-serif';">
                              short description
                            </div>
                          </div>
                        </el-col>
                      </el-row>
                    </div>
                    <el-row :gutter="10" style="padding-top:20px;padding-left:30px;padding-right:30px;border-bottom: 1px solid #d8dce5;">
                      <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 6}" :xl="{span: 12}" style="margin-bottom:10px;padding-left:10px;">
                        <div style="padding-bottom:10px;font-weight:200;font-size:20px;color:rgba(0,0,0,.5);">
                          Foundation Date
                        </div>
                        <div style="padding-bottom:10px;font-weight:200;font-size:20px;color:rgba(0,0,0,.5);">
                          Registered Place
                        </div>
                        <div style="padding-bottom:10px;font-weight:200;font-size:20px;color:rgba(0,0,0,.5);">
                          Legal Representative
                        </div>
                        <div style="padding-bottom:10px;font-weight:200;font-size:20px;color:rgba(0,0,0,.5);">
                          Registered Capital
                        </div>

                      </el-col>
                      <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 6}" :xl="{span: 12}" style="margin-bottom:10px;font-family:'Roboto,helvetica neue,sans-serif';">
                        <div style="padding-bottom:10px;font-weight:400;font-size:20px;">
                          <!--{{ comp_entity.foundation_date | noneFilter }}-->
                          <!--{{ comp_entity.foundation_date }}-->

                        </div>
                        <div style="padding-bottom:10px;font-weight:400;font-size:20px;">
                          <!--{{ comp_entity.registered_place | noneFilter }}-->
                        </div>
                        <div style="padding-bottom:10px;font-weight:400;font-size:20px;">
                          <!--{{ comp_entity.legal_representative | noneFilter }}-->
                        </div>
                        <div style="padding-bottom:10px;font-weight:400;font-size:20px;">
                          <!--{{ comp_entity.registered_capital | noneFilter }}-->
                        </div>

                      </el-col>
                      <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 6}" :xl="{span: 12}" style="margin-bottom:10px;padding-left:10px;">
                        <div style="padding-bottom:10px;font-weight:200;font-size:20px;color:rgba(0,0,0,.5);">
                          Chinese Short Name
                        </div>
                        <div style="padding-bottom:10px;font-weight:200;font-size:20px;color:rgba(0,0,0,.5);">
                          Industry
                        </div>
                        <div style="padding-bottom:10px;font-weight:200;font-size:20px;color:rgba(0,0,0,.5);">
                          Is Listed
                        </div>
                        <div style="padding-bottom:10px;font-weight:200;font-size:20px;color:rgba(0,0,0,.5);">
                          Rating Score
                        </div>
                      </el-col>
                      <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 6}" :xl="{span: 12}" style="margin-bottom:10px;padding-left:10px;font-family:'Roboto,helvetica neue,sans-serif';">
                        <div style="padding-bottom:10px;font-weight:400;font-size:20px;">
                          <!--{{ comp_entity.comp_short_name | noneFilter }}-->
                        </div>
                        <div style="padding-bottom:10px;font-weight:400;font-size:20px;">
                          <!--{{ comp_entity.industry | noneFilter }}-->
                        </div>
                        <div style="padding-bottom:10px;font-weight:400;font-size:20px;">
                          <!--{{ comp_entity.is_listed | noneFilter }}-->
                        </div>
                        <div style="padding-bottom:10px;font-weight:400;font-size:20px;">
                          <!--{{ comp_entity.project_rating_score | noneFilter }}-->
                        </div>
                      </el-col>
                    </el-row>
                    <el-row :gutter="10" style="padding-top:10px;padding-left:30px;padding-right:30px;">
                      <div style="padding-bottom:10px;padding-top:10px;font-weight:400;font-size:16px;font-family:'Roboto Condensed'">
                        {{ comp_entity.description }}
                      </div>
                    </el-row>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </el-collapse-item>

          <el-collapse-item name="2">
            <template slot="title">
              <div style="margin-left: 20px"><h2>Financial Ratio</h2></div>
            </template>
            <el-row :gutter="20" >
              <el-col :span="24">
                <el-card class="box-card2">
                  <div class="component-item" style="height:1100px;">
                    <div style="height:400px;padding-top: 30px">
                      <BarChart/>
                    </div>
                    <div style="height:550px;padding-top: 30px">
                      <pie-chart/>
                    </div>
                    <div style="height:100px;text-align: center;padding-top: 30px">
                      <el-button type="success" style="font-size: 22px;height:80px;margin-top: 20px;" @click="download" >Download Financial Report</el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </el-collapse-item>

          <el-collapse-item name="3">
            <template slot="title">
              <div style="margin-left: 20px"><h2>Valuation Matrix</h2></div>
            </template>
            <el-row :gutter="20" >
              <el-col :span="24">
                <el-card class="box-card2">
                  <div class="component-item" style="height:700px;">
                    <el-row style="height:150px;text-align: center;padding-top: 30px">
                      <panel-group @handleSetLineChartData="handleSetLineChartData"/>
                    </el-row>

                    <el-row style="height:350px;text-align: center;padding-top: 30px">
                      <line-chart :chart-data="lineChartData"/>
                    </el-row>
                    <el-row style="height:100px;text-align: center;padding-top: 30px">
                      <el-button type="success" style="font-size: 22px;height:80px;margin-top: 20px;" @click="download" >Download Valuation Report</el-button>
                    </el-row>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </el-collapse-item>
          <el-collapse-item name="4">
            <template slot="title">
              <div style="margin-left: 20px"><h2>Management Team</h2></div>
            </template>
            <el-row :gutter="20" >
              <el-col :span="24">
                <el-card class="box-card2">
                  <div class="component-item" style="height:320px;">
                    <div >
                      <el-carousel :interval="4000" type="card" height="300px">
                        <el-carousel-item v-for="item in 6" :key="item">
                          <h3 class="medium">{{ item }}</h3>
                        </el-carousel-item>
                      </el-carousel>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </el-collapse-item>
          <el-collapse-item name="5">
            <template slot="title">
              <div style="margin-left: 20px"><h2>Company Network</h2></div>
            </template>
            <el-row :gutter="20" >
              <el-col :span="24">
                <el-card class="box-card2">
                  <!--<div slot="header" class="clearfix">-->
                  <!--<span>Share</span>-->
                  <!--</div>-->
                  <div class="component-item" style="height:500px;">
                    <div id="network" style="width:1050px; height:500px; overflow:hidden;"/>
                    <!--<RelationChart/>-->
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </div>
</template>
<script>
import echarts from 'echarts'
import { fetchCompanyInfo } from '@/api/company'
import BarChart from './components/BarChart'
import CountTo from 'vue-count-to'
import PanelGroup from './components/PanelGroup'
import PieChart from './components/PieChart'
import MixChart from './components/mixChart'
import RelationChart from './components/RelationChart'

import LineChart from './components/LineChart'
import { downloadReport } from '@/api/report'

const lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145]
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130]
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130]
  },
  shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
  }
}
echarts.dataTool = require('echarts/extension-src/dataTool/gexf')
export default {
  name: 'CompanyDetail',
  components: {
    RelationChart,
    BarChart,
    CountTo,
    PanelGroup,
    LineChart,
    PieChart,
    MixChart
  },
  filters: {
    noneFilter(value) {
      if (value.trim() !== '' && value !== 'None') {
        return value
      } else {
        return '--'
      }
    }
  },
  data() {
    return {
      lineChartData: lineChartData.newVisitis,
      activeNames: ['1', '2', '3', '4', '5'],
      myChart: null,
      chartData: [],
      chartLink: [],
      comp_entity: ''
    }
  },
  created() {
    const id = this.$route.params && this.$route.params.id
    console.log(id)
    this.fetchData(id)
  },
  mounted() {
    this.initEchart()
  },
  methods: {
    download() {
      downloadReport({ 'caseID': '650e840' }).then(response => {
        // console.log(response);
        // console.log(response.headers)
        /* 此方法为展示图片 start*/
        // let imgsrc = window.URL.createObjectURL(response.data)
        /* end*/

        /* 此方法为下载文件到本地 start*/
        const type = 'application/octet-stream'
        // let type = 'application/octet-stream;charset=utf8'
        // let type = result.type
        // const buf = Buffer.from(result, 'binary')
        const blob = new Blob([response.data], { type: type })
        const fileName = response.headers.filename || 'valuationreport.pdf'
        if (typeof window.navigator.msSaveBlob !== 'undefined') {
          /*
             * IE workaround for "HTML7007: One or more blob URLs were revoked by closing
             * the blob for which they were created. These URLs will no longer resolve as
             * the data backing the URL has been freed."
             */
          window.navigator.msSaveBlob(blob, fileName)
        } else {
          const URL = window.URL || window.webkitURL
          const objectUrl = URL.createObjectURL(blob)
          console.log(objectUrl)
          if (fileName) {
            var a = document.createElement('a')
            // safari doesn't support this yet
            if (typeof a.download === 'undefined') {
              window.location = objectUrl
            } else {
              a.href = objectUrl
              a.download = fileName
              document.body.appendChild(a)
              a.click()
              a.remove()
              message.success(`${fileName} 已下载`)
            }
          } else {
            window.location = objectUrl
          }
          /* end*/
        }
      }).catch((err) => {
        console.log(err)
        message.error('系统错误,请稍后重试')
      })
    },

    handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type]
    },
    fetchData(id) {
      fetchCompanyInfo(id).then(response => {
        this.comp_entity = response.data
      }).catch(err => {
        console.log(err)
      })
    },
    handleChange(val) {
      console.log(val)
    },
    initEchart() {
      const dom = document.getElementById('network')
      this.myChart = echarts.init(dom)
      this.chartData = this.dataEChart()
      this.chartLink = this.linkEChart()

      const option = {
        tooltip: {
          show: false
        },
        series: [
          {
            edgeLabel: {
              normal: {
                formatter: '{c}',
                show: true
              }
            },
            edgeSymbol: 'circle',
            force: {
              repulsion: 2000
            },
            layout: 'force',
            roam: true,
            itemStyle: {
              normal: {
                color: '#6495ED'
              },
              // 鼠标放上去有阴影效果
              emphasis: {
                shadowColor: '#3721db',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 40
              }
            },
            label: {
              normal: {
                show: true
              }
            },
            // 头像
            // symbol: `image://${imgSrc}`,
            symbolSize: 50,
            type: 'graph',
            links: this.chartLink,
            data: this.chartData,
            draggable: true

          }
        ]
      }
      this.myChart.setOption(option)
      this.myChart.on('click', function(params) {
        console.log(params.data)// 获取点击的头像的数据信息
      })

      // let graph = echarts.dataTool.parse(xml);
      // graph.nodes.forEach(function (node) {
      //   node.itemStyle = null;
      //   node.symbolSize = 10;
      //   node.value = node.symbolSize;
      //   // Use random x, y
      //   node.x = node.y = null;
      //   node.draggable = true;
      // });
    },
    /**
     * 数据集合
     */
    dataEChart() {
      const data = [
        {
          name: '浦发银行',
          id: '1'
        },
        {
          name: '白云机场',
          id: '2'
        },
        {
          name: '东风汽车',
          id: '3'
        },
        {
          name: '中国国贸',
          id: '4'
        },
        {
          name: '首创股份',
          id: '5'
        },
        {
          name: '包钢股份',
          id: '6'
        },
        {
          name: '华能国际',
          id: '7'
        },
        {
          name: '皖通高速',
          id: '8'
        }
      ]
      return data
    },
    /**
     * 关系数据集合
     */
    linkEChart() {
      const dataLink = [
        { value: '上游供应商', source: '1', target: '2' },
        { value: '下游客户', source: '1', target: '3' },
        { value: '担保', source: '2', target: '4' },
        { value: '质押', source: '3', target: '5' },
        { value: '控股', source: '3', target: '6' },
        { value: '股东', source: '4', target: '7' },
        { value: '投资', source: '5', target: '8' }
      ]
      return dataLink
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss">
.el-collapse-item__header{

  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 48px;
  line-height: 48px;
  cursor: pointer;
  /*border-bottom: 2px solid;*/
  border-left: 4px solid rgb(62, 193, 213);
  font-size: 14px;
  font-weight: 500;
  font-family: Roboto Condensed;
  -webkit-transition: border-bottom-color .3s;
  transition: border-bottom-color .3s;
  outline: 0;
  background-color: #fff;
  color: black;
  margin-top: 20px;
}
.el-collapse-item__content{
  background-color: #f0f2f5;
}
.card-panel {
  margin-bottom:15px;
  height: 100px;
  cursor: pointer;
  /*font-size: 12px;*/
  position: relative;
  overflow: hidden;
  color: #666;
  background: #fff;
  box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
  border-color: rgba(0, 0, 0, .05);
  .card-panel-icon-wrapper {
    float: left;
    margin: 14px 0 0 14px;
    padding: 16px;
    transition: all 0.38s ease-out;
    border-radius: 6px;
  }
  .card-panel-icon {
    float: left;
    font-size: 48px;
  }
  .card-panel-description {
    float: right;
    font-weight: bold;
    margin: 26px;
    margin-left: 0px;
    .card-panel-text {
      line-height: 18px;
      color: rgba(0, 0, 0, 0.45);
      font-size: 16px;
      margin-bottom: 12px;
    }
    .card-panel-num {
      font-size: 20px;
    }
  }
}
.company-info-card{
  margin-top:20px;
}
.company-detail-main{
  padding-left:100px;
  padding-right:100px;
  padding-top:50px;
}
.company-detail-card{
  padding-bottom: 40px;
}
.chart-wrapper {
  padding: 16px 16px 0;
  margin-bottom: 32px;
  color: #fff;

}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
<!--<style rel="stylesheet/scss" lang="scss" scoped>-->
<!--@import "~@/styles/mixin.scss";-->
<!--.createPost-container {-->
  <!--position: relative;-->
  <!--.createPost-main-container {-->
    <!--padding: 40px 45px 20px 50px;-->
    <!--.postInfo-container {-->
      <!--position: relative;-->
      <!--@include clearfix;-->
      <!--margin-bottom: 10px;-->
      <!--.postInfo-container-item {-->
        <!--float: left;-->
      <!--}-->
    <!--}-->
  <!--}-->
  <!--.word-counter {-->
    <!--width: 40px;-->
    <!--position: absolute;-->
    <!--right: -10px;-->
    <!--top: 0px;-->
  <!--}-->
<!--}-->
<!--</style>-->
