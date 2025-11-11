const SOURCE = {
  project: [
    {
      id: 'dp1',
      title: 'XR 沉浸式课程共创',
      certified: true,
      meta: '教育 · 课程设计 · 预算 ¥28,000 · 8 周',
      tags: ['教育', '内容策划', 'XR 互动', '托管', '团队', '校企', '已认证'],
      highlight: '支持团队协作 · 企业导师每周复盘'
    },
    {
      id: 'dp2',
      title: '新能源工厂数据采集改造',
      certified: true,
      meta: '工业 · 数据工程 · 预算 ¥45,000 · 12 周',
      tags: ['工业', '数据采集', '线下', '仲裁保障', '已认证'],
      highlight: '需进厂调研，支持差旅补贴'
    },
    {
      id: 'dp3',
      title: '城市公益活动传播矩阵',
      certified: false,
      meta: '公益 · 品牌传播 · 预算 ¥12,000 · 5 周',
      tags: ['公益', '短视频', '远程', '个人可接'],
      highlight: '公益类项目服务费减免'
    }
  ],
  job: [
    {
      id: 'dj1',
      title: '数据驱动增长分析师',
      certified: true,
      meta: '薪酬 18k-25k/月 · 北上深可选 · 支持远程',
      tags: ['技术', '增长', '远程', '社招', '已认证'],
      highlight: '提供校企联合认证 · 年度评优加权'
    },
    {
      id: 'dj2',
      title: '智能硬件算法实习生',
      certified: true,
      meta: '薪酬 8k-12k/月 · 深圳 · 校招实习',
      tags: ['技术', 'AI', '实习', '线下', '已认证'],
      highlight: '完成项目可获转正机会'
    }
  ],
  result: [
    {
      id: 'dr1',
      title: 'AI 辅助手语翻译系统',
      certified: true,
      meta: '成果评分 4.9 · 获校企共创大奖',
      tags: ['AI', '无障碍', '公益', '已认证'],
      highlight: '可一键引用至履历'
    },
    {
      id: 'dr2',
      title: '低碳社区能源监测仪表盘',
      certified: false,
      meta: '成果评分 4.7 · 入选低碳示范项目',
      tags: ['工业', '数据可视化', '低碳'],
      highlight: '关联 3 个在投项目'
    }
  ],
  forum: [
    {
      id: 'df1',
      title: '预算托管的最佳实践',
      certified: false,
      meta: '经验 · 24 条评论 · 1 小时前更新',
      tags: ['托管', '风控', '经验分享'],
      highlight: '精选内容，官方标记'
    },
    {
      id: 'df2',
      title: '寻找数据分析队友，冲击评优',
      certified: false,
      meta: '招募 · 5 人感兴趣 · 3 小时前更新',
      tags: ['招募', '数据分析', '团队'],
      highlight: '需要统计建模能力'
    }
  ]
};

