# 罕见病信息 Wiki - 快速开始

## 维护模式控制

项目已实现维护模式开关功能：

### 开启维护模式
编辑 `frontend/.env.local`：
```env
VITE_MAINTENANCE_MODE="true"
```

### 关闭维护模式（正常访问）
编辑 `frontend/.env.local`：
```env
VITE_MAINTENANCE_MODE="false"
```

修改后需要重启开发服务器才能生效。

## 启动项目

### 1. 启动 Strapi 后端
```bash
cd backend
pnpm dev
```
访问：http://localhost:1337/admin

### 2. 启动前端
```bash
cd frontend
pnpm dev
```
访问：http://localhost:3000

## 已实现的页面

- ✅ **首页** (`/`) - 带搜索和分类导航
- ✅ **疾病列表** (`/diseases`) - 分类筛选和搜索
- ✅ **医院列表** (`/hospitals`) - 地区筛选和搜索
- ✅ **公益组织** (`/charity`) - 类型筛选和搜索
- ✅ **维护页面** - 维护模式时显示

## 下一步

1. 按照 `docs/guides/strapi-content-types-setup.md` 在 Strapi 中创建数据模型
2. 在 Strapi 管理界面添加测试数据
3. 集成 Strapi API 到前端页面

详细信息请查看：`docs/IMPLEMENTATION_SUMMARY.md`
