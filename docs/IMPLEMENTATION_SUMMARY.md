# 罕见病信息 Wiki 网站 - 实施总结

## 项目概述

基于现有的前后端框架，实现了一个罕见病信息百科网站，提供：
- 罕见病基础信息及治疗方案
- 治疗医院及科室信息
- 相关公益组织信息
- 维护模式开关控制

## 技术栈

### 前端
- **框架**: React 19 + TanStack Router
- **SSR**: TanStack Start + Nitro
- **样式**: Tailwind CSS 4 + DaisyUI
- **国际化**: Paraglide (中文/英文)
- **状态管理**: Zustand
- **HTTP 客户端**: Ky + Strapi Client

### 后端
- **CMS**: Strapi 5.33.4
- **数据库**: PostgreSQL
- **语言**: TypeScript

## 已完成功能

### 1. 维护模式系统 ✅

**文件变更**：
- `frontend/.env.local` - 添加 `VITE_MAINTENANCE_MODE` 环境变量
- `frontend/src/components/MaintenancePage.tsx` - 维护页面组件
- `frontend/src/routes/index.tsx` - 添加维护模式判断逻辑

**使用方法**：
```bash
# 开启维护模式
VITE_MAINTENANCE_MODE="true"

# 关闭维护模式（正常访问）
VITE_MAINTENANCE_MODE="false"
```

### 2. 前端页面结构 ✅

#### 首页 (`/`)
- Hero 区域 + 搜索框
- 疾病分类导航卡片（6个主要分类）
- 快速链接（疾病、医院、公益组织）

**位置**: `frontend/src/components/HomePage.tsx`

#### 疾病列表页 (`/diseases`)
- 左侧分类筛选
- 搜索功能
- 疾病卡片展示（含患病率）

**位置**: `frontend/src/routes/diseases/index.tsx`

#### 医院列表页 (`/hospitals`)
- 地区筛选（省份）
- 搜索功能
- 医院卡片展示（含地址、电话、特色专科）

**位置**: `frontend/src/routes/hospitals/index.tsx`

#### 公益组织列表页 (`/charity`)
- 组织类型筛选
- 搜索功能
- 组织卡片展示（含联系方式）

**位置**: `frontend/src/routes/charity/index.tsx`

### 3. 数据模型设计 ✅

完整的 Strapi Content Types 设计文档已创建，包括：

1. **Disease**（罕见病）- 核心实体
   - 基础信息、症状、诊断、治疗、预后
   - 关联：分类、医院、公益组织、标签

2. **DiseaseCategory**（疾病分类）
   - 支持多级分类
   - 图标配置

3. **Hospital**（医院）
   - 医院信息、科室关联
   - 地理位置（JSON）

4. **Department**（科室）
   - 科室信息、专家医生
   - 预约链接

5. **CharityOrganization**（公益组织）
   - 组织信息、服务内容
   - 多种联系方式

6. **Tag**（标签）
   - 分类标签系统

**文档位置**: `docs/guides/strapi-content-types-setup.md`

## 当前状态

### 已实现 ✅
- ✅ 维护模式开关
- ✅ 前端页面框架（首页、列表页）
- ✅ 路由系统
- ✅ 基础 UI 组件
- ✅ Mock 数据展示
- ✅ Strapi 数据模型设计文档

### 待实施 🔄

#### Phase 1: 基础数据集成
1. **在 Strapi 创建 Content Types**
   - 按照 `docs/guides/strapi-content-types-setup.md` 操作
   - 配置 API 权限（Public 只读）

2. **前端集成 Strapi API**
   - 创建 API 调用 hooks（使用 TanStack Query）
   - 替换 mock 数据为真实数据
   - 实现分页和加载状态

3. **实现详情页**
   - `/diseases/:slug` - 疾病详情
   - `/hospitals/:id` - 医院详情
   - `/charity/:id` - 公益组织详情

4. **实现搜索功能**
   - `/search?q=xxx` - 全局搜索页面
   - 集成 Strapi 搜索 API
   - 搜索建议/自动补全

#### Phase 2: AI 智能推荐（后续）
1. 集成 AI 服务（OpenAI/Claude/国内大模型）
2. 实现症状描述 → 疾病推荐
3. 基于位置推荐医院
4. 相关疾病智能关联

#### Phase 3: 用户提交审核（后续）
1. 用户注册/登录系统
2. 内容提交表单
3. 管理员审核工作流
4. 版本历史追踪

## 目录结构

```
spanios-wiki/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── HomePage.tsx          # 首页组件
│   │   │   ├── MaintenancePage.tsx   # 维护页面
│   │   │   └── NotFound.tsx
│   │   ├── routes/
│   │   │   ├── index.tsx             # 首页路由（含维护模式判断）
│   │   │   ├── diseases/
│   │   │   │   └── index.tsx         # 疾病列表
│   │   │   ├── hospitals/
│   │   │   │   └── index.tsx         # 医院列表
│   │   │   └── charity/
│   │   │       └── index.tsx         # 公益组织列表
│   │   └── ...
│   └── .env.local                     # 环境变量（维护模式）
├── backend/
│   └── src/
│       └── api/                       # Strapi Content Types（待创建）
└── docs/
    └── guides/
        └── strapi-content-types-setup.md  # Strapi 设置指南
```

## 下一步行动

### 立即执行：

1. **启动 Strapi 后端**
   ```bash
   cd backend
   pnpm dev
   ```

2. **访问 Strapi 管理界面**
   - URL: http://localhost:1337/admin
   - 按照 `docs/guides/strapi-content-types-setup.md` 创建 Content Types

3. **添加测试数据**
   - 创建 2-3 个疾病分类
   - 添加 5-10 个罕见病
   - 添加 2-3 个医院
   - 添加 1-2 个公益组织

4. **测试前端**
   ```bash
   cd frontend
   pnpm dev
   ```
   - 访问 http://localhost:3000
   - 验证维护模式开关
   - 验证页面路由

### 后续开发建议：

1. **创建 API Hooks**
   ```typescript
   // frontend/src/hooks/useDiseases.ts
   export function useDiseases() {
     return useQuery({
       queryKey: ['diseases'],
       queryFn: () => strapiClient.get('diseases').json()
     })
   }
   ```

2. **实现分页**
   - 使用 Strapi 的 pagination 参数
   - 前端添加页码组件

3. **优化搜索**
   - 使用 Strapi 的 filters 功能
   - 实现防抖 (debounce) 优化

4. **SEO 优化**
   - 为每个页面添加 meta 信息
   - 使用 SSR 确保搜索引擎可索引

## 注意事项

1. **环境变量**
   - `.env.local` 已添加到 `.gitignore`
   - 部署时需要配置生产环境变量

2. **数据库**
   - Strapi 使用 PostgreSQL
   - 确保数据库连接配置正确

3. **图片上传**
   - Strapi 默认使用本地存储
   - 生产环境建议使用云存储（OSS/S3）

4. **国际化**
   - 已配置中英文支持
   - Strapi Content Types 需启用 i18n

## 维护模式切换

**开发环境**：
编辑 `frontend/.env.local`，修改 `VITE_MAINTENANCE_MODE` 值

**生产环境**：
通过环境变量或部署平台配置 `VITE_MAINTENANCE_MODE=true/false`

---

📝 **项目状态**: Phase 1 - 基础框架完成，待数据集成
🎯 **下一里程碑**: Strapi Content Types 创建 + API 集成
