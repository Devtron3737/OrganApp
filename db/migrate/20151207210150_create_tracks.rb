class CreateTracks < ActiveRecord::Migration
  def change
    create_table :tracks do |t|
      t.string :name, null: false, unique: true
      t.json :roll

      t.timestamp
    end
  end
end
