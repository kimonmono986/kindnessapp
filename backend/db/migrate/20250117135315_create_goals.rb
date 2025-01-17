class CreateGoals < ActiveRecord::Migration[8.0]
  def change
    create_table :goals do |t|
      t.string :title
      t.text :description

      t.timestamps
    end
  end
end
