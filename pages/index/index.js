const dataSource = {
  projects: [
    {
      id: 'proj-1',
      type: 'project',
      title: '校园开放日数字导览',
      category: '体验设计',
      difficulty: '中等',
      milestones: 4,
      budget: '18,000',
      timeline: '6 周',
      match: 92,
      skills: ['交互原型', '小程序', '地图可视化'],
      publisher: '星航大学产学中心',
      credit: 'A+',
      certified: true,
      applicants: 18,
      slots: 2,
      tags: ['商业', '体验设计', '校企', '远程', '10k+'],
      overview: '为开放日活动打造一体化导览体验，覆盖路线规划、实时问答与安全提示。',
      delivery: ['路线规划原型', '活动看板', '数据埋点方案'],
      acceptance: ['用户体验评分 ≥ 4.5', 'NPS ≥ 60'],
      safeguards: ['赏金托管', '仲裁绿色通道'],
      riskLevel: 'low'
    },
    {
      id: 'proj-2',
      type: 'project',
      title: '公益募捐透明化平台',
      category: '公益科技',
      difficulty: '进阶',
      milestones: 5,
      budget: '35,000',
      timeline: '10 周',
      match: 88,
      skills: ['区块链凭证', '风控规则', '无障碍设计'],
      publisher: '益心组织',
      credit: 'A',
      certified: true,
      applicants: 26,
      slots: 3,
      tags: ['公益', '校外', '托管', '20k+'],
      overview: '通过可追溯凭证确保每笔捐赠公开透明，支持多角色协作与风控预警。',
      delivery: ['多端信息架构', '里程碑资金流模板'],
      acceptance: ['资金流匹配率 100%', '安全扫描通过'],
      safeguards: ['平台托管分期', '双向评价'],
      riskLevel: 'medium'
    },
    {
      id: 'proj-3',
      type: 'project',
      title: '智造工厂安全巡检助手',
      category: '工业智能',
      difficulty: '中高',
      milestones: 3,
      budget: '26,500',
      timeline: '8 周',
      match: 84,
      skills: ['计算机视觉', '告警流程', '数据仪表盘'],
      publisher: '精工智造',
      credit: 'A-',
      certified: false,
      applicants: 11,
      slots: 1,
      tags: ['工业', '团队', '线下', '20k+'],
      overview: '结合视觉识别与异常打卡，帮助工厂完成标准化巡检并生成整改报告。',
      delivery: ['巡检任务拆解', '异常处理手册'],
      acceptance: ['缺陷识别准确率 ≥ 95%', '整改闭环时长 ≤ 48h'],
      safeguards: ['企业导师陪跑'],
      riskLevel: 'low'
    }
  ],
  jobs: [
    {
      id: 'job-1',
      type: 'job',
      title: 'AI 产品运营实习生',
      salary: '6k-8k/月',
      location: '上海 · 可远程',
      mode: '校招实习',
      employmentType: '可转正',
      benefits: '双导师制 · 技能评优通道',
      skills: ['竞品研究', '数据分析', '英文沟通'],
      verified: true,
      applications: 42,
      tags: ['商业', '远程', '实习', '6 周'],
      overview: '负责生成式 AI 产品的用户调研与运营策略制定。',
      safeguards: ['实习协议', '导师陪跑'],
      riskLevel: 'low',
      publisher: '光谱智能',
      responsibilities: ['协助设计并跟踪增长实验', '输出周度数据分析报告', '参与用户访谈与洞察'],
      requirements: ['对生成式 AI 产品有兴趣', '具备基础数据分析能力', '英语可用于资料检索'],
      process: ['简历筛选', '业务面试', '导师面谈']
    },
    {
      id: 'job-2',
      type: 'job',
      title: '低代码交付工程师',
      salary: '18k-26k/月',
      location: '深圳 · 现场',
      mode: '社招兼职',
      employmentType: '弹性出勤',
      benefits: '项目奖金 · 校企认证',
      skills: ['低代码', '业务建模', '项目管理'],
      verified: true,
      applications: 19,
      tags: ['技术', '线下', '兼职', '20k+'],
      overview: '为大型连锁品牌搭建统一运营工作台并沉淀组件库。',
      safeguards: ['托管支付', '周度结算'],
      riskLevel: 'medium',
      publisher: '领航数字',
      responsibilities: ['搭建业务流程与权限模型', '维护组件库并输出交付手册'],
      requirements: ['熟悉主流低代码平台', '具备 ToB 交付经验', '沟通能力强'],
      process: ['简历评估', '项目案例分享', '技术面试']
    }
  ],
  forum: [
    {
      id: 'forum-1',
      type: 'forum',
      category: '经验分享',
      title: '里程碑验收如何兼顾效率与公平？',
      summary: '结合 12 个真实案例拆解「阶段交付 + 评分维度」的落地方式。',
      interactions: 128,
      updated: '2 小时前',
      tags: ['协作', '里程碑'],
      content: '从需求澄清到阶段验收的全过程拆解，分享平台推荐的评分模板与常见争议处理方式。'
    },
    {
      id: 'forum-2',
      type: 'forum',
      category: '招募',
      title: '公益黑客松开发者招募',
      summary: '寻找跨校技术同学共建公益议题解决方案，提供导师支持。',
      interactions: 86,
      updated: '昨天',
      tags: ['公益', '招募'],
      content: '项目提供真实公益需求，团队可获得导师辅导与公益证书，欢迎前端、后端、数据伙伴加入。'
    }
  ],
  results: [
    {
      id: 'result-1',
      type: 'result',
      title: '无人车调度数字孪生沙盘',
      cover: 'https://img.alicdn.com/imgextra/i4/O1CN01d6x3MU1z3vV9pbbxy_!!6000000006685-2-tps-800-600.png',
      rating: '4.9',
      award: '年度评优',
      citations: 14,
      tags: ['工业智能', '3D 可视化', '工业', '高难度'],
      summary: '基于实时车辆数据构建调度策略沙盘，实现异常路况快速推演与资源优化。'
    },
    {
      id: 'result-2',
      type: 'result',
      title: '乡村文旅共创导览手册',
      cover: 'https://img.alicdn.com/imgextra/i3/O1CN01w4r0s91Zp5Q4Y5dOj_!!6000000003244-2-tps-800-600.png',
      rating: '4.8',
      award: '社会影响力',
      citations: 23,
      tags: ['文旅创新', '体验设计', '公益', '校企'],
      summary: '整合乡村故事、路线规划与数字传播方案，助力地方文旅产业升级。'
    }
  ]
};

