class Api::AlbumsController < ApplicationController

  def index
    @albums = (
      if params[:user_id]
        Album.where(user_id: params[:user_id])
      else
        Album.all
      end
    )
  end

  def show
    @album = Album.find_by(id: params[:id])
    if @album
      render :show
    else
      render json: ["Invalid album id"], status: 404
    end
  end

  def create
    @album = Album.new(album_params)
    # @album.user_id = current_user.id

    if @album.save
      # params[[:photoIds].each do |id|
      #   AlbumPhotos.new(album_id: @album.id, photo_id: id )


      render :show
    else
      render json: ["Creating album error"], status: 422
    end
  end

  def destroy
    @album = current_user.albums.find_by(id: params[:id])
    if @album
      @album.destroy
      render :show
    else
      render json: ["Error deleting album."], status: 404
    end

  end

  private
  def album_params
    params.require(:album).permit(:user_id, :description, :name, :cover_photo)
  end


end
