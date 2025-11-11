const CATEGORY_OPTIONS = ['商业', '技术', '设计', '内容', '教育', '工程', '公益', '服务'];

Page({
  data: {
    categories: CATEGORY_OPTIONS,
    form: {
      title: '',
      bounty: '',
      categoryIndex: -1,
      training: true,
      desc: ''
    }
  },

  onFieldInput(e) {
    const field = e.currentTarget.dataset.field;
    if (!field) return;
    this.setData({ [`form.${field}`]: e.detail.value });
  },

  onCategoryChange(e) {
    const index = Number(e.detail.value);
    this.setData({ 'form.categoryIndex': index });
  },

  onTrainingChange(e) {
    this.setData({ 'form.training': e.detail.value });
  },

  onSubmit() {
    const { title, bounty } = this.data.form;
    if (!title.trim() || bounty === '') {
      wx.showToast({ icon: 'none', title: '请填写必填项' });
      return;
    }

    const numeric = Number(bounty);
    if (Number.isNaN(numeric)) {
      wx.showToast({ icon: 'none', title: '请填写有效赏金' });
      return;
    }

    if (numeric < 100) {
      wx.showToast({ icon: 'none', title: '赏金过低，已驳回（演示）' });
      return;
    }

    wx.showToast({ icon: 'success', title: '已提交审核（演示）' });
    setTimeout(() => {
      wx.switchTab({ url: '/pages/index/index' });
    }, 800);
  }
});
