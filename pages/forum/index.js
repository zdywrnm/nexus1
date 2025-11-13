const POSTS = [
  {
    id: 'forum-1',
    标题: '寻找 XR 课程共创队友',
    帖子类型: '招募贴',
    摘要: '围绕 XR 沉浸式课程打磨交互体验，招募视觉与交互同学协作。',
    正文: '课程周期 6 周，提供企业导师与实践证明，需每周 3 次晚间线上碰撞。',
    更新时间: '2 小时前',
    作者: '星航研习社',
    认证企业: true,
    关联项目ID: 'proj-1',
    关联岗位ID: ''
  },
  {
    id: 'forum-2',
    标题: '分享阶段验收经验',
    帖子类型: '交流贴',
    摘要: '总结阶段性结算中的风险提示与案例，欢迎补充。',
    正文: '围绕阶段性结算准备材料、导师陪审与仲裁联动展开讨论。',
    更新时间: '5 小时前',
    作者: '协同顾问小组',
    认证企业: false,
    关联项目ID: '',
    关联岗位ID: ''
  },
  {
    id: 'forum-3',
    标题: '能源监测可视化成果展示',
    帖子类型: '成果贴',
    摘要: '低碳社区能源看板已上线，开放体验地址与设计稿。',
    正文: '包含实时用能对比、节能建议推送与多角色权限配置，欢迎交流优化建议。',
    更新时间: '1 天前',
    作者: '绿能协同队',
    认证企业: true,
    关联项目ID: 'proj-7',
    关联岗位ID: ''
  },
  {
    id: 'forum-4',
    标题: '开源数据抓取工具协作招募',
    帖子类型: '招募贴',
    摘要: '需要 2 名数据工程同学协助优化爬虫与日志治理。',
    正文: '项目为公益类支持，周期 4 周，提供导师培训与差旅补贴。',
    更新时间: '3 天前',
    作者: '数据公益联盟',
    认证企业: false,
    关联项目ID: 'proj-4',
    关联岗位ID: 'job-2'
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
      const matchType = activeType === '不限' ? true : item.帖子类型 === activeType;
      if (!matchType) return false;
      if (!keyword) return true;
      const source = `${item.标题}${item.摘要}${item.正文}${item.作者}`;
      return source.includes(keyword);
    });
    this.setData({ displayList: list });
  },

  onReachBottom() {
    wx.showToast({ icon: 'none', title: '没有更多帖子' });
  }
});
