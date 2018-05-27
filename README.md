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
"getNewsList": [<br/>
    {<br/>
      "id": 1,<br/>
      "title": "新闻条目1新闻条目1新闻条目1新闻条目1",<br/>
      "url": "http://starcraft.com"<br/>
    },<br/>
    {<br/>
      "id": 2,<br/>
      "title": "新闻条目2新闻条目2新闻条目2新闻条目2",<br/>
      "url": "http://warcraft.com"<br/>
    },<br/>
    {<br/>
      "id": 3,<br/>
      "title": "新闻条3新闻条3新闻条3",<br/>
      "url": "http://overwatch.com"<br/>
    },<br/>
    {<br/>
      "id": 4,<br/>
      "title": "新闻条4广告发布",<br/>
      "url": "http://hearstone.com"<br/>
    }<br/>
  ],<br/> 
#### 商品详情页：
##### 布局：<br> 
* 上下布局：
  * 上：产品介绍，产品相关选购。<br/>
  * 下：穿品说明。<br/>
##### 数据：<br>
* 请求方式：GET<br>
* 请求地址：'/api/createOrder'<br/>
* 数据参数：<br/>
  "getOrderList": {<br/>
    "list": [<br/>
      {<br/>
        "orderId": "ddj123",<br/>
        "product": "数据统计",<br/>
        "version": "高级版",<br/>
        "period": "1年",<br/>
        "buyNum": 2,<br/>
        "date": "2016-10-10",<br/>
        "amount": "500元"<br/>
      },<br/>
      {<br/>
        "orderId": "yuj583",<br/>
        "product": "流量分析",<br/>
        "version": "户外版",<br/>
        "period": "3个月",<br/>
        "buyNum": 1,<br/>
        "date": "2016-5-2",<br/>
        "amount": "2200元"<br/>
      },<br/>
      {<br/>
        "orderId": "pmd201",<br/>
        "product": "广告发布",<br/>
        "version": "商铺版",<br/>
        "period": "3年",<br/>
        "buyNum": 12,<br/>
        "date": "2016-8-3",<br/>
        "amount": "7890元"<br/>
      }<br/>
    ]<br/>
  }<br/> 
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
