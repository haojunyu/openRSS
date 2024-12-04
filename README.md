
本项目是自己研究学习 [RSSHub](https://github.com/DIYgod/RSSHub) 而构建的仓库。

```
npm install
npm run dev
```

```
open http://localhost:3000
```

DONE:
* 基于hono启动服务 
* 添加config和logger模块 
* 集成 vitest

TODO:
* error错误   
* 集成 app(index.ts)，启动一个场景  `pnpm vitest lib/errors/index.test.ts`
* 完善中间件


DONE:
```bash
pnpm vitest lib/registry.test.ts
pnpm vitest lib/app.test.ts
pnpm vitest lib/utils/wait.test.ts
pnpm vitest lib/utils/helpers.test.ts
```


TODO:
```bash
pnpm vitest lib/utils/wechat-mp.test.ts
pnpm vitest lib/pkg.test.ts
pnpm vitest lib/utils/got.test.ts
pnpm vitest lib/middleware/header.test.ts
pnpm vitest lib/errors/index.test.ts
```



