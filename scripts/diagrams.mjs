// Product mechanisms are diagrams, not screenshots or measured customer results.
// Sources: 技术PPT slides 11–27 and the owner's 2026-11-05 clarification:
// 御锋 has continuous defense AND external situational-awareness-driven self-checks.
let serial=0;
const chips=items=>`<div class="mechanism-inputs">${items.map(x=>`<span>${x}</span>`).join('')}</div>`;
const down=label=>`<div class="mechanism-transfer"><span>${label}</span><i aria-hidden="true">↓</i></div>`;
const output=(title,items)=>`<div class="mechanism-output"><span class="mechanism-label">交付结果</span><strong>${title}</strong><div>${items.map(x=>`<span>${x}</span>`).join('')}</div></div>`;
function graph(id,kind){
  const uid=`mechanism-${id}-${++serial}`;
  const node=(x,y,w,label,cls='')=>`<g class="graph-node ${cls}"><rect x="${x}" y="${y}" width="${w}" height="48" rx="5"/><text x="${x+w/2}" y="${y+30}" text-anchor="middle">${label}</text></g>`;
  let content,desc;
  if(kind==='code'){
    desc='从外部输入追踪入口函数和跨组件调用，到敏感操作；多智能体审计复核漏洞根因。图示以缺少边界校验为例。';
    content=`<path class="graph-muted-path" d="M64 92V34H254V68 M64 116V180H436V116"/><path class="graph-path" marker-end="url(#${uid}-arrow)" d="M110 92H133 M255 92H284 M422 92H452"/>${node(0,68,110,'外部输入')}${node(139,68,116,'入口函数')}${node(290,68,132,'跨组件调用')}${node(458,68,122,'敏感操作','risk')}<circle class="graph-junction" cx="64" cy="34" r="4"/><circle class="graph-junction" cx="254" cy="180" r="4"/><text class="graph-muted-text" x="106" y="28">调用关系与依赖上下文</text><path class="graph-risk-path" d="M443 101V145H405"/><text class="graph-risk-text" x="175" y="151">示例：缺少边界校验</text><text class="graph-small-text" x="290" y="218" text-anchor="middle">多智能体分析 → 根因与触发条件复核</text>`;
  } else {
    desc='在授权范围内，沿入口、权限边界和业务目标验证攻击路径。证据不足的分支停止晋级，结论由请求、响应及日志复核。';
    content=`<path class="graph-path" marker-end="url(#${uid}-arrow)" d="M142 68H220 M362 68H433"/>${node(0,44,142,'目标入口')}${node(226,44,136,'权限边界')}${node(439,44,141,'业务目标','verified')}<text class="graph-small-text" x="182" y="34" text-anchor="middle">受控验证</text><text class="graph-small-text" x="402" y="34" text-anchor="middle">影响确认</text><path class="graph-risk-path" stroke-dasharray="5 6" d="M72 92V163H218"/>${node(226,139,136,'证据不足','muted')}<path class="graph-risk-path" d="m386 155 16 16m0-16-16 16"/><text class="graph-risk-text" x="430" y="171">停止晋级</text><text class="graph-small-text" x="290" y="226" text-anchor="middle">请求 / 响应 / 日志 · 交叉复核</text>`;
  }
  return `<svg class="mechanism-graph" viewBox="0 0 580 244" role="img" aria-labelledby="${uid}-title ${uid}-desc"><title id="${uid}-title">${kind==='code'?'漏洞根因追踪':'授权攻击路径验证'}</title><desc id="${uid}-desc">${desc}</desc><defs><marker id="${uid}-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M1 1 9 5 1 9" fill="none" stroke="#70d7ef" stroke-width="1.5"/></marker></defs>${content}</svg>`;
}
const definitions={
  dongfeng:{title:'从代码关系，定位漏洞根因',body:()=>`${chips(['源码仓库','二进制 / 组件','服务接口'])}${down('建立全局事实索引')}<div class="mechanism-stage"><div class="mechanism-stage-head"><span>根因追踪</span><small>路径示意</small></div>${graph('dongfeng','code')}</div>${down('证据验证')}${output('可复核的漏洞证据包',['位置与根因','触发条件','修复建议'])}`},
  shenfeng:{title:'让攻击路径，经得起实战验证',body:()=>`<div class="scope-boundary"><span>授权边界</span><strong>目标资产 · 测试账号 · 禁测规则</strong></div>${down('在约定范围内开展验证')}<div class="mechanism-stage"><div class="mechanism-stage-head"><span>多路径探索</span><small>路径示意</small></div>${graph('shenfeng','path')}</div>${down('结论携证晋级')}${output('可复现的攻击路径',['验证步骤','真实影响','整改优先级'])}`},
  xinfeng:{title:'每一次调用，都经过策略判断',body:()=>`${chips(['Agent','MCP / Skills','模型调用'])}${down('资产与调用关系')}<div class="policy-engine"><span class="mechanism-label">信锋 · 零信任策略</span><strong>身份 × 权限 × 上下文</strong><p>上线前评测 · 运行时检查</p></div><div class="policy-branches"><div class="policy-branch allow"><span class="branch-line" aria-hidden="true">↓</span><b>符合策略 · 放行</b><p>模型 / 工具 / 企业数据</p></div><div class="policy-branch deny"><span class="branch-line" aria-hidden="true">↓</span><b>越权 / 外传 · 截断</b><p>高风险调用进入审计</p></div></div>${output('调用全程可追溯',['调用链','策略决策','处置记录'])}`},
  yufeng:{title:'持续防护 + 外部威胁驱动自查',body:()=>`<div class="defense-route defense-route-continuous"><div class="defense-route-title"><i>01</i><strong>持续风险防护</strong></div><div class="defense-inline-flow"><span>三锋风险证据</span><i>→</i><span>御锋关联风险</span><i>→</i><span>防护与修复</span></div></div><div class="defense-route defense-route-external"><div class="defense-route-title"><i>02</i><strong>外部威胁驱动自查</strong></div><div class="external-source"><strong>外部态势感知系统</strong><span>外部攻击方式 · 新漏洞</span></div>${down('对接与输入')}<div class="defense-analysis"><span class="mechanism-label">御锋 · 自动分析与解析</span><strong>解析攻击方式与新漏洞</strong></div>${down('自动调用三锋自查')}<div class="self-check-products"><div><b>洞锋</b><span>漏洞自查</span></div><div><b>渗锋</b><span>路径验证</span></div><div><b>信锋</b><span>AI 风险自查</span></div></div><div class="self-check-return"><i aria-hidden="true">↓</i><strong>自查结果自动回流御锋</strong></div><div class="vulnerability-defense"><span>御锋 · 生成并验证针对性策略</span><strong>带洞运行防御</strong><p>在线拦截 · OTA 热补丁 · 效果复测</p></div></div><div class="execution-note">持续防护与新威胁响应协同 · 后续冷补丁修复根因</div>`}
};
export function productDiagram(p){
  const d=definitions[p.id];
  return `<figure class="mechanism mechanism-${p.id}" aria-label="${p.name}工作原理"><figcaption class="mechanism-header"><span>${p.name} / ${p.en}</span><span>能力示意</span></figcaption><h3 class="mechanism-title">${d.title}</h3><div class="mechanism-body">${d.body()}</div></figure>`;
}

