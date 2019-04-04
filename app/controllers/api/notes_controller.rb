class Api::NotesController < ApplicationController
  def index
    collection = Note.all
    @notes = collection.select{|note| note.author_id == current_user.id}
  end

  def show
    @note = Note.find(params[:id])
    if @note && logged_in? && @note.author_id == current_user.id
      render :show
    else
      render @note.errors.full_messages, status: 404
    end
  end

  def create
    @note = Note.new(notes_params)
    if logged_in? && @note.save
      render :show
    else
      render @note.errors.full_messages, status: 404
    end
  end

  def update
    @note = Note.find(params[:id])
  
    if @note && logged_in? && @note.author_id == current_user.id
      @note.update(notes_params)
      render :show
    else
      render @note.errors.full_messages, status: 404
    end
  end

  def destroy
    @note = Note.find(params[:id])
    if @note && current_user.id == @note.author_id
      @note_id = @note.id;
      @note.destroy
      render json: {id: @note_id}
    else
      render @note.errors.full_messages, status: 404
    end
  end

  def notes_params
    params.require(:note).permit(:title, :body, :author_id, :notebook_id)
  end
end