class TestsController < ApplicationController
  # Event用やけどとりまここに書く
  def new
    @events = Event.new
  end
  def create
    # まずはnewからパラメータでイベントを作成
    @events = Event.new(event_params)
    @events.save
    # モード選択の結果からイベントを作成
    # 空き時間が埋まるまで処理を繰り返す
    mode_event = Test.where(name: params[:name]).order("RANDOM()").first
    @event = Event.new(title: mode_event.title...)
    # 繰り返し処理が終わったら画面を表示
    redirect_to event_path(URL)
    # events/:id(show)では同様のオリジナル番号を持つデータを全て出力する
  end

  private

  def event_params
    params.require(:event).permit()
  end

  def set_event_number
    # ランダムのイベントナンバーを発行する
  end
end
