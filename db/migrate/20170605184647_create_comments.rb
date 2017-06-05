class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.string :comment
      t.references :user, foreign_key: true
      t.integer :blog

      t.timestamps
    end
  end
end
