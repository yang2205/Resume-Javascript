<!-- Project Description & Overview - Authored by 杨银练 -->
简历项目 - JavaScript 版本
本项目是一个在线简历网站，用于展示个人信息、工作经历、项目经验、教育背景和技能。网站使用 HTML、CSS、JavaScript 和 Vue.js 构建，采用响应式设计，确保在各种设备上都能良好显示。
<!-- Project Description & Overview - Authored by 杨银练 -->
✨ 功能特性
📝 个人信息展示
描述：展示个人基本信息，包括姓名、联系方式（邮箱、电话）、GitHub、Twitter 等。
实现：使用 HTML 和 CSS 进行布局，信息通过 HTML 内容直接展示。
截图：
<img src="images/sreya.png" />

✅ 工作经历
描述：列出工作经历，包括公司名称、职位和任职时间。
实现：使用 HTML 列表元素展示工作经历，包含详细的时间段和职位描述。
截图：
<img src="images/screenshot_check_task.png" />
💾 项目经验
描述：列出参与的项目及其描述。每个项目包括项目名称、时间周期和描述。
实现：使用 HTML 和 CSS 进行布局，每个项目作为一个列表项展示，包含项目名称、时间周期和详细描述。
截图：
<img src="images/screenshot_add_task.png" />
🎨 教育背景
描述：列出教育经历，包括学校名称、时间周期和专业。
实现：使用 HTML 列表元素展示教育经历，每条经历包括学校名称、时间周期和专业。
截图：
<img src="images/screenshot_task_list.png" />
🛠️ 技能展示
描述：列出所掌握的技能。
实现：使用 HTML 和 CSS 进行布局，技能以无序列表形式展示。
截图：
<img src="images/screenshot_delete_task.png" />
<!-- Project Description & Overview - Authored by 杨银练 -->
🚀 快速开始
要开始使用本项目，请按照以下步骤操作：
克隆仓库
bash
git clone https://github.com/yang2205/Resume-Javascript.git
cd Resume-Javascript-Project
安装依赖
bash
npm install
运行应用
bash
npm run dev
在浏览器中访问 http://localhost:8080 查看应用。
<!-- Project Description & Overview - Authored by 杨银练 -->
📦 项目结构
Resume-Javascript-Project/
├── images/                   # 项目图片
├── css/                      # 样式表
├── README.md                 # 英文版 README 文件
├── README.zh.md              # 中文版 README 文件（本文件）
├── .vscode/                  # Visual Studio Code 设置
├── package.json              # 项目元数据和依赖
├── launch.json               # 调试配置
├── index.html                # 主 HTML 文件
└── src/
    ├── components/           # 可复用的 Vue 组件
    ├── App.vue               # 主应用组件
    └── main.js               # 应用入口文件
📮 主要功能 & 截图
添加任务
用户可以向待办事项列表中添加新任务。
<img src="images/screenshot_add_task.jpg" />
标记已完成任务
已完成的任务可以被勾选，应用会相应更新。
<img src="images/screenshot_check_task.jpg" />
许可证
本项目采用 MIT 许可证。有关更多详细信息，请参阅 [LICENSE 文件][LICENSE][def2]。
[def2]: https://choosealicense.com/licenses/mit/
<!-- Project Description & Overview - Authored by 杨银练 -->
致谢
特别感谢所有为项目做出贡献或提供灵感的人。
感谢 Vue.js 社区提供的宝贵资源和支持。