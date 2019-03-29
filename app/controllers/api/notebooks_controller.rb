class Api::NotebooksController < ApplicationController
  def index
    collection = Notebook.all
    @notebooks = collection.select{|book| book.author_id == current_user.id}
  end

  def new
    @notebook = Notebook.new(notebook_params)
    if @notebook && logged_in?
      @notebook.save!
      render :show
    else
      render @notebook.errors.full_messages, status: 400
    end
  end

  def show
    @notebook = Notebook.find(params[:id])
    if @notebook && logged_in? && @notebook.author_id == current_user.id
      render :show
    else
      render @notebook.errors.full_messages, status: 404
    end
  end

  def edit
    @notebook = Notebook.find(params[:id])
    if @notebook && logged_in? && @notebook.author_id == current_user.id
      render :edit
    else
      render @notebook.errors.full_messages, status: 404
    end
  end

  def update
    @notebook = Notebook.find(params[:id])
    if @notebook && logged_in? && @notebook.author_id == current_user.id
      @notebook.update(notebook_params)
      render :show
    else
      render @notebook.errors.full_messages, status: 404
    end
  end
  
  def destroy
    @notebook = Notebook.find(params[:id])
    if @notebook && current_user.id == @notebook.author_id
      @notebook.destroy
      render :index
    else
      render @notebook.errors.full_messages, status: 404
    end
  end

  private
  def notebook_params
    params.require(:notebook).permit(:id, :title, :author_id, :created_at, :updated_at)
  end

end