function collaborationDetails(){
  return `<figure class="collaboration-diagram" aria-label="以御锋为防御核心的四锋协作图">
    <figcaption class="collab-caption"><span>四锋协作架构</span><span>御锋的两条防御链路</span></figcaption>
    <div class="collab-track-title"><b>01</b><h3>持续风险防护</h3><p>三锋证据汇入御锋，驱动防护与修复</p></div>
    <div class="collab-body">
      <div class="collab-supports">
        <a class="collab-product" href="/products/dongfeng/"><span class="collab-product-top"><b>洞锋</b><small>发现漏洞 ↗</small></span><p>根因 · 触发条件 · 漏洞证据</p></a>
        <a class="collab-product" href="/products/shenfeng/"><span class="collab-product-top"><b>渗锋</b><small>验证风险 ↗</small></span><p>攻击路径 · 可达性 · 真实影响</p></a>
        <a class="collab-product" href="/products/xinfeng/"><span class="collab-product-top"><b>信锋</b><small>管控 AI ↗</small></span><p>AI 资产风险 · 调用审计 · 截断记录</p></a>
      </div>
      <div class="collab-merge" aria-label="三锋风险证据汇入御锋"><span>风险证据</span><i aria-hidden="true">→</i></div>
      <div class="collab-core"><a href="/products/yufeng/"><span class="collab-core-label">防御核心</span><h3>御锋 <span>↗</span></h3></a><p>关联业务资产与三锋证据</p><ol><li><i>01</i>关联风险</li><li><i>02</i>生成策略</li><li><i>03</i>独立验证</li><li><i>04</i>分级执行</li></ol><div class="collab-core-foot">动作可追溯 · 策略可回滚</div></div>
      <div class="collab-action-arrow" aria-hidden="true"><span>执行</span>→</div>
      <div class="collab-outcomes"><span class="collab-outcomes-label">业务防护与修复</span><div><b>在线拦截</b><p>切断攻击路径</p></div><div><b>OTA 热补丁</b><p>先控制风险</p></div><div><b>闲时冷补丁</b><p>修复漏洞根因</p></div></div>
    </div>
    <div class="collab-feedback"><i aria-hidden="true">↶</i><span>处置结果与复测证据回流，更新共享事实与后续策略</span><i aria-hidden="true">↙</i></div>
    <section class="collab-external" aria-label="外部威胁驱动的自动自查与带洞运行防御">
      <div class="collab-track-title"><b>02</b><h3>外部威胁驱动自查</h3><p>从外部新威胁，自动推进到本地自查与防御</p></div>
      <div class="threat-chain">
        <div class="threat-node threat-source"><span class="threat-node-label">外部输入</span><h4>外部态势感知系统</h4><p>外部攻击方式<br>新漏洞</p></div>
        <div class="threat-arrow"><span>对接</span><i aria-hidden="true">→</i></div>
        <div class="threat-node threat-analysis"><span class="threat-node-label">御锋 · 威胁解析</span><h4>自动分析与解析</h4><p>解析攻击方式与新漏洞<br>发起三锋自查</p></div>
        <div class="threat-arrow"><span>自动调用</span><i aria-hidden="true">→</i></div>
        <div class="threat-node threat-checks"><span class="threat-node-label">洞锋 / 渗锋 / 信锋</span><h4>三锋自动自查</h4><ul><li><b>洞锋</b><span>漏洞自查</span></li><li><b>渗锋</b><span>路径验证</span></li><li><b>信锋</b><span>AI 风险自查</span></li></ul></div>
        <div class="threat-arrow threat-return"><span>结果自动回流</span><i aria-hidden="true">→</i></div>
        <div class="threat-node threat-defense"><span class="threat-node-label">御锋 · 防御执行</span><h4>带洞运行防御</h4><p>生成针对性策略<br>在线拦截 · OTA 热补丁</p><strong>基于自查结果开展防御</strong></div>
      </div>
    </section>
    <div class="collab-foundation"><div><span>统一能力底座</span><strong>SecAgentOS <i>+</i> 智锋大模型</strong></div><p>共享事实 · 任务编排 · 长程记忆 · 证据验证 · 安全推理</p></div>
    <p class="collab-footnote">御锋自动编排洞锋、渗锋、信锋自查并接收结果；信锋同时在 AI 调用链执行独立的实时管控。</p>
  </figure>`;
}

export function collaborationDiagram(){
    return `<div class="collaboration-generated"><figure class="collab-artwork"><a href="/assets/visuals/collaboration-v3.png" target="_blank" rel="noopener" aria-label="放大四锋协作架构图（在新窗口打开）"><img src="/assets/visuals/collaboration-v3-1536.webp" srcset="/assets/visuals/collaboration-v3-768.webp 768w, /assets/visuals/collaboration-v3-1536.webp 1536w" sizes="(max-width:650px) calc(100vw - 40px), (max-width:1336px) calc(100vw - 96px), 1240px" width="1536" height="1024" loading="lazy" decoding="async" alt="四锋协作与御锋双链路：第一条由三锋汇聚风险证据到御锋，执行防护和修复并反馈复测；第二条由外部态势感知系统输入攻击方式与新漏洞，御锋自动解析并调用洞锋、渗锋、信锋自查，自查结果自动回流御锋实施带洞运行防御。两条链路共用 SecAgentOS 与智锋大模型。"></a><figcaption><span>四锋协作 · 御锋双链路</span><span>点击图片放大 ↗</span></figcaption></figure><details class="collab-flow-details"><summary>查看流程详解</summary>${collaborationDetails()}</details></div>`;
  }
