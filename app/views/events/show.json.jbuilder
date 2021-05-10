json.array!(@events) do |event|
  json.extract! event, :id, :title, :body
  json.start event.start_date
  json.end event.end_date
  # formatが無くても普通に飛べる(URLは変わる)
  json.url event_url(event, format: :html)
end
