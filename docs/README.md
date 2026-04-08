---
home: true
title: Agent 学习文档
heroText: Agent 学习文档
tagline: 17 节课系统学习 Coding Agent，从架构认知到最小可实现落地
heroImage: /images/agent-hero-badge.svg
actions:
  - text: 开始学习
    link: /agent学习文档/
    type: primary
  - text: 查看课程目录
    link: /agent学习文档/#课程目录
    type: default
footer: MIT Licensed | Copyright © 2026
---

<div class="home-polish">

<div class="section-badge">AGENT ENGINEERING PLAYBOOK</div>

## 你将拿到的结果

<div class="value-grid">
  <div class="value-card">
    <h3>系统化认知</h3>
    <p>从架构、主循环、上下文到工具调度，建立完整 Agent 工程脑图。</p>
  </div>
  <div class="value-card">
    <h3>可执行方法</h3>
    <p>每一课都能落到“下一步动作”，不是只看概念和术语。</p>
  </div>
  <div class="value-card">
    <h3>落地闭环</h3>
    <p>把修改、验证、恢复、审批和评估串成可上线的工程流程。</p>
  </div>
</div>

## Agent 执行闭环

```mermaid
flowchart LR
  A[接收任务] --> B[计划与分解]
  B --> C[工具执行]
  C --> D[验证与评估]
  D -->|通过| E[结果交付]
  D -->|失败| F[恢复与重试]
  F --> B
```

## 学习路线

<div class="track-grid">
  <div class="track-item">
    <strong>阶段 1：理解骨架</strong>
    <span>第 1-4 课</span>
  </div>
  <div class="track-item">
    <strong>阶段 2：执行与控制</strong>
    <span>第 5-10 课</span>
  </div>
  <div class="track-item">
    <strong>阶段 3：系统化升级</strong>
    <span>第 11-15 课</span>
  </div>
  <div class="track-item">
    <strong>阶段 4：工程落地</strong>
    <span>第 16-17 课</span>
  </div>
</div>

## 快速开始

<div class="cta-row">
  <a class="cta-btn cta-primary" href="/agent学习文档/01-架构总览/">从第 1 课开始</a>
  <a class="cta-btn cta-ghost" href="/agent学习文档/">查看 17 节课目录</a>
  <a class="cta-btn cta-ghost" href="/agent学习文档/17-最小可实现Agent总体设计/">直达落地设计课</a>
</div>

</div>
