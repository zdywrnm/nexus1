const AI_GUIDE = {
  project: '建议拆解 3-5 个里程碑，并补充验收标准、风险预案。托管支付可降低违约风险。',
  job: '明确岗位职责、要求与转正机会，可提升匹配度。建议同步面试流程与导师支持信息。',
  forum: '使用「背景-问题-求助」结构描述，可快速获得回应。可附上项目链接提升可信度。',
  result: '从角色、贡献、量化成果三方面阐述，可直接引用到履历与投递材料。'
};

Page({
  data: {
    tabs: [
      { key: 'project', label: '发项目', desc: '外包任务 / 共创课题' },
      { key: 'job', label: '发岗位', desc: '实习 / 兼职 / 校招' },
      { key: 'forum', label: '发帖子', desc: '经验 / 招募 / 评价 / 求助' },
      { key: 'result', label: '发成果', desc: '作品集 / 认证成果' }
    ],
    activeType: 'project',
    categoryOptions: ['商业策略', '体验设计', '技术研发', '公益创新', '工程实践'],
    difficultyOptions: ['基础', '中等', '进阶', '挑战'],
    jobTypeOptions: ['全职', '实习', '兼职', '校企共建'],
    forumTypeOptions: ['经验', '招募', '评价', '求助'],
    aiSuggestion: AI_GUIDE.project,
    formData: {
      project: {
        title: '',
        categoryIndex: -1,
        budget: '',
        duration: '',
        difficultyIndex: 0,
        acceptance: '',
        escrow: true,
        training: ''
      },
      job: {
        title: '',
        typeIndex: 0,
        salary: '',
        location: '',
        responsibilities: '',
        requirements: '',
        process: ''
      },
      forum: {
        typeIndex: 0,
        title: '',
        content: '',
        tags: ''
      },
      result: {
        title: '',
        link: '',
        summary: '',
        related: '',
        awards: ''
      }
    }
  },

  onSwitchType(event) {
    const key = event.currentTarget.dataset.key;
    if (!key || key === this.data.activeType) return;
    this.setData({
      activeType: key,
      aiSuggestion: AI_GUIDE[key]
    });
  },

  onInput(event) {
    const path = event.currentTarget.dataset.path;
    if (!path) return;
    const value = event.detail.value;
    this.setData({ [`formData.${path}`]: value });
  },

  onPicker(event) {
    const path = event.currentTarget.dataset.path;
    if (!path) return;
    const index = Number(event.detail.value);
    this.setData({ [`formData.${path}`]: index });
  },

  onSwitch(event) {
    const path = event.currentTarget.dataset.path;
    if (!path) return;
    this.setData({ [`formData.${path}`]: event.detail.value });
  },

  onSubmit() {
    const type = this.data.activeType;
    const data = this.data.formData[type];
    if (!data) return;
    const requiredField = type === 'project' ? data.title && data.budget : type === 'job' ? data.title : data.title;
    if (!requiredField) {
      wx.showToast({ icon: 'none', title: '请完善关键信息' });
      return;
    }
    wx.showToast({ icon: 'success', title: '已提交审核' });
    setTimeout(() => {
      wx.switchTab({ url: '/pages/index/index' });
    }, 800);
  }
});