const filterGroups = [
  {
    key: 'category',
    name: '类别',
    options: [
      { label: '商业', value: '商业' },
      { label: '技术', value: '技术' },
      { label: '设计', value: '体验设计' },
      { label: '公益', value: '公益' },
      { label: '工业', value: '工业' }
    ]
  },
  {
    key: 'skill',
    name: '技能标签',
    options: [
      { label: '交互原型', value: '交互原型' },
      { label: '区块链凭证', value: '区块链凭证' },
      { label: '计算机视觉', value: '计算机视觉' },
      { label: '竞品研究', value: '竞品研究' },
      { label: '低代码', value: '低代码' }
    ]
  },
  {
    key: 'cert',
    name: '校企认证',
    options: [
      { label: '校企共建', value: '校企' },
      { label: '企业认证', value: '认证' }
    ]
  },
  {
    key: 'budget',
    name: '预算/薪资',
    options: [
      { label: '¥10k+', value: '10k+' },
      { label: '¥20k+', value: '20k+' }
    ]
  },
  {
    key: 'mode',
    name: '远程/本地',
    options: [
      { label: '可远程', value: '远程' },
      { label: '本地现场', value: '线下' }
    ]
  },
  {
    key: 'duration',
    name: '时长',
    options: [
      { label: '≤6 周', value: '6 周' },
      { label: '≤10 周', value: '10 周' }
    ]
  }
];

Page({
  data: {
    bannerList: [
      {
        tag: '校企联动',
        title: '顶尖企业导师开放共创席位',
        desc: '认证企业托管预算，优先匹配完成高等级认证的团队。'
      },
      {
        tag: '公益优选',
        title: '青年公益项目加速计划',
        desc: '提供风控陪审、导师辅导与成果展播机会。'
      },
      {
        tag: '评优通道',
        title: '季度成果评优开启申报',
        desc: '优秀成果一键沉淀至履历，获得信用加成。'
      }
    ],
    notices: ['AI 规范建议已升级，描述质量越高匹配越精准', '温馨提示：命中风险规则会触发实名复核'],
    tabs: [
      { key: 'projects', label: '项目' },
      { key: 'jobs', label: '岗位' },
      { key: 'forum', label: '论坛' },
      { key: 'results', label: '成果' }
    ],
    activeTab: 'projects',
    filterGroups,
    activeFilters: [],
    feeds: dataSource,
    displayList: []
  },

  onLoad() {
    this.updateDisplay();
  },

  onTabChange(event) {
    const key = event.currentTarget.dataset.key;
    if (key && key !== this.data.activeTab) {
      this.setData({ activeTab: key }, () => {
        this.updateDisplay();
      });
    }
  },

  onToggleFilter(event) {
    const value = event.currentTarget.dataset.value;
    if (!value) return;
    const active = new Set(this.data.activeFilters);
    if (active.has(value)) {
      active.delete(value);
    } else {
      active.add(value);
    }
    this.setData({ activeFilters: Array.from(active) }, () => {
      this.updateDisplay();
    });
  },

  onResetFilters() {
    if (this.data.activeFilters.length) {
      this.setData({ activeFilters: [] }, () => {
        this.updateDisplay();
      });
    }
  },

  isFilterActive(_group, value) {
    return this.data.activeFilters.includes(value);
  },

  updateDisplay() {
    const list = this.data.feeds[this.data.activeTab] || [];
    const filters = this.data.activeFilters;
    if (!filters.length) {
      this.setData({ displayList: list });
      return;
    }
    const filtered = list.filter((item) => {
      const tags = new Set(item.tags || []);
      if (item.skills) {
        item.skills.forEach((skill) => tags.add(skill));
      }
      if (item.category) tags.add(item.category);
      if (item.mode) tags.add(item.mode);
      if (item.timeline) tags.add(item.timeline);
      if (item.award) tags.add(item.award);
      return filters.every((value) => tags.has(value));
    });
    this.setData({ displayList: filtered });
  },

  onSelect(event) {
    const index = event.currentTarget.dataset.index;
    const item = this.data.displayList[index];
    if (!item) return;
    wx.setStorageSync('detailItem', item);
    wx.navigateTo({ url: '/pages/detail/detail' });
  }
});
