import { v4 } from 'uuid'; 

export default{
  "success": true,
  "data": {
    "tea": [
      {
        "id": v4(),
        "name": "Pu'er",
        "origin": "Yunnan Province",
        "price": 5,
        "color": "Dark",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/%22Da_Yi_Gong_Tuo%22_Pu-erh_shou_cha%2C_2010.jpg/220px-%22Da_Yi_Gong_Tuo%22_Pu-erh_shou_cha%2C_2010.jpg",
        "description": "Pu'er or pu-erh[1] is a variety of fermented tea traditionally produced in Yunnan Province, China. In the context of traditional Chinese tea production terminology, fermentation refers to microbial fermentation (called 'wet piling'), and is typically applied after the tea leaves have been sufficiently dried and rolled.[2] As the tea undergoes controlled microbial fermentation, it also continues to oxidize, which is also controlled, until the desired flavors are reached. This process produces tea known as 黑茶 hēichá (lit. 'black tea') (which is different from the English-language black tea that is called 红茶 hóngchá (lit. 'red tea') in Chinese). Pu'er falls under a larger category of fermented teas commonly translated as dark teas. ",
        "stock": 130
      },
      {
        "id": v4(),
        "name": "Genmaicha",
        "origin": "Hokkaido",
        "price": 2,
        "color": "Green",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/74/Genmaicha.JPG",
        "description": "Genmaicha (玄米茶, brown rice tea) is a Japanese brown rice green tea consisting of green tea mixed with roasted popped brown rice.[1] It is sometimes referred to colloquially as popcorn tea because a few grains of the rice pop during the roasting process and resemble popcorn, or as people's tea, as the rice served as a filler and reduced the price of the tea, making it historically more available for poorer Japanese. Today all segments of society drink genmaicha.[2] It was also used by people fasting for religious purposes or who found themselves to be between meals for long periods of time.[2] ",
        "stock": 130
      }
    ]
  }
}