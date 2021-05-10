// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery3
//= require popper
//= require bootstrap-sprockets
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require jquery
//= require moment
//= require fullcalendar
//= require_tree .

$(function () {
  // 画面遷移を検知
  $(document).on('turbolinks:load', function () {
      if ($('#calendar').length) {

          function Calendar() {
              return $('#calendar').fullCalendar({
              });
          }
          function clearCalendar() {
              $('#calendar').html('');
          }

          $(document).on('turbolinks:load', function () {
              Calendar();
          });
          $(document).on('turbolinks:before-cache', clearCalendar);
          //events: '/events.json', 以下に追加
          $('#calendar').fullCalendar({
              //themeSystem: 'bootstrap',
              themeSystem: 'bootstrap4',
              timeZone: 'Asia/Tokyo',
              events: '/events.json',
              //events: [
              //    {
              //    title:"実験に伴う変更",
              //    start:"2021-03-30T05:20:00",
              //    end:"2021-03-30T06:20:00",
              //    }],
              //カレンダー上部を年月で表示させる
              // ボタンレイアウトのtitleに関する内容
              // -------
              bootstrapFontAwesome: {
              //  close: 'fa-times',
                prev: 'fa-chevron-left',
                next: 'fa-chevron-right',
              //  prevYear: 'fa-angle-double-left',
              //  nextYear: 'fa-angle-double-right'
              },
              height: window.innerHeight - 100,
              windowResize: function () {
                 $('#calendar').fullCalendar('option', 'height', window.innerHeight - 100);
               },
              // ---------
              // カレンダーの参照可能範囲を現在から1ヶ月後までに制限
              // boardに開始日と終了日を登録して値を渡す
              // (渡さないと後で参照する際にnowDate起点になってしまう)
              // +1daysすることで表示がちょうど1ヶ月になる(謎)
              // イベント表示のバグもこれで解決できるはず
              validRange: function(nowDate) {
                return {
                  start: '2021-05-01',
                  end: '2021-06-01'
                };
              },
              titleFormat: 'YYYY年 M月',
              // trueを選択すると常に6週分の表示になる
              fixedWeekCount: false,
              // 終日の表示をなくす(現在の考えでは不要)
              allDaySlot: false,
              // 前月・翌月分の日付のレンダリングを制御
              // イベントもレンダリングされる
              showNonCurrentDates: true,
              //曜日を日本語表示
              // 曜日はここで好きに変えられる
              dayNamesShort: ['日', '月', '火', '水', '木', '金', '土'],
              //ボタンのレイアウト
              // カレンダー上部の設定
              // weekとdayが動作しない件は検証が必要
              // today,prev,next,prevYear,nextYearは動作確認済み
              // prev,nextは週、日の表示で使えそう
              header: {
                  left: 'prev,next today',
                  center: 'title',
                  right: 'month,agendaWeek,agendaDay,listMonth'
              },
              defaultView: 'month',
              //終了時刻がないイベントの表示間隔
              defaultTimedEventDuration: '03:00:00',
              buttonText: {
                  //prev: '前',
                  //next: '次',
                  prevYear: '前年',
                  nextYear: '翌年',
                  today: '今日',
                  month: '月',
                  week: '週',
                  day: '日'
              },
              // eventLimit: true, // allow "more" link when too many events
              // Drag & Drop & Resize
              // falseにすると予定をドラッグ&ドロップ出来なくなる
              // trueの場合でも動かせるだけでレコードの中身は更新されない
              // →ページを更新すると動かした予定も戻る
              editable: false,
              // 日付のリンクを作成
              navLinks: true,
              //イベントの時間表示を２４時間に
              // 頭の0不要ならHは一つ省略してもいいかな
              timeFormat: "HH:mm",
              //イベントの色を変える
              // イベントの帯のカラー
              // イベント毎に変えたいから変数いけるか試す
              eventColor: '#87cefa',
              //イベントの文字色を変える
              // イベントのフォントのカラー
              // ここは統一で問題無いと思う
              eventTextColor: '#000000',
              eventRender: function(event, element) {
                  // イベントの文字の大きさ
                  element.css("font-size", "0.8em");
                  // イベント内容のpadding
                  element.css("padding", "5px");
              }
          });
      }
  });
});
