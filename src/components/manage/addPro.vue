<template>
  <div class="main">
    <div class="project-overview">
      <p class="title">一、项目概况</p>
      <div class="item">
        <label for="name">项目名称</label>
        <input type="text" v-model="data.projectOverview.projectName" id="name">
      </div>
      <div class="item">
        <label for="intr">项目介绍</label>
        <input type="text" v-model="data.projectOverview.projectIntroduction" id="intr">
      </div>
      <div class="item">
        <label for="begin">众筹开始时间</label>
        <input type="text" v-model="data.projectOverview.beginTime" id="begin" placeholder="YYYY-MM-DD hh:mm:ss格式">
      </div>
      <div class="item">
        <label for="end">众筹结束时间</label>
        <input type="text" v-model="data.projectOverview.overTime" id="end" placeholder="YYYY-MM-DD hh:mm:ss格式">
      <div class="item">
        <div class="title">项目发行基本信息</div>
        <table class="table-item">
          <tr>
            <td>ICO总量</td>
            <td>代币总量</td>
          </tr>
          <tr>
            <td>
              <input type="text" v-model="data.projectOverview.iocTotal">
            </td>
            <td>
              <input type="text" v-model="data.projectOverview.tokenTotal">
            </td>
          </tr>
          <tr>
            <td>募资上限</td>
            <td>接受币种</td>
          </tr>
          <tr>
            <td>
              <input type="text" v-model="data.projectOverview.prospectusUpperlimit">
            </td>
            <td>
              <input type="text" v-model="data.projectOverview.tokenAccept">
            </td>
          </tr>
          <tr>
            <td>代币类型</td>
            <td>官网</td>
          </tr>
          <tr>
            <td>
              <input type="text" v-model="data.projectOverview.tokenType">
            </td>
            <td>
              <input type="text" v-model="data.projectOverview.officialWebsite">
            </td>
          </tr>
        </table>
      </div>
      <div class="item">
        <label for="desc">项目说明</label>
        <textarea type="text" v-model="data.projectOverview.projectDescription" id="desc"></textarea>
      </div>
    </div>
    </div>
    <div class="market-analysis">
      <p class="title">二、市场分析</p>
      <div class="item">
        <label for="mgaishu">概述</label>
        <textarea type="text" v-model="data.marketAnalysis.summary" id="mgaishu"></textarea>
      </div>
      <div class="item">
        <label for="myoudian">优势</label>
        <textarea type="text" v-model="data.marketAnalysis.advantage" id="myoudian"></textarea>
      </div>
      <div class="item">
        <label for="mxiaojie">小结</label>
        <textarea type="text" v-model="data.marketAnalysis.conclusion" id="mxiaojie"></textarea>
      </div>
      <table class="table-item">
        <tr>
          <th>维度</th>
          <th>说明</th>
          <th>项目总分</th>
          <th>有效得分</th>
        </tr>
        <tr>
          <td>行业发展</td>
          <td>
            <input type="text" v-model="marketItems[0].description">
          </td>
          <td>30分</td>
          <td>
            <input type="text" v-model="marketItems[0].effective_score">分
          </td>
        </tr>
        <tr>
          <td>市场份额</td>
          <td>
            <input type="text" v-model="marketItems[1].description">
          </td>
          <td>30分</td>
          <td>
            <input type="text" v-model="marketItems[1].effective_score">分
          </td>
        </tr>
        <tr>
          <td>区块链创新及代币必要性</td>
          <td>
            <input type="text" v-model="marketItems[2].description">
          </td>
          <td>40分</td>
          <td>
            <input type="text" v-model="marketItems[2].effective_score">分
          </td>
        </tr>
        <tr>
          <td>总计</td>
          <td></td>
          <td>100分</td>
          <td>
            <input type="text" v-model="marketItems[3].effective_score">分
          </td>
        </tr>
      </table>
    </div>
    <div class="team-analysis">
      <p class="title">三、团队分析</p>
      <div class="item">
        <label for="tgaishu">概述</label>
        <textarea type="text" v-model="data.teamAnalysis.summary" id="tgaishu"></textarea>
      </div>
      <div class="item">
        <label for="txiaojie">小结</label>
        <textarea type="text" v-model="data.teamAnalysis.conclusion" id="txiaojie"></textarea>
      </div>
      <table class="table-item">
        <tr>
          <th>维度</th>
          <th>说明</th>
          <th>项目总分</th>
          <th>有效得分</th>
        </tr>
        <tr>
          <td>技术团队区块链项目经验</td>
          <td>
            <input type="text" v-model="teamItems[0].description">
          </td>
          <td>15分</td>
          <td>
            <input type="text" v-model="teamItems[0].effective_score">分
          </td>
        </tr>
        <tr>
          <td>技术团队实力</td>
          <td>
            <input type="text" v-model="teamItems[1].description">
          </td>
          <td>15分</td>
          <td>
            <input type="text" v-model="teamItems[1].effective_score">分
          </td>
        </tr>
        <tr>
          <td>技术团队完整性</td>
          <td>
            <input type="text" v-model="teamItems[2].description">
          </td>
          <td>10分</td>
          <td>
            <input type="text" v-model="teamItems[2].effective_score">分
          </td>
        </tr>
        <tr>
          <td>运营团队经验</td>
          <td>
            <input type="text" v-model="teamItems[3].description">
          </td>
          <td>15分</td>
          <td>
            <input type="text" v-model="teamItems[3].effective_score">分
          </td>
        </tr>
        <tr>
          <td>运营团队实力</td>
          <td>
            <input type="text" v-model="teamItems[4].description">
          </td>
          <td>15分</td>
          <td>
            <input type="text" v-model="teamItems[4].effective_score">分
          </td>
        </tr>
        <tr>
          <td>运营团队完整性</td>
          <td>
            <input type="text" v-model="teamItems[5].description">
          </td>
          <td>10分</td>
          <td>
            <input type="text" v-model="teamItems[5].effective_score">分
          </td>
        </tr>
        <tr>
          <td>投资人</td>
          <td>
            <input type="text" v-model="teamItems[6].description">
          </td>
          <td>20分</td>
          <td>
            <input type="text" v-model="teamItems[6].effective_score">分
          </td>
        </tr>
        <tr>
          <td>总计</td>
          <td></td>
          <td>100分</td>
          <td>
            <input type="text" v-model="marketItems[3].effective_score">分
          </td>
        </tr>
      </table>
    </div>
    <div class="tech-analysis">
      <p class="title">四、技术分析</p>
      <div class="item">
        <label for="egaishu">概述</label>
        <textarea type="text" v-model="data.techAnalysis.summary" id="egaishu"></textarea>
      </div>
      <div class="item">
        <label for="exiaojie">小结</label>
        <textarea type="text" v-model="data.techAnalysis.conclusion" id="exiaojie"></textarea>
      </div>
      <table class="table-item">
        <tr>
          <th>维度</th>
          <th>说明</th>
          <th>项目总分</th>
          <th>有效得分</th>
        </tr>
        <tr>
          <td>技术创新</td>
          <td>
            <input type="text" v-model="techItems[0].description">
          </td>
          <td>20分</td>
          <td>
            <input type="text" v-model="techItems[0].effective_score">分
          </td>
        </tr>
        <tr>
          <td>架构设计</td>
          <td>
            <input type="text" v-model="techItems[1].description">
          </td>
          <td>10分</td>
          <td>
            <input type="text" v-model="techItems[1].effective_score">分
          </td>
        </tr>
        <tr>
          <td>网络</td>
          <td>
            <input type="text" v-model="techItems[2].description">
          </td>
          <td>10分</td>
          <td>
            <input type="text" v-model="techItems[2].effective_score">分
          </td>
        </tr>
        <tr>
          <td>技术难度</td>
          <td>
            <input type="text" v-model="techItems[3].description">
          </td>
          <td>10分</td>
          <td>
            <input type="text" v-model="techItems[3].effective_score">分
          </td>
        </tr>
        <tr>
          <td>专利/开源</td>
          <td>
            <input type="text" v-model="techItems[4].description">
          </td>
          <td>10分</td>
          <td>
            <input type="text" v-model="techItems[4].effective_score">分
          </td>
        </tr>
        <tr>
          <td>应用前景</td>
          <td>
            <input type="text" v-model="techItems[5].description">
          </td>
          <td>20分</td>
          <td>
            <input type="text" v-model="techItems[5].effective_score">分
          </td>
        </tr>
        <tr>
          <td>开发进度</td>
          <td>
            <input type="text" v-model="techItems[6].description">
          </td>
          <td>20分</td>
          <td>
            <input type="text" v-model="techItems[6].effective_score">分
          </td>
        </tr>
        <tr>
          <td>总计</td>
          <td></td>
          <td>100分</td>
          <td>
            <input type="text" v-model="techItems[7].effective_score">分
          </td>
        </tr>
      </table>
    </div>
    <div class="supervise-analysis">
      <p class="title">五、资金监管分析</p>
      <div class="item">
        <label for="sgaishu">概述</label>
        <textarea type="text" v-model="data.superviseAnalysis.summary" id="sgaishu"></textarea>
      </div>
      <table class="table-item">
        <tr>
          <th>维度</th>
          <th>说明</th>
          <th>项目总分</th>
          <th>有效得分</th>
        </tr>
        <tr>
          <td>内部监督</td>
          <td>
            <input type="text" v-model="superviseItems[0].description">
          </td>
          <td>50分</td>
          <td>
            <input type="text" v-model="superviseItems[0].effective_score">分
          </td>
        </tr>
        <tr>
          <td>外部监督</td>
          <td>
            <input type="text" v-model="superviseItems[1].description">
          </td>
          <td>50分</td>
          <td>
            <input type="text" v-model="superviseItems[1].effective_score">分
          </td>
        </tr>
        <tr>
          <td>总计</td>
          <td></td>
          <td>100分</td>
          <td>
            <input type="text" v-model="marketItems[3].effective_score">分
          </td>
        </tr>
      </table>
    </div>
    <div class="profit-analysis">
      <p class="title">六、盈利模式分析</p>
      <div class="item">
        <label for="pgaishu">概述</label>
        <textarea type="text" v-model="data.profitAnalysis.summary" id="pgaishu"></textarea>
      </div>
      <table class="table-item">
        <tr>
          <th>维度</th>
          <th>说明</th>
          <th>项目总分</th>
          <th>有效得分</th>
        </tr>
        <tr>
          <td>盈利模式</td>
          <td>
            <input type="text" v-model="profitItems[0].description">
          </td>
          <td>100分</td>
          <td>
            <input type="text" v-model="profitItems[0].effective_score">分
          </td>
        </tr>
        <tr>
          <td>总计</td>
          <td></td>
          <td>100分</td>
          <td>
            <input type="text" v-model="profitItems[1].effective_score">分
          </td>
        </tr>
      </table>
    </div>
    <div class="submit" @click="submitData">提交数据</div>
  </div>
