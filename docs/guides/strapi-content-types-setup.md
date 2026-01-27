# Strapi 数据模型创建指南

本文档说明如何在 Strapi 后端创建罕见病 wiki 所需的数据模型（Content Types）。

## 准备工作

1. 启动 Strapi 后端服务：
```bash
cd backend
pnpm dev
```

2. 访问 Strapi 管理界面：http://localhost:1337/admin

## Content Types 创建步骤

### 1. Disease（罕见病）

导航到：Content-Type Builder > Create new collection type

**Collection Type 名称**：Disease

**字段配置**：

| 字段名 | 类型 | 配置 |
|--------|------|------|
| name | Text | Required, Unique |
| nameEn | Text | - |
| alias | Text | - |
| icd10Code | Text | - |
| category | Relation | Many-to-One with DiseaseCategory |
| prevalence | Text | - |
| symptoms | Rich Text | - |
| diagnosis | Rich Text | - |
| treatment | Rich Text | - |
| prognosis | Rich Text | - |
| relatedDiseases | Relation | Many-to-Many with Disease (self) |
| hospitals | Relation | Many-to-Many with Hospital |
| charityOrgs | Relation | Many-to-Many with CharityOrganization |
| tags | Relation | Many-to-Many with Tag |
| featuredImage | Media | Single image |
| slug | UID | Based on name |

**高级设置**：
- 启用 Draft & Publish
- 启用 Internationalization (i18n)

---

### 2. DiseaseCategory（疾病分类）

**Collection Type 名称**：DiseaseCategory

**字段配置**：

| 字段名 | 类型 | 配置 |
|--------|------|------|
| name | Text | Required, Unique |
| slug | UID | Based on name, Required |
| description | Rich Text | - |
| parentCategory | Relation | Many-to-One with DiseaseCategory (self) |
| icon | Text | Default: "📋" |

**高级设置**：
- 启用 Draft & Publish
- 启用 Internationalization (i18n)

---

### 3. Hospital（医院）

**Collection Type 名称**：Hospital

**字段配置**：

| 字段名 | 类型 | 配置 |
|--------|------|------|
| name | Text | Required |
| level | Enumeration | Values: "三甲", "三乙", "二甲", "二乙" |
| province | Text | Required |
| city | Text | Required |
| address | Text | Required |
| phone | Text | - |
| website | Text | - |
| departments | Relation | One-to-Many with Department |
| specialties | Rich Text | - |
| location | JSON | Format: {"lat": number, "lng": number} |

**高级设置**：
- 启用 Draft & Publish

---

### 4. Department（科室）

**Collection Type 名称**：Department

**字段配置**：

| 字段名 | 类型 | 配置 |
|--------|------|------|
| name | Text | Required |
| hospital | Relation | Many-to-One with Hospital |
| description | Rich Text | - |
| expertDoctors | Text | - |
| appointmentUrl | Text | - |

**高级设置**：
- 启用 Draft & Publish

---

### 5. CharityOrganization（公益组织）

**Collection Type 名称**：CharityOrganization

**字段配置**：

| 字段名 | 类型 | 配置 |
|--------|------|------|
| name | Text | Required |
| type | Enumeration | Values: "患者组织", "基金会", "志愿者团队" |
| description | Rich Text | - |
| services | Rich Text | - |
| contactPerson | Text | - |
| phone | Text | - |
| email | Email | - |
| website | Text | - |
| wechat | Text | - |
| diseases | Relation | Many-to-Many with Disease |
| logo | Media | Single image |

**高级设置**：
- 启用 Draft & Publish
- 启用 Internationalization (i18n)

---

### 6. Tag（标签）

**Collection Type 名称**：Tag

**字段配置**：

| 字段名 | 类型 | 配置 |
|--------|------|------|
| name | Text | Required, Unique |
| slug | UID | Based on name, Required |
| type | Enumeration | Values: "症状", "治疗方法", "器官系统", "其他" |

**高级设置**：
- 启用 Draft & Publish

---

## API 权限配置

创建完 Content Types 后，需要配置 API 权限：

1. 导航到：Settings > Users & Permissions Plugin > Roles > Public

2. 为每个 Content Type 启用以下权限：
   - ✅ find (查询列表)
   - ✅ findOne (查询单个)
   - ❌ create (创建 - 仅管理员)
   - ❌ update (更新 - 仅管理员)
   - ❌ delete (删除 - 仅管理员)

3. 保存更改

## 验证 API

创建并配置权限后，可以通过以下 API 端点测试：

```bash
# 获取疾病列表
curl http://localhost:1337/api/diseases

# 获取医院列表
curl http://localhost:1337/api/hospitals

# 获取公益组织列表
curl http://localhost:1337/api/charity-organizations
```

## 使用 CLI 创建（可选）

也可以使用 Strapi CLI 生成 Content Types：

```bash
cd backend
pnpm strapi generate
# 选择 "api"，然后输入 Content Type 名称
```

但推荐使用 Admin UI 创建，因为更直观且不易出错。

## 下一步

完成数据模型创建后：
1. 在 Strapi 管理界面添加一些测试数据
2. 更新前端代码，使用真实的 Strapi API 替换 mock 数据
3. 实现前端的数据获取和展示逻辑
