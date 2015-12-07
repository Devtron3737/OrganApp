# == Schema Information
#
# Table name: tracks
#
#  id    :integer          not null, primary key
#  name  :string           not null
#  track :json             not null
#

class Track < ActiveRecord::Base
    validates :name, presence: true, uniqueness: true
    validates :track, presence: true
end
