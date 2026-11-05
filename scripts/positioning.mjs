const industrySource = 'https://www.microsoft.com/en-us/security/security-insider/threat-landscape/2026-digital-defense-report';

export function industryBackground() {
  const lanes = [
    {className:'process-manual', label:'传统串行流程', note:'依赖人工逐步衔接', steps:['告警出现','人工研判','工单流转','跨团队处置','修复复测']},
    {className:'process-native', label:'AI 原生闭环', note:'在既定策略下自动运行', steps:['识别与解析','自动自查','策略生成与验证','防御执行','结果回流']}
  ];
  return `<section class="section era-section" id="ai-era"><div class="wrap"><div class="section-head"><div><div class="kicker">THE AI ERA DEMANDS A NEW DEFENSE</div><h2>当攻击以秒推进，<br>防御必须跟上。</h2></div><p>AI 正在加速漏洞发现、攻击编排与执行。仍依赖人工研判、工单流转与逐级处置的防御流程，正在面对更紧迫的响应窗口。</p></div><div class="era-evidence"><div class="era-signal"><strong>秒级</strong><span>攻击链部分环节的执行速度</span></div><div><p>微软 2026 数字防御报告指出，AI 已将攻击链的部分环节从数天压缩到秒级。</p><a href="${industrySource}" target="_blank" rel="noopener noreferrer">行业观察 · Microsoft Digital Defense Report 2026 ↗<span class="sr-only">（在新窗口打开）</span></a></div></div><div class="defense-process" aria-label="传统串行流程与 AI 原生闭环的工作方式对照">${lanes.map(lane=>`<div class="process-lane ${lane.className}"><div class="process-label"><h3>${lane.label}</h3><p>${lane.note}</p></div><ol>${lane.steps.map((step,i)=>`<li><span class="process-number">0${i+1}</span><span>${step}</span>${i<4?'<i aria-hidden="true">→</i>':'<i aria-hidden="true">↻</i>'}</li>`).join('')}</ol></div>`).join('')}</div><p class="era-outcome">让发现自动进入验证，让验证驱动防御，让结果持续回流。企业设定目标、权限与处置策略，四锋在既定边界内持续运行。</p></div></section>`;
}

export function companyBackground() {
  return `<section class="section company-background"><div class="wrap split"><div><div class="kicker">WHY WE BUILD</div><h2>AI 改变了攻击，<br>也必须重构防御。</h2></div><div><p>攻击者正在用 AI 加速漏洞发现、编排攻击路径并自动执行。与此同时，企业的模型、智能体和工具链也成为需要保护的新资产。</p><p>当防御仍需要人工逐步串联告警、分析、验证和处置，信息就很难及时转化为行动。智锋以 AI 为产品设计的起点，将推理、规划、执行与反馈融为一体，构建面向 AI 时代的全自动闭环防御。</p><a class="company-source" href="${industrySource}" target="_blank" rel="noopener noreferrer">了解行业背景 · 微软 2026 数字防御报告 ↗<span class="sr-only">（在新窗口打开）</span></a></div></div></section>`;
}
