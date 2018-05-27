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
      "url": "starcraft.com"<br/>
    },<br/>
    {<br/>
      "id": 2,<br/>
      "title": "新闻条目2新闻条目2新闻条目2新闻条目2",<br/>
      "url": "warcraft.com"<br/>
    },<br/>
    {<br/>
      "id": 3,<br/>
      "title": "新闻条3新闻条3新闻条3",<br/>
      "url": "overwatch.com"<br/>
    },<br/>
    {<br/>
      "id": 4,<br/>
      "title": "新闻条4广告发布",<br/>
      "url": "hearstone.com"<br/>
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
#### 结算清单弹窗：
##### 布局：<br> 
* 上下布局：
  * 上：购买商品型号、价格、有效时间。<br/>
  * 下：支付方式选择（多种银行支付）。<br/>
##### 数据：<br>
* 请求方式：GET<br>
* 请求地址：/api/getOrderList<br/>
* 数据参数：<br/>
      products: [<br/>
        {<br/>
          label: '数据统计',<br/>
          value: 0<br/>
        },<br/>
        {<br/>
          label: '数据预测',<br/>
          value: 1<br/>
        },<br/>
        {<br/>
          label: '流量分析',<br/>
          value: 2<br/>
        },<br/>
        {<br/>
          label: '广告发布',<br/>
          value: 3<br/>
        }<br/>
      ],<br/>
      tableHeads: [<br/>
        {<br/>
          label: '订单号',<br/>
          key: 'orderId'<br/>
        },<br/>
        {<br/>
          label: '购买产品',<br/>
          key: 'product'<br/>
        },<br/>
        {<br/>
          label: '版本类型',<br/>
          key: 'version'<br/>
        },<br/>
        {<br/>
          label: '有效时间',<br/>
          key: 'period'<br/>
        },<br/>
        {<br/>
          label: '购买日期',<br/>
          key: 'date'<br/>
        },<br/>
        {<br/>
          label: '数量',<br/>
          key: 'buyNum'<br/>
        },<br/>
        {<br/>
          label: '总价',<br/>
          key: 'amount'<br/>
        }<br/>
      ]<br/> 

## 运行方法：<br/> 
* npm instaill<br/> 
* cd vueDemo<br/>  
* npm run dev
