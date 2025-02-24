<h1 align="center">USER FE</h1>
###

### Nguyên tắc Khi đặt tuyến đường trong TechAssess
- tất cả tuyến đường đều đặt trong folder pages
- index.vue đại diện cho tuyến đường khớp với thư mục hiện tại (vd: pages/post/inđex.vue tương đương /post) và tên thư mục phải trùng với tên tuyến đường
- [path].vue đại diện cho dynamic routing (vd: /papes/post/[id].vue tương đương /post/:id) và tên file phải trùng với tên path
- other:
  + pages/post/:postId/users tương đương /post/( [postId].vue và folder users/index.vue)
**đối với tailwindcss thì thêm tiền tố tw- để css bằng tailwind**