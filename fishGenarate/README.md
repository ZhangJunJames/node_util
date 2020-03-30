# 说明

这是个代码生成器
- 生成component类文件
- 在entity中生成component的调用接口

## 执行

``` 
npm install
npm run start
```

## 相关文件

ecs文件夹是ecs框架，基本可用。


### conf.json

- 配置文件生成的路径
- 待component列表

### hbs

模板文件，使用handlebars
- Components.hbs 
- Entity.hbs 

## 目前状况

基本完成框架，但是感觉ecs还有很多坑，规范也没真正定下来，性能可能有问题。弃坑