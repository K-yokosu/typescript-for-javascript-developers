export {};

const kansu = (): number => 43;

let numberAny: any = kansu();
let numberUnkonown: unknown = kansu();

let sumAny = numberAny + 10;

// typeofを使って特定の型であることを確認することをタイプ（型）ガード
if(typeof numberUnkonown === 'number'){
  let sumUnknown = numberUnkonown + 10;
}
