const MOCK = [
  {
    id: 'p1',
    title: '零售导购小程序改版',
    bounty: 1800,
    company: '华北零售科技',
    skills: ['WXML', '组件化', '性能优化'],
    safe: true,
    desc: '重构导购流程，提升转化率。',
    training: '提供 2 天线上培训'
  },
  {
    id: 'p2',
    title: '企业内部培训预约',
    bounty: 950,
    company: '至简教育',
    skills: ['日历组件', '云开发', 'UI 设计'],
    safe: false,
    desc: '预约课程、推送提醒。',
    training: '提供需求梳理文档'
  },
  {
    id: 'p3',
    title: '物流跟踪看板',
    bounty: 2200,
    company: '路驰物流',
    skills: ['数据可视化', 'ECharts', '地图'],
    safe: true,
    desc: '展示车辆节点状态及滞留预警。',
    training: '可安排导师 1 对 1'
  }
];

Page({
  data: {
    keyword: '',
    allProjects: [],
    filtered: []
  },

  onLoad() {
    this.setData({
      allProjects: MOCK,
      filtered: MOCK
    });
  },

  onInput(e) {
    this.setData({ keyword: e.detail.value });
  },

  onSearch() {
    this.filterList();
  },

  filterList() {
    const kw = (this.data.keyword || '').trim().toLowerCase();
    if (!kw) {
      this.setData({ filtered: this.data.allProjects });
      return;
    }

    const filtered = this.data.allProjects.filter((item) => {
      const content = [
        item.title,
        item.company,
        (item.skills || []).join(',')
      ]
        .join('|')
        .toLowerCase();
      return content.includes(kw);
    });

    this.setData({ filtered });
  },

  onSelect(e) {
    const idx = e.currentTarget.dataset.index;
    const sel = this.data.filtered[idx];
    if (!sel) return;

    try {
      wx.setStorageSync('sel', sel);
    } catch (err) {
      console.error('setStorageSync failed', err);
    }

    wx.navigateTo({ url: '/pages/detail/detail' });
  }
});
