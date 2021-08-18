{
  // id外し
  const  monndai= document.getElementById("monndai");

  //文字一覧
  const mojis = [
    "red",
    "blue",
    "pink",
    "white",
    "black",
    "yellow",
    "green",
    "orange",
    "brown",
    "gold",
    "selver",
    "purple"
  ]
  // 問題提示関数化
  function sinnmoji() {
     // 出題文字決定
     moji = mojis.splice(Math.floor(Math.random() * mojis.length), 1)[0];
     //問題部分に文字を表示
     monndai.textContent = moji;
     //文字番号戻し  
     mojibanngou = 0;
  }
  
  // 文字番号
  let mojibanngou = 0;    
  // 文字の変数設定
  let moji;
  // スタート時間の変数設定
  let sutato;
  //クッリクバグ変数設定
  let bagu = false;
  
  // 最初の問題出題
  document.addEventListener("click",() =>{
    //クリックバグ修正
    if(bagu === true){
      return;
    }
    // //クリックバグ対応
    bagu = true;
    // 問題出題
    sinnmoji();
    // スタート時間計測
    sutato = Date.now();
  })
   

  // キーが押されたら
  document.addEventListener("keydown", e => {
    //押したキーと文字が違ったら
    if(e.key !== moji[mojibanngou]){
      return;
    }

    /* // 押したキーと文字が一緒だったらバージョン
    if(e.key === moji[mojibanngou]){ */

      // 次の文字に行く
      mojibanngou++;
      //文字番号分＿を入れて、文字番号を引いた数文字を後ろから表示して残りの文字を表示
      monndai.textContent = "_".repeat(mojibanngou) + moji.substring(mojibanngou);
      
      // 全文字打ち終えたら
      if(mojibanngou === moji.length){
        
        //終了画面
        if(mojis.length === 0){
          
          // 結果発表関数化
          function sinnkekka() {
            // 時間算出
            const jikann = ((Date.now() - sutato) / 1000).toFixed(2);
            // id外し
            const kekka = document.getElementById("kekka");
            // 結果発表表示
            kekka.textContent = `Finished! ${jikann} seconds!`;
          }
          //結果発表
          sinnkekka();
          return;
        }
        // 次の問題へ
        sinnmoji();
      }
  });
}