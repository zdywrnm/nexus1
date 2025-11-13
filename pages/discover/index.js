const PROJECT_OPTIONS = {
  项目类型: ['商业类', '技术类', '设计类', '内容类', '教育类', '工程类', '公益类', '服务类'],
  工作方式: ['不限', '线上', '线下', '混合'],
  工作城市: ['北京', '上海', '深圳', '广州', '杭州'],
  认证企业: ['不限', '仅看认证企业'],
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

const JOB_OPTIONS = {
  学历要求: ['不限', '大专', '本科', '硕士', '博士', '中专/中技', '高中', '初中及以下'],
  福利待遇: [
    '周末双休',
    '五险一金',
    '8小时工作制',
    '五险',
    '弹性工作制',
    '房补',
    '底薪加提成',
    '带薪年假',
    '餐补',
    '年终奖'
  ],
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
    '4S店/后市场', '交通运输/物流', '同城货运', '即时配送', '快递', '公路物流', '跨境物流', '装卸搬运和仓储业', '客运服务',
    '港口/铁路/公路/机场', '交通/运输', '物流/仓储', '能源/化工/环保', '光伏', '储能', '动力电池', '风电', '其他新能源', '环保', '化工',
    '电力/热力/燃气/水利', '石油/石化', '矿产/地质', '采掘/冶炼', '新能源', '金融', '互联网金融', '银行', '投资/融资', '证券/期货', '基金',
    '保险', '租赁/拍卖/典当/担保', '信托', '财富管理', '其他金融业', '政府/非盈利机构/其他', '农/林/牧/渔', '非盈利机构', '政府/公共事业',
    '其他行业'
  ]
};

const PROJECT_LIST = [
  {
    id: 'project-1',
    项目名称: 'XR 沉浸式课程共创',
    项目类型: ['教育类', '内容类'],
    工作方式: '线上',
    工作城市: '',
    认证企业: true,
    开始时间: '立即',
    项目时长: '1-4周',
    每天工作时长: '4-6小时',
    自定义每天工作时长: null,
    每周参与天数: '≥3天',
    结算方式: '阶段性薪水',
    日薪区间: '不限',
    总额区间: '1000-3000',
    学历要求: '本科',
    接受年级: ['大二', '大三'],
    培训支持: '有培训',
    福利待遇: ['餐补', '住宿'],
    简介: '导师陪伴与远程研讨，提供校企认证凭证。'
  },
  {
    id: 'project-2',
    项目名称: '新能源工厂数据采集',
    项目类型: ['工程类', '技术类'],
    工作方式: '线下',
    工作城市: '上海',
    认证企业: true,
    开始时间: '本周内',
    项目时长: '＞1月',
    每天工作时长: '≥6小时',
    自定义每天工作时长: null,
    每周参与天数: '≥5天',
    结算方式: '日薪',
    日薪区间: '200-300',
    总额区间: '不限',
    学历要求: '硕士',
    接受年级: ['大三', '大四'],
    培训支持: '无培训',
    福利待遇: ['交通补贴', '住宿'],
    简介: '进厂完成传感部署与数据校验，提供差旅补贴。'
  },
  {
    id: 'project-3',
    项目名称: '社区健康服务优化',
    项目类型: ['服务类', '公益类'],
    工作方式: '混合',
    工作城市: '杭州',
    认证企业: false,
    开始时间: '本月内',
    项目时长: '1-4周',
    每天工作时长: '自定义',
    自定义每天工作时长: 3,
    每周参与天数: '≥1天',
    结算方式: '完成后一次性',
    日薪区间: '不限',
    总额区间: '200-500',
    学历要求: '不限',
    接受年级: [],
    培训支持: '有培训',
    福利待遇: ['餐补'],
    简介: '为社区健康站设计信息指引，提供线上培训。'
  }
];

const JOB_LIST = [
  {
    id: 'job-1',
    岗位名称: 'AI 产品运营实习生',
    学历要求: '本科',
    福利待遇: ['周末双休', '五险一金', '餐补'],
    薪资待遇: '5-7K',
    自定义最低薪资: null,
    自定义最高薪资: null,
    经验要求: '在校生',
    公司规模: '100-499人',
    BOSS活跃状态: '本周活跃',
    融资阶段: 'A轮',
    所属行业: ['互联网/AI', '在线教育'],
    认证企业: true,
    城市: '上海',
    简介: '导师双人制辅导，提供培训签到与转正机会。'
  },
  {
    id: 'job-2',
    岗位名称: '低代码交付工程师',
    学历要求: '本科',
    福利待遇: ['弹性工作制', '年终奖'],
    薪资待遇: '12K以上',
    自定义最低薪资: null,
    自定义最高薪资: null,
    经验要求: '应届生',
    公司规模: '500-999人',
    BOSS活跃状态: '今日活跃',
    融资阶段: 'B轮',
    所属行业: ['企业服务', '计算机软件', '云计算'],
    认证企业: true,
    城市: '深圳',
    简介: '支持差旅补贴与导师陪跑，提供预算托管。'
  },
  {
    id: 'job-3',
    岗位名称: '公益数据分析志愿者',
    学历要求: '不限',
    福利待遇: ['周末双休'],
    薪资待遇: '自定义薪资',
    自定义最低薪资: 2,
    自定义最高薪资: 3,
    经验要求: '在校生',
    公司规模: '0-20人',
    BOSS活跃状态: '3日内活跃',
    融资阶段: '不需要融资',
    所属行业: ['非盈利机构', '大数据', '政府/公共事业'],
    认证企业: false,
    城市: '远程',
    简介: '提供公益证明与能力评估反馈。'
  }
];