</template>

<script>
  import api from '../../api/index'

  export default {
    data () {
      return {
        marketItems: [
          {
            effective_score: 0,
            description: ''
          },
          {
            effective_score: 0,
            description: ''
          },
          {
            effective_score: 0,
            description: ''
          },
          {
            effective_score: 0
          }
        ],
        teamItems: [
          {
            effective_score: 0,
            description: ''
          },
          {
            effective_score: 0,
            description: ''
          },
          {
            effective_score: 0,
            description: ''
          },
          {
            effective_score: 0,
            description: ''
          },
          {
            effective_score: 0,
            description: ''
          },
          {
            effective_score: 0,
            description: ''
          },
          {
            effective_score: 0,
            description: ''
          },
          {
            effective_score: 0,
            description: ''
          }
        ],
        techItems: [
          {
            effective_score: 0,
            description: ''
          },
          {
            effective_score: 0,
            description: ''
          },
          {
            effective_score: 0,
            description: ''
          },
          {
            effective_score: 0,
            description: ''
          },
          {
            effective_score: 0,
            description: ''
          },
          {
            effective_score: 0,
            description: ''
          },
          {
            effective_score: 0,
            description: ''
          },
          {
            effective_score: 0,
            description: ''
          }
        ],
        superviseItems: [
          {
            effective_score: 0,
            description: ''
          },
          {
            effective_score: 0,
            description: ''
          },
          {
            effective_score: 0,
            description: ''
          }
        ],
        profitItems: [
          {
            effective_score: 0,
            description: ''
          },
          {
            effective_score: 0,
            description: ''
          }
        ],
        data: {
          projectOverview: {
            beginTime: '',
            id: '',
            iocTotal: '',
            officialWebsite: '',
            overTime: '',
            projectDescription: '',
            projectIntroduction: '',
            projectName: '',
            prospectusUpperlimit: '',
            rating: 0,
            tokenAccept: '',
            tokenTotal: '',
            tokenType: ''
          },
          marketAnalysis: {
            advantage: '',
            conclusion: '',
            id: '',
            industryDevelop: '',
            innovate: '',
            marketShare: '',
            summary: '',
            data: ''
          },
          teamAnalysis: {
            id: '',
            summary: '',
            conclusion: '',
            data: ''
          },
          techAnalysis: {
            id: '',
            summary: '',
            conclusion: '',
            data: ''
          },
          superviseAnalysis: {
            id: '',
            summary: '',
            data: ''
          },
          profitAnalysis: {
            id: '',
            summary: '',
            data: ''
          }
        }
      }
    },
    methods: {
      submitData () {
        let marketArr = []
        let teamArr = []
        let techArr = []
        let superviseArr = []
        let profitArr = []
        for (let i = 0; i < this.marketItems.length - 1; i++) {
          marketArr[i] = this.marketItems[i].effective_score + '&' + this.marketItems[i].description
        }
        for (let i = 0; i < this.teamItems.length - 1; i++) {
          teamArr[i] = this.teamItems[i].effective_score + '&' + this.teamItems[i].description
        }
        for (let i = 0; i < this.techItems.length - 1; i++) {
          techArr[i] = this.techItems[i].effective_score + '&' + this.techItems[i].description
        }
        for (let i = 0; i < this.superviseItems.length - 1; i++) {
          superviseArr[i] = this.superviseItems[i].effective_score + '&' + this.superviseItems[i].description
        }
        for (let i = 0; i < this.profitItems.length - 1; i++) {
          profitArr[i] = this.profitItems[i].effective_score + '&' + this.profitItems[i].description
        }
        this.data.marketAnalysis.data = marketArr.join('|')
        this.data.teamAnalysis.data = teamArr.join('|')
        this.data.techAnalysis.data = techArr.join('|')
        this.data.superviseAnalysis.data = superviseArr.join('|')
        this.data.profitAnalysis.data = profitArr.join('|')
        this.data.projectOverview.rating += (parseFloat(this.marketItems[3].effective_score) * 0.2).toFixed(1)
        this.data.projectOverview.rating += (parseFloat(this.teamItems[3].effective_score) * 0.3).toFixed(1)
        this.data.projectOverview.rating += (parseFloat(this.techItems[3].effective_score) * 0.3).toFixed(1)
        this.data.projectOverview.rating += (parseFloat(this.superviseItems[3].effective_score) * 0.1)
        this.data.projectOverview.rating += (parseFloat(this.profitItems[3].effective_score) * 0.1).toFixed(1)
        api.writeInfo(JSON.stringify(this.data)).then(() => {
          alert('提交成功')
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  input
    width 100px;
    height 30px;
    line-height 30px;
    padding-left 10px;
    border 1px solid #999
    border-radius 3px;
    outline none
  textarea
    width 80%;
    height 200px;
    border 1px solid #999
    border-radius 5px;
    padding-left 10px
    outline none
  .main
    width: 80%
    margin 0 auto
    .submit
      width 100%
      height 40px
      line-height 40px
      background-color #ffa34f
      color #fff
      border-radius 5px
      text-align center
      word-spacing 10px
      margin 50px 0 ;
    div
      .title
        padding 20px 0
        border-bottom 1px solid #aaa;
      .item
        margin-top 20px;
        display flex
        label
          width 100px;
          height 30px
          line-height 30px
        input
          flex: 1
        textarea
          flex: 1
        .title
          width 100px
          border none
        .table-item
          flex 1
      .table-item
        width 600px
        margin: 0 auto
        line-height 40px;
        text-align center
        tr
          display flex
          height 40px
          line-height 1
          td,th
            width 150px
            flex 1
            height 30px
            line-height 30px
            vertical-align middle
</style>
