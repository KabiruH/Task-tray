# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "start tasks"

10.times do
    priority = ['high', 'medium', 'low'][rand(1..3)]
    Todo.create(
      title: Faker::Lorem.sentence(word_count: 3),
      description: Faker::Lorem.paragraph(sentence_count: 2),
      priority: { "high" => 3, "medium" => 2, "low" => 1 }[priority]
    )
  end
  
puts "end tasks"