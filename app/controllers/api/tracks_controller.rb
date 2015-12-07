class TracksController < ApplicationController
  def index
    render json: Track.all
  end

  def create
    track = Track.new(track_params)

    if track.save
      render json: Track.all
    else
      render json: {errors: track.errors.full_messages}
    end
  end

  def destroy
    track = Track.find(params[:id])

    if track.delete
      render: {}
    else
      render json: {errors: track.errors.full_messages}
    end
  end

  private

  def track_params
    params.permit(:track, :name)
  end
end
