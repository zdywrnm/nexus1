const POSTS = [
  {
    id: 'forum-1',
    title: '寻找 XR 课程共创队友',
    postType: '招募贴',
    summary: '围绕 XR 沉浸式课程打磨交互体验，招募视觉与交互同学协作。',
    content: '课程周期 6 周，提供企业导师与实践证明，需每周 3 次晚间线上碰撞。',
    updatedAt: '2 小时前',
    author: '星航研习社',
    certified: true,
    projectId: 'proj-1',
    jobId: ''
  },
  {
    id: 'forum-2',
    title: '分享阶段验收经验',
    postType: '交流贴',
    summary: '总结阶段性结算中的风险提示与案例，欢迎补充。',
    content: '围绕阶段性结算准备材料、导师陪审与仲裁联动展开讨论。',
    updatedAt: '5 小时前',
    author: '协同顾问小组',
    certified: false,
    projectId: '',
    jobId: ''
  },
  {
    id: 'forum-3',
    title: '能源监测可视化成果展示',
    postType: '成果贴',
    summary: '低碳社区能源看板已上线，开放体验地址与设计稿。',
    content: '包含实时用能对比、节能建议推送与多角色权限配置，欢迎交流优化建议。',
    updatedAt: '1 天前',
    author: '绿能协同队',
    certified: true,
    projectId: 'proj-7',
    jobId: ''
  },
  {
    id: 'forum-4',
    title: '开源数据抓取工具协作招募',
    postType: '招募贴',
    summary: '需要 2 名数据工程同学协助优化爬虫与日志治理。',
    content: '项目为公益类支持，周期 4 周，提供导师培训与差旅补贴。',
    updatedAt: '3 天前',
    author: '数据公益联盟',
    certified: false,
    projectId: 'proj-4',
    jobId: 'job-2'
  }
];

const TYPE_TABS = [
  { label: '全部', value: '不限' },
  { label: '招募贴', value: '招募贴' },
  { label: '交流贴', value: '交流贴' },
  { label: '成果贴', value: '成果贴' }
];

Page({
  data: {
    query: '',
    activeType: '不限',
    tabs: TYPE_TABS,
    displayList: POSTS
  },

  onLoad() {
    this.filterPosts();
  },

  onSearchInput(event) {
    const value = event.detail.value || '';
    this.setData({ query: value }, () => {
      this.filterPosts();
    });
  },

  onClearSearch() {
    if (!this.data.query) return;
    this.setData({ query: '' }, () => {
      this.filterPosts();
    });
  },

  onTypeChange(event) {
    const value = event.currentTarget.dataset.value;
    if (!value || value === this.data.activeType) return;
    this.setData({ activeType: value }, () => {
      this.filterPosts();
    });
  },

  filterPosts() {
    const { query, activeType } = this.data;
    const keyword = query.trim();
    const list = POSTS.filter((item) => {
      const matchType = activeType === '不限' ? true : item.postType === activeType;
      if (!matchType) return false;
      if (!keyword) return true;
      const source = `${item.title}${item.summary}${item.content}${item.author}`;
      return source.includes(keyword);
    });
    this.setData({ displayList: list });
  },

  onReachBottom() {
    wx.showToast({ icon: 'none', title: '没有更多帖子' });
  }
});
