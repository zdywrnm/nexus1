const AI_GUIDE = {
  project: '建议明确项目里程碑、培训安排与结算方式，帮助审核快速通过。',
  job: '请列出岗位职责、福利待遇与薪资范围，匹配度将优先提升。',
  forum: '选定帖子类型，结构化描述背景、问题与诉求，能获得更快反馈。'
};

const PROJECT_TAGS = {
  项目类型: ['商业类', '技术类', '设计类', '内容类', '教育类', '工程类', '公益类', '服务类'],
  工作方式: ['不限', '线上', '线下', '混合'],
  工作城市: ['北京', '上海', '深圳', '广州', '杭州'],
  开始时间: ['不限', '立即', '本周内', '本月内'],
  项目时长: ['不限', '≤1周', '1-4周', '＞1月'],
  每天工作时长: ['不限', '≤2小时', '2-4小时', '4-6小时', '≥6小时', '自定义'],
  每周参与天数: ['不限', '≥1天', '≥3天', '≥5天'],
  结算方式: ['不限', '日薪', '阶段性薪水', '完成后一次性'],
  日薪区间: ['不限', '0-100', '100-150', '150-200', '200-300', '300以上'],
  总额区间: ['不限', '0-200', '200-500', '500-1000', '1000-3000', '3000以上'],
  学历要求: ['不限', '大专', '本科', '硕士', '博士'],
  接受年级: ['大一', '大二', '大三', '大四'],
  培训支持: ['不限', '有培训', '无培训'],
  福利待遇: ['餐补', '交通补贴', '住宿']
};

const JOB_TAGS = {
  学历要求: ['不限', '大专', '本科', '硕士', '博士', '中专/中技', '高中', '初中及以下'],
  福利待遇: ['周末双休', '五险一金', '8小时工作制', '五险', '弹性工作制', '房补', '底薪加提成', '带薪年假', '餐补', '年终奖'],
  薪资待遇: ['不限', '3K以下', '3-5K', '5-7K', '7-9K', '9-12K', '12K以上', '自定义薪资'],
  经验要求: ['不限', '在校生', '应届生'],
  公司规模: ['不限', '0-20人', '20-99人', '100-499人', '500-999人', '1000-9999人', '10000人以上'],
  BOSS活跃状态: ['不限', '3日内活跃', '今日活跃', '本周活跃', '本月活跃', '刚刚活跃'],
  融资阶段: ['不限', '不需要融资', '未融资', '天使轮', 'A轮', 'B轮', 'C轮', 'D轮及以上', '已上市'],
  所属行业: [
    '互联网/AI', '互联网', '电子商务', '计算机软件', '生活服务(O2O)', '企业服务', '医疗健康', '游戏', '社交网络与媒体', '人工智能',
    '云计算', '在线教育', '计算机服务', '大数据', '广告营销', '物联网', '新零售', '信息安全', '电子/通信/半导体', '半导体/芯片',
    '电子/硬件开发', '通信/网络设备', '智能硬件/消费电子', '运营商/增值服务', '计算机硬件', '电子/半导体/集成电路', '服务业', '餐饮',
    '美容', '美发', '酒店/民宿', '休闲/娱乐', '运动/健身', '保健/养生', '家政服务', '旅游/景区', '婚庆/摄影', '宠物服务', '回收/维修',
    '美容/美发', '其他生活服务', '消费品/批发/零售', '批发/零售', '进出口贸易', '食品/饮料/烟酒', '服装/纺织', '家具/家居', '家用电器',
    '日化', '珠宝/首饰', '家具/家电/家居', '其他消费品', '房地产/建筑', '装修装饰', '房屋建筑工程', '土木工程', '机电工程', '物业管理',
    '房地产中介/租赁', '建筑材料', '房地产开发经营', '建筑设计', '建筑工程咨询服务', '土地与公共设施管理', '工程施工', '教育培训',
    '培训/辅导机构', '职业培训', '学前教育', '学校/学历教育', '学术/科研', '广告/传媒/文化/体育', '文化艺术/娱乐', '体育', '广告/公关/会展',
    '广播/影视', '新闻/出版', '制造业', '通用设备', '专用设备', '电气机械/器材', '金属制品', '非金属矿物制品', '橡胶/塑料制品',
    '化学原料/化学制品', '仪器仪表', '自动化设备', '印刷/包装/造纸', '铁路/船舶/航空/航天制造', '计算机/通信/其他电子设备', '新材料',
    '机械设备/机电/重工', '仪器仪表/工业自动化', '原材料及加工/模具', '其他制造业', '专业服务', '咨询', '财务/审计/税务', '人力资源服务',
    '法律', '检测/认证/知识产权', '翻译', '其他专业服务', '制药/医疗', '医疗服务', '医美服务', '医疗器械', 'IVD', '生物/制药', '医药批发零售',
    '医疗研发外包', '汽车', '新能源汽车', '汽车智能网联', '汽车经销商', '汽车后市场', '汽车研发/制造', '汽车零部件', '摩托车/自行车制造',
    '4S店/后市场', '交通运输/物流', '同城货运', '即时配送', '快递', '公路物流', '跨境物流', '装卸搬运和仓储业', '客运服务', '港口/铁路/公路/机场',
    '交通/运输', '物流/仓储', '能源/化工/环保', '光伏', '储能', '动力电池', '风电', '其他新能源', '环保', '化工', '电力/热力/燃气/水利',
    '石油/石化', '矿产/地质', '采掘/冶炼', '新能源', '金融', '互联网金融', '银行', '投资/融资', '证券/期货', '基金', '保险',
    '租赁/拍卖/典当/担保', '信托', '财富管理', '其他金融业', '政府/非盈利机构/其他', '农/林/牧/渔', '非盈利机构', '政府/公共事业', '其他行业'
  ]
};