Page({
  data: {
    activeCategory: 'project',
    projectOptions: PROJECT_OPTIONS,
    jobOptions: JOB_OPTIONS,
    historyHint: '已优先展示匹配你技能画像的认证项目',
    projectFilters: {
      项目类型: [],
      工作方式: '不限',
      工作城市: '',
      认证企业: '不限',
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
    jobFilters: {
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
    projectResults: PROJECT_LIST,
    jobResults: JOB_LIST,
    displayList: []
  },

  onLoad() {
    this.updateResults();
  },

  onSwitchCategory(event) {
    const key = event.currentTarget.dataset.key;
    if (!key || key === this.data.activeCategory) return;
    this.setData({ activeCategory: key }, () => {
      this.updateResults();
    });
  },

  onToggleProjectMulti(event) {
    const field = event.currentTarget.dataset.field;
    const value = event.currentTarget.dataset.value;
    if (!field || value === undefined) return;
    const current = new Set(this.data.projectFilters[field] || []);
    if (current.has(value)) {
      current.delete(value);
    } else {
      current.add(value);
    }
    this.setData({ [`projectFilters.${field}`]: Array.from(current) }, () => {
      this.updateResults();
    });
  },

  onSelectProjectSingle(event) {
    const field = event.currentTarget.dataset.field;
    const value = event.currentTarget.dataset.value;
    if (!field || value === undefined) return;
    const current = this.data.projectFilters[field];
    if (current === value) return;
    this.setData({ [`projectFilters.${field}`]: value }, () => {
      if (field === '每天工作时长' && value !== '自定义') {
        this.setData({ 'projectCustom.自定义每天工作时长': '' });
      }
      if (field === '结算方式') {
        if (value !== '日薪') {
          this.setData({ 'projectFilters.日薪区间': '不限' });
        }
        if (value !== '阶段性薪水' && value !== '完成后一次性') {
          this.setData({ 'projectFilters.总额区间': '不限' });
        }
      }
      this.updateResults();
    });
  },

  onSelectProjectCity(event) {
    const value = event.currentTarget.dataset.value;
    const current = this.data.projectFilters['工作城市'];
    const next = current === value ? '' : value;
    this.setData({ 'projectFilters.工作城市': next }, () => {
      this.updateResults();
    });
  },

  onProjectCustomInput(event) {
    const value = event.detail.value;
    this.setData({ 'projectCustom.自定义每天工作时长': value }, () => {
      this.updateResults();
    });
  },

  onToggleJobMulti(event) {
    const field = event.currentTarget.dataset.field;
    const value = event.currentTarget.dataset.value;
    if (!field || value === undefined) return;
    if (field === '所属行业') {
      const currentList = this.data.jobFilters[field] || [];
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
      this.setData({ [`jobFilters.${field}`]: Array.from(set) }, () => {
        this.updateResults();
      });
      return;
    }
    const current = new Set(this.data.jobFilters[field] || []);
    if (current.has(value)) {
      current.delete(value);
    } else {
      current.add(value);
    }
    this.setData({ [`jobFilters.${field}`]: Array.from(current) }, () => {
      this.updateResults();
    });
  },

  onSelectJobSingle(event) {
    const field = event.currentTarget.dataset.field;
    const value = event.currentTarget.dataset.value;
    if (!field || value === undefined) return;
    const current = this.data.jobFilters[field];
    if (current === value) return;
    this.setData({ [`jobFilters.${field}`]: value }, () => {
      if (field === '薪资待遇' && value !== '自定义薪资') {
        this.setData({ 'jobCustom.自定义最低薪资': '', 'jobCustom.自定义最高薪资': '' });
      }
      this.updateResults();
    });
  },

  onJobCustomInput(event) {
    const field = event.currentTarget.dataset.field;
    if (!field) return;
    const value = event.detail.value;
    this.setData({ [`jobCustom.${field}`]: value }, () => {
      this.updateResults();
    });
  },

  onResetFilters() {
    const base = {
      项目类型: [],
      工作方式: '不限',
      工作城市: '',
      认证企业: '不限',
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
    };
    const jobBase = {
      学历要求: '不限',
      福利待遇: [],
      薪资待遇: '不限',
      经验要求: '不限',
      公司规模: '不限',
      BOSS活跃状态: '不限',
      融资阶段: '不限',
      所属行业: []
    };
    this.setData({
      projectFilters: base,
      jobFilters: jobBase,
      projectCustom: { 自定义每天工作时长: '' },
      jobCustom: { 自定义最低薪资: '', 自定义最高薪资: '' }
    }, () => {
      this.updateResults();
    });
  },

  onSmartRecommend() {
    wx.showToast({ icon: 'none', title: '已基于画像刷新推荐' });
  },

  updateResults() {
    if (this.data.activeCategory === 'project') {
      const list = PROJECT_LIST.filter((item) => this.matchProject(item));
      this.setData({ displayList: list });
    } else {
      const list = JOB_LIST.filter((item) => this.matchJob(item));
      this.setData({ displayList: list });
    }
  },

  matchProject(item) {
    const filters = this.data.projectFilters;
    const custom = this.data.projectCustom;
    if (filters.项目类型.length && !filters.项目类型.every((value) => item.项目类型.includes(value))) {
      return false;
    }
    if (filters.工作方式 !== '不限' && item.工作方式 !== filters.工作方式) {
      return false;
    }
    if (filters.工作城市 && item.工作城市 !== filters.工作城市) {
      return false;
    }
    if (filters.认证企业 === '仅看认证企业' && !item.认证企业) {
      return false;
    }
    if (filters.开始时间 !== '不限' && item.开始时间 !== filters.开始时间) {
      return false;
    }
    if (filters.项目时长 !== '不限' && item.项目时长 !== filters.项目时长) {
      return false;
    }
    if (filters.每天工作时长 === '自定义') {
      const value = Number(custom.自定义每天工作时长);
      if (!value || item.自定义每天工作时长 !== value) {
        return false;
      }
    } else if (filters.每天工作时长 !== '不限' && item.每天工作时长 !== filters.每天工作时长) {
      return false;
    }
    if (filters.每周参与天数 !== '不限' && item.每周参与天数 !== filters.每周参与天数) {
      return false;
    }
    if (filters.结算方式 !== '不限' && item.结算方式 !== filters.结算方式) {
      return false;
    }
    if (filters.结算方式 === '日薪' && filters.日薪区间 !== '不限' && item.日薪区间 !== filters.日薪区间) {
      return false;
    }
    if (
      (filters.结算方式 === '阶段性薪水' || filters.结算方式 === '完成后一次性') &&
      filters.总额区间 !== '不限' &&
      item.总额区间 !== filters.总额区间
    ) {
      return false;
    }
    if (filters.学历要求 !== '不限' && item.学历要求 !== filters.学历要求) {
      return false;
    }
    if (filters.接受年级.length && !filters.接受年级.every((value) => item.接受年级.includes(value))) {
      return false;
    }
    if (filters.培训支持 !== '不限' && item.培训支持 !== filters.培训支持) {
      return false;
    }
    if (filters.福利待遇.length && !filters.福利待遇.every((value) => item.福利待遇.includes(value))) {
      return false;
    }
    return true;
  },

  matchJob(item) {
    const filters = this.data.jobFilters;
    const custom = this.data.jobCustom;
    if (filters.学历要求 !== '不限' && item.学历要求 !== filters.学历要求) {
      return false;
    }
    if (filters.福利待遇.length && !filters.福利待遇.every((value) => item.福利待遇.includes(value))) {
      return false;
    }
    if (filters.薪资待遇 === '自定义薪资') {
      const min = Number(custom.自定义最低薪资);
      const max = Number(custom.自定义最高薪资);
      if (!min || !max) {
        return false;
      }
      if (item.薪资待遇 !== '自定义薪资') {
        return false;
      }
      if (Number(item.自定义最低薪资) < min || Number(item.自定义最高薪资) > max) {
        return false;
      }
    } else if (filters.薪资待遇 !== '不限' && item.薪资待遇 !== filters.薪资待遇) {
      return false;
    }
    if (filters.经验要求 !== '不限' && item.经验要求 !== filters.经验要求) {
      return false;
    }
    if (filters.公司规模 !== '不限' && item.公司规模 !== filters.公司规模) {
      return false;
    }
    if (filters.BOSS活跃状态 !== '不限' && item.BOSS活跃状态 !== filters.BOSS活跃状态) {
      return false;
    }
    if (filters.融资阶段 !== '不限' && item.融资阶段 !== filters.融资阶段) {
      return false;
    }
    if (filters.所属行业.length && !filters.所属行业.every((value) => item.所属行业.includes(value))) {
      return false;
    }
    return true;
  }
});