const FILTERS = [
  {
    key: 'industry',
    name: '行业',
    tip: '可多选',
    options: [
      { label: '教育', value: '教育' },
      { label: '工业', value: '工业' },
      { label: '公益', value: '公益' },
      { label: '技术', value: '技术' },
      { label: '文化创意', value: '文化创意' }
    ]
  },
  {
    key: 'task',
    name: '任务类别',
    tip: '例如数据、设计、内容',
    options: [
      { label: '数据工程', value: '数据' },
      { label: '品牌传播', value: '短视频' },
      { label: '内容策划', value: '内容策划' },
      { label: 'AI/算法', value: 'AI' },
      { label: '产品设计', value: '设计' }
    ]
  },
  {
    key: 'skill',
    name: '技能标签',
    tip: '系统基于技能画像推荐',
    options: [
      { label: 'XR 互动', value: 'XR 互动' },
      { label: '数据采集', value: '数据采集' },
      { label: '无障碍', value: '无障碍' },
      { label: '增长分析', value: '增长' },
      { label: '统计建模', value: '统计建模' }
    ]
  },
  {
    key: 'budget',
    name: '预算/薪酬',
    tip: '单个项目预算区间',
    options: [
      { label: '¥10k-20k', value: '预算 ¥12,000' },
      { label: '¥20k-40k', value: '预算 ¥28,000' },
      { label: '¥40k+', value: '预算 ¥45,000' },
      { label: '8k-12k/月', value: '8k-12k/月' },
      { label: '18k-25k/月', value: '18k-25k/月' }
    ]
  },
  {
    key: 'mode',
    name: '协作方式',
    tip: '个人/团队/远程/线下',
    options: [
      { label: '支持远程', value: '远程' },
      { label: '需线下到场', value: '线下' },
      { label: '团队协作', value: '团队' },
      { label: '个人可接', value: '个人可接' }
    ]
  },
  {
    key: 'campus',
    name: '校企标签',
    tip: '认证信息同步公示',
    options: [
      { label: '校企共建', value: '校企' },
      { label: '官方认证', value: '已认证' },
      { label: '公益减免', value: '公益' }
    ]
  },
  {
    key: 'risk',
    name: '风险提示',
    tip: '开启异常进度提醒',
    options: [
      { label: '托管保障', value: '托管' },
      { label: '仲裁保障', value: '仲裁保障' },
      { label: '风控提醒', value: '风控' }
    ]
  }
];

const CATEGORIES = [
  { key: 'project', label: '项目' },
  { key: 'job', label: '岗位' },
  { key: 'result', label: '成果' },
  { key: 'forum', label: '论坛' }
];

Page({
  data: {
    filters: FILTERS,
    categories: CATEGORIES,
    activeCategory: 'project',
    selected: {},
    items: [],
    counts: {},
    mapMode: false,
    historyHint: '偏好体验设计与公益议题，已为你优先展示相关项目'
  },

  onLoad() {
    const selected = {};
    FILTERS.forEach((item) => {
      selected[item.key] = [];
    });
    this.setData({ selected }, () => {
      this.updateResults();
    });
  },

  isSelected(group, value) {
    const list = this.data.selected[group] || [];
    return list.includes(value);
  },

  onToggle(event) {
    const group = event.currentTarget.dataset.group;
    const value = event.currentTarget.dataset.value;
    if (!group || !value) return;
    const current = new Set(this.data.selected[group] || []);
    if (current.has(value)) {
      current.delete(value);
    } else {
      current.add(value);
    }
    this.setData({ [`selected.${group}`]: Array.from(current) }, () => {
      this.updateResults();
    });
  },

  onReset() {
    const selected = {};
    FILTERS.forEach((item) => {
      selected[item.key] = [];
    });
    this.setData({ selected }, () => {
      this.updateResults();
    });
  },

  onSave() {
    wx.showToast({ icon: 'success', title: '已保存筛选' });
  },

  onSmart() {
    wx.showToast({ icon: 'none', title: '已根据画像刷新推荐' });
  },

  onToggleMap(event) {
    this.setData({ mapMode: event.detail.value });
  },

  onCategoryChange(event) {
    const key = event.currentTarget.dataset.key;
    if (!key || key === this.data.activeCategory) return;
    this.setData({ activeCategory: key }, () => {
      this.updateResults();
    });
  },

  applyFilters(list) {
    const selected = this.data.selected;
    const activeValues = Object.values(selected).flat();
    if (!activeValues.length) {
      return list;
    }
    return list.filter((item) => {
      const tags = new Set(item.tags || []);
      return activeValues.every((value) => tags.has(value) || item.meta.includes(value));
    });
  },

  updateResults() {
    const counts = {};
    CATEGORIES.forEach((cat) => {
      counts[cat.key] = this.applyFilters(SOURCE[cat.key]).length;
    });
    const activeItems = this.applyFilters(SOURCE[this.data.activeCategory]);
    this.setData({ items: activeItems, counts });
  }
});
