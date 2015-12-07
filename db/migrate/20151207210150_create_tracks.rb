class CreateTracks < ActiveRecord::Migration
  def change
    create_table :tracks do |t|
      t.string :name, null: false, unique: true
      t.json :track, null: false

      t.timestamp
    end
  end
end
