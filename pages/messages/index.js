const LISTS = {
  conversation: [
    {
      id: 'm1',
      status: '',
      type: '项目群聊 · XR 课程共创',
      time: '10:21',
      title: '导师：本周交付重点回顾',
      content: '请关注交互稿评审意见，第 2 组需补充安全提示。',
      actions: ['查看讨论', '标记已读']
    },
    {
      id: 'm2',
      status: '',
      type: '私信 · HR 王老师',
      time: '昨天',
      title: '面试安排确认',
      content: '请于 2 月 20 日前填写候选人日程，系统会自动推送会议链接。',
      actions: ['填写日程']
    }
  ],
  system: [
    {
      id: 'm3',
      status: 'alert',
      type: '风控提醒',
      time: '09:05',
      title: '物流看板项目进度偏离 2 天',
      content: '请尽快与团队沟通，必要时可发起范围调整或申请仲裁建议。',
      actions: ['查看进度', '发起调整']
    },
    {
      id: 'm4',
      status: '',
      type: '认证通知',
      time: '昨日',
      title: '组织身份复核通过',
      content: '已完成工商核验，平台信用等级提升为 A，发布项目服务费降至 7%。',
      actions: ['查看详情']
    }
  ],
  collaboration: [
    {
      id: 'm5',
      status: '',
      type: '里程碑提醒',
      time: '08:30',
      title: 'AI 产品运营实验提交验收',
      content: '请在 24 小时内完成审核，超时系统将自动通过并进入结算流程。',
      actions: ['去验收']
    },
    {
      id: 'm6',
      status: 'risk',
      type: '争议处理中',
      time: '周三',
      title: '公益传播矩阵提交被打回',
      content: '团队已补充内容，请 12 小时内处理以免触发仲裁。',
      actions: ['查看补充', '联系团队']
    }
  ]
};

const DIGEST = [
  {
    title: '里程碑',
    content: '2 个待审批，1 个需要补充资料'
  },
  {
    title: '风险提示',
    content: '物流看板项目进度异常，建议发起协作同步'
  },
  {
    title: '候选人',
    content: '新增 3 位高匹配度人选，等待面试安排'
  }
];

Page({
  data: {
    tabs: [
      { key: 'conversation', label: '对话' },
      { key: 'system', label: '系统通知' },
      { key: 'collaboration', label: '协作提醒' }
    ],
    activeTab: 'conversation',
    list: [],
    smartDigest: DIGEST
  },

  onLoad() {
    this.updateList();
  },

  onTabChange(event) {
    const key = event.currentTarget.dataset.key;
    if (!key || key === this.data.activeTab) return;
    this.setData({ activeTab: key }, () => {
      this.updateList();
    });
  },

  updateList() {
    this.setData({ list: LISTS[this.data.activeTab] || [] });
  }
});
