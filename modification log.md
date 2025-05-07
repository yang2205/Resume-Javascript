# Modification Log - AI 修改记录
<!--  Authored by 江尚昆 -->

> 按时间顺序整合团队成员的 AI 使用修改记录，格式遵循 Markdown 规范  
> 最后更新：2024-01-04  
> 维护人：江尚昆

---

## 2024-01-04
### 中文文档本地化
1. **README.zh.md 创建规范**  
   - 新增 VS Code 中文文档编写流程（来源：`2208301050333_1.png`）  
   ```markdown
   ### 操作步骤
   1. 安装中文语言包：VSCode > Extensions > 搜索 "Chinese" > 安装官方中文包
   2. 创建 README.zh.md 文件：右键项目目录 > 新建文件 > 输入文件名
   ```
   - 补充 Markdown 实时预览快捷键：<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>V</kbd>

2. **Git 推送流程标准化**  
   - 新增远程仓库关联示意图（来源：`2208301050333_2.png`）  
   ```bash
   git remote add origin https://github.com/user/repo.git
   git push -u origin main
   ```

---

## 2024-01-03
### 功能模块完善
1. **核心功能截图规范**  
   - 新增功能截图命名规则（来源：`2208301050333_3.png`）  
   ```markdown
   ### 主要功能
   <img src="./public/screenshot_add_task.jpg" width="300" alt="移动端任务添加界面">
   ```
   - 要求所有截图包含设备环境标注（Desktop/Mobile/Tablet）

2. **许可证声明强化**  
   - 补充 MIT 许可证的 SPDX 标识符（来源：`2208301050333_3.png`）  
   ```markdown
   [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
   ```

---

## 2024-01-02
### 协作流程优化
1. **Git 分支策略**  
   - 新增功能开发分支规范（来源：`2208301050333_4.png`）  
   ```bash
   git checkout -b feat/add-chinese-docs
   git push --set-upstream origin feat/add-chinese-docs
   ```
   - 要求 PR 必须关联 issue 编号

2. **冲突解决指南**  
   - 新增 Markdown 文件合并冲突处理模板  
   ```markdown
   <<<<<<< HEAD
   当前版本内容
   =======
   传入版本内容
   >>>>>>> branch-name
   ```

---

## 过渡性说明
> 本次整合补充以下内容：  
> - 统一中英文文档的截图目录结构为 `/public/screenshots/`  
> - 增加 Markdown 代码块的语法高亮标注（如 ` ```bash `）  
> - 移除重复的 Git 初始化说明（共 2 处）  

---

**文档版本控制**  
- 当前版本：v1.3.0  
- 变更追踪：`git diff HEAD~4 modification_log.md`  

