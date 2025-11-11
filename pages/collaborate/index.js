const DATA = {
  joined: {
    summary: [
      { label: '进行中', value: '3', hint: '含 1 个托管项目' },
      { label: '待验收', value: '1', hint: '里程碑待评审' },
      { label: '异常提醒', value: '0', hint: '全部按计划推进' }
    ],
    columns: [
      {
        status: 'processing',
        title: '进行中',
        items: [
          {
            id: 'c-1',
            name: 'XR 沉浸式课程共创',
            nextMilestone: '场景交互稿',
            countdown: '5 天',
            progress: 45,
            todos: 3,
            files: 6,
            messages: 12,
            risk: ''
          },
          {
            id: 'c-2',
            name: '公益传播矩阵',
            nextMilestone: '内容排期确认',
            countdown: '2 天',
            progress: 60,
            todos: 2,
            files: 4,
            messages: 5,
            risk: 'alert'
          }
        ]
      },
      {
        status: 'review',
        title: '待验收',
        items: [
          {
            id: 'c-3',
            name: 'AI 产品运营实验',
            nextMilestone: '验收评审会',
            countdown: '1 天',
            progress: 90,
            todos: 1,
            files: 8,
            messages: 9,
            risk: ''
          }
        ]
      },
      {
        status: 'done',
        title: '已完成',
        items: []
      }
    ],
    workspace: [
      {
        title: 'XR 沉浸式课程共创',
        tag: '托管中',
        milestones: [
          { name: '需求澄清', status: 'done', statusLabel: '已通过', deadline: '02-15' },
          { name: '交互稿提交', status: 'pending', statusLabel: '提交中', deadline: '02-28' },
          { name: '终验与结算', status: 'pending', statusLabel: '待开始', deadline: '03-12' }
        ]
      }
    ],
    talent: []
  },
  published: {
    summary: [
      { label: '在管项目', value: '2', hint: '1 个等待阶段结算' },
      { label: '候选人', value: '12', hint: '3 人待面试安排' },
      { label: '风险提醒', value: '1', hint: '物流看板项目进度异常' }
    ],
    columns: [
      {
        status: 'processing',
        title: '进行中',
        items: [
          {
            id: 'p-1',
            name: '新能源工厂数据采集',
            nextMilestone: '数据校验',
            countdown: '4 天',
            progress: 55,
            todos: 4,
            files: 9,
            messages: 14,
            risk: 'critical'
          }
        ]
      },
      {
        status: 'approval',
        title: '待付款',
        items: [
          {
            id: 'p-2',
            name: '企业知识库建设',
            nextMilestone: '阶段结算',
            countdown: '今天',
            progress: 100,
            todos: 0,
            files: 11,
            messages: 7,
            risk: ''
          }
        ]
      },
      {
        status: 'done',
        title: '已完成',
        items: []
      }
    ],
    workspace: [
      {
        title: '新能源工厂数据采集',
        tag: '风险提醒',
        milestones: [
          { name: '方案评审', status: 'done', statusLabel: '已完成', deadline: '02-01' },
          { name: '传感部署', status: 'alert', statusLabel: '延迟 2 天', deadline: '02-20' },
          { name: '数据校验', status: 'pending', statusLabel: '进行中', deadline: '03-05' }
        ]
      }
    ],
    talent: [
      {
        stage: '待面试',
        count: 4,
        candidates: [
          { name: '王欣然', score: 'AI 匹配 92', skill: '数据建模·城市能源' },
          { name: '陈易', score: 'AI 匹配 88', skill: '工业传感·数据集成' }
        ]
      },
      {
        stage: '已发 Offer',
        count: 2,
        candidates: [
          { name: '林知行', score: 'AI 匹配 95', skill: '低代码·交付管理' }
        ]
      }
    ]
  }
};

Page({
  data: {
    tabs: [
      { key: 'joined', label: '我参与' },
      { key: 'published', label: '我发布' }
    ],
    activeTab: 'joined',
    summary: [],
    columns: [],
    workspace: [],
    talentPipeline: []
  },

  onLoad() {
    this.updateView();
  },

  onTabChange(event) {
    const key = event.currentTarget.dataset.key;
    if (!key || key === this.data.activeTab) return;
    this.setData({ activeTab: key }, () => {
      this.updateView();
    });
  },

  updateView() {
    const current = DATA[this.data.activeTab];
    if (!current) return;
    this.setData({
      summary: current.summary,
      columns: current.columns,
      workspace: current.workspace,
      talentPipeline: current.talent
    });
  }
});
