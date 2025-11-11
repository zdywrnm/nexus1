const RISK_MAP = {
  low: null,
  medium: {
    level: '风险提醒',
    message: '该项目存在进度偏差，平台已启动风控跟进。',
    type: 'warning'
  },
  high: {
    level: '高风险预警',
    message: '该需求触发多项风险规则，请先查看认证详情。',
    type: 'danger'
  }
};

function buildDetail(item = {}) {
  const type = item.type || 'project';
  const typeLabelMap = {
    project: '项目',
    job: '岗位',
    forum: '论坛帖子',
    result: '成果展示'
  };

  const data = {
    item,
    type,
    typeLabel: typeLabelMap[type] || '项目',
    infoTags: [],
    stats: [],
    milestones: [],
    showMilestones: true,
    deliverables: [],
    showDeliverables: true,
    acceptance: [],
    showAcceptance: true,
    safeguards: item.safeguards || [],
    showSafeguards: !!(item.safeguards && item.safeguards.length),
    publisher: {
      name: item.publisher || item.company || '示例发布者',
      credit: item.credit || 'A',
      certification: item.certified ? '工商/信用已核验' : '认证信息待完善',
      contact: item.certified ? '联系方式已核实' : '联系方式待核验',
      risk: item.riskLevel === 'medium' ? '存在进度提醒，建议密切跟进' : item.riskLevel === 'high' ? '需重点核验后再合作' : '暂无风险记录'
    },
    history: [
      {
        title: 'AI 产品运营实验',
        content: '对方评价：沟通高效，按时交付，推荐再次合作。',
        time: '2023-12'
      },
      {
        title: '公益传播矩阵',
        content: '对方评价：方案落地性强，平台已授予公益贡献徽章。',
        time: '2023-09'
      }
    ],
    contentSummary: item.overview || item.summary || item.content || '',
    forumContent: item.content || '',
    resultSummary: item.summary || '',
    primaryCta: '报名项目',
    secondaryCta: '站内沟通',
    riskBanner: RISK_MAP[item.riskLevel] || null
  };

  if (type === 'project') {
    data.infoTags = [item.category, `${item.milestones || 0} 个里程碑`, item.difficulty, item.timeline].filter(Boolean);
    if (item.match) data.infoTags.push(`AI 匹配 ${item.match}%`);
    data.stats = [
      { label: '预算', value: `¥${item.budget}` },
      { label: '周期', value: item.timeline },
      { label: '报名情况', value: `${item.applicants || 0} 人报名 / 剩余 ${item.slots || 0}` }
    ];
    const deliveries = item.delivery || ['需求澄清', '阶段设计', '终验交付'];
    data.milestones = deliveries.map((name, index) => ({
      name: `里程碑 ${index + 1}`,
      detail: name,
      status: index === 0 ? 'done' : index === deliveries.length - 1 ? 'pending' : 'processing'
    }));
    data.deliverables = deliveries;
    data.acceptance = item.acceptance || [];
    data.showSafeguards = true;
    data.primaryCta = '报名项目';
    data.secondaryCta = '站内沟通';
  } else if (type === 'job') {
    data.infoTags = [item.mode, item.type, item.location].filter(Boolean);
    data.stats = [
      { label: '薪资', value: item.salary },
      { label: '投递', value: `${item.applications || 0} 份` },
      { label: '福利要点', value: item.benefits }
    ];
    const process = item.process || [];
    data.milestones = process.map((step, index) => ({
      name: `阶段 ${index + 1}`,
      detail: step,
      status: index === 0 ? 'pending' : 'processing'
    }));
    data.deliverables = item.responsibilities || [];
    data.acceptance = item.requirements || [];
    data.primaryCta = '投递岗位';
    data.secondaryCta = '与 HR 沟通';
    data.showSafeguards = !!(item.safeguards && item.safeguards.length);
  } else if (type === 'forum') {
    data.infoTags = [item.category, item.updated].filter(Boolean);
    data.stats = [
      { label: '互动', value: `${item.interactions || 0}` },
      { label: '标签', value: (item.tags || []).join(' / ') }
    ];
    data.showMilestones = false;
    data.showDeliverables = false;
    data.acceptance = [];
    data.showAcceptance = false;
    data.safeguards = [];
    data.showSafeguards = false;
    data.primaryCta = '前往讨论';
    data.secondaryCta = '收藏';
  } else if (type === 'result') {
    data.infoTags = (item.tags || []).slice(0, 3);
    data.stats = [
      { label: '评分', value: item.rating },
      { label: '引用', value: `${item.citations || 0}` },
      { label: '认证', value: item.award || '待评优' }
    ];
    data.showMilestones = false;
    data.deliverables = [];
    data.showDeliverables = false;
    data.acceptance = [item.summary].filter(Boolean);
    data.primaryCta = '收藏成果';
    data.secondaryCta = '引用到履历';
    data.safeguards = ['官方评优入库', '可同步至履历'];
    data.showSafeguards = true;
  }

  return data;
}

Page({
  data: {
    item: null,
    type: 'project',
    typeLabel: '',
    infoTags: [],
    stats: [],
    milestones: [],
    showMilestones: true,
    deliverables: [],
    showDeliverables: true,
    acceptance: [],
    showAcceptance: true,
    safeguards: [],
    showSafeguards: false,
    publisher: {},
    history: [],
    contentSummary: '',
    forumContent: '',
    resultSummary: '',
    primaryCta: '报名项目',
    secondaryCta: '站内沟通',
    riskBanner: null,
    statusMap: {
      done: '已完成',
      processing: '进行中',
      pending: '待开始',
      alert: '需关注'
    }
  },

  onLoad() {
    const detail = wx.getStorageSync('detailItem');
    if (!detail) {
      wx.showToast({ icon: 'none', title: '未找到详情数据' });
      return;
    }
    const built = buildDetail(detail);
    this.setData(built);
    wx.setNavigationBarTitle({ title: `${built.typeLabel}详情` });
  },

  onPrimaryAction() {
    wx.showToast({ icon: 'success', title: '操作成功（演示）' });
  },

  onSecondaryAction() {
    wx.showToast({ icon: 'none', title: '功能开发中' });
  }
});
