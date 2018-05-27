# vue--
# OnlineShop
## Vue.js 线上数码商城
###  项目组成：
#### 商品页：<br/> 
##### 布局：<br> 
* flex左右布局，左侧为商品类别，右侧是轮播图和商品购买。
##### 数据：<br>
* 请求方式：GET<br>
* 请求地址：'/api/getNewsList'<br/>
* 数据参数：<br/>
"getNewsList": [
    {
      "id": 1,
      "title": "新闻条目1新闻条目1新闻条目1新闻条目1",
      "url": "http://starcraft.com"
    },
    {
      "id": 2,
      "title": "新闻条目2新闻条目2新闻条目2新闻条目2",
      "url": "http://warcraft.com"
    },
    {
      "id": 3,
      "title": "新闻条3新闻条3新闻条3",
      "url": "http://overwatch.com"
    },
    {
      "id": 4,
      "title": "新闻条4广告发布",
      "url": "http://hearstone.com"
    }
  ],<br/> 
#### 商品详情页：
##### 布局：<br> 
* 上下布局：
  * 上：包含综合评分、服务态度、商品评分等星级评价。<br/>
  * 下：顾客的所有评价，分别为全部、满意、不满意。<br/>
##### 数据：<br>
* 请求方式：GET<br>
* 请求地址：http://ustbhuangyi.com/sell/api/ratings<br/>
* 数据参数：<br/>
    `'{`'<br/>
      `'"username": "3******c",`'<br/>
     `' "rateTime": 1469281964000,`'<br/>
     `' "foods": [`'<br/>
        `'{`'<br/>
          `'"rateType": " 0",`'<br/>
         `' "price": 10,`'<br/>
          `'"oldPrice": "",`'<br/>
          `'"text": "",`'<br/>
          `'"sellCount": 229,`'<br/>
          `'"rating": 100,<br>`'<br/>
      `'}`'<br/> 
    `']`'<br/> 
 `'}`'<br/> 
#### 结算清单页：
##### 布局：<br> 
* 上下布局：
  * 上：包含综合评分、服务态度、商品评分、商家收藏等星级评价。<br/>
  * 下：公告活动、商家实景、商家信息。<br/>
##### 数据：<br>
* 请求方式：GET<br>
* 请求地址：http://ustbhuangyi.com/sell/api/ratings<br/>
* 数据参数：<br/>
    `'{`'<br/>
      `'"username": "3******c",`'<br/>
     `' "rateTime": 1469281964000,`'<br/>
     `' "foods": [`'<br/>
        `'{`'<br/>
          `'"rateType": " 0",`'<br/>
         `' "price": 10,`'<br/>
          `'"oldPrice": "",`'<br/>
          `'"text": "",`'<br/>
          `'"sellCount": 229,`'<br/>
          `'"rating": 100,<br>`'<br/>
      `'}`'<br/> 
    `']`'<br/> 
 `'}`'<br/> 

## 运行方法：<br/> 
* npm instaill<br/> 
* cd sell<br/>  
* npm run dev
