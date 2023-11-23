# frozen_string_literal: true

require "simplecov"

SimpleCov.start do
  enable_coverage :branch
  add_filter "/test/"
  add_group "Library", "/lib"
  10.times { |i| add_group "Test #{i + 1}", "/lib" } if ENV["TEST_LONG_LIST_OF_GROUPS"]
end

SimpleCov.formatters = [
  SimpleCov::Formatter::TailwindFormatter
]

$LOAD_PATH.unshift File.expand_path("../lib", __dir__)
require "minitest/autorun"
require "minitest/pride"
require "mocha/minitest"
