const interfaceViews = {
  dongfeng: {
    title: '选择审计深度，保留每一步依据。',
    intro: '在同一任务中配置分析档位与增量模式，再沿阶段状态查看发现、复核和报告。',
    points: [
      ['按目标选择深度', '快速、标准与深度档位，匹配不同范围和分析需求。'],
      ['沿用已有结论', '增量模式关联上轮任务，在适用范围内复用审计结果。'],
      ['过程与交付相连', '从阶段产物追踪问题证据，再将结论交给研发与安全团队。']
    ],
    file: 'dongfeng-analysis', width: 1600, height: 1000,
    alt: '洞锋真实控制台：分析档位选择与沿用上轮任务结论的增量模式',
    caption: '洞锋 · 分析档位与增量模式'
  },
  shenfeng: {
    title: '工具与风险规则，随任务配置。',
    intro: '先明确授权目标，再选择可用工具和风险判别方式，让自动执行遵循本次任务的边界。',
    points: [
      ['工具按需启用', '终端、浏览器、脚本、代理抓包等工具，按任务选择。'],
      ['风险分层判断', '组合关键字规则、模型语义判别及终端与脚本调用的人工审批。'],
      ['结果集中复核', '在运行工作台查看执行与图谱，关联漏洞详情、PoC 和验证结果。']
    ],
    file: 'shenfeng-controls', width: 1440, height: 900,
    alt: '渗锋真实控制台：智能体工具开关、模型配置和风险判别选项',
    caption: '渗锋 · 工具集与风险判别'
  }
};

export function productExperience(p) {
  if (p.id === 'xinfeng') return xinfengAccess();
  const view = interfaceViews[p.id];
  if (!view) return '';
  const original = `/assets/interfaces/${view.file}.${p.id === 'dongfeng' ? 'jpg' : 'png'}`;
  return `<section class="section pale product-experience" id="product-interface"><div class="wrap"><div class="section-head"><div><div class="kicker">PRODUCT IN USE / 产品实景</div><h2>${view.title}</h2></div><p>${view.intro}</p></div><div class="experience-layout"><div class="experience-points">${view.points.map((item,i)=>`<article><span>0${i+1}</span><h3>${item[0]}</h3><p>${item[1]}</p></article>`).join('')}</div><figure class="product-interface"><a href="${original}" target="_blank" rel="noopener" aria-label="放大${view.caption}（在新窗口打开）"><img src="/assets/interfaces/${view.file}-${view.width}.webp" srcset="/assets/interfaces/${view.file}-800.webp 800w, /assets/interfaces/${view.file}-${view.width}.webp ${view.width}w" sizes="(max-width: 900px) 92vw, 65vw" width="${view.width}" height="${view.height}" alt="${view.alt}" loading="lazy" decoding="async"></a><figcaption><strong>${view.caption}</strong><span>点击查看原图 ↗</span></figcaption><p class="interface-note">产品手册中的演示界面，配置与界面以实际部署版本为准。</p></figure></div></div></section>`;
}

function xinfengAccess() {
  const routes = [
    ['流量镜像', '同步请求、响应与运行日志，持续监测并追溯风险。', '监测 · 追溯'],
    ['AI Gateway / AI Guardrails', '通过网关代理或检测 API，保护模型输入与输出。', '模型交互'],
    ['MCP Gateway', '检查工具定义、调用参数与返回结果。', '工具调用'],
    ['本地与云平台 Hook', '嵌入工具执行、知识检索与记忆读写环节。', '执行 · 知识 · 记忆']
  ];
  return `<section class="section pale product-experience" id="integration"><div class="wrap"><div class="section-head"><div><div class="kicker">FOUR WAYS IN. ONE POLICY.</div><h2>多路接入，端网协同。</h2></div><p>覆盖企业 AI 平台、业务应用、员工 PC 与本地智能体。四类接入共享身份、检测和策略能力。</p></div><div class="access-layout"><div class="access-routes">${routes.map((item,i)=>`<article class="access-route"><span class="access-number">0${i+1}</span><div><h3>${item[0]}</h3><p>${item[1]}</p></div><span class="access-label">${item[2]}</span></article>`).join('')}</div><aside class="access-center"><div class="eyebrow">信锋 / 统一安全平台</div><h3>同一任务，<br>共享安全上下文。</h3><ol><li><strong>资产与身份</strong><span>对象关联 · 分级授权</span></li><li><strong>检测与研判</strong><span>规则 · 专项检测 · 语义与行为</span></li><li><strong>策略与执行</strong><span>审批 · 阻断 · 响应联动</span></li><li><strong>运营与审计</strong><span>风险视图 · 调查追溯 · 执行回执</span></li></ol></aside></div><div class="access-context"><p><strong>资产扫描独立接入</strong>检查 Agent、MCP、Skills 的代码、依赖与凭据风险，纳入统一资产台账和上线准入。</p><p><strong>按接入位置执行处置</strong>镜像提供监测与追溯；网关和 Hook 在相应执行位置实施调用拒绝、任务中止等策略动作。</p></div></div></section>`;
}
