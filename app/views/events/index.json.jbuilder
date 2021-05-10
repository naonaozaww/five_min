json.array!(@events) do |event|
  #if event.event_id == 1
  #json.extract! event, :id, :title, :body
  json.start event.start_date
  json.end event.end_date
  # formatが無くても普通に飛べる(URLは変わる)
  json.url event_url(event, format: :html)
  #else
  # 
  #  json.extract! event, :id, :title, :body
  #  json.start "#{event.start_date.hour}:#{event.start_date.min}"
  #  json.end "#{event.end_date.hour}:#{event.end_date.min}"
  #  json.dow [ 1, 2, 3, 4 ]
  #  # formatが無くても普通に飛べる(URLは変わる)
  #  json.url event_url(event, format: :html)
  #end
end
