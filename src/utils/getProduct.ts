export type Product = {
  id: number
  name: string
  price: string
  ingredients?: string
  url: string
}
export const getProduct = (url: string) => {
  const dummyProduct: Product = {
    id: 1,
    name: 'ザ・タイムR アクア / 単体 / 200ml',
    price: '4,400',
    ingredients:
      '<医薬部外品>トラネキサム酸,グリチルリチン酸ジカリウム,アセチル化ヒアルロン酸ナトリウム,dl-α-トコフェロール2-L-アスコルビン酸リン酸ジエステルカリウム塩,シャクヤクエキス,精製水,ジプロピレングリコール,濃グリセリン,ポリオキシエチレン(14)ポリオキシプロピレン(7)ジメチルエーテル,ポリオキシエチレン(17)ポリオキシプロピレン(4)ジメチルエーテル,ソルビット液,エデト酸二ナトリウム,クエン酸,ポリオキシエチレンポリオキシプロピレンデシルテトラデシルエーテル,2-メタクリロイルオキシエチルホスホリルコリン・メタクリル酸ブチル共重合体液,1,3-ブチレングリコール,クエン酸ナトリウム,ピロ亜硫酸ナトリウム,ノバラエキス,マヨラナエキス,テンチャエキス,フェノキシエタノール',
    url: 'https://www.cosme.com/products/detail.php?product_id=51819',
  }
  return dummyProduct
}