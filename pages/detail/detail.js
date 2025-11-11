Page({
  data: {
    project: null,
    trainingText: '',
    certInfo: {
      name: '示例企业',
      credit: '91310000MA1K8X01Q7',
      years: '成立 8 年',
      risk: '风险标签：无',
      source: '数据来源于天眼查/企查查/裁判文书网（示意）'
    },
    showCertSheet: false
  },

  onLoad() {
    const sel = wx.getStorageSync('sel');
    if (sel) {
      this.setData({
        project: sel,
        trainingText: sel.training ? '提供必要培训' : '无需培训',
        certInfo: {
          name: sel.company || '示例企业',
          credit: '91310000MA1K8X01Q7',
          years: '成立 8 年',
          risk: sel.safe ? '风险标签：无' : '风险标签：有 1 条',
          source: '数据来源于天眼查/企查查/裁判文书网（示意）'
        }
      });
      wx.setNavigationBarTitle({ title: sel.title || '项目详情' });
    } else {
      wx.setNavigationBarTitle({ title: '项目详情' });
      wx.showToast({ icon: 'none', title: '未找到项目数据' });
    }
  },

  onApply() {
    wx.showToast({ icon: 'success', title: '已发送申请（演示）' });
  },

  onToggleCertSheet() {
    this.setData({ showCertSheet: !this.data.showCertSheet });
  },

  noop() {}
});
