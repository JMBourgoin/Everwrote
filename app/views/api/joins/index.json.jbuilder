@joins.each do |join|
  json.set! join.id do
    json.extract! join, :id, :tag_id, :note_id
  end
end