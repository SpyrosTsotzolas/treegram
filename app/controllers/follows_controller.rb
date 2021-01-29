class FollowsController < ApplicationController

  def create
    @user = User.find(params[:user_id])
    current_user.follow(@user)
    redirect_to(current_user)
  end

  def destroy
    @rel = User.find(params[:id])
    current_user.unfollow(@rel)
    redirect_to(current_user)
  end

end
