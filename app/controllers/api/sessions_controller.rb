class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user
            login(@user)
            render :show
        else
            render json: ["Invalid email/password"]
        end
    end

    def destroy
        @user = current_user
        if @user
            logout!
            render :show
        else
            render json: ["There is no user currently signed in"], status: 404
        end
    end
end