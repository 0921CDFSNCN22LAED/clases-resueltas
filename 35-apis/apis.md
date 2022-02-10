# Movies APIS

```js
const {count,rows} = await Genre.findAndCountAll({
    limit:5
});

const response = {
  meta: {
      status:200
      url:"/api/genres/"+req.params.id
      total: count
  },
  data: rows,
};
```

## Genres

`/api/genres`
