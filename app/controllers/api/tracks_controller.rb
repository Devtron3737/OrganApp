class Api::TracksController < ApplicationController
  def index
    render json: Track.all
  end

  def create
    track = Track.new(track_params)

    if track.save
      render json: Track.all
    else
      render json: {errors: track.errors.full_messages, status: 422}
    end
  end

  def destroy
    track = Track.find(params[:id])

    if track.delete
      render json: {}
    else
      render json: {errors: track.errors.full_messages}
    end
  end

  private

  TRACK_FILTER = {roll: [:timeSlice, notes: []]}

  def track_params
    params.require(:trackAttrs).permit(:name, TRACK_FILTER)
  end
end
