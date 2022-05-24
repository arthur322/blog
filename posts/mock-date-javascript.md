---
date: '2022-05-24'
title: Como fazer o mock do Date no Javascript
tags: ['posts', 'til']
---

Uma implementação rápida e sem dependências para fazer o mock do objeto Date em Javascript.

Testado com jest versão `24` em um código que utilizava o `moment`.

```javascript
const MOCKED_DATE = new Date(2022, 2, 22);
jest.spyOn(Date, "now").mockImplementation(() => {
	return MOCKED_DATE;
});
```

