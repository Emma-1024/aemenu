function CreateBasketListJson(){
  var basketListJSON = {
    "西红柿炒鸡蛋": [
      { ingredientName: "西红柿", ingredientNum: "2个" },
      { ingredientName: "鸡蛋", ingredientNum: "4个" }
    ],
    "爆炒土豆丝": [
      {ingredientName: "土豆", ingredientNum: "3个"}
    ]
  }
  return basketListJSON
}

// basketListJSON = [
//   {"itemName": "西红柿炒鸡蛋",
//   "ingredients": [
//     { ingredientName: "西红柿", ingredientNum: "2个" },
//     { ingredientName: "鸡蛋", ingredientNum: "4个" }
//   ]},
//   "爆炒土豆丝": [
//     {ingredientName: "土豆", ingredientNum: "3个"}
//   ]
// ]

export default CreateBasketListJson
