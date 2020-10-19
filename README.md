# countDownTimer

①tutorialやるーーーーー

done



②手順おさらいーーーーーーー

まずは
ーindex.htmlで型を作る

ーstyle.cssで見栄えを整える

ーscript.jsでロジックを考えて書く⬇️



③仕組み理解ーーーーーー

ーconst moneyBack = "16 Nov 2020";　でカウントダウンの日付を代入する

ーfunction countDown()の　中身を作る
  ーカウントダウン終了日のミリ秒を定義する
  const moneyBackDate = new Date(moneyBack);
  ー現在のミリ秒を定義する　
  const currentDate = new Date();

  ー終了日　引く　今で差分のミリ秒をtotalSecondsに定義する
  const totalSeconds =new Date(moneyBackDate - currentDate) /1000;

  ーいい感じにdays,hours,mins,secondsを定義する

  ーHTMLのDOMから daysEl ...みたいな感じでそれぞれの定義する

  ーあとはそのdayElの中身に先ほど定義した　days,hours,mins,secondsをいれるだけ
  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minsEl.innerHTML = mins;
  secondsEl.innerHTML = seconds;




④If自分が０ー＞１で作るならどう作ればいいかをーーーーーー
  ー想像＆手順

  ーー何ができればいいのかを言葉で定義する
  ーー実際にどんな感じなのかをデザインを描いてみる
  ーー実際に動いているところを想像してから、その動作の全体を言葉で細かく分割していく
  ーー分割したものをプログラミングでどのように実装するかを考える。


