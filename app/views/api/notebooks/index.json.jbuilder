@notebooks.each do |notebook|
  json.set! notebook.id do
    json.extract! notebook, :id, :title, :author_id, :created_at, :updated_at
  end
end