class Api::NotebooksController < ApplicationController
  def index
    collection = Notebook.all
    @notebooks = collection.select{|book| book.author_id == current_user.id}
    if @notebooks.length == 0
      new_nb = Notebook.new(author_id: current_user.id, title: "My first notebook")
      new_nb.save
      @notebooks = collection.select{|book| book.author_id == current_user.id}
    end
  end

  def create
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
      @nb_id = @notebook.id;
      @notebook.destroy
      render json: {id: @nb_id}
    else
      render @notebook.errors.full_messages, status: 404
    end
  end

  
  def notebook_params
    params.require(:notebook).permit(:title, :author_id)
  end

end