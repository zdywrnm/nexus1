Page({
  data: {
    identities: [
      {
        title: '个人身份 · 学生',
        status: '已核实',
        statusClass: 'success',
        desc: '教育邮箱与学籍认证完成，享受校园权益'
      },
      {
        title: '组织身份 · 星航创客工作室',
        status: '审核中',
        statusClass: 'pending',
        desc: '补充导师联系方式，预计 24 小时内完成'
      },
      {
        title: '企业联系人 · 益心公益',
        status: '已通过',
        statusClass: 'success',
        desc: '工商与联系方式双重核验'
      },
      {
        title: '风险提示',
        status: '需关注',
        statusClass: 'alert',
        desc: '1 条项目延迟待沟通，建议跟进'
      }
    ],
    experience: [
      {
        title: 'XR 沉浸式导览项目 PM',
        score: 'A+',
        detail: '负责里程碑拆解与验收设计，获得企业导师推荐',
        tags: ['体验设计', '项目管理', '托管支付']
      },
      {
        title: 'AI 产品运营实验负责人',
        score: 'A',
        detail: '搭建增长模型并完成 3 次实验复盘，团队获评优',
        tags: ['增长分析', 'A/B 测试', '导师辅导']
      }
    ],
    growth: [
      { title: '信用分', value: '865', desc: '近 6 个月稳定提升 +35' },
      { title: '徽章', value: '8 枚', desc: '含 2 枚公益贡献徽章' },
      { title: '积分', value: '3,200', desc: '可兑换培训、云资源等权益' }
    ],
    finance: [
      { title: '托管余额', value: '¥8,600', desc: '含 2 个项目在托管中' },
      { title: '已结算', value: '¥42,300', desc: '近 12 个月结算，服务费率 7%' },
      { title: '发票申请', value: '待开 2 张', desc: '支持电子发票下载' },
      { title: '服务费等级', value: '7%', desc: '信用等级提升后自动降低' }
    ],
    settings: [
      { title: '通知与隐私', desc: '控制消息推送、黑名单、隐私范围' },
      { title: '协议与合规', desc: '查看平台协议、风控规范、仲裁规则' },
      { title: '帮助与客服', desc: '获取操作指引，7×24 小时在线支持' }
    ]
  }
});
