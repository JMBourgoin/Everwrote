class Api::TagsController < ApplicationController
    def index
        collection = Tag.all
        @tags = collection.select{|tag| tag.author_id == current_user.id}
    end

    def show
        @tag = tag.find(params[:id])
        if @tag && logged_in? && @tag.author_id == current_user.id
            render :show
        else
            render @tag.errors.full_messages, status: 404
        end
    end

    def create
        @tag = Tag.new(tags_params)
        if @tag.save!
            render :show
        else
            render json: @tag.errors.full_messages, status: 402
        end
    end

    def update
      @tag = tag.find(params[:id])

      if @tag && logged_in? && @tag.author_id == current_user.id
        @tag.update(tags_params)
        render :show
      else
        render @tag.errors.full_messages, status: 404
      end
    end

     def destroy
       @tag = tag.find(params[:id])
       if @tag && current_user.id == @tag.author_id
         @tag_id = @tag.id;
         @tag.destroy
         render json: {id: @tag_id}
       else
         render @tag.errors.full_messages, status: 404
       end
     end
    
    def tags_params
     params.require(:tag).permit(:name, :author_id)
    end
end