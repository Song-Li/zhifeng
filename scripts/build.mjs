import {industryBackground,companyBackground} from './positioning.mjs';
import {productExperience} from './product-experience.mjs';
import {productDiagram,collaborationDiagram} from './diagrams.mjs';
import {mkdir,writeFile} from 'node:fs/promises';
import {dirname,resolve,join} from 'node:path';
import {fileURLToPath} from 'node:url';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const arrow='<span class="arrow" aria-hidden="true">↗</span>';
const link=(url,text,cls='text-link')=>`<a class="${cls}" href="${url}">${text}${arrow}</a>`;
const kicker=s=>`<div class="kicker">${s}</div>`;
const products=[
  {
    "id": "dongfeng",
    "name": "洞锋",
    "verb": "发现",
    "en": "DISCOVER",
    "type": "AI 原生漏洞挖掘平台",
    "headline": "深入复杂系统，\n发现隐藏漏洞。",
    "intro": "面向大型源码仓库，贯通仓库索引、攻击面发现、深度审计与反驳式复核，将候选线索推进为带根因、触发条件和修复建议的证据报告。",
    "tags": [
      "全仓与增量审计",
      "反驳式复核",
      "阶段续跑"
    ],
    "short": "深入源码与组件，追踪跨文件风险，复核漏洞根因并交付证据报告。",
    "flow": [
      "接入源码，建立索引",
      "发现攻击面，聚合评分",
      "深入审计，反驳式复核",
      "交付报告，联动动态验证"
    ],
    "inputs": [
      "Git 仓库与指定分支、标签或提交",
      "ZIP、TAR.GZ、TGZ 源码包与已有快照",
      "模型服务、审计范围与可选动态验证环境"
    ],
    "outputs": [
      [
        "漏洞证据报告",
        "根因 · 触发条件 · 修复建议"
      ],
      [
        "问题证据档案",
        "关联文件 · 调用链 · 待补证据"
      ],
      [
        "分级发现结果",
        "已确认 · 条件性 · 疑似"
      ],
      [
        "可追溯任务产物",
        "阶段状态 · 日志 · 参数快照"
      ]
    ],
    "mechanisms": [
      [
        "九阶段审计流水线",
        "初始化、仓库索引、规划、攻击面、漏洞聚合、评分、审计、复核与导出，共用任务工作区和事实依据。"
      ],
      [
        "深度审计与反驳式复核",
        "围绕根因、路径与触发条件逐项补证。复核阶段对结论提出反证，区分确认、需修订与拒绝。"
      ],
      [
        "全量与增量分析",
        "按任务目标选择快速、标准或深度档位；增量模式沿用同一工作区上轮任务的适用结论。"
      ],
      [
        "阶段续跑与派生重跑",
        "从保留的阶段产物继续执行，或创建派生任务重跑并保留原任务，便于比较不同配置与结果。"
      ],
      [
        "模型与并发编排",
        "各阶段可配置模型顺序、并发档位、请求等待和失败恢复策略，匹配企业的模型服务与资源条件。"
      ],
      [
        "授权环境中的动态验证",
        "任务结束后可自动或手动下发动态验证，由渗锋在配置的授权目标环境复现，衔接白盒发现与运行验证。"
      ]
    ],
    "faq": [
      [
        "如何开始一次源码审计？",
        "配置可用模型服务后，导入 Git 仓库、上传源码压缩包或复用已有快照，选择分析与并发档位，即可创建任务。Web 控制台与 CLI 共用任务工作区。"
      ],
      [
        "是否支持增量分析与中断恢复？",
        "支持沿用同一工作区上轮任务结论的增量模式，也支持符合恢复条件的阶段续跑、未判决候选补审和派生任务重跑。恢复依赖所需源码及上下文仍被保留。"
      ],
      [
        "洞锋的复核与动态验证有什么区别？",
        "洞锋在审计流水线内完成根因分析和反驳式复核。需要在运行环境中复现时，可下发动态验证，由渗锋在指定授权环境执行；报告会区分结论状态与成立条件。"
      ],
      [
        "能否在企业内网部署？",
        "支持私有化部署，并接入企业内网模型服务。源码、分析任务与模型调用的数据边界按部署方案配置；使用外部模型 API 时，应相应配置数据使用范围。"
      ],
      [
        "除源码外，其他分析对象如何接入？",
        "产品能力覆盖二进制、服务接口与组件等方向。当前源码工作流提供明确的 Git、压缩包与快照入口；其他对象结合具体版本、分析链路和交付方案确认接入方式。"
      ]
    ],
    "workflowTitle": "九个阶段，串起一次完整审计。",
    "workflowIntro": "从源码接入到报告导出，每个阶段都保留任务状态和分析产物，支持定位问题、复核结论与继续运行。",
    "flowDetails": [
      "导入 Git 仓库、源码压缩包或已有快照；初始化工作区，建立文件、函数与调用关系，规划审计范围。",
      "发现攻击面，关联跨文件与跨模块线索，聚合候选问题，并按风险去重和排序。",
      "围绕待证明的问题展开深度审计，以反驳式评审复核结论；证据不足时进入修订或排除。",
      "导出中文漏洞发现报告；配置授权目标环境后，可联动渗锋执行动态复现，补齐运行证据。"
    ]
  },
  {
    "id": "shenfeng",
    "name": "渗锋",
    "verb": "验证",
    "en": "VALIDATE",
    "type": "AI 原生实战安全验证平台",
    "headline": "沿真实攻击路径，\n验证实际风险。",
    "intro": "面向授权目标，以单任务深度验证或批量队列开展测试。多智能体执行过程、攻击路径和验证证据集中可见，任务结束后自动归档并生成渗透报告与漏洞详情。",
    "tags": [
      "单任务与批量队列",
      "可视化渗透图谱",
      "风险判别与人工审批"
    ],
    "short": "从授权目标到可视化攻击路径，自动归档证据并交付渗透报告。",
    "flow": [
      "配置授权目标与预期成果",
      "单任务或批量调度",
      "观察执行，追踪证据",
      "归档制品，交付报告"
    ],
    "inputs": [
      "授权 URL、IP、域名、网段与测试账号",
      "环境说明、预期成果与全局范围规则",
      "模型渠道、工具集与风险判别配置"
    ],
    "outputs": [
      [
        "渗透报告",
        "任务结果 · 风险说明 · 整改建议"
      ],
      [
        "结构化漏洞详情",
        "风险等级 · CVSS · PoC"
      ],
      [
        "执行验证证据",
        "验证状态 · 执行结果 · 证据关联"
      ],
      [
        "运行过程与图谱",
        "智能体编排 · 攻击路径 · 制品归档"
      ]
    ],
    "mechanisms": [
      [
        "单任务与批量队列",
        "单个授权目标可深入验证；批量目标可导入、去重并排队调度，支持暂停新任务调度、失败项重试与顺序调整。"
      ],
      [
        "工具选择与风险判别",
        "按任务启用终端、浏览器、脚本等工具，结合关键字规则与模型语义判别控制执行；可开启终端与脚本调用的人工审批。"
      ],
      [
        "执行编排与渗透图谱",
        "查看智能体状态、工具调用和结果，以图谱关联初始信息、决策、证据与任务目标，追踪验证如何推进。"
      ],
      [
        "沙箱与任务追问",
        "通过运行工作台查看浏览器与终端沙箱、管理任务制品，并围绕项目已有结果继续追问关键发现及证据。"
      ],
      [
        "结构化报告交付",
        "自动归档执行制品，生成可下载的渗透报告与结构化漏洞详情，集中展示 PoC、复现结果和验证状态。"
      ],
      [
        "继续运行与受控扩展",
        "已完成或中断的任务可补充目标和约束继续推进。内网路径验证按授权范围、前置验证及环境条件另行配置。"
      ]
    ],
    "faq": [
      [
        "如何限定测试行为？",
        "创建任务时声明授权范围和全局规则，选择可用工具与资源限制。关键字规则、模型语义判别以及终端和脚本调用的人工审批可按任务配置。"
      ],
      [
        "能否批量评估多个目标？",
        "可将 URL、IP、域名或网段导入批量队列，自动去重并按配置调度。暂停调度会停止发放新任务，已运行任务需单独控制。"
      ],
      [
        "任务中断后如何继续？",
        "在项目详情中从相应阶段继续运行，可补充预期成果、约束和执行配置，在保留的执行记录上推进。"
      ],
      [
        "如何判断一个发现是否经过验证？",
        "漏洞详情将描述、PoC 与执行验证分别展示，保留验证状态与结果。可结合报告和执行证据复核，区分已验证发现与校验未通过的条目。"
      ],
      [
        "是否适合生产环境？",
        "应按业务约束确定测试窗口、授权动作、工具配置与审批策略。先在约定环境中验证范围和影响，再开展相应任务。"
      ]
    ],
    "workflowTitle": "从授权目标，到可复核的验证结果。",
    "workflowIntro": "明确目标信息与预期成果，配置工具和风险控制，让执行过程可观察、任务可恢复、结论可追溯。",
    "flowDetails": [
      "填写目标范围、环境说明和预期结果，配置工具集、风险规则、并发与任务时限。",
      "对单个目标深入测试，或导入 URL、IP、域名及网段形成队列，按账号额度与并发配置调度。",
      "在运行工作台查看智能体执行、渗透图谱与沙箱，按配置进行风险判别及人工审批。",
      "自动生成渗透报告与结构化漏洞详情，关联 PoC、执行验证与证据；支持模板配置和报告下载。"
    ]
  },
  {
    "id": "xinfeng",
    "name": "信锋",
    "verb": "管控",
    "en": "GOVERN",
    "type": "AI 原生智能体安全管控平台",
    "headline": "贯通企业应用，\n守护员工智能体。",
    "intro": "覆盖企业 AI 应用与员工终端，通过流量镜像、AI 网关与护栏、MCP 网关及本地与云平台 Hook，连接资产准入、运行防护、风险处置与审计追溯。",
    "tags": [
      "多路接入",
      "端网协同",
      "内容与行为防护"
    ],
    "short": "贯通企业应用与员工终端，将资产、权限、调用、数据和执行结果纳入统一管控。",
    "flow": [
      "资产发现与上线准入",
      "多路接入与风险检测",
      "统一策略与分级处置",
      "执行回执与审计优化"
    ],
    "inputs": [
      "企业 AI 应用、员工 PC 与本地智能体",
      "模型、MCP、Skills、知识与记忆资源",
      "身份权限、调用上下文、运行日志与策略"
    ],
    "outputs": [
      [
        "统一资产与关系台账",
        "来源 · 版本 · 依赖 · 调用关系"
      ],
      [
        "任务风险与策略依据",
        "身份权限 · 命中片段 · 上下文"
      ],
      [
        "分级处置与执行回执",
        "审批 · 阻断 · 中止 · 联动"
      ],
      [
        "调查与审计记录",
        "任务链路 · 操作结果 · 审计导出"
      ]
    ],
    "mechanisms": [
      [
        "模型交互与内容防护",
        "关注提示注入、任务劫持、业务边界、输出失真及多模态隐藏攻击，结合调用上下文开展检测。"
      ],
      [
        "工具与数据安全",
        "检查 MCP 工具定义、参数与返回结果，监测敏感信息外传、工具投毒、Skills 供应链及知识记忆污染。"
      ],
      [
        "身份、权限与执行约束",
        "关联用户、Agent 与执行账号，将授权绑定到工具、参数、资源和数据目的地，约束高风险操作与任务边界。"
      ],
      [
        "资产准入与变更治理",
        "关联负责人、来源版本、依赖及调用关系，将静态审查、上线准入、运行监测与异常变更复核连成流程。"
      ],
      [
        "知识与记忆防护",
        "覆盖来源校验、写入检查、检索控制和使用防护，关注恶意指令植入、敏感信息沉淀和撤权后的访问。"
      ],
      [
        "企业安全运营联动",
        "汇聚人员、任务、资产和调用链，与 SOC、SIEM、告警平台及工单体系对接，衔接风险研判和处置回执。"
      ]
    ],
    "faq": [
      [
        "企业应用和员工终端如何接入？",
        "按场景组合流量镜像、AI Gateway / AI Guardrails、MCP Gateway，以及本地与云平台 Hook。资产扫描独立接入，检测、身份和策略纳入统一平台。"
      ],
      [
        "流量镜像能直接阻断调用吗？",
        "流量镜像用于监测与追溯。调用拒绝、任务中止等动作由具备执行位置的网关或 Hook 按策略实施；接入时明确各链路的观测与处置能力。"
      ],
      [
        "如何保护 MCP、Skills 与知识库？",
        "上线前检查来源、依赖、代码、凭据和权限；运行中检查工具描述及返回投毒、权限扩张与版本变化，并在知识来源、写入、检索和使用环节实施防护。"
      ],
      [
        "如何验证防护效果？",
        "结合攻击样本、正常业务样本与场景回放，检查攻击检出、业务误拦、执行处置及性能开销，再通过复测和运营反馈调整策略。"
      ],
      [
        "可以部署在企业内网吗？",
        "支持私有化部署，结合企业身份体系、模型服务与安全运营平台接入，按企业要求配置数据、策略、审计留存和访问权限。"
      ]
    ],
    "workflowTitle": "让一次智能体任务，全程可管可查。",
    "workflowIntro": "资产、授权、调用、数据与回执共享上下文，将上线前评测和运行中的防护连接起来。",
    "flowDetails": [
      "梳理 Agent、模型、MCP、Skills 与知识资源，扫描代码、依赖和凭据风险，检查来源、权限与版本。",
      "通过镜像、网关、检测 API 和 Hook 接入，结合规则、专项检测以及语义与行为研判分析风险。",
      "关联身份、任务目标、工具参数、资源范围与数据去向，按策略联动审批、阻断或任务中止。",
      "将风险、策略、动作与执行结果关联到同一任务，支持调查追溯、复测、策略发布与回退。"
    ]
  },
  {
    "id": "yufeng",
    "name": "御锋",
    "verb": "防御",
    "en": "DEFEND",
    "type": "AI 原生智能防御系统",
    "headline": "持续防护，\n主动响应新威胁。",
    "intro": "持续汇聚三锋证据，执行防护与修复；对接外部态势感知系统，自动解析攻击方式和新漏洞，调用洞锋、渗锋、信锋自查，将结果回流为带洞运行的针对性防御。",
    "tags": [
      "持续风险防护",
      "外部威胁驱动自查",
      "带洞运行防御"
    ],
    "short": "持续防护与外部威胁自查双线协同，将三锋自查结果转化为带洞运行防御。",
    "workflowTitle": "外部威胁，如何变成自查与防御。",
    "workflowIntro": "在持续风险防护之外，御锋对接外部态势感知系统，自动完成从威胁解析到带洞运行防御的链路。",
    "flow": [
      "对接外部态势感知系统",
      "自动解析攻击方式与新漏洞",
      "自动调用三锋自查",
      "结果回流与带洞运行防御"
    ],
    "flowDetails": [
      "接收外部攻击方式与新漏洞信息，作为御锋分析的输入。",
      "由御锋自动分析与解析，为本地风险自查提供依据。",
      "调用洞锋开展漏洞自查、渗锋验证路径、信锋自查 AI 风险。",
      "自查结果自动回到御锋，生成并验证针对性策略，支持带洞运行防御。"
    ],
    "inputs": [
      "三锋风险证据与自查结果",
      "外部态势感知系统中的攻击方式与新漏洞",
      "业务流量、设备资产与处置日志"
    ],
    "outputs": [
      [
        "三锋自查结果",
        "漏洞证据 · 验证路径 · AI 风险"
      ],
      [
        "针对性防护策略",
        "在线拦截 · 带洞运行防御"
      ],
      [
        "补丁与修复方案",
        "OTA 热补丁 · 闲时冷补丁"
      ],
      [
        "防护效果记录",
        "动作审计 · 复测 · 回滚"
      ]
    ],
    "mechanisms": [
      [
        "持续风险防护",
        "关联三锋风险证据与业务资产，生成并验证策略，通过在线拦截、冷热补丁和复测持续保护业务。"
      ],
      [
        "外部威胁解析与三锋编排",
        "对接外部态势感知系统，由御锋自动分析攻击方式和新漏洞，解析后自动调用洞锋、渗锋、信锋开展自查。"
      ],
      [
        "结果回流与带洞运行防御",
        "三锋自查结果自动回到御锋，作为针对性防御的依据。先控制攻击路径，再衔接修复与效果验证。"
      ]
    ],
    "faq": [
      [
        "御锋与其他三锋如何协同？",
        "御锋有两条工作链：持续汇聚三锋证据开展风险防护；对接外部态势感知系统后，自动解析攻击方式和新漏洞，调用洞锋、渗锋、信锋自查，接收结果并实施带洞运行防御。"
      ],
      [
        "外部态势感知系统接入后，由谁发起自查？",
        "由御锋自动分析与解析外部攻击方式和新漏洞，并自动调用洞锋、渗锋、信锋。自查结果自动回流御锋，驱动针对性的防御策略。"
      ],
      [
        "带洞运行如何衔接后续修复？",
        "在漏洞修复完成前，依据自查结果实施针对性的在线拦截和防护，结合 OTA 热补丁先控制风险，再通过闲时冷补丁与复测推进根因修复。"
      ],
      [
        "是否需要每个请求调用大模型？",
        "在线拦截采用独立执行机制；模型参与威胁分析、策略生成等环节。具体部署时结合业务环境验证性能与适配。"
      ]
    ]
  }
];
const navItems=[['/products/','产品'],['/solutions/','解决方案'],['/technology/','核心技术'],['/research/','研究成果'],['/about/','关于智锋']];
function header(active){return `<a class="skip" href="#main">跳到主要内容</a><header class="header"><div class="nav-wrap"><a class="brand" href="/" aria-label="智锋安全首页"><img src="/assets/logos/bladesec_logo.png" width="2289" height="530" alt="Bladesec 智锋安全"></a><nav id="main-nav" class="nav" aria-label="主导航">${navItems.map(([u,t])=>`<a href="${u}" ${active===u?'class="active" aria-current="page"':''}>${t}</a>`).join('')}<a class="mobile-contact" href="/contact/">预约演示 ↗</a></nav>${link('/contact/','预约演示','btn nav-cta')}<button class="menu-toggle" aria-label="打开导航菜单" aria-controls="main-nav" aria-expanded="false"><span></span><span></span></button></div></header>`;}
function footer(){return `<footer class="footer"><div class="wrap"><div class="footer-main"><div><img class="footer-brand" src="/assets/logos/bladesec_logo.png" width="2289" height="530" alt="Bladesec 智锋安全" loading="lazy"><p>AI 原生，全自动闭环防御。<br>面向 AI 时代，持续守护业务安全。</p></div><div><h3>产品体系</h3><div class="footer-links">${products.map(p=>`<a href="/products/${p.id}/">${p.name} · ${p.verb}</a>`).join('')}</div></div><div><h3>探索智锋</h3><div class="footer-links"><a href="/technology/">核心技术</a><a href="/research/">研究成果</a><a href="/cases/">验证与交付</a><a href="/about/">关于智锋</a></div></div><div><h3>与我们交流</h3><a class="footer-email" href="mailto:contact@bladesec.ai">contact@bladesec.ai ↗</a><p style="margin-top:13px">产品演示 · 部署咨询 · 技术合作</p></div></div><div class="footer-bottom"><span>© 2026 杭州智锋安全科技有限公司</span><span>BLADESEC &nbsp; / &nbsp; AI NATIVE SECURITY</span></div></div></footer>`;}
function cta(){return `<section class="contact-band" id="contact"><div class="wrap"><div>${kicker('DEFENSE FOR THE AI ERA')}<h2>迎接 AI 安全新时代。</h2><p>从您的业务场景出发，构建全自动闭环防御能力。</p></div><div class="actions">${link('/contact/','预约产品演示','btn blue')}</div></div></section>`;}
function shell(title,description,body,path,active=''){return `<!DOCTYPE html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(title)}｜智锋安全 Bladesec</title><meta name="description" content="${esc(description)}"><meta name="theme-color" content="#10233c"><link rel="canonical" href="https://bladesec.ai${path}"><meta property="og:type" content="website"><meta property="og:locale" content="zh_CN"><meta property="og:title" content="${esc(title)}｜智锋安全"><meta property="og:description" content="${esc(description)}"><meta property="og:url" content="https://bladesec.ai${path}"><meta property="og:image" content="https://bladesec.ai/assets/visuals/hero-v2-1536.webp"><link rel="icon" href="/favicon.ico"><link rel="apple-touch-icon" href="/apple-touch-icon.png"><link rel="manifest" href="/site.webmanifest"><link rel="stylesheet" href="/assets/site.css"><link rel="stylesheet" href="/assets/diagrams.css"><script defer src="/assets/site.js"></script></head><body>${header(active)}<main id="main">${body}</main>${footer()}</body></html>`;}
function productArt(p){return productDiagram(p);}
function stack(){return collaborationDiagram();}
const research=[['IEEE S&P 2025','Follow My Flow','客户端原型污染与可利用链研究 · 杰出论文奖','https://sp2025.ieee-security.org/awards.html'],['ACM CCS 2023','CoCo','浏览器扩展漏洞检测研究 · 杰出论文奖','https://sigsac.org/ccs/CCS_awards/ccs-bestpaper.html'],['USENIX SECURITY 2022','ODGen','基于对象依赖图与查询的 Node.js 漏洞发现','https://www.usenix.org/conference/usenixsecurity22/presentation/li-song']];
function researchRows(){return `<div class="research-list">${research.map(r=>`<a class="research-row" href="${r[3]}" target="_blank" rel="noopener noreferrer"><span class="venue">${r[0]}</span><div><h3>${r[1]}</h3><p>${r[2]}</p></div>${arrow}<span class="sr-only">（在新窗口打开会议官方页面）</span></a>`).join('')}</div>`;}
function icon(n){const paths=['<path d="M5 25V9l10-5 10 5v16M10 25v-7h10v7M10 11h1m8 0h1M10 15h1m8 0h1"/>','<path d="M4 23h22M6 23V12l7 4V7l11 6v10M9 19h2m5 0h2m3 0h1"/>','<path d="m11 8-7 7 7 7m8-14 7 7-7 7m-3-18-3 22"/>','<rect x="7" y="7" width="16" height="16" rx="3"/><path d="M11 2v5m8-5v5M11 23v5m8-5v5M2 11h5m16 0h5M2 19h5m16 0h5M12 12h6v6h-6z"/>'];return `<svg class="icon" viewBox="0 0 30 30" fill="none" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[n]}</svg>`;}
const scenarios=[['finance','金融与政企','面向高敏数据与关键业务，建立可审计的验证和防护流程。'],['industry','能源与关键业务','围绕持续运行的系统，连接风险发现、验证与针对性防御。'],['software','研发与软件供应链','把漏洞分析与修复复测，融入代码和组件的交付流程。'],['ai','AI 应用与基础设施','识别 Agent 与工具链风险，约束权限、数据和执行行为。']];
function home(){return `<section class="hero"><div class="hero-visual" aria-hidden="true"><img src="/assets/visuals/hero-v2-1536.webp" srcset="/assets/visuals/hero-v2-768.webp 768w, /assets/visuals/hero-v2-1536.webp 1536w" sizes="100vw" width="1672" height="941" fetchpriority="high" alt=""></div><div class="wrap"><div class="hero-grid"><div class="hero-copy">${kicker('BLADESEC / AI FOR CYBER DEFENSE')}<h1>AI 原生，<br><span>全自动闭环防御。</span></h1><p class="lead">智锋安全，一家专注安全赛道的 AI 公司。<br>以全系 AI 原生产品，连接发现、验证、管控与防御，让安全从风险识别自动走向防护行动。</p><div class="actions">${link('/contact/','预约产品演示','btn blue')}${link('/products/','探索闭环防御体系','btn light')}</div><div class="hero-note"><span>全系 AI 原生</span><span>全自动闭环</span><span>持续进化</span></div></div></div><div class="hero-index">${products.map((p,i)=>`<a href="/products/${p.id}/"><i>0${i+1}</i><b>${p.name}</b><span>${p.verb}${['深层漏洞','真实风险','AI 设施','业务安全'][i]}</span></a>`).join('')}</div></div></section>
${industryBackground()}
<section class="section collaboration-section" id="collaboration"><div class="wrap"><div class="section-head"><div>${kicker('FOUR PRODUCTS. ONE AUTONOMOUS DEFENSE LOOP.')}<h2>四锋协同，<br>让防御自动闭环。</h2></div><p>以御锋为防御核心，持续汇聚三锋证据；对接外部态势感知系统后，自动解析攻击方式与新漏洞，调用洞锋、渗锋、信锋自查，结果回流为带洞运行防御。</p></div>${stack()}</div></section>
<section class="section dark" id="four-products"><div class="wrap"><div class="section-head"><div>${kicker('AI NATIVE. THROUGH AND THROUGH.')}<h2>全系 AI 原生，<br>共同面向防御结果。</h2></div><p>洞锋深入发现，渗锋验证风险，信锋管控 AI，御锋执行防御。四款产品以自动执行与证据反馈协同推进安全任务。</p></div><div class="product-tabs" role="tablist" aria-label="探索四锋产品">${products.map((p,i)=>`<button class="product-tab" id="tab-${p.id}" role="tab" aria-selected="${i===0}" aria-controls="panel-${p.id}" tabindex="${i===0?0:-1}"><strong>${p.name}</strong><span>${p.verb} / ${p.en}</span></button>`).join('')}</div>${products.map((p,i)=>`<div class="product-panel" id="panel-${p.id}" role="tabpanel" aria-labelledby="tab-${p.id}" ${i?'hidden':''}><div><h3>${p.type}</h3><p>${p.intro}</p><div class="tags">${p.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>${link(`/products/${p.id}/`,'深入了解'+p.name)}</div>${productArt(p)}</div>`).join('')}<div class="platform-strip"><div><strong>SecAgentOS + 智锋大模型</strong><p>以 AI 推理与智能体编排连接共享事实、证据和策略，让四锋持续协同。</p></div>${link('/technology/','了解统一底座')}</div></div></section>
<section class="section foundation-summary"><div class="wrap"><div class="section-head"><div>${kicker('BUILT AI NATIVE, FROM THE GROUND UP')}<h2>从 AI 出发，<br>重构安全产品。</h2></div>${link('/technology/','探索 SecAgentOS 与智锋大模型')}</div><div class="cap-list">${[['01','AI 驱动推理','将安全事实、上下文与模型推理结合，持续分析风险、规划任务并验证结论。'],['02','智能体自动执行','由 SecAgentOS 编排工具与智能体，在既定权限和策略下推进发现、验证与处置。'],['03','攻防结果持续回流','把漏洞证据、验证结果与防御效果带回共同底座，推动后续分析与策略迭代。']].map(x=>`<div class="cap-item"><i>${x[0]}</i><div><h3>${x[1]}</h3><p>${x[2]}</p></div></div>`).join('')}</div></div></section>
<section class="section pale"><div class="wrap"><div class="section-head"><div>${kicker('SECURITY IN YOUR CONTEXT')}<h2>从您的业务场景出发。</h2></div>${link('/solutions/','查看解决方案')}</div><div class="scenarios">${scenarios.map((s,i)=>`<article class="scenario">${icon(i)}<h3>${s[1]}</h3><p>${s[2]}</p>${link('/solutions/#'+s[0],'了解场景')}</article>`).join('')}</div></div></section>
<section class="section"><div class="wrap"><div class="section-head"><div>${kicker('ROOTED IN SECURITY RESEARCH')}<h2>让研究积累，走向真实系统。</h2></div><p>从程序分析、漏洞挖掘到应用安全，持续研究为产品演进提供基础。以下为核心成员参与的代表性学术工作。</p></div>${researchRows()}<div class="actions">${link('/research/','查看研究与成果')}</div></div></section>${cta()}`;}
function pageHero(label,title,intro,extra=''){return `<section class="page-hero"><div class="wrap"><div class="breadcrumb"><a href="/">首页</a><span>/</span><span>${label}</span></div>${kicker(label)}<h1>${title}</h1><p class="lead">${intro}</p>${extra}</div></section>`;}
function directory(){return `${pageHero('PRODUCTS / 产品体系','全系 AI 原生。<br>协同形成自动防御闭环。','洞锋发现、渗锋验证、信锋管控、御锋防御。四款产品共用 AI 原生底座，自动串联安全任务，将发现与验证持续转化为防御行动。')}<section class="section"><div class="wrap product-directory">${products.map((p,i)=>`<article class="directory-card" id="${p.id}">${productArt(p)}<div class="directory-top"><b>${p.name}</b><span>0${i+1} / ${p.en}</span></div><h3>${p.type}</h3><p>${p.short}</p><ul>${p.outputs.slice(0,3).map(x=>`<li>${x[0]}：${x[1]}</li>`).join('')}</ul>${link('/products/'+p.id+'/','了解'+p.name)}</article>`).join('')}</div></section><section class="section pale"><div class="wrap diagram-section"><div>${kicker('AUTONOMOUS DEFENSE, WORKING TOGETHER')}<h2>按需部署，<br>协同形成全自动闭环。</h2><p>围绕企业资产与业务目标选择产品，以御锋为防御核心，连接持续防护、外部威胁解析、三锋自动自查与结果回流。</p><div class="actions">${link('/technology/','了解产品之间的连接')}</div></div>${stack()}</div></section>${cta()}`;}
function productPage(p){return `<section class="page-hero product-hero"><div class="wrap"><div class="breadcrumb"><a href="/">首页</a><span>/</span><a href="/products/">产品</a><span>/</span><span>${p.name}</span></div><div class="page-hero-grid"><div>${kicker(p.name+' / '+p.en+' · AI NATIVE')}<h1>${p.headline.replace('\n','<br>')}</h1><p class="lead">${p.intro}</p><div class="actions">${link('/contact/?product='+encodeURIComponent(p.name),'预约'+p.name+'演示','btn blue')}</div><div class="tags">${p.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div></div>${productArt(p,true)}</div></div></section><section class="section"><div class="wrap"><div class="section-head"><div>${kicker('HOW IT WORKS')}<h2>${p.workflowTitle||'从目标，到可以验证的结果。'}</h2></div><p>${p.workflowIntro||'围绕实际资产与任务目标组织工作，将分析过程和交付证据连接起来。'}</p></div><div class="steps">${p.flow.map((s,i)=>`<article class="step"><span>0${i+1}</span><h3>${s}</h3><p>${(p.flowDetails||['明确目标、输入与任务边界。','组织分析，关联事实与上下文。','以实际反馈与证据推进判断。','将结论交付给研发、安全与运维团队。'])[i]}</p></article>`).join('')}</div></div></section>${productExperience(p)}<section class="section pale"><div class="wrap split"><div>${kicker('INPUTS & DELIVERABLES')}<h2>每个发现，<br>都有可追溯的交付。</h2><p>${p.name}接入企业现有目标与授权数据，输出便于复核、整改与持续运营的安全结果。</p><div class="cap-list">${p.inputs.map((s,i)=>`<div class="cap-item"><i>0${i+1}</i><div><h3>${s}</h3></div></div>`).join('')}</div></div><div class="output-board"><div class="board-title"><span>${p.name} / 交付内容</span><span>OUTPUT</span></div>${p.outputs.map(x=>`<div class="output-line"><strong>${x[0]}</strong><span>${x[1]}</span></div>`).join('')}</div></div></section><section class="section"><div class="wrap"><div class="section-head"><div>${kicker('CORE CAPABILITIES')}<h2>能力背后的技术。</h2></div>${link('/technology/','了解 SecAgentOS')}</div><div class="detail-grid">${p.mechanisms.map((x,i)=>`<article class="detail-card"><div class="eyebrow">0${i+1} / CAPABILITY</div><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join('')}</div></div></section><section class="section pale"><div class="wrap"><div class="section-head"><div>${kicker('QUESTIONS, ANSWERED')}<h2>进一步了解${p.name}。</h2></div></div><div class="faq">${p.faq.map(x=>`<details><summary>${x[0]}</summary><p>${x[1]}</p></details>`).join('')}</div></div></section>${cta()}`;}
function technology(){return `${pageHero('TECHNOLOGY / 核心技术','AI 原生的防御，<br>需要原生的运行体系。','SecAgentOS 与智锋大模型将事实、推理、规划、执行和反馈连接起来，支撑四锋从发现到防御的全自动闭环。')}<section class="section"><div class="wrap diagram-section"><div>${kicker('SecAgentOS')}<h2>让智能体在复杂任务中，<br>有依据地持续行动。</h2><p>安全任务需要探索未知目标，也需要保证协作、状态和证据的一致。SecAgentOS 将事实组织、任务编排、长程记忆与验证机制贯穿到执行过程。</p><div class="cap-list"><div class="cap-item"><i>01</i><div><h3>统一事实与权威状态</h3><p>共用资产事实与任务状态，减少重复分析和上下文分叉。</p></div></div><div class="cap-item"><i>02</i><div><h3>编排、恢复与进展判断</h3><p>依赖环检测、检查点和无进展识别，支持任务恢复与路线调整。</p></div></div></div></div>${stack()}</div></section><section class="section dark"><div class="wrap"><div class="section-head"><div>${kicker('EVIDENCE DRIVEN EXECUTION')}<h2>从假设出发，以证据推进。</h2></div><p>探索可以有多种路线。结论、动作与经验沉淀，需要经过验证。</p></div><div class="steps">${[['竞争性假设','从多种视角保留可能的解释与路径，在开放目标中组织探索。'],['携证晋级','结合差分实验、独立复核与真实影响确认，形成有依据的结论。'],['受控执行','将授权范围、资源上限、状态一致和动作记录纳入任务约束。'],['经验回流','沉淀有效机制和失败边界，改变后续任务的分析起点。']].map((x,i)=>`<div class="step"><span>0${i+1}</span><h3>${x[0]}</h3><p>${x[1]}</p></div>`).join('')}</div></div></section><section class="section"><div class="wrap"><div class="section-head"><div>${kicker('INTELLIGENCE MEETS ENGINEERING')}<h2>推理能力与工程机制共同工作。</h2></div></div><div class="detail-grid">${[['智锋大模型','为安全分析与处理提供推理能力，与结构化事实、工具执行和验证反馈协同。'],['私有化部署','围绕企业的数据边界、算力资源和系统条件配置部署方案，让任务在约定环境内运行。'],['外部威胁解析与自动自查','御锋对接外部态势感知系统，自动解析攻击方式和新漏洞，调用洞锋、渗锋、信锋自查，接收结果并生成带洞运行防御策略。']].map(x=>`<article class="detail-card"><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join('')}</div></div></section>${cta()}`;}
const industryDetails=[
['finance','金融与政企','围绕关键业务和高敏数据，建立发现、验证、处置的共同依据。',['在明确权限与业务边界下开展风险验证','对齐内部模型、Agent 与工具调用的访问策略','结合日志、告警与漏洞证据安排防护和复测'],'洞锋 · 渗锋 · 信锋 · 御锋'],
['industry','能源与关键业务','面向持续运行与变更受限的业务，逐步收敛暴露面与实际攻击路径。',['梳理软件、入口和关键资产之间的关系','验证风险可达性，确定优先处置顺序','结合在线防护、修复窗口和回滚计划部署'],'洞锋 · 渗锋 · 御锋'],
['software','研发与软件供应链','把安全分析结果交给能够采取行动的团队，支持从根因定位到修复复测。',['分析自研代码、基础软件和第三方组件','输出根因、触发条件与可复核证据','围绕仓库、门禁与工单流程开展集成'],'洞锋 · 渗锋'],
['ai','AI 应用与基础设施','在智能体上线与持续运行过程中，关注依赖、工具、权限和数据风险。',['发现模型接口、Agent、MCP 与 Skills 资产','评测注入、越权与敏感数据访问风险','结合调用上下文执行策略并保留审计证据'],'信锋 · 洞锋 · 御锋']
];
function solutions(){return `${pageHero('SOLUTIONS / 解决方案','把安全能力，放进业务现场。','根据业务目标、资产边界与部署条件组合产品，让技术能力成为团队可使用、可验证的工作流程。')}<section class="section"><div class="wrap">${industryDetails.map((x,i)=>`<article class="industry-row" id="${x[0]}"><span>0${i+1}</span><div><h3>${x[1]}</h3><p>${x[2]}</p><span class="industry-products">${x[4]}</span></div><div><ul>${x[3].map(s=>`<li>${s}</li>`).join('')}</ul><div class="actions">${link('/contact/','交流您的场景')}</div></div></article>`).join('')}</div></section><section class="section pale"><div class="wrap"><div class="section-head"><div>${kicker('A CLEAR PATH TO DEPLOYMENT')}<h2>从一个清楚的目标，开始验证。</h2></div><p>按业务约束和验收目标制定试点范围，再逐步扩展。</p></div><div class="steps">${[['场景对齐','确认目标资产、业务痛点、数据边界与责任团队。'],['部署与接入','结合环境选择私有化或一体机方案，明确接口与权限。'],['试点验证','使用约定样本与场景，核对发现、验证和防护效果。'],['持续运营','衔接整改、复测与升级，持续观察业务中的实际效果。']].map((x,i)=>`<article class="step"><span>0${i+1}</span><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join('')}</div></div></section>${cta()}`;}
function cases(){return `${pageHero('VALIDATION / 验证与交付','让安全效果，能够被复核。','从风险线索到处置结果，围绕证据、复现与业务影响建立验收依据。以下展示不同任务的验证方式与交付内容。')}<section class="section"><div class="wrap two-grid">${[['漏洞发现','对企业代码与组件开展深层分析。','安全团队与研发团队共同复核漏洞位置、根因和触发条件。','漏洞证据包、影响说明、修复建议与复测记录。'],['实战风险验证','在授权环境中验证多阶段攻击路径。','按照日志、请求响应与时间线，复现路径并核对实际权限变化。','攻击路径报告、可达性证明、影响范围及整改优先级。'],['AI 运行风险管控','围绕 Agent、MCP 与模型调用链评测风险。','回放代表性调用，核对身份、权限、数据访问和策略执行。','资产关系图、风险与策略清单、调用审计及阻断记录。'],['持续防御与修复','持续汇聚三锋证据开展防护，并将外部威胁解析、三锋自动自查与带洞运行防御连接起来。','通过攻击重放、拦截日志与修复复测，观察策略有效性及业务影响。','防护策略、处置记录、修复计划与效果验证。']].map((x,i)=>`<article class="evidence-card">${kicker('0'+(i+1)+' / '+products[i].en)}<h3>${x[0]}</h3><p>${x[1]}</p><dl><dt>如何验证</dt><dd>${x[2]}</dd><dt>交付内容</dt><dd>${x[3]}</dd></dl></article>`).join('')}</div></section><section class="section pale"><div class="wrap split"><div>${kicker('START WITH YOUR OWN SYSTEM')}<h2>用您的系统，<br>验证适合您的能力。</h2><p>演示可以从实际代码、授权测试目标或智能体调用场景开始，共同确定试点目标与验收标准。</p><div class="actions">${link('/contact/','安排技术交流','btn blue')}</div></div><div class="output-board"><div class="board-title"><span>试点前的四项对齐</span><span>POC</span></div>${[['范围','资产与授权边界'],['环境','部署方式与数据约束'],['证据','结果复核与复现方式'],['目标','业务价值与验收标准']].map(x=>`<div class="output-line"><strong>${x[0]}</strong><span>${x[1]}</span></div>`).join('')}</div></div></section>`;}
function researchPage(){return `${pageHero('RESEARCH / 研究成果','源于持续研究，\n走向真实安全问题。'.replace('\n','<br>'),'核心成员长期参与程序分析、漏洞挖掘与应用安全研究。公开论文和可复现成果，为技术演进提供坚实基础。')}<section class="section"><div class="wrap"><div class="section-head"><div>${kicker('SELECTED PUBLICATIONS')}<h2>代表性学术工作。</h2></div><p>以下工作由李松与合作者在相应学术机构开展，点击可查看会议官方记录。</p></div>${researchRows()}<p class="research-note">论文及奖项归属于对应作者团队与学术机构。产品能力与效果需在具体部署环境中验证。</p></div></section><section class="section pale"><div class="wrap split"><div>${kicker('ODGEN / USENIX SECURITY 2022')}<h2>从对象依赖图，<br>理解真实软件的风险。</h2><p>ODGen 通过对象依赖关系与图查询分析 Node.js 漏洞。该论文报告发现 180 个零日漏洞，其中 70 个当时已获得 CVE 编号。</p><p style="margin-top:18px;font-size:12px">数据来自论文发表时的实验结果，统计范围为该研究。</p><div class="actions">${link('https://www.usenix.org/conference/usenixsecurity22/presentation/li-song','阅读原始论文')}</div></div><div class="output-board"><div class="board-title"><span>研究方法</span><span>ODGEN</span></div>${[['抽象解释','解析动态语言行为'],['对象依赖图','关联对象、语法与控制流'],['图查询','定位符合漏洞模式的路径'],['真实软件验证','复核漏洞与影响']].map(x=>`<div class="output-line"><strong>${x[0]}</strong><span>${x[1]}</span></div>`).join('')}</div></div></section><section class="section"><div class="wrap"><div class="section-head"><div>${kicker('CONTINUOUS EXPLORATION')}<h2>围绕安全的长期问题，继续探索。</h2></div></div><div class="detail-grid">${[['自动化漏洞发现','面向复杂软件和深层缺陷，探索分析、推理与验证方法。'],['智能体安全','关注 AI 框架、工具链、调用上下文与运行行为中的风险。'],['攻防协同','将发现、实战验证与防护结果连接，形成持续反馈。']].map(x=>`<article class="detail-card"><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join('')}</div></div></section>${cta()}`;}
function about(){return `${pageHero('ABOUT / 关于智锋','一家 AI 公司。<br>专注 AI 时代的安全防御。','杭州智锋安全科技有限公司（Bladesec）是一家专注安全赛道的 AI 公司。我们从 AI 的推理、规划与自主执行能力出发，打造全系 AI 原生、全自动闭环的安全防御产品。')}${companyBackground()}<section class="section pale native-principles"><div class="wrap">${kicker('OUR CONVICTION')}<p class="about-statement">让防御拥有 AI 的速度，<br>让发现自动走向行动，<br>让每次攻防推动下一次进化。</p><div class="detail-grid">${[['AI 原生','围绕模型推理、智能体编排、工具执行与证据验证重新设计产品，让 AI 贯穿安全任务的完整过程。'],['全自动闭环','以御锋为核心，自动连接发现、验证、管控与防御，让威胁分析、自查结果和防护行动持续联动。'],['以攻促防，持续进化','将漏洞研究、攻击验证与防御结果沉淀为可复用的事实、知识和策略，持续改善后续任务。']].map(x=>`<article class="detail-card"><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join('')}</div></div></section><section class="section pale"><div class="wrap"><div class="section-head"><div>${kicker('PEOPLE BEHIND THE TECHNOLOGY')}<h2>团队。</h2></div><p>连接安全研究、产品研发与工程交付。</p></div><div class="team">${[['李松','CEO','浙江大学百人计划研究员、博士生导师'],['申大坤','CTO','技术与交付'],['刘新','CIO','研发与技术演进']].map(x=>`<article class="person"><div class="role">${x[1]}</div><h3>${x[0]}</h3><p>${x[2]}</p></article>`).join('')}</div></div></section><section class="section"><div class="wrap split"><div>${kicker('RESEARCH & COLLABORATION')}<h2>连接研究与实践。</h2><p>团队与浙江大学、区块链与数据安全全国重点实验室等科研生态保持联系，围绕安全研究、产品演进和人才培养推进协作。</p><div class="actions">${link('/research/','了解代表性研究')}</div></div><div><h3 style="font-size:26px;margin-bottom:20px">欢迎一起解决真实安全问题。</h3><p>我们期待与企业安全团队、研发团队和研究者交流，共同探索产品应用、技术合作与人才培养。</p><div class="actions">${link('mailto:contact@bladesec.ai','联系智锋')}</div></div></div></section>${cta()}`;}
function contact(){return `${pageHero('CONTACT / 联系我们','从一次具体的交流开始。','告诉我们您的业务场景与关注方向，讨论产品演示、试点验证和部署方案。')}<section class="section"><div class="wrap contact-grid"><div class="contact-info">${kicker('LET’S TALK')}<h2>您的场景，<br>我们的共同起点。</h2><p>产品咨询与技术合作请联系：</p><a class="contact-email" href="mailto:contact@bladesec.ai">contact@bladesec.ai ↗</a><div class="contact-steps">01 &nbsp; 对齐业务目标与资产范围<br>02 &nbsp; 交流产品能力与部署方式<br>03 &nbsp; 确定演示或试点安排</div></div><form class="form-panel" id="demo-form"><div class="form-grid"><div class="form-field"><label for="name">姓名 *</label><input id="name" name="name" autocomplete="name" required maxlength="60" placeholder="您的姓名"></div><div class="form-field"><label for="company">公司 / 机构 *</label><input id="company" name="company" autocomplete="organization" required maxlength="120" placeholder="公司或机构名称"></div><div class="form-field"><label for="email">工作邮箱 *</label><input id="email" name="email" type="email" autocomplete="email" required maxlength="160" placeholder="name@company.com"></div><div class="form-field"><label for="product">关注方向</label><select id="product" name="product"><option value="四锋整体方案">四锋整体方案</option>${products.map(p=>`<option value="${p.name}">${p.name} · ${p.verb}</option>`).join('')}<option value="技术合作">技术合作</option></select></div><div class="form-field full"><label for="message">希望交流的场景</label><textarea id="message" name="message" maxlength="1500" placeholder="例如：内部代码审计、授权风险验证、智能体安全、持续防护……"></textarea></div></div><p class="form-note">此页面会在您的邮件应用中生成咨询邮件，由您确认发送。填写内容不会在网站后台保存。</p><div class="actions"><button class="btn blue" type="submit">生成咨询邮件 ${arrow}</button><button class="btn light" type="button" id="copy-inquiry">复制咨询内容</button></div><p id="form-result" class="form-result" role="status" aria-live="polite"></p><noscript><p>请直接发送邮件至 <a href="mailto:contact@bladesec.ai">contact@bladesec.ai</a>。</p></noscript></form></div></section>`;}
const pages=[['/','AI 原生，全自动闭环防御','智锋安全是一家专注安全赛道的 AI 公司，以洞锋、渗锋、信锋、御锋全系 AI 原生产品，构建面向 AI 时代的全自动闭环防御。',home(),''],['/products/','AI 原生闭环防御产品体系','洞锋、渗锋、信锋、御锋全系 AI 原生，共用 SecAgentOS 与智锋大模型，自动连接发现、验证、管控和防御。',directory(),'/products/'],...products.map(p=>['/products/'+p.id+'/',p.name+' · '+p.type,p.intro,productPage(p),'/products/']),['/solutions/','行业解决方案','面向金融政企、能源关键业务、研发供应链和AI基础设施的私有化安全方案。',solutions(),'/solutions/'],['/technology/','AI 原生架构与 SecAgentOS','了解支撑智锋全自动闭环防御的 AI 推理、智能体编排、统一事实与证据反馈体系。',technology(),'/technology/'],['/cases/','验证与交付','通过证据、复现与业务影响，验证智锋四锋产品的安全结果。',cases(),''],['/research/','研究与成果','核心成员参与的安全研究、代表性论文及公开成果。',researchPage(),'/research/'],['/about/','关于智锋 · 专注安全赛道的 AI 公司','杭州智锋安全科技有限公司是一家专注安全赛道的 AI 公司，打造面向 AI 时代的全系 AI 原生、全自动闭环防御产品。',about(),'/about/'],['/contact/','预约产品演示','联系智锋安全，交流产品演示、部署与技术合作。',contact(),'']];
for(const [path,title,desc,body,active] of pages){const dir=join(root,path);await mkdir(dir,{recursive:true});await writeFile(join(dir,'index.html'),shell(title,desc,body,path,active));}
for(const [old,target] of [['/products/agentguard/','/products/xinfeng/'],['/index/','/']]){const dir=join(root,old);await mkdir(dir,{recursive:true});await writeFile(join(dir,'index.html'),`<!DOCTYPE html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>正在前往智锋安全</title><link rel="canonical" href="https://bladesec.ai${target}"><meta http-equiv="refresh" content="0;url=${target}"></head><body><p>页面已更新。<a href="${target}">前往${target==='/'?'首页':'信锋产品页'}</a></p></body></html>`);}
await writeFile(join(root,'sitemap.xml'),'<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+pages.map(p=>`<url><loc>https://bladesec.ai${p[0]}</loc></url>`).join('')+'</urlset>');
await writeFile(join(root,'robots.txt'),'User-agent: *\nAllow: /\nDisallow: /docs/\nDisallow: /scripts/\nSitemap: https://bladesec.ai/sitemap.xml\n');
await writeFile(join(root,'404.html'),shell('页面未找到','返回智锋安全，探索四锋产品体系。',pageHero('404 / 页面未找到','这个页面暂时无法找到。','您可以返回首页，或从产品体系继续了解智锋。',`<div class="actions">${link('/','返回首页','btn blue')}${link('/products/','探索产品','btn light')}</div>`),'/404.html'));
console.log(`Built ${pages.length} pages, 2 legacy entries, sitemap, robots and 404.`);
