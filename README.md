# AMSAW

Account Management System for ALWAYS(ALways World AtuonomY Server): World of Warcraft, (ALWAYS世界-自治服务器)魔兽世界账户管理系统

AMSAW 是一个跑在我们自治服务器上的一个TrinityCore 端账户管理系统, 主要用于方便进行测试和提交问题, 我们将在其上开发如下功能, 且当前进度如下所示

[X] 账户注册
[ ] 登录并查询账户下的角色
[ ] bug提交通道
[ ] 积分兑换系统
[ ] 自助工具: 发放物品和修改角色相关信息

## api

AMSAM采用前后端分离方式进行开发, 其api还可以供给其他客户端使用, 例如自己开发的wow插件, 从而实现对客户端的改造

其主要采用 spring boot 构建, 运行环境为 java8环境, 使用的整合框架为dandelion-seed

其使用的数据库为 mysql, 可与Trinity Core 的数据库架设于同一实例

## web前端

AMSAM主要采用vue.js, vant mobileui进行开发, 目前主要保证手机端浏览