Page({
  data: {
    tabs: [
      { key: 'project', label: '发项目', desc: '发布共创或外包项目' },
      { key: 'job', label: '发岗位', desc: '发布实习或用人需求' },
      { key: 'forum', label: '发帖子', desc: '发布招募/交流/成果贴' }
    ],
    activeType: 'project',
    aiSuggestion: AI_GUIDE.project,
    formData: {
      projectForm: {
        项目名称: '',
        项目简介: '',
        详细说明: ''
      },
      jobForm: {
        岗位名称: '',
        岗位简介: '',
        岗位要求: ''
      },
      forumForm: {
        帖子类型: '招募贴',
        标题: '',
        正文: '',
        关联项目ID: '',
        关联岗位ID: ''
      }
    },
    projectTags: {
      项目类型: [],
      工作方式: '不限',
      工作城市: '',
      开始时间: '不限',
      项目时长: '不限',
      每天工作时长: '不限',
      每周参与天数: '不限',
      结算方式: '不限',
      日薪区间: '不限',
      总额区间: '不限',
      学历要求: '不限',
      接受年级: [],
      培训支持: '不限',
      福利待遇: []
    },
    projectCustom: {
      自定义每天工作时长: ''
    },
    jobTags: {
      学历要求: '不限',
      福利待遇: [],
      薪资待遇: '不限',
      经验要求: '不限',
      公司规模: '不限',
      BOSS活跃状态: '不限',
      融资阶段: '不限',
      所属行业: []
    },
    jobCustom: {
      自定义最低薪资: '',
      自定义最高薪资: ''
    },
    projectTagOptions: PROJECT_TAGS,
    jobTagOptions: JOB_TAGS,
    forumTypeOptions: ['招募贴', '交流贴', '成果贴']
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
    this.setData({ [path]: event.detail.value });
  },

  onToggleProjectMulti(event) {
    const field = event.currentTarget.dataset.field;
    const value = event.currentTarget.dataset.value;
    if (!field || value === undefined) return;
    const current = new Set(this.data.projectTags[field] || []);
    if (current.has(value)) {
      current.delete(value);
    } else {
      current.add(value);
    }
    this.setData({ [`projectTags.${field}`]: Array.from(current) });
  },

  onSelectProjectSingle(event) {
    const field = event.currentTarget.dataset.field;
    const value = event.currentTarget.dataset.value;
    if (!field || value === undefined) return;
    this.setData({ [`projectTags.${field}`]: value });
    if (field === '每天工作时长' && value !== '自定义') {
      this.setData({ 'projectCustom.自定义每天工作时长': '' });
    }
    if (field === '结算方式') {
      if (value !== '日薪') {
        this.setData({ 'projectTags.日薪区间': '不限' });
      }
      if (value !== '阶段性薪水' && value !== '完成后一次性') {
        this.setData({ 'projectTags.总额区间': '不限' });
      }
    }
  },

  onSelectProjectCity(event) {
    const value = event.currentTarget.dataset.value;
    const current = this.data.projectTags.工作城市;
    const next = current === value ? '' : value;
    this.setData({ 'projectTags.工作城市': next });
  },

  onProjectCustomInput(event) {
    this.setData({ 'projectCustom.自定义每天工作时长': event.detail.value });
  },

  onToggleJobMulti(event) {
    const field = event.currentTarget.dataset.field;
    const value = event.currentTarget.dataset.value;
    if (!field || value === undefined) return;
    if (field === '所属行业') {
      const currentList = this.data.jobTags[field] || [];
      const set = new Set(currentList);
      if (set.has(value)) {
        set.delete(value);
      } else {
        if (currentList.length >= 3) {
          wx.showToast({ icon: 'none', title: '最多选择 3 个行业' });
          return;
        }
        set.add(value);
      }
      this.setData({ [`jobTags.${field}`]: Array.from(set) });
      return;
    }
    const current = new Set(this.data.jobTags[field] || []);
    if (current.has(value)) {
      current.delete(value);
    } else {
      current.add(value);
    }
    this.setData({ [`jobTags.${field}`]: Array.from(current) });
  },

  onSelectJobSingle(event) {
    const field = event.currentTarget.dataset.field;
    const value = event.currentTarget.dataset.value;
    if (!field || value === undefined) return;
    this.setData({ [`jobTags.${field}`]: value });
    if (field === '薪资待遇' && value !== '自定义薪资') {
      this.setData({ 'jobCustom.自定义最低薪资': '', 'jobCustom.自定义最高薪资': '' });
    }
  },

  onJobCustomInput(event) {
    const field = event.currentTarget.dataset.field;
    if (!field) return;
    this.setData({ [`jobCustom.${field}`]: event.detail.value });
  },

  onSelectForumType(event) {
    const value = event.currentTarget.dataset.value;
    if (!value) return;
    this.setData({ 'formData.forumForm.帖子类型': value });
  },

  onSubmit() {
    const type = this.data.activeType;
    if (type === 'project') {
      const form = this.data.formData.projectForm;
      if (!form.项目名称 || !form.项目简介 || !form.详细说明) {
        wx.showToast({ icon: 'none', title: '请填写项目基础信息' });
        return;
      }
      if (this.data.projectTags.每天工作时长 === '自定义' && !this.data.projectCustom.自定义每天工作时长) {
        wx.showToast({ icon: 'none', title: '请填写自定义时长' });
        return;
      }
    } else if (type === 'job') {
      const form = this.data.formData.jobForm;
      if (!form.岗位名称 || !form.岗位简介) {
        wx.showToast({ icon: 'none', title: '请填写岗位基础信息' });
        return;
      }
      if (this.data.jobTags.薪资待遇 === '自定义薪资') {
        const min = Number(this.data.jobCustom.自定义最低薪资);
        const max = Number(this.data.jobCustom.自定义最高薪资);
        if (!min || !max || min > max) {
          wx.showToast({ icon: 'none', title: '请完善自定义薪资' });
          return;
        }
      }
    } else {
      const form = this.data.formData.forumForm;
      if (!form.标题 || !form.正文) {
        wx.showToast({ icon: 'none', title: '请填写帖子标题和正文' });
        return;
      }
    }

    wx.showToast({ icon: 'success', title: '已提交审核' });
    const target = type === 'forum' ? '/pages/forum/index' : '/pages/discover/index';
    setTimeout(() => {
      wx.switchTab({ url: target });
    }, 800);
  }
});